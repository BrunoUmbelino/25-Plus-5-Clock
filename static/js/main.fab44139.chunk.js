(this["webpackJsonp25-5-clock"]=this["webpackJsonp25-5-clock"]||[]).push([[0],{23:function(e,t,s){},25:function(e,t,s){},31:function(e,t,s){"use strict";s.r(t);var n=s(1),i=s(2),c=s.n(i),a=s(13),r=s.n(a),l=(s(23),s(24),s(25),s(14)),o=s(15),j=s(5),b=s(17),h=s(16),m=s(33),d=s(34),u=s(35),O=s(37),k=s(36),x=s(8),v=s(9),p=function(e){Object(b.a)(s,e);var t=Object(h.a)(s);function s(e){var n;return Object(l.a)(this,s),(n=t.call(this,e)).state={breakLength:5,sessionLength:25,timer:1500,inSession:!1,intervalFunc:"",breakLabel:!1},n.getTimer=n.getTimer.bind(Object(j.a)(n)),n.reset=n.reset.bind(Object(j.a)(n)),n.breakDecrement=n.breakDecrement.bind(Object(j.a)(n)),n.breakIncrement=n.breakIncrement.bind(Object(j.a)(n)),n.sessionIncrement=n.sessionIncrement.bind(Object(j.a)(n)),n.sessionDecrement=n.sessionDecrement.bind(Object(j.a)(n)),n.startStopTimer=n.startStopTimer.bind(Object(j.a)(n)),n.decreaseTimer=n.decreaseTimer.bind(Object(j.a)(n)),n}return Object(o.a)(s,[{key:"reset",value:function(){""!==this.state.intervalFunc&&this.stopTimer(),this.StopBeep(),this.setState({breakLength:5,sessionLength:25,timer:1500,inSession:!1,intervalFunc:"",breakLabel:!1})}},{key:"breakDecrement",value:function(){var e=this.state.breakLength;e>1&&this.setState({breakLength:e-1})}},{key:"breakIncrement",value:function(){var e=this.state.breakLength;e<60&&this.setState({breakLength:e+1})}},{key:"sessionDecrement",value:function(){var e=this.state.sessionLength;e>1&&this.setState({sessionLength:e-1,timer:60*(e-1)})}},{key:"sessionIncrement",value:function(){var e=this.state.sessionLength;e<60&&this.setState({sessionLength:e+1,timer:60*(e+1)})}},{key:"startStopTimer",value:function(){this.state.inSession?(this.stopTimer(),this.setState({inSession:!this.state.inSession})):(this.playTimer(),this.setState({inSession:!this.state.inSession}))}},{key:"playTimer",value:function(){var e=setInterval(this.decreaseTimer,1e3);this.setState({inSession:!0,intervalFunc:e})}},{key:"stopTimer",value:function(){clearInterval(this.state.intervalFunc)}},{key:"decreaseTimer",value:function(){this.state.timer>0?this.setState({timer:this.state.timer-1}):0===this.state.timer&&(this.setState({timer:60*this.state.breakLength,breakLabel:!this.state.breakLabel}),this.PlayBeep())}},{key:"PlayBeep",value:function(){var e=document.getElementById("beep");e.loop="true",e.src="https://res.cloudinary.com/djiuzmp1e/video/upload/v1612314359/samples/mixkit-repeating-arcade-beep-1084_nz4wjf.wav",e.play(),setTimeout(this.StopBeep,6200)}},{key:"StopBeep",value:function(){var e=document.getElementById("beep");e.pause(),e.currentTime=0}},{key:"getTimer",value:function(){var e=Math.floor(this.state.timer/60),t=this.state.timer-60*e;return t=t<10?"0"+t:t,"".concat(e=e<10?"0"+e:e,":").concat(t)}},{key:"render",value:function(){return console.log(this.state),Object(n.jsx)("div",{className:"main",children:Object(n.jsxs)(m.a,{className:"timer",children:[Object(n.jsx)(d.a,{className:"justify-content-center",children:Object(n.jsx)("h1",{className:"title",children:"25 + 5 Clock"})}),Object(n.jsxs)("div",{className:"display-and-control-timer",children:[Object(n.jsxs)("section",{className:"display-timer",children:[Object(n.jsx)(d.a,{children:Object(n.jsxs)(u.a,{children:[Object(n.jsx)(d.a,{className:"justify-content-center",children:Object(n.jsx)("h3",{id:"timer-label",children:this.state.breakLabel?"Break":"Session"})}),Object(n.jsx)(d.a,{className:"justify-content-center",children:Object(n.jsx)("div",{id:"time-left",children:this.getTimer()})})]})}),Object(n.jsx)("audio",{id:"beep",src:""})]}),Object(n.jsx)("section",{className:"control-timer",children:Object(n.jsxs)(d.a,{className:"justify-content-center",children:[Object(n.jsxs)(O.a,{id:"start_stop",className:"control-timer-btn",onClick:this.startStopTimer,children:[Object(n.jsx)(x.a,{icon:v.c}),Object(n.jsx)(x.a,{icon:v.b})]}),Object(n.jsx)(O.a,{id:"reset",className:"control-timer-btn",onClick:this.reset,children:Object(n.jsx)(x.a,{icon:v.e})})]})})]}),Object(n.jsxs)("section",{className:"config-timer",children:[Object(n.jsxs)(d.a,{className:"justify-content-beetwen",children:[Object(n.jsx)(u.a,{children:Object(n.jsx)(k.a,{id:"break-label",children:"Break"})}),Object(n.jsx)(u.a,{children:Object(n.jsx)(k.a,{id:"session-label",children:"Session"})})]}),Object(n.jsxs)(d.a,{children:[Object(n.jsx)(u.a,{children:Object(n.jsxs)(d.a,{className:"align-items-center justify-content-center",children:[Object(n.jsx)(O.a,{id:"break-decrement",className:"config-timer-btn",onClick:this.breakDecrement,children:Object(n.jsx)(x.a,{icon:v.a})}),Object(n.jsx)("div",{id:"break-length",children:this.state.breakLength}),Object(n.jsx)(O.a,{id:"break-increment",className:"config-timer-btn",onClick:this.breakIncrement,children:Object(n.jsx)(x.a,{icon:v.d})})]})}),Object(n.jsx)(u.a,{children:Object(n.jsxs)(d.a,{className:"align-items-center justify-content-center",children:[Object(n.jsx)(O.a,{id:"session-decrement",onClick:this.sessionDecrement,children:Object(n.jsx)(x.a,{icon:v.a})}),Object(n.jsx)("div",{id:"session-length",children:this.state.sessionLength}),Object(n.jsx)(O.a,{id:"session-increment",onClick:this.sessionIncrement,children:Object(n.jsx)(x.a,{icon:v.d})})]})})]})]}),Object(n.jsx)(d.a,{className:"author justify-content-center",children:Object(n.jsx)("p",{children:"By Bruno Umbelino"})})]})})}}]),s}(c.a.Component);var f=function(){return Object(n.jsx)("div",{children:Object(n.jsx)(p,{})})};r.a.render(Object(n.jsx)(f,{}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.fab44139.chunk.js.map