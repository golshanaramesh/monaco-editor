/*! For license information please see clojure.contribution.js.LICENSE.txt */
import{registerLanguage}from"../_.contribution";registerLanguage({id:"clojure",extensions:[".clj",".cljs",".cljc",".edn"],aliases:["clojure","Clojure"],loader:()=>import("./clojure")});