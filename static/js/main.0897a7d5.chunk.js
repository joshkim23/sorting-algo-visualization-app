(this["webpackJsonpsorting-algorithm-visualizer"]=this["webpackJsonpsorting-algorithm-visualizer"]||[]).push([[0],{79:function(e,t,n){},80:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n(8),a=n.n(r),i=n(13),s=n(107),l=n(108),c=n(110),h=n(111),d=n(115),u=n(117),p=n(34),g=n.n(p),b=n(17),f=n.n(b),j=n(27),m=n.n(j),O=n(2),v=Object(s.a)((function(e){return{horizontalStretch:{display:"grid",backgroundColor:"".concat(m.a[900]),gridTemplateColumns:"1fr auto auto auto"}}})),x=function(e){var t=e.algorithm,n=e.listOfAlgorithms,r=e.algorithmSelected,a=e.dataSize,s=e.listOfDataSizes,p=e.dataSizeSelected,b=e.shuffleData,j=v(),m=Object(o.useState)(null),x=Object(i.a)(m,2),y=x[0],w=x[1],S=Object(o.useState)(null),k=Object(i.a)(S,2),C=k[0],I=k[1],z=function(){w(null)};var T=function(){I(null)};return Object(O.jsx)("div",{className:j.root,style:{height:"64px"},children:Object(O.jsx)(l.a,{position:"fixed",children:Object(O.jsxs)(c.a,{className:j.horizontalStretch,children:[Object(O.jsx)("div",{children:Object(O.jsx)(h.a,{color:"inherit",className:j.title,children:"Sorting Algorithm Visualizer"})}),Object(O.jsxs)("div",{style:{alignContent:"center"},children:[Object(O.jsxs)(h.a,{style:{textTransform:"none"},color:"inherit","aria-label":"menu","aria-controls":"simple-menu","aria-haspopup":"true",onClick:function(e){w(e.currentTarget)},children:[t||"Algorithm",Object(O.jsx)(g.a,{})]}),Object(O.jsx)(d.a,{id:"simple-menu",style:{margin:"0",padding:"0"},anchorEl:y,getContentAnchorEl:null,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"},keepMounted:!0,open:Boolean(y),onClose:z,children:n.map((function(e,t){return Object(O.jsx)(u.a,{onMouseEnter:function(e){return e.target.style.backgroundColor="".concat(f.a[600])},onMouseLeave:function(e){return e.target.style.backgroundColor="#ffffff"},onClick:function(){return function(e){r(e),z()}(t)},children:e},t)}))})]}),Object(O.jsxs)("div",{style:{alignContent:"center"},children:[Object(O.jsxs)(h.a,{style:{textTransform:"none"},color:"inherit","aria-label":"menu","aria-controls":"simple-menu","aria-haspopup":"true",onClick:function(e){I(e.currentTarget)},children:[a," Elements",Object(O.jsx)(g.a,{})]}),Object(O.jsx)(d.a,{id:"simple-menu",anchorEl:C,getContentAnchorEl:null,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"},keepMounted:!0,open:Boolean(C),onClose:T,children:s.map((function(e,t){return Object(O.jsx)(u.a,{onMouseEnter:function(e){return e.target.style.backgroundColor="".concat(f.a[600])},onMouseLeave:function(e){return e.target.style.backgroundColor="#ffffff"},onClick:function(){return function(e){p(e),T()}(t)},children:e},t)}))})]}),Object(O.jsx)(h.a,{color:"inherit",variant:"outlined",style:{textTransform:"none"},onClick:function(){return b()},children:"Shuffle Data"})]})})})},y=(n(79),n(116)),w=n(47),S=n.n(w),k=function(e){var t=e.value,n=e.width,o=e.dataSize,r=e.color,a={container:{backgroundColor:"".concat(r||S.a[600]),height:"".concat("".concat(o<10?30*t:o<25?20*t:25===o?8*t:50===o?3.9*t:2*t,"px")),width:"".concat(n)}};return Object(O.jsx)(y.a,{className:"data-bar",style:a.container})},C=function(e){var t=e.data,n=e.comparing,o=e.sorted,r=e.swapped,a=e.barWidth;return Object(O.jsx)("div",{style:{display:"flex",flexDirection:"row",width:"100%",gridGap:"4px"},children:t?t.map((function(e,i){var s=function(e){return n&&n.includes(e)?"yellow":r&&r.includes(e)?"red":o&&o.includes(e)?"".concat(f.a[600]):null}(i);return Object(O.jsx)(k,{value:e,width:a,color:s,dataSize:t.length},i)})):null})},I=n(112),z=n(113),T=n(114),E=Object(s.a)({root:{minWidth:250,overflowY:"scroll"},title:{fontSize:16},pos:{}}),A=function(e){var t=e.algoName,n=e.algoDescription,o=e.average,r=e.best,a=e.worst,i=E();return Object(O.jsx)(I.a,{className:i.root,children:Object(O.jsxs)(z.a,{children:[Object(O.jsxs)(T.a,{variant:"h4",component:"h2",children:[t||"Select Algorithm",Object(O.jsx)("br",{})]}),Object(O.jsx)("br",{}),Object(O.jsxs)(T.a,{variant:"body2",component:"p",children:[n||"You must select an algorithm in order to visualize how it sorts the data",Object(O.jsx)("br",{})]}),Object(O.jsx)("br",{}),Object(O.jsxs)(T.a,{variant:"h6",component:"h4",children:["Performance",Object(O.jsx)("br",{})]}),Object(O.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr"},children:[Object(O.jsxs)(T.a,{variant:"body2",component:"p",children:["Best",Object(O.jsx)("br",{}),"Average",Object(O.jsx)("br",{}),"Worst"]}),Object(O.jsxs)(T.a,{variant:"body2",component:"p",style:{fontStyle:"italics"},children:[r,Object(O.jsx)("br",{}),o,Object(O.jsx)("br",{}),a]})]})]})})},M=n(54),N=n.n(M),B=function(e){var t=e.color,n=e.colorKey,o={orb:{color:"".concat(t)},layout:{display:"inline-grid",gridTemplateColumns:"auto auto",gridGap:"5px",padding:"8px",alignItems:"center",color:"white",fontFamily:"Roboto"}};return Object(O.jsxs)("div",{style:o.layout,children:[Object(O.jsx)(N.a,{style:o.orb}),Object(O.jsx)(T.a,{children:n})]})},D=n(55),R=n.n(D),W=n(56),G=n.n(W),Y=function(e){var t=e.handleNextButton,n=e.handlePrevButton,r=e.sortButton,a=e.colorKeys,s=e.trackerStep,l=e.trackerSize,c=e.speed,p=e.listOfSpeeds,b=e.handleSpeedSelected,j={speed:{},layout:{padding:"15px",display:"grid",gridTemplateColumns:"1fr",gridGap:"15px",alignItems:"center",justifySelf:"center"},buttons:{display:"flex",justifySelf:"center",alignSelf:"center",justifyContent:"center",color:"white"}},m=Object(o.useState)(null),v=Object(i.a)(m,2),x=v[0],y=v[1],w=function(){y(null)};return Object(O.jsxs)("div",{style:j.layout,children:[Object(O.jsxs)("div",{style:j.buttons,children:[Object(O.jsx)(T.a,{style:{color:"white",alignSelf:"center"},children:l?"".concat(Math.floor(s/l*100),"%"):"0%"}),Object(O.jsx)(h.a,{children:Object(O.jsx)(R.a,{style:{color:"white"},onClick:function(){return n()}})}),Object(O.jsx)(h.a,{color:"inherit",variant:"outlined",style:{color:"white"},onClick:function(){return r()},children:"SORT"}),Object(O.jsx)(h.a,{onClick:function(){return t()},children:Object(O.jsx)(G.a,{style:{color:"white"}})}),Object(O.jsxs)("div",{style:{alignContent:"center"},children:[Object(O.jsxs)(h.a,{style:{textTransform:"none"},color:"inherit","aria-label":"menu","aria-controls":"simple-menu","aria-haspopup":"true",onClick:function(e){y(e.currentTarget)},children:[c,"x",Object(O.jsx)(g.a,{})]}),Object(O.jsx)(d.a,{id:"simple-menu",style:{margin:"0",padding:"0"},anchorEl:x,getContentAnchorEl:null,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"},keepMounted:!0,open:Boolean(x),onClose:w,children:p.map((function(e,t){return Object(O.jsxs)(u.a,{onMouseEnter:function(e){return e.target.style.backgroundColor="".concat(f.a[600])},onMouseLeave:function(e){return e.target.style.backgroundColor="#ffffff"},onClick:function(){return function(e){w(),b(e),console.log("speed selection index: ",e)}(t)},children:[e,"x"]},t)}))})]})]}),Object(O.jsx)("div",{children:a.map((function(e,t){return Object(O.jsx)(B,{colorKey:e.key,color:e.color},t)}))})]})},F=n(5);function L(e,t,n){var o=e[t];e[t]=e[n],e[n]=o}function H(e){for(var t=2*e,n=new Set,o=[];o.length!==e;){var r=Math.floor(Math.random()*t);!n.has(r)&&0!==r&&r>=.1*t&&(n.add(r),o.push(r))}return console.log("NEW randomized list generated: ",o),o}function K(e){for(var t=[],n=0;n<e;n++)t.push(n);return t}function P(e){return{steps:[{array:e,sortedIndices:[],comparing:[],swapped:[],stepDescription:"added list to tracker"}]}}function q(e,t,n,o,r,a){var i={array:t,sortedIndices:o,comparing:n,swapped:r,stepDescription:a};e.steps.push(i)}function J(e,t,n,o,r){if(o<r){var a=function(e,t,n,o,r){var a=o,i=e[a];q(t,Object(F.a)(e),[a],Object(F.a)(n),[],"adding pivot to tracker. Pivot VALUE: ".concat(i));var s=a+1,l=r;for(;s<l;){for(;e[s]<i;)q(t,Object(F.a)(e),[a,s],Object(F.a)(n),[],"incrementing i"),e[++s]>i&&q(t,Object(F.a)(e),[a],Object(F.a)(n),[s],"next i value breaks while loop, value at i is GREATER than pivot");for(;e[l]>i;)q(t,Object(F.a)(e),[a,l],Object(F.a)(n),[],"incrementing j"),e[--l]<i&&q(t,Object(F.a)(e),[a],Object(F.a)(n),[l],"next j value breaks while loop, value at j is LESS than pivot");q(t,Object(F.a)(e),[a,s,l],Object(F.a)(n),[],"after i and j increment"),s<l&&(L(e,s,l),q(t,Object(F.a)(e),[a],Object(F.a)(n),[s,l],"swapped i and j"))}e[l]<i&&L(e,l,a);return l}(e,t,n,o,r);n.push(a),q(t,Object(F.a)(e),[],Object(F.a)(n),[],"post partition"),J(e,t,n,o,a-1),J(e,t,n,a+1,r)}else n.push(o),q(t,Object(F.a)(e),[],Object(F.a)(n),[],"base case, only one element - add to sorted")}function Q(e,t,n,o,r){if(e.length>1){for(var a=e.slice(0,e.length/2),i=e.slice(e.length/2,e.length),s=[],l=o;l<=r;l++)s.push(l);q(t,Object(F.a)(n),s,[],[],"list passed to merge sort"),Q(a,t,n,o,o+a.length-1),Q(i,t,n,o+a.length,r),function(e,t,n,o,r,a){for(var i=0,s=0,l=a,c=0;c<e.length;c++)s>=n.length||t[i]<n[s]&&i<t.length?(e[c]=t[i],i++,r[l++]=e[c]):(e[c]=n[s],s++,r[l++]=e[c]),q(o,Object(F.a)(r),[],[],[l-1],"overwrite from new array a")}(e,a,i,t,n,o),q(t,Object(F.a)(n),[],[],[],"merged")}}var U=[{name:"Bubble Sort",description:"Bubble sort is a simple sorting algorithm that compares adjacent elements and swaps them if they are in the wrong order. It sorts from right to left, with each pass of the algorithm grabbing the next-highest value in the list until the entire list is sorted. It is called bubble sort because of the way the algorithm makes the largest/smallest values bubble up to the end of the list depending on which orientation the user desires the list to be in (ascending/descending).",performance:{best:"O(n)",average:"O(n^2)",worst:"O(n^2)"},index:0},{name:"Selection Sort",description:"Selection sort is an in-place comparison sorting algorithm that divides the input list into two parts: the sublist of items already sorted, which is built up from left to right at the front (left) of the list, and the sublist of items remaining to be sorted that occupy the rest of the list. Initially, the sorted sublist is empty and the unsorted sublist is the entire input list. The algorithm proceeds by finding the smallest element in the unsorted sublist, exchanging (swapping) it with the leftmost unsorted element (putting it in sorted order), and moving the sublist boundaries one element to the right.",performance:{best:"O(n^2)",average:"O(n^2)",worst:"O(n^2)"},index:1},{name:"Insertion Sort",description:"Insertion sort is a simple sorting algorithm that iterates through an array and at each iteration it removes one element from the array, finds the location it belongs to in the sorted list and inserts it there, repeating until no elements remain in the unsorted list. It is an in-place, stable sorting algorithm that is inefficient on large input arrays but works well for data sets that are almost sorted. It is more efficient in practice compared to other quadratic sorting algorithms like bubble sort and selection sort.",performance:{best:"O(n)",average:"O(n^2)",worst:"O(n^2)"},index:2},{name:"Quick Sort",description:"Quick sort runs on the basis of sorting elements around a pivot that can be randomly selected, or at the beginning/end of the array. At each call of the algorithm, the array is partitioned in two by swapping all elements smaller than the pivot with elements larger than the pivot, then swapping the pivot with the largest element that is smaller than the pivot. This effectively places the pivot in its final sorted position since all the elements are smaller and all elements after are greater. This method is called recursively with the remaining subarrays until all elements are sorted. It is the most popular sorting algorithm that handles relatively small data sizes incredibly well. In this variation of quick sort, the first element is selected as the pivot and then two pointers iterate through the rest of the subarray, one from the left, one from the right. Both pointers iterate into one another until they reach a value that is unsorted  relative to the pivot, or the pointers cross. For the left pointer, it will stop when it reaches a value that is greater than the pivot, and the right pointer will stop when it reaches a value that is less than the pivot. Once the pointers stop the values will be swapped, and the pointers continue.",performance:{best:"O(nlog n)",average:"O(nlog n)",worst:"O(n^2)"},index:3},{name:"Merge Sort",description:"Merge sort is a recursive sorting algorithm that handles large data very efficiently by using the divide and conquer method. It runs on the idea of merging two lists that are each sorted relative to itself. Imagine you have two stacks of papers that are both alphabetically ordered and you want to combine the two stacks to be alphabetically ordered. You look at the top two papers and grab the earlier one in the alphabet and place it in a third pile. You then grab the next paper from the stack whose top paper you just put on the third pile and compare it to the other paper that you grabbed at first and continue this until one stack runs out. At this point you can put the rest of the remaining stack on the third pile and you have merged the stacks. Merge sort works on a similar principle by continually making subarrays within the list and merging them until you get the final sorted list.",performance:{best:"O(nlog n)",average:"O(nlog n)",worst:"O(nlog n)"},index:4},{name:"Heap Sort",description:"The last sorting algo I know nothing about other than it uses trees",performance:{best:"O(nlog n)",average:"O(nlog n)",worst:"O(nlog n)"},index:5}],V=[function(e){console.log("list sent to bubble sort",e);for(var t=P(Object(F.a)(e)),n=[],o=e.length-1;o>=1;o--){o<e.length-1&&(n.push(o+1),q(t,Object(F.a)(e),[],[].concat(n),[],"last known sorted el is less than the end"));for(var r=0;r<o;r++)q(t,Object(F.a)(e),[r,r+1],[].concat(n),[],"new iteration of i"),e[r]>e[r+1]&&(L(e,r,r+1),q(t,Object(F.a)(e),[],[].concat(n),[r,r+1],"AFTEr swapping"))}for(;e.length!==n.length;)n.push(e.length-n.length-1);return q(t,e,[],n,[],"FINISHED SORTING"),console.log("sorted list! ",e),t},function(e){console.log("list sent to selection sort: ",e);for(var t=P(Object(F.a)(e)),n=[],o=-1;o<e.length;o++){var r=o+1;o>-1&&(n.push(o),q(t,Object(F.a)(e),[],[].concat(n),[],"after one pass of the algorithm"));for(var a=o+1;a<e.length;a++)q(t,Object(F.a)(e),[a,r],[].concat(n),[],"increment of i, comparing inner loop values to selected value"),e[a]<e[r]&&(L(e,a,r),q(t,Object(F.a)(e),[],[].concat(n),[a,r],"lowest value swapped with beginning of last known sorted index"))}return q(t,e,[],n,[],"FINISHED SORTING"),console.log("sorted list!",e),t},function(e){console.log("list sent to insertion sort",e);for(var t=P(Object(F.a)(e)),n=1;n<e.length;n++){var o=n;for(n>1&&q(t,Object(F.a)(e),[],[],[],"element inserted to virutal sorted list");e[o]<e[o-1]&&o>0;)q(t,Object(F.a)(e),[o,o-1],[],[],"comparing two elements"),L(e,o,o-1),q(t,Object(F.a)(e),[],[],[o,o-1],"swapped two elements"),o--}return q(t,e,[],K(e.length),[],"finished sorting"),console.log("sorted list: ",e),t},function(e){var t=P(Object(F.a)(e));return J(e,t,[],0,e.length-1),q(t,e,[],K(e.length),[],"sorted list"),t},function(e){var t=P(Object(F.a)(e));return Q(e,t,Object(F.a)(e),0,e.length-1),q(t,e,[],K(e.length),[],"finished sorting"),console.log("sorted list!: ",e),t}],X=U.map((function(e){return e.name})),Z=["5","10","25","50","100"],$=["0.25","0.5","1.0","2.0","4.0"],_=[{key:"Unsorted",color:"".concat(S.a[600])},{key:"Comparing",color:"yellow"},{key:"Swapped",color:"red"},{key:"Sorted",color:"".concat(f.a[600])}],ee=function(){var e={overlay:{backgroundColor:"".concat(m.a[900]),position:"fixed",width:"100%",height:"100%",display:"grid",overflowY:"scroll",overflowX:"scroll"},layout:{display:"grid",gridTemplateColumns:"5fr 2fr",gridGap:"50px",height:"500px",padding:"0px 50px 50px 50px"},sortWindowAndControls:{display:"grid",gridTemplateRows:"10fr 1fr",maxHeight:"525px",width:"100%",borderRadius:"10px",padding:"15px",backgroundColor:"".concat(m.a[800]),color:"".concat(f.a[600])},descriptionWindow:{display:"grid",overflowY:"scroll",borderRadius:"10px",padding:"15px",backgroundColor:"".concat(m.a[800]),color:"".concat(f.a[600])}},t=Object(o.useState)({name:"",description:"",performance:{best:"",average:"",worst:""},index:null}),n=Object(i.a)(t,2),r=n[0],a=n[1],s=Object(o.useState)("10"),l=Object(i.a)(s,2),c=l[0],h=l[1],d=Object(o.useState)(null),u=Object(i.a)(d,2),p=u[0],g=u[1],b=Object(o.useState)(""),j=Object(i.a)(b,2),v=j[0],y=j[1],w=Object(o.useState)({steps:[]}),S=Object(i.a)(w,2),k=S[0],I=S[1],z=Object(o.useState)(0),T=Object(i.a)(z,2),E=T[0],M=T[1],N=Object(o.useState)({array:[],comparing:[],sortedIndices:[],swapped:[]}),B=Object(i.a)(N,2),D=B[0],R=B[1],W=Object(o.useState)(null),G=Object(i.a)(W,2),F=G[0],L=G[1],K=Object(o.useState)($[2]),P=Object(i.a)(K,2),q=P[0],J=P[1];function Q(){switch(parseInt(c)){case 5:return"20%";case 10:return"10%";case 25:return"4%";case 50:return"2%";case 100:return"1%";default:return"5%"}}function ee(e,t){var n;console.log(e),n=null===r.index||e!==r.index?V[e](t):V[r.index](t),I(n),console.log("NEW Tracker generated using ".concat(U[e].name),n),L(n.steps[n.steps.length-1].array),R(n.steps[0])}return Object(o.useEffect)((function(){h("10"),g(H(10)),R(null)}),[]),Object(o.useEffect)((function(){y(Q())}),[c]),Object(O.jsxs)("div",{style:e.overlay,children:[Object(O.jsx)(x,{algorithm:r.name,listOfAlgorithms:X,algorithmSelected:function(e){a(U[e]),ee(e,D?D.array:p)},dataSize:c,listOfDataSizes:Z,dataSizeSelected:function(e){console.log("Data size changed - data size: ",Z[e]),R(null),h(Z[e]),y(Q());var t=H(parseInt(Z[e]));M(0),g(t),null!==r.index&&ee(r.index,t)},shuffleData:function(){R(null),M(0);var e=H(parseInt(c));g(e),null!==r.index&&ee(r.index,e)}}),Object(O.jsxs)("div",{style:e.layout,children:[Object(O.jsxs)("div",{style:e.sortWindowAndControls,children:[Object(O.jsx)(C,{data:D?D.array:p,comparing:D?D.comparing:null,swapped:D?D.swapped:null,sorted:D?D.sortedIndices:null,barWidth:v}),Object(O.jsx)(Y,{handleNextButton:function(){D!==F&&(M(E+1),R(k.steps[E+1]))},handlePrevButton:function(){D!==p&&(M(E-1),R(k.steps[E-1]))},sortButton:function(){var e=k.steps.filter((function(e,t){return t>=E}));console.log(E),console.log(e),e.forEach((function(t,n){setTimeout((function(){R(t),M(E++),n===e.length-1&&M(E++)}),1/q*150*n)})),M(k.steps.length)},colorKeys:_,trackerSize:k.steps.length,trackerStep:E,speed:q,listOfSpeeds:$,handleSpeedSelected:function(e){J($[e])}})]}),Object(O.jsx)(A,{algoName:r.name,algoDescription:r.description,average:r.performance.average,best:r.performance.best,worst:r.performance.worst})]})]})};a.a.render(Object(O.jsx)(ee,{}),document.getElementById("root"))}},[[80,1,2]]]);
//# sourceMappingURL=main.0897a7d5.chunk.js.map