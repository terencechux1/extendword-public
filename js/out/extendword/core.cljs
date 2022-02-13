(ns extendword.core
    (:require
      [reagent.core :as r]
      [reagent.dom :as d]
      [goog.string :as gstring]
      [goog.events :as gev]
      [extendword.words :as w]
      [rand-cljc.core :as rng]
      [clojure.set :as clset]))

(def display (r/atom "none"))
(def seconds (r/atom 0))
(def handler (r/atom nil))
(def puzzle (r/atom (rand-int 1000000)))
(def is-running (r/atom false))
(def corrects (r/atom []))
(def wrongs (r/atom []))
(def passes (r/atom []))
(def qlist (r/atom []))
(def answer (r/atom ""))
(def position (r/atom 0))

(def allset (set w/all))

(defn stop-timer []
  (js/clearInterval @handler))

(defn start-game []
  (let [r (rng/rng @puzzle)]
    (reset! is-running true)
    (reset! wrongs [])
    (reset! corrects [])
    (reset! passes [])
    (reset! qlist (->> (repeatedly 30 #(rng/rand-int r (count w/questions)))
                       (map #(w/questions %))
                       vec))
    (reset! seconds 30)
    (reset! position 0)
    (reset! handler (js/setInterval #(swap! seconds (fn [s] (- s (/ 1 10)))) 100))
    (.focus (.getElementById js/document "thebox"))))

(defn stop-game []
  (js/clearInterval @handler)
  (reset! is-running false))

(defn start-new-random-game []
  (reset! puzzle (rand-int 1000000))
  (start-game))

(defn handle-enter []
  (when @is-running
    (let [word (str (first (get @qlist @position)) @answer)]
      (if (and (> (count @answer) 1) (allset word))
        (swap! corrects conj word)
        (swap! wrongs conj [word (rand-nth (second (get @qlist @position)))]))
      (swap! position inc)
      (reset! answer ""))))

(defn handle-pass []
  (when @is-running (swap! passes conj [(first (get @qlist @position)) (rand-nth (second (get @qlist @position)))])
                    (swap! position inc)
                    (swap! seconds #(- % 1))
                    (reset! answer "")))

(defn handle-key-down [key]
  (case key
    "Enter" (handle-enter)
    "Control" (handle-pass)))

;; -------------------------
;; Views

(defn puzzle-num []
  [:div [:p "Enter a puzzle number or just use the random one generated for you: "
         [:input {:type      "number"
                  :value     @puzzle
                  :disabled  @is-running
                  :on-change #(reset! puzzle (js/parseInt (-> % .-target .-value)))}]
         ]
   [:p
    ;[:button {:on-click #(reset! puzzle (rand-int 1000000))} "Generate random puzzle"]
    [:button.button-9 {:on-click start-game
                       :disabled @is-running :style {:margin-right "10%" :width "20%"}} "Start"]
    [:button.button-9 {:on-click start-new-random-game
                       :disabled @is-running :style {:margin-right "10%" :width "40%"}} "Start random"]
    [:button.button-9 {:on-click #(reset! display "block") :style {:width "16%"}} "Help"]]])

(defn timer []
  [:div (gstring/format "%.1f" @seconds)])

(defn the-word []
  [:div
   [:table {:style {:font-size "30px" :border-collapse "collapse" :width "520px" :table-layout "fixed"}}
    [:tr
     [:td {:style {:width "200px"  :border-collapse "collapse" :background-color :blue :color :white}} (first (get @qlist @position))]
     [:td {:style {:width "160px"  :border-collapse "collapse"}}
      [:input {:type      "text"
               :id "thebox"
               :size "6"
               :value     @answer
               :on-change #(reset! answer (-> % .-target .-value))
               :style     {:font-size "30px" :background-color "#F0FFFF" :border "none"}}]]
     [:td {:style {:width "160px" :border-collapse "collapse"}}
      [:button.button-9 {:style {:height "30px" :font-size "80%"} :on-click #(do (handle-pass)
                                                                                 (.focus (.getElementById js/document "thebox")))
                         :disabled (not @is-running)} "Pass"]]]]])

(defn dashboard []
  [:div {:style {:margin-bottom "100px" :width "100%"}}
   [:div {:style {:float "left" :width "33%"}}
    [:ol {:style {:line-height "17px"}} (for [x @corrects] [:li {:style {:list-style-type "none" :color "#50C878" :font-size "11px"}} (str x " is valid")])]]
   [:div {:style {:float "left" :width "33%"}}
    [:ol {:style {:line-height "17px"}} (for [[p q] @passes] [:li {:style {:list-style-type "none" :color :blue :font-size "11px"}} (str "Passed " p ". Possible ans: " q)])]]
   [:div {:style {:float "right" :width "33%"}}
    [:ol {:style {:line-height "17px"}} (for [[p q] @wrongs] [:li {:style {:list-style-type "none" :color "red" :font-size "11px"}} (str p " is not valid. Possible ans: " q) ])]]])

(defn modal []
  [:div.modal {:style {:display @display}}
   [:div.modal-content
    [:span.close {:on-click #(reset! display "none")} "X"]
    [:p "You will be given a word on the left. Extend the word to make another valid word by at least 2 characters."]
    [:p "After typing your answer, press enter. If you can't think of anything, you can click on 'Pass' or press Ctrl on your keyboard."]
    [:p "You have 30 seconds to extend as many words as possible. Each pass reduces your time by 1 second."]]]
  )

(defn result []
  [:div {:style {:clear "both"}}
   [:p {:style {:font-size "30px" :color :blue}} (when (not @is-running) (str "Your score is " (count @corrects)))]])

(defn repl []
  (let [r (rng/rng 123)]
    [:div {:style {:clear "both"}} [:div (str (rng/rand-int r 20) "first")]
     [:div (str (clset/difference (set (flatten w/questions)) allset))]]))

(defn home-page []
  [:div
   [modal]
   [:h2 "Welcome to extend word"]
   [puzzle-num]
   [timer]
   [the-word]
   [dashboard]
   [result]
   ;[repl]
   ])

;; -------------------------
;; Initialize app

(defn mount-root []
  (add-watch seconds :w (fn [k r o n] (when (< n 0.01) (stop-game))))
  (d/render [home-page] (.getElementById js/document "app")))

(defn init! []
  (gev/listen js/document "keydown" #(handle-key-down (.-key %)))
  (mount-root))
