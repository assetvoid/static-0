import{cc as l,cd as u,ce as g,cf as f,cg as p,ch as v,ci as T}from"./index-D7Jcohbw.js";class k{constructor(){this.size=6,this.waitingTaskList=[],this.executingTaskCount=0,this.resolveFunction=t=>{},this.rejectFunciton=()=>{}}execute(t){return t.length===0?Promise.resolve():new Promise(s=>{this.resolveFunction=s,this.waitingTaskList=t,this.check()})}check(){this.executingTaskCount<this.size&&this.waitingTaskList.length>0&&(this.executingTaskCount+=1,this.waitingTaskList[0].call({}).then(()=>{this.executingTaskCount-=1,this.waitingTaskList.length===0&&this.executingTaskCount===0?this.resolveFunction():this.check()}).catch(t=>{throw this.rejectFunciton(),new Error(t)}),this.waitingTaskList.shift(),this.check())}}let n={};async function L(e){try{await l(e,e.textLayerMap),n={};const t=Object.keys(e.textLayerMap),s=new Date().getTime();await new k().execute(t.map(a=>()=>{const c=e.textLayerMap[a];try{return $(e,c)}catch{throw new Error("Failed to create image")}})),u([`Cost ${((new Date().getTime()-s)/1e3).toFixed(2)}s for creating ${t.length} images.`])}catch{throw new Error("Failed to create images")}}function C(e){return n[e].img||null}async function $(e,t){function s(h){return t.textData.characters.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/&/g,"&amp;")}const a=`<div style="${g(f())}">${s(t.textData.characters)}</div>`,c=`<div style="${g(p(t))}">${s(t.textData.characters)}</div>`;n[t.id]||(n[t.id]={status:"",contentHash:"",img:new Image});const i=n[t.id],d=[t.width,t.height,t.fontName.fullname,a,c].join("|");i.contentHash=d;const m=await v(e,t,t.fontName.fullname),o=`
  data:image/svg+xml;charset=utf-8,
  <svg xmlns="http://www.w3.org/2000/svg" width="${t.width+t.fontSize}" height="${t.height+t.fontSize}">
    <foreignObject width="100%" height="100%">
      <div xmlns='http://www.w3.org/1999/xhtml' style="padding-left: ${t.fontSize/2}px;padding-top: ${t.fontSize/2}px;">
        <style type="text/css">body,div{padding:0;margin:0}${m}</style>
        <div style="position: relative;">
          ${a}
          ${c}
        </div>
      </div>
    </foreignObject>
  </svg>`;if(u(["Created image",{text:t.textData.characters,src:o}]),i.status==="loading")return"";const{img:r}=i;return r.setAttribute("crossOrigin","Anonymous"),r.src=T(o),new Promise((h,w)=>{r.onload=()=>{i.status="loaded",h("")},r.onerror=x=>{throw i.status="",console.error(x),new Error(`Failed to create image. Possibly because there is illegal characters in the text: "${t.textData.characters}"`)}})}export{L as c,C as g};
