import{a as e}from"./rolldown-runtime-COnpUsM8.js";import{v as t}from"./dndkit-DFWEzLie.js";import{t as n}from"./preload-helper-CQHXe7Yj.js";import{a as r,m as i,s as a,u as o}from"./locale-CM3ProDC.js";import{n as s}from"./user-BZRE4B2e.js";import{n as c}from"./dist-c27M4WSY.js";import{$t as l,Gt as u,Ht as d,It as f,Kt as p,T as m,Ut as h,Vt as g,Yt as _,b as v,f as y,j as b,k as x,qt as S,t as C,zt as w}from"./storage-B_4eCD85.js";import{A as T,B as E,L as D,N as O,P as k,R as A,Z as j,a as M,ct as ee,dt as te,et as ne,ft as re,i as ie,j as ae,k as oe,lt as se,n as ce,nt as le,o as ue,ot as de,pt as fe,q as pe,r as me,s as he,st as ge,t as _e,z as ve}from"./select-ByWRsYWc.js";import{C as ye,S as N,b as P,c as F,d as I,g as L,h as R,l as be,m as xe,u as z,v as B,x as Se}from"./zod-Bd8O-Clv.js";import{a as V,c as Ce,d as we,f as Te,i as Ee,l as De,o as Oe,r as ke,t as Ae}from"./preview-wrapper-u4oxCA_7.js";import{t as je}from"./esm-DgcboHqk.js";var Me=0,Ne=200,Pe=i(e=>({entries:[],panelOpen:!1,push:t=>{let n=++Me;return e(e=>{let r=[...e.entries,{...t,id:n}];return r.length>Ne&&r.splice(0,r.length-Ne),{entries:r}}),n},update:(t,n)=>e(e=>({entries:e.entries.map(e=>e.id===t?{...e,...n}:e)})),clear:()=>e({entries:[]}),setPanelOpen:t=>e({panelOpen:t})}));function Fe(e){return{...e,handler:async(t,n)=>{let r=Pe.getState().push({name:e.name,startedAt:Date.now(),params:t,status:`running`});try{let i=await e.handler(t,n);return Pe.getState().update(r,{status:`success`,result:i,endedAt:Date.now()}),i}catch(e){throw Pe.getState().update(r,{status:`error`,error:e instanceof Error?e.message:String(e),endedAt:Date.now()}),e}}}}var H=class extends Error{constructor(e,t){super(`${e} at position ${t}`),this.position=t}},Ie=32,Le=10,Re=9,ze=13,Be=160,Ve=6158,He=8192,Ue=8203,We=8239,Ge=8287,Ke=12288,qe=65279;function Je(e){return/^[0-9A-Fa-f]$/.test(e)}function U(e){return e>=`0`&&e<=`9`}function Ye(e){return e>=` `}function W(e){return`,:[]/{}()
+`.includes(e)}function Xe(e){return e>=`a`&&e<=`z`||e>=`A`&&e<=`Z`||e===`_`||e===`$`}function Ze(e){return e>=`a`&&e<=`z`||e>=`A`&&e<=`Z`||e===`_`||e===`$`||e>=`0`&&e<=`9`}var Qe=/^(http|https|ftp|mailto|file|data|irc):\/\/$/,$e=/^[A-Za-z0-9-._~:/?#@!$&'()*+;=]$/;function et(e){return`,[]/{}
+`.includes(e)}function tt(e){return K(e)||nt.test(e)}var nt=/^[[{\w-]$/;function rt(e){return e===`
`||e===`\r`||e===`	`||e===`\b`||e===`\f`}function G(e,t){let n=e.charCodeAt(t);return n===Ie||n===Le||n===Re||n===ze}function it(e,t){let n=e.charCodeAt(t);return n===Ie||n===Re||n===ze}function at(e,t){let n=e.charCodeAt(t);return n===Be||n===Ve||n>=He&&n<=Ue||n===We||n===Ge||n===Ke||n===qe}function K(e){return ot(e)||ct(e)}function ot(e){return e===`"`||e===`“`||e===`”`}function st(e){return e===`"`}function ct(e){return e===`'`||e===`‘`||e===`’`||e==="`"||e===`´`}function lt(e){return e===`'`}function q(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,r=e.lastIndexOf(t);return r===-1?e:e.substring(0,r)+(n?``:e.substring(r+1))}function J(e,t){let n=e.length;if(!G(e,n-1))return e+t;for(;G(e,n-1);)n--;return e.substring(0,n)+t+e.substring(n)}function ut(e,t,n){return e.substring(0,t)+e.substring(t+n)}function dt(e){return/[,\n][ \t\r]*$/.test(e)}var ft={"\b":`\\b`,"\f":`\\f`,"\n":`\\n`,"\r":`\\r`,"	":`\\t`},pt={'"':`"`,"\\":`\\`,"/":`/`,b:`\b`,f:`\f`,n:`
`,r:`\r`,t:`	`};function mt(e){let t=0,n=``;c(["```","[```","{```"]),i()||k(),c(["```","```]","```}"]);let r=u(`,`);for(r&&a(),tt(e[t])&&dt(n)?(r||(n=J(n,`,`)),g()):r&&(n=q(n,`,`));e[t]===`}`||e[t]===`]`;)t++,a();if(t>=e.length)return n;O();function i(){a();let e=m()||h()||_()||y()||b()||S(!1)||C();return a(),e}function a(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0,n=t,r=o(e);do r=s(),r&&=o(e);while(r);return t>n}function o(r){let i=r?G:it,a=``;for(;;)if(i(e,t))a+=e[t],t++;else if(at(e,t))a+=` `,t++;else break;return a.length>0?(n+=a,!0):!1}function s(){if(e[t]===`/`&&e[t+1]===`*`){for(;t<e.length&&!ht(e,t);)t++;return t+=2,!0}if(e[t]===`/`&&e[t+1]===`/`){for(;t<e.length&&e[t]!==`
`;)t++;return!0}return!1}function c(n){if(l(n)){if(Xe(e[t]))for(;t<e.length&&Ze(e[t]);)t++;return a(),!0}return!1}function l(n){o(!0);for(let r of n){let n=t+r.length;if(e.slice(t,n)===r)return t=n,!0}return!1}function u(r){return e[t]===r?(n+=e[t],t++,!0):!1}function d(n){return e[t]===n?(t++,!0):!1}function f(){return d(`\\`)}function p(){return a(),e[t]===`.`&&e[t+1]===`.`&&e[t+2]===`.`?(t+=3,a(),d(`,`),!0):!1}function m(){if(e[t]===`{`){n+=`{`,t++,a(),d(`,`)&&a();let r=!0;for(;t<e.length&&e[t]!==`}`;){let o;if(r?(o=!0,r=!1):(o=u(`,`),o||(n=J(n,`,`)),a()),p(),!(_()||S(!0))){e[t]===`}`||e[t]===`{`||e[t]===`]`||e[t]===`[`||e[t]===void 0?n=q(n,`,`):A();break}a();let s=u(`:`),c=t>=e.length;s||(tt(e[t])||c?n=J(n,`:`):j()),i()||(s||c?n+=`null`:j())}return e[t]===`}`?(n+=`}`,t++):n=J(n,`}`),!0}return!1}function h(){if(e[t]===`[`){n+=`[`,t++,a(),d(`,`)&&a();let r=!0;for(;t<e.length&&e[t]!==`]`;)if(r?r=!1:u(`,`)||(n=J(n,`,`)),p(),!i()){n=q(n,`,`);break}return e[t]===`]`?(n+=`]`,t++):n=J(n,`]`),!0}return!1}function g(){let e=!0,t=!0;for(;t;)e?e=!1:u(`,`)||(n=J(n,`,`)),t=i();t||(n=q(n,`,`)),n=`[\n${n}\n]`}function _(){let r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:-1,o=e[t]===`\\`;if(o&&=(t++,!0),K(e[t])){let s=st(e[t])?st:lt(e[t])?lt:ct(e[t])?ct:ot,c=t,l=n.length,u=`"`;for(t++;;){if(t>=e.length){let i=w(t-1);return!r&&W(e.charAt(i))?(t=c,n=n.substring(0,l),_(!0)):(u=J(u,`"`),n+=u,!0)}if(t===i)return u=J(u,`"`),n+=u,!0;if(s(e[t])){let i=t,o=u.length;if(u+=`"`,t++,n+=u,a(!1),r||t>=e.length||W(e[t])||K(e[t])||U(e[t]))return v(),!0;let s=w(i-1),d=e.charAt(s);if(d===`,`)return t=c,n=n.substring(0,l),_(!1,s);if(W(d))return t=c,n=n.substring(0,l),_(!0);n=n.substring(0,l),t=i+1,u=`${u.substring(0,o)}\\${u.substring(o)}`}else if(r&&et(e[t])){if(e[t-1]===`:`&&Qe.test(e.substring(c+1,t+2)))for(;t<e.length&&$e.test(e[t]);)u+=e[t],t++;return u=J(u,`"`),n+=u,v(),!0}else if(e[t]===`\\`){let n=e.charAt(t+1);if(pt[n]!==void 0)u+=e.slice(t,t+2),t+=2;else if(n===`u`){let n=2;for(;n<6&&Je(e[t+n]);)n++;n===6?(u+=e.slice(t,t+6),t+=6):t+n>=e.length?t=e.length:M()}else u+=n,t+=2}else{let n=e.charAt(t);n===`"`&&e[t-1]!==`\\`?(u+=`\\${n}`,t++):rt(n)?(u+=ft[n],t++):(Ye(n)||D(n),u+=n,t++)}o&&f()}}return!1}function v(){let r=!1;for(a();e[t]===`+`;){r=!0,t++,a(),n=q(n,`"`,!0);let e=n.length;n=_()?ut(n,e,1):J(n,`"`)}return r}function y(){let r=t;if(e[t]===`-`){if(t++,T())return E(r),!0;if(!U(e[t]))return t=r,!1}for(;U(e[t]);)t++;if(e[t]===`.`){if(t++,T())return E(r),!0;if(!U(e[t]))return t=r,!1;for(;U(e[t]);)t++}if(e[t]===`e`||e[t]===`E`){if(t++,(e[t]===`-`||e[t]===`+`)&&t++,T())return E(r),!0;if(!U(e[t]))return t=r,!1;for(;U(e[t]);)t++}if(!T())return t=r,!1;if(t>r){let i=e.slice(r,t),a=/^0\d/.test(i);return n+=a?`"${i}"`:i,!0}return!1}function b(){return x(`true`,`true`)||x(`false`,`false`)||x(`null`,`null`)||x(`True`,`true`)||x(`False`,`false`)||x(`None`,`null`)}function x(r,i){return e.slice(t,t+r.length)===r?(n+=i,t+=r.length,!0):!1}function S(r){let a=t;if(Xe(e[t])){for(;t<e.length&&Ze(e[t]);)t++;let n=t;for(;G(e,n);)n++;if(e[n]===`(`)return t=n+1,i(),e[t]===`)`&&(t++,e[t]===`;`&&t++),!0}for(;t<e.length&&!et(e[t])&&!K(e[t])&&(!r||e[t]!==`:`);)t++;if(e[t-1]===`:`&&Qe.test(e.substring(a,t+2)))for(;t<e.length&&$e.test(e[t]);)t++;if(t>a){for(;G(e,t-1)&&t>0;)t--;let r=e.slice(a,t);return n+=r===`undefined`?`null`:JSON.stringify(r),e[t]===`"`&&t++,!0}}function C(){if(e[t]===`/`){let r=t;for(t++;t<e.length&&(e[t]!==`/`||e[t-1]===`\\`);)t++;return t++,n+=JSON.stringify(e.substring(r,t)),!0}}function w(t){let n=t;for(;n>0&&G(e,n);)n--;return n}function T(){return t>=e.length||W(e[t])||G(e,t)}function E(r){n+=`${e.slice(r,t)}0`}function D(e){throw new H(`Invalid character ${JSON.stringify(e)}`,t)}function O(){throw new H(`Unexpected character ${JSON.stringify(e[t])}`,t)}function k(){throw new H(`Unexpected end of json string`,e.length)}function A(){throw new H(`Object key expected`,t)}function j(){throw new H(`Colon expected`,t)}function M(){throw new H(`Invalid unicode character "${e.slice(t,t+6)}"`,t)}}function ht(e,t){return e[t]===`*`&&e[t+1]===`/`}var gt=[`overview`,`thought`,`tool`];function _t(e,t){let n=0;for(let r of t)for(let t=Math.min(r.length-1,e.length);t>=1;t--)if(e.endsWith(r.slice(0,t))){n=Math.max(n,t);break}return n>0?e.slice(0,e.length-n):e}var vt=[...gt.map(e=>`<${e}>`),...gt.map(e=>`</${e}>`),`<answer>`,`</answer>`];function yt(e,t,n){let r=e.length,i=``,a=`TEXT`,o=0,s=e=>{let t=e.trim();if(t)try{let e=JSON.parse(mt(t));n.tools||=[],n.tools.push({name:e.name||`unknown_tool`,params:e.params||{}})}catch(e){console.error(`JSON Repair/Parse failed:`,e,`Content:`,t)}};for(;o<r;){if(a===`TEXT`){e.startsWith(`<overview>`,o)?(a=`OVERVIEW`,o+=10):e.startsWith(`<thought>`,o)?(a=`THOUGHT`,o+=9):e.startsWith(`<tool>`,o)?(a=`TOOL`,o+=6):e.startsWith(`<answer>`,o)?o+=8:e.startsWith(`</answer>`,o)?o+=9:(i+=e[o],o++);continue}if(a===`OVERVIEW`){let t=e.indexOf(`</overview>`,o);t===-1?o=r:(n.overview+=e.slice(o,t).trim(),o=t+11,a=`TEXT`);continue}if(a===`THOUGHT`){let t=e.indexOf(`</thought>`,o);t===-1?(n.thought+=_t(e.slice(o),[`</thought>`]).trim(),o=r):(n.thought+=e.slice(o,t).trim(),o=t+10,a=`TEXT`);continue}let t=e.indexOf(`</tool>`,o),c=e.indexOf(`<tool>`,o);c!==-1&&(t===-1||c<t)?(s(e.slice(o,c)),o=c+6):t===-1?o=r:(s(e.slice(o,t)),o=t+7,a=`TEXT`)}let c=_t(i.replace(/\n{2,}/g,`
`),vt).trim();c&&(n[t]+=n[t]?`\n${c}`:c)}function bt(e){let t={overview:``,thought:``,answer:``};return e.thought&&yt(e.thought,`thought`,t),yt(e.answer,`answer`,t),{role:`assistant`,raw:e.answer,formatted:{thought:t.thought,answer:t.answer,overview:t.overview,...t.tools?{tools:t.tools}:{}}}}function xt(e){let t=e.match(/^---\s*\n([\s\S]*?)\n---\s*/);if(!t)throw Error(`can not parse markdown as Skill: ${e.slice(10)}...`);let n=t[1],r=e=>e.match(/^name:\s*(.*)$/m)?.[1]?.trim()||``,i=e=>e.match(/^description:\s*(.*)$/m)?.[1]?.trim()||``,a=r(n);return{id:a||`unknown-skill`,name:a,description:i(n),content:e}}function St(e,t){return Object.assign(e,{abort:t})}function Ct(e){return typeof structuredClone==`function`?structuredClone(e):JSON.parse(JSON.stringify(e))}function wt(e){return e.map(e=>Ct(e))}function Tt(e,t){return{role:`user`,raw:e,assets:t}}function Y(e,t){if(!e)return t;let n=e.safeParse(t);if(!n.success)throw n.error;return n.data}var Et=`你是是一个运行在浏览器环境中的AI助手，你必须遵循以下响应规则进行文本回复：

# 核心交互模式：ReAct

当你需要开始行动时，不要立即给出答案，必须先思考，确定下一步后，再给出回答：
第一步，思考问题：用户是否给出了足够的信息，如果没有，是否可以通过调用工具侧面获取这些信息？listTools很有用，大部分情况下你可以直接调用以获取更多可用工具。
第二步，获取信息：如果信息不足，尝试列出可用的Tools帮助自己获取更多信息，通过工具的描述了解如何使用这些Tools。
第三步，学习技能：如果用户的问题较为复杂，可以列出可用的Skills，如果有可能满足要求的SKills，大胆读取这些Skills的完整信息，这将非常有助于解决用户的问题。
第四步，行动(Act)：当你获取了足够多的信息，就可以开始行动，不要担心，大胆去使用工具Tools，即使工具报错也会返回给你足够的信息，根据这些信息调整你的下一步行动，直到最终给出用户满意的解答。

# 响应规则
对话引导： 当对话开始或话题切换时，必须使用 <overview></overview> 标签返回一个新的对话标题。

工具调用： 如果需要使用工具，请在回复末尾包含且仅包含一个 <tool></tool> 代码块。

JSON 规范： <tool> 标签内的内容必须是合法的 JSON 格式。

JSON 结构： 必须严格遵守此结构：{"name":"工具名称","params":{}}。

调用限制： 单次回复中禁最多出现3次 <tool> 调用。

自检机制： 如果不确定可用工具，请优先调用内置工具 listTools；如果需要可用技能/知识库，请调用 listSkills 并按需用 loadSkill 加载全文。

后续处理： 收到工具执行结果后，请继续按照此协议进行推理和回答。

允许使用的标签
<overview>：用于输出概述、标题，注意回复不能只包含overview。
<tool>：用于执行工具调用（内容为 JSON）。

**!!!你必须严格按照给定的xml格式来调用工具，所有的xml标签都必须闭合，所有的json文本必须被引号包裹以便能被正确解析！**
例如，你可以这样来查看当前所有的工具，注意你的文本中必须包含\`<tool>\`和\`</tool>\`，并且xml块中包裹的只能是合法JSON字符串：

 <tool>{"name":"listTools","params":{}}</tool>

以下是可用的工具（以 JSON Schema 定义注入）：
{{TOOLS_JSON}}`,Dt=`{{TOOLS_JSON}}`,Ot=P().describe(`Array of tool prompt definitions as human-readable strings.`),kt=z(L({id:P(),name:P(),description:P()})).describe(`Array of skill metadata including id, name, description.`),At=L({id:P().trim().min(1)}).describe(`Object with required id:string (from listSkills result).`),jt=L({id:P(),name:P(),description:P(),content:P()}).describe(`Skill payload including id, name, description, content(markdown).`);function Mt(e){return typeof e==`object`&&!!e&&`_def`in e&&`safeParse`in e&&typeof e.safeParse==`function`}function Nt(e){if(!e)return`None`;let t=ye(e);return t.description?t.description:typeof t.type==`string`?t.type:`Complex schema`}function Pt(e){if(!e)return`None`;let t=ye(e);return`这是一份JSON Schema的描述：\n${JSON.stringify(t)}`}function Ft(e){let t=e.argSchema?Pt(e.argSchema):`No parameters`,n=Nt(e.returnSchema);return`工具名称: ${e.name}\n工具描述: ${e.describe}\n工具接收的参数: ${t}\n工具返回值类型: ${n}`}function It(e){try{return JSON.stringify(e)}catch{return String(e)}}function Lt(e,t,n){return{role:`tool`,raw:It({name:e,params:t,returns:n}),formatted:{name:e,params:t,returns:n}}}function Rt(e,t,n){return{role:`tool`,raw:It({name:e,params:t,errors:n}),formatted:{name:e,params:t,errors:n}}}function zt(e){return X({name:`listTools`,describe:`List available tools and their argument and return schema summary.`,argSchema:void 0,returnSchema:Ot,handler:()=>`下面是所有可用工具的列表：\n\n${e.map((e,t)=>`${t}. ${Ft(e)}`).join(`

`)}`})}function Bt(e){return X({name:`listSkills`,describe:`List available skills (metadata only). Use loadSkill to read full content.`,argSchema:void 0,returnSchema:kt,handler:()=>e.map(e=>({id:e.id,name:e.name,description:e.description}))})}function Vt(e){return X({name:`loadSkill`,describe:`Load a skill full markdown content by id.`,argSchema:At,returnSchema:jt,handler:async({id:t})=>{let n=e.get(t);if(!n)throw Error(`Skill "${t}" not found.`);let r=await n.load();return{id:n.id,name:n.name,description:n.description,content:r}}})}function Ht(e){return e.map(Ft).join(`

`)}function Ut(e){return Et.replace(Dt,Ht(e)).trim()}async function Wt(e,t,n){let r=e.get(t.name);if(!r)return Rt(t.name,t.params,{message:`Tool "${t.name}" not found.`});let i;try{i=Y(r.argSchema,t.params)}catch(e){return Rt(r.name,t.params,e)}try{let e=await r.handler(i,n),t=Y(r.returnSchema,e);return Lt(r.name,i,t)}catch(e){return Rt(r.name,i,e)}}function X(e){let{name:t,describe:n,argSchema:r,returnSchema:i,handler:a}=e;if(!Mt(i))throw Error(`createTool requires zod schemas for returnSchema.`);return{name:t,describe:n,argSchema:r,returnSchema:i,handler:a}}var Gt=20;function Kt({history:e=[],provider:t,tools:n,skills:r,systemPrompt:i,maxToolRounds:a=Gt}){let o=wt(e),s=[...n],c=(r??[]).map(e=>{let t=e.id??e.name;if(typeof t!=`string`||!t.trim())throw Error(`Skill id must be a non-empty string.`);let n=e.name??t,r=e.description??``,i=e.content,a=e.loader;return{id:t,name:n,description:r,load:async()=>typeof i==`string`?i:typeof a==`function`?await a():``}}),l=new Map(c.map(e=>[e.id,e])),u=Bt(c),d=Vt(l),f=zt([u,d,...s]),p=[...s,f,u,d],m=new Map(p.map(e=>[e.name,e])),h=e=>({history:e,tools:p}),g=[[...o.filter(e=>e.role===`system`),{role:`system`,raw:i??``}].reduce((e,t)=>({role:`system`,raw:`${e.raw}${t.raw.length?`\n\nAdditional system prompt:\n${t.raw}`:``}`}),{role:`system`,raw:Ut([f,u])}),...o.filter(e=>e.role!==`system`)],_=(e,n=0)=>{let r,i=null,o=(async()=>{if(n>=a)return(async function*(){})();r=t.request({history:e});async function*o(){yield{history:[...e]};let t=await r;for await(let r of t){let t=bt(r),a=t.formatted.tools??[];if(a.length===0){yield{history:[...e,t]};continue}let o=a.map(async({name:t,params:n})=>{let r=Date.now();try{let i=await Wt(m,{name:t,params:n},h([...e])),a=Date.now()-r;return{...i,formatted:{...i.formatted,runningTime:a}}}catch(e){let i=Date.now()-r;return{role:`tool`,raw:`Error: ${e.message||String(e)}`,formatted:{name:t,params:n,runningTime:i,errors:e.message}}}}),s=await Promise.all(o),c=[...e,t,...s];yield{history:c};let l=_(c,n+1);i=()=>l.abort(),yield*await l,i=null;return}}return o()})();return o.abort=()=>{r?.abort?.(),i?.()},o},v=(({message:e,assets:t})=>{let n=[...g],r=Tt(e,t);return n.push(r),_(n,0)});return v.rerunToolCall=async e=>{let t=o[e];if(!t||t.role!==`tool`)throw Error(`No tool call at history index ${e}.`);let n=await Wt(m,{name:t.formatted.name,params:t.formatted.params},h([...g]));if(n.formatted.errors!==void 0){let e=n.formatted.errors;throw e instanceof Error?e:Error(JSON.stringify(e))}return n.formatted.returns},v}var Z=e(te(),1),Q=e(t(),1),$=a(),qt=`Radio`,[Jt,Yt]=u(qt),[Xt,Zt]=Jt(qt),Qt=Q.forwardRef((e,t)=>{let{__scopeRadio:n,name:r,checked:i=!1,required:a,disabled:o,value:s=`on`,onCheck:c,form:u,...d}=e,[f,m]=Q.useState(null),h=l(t,e=>m(e)),g=Q.useRef(!1),_=f?u||!!f.closest(`form`):!0;return(0,$.jsxs)(Xt,{scope:n,checked:i,disabled:o,children:[(0,$.jsx)(w.button,{type:`button`,role:`radio`,"aria-checked":i,"data-state":rn(i),"data-disabled":o?``:void 0,disabled:o,value:s,...d,ref:h,onClick:p(e.onClick,e=>{i||c?.(),_&&(g.current=e.isPropagationStopped(),g.current||e.stopPropagation())})}),_&&(0,$.jsx)(nn,{control:f,bubbles:!g.current,name:r,value:s,checked:i,required:a,disabled:o,form:u,style:{transform:`translateX(-100%)`}})]})});Qt.displayName=qt;var $t=`RadioIndicator`,en=Q.forwardRef((e,t)=>{let{__scopeRadio:n,forceMount:r,...i}=e,a=Zt($t,n);return(0,$.jsx)(f,{present:r||a.checked,children:(0,$.jsx)(w.span,{"data-state":rn(a.checked),"data-disabled":a.disabled?``:void 0,...i,ref:t})})});en.displayName=$t;var tn=`RadioBubbleInput`,nn=Q.forwardRef(({__scopeRadio:e,control:t,checked:n,bubbles:r=!0,...i},a)=>{let o=Q.useRef(null),s=l(o,a),c=d(n),u=g(t);return Q.useEffect(()=>{let e=o.current;if(!e)return;let t=window.HTMLInputElement.prototype,i=Object.getOwnPropertyDescriptor(t,`checked`).set;if(c!==n&&i){let t=new Event(`click`,{bubbles:r});i.call(e,n),e.dispatchEvent(t)}},[c,n,r]),(0,$.jsx)(w.input,{type:`radio`,"aria-hidden":!0,defaultChecked:n,...i,tabIndex:-1,ref:s,style:{...i.style,...u,position:`absolute`,pointerEvents:`none`,opacity:0,margin:0}})});nn.displayName=tn;function rn(e){return e?`checked`:`unchecked`}var an=[`ArrowUp`,`ArrowDown`,`ArrowLeft`,`ArrowRight`],on=`RadioGroup`,[sn,cn]=u(on,[ee,Yt]),ln=ee(),un=Yt(),[dn,fn]=sn(on),pn=Q.forwardRef((e,t)=>{let{__scopeRadioGroup:n,name:r,defaultValue:i,value:a,required:o=!1,disabled:s=!1,orientation:c,dir:l,loop:u=!0,onValueChange:d,...f}=e,p=ln(n),m=se(l),[g,_]=h({prop:a,defaultProp:i??null,onChange:d,caller:on});return(0,$.jsx)(dn,{scope:n,name:r,required:o,disabled:s,value:g,onValueChange:_,children:(0,$.jsx)(ge,{asChild:!0,...p,orientation:c,dir:m,loop:u,children:(0,$.jsx)(w.div,{role:`radiogroup`,"aria-required":o,"aria-orientation":c,"data-disabled":s?``:void 0,dir:m,...f,ref:t})})})});pn.displayName=on;var mn=`RadioGroupItem`,hn=Q.forwardRef((e,t)=>{let{__scopeRadioGroup:n,disabled:r,...i}=e,a=fn(mn,n),o=a.disabled||r,s=ln(n),c=un(n),u=Q.useRef(null),d=l(t,u),f=a.value===i.value,m=Q.useRef(!1);return Q.useEffect(()=>{let e=e=>{an.includes(e.key)&&(m.current=!0)},t=()=>m.current=!1;return document.addEventListener(`keydown`,e),document.addEventListener(`keyup`,t),()=>{document.removeEventListener(`keydown`,e),document.removeEventListener(`keyup`,t)}},[]),(0,$.jsx)(de,{asChild:!0,...s,focusable:!o,active:f,children:(0,$.jsx)(Qt,{disabled:o,required:a.required,checked:f,...c,...i,name:a.name,ref:d,onCheck:()=>a.onValueChange(i.value),onKeyDown:p(e=>{e.key===`Enter`&&e.preventDefault()}),onFocus:p(i.onFocus,()=>{m.current&&u.current?.click()})})})});hn.displayName=mn;var gn=`RadioGroupIndicator`,_n=Q.forwardRef((e,t)=>{let{__scopeRadioGroup:n,...r}=e;return(0,$.jsx)(en,{...un(n),...r,ref:t})});_n.displayName=gn;var vn=pn,yn=hn,bn=_n,xn=X({name:`getEnv`,describe:`获取当前环境信息，包括当前日期、当前账单数据的过滤视图等，当用户提出获取“当前账单”，或者“当前时间”相关的问题时，应该首先调用这个工具来获取最新的环境信息，辅助回答用户的问题。`,argSchema:void 0,returnSchema:P().describe(`环境信息的字符串表示`),handler(){return Te()}}),Sn=e(T(),1);Z.default.extend(Sn.default);var Cn=(e,t)=>{let{range:n,interval:r=`[)`,desc:i=!0,customFilter:a}=t,[o,s]=n.map(e=>e?(0,Z.default)(e):null),c=null,l=null;o&&s?[c,l]=o.isBefore(s)?[o,s]:[s,o]:c=o||s||null;let u=[];for(let t of e){let e=Z.default.unix(t.time/1e3),d=!0;if(o&&s)d=e.isBetween(c,l,null,r);else if(o||s){let t=o||s,i=r.startsWith(`[`);d=n[0]?i?e.isSameOrAfter(t):e.isAfter(t):r.endsWith(`]`)?e.isSameOrBefore(t):e.isBefore(t)}if(d&&(!a||a(t))&&u.push(t),i&&o&&e.isBefore(c)||!i&&s&&e.isAfter(l))break}return u},wn=(e,t,n=!0,r)=>Cn(e,{range:t,desc:n,customFilter:r});function Tn(e,t){let{items:n,meta:r}=t,i=[...j,...r.categories??[]],a=r.tags??[],o={},s,c;if(e.startTime&&(s=(0,Z.default)(e.startTime).startOf(`day`).valueOf()),e.endTime&&(c=(0,Z.default)(e.endTime).endOf(`day`).valueOf()),e.categoryNames?.length){let t=[];for(let n of e.categoryNames){let e=i.filter(e=>e.name.toLowerCase().includes(n.toLowerCase()));t.push(...e.map(e=>e.id))}o.categories=[...new Set(t)]}if(e.tagNames?.length){let t=[];for(let n of e.tagNames){let e=a.find(e=>e.name.toLowerCase()===n.toLowerCase());e&&t.push(e.id)}o.tags=t}e.keyword&&(o.comment=e.keyword),e.minAmount!==void 0&&(o.minAmountNumber=ve(e.minAmount)),e.maxAmount!==void 0&&(o.maxAmountNumber=ve(e.maxAmount)),e.billType&&(o.type=e.billType);let l=O({...o,start:void 0,end:void 0},{categories:i,tags:a,baseCurrency:r.baseCurrency}),u=Cn(n,{range:[s,c],interval:`[]`,desc:!0,customFilter:l}),d=u.filter(e=>e.type===`income`).reduce((e,t)=>e+t.amount,0),f=u.filter(e=>e.type===`expense`).reduce((e,t)=>e+t.amount,0);return{bills:u,statistics:{total:u.length,totalIncome:d,totalExpense:f,netAmount:d-f}}}function En(e){let t=[...j,...e.categories??[]],n=e.tags??[],r={},i=[];for(let e of t)e.parent?(r[e.parent]||(r[e.parent]=[]),r[e.parent].push(e)):i.push(e);return{categories:{all:t,tree:r,roots:i},tags:n,currencies:e.customCurrencies??[]}}var Dn=e=>A(e),On=(e=[])=>e.reduce((e,t)=>(e[t.id]=t.name,e),{}),kn=(e=[])=>e.reduce((e,t)=>(e[t.id]=t.name,e),{});function An(e,t){let{groupBy:n=`category`,limit:r=10,includeTrend:i=!1,...a}=e,{bills:o,statistics:s}=Tn(a,t),c=On([...j,...t.meta.categories??[]]),l=kn(t.meta.tags),u={},d={};o.forEach(e=>{let t=Dn(e.amount),r=`Unknown`;if(n===`category`?r=c[e.categoryId]||`Unknown Category`:n===`tag`?e.tagIds?.length?(e.tagIds.forEach(e=>{let n=l[e]||`Unknown Tag`;u[n]||(u[n]={amount:0,count:0}),u[n].amount+=t,u[n].count+=1}),r=``):(r=`No Tag`,u[r]||(u[r]={amount:0,count:0}),u[r].amount+=t,u[r].count+=1):n===`day`?r=(0,Z.default)(e.time).format(`YYYY-MM-DD`):n===`month`?r=(0,Z.default)(e.time).format(`YYYY-MM`):n===`year`?r=(0,Z.default)(e.time).format(`YYYY`):n===`type`&&(r=e.type===`expense`?`支出`:`收入`),r&&(u[r]||(u[r]={amount:0,count:0}),u[r].amount+=t,u[r].count+=1),i){let n=(0,Z.default)(e.time).format(`YYYY-MM-DD`);d[n]=(d[n]||0)+t}});let f=Object.entries(u).map(([e,t])=>({name:e,...t})).sort((e,t)=>t.amount-e.amount),p=f.slice(0,r),m=f.slice(r);if(m.length>0){let e=m.reduce((e,t)=>({amount:e.amount+t.amount,count:e.count+t.count}),{amount:0,count:0});p.push({name:`Others`,amount:e.amount,count:e.count})}let h=p.reduce((e,t)=>e+t.amount,0),g=p.map(e=>({...e,amount:Number(e.amount.toFixed(2)),percentage:h===0?`0%`:`${(e.amount/h*100).toFixed(1)}%`})),_=i?Object.entries(d).map(([e,t])=>({date:e,amount:Number(t.toFixed(2))})).sort((e,t)=>(0,Z.default)(e.date).valueOf()-(0,Z.default)(t.date).valueOf()):void 0;return{meta:{totalAmount:Number(Dn(a.billType===`income`?s.totalIncome:a.billType===`expense`?s.totalExpense:s.totalIncome-s.totalExpense).toFixed(2)),count:s.total,currency:t.meta.baseCurrency||`CNY`,dateRange:a.startTime&&a.endTime?`${a.startTime} to ${a.endTime}`:`All Time`},distribution:g,trend:_}}async function jn(e,t=`file`){let n=e.split(`;base64,`);if(n.length!==2)throw Error(`Invalid Base64 string format. Expected a Data URL.`);let r=n[0],i=n[1],a=r.match(/data:(.*?)(;|$)/),o=a&&a[1]?a[1]:`application/octet-stream`,s=t,c=r.match(/name=([^;]+)/i);if(c&&c[1])try{s=decodeURIComponent(c[1])}catch{s=c[1]}else{let e=o.match(/\/(.+)/);e&&e[1]&&s.indexOf(`.`)===-1?s=`${t}.${e[1]}`:s.indexOf(`.`)===-1&&(s=t)}let l=atob(i),u=new ArrayBuffer(l.length),d=new Uint8Array(u);for(let e=0;e<l.length;e++)d[e]=l.charCodeAt(e);let f=new Blob([d],{type:o});return new File([f],s,{type:o,lastModified:Date.now()})}var Mn=Q.forwardRef(({className:e,...t},n)=>(0,$.jsx)(vn,{className:_(`grid gap-2`,e),...t,ref:n}));Mn.displayName=vn.displayName;var Nn=Q.forwardRef(({className:e,...t},n)=>(0,$.jsx)(yn,{ref:n,className:_(`aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50`,e),...t,children:(0,$.jsx)(bn,{className:`flex items-center justify-center`,children:(0,$.jsx)(ne,{className:`h-3.5 w-3.5 fill-primary`})})}));Nn.displayName=yn.displayName;var Pn=({currentMeta:e,incomingMeta:t,strategy:n,asMine:r,creators:i,meLabel:a,unknownLabel:o,t:s})=>{let c=n===`overlap`?t?.categories??j:ae((e?.categories?.length??0)===0?j:e.categories,[...t?.categories??[]]),l=new Map(c.map(e=>[e.id,e])),u=new Map;for(let t of e?.tags??[])u.set(t.id,t);for(let e of t?.tags??[])u.set(e.id,e);let d=new Map,f=e=>{for(let t of e??[])d.set(t.id,{symbol:t.symbol})};f(e?.customCurrencies),f(t?.customCurrencies);for(let e of D)d.has(e.id)||d.set(e.id,{symbol:e.symbol});let p=e?.baseCurrency??`CNY`,m=new Map(i.map(e=>[e.id,e]));return{resolveCategory:e=>{let t=l.get(e);return t?k(t,s):void 0},resolveTags:e=>(e??[]).map(e=>u.get(e)).filter(e=>e!==void 0),resolveCreatorLabel:e=>r?a:m.get(e)?.name??o,resolveCurrency:e=>{if(!(!e||e===p))return d.get(e)}}},Fn=({bill:e,resolvers:t,showTime:n,showAssets:r,className:i})=>(0,$.jsx)(he,{category:t.resolveCategory(e.categoryId),tags:t.resolveTags(e.tagIds),creatorLabel:t.resolveCreatorLabel(e.creatorId),targetCurrency:t.resolveCurrency(e.currency?.target),currencyAmount:e.currency?.amount,type:e.type,amount:e.amount,time:e.time,comment:e.comment,images:e.images,showTime:n,showAssets:r,className:i}),[In,Ln]=m(({edit:e,onCancel:t,onConfirm:n})=>{let i=r(),a=oe(),[o,s]=(0,Q.useState)([]),[c,l]=(0,Q.useState)(!0),[u,d]=(0,Q.useState)(e?.asMine??!0);(0,Q.useEffect)(()=>{(async()=>await(e?.bills?Promise.all(e.bills.map(async e=>{let t=e.images?await Promise.all(e.images?.map(e=>e instanceof File?e:e.startsWith(`data:`)?jn(e):e)):void 0;return{...e,images:t}})):[]))().then(e=>{s(e)}).catch(console.error).finally(()=>{l(!1)})},[e?.bills]);let[f,p]=(0,Q.useState)(`append`),[m,h]=(0,Q.useState)([]);(0,Q.useEffect)(()=>{f===`append`&&(async()=>{let e=o,t=await E.getState().refreshBillList();return e?.filter(e=>t.every(t=>t.id!==e.id&&t.time!==e.time))??[]})().then(e=>{h(e)})},[o,f]);let g=f===`append`?m.length:e?.bills.length??0,_=f===`append`?m:o,y=(0,Q.useMemo)(()=>Pn({currentMeta:E.getState().infos?.meta,incomingMeta:e?.meta,strategy:f,asMine:u,creators:a,meLabel:i(`me`),unknownLabel:`unknown-user`,t:i}),[e?.meta,f,u,a,i]),b=(0,Q.useRef)(null),x=je({count:_.length,getScrollElement:()=>b.current,estimateSize:()=>72,overscan:5});return(0,$.jsx)(re,{title:`导入预览`,onBack:t,className:`h-full overflow-hidden rounded-md`,right:(0,$.jsx)(S,{disabled:c,onClick:()=>{f===`append`?n?.({bills:m,meta:e?.meta,strategy:`append`,asMine:u}):n?.({bills:e?.bills??[],meta:e?.meta,strategy:`overlap`,asMine:u})},children:i(`confirm`)}),children:(0,$.jsxs)(`div`,{className:`relative flex-1 flex flex-col w-full gap-2 overflow-hidden`,children:[(0,$.jsxs)(`div`,{className:`flex flex-col px-4 gap-3`,children:[(0,$.jsxs)(`div`,{className:`opacity-60 text-sm`,children:[i(`import-strategy`),`:`,(0,$.jsx)(`span`,{children:`${i(`import-description`)}`})]}),(0,$.jsxs)(Mn,{value:f,className:`flex flex-col gap-2`,onValueChange:e=>p(e===`append`?`append`:`overlap`),children:[(0,$.jsxs)(v,{className:`flex gap-2`,children:[(0,$.jsx)(Nn,{value:`append`}),i(`strategy-add`)]}),(0,$.jsxs)(v,{className:`flex gap-2`,children:[(0,$.jsx)(Nn,{value:`overlap`}),i(`strategy-overlap`)]})]})]}),(0,$.jsxs)(`div`,{className:`flex flex-col px-4 gap-3`,children:[(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`div`,{className:`opacity-60 text-sm`,children:i(`put-ledgers-on-me`)}),(0,$.jsx)(fe,{checked:u,onCheckedChange:d})]}),!u&&(0,$.jsx)(`p`,{className:`text-xs text-red-700`,children:i(`unkown-users-may-show-up-when-analyze`)})]}),(0,$.jsxs)(`div`,{className:`flex-1 flex flex-col px-4 gap-3 overflow-hidden`,children:[(0,$.jsxs)(`p`,{className:`opacity-60 text-sm`,children:[i(`preview`),`:`]}),f===`append`?(0,$.jsx)(`div`,{children:i(`append-preview-description`,{n:(0,$.jsx)(`span`,{className:`text-green-700`,children:g})})}):(0,$.jsx)(`div`,{children:(0,$.jsx)(`div`,{className:`text-red-700`,children:i(`overlap-preview-description`,{n:(0,$.jsx)(`span`,{className:`text-red-700`,children:g})})})}),(0,$.jsx)(`div`,{ref:b,className:`flex-1 overflow-auto rounded-md border divide-y`,children:(0,$.jsx)(`div`,{style:{height:`${x.getTotalSize()}px`,width:`100%`,position:`relative`},children:x.getVirtualItems().map(e=>{let t=_[e.index];return(0,$.jsx)(`div`,{"data-index":e.index,ref:x.measureElement,style:{position:`absolute`,top:`${e.start}px`,left:0,width:`100%`},children:(0,$.jsx)(Fn,{bill:t,resolvers:y,showTime:!0,showAssets:!0,className:`w-full`})},t.id)})})})]}),c&&(0,$.jsx)(`div`,{className:`absolute top-0 left-0 w-full h-full bg-background/60 flex items-center justify-center`,children:(0,$.jsx)(`i`,{className:`icon-[mdi--loading] animate-spin`})})]})})},{dialogTitle:`experimental-functions`,dialogModalClose:!0,contentClassName:`h-full w-full max-h-full max-w-full rounded-none sm:rounded-md sm:max-h-[min(520px,calc(100vh-32px))] sm:w-[90vw] sm:max-w-[500px]`}),Rn=async e=>{let{strategy:t,asMine:n,...r}=e,i=b(E.getState().infos?.meta??{}),a=t===`overlap`?r.meta:(()=>{if(!r.meta?.categories)return le(i,r.meta);let e=b(ae((i.categories?.length??0)===0?j:i.categories,[...r.meta?.categories??[]])),t=le(i,r.meta);return x(j,e)?t.categories=void 0:t.categories=e,t})(),o=pe.getState().currentBookId;if(!o)return;let c=s.getState().id;await C.batch(o,[...r.bills.map(e=>({id:e.id,type:`update`,value:{...e,creatorId:n?c:e.creatorId},timestamp:e.__update_at})),{type:`meta`,metaValue:a}],t===`overlap`)},zn=L({id:P().describe(`账单的唯一标识，应保证唯一。建议使用 crypto.randomUUID()，或 time 与序号拼接形式。`),type:F([`income`,`expense`]).describe(`账单类型：income(收入) 或 expense(支出)。`),categoryId:P().describe(`账单分类的 id。必须引用一个已存在的分类（先调用 getAccountMeta 获取可用分类），或者在 meta.categories 中新增自定义分类后再使用其 id。`),creatorId:Se([R(),P()]).describe(`创建者 id。若不确定，可填写 0。`),comment:P().optional().describe(`备注。导入时不确定的信息也可保存在这里。`),amount:R().int().describe(`整数金额，单位为分的一万分之一（实际金额 × 10000）。例如 ¥12.34 应写作 123400；¥0.01 应写作 100。切勿直接传入人民币元值。`),time:R().describe(`账单发生时间，毫秒级 epoch 时间戳（Date.now() 同单位）。`),images:z(P()).optional().describe(`账单图片附件，字符串数组。每个元素可以是 (1) data: URI（如 'data:image/png;base64,...'）；(2) 公网可访问的 http(s) URL。请勿传入本地文件路径。`),location:L({latitude:R(),longitude:R(),accuracy:R()}).optional().describe(`地理位置（可选）。`),tagIds:z(P()).optional().describe(`标签 id 数组。必须引用已存在的标签 id（通过 getAccountMeta 获取），或在 meta.tags 中新增标签后再使用其 id。`),currency:L({base:P().describe(`记账时的本位币代码，如 CNY。`),target:P().describe(`实际记账币种代码。`),amount:R().describe(`原始记账金额（人类可读金额，例如 12.34），不需要 ×10000。`)}).optional().describe(`多币种信息（可选）。`)}).describe(`单笔账单，字段含义对应 Cent 的 Bill 类型。`),Bn=L({type:F([`income`,`expense`]),name:P(),id:P(),icon:P().optional().default(``),color:P().optional().default(``),customName:xe(!0).describe(`新增分类必须为 true。`),parent:P().optional().describe(`父类 id，留空表示该项本身就是父类。`)}).describe(`新增的自定义分类。仅在已有分类中没有合适项时新增，否则应复用 getAccountMeta 返回的已有分类。`),Vn=L({id:P(),name:P()}).describe(`新增的标签。仅在已有标签中没有合适项时新增。`),Hn=L({categories:z(Bn).optional().describe(`本次导入需要新增的分类。`),tags:z(Vn).optional().describe(`本次导入需要新增的标签。`)}).partial().optional().describe(`可选的全局配置增量。只放本次导入新增的分类/标签，不要重复已有项。`),Un=X({name:`importBills`,describe:`导入一批 AI 生成的账单到 Cent。调用前应先通过 getAccountMeta 获取已有的分类和标签，以便为每条账单选择合理的 categoryId / tagIds。金额字段 amount 必须为整数 ×10000；时间字段 time 为毫秒 epoch；图片可用 data: URI 内联。调用后会弹出导入预览对话框，由用户最终确认是否写入账本。`,argSchema:L({items:z(zn).min(1).describe(`待导入的账单列表，至少一条。`),meta:Hn}).describe(`符合 Cent ExportedJSON 结构的导入数据。生成前请先调用 getAccountMeta 获取现有分类与标签，复用已有的 id；只有在没有合适项时才在 meta 中新增。`),returnSchema:L({ok:I().describe(`是否成功导入。`),imported:R().optional().describe(`成功导入的账单数量（ok=true 时存在）。`),strategy:F([`append`,`overlap`]).optional().describe(`用户选择的导入策略（ok=true 时存在）。`),reason:P().optional().describe(`失败原因，例如 'user_cancelled'（ok=false 时存在）。`)}),handler:async e=>{let t=await Ln({bills:e.items,meta:e.meta});return t?(await Rn(t),{ok:!0,imported:e.items.length,strategy:t.strategy}):{ok:!1,reason:`user_cancelled`}}}),Wn=L({startTime:P().optional().describe(`YYYY-MM-DD`),endTime:P().optional().describe(`YYYY-MM-DD`),categoryNames:z(P()).optional().describe(`分类名（逗号分隔，支持模糊匹配）`),tagNames:z(P()).optional().describe(`标签名（逗号分隔）`),keyword:P().optional().describe(`备注关键词`),minAmount:R().optional().describe(`金额范围（数字）`),maxAmount:R().optional().describe(`金额范围（数字）`),billType:F([`income`,`expense`]).optional().describe(`income 或 expense`)});async function Gn(){let e=E.getState(),t=await e.refreshBillList(),n=e.infos?.meta;if(!n)throw Error(`Ledger meta not found`);return{items:t,meta:n}}var Kn=X({name:`queryBills`,describe:`查询原始账单明细。用于按时间/分类/标签/关键字/金额筛选具体账单。注意如果没有设置合理筛选条件，该工具有可能返回大量账单数据，因此必须谨慎使用，适用场景：查找单笔交易时，或者有明确的时间范围。`,argSchema:Wn,returnSchema:L({bills:z(B(P(),N())),statistics:L({total:R(),totalIncome:R(),totalExpense:R(),netAmount:R()})}),handler:async e=>{let t=Tn(e,await Gn());return{bills:t.bills.map(e=>({...e,amount:e.amount/1e4})),statistics:{...t.statistics,totalIncome:t.statistics.totalIncome/1e4,totalExpense:t.statistics.totalExpense/1e4,netAmount:t.statistics.netAmount/1e4}}}}),qn=X({name:`analyzeBills`,describe:`账单统计与分析。优先用于总额、占比、趋势和概况分析。`,argSchema:Wn.extend({groupBy:F([`category`,`tag`,`day`,`month`,`year`,`type`]).optional().describe(`分组维度，可选值：category/tag/day/month/year/type（category: 按分类统计，tag: 按标签统计，day: 按日统计，month: 按月统计）`),limit:R().int().positive().optional().describe(`返回前几项（数字，默认10）`),includeTrend:I().optional().describe(`true 或 false (是否包含时间趋势数据，用于分析波动)`)}),returnSchema:L({meta:L({totalAmount:R(),count:R(),currency:P(),dateRange:P()}),distribution:z(L({name:P(),amount:R(),percentage:P(),count:R()})),trend:z(L({date:P(),amount:R()})).optional()}),handler:async e=>An(e,await Gn())}),Jn=X({name:`getAccountMeta`,describe:`获取账本信息，用于获取当前账本定义的分类结构和标签列表。`,argSchema:L({}),returnSchema:L({categories:L({all:z(B(P(),N())),tree:B(P(),z(B(P(),N()))),roots:z(B(P(),N()))}),tags:z(B(P(),N())),currencies:z(be().describe(`Custom Currency object`))}),handler:async()=>En((await Gn()).meta)}),Yn=`---
name: playground
description: Use a sandboxed JavaScript worker to execute small snippets for calculation, data shaping, and behavior verification.
---

# Playground Tool

\`playground\` lets the assistant run JavaScript module code in an isolated web-worker sandbox.

## When to use

- Quick calculations that are easier to validate with code
- Data transformation checks (map/filter/reduce/grouping)
- Small logic experiments before writing production code

## Input contract

The tool expects:

- \`code\` (required): JavaScript module source code
- \`args\` (optional): array of arguments passed to default export
- \`timeoutMs\` (optional): execution timeout, default is \`2000\`
- \`whiteList\` (optional): allowed global APIs inside sandbox

The runtime also injects a global helper:

- \`getFile(index)\` (1-based): get uploaded file payload from the current session history

\`getFile(index)\` returns:

- \`index\`: file index (starts from \`1\`)
- \`name\`: original filename
- \`type\`: MIME type
- \`size\`: file size (bytes)
- \`lastModified\`: file timestamp
- \`text\`: file text content

> ⚠️ **Important: always limit the length of the returned text to reduce token consumption.** \`text\` can be very large. When calling the tool, make sure the processing (slicing, filtering, aggregating, counting) happens inside the snippet and only return the necessary result instead of the whole text. Read and return the full file content only when it is truly necessary.

\`code\` must export a default function:

\`\`\`js
export default function main(input) {
  return { ok: true, size: Array.isArray(input) ? input.length : 0 };
}
\`\`\`

## Example call

\`\`\`json
{
  "name": "playground",
  "params": {
    "code": "export default function () { const file = getFile(1); return { fileName: file?.name ?? null, first20: file?.text?.slice(0, 20) ?? null }; }"
  }
}
\`\`\`

## Invoking other tools

The runtime also injects a global async \`tools\` object. Every other tool registered in this
session is available as \`tools.<toolName>(params)\` and returns a Promise:

- \`params\` must match that tool's argument schema (see \`listTools\`).
- It resolves with the tool's return value (matching its return schema), or rejects with an error.
- Calls made through \`tools\` do **not** appear in the conversation — they are internal to this
  playground run (just like \`getFile\`), so they do not consume context tokens.
- \`playground\` cannot call itself.

This lets you compute a payload and act on it in a single snippet, instead of emitting a large
payload as a separate tool call. Example — build bills and import them directly:

\`\`\`js
export default async function () {
  const meta = await tools.getAccountMeta();
  const items = [
    { id: "1", type: "expense", categoryId: meta.categories[0].id, creatorId: 0,
      amount: 123400, time: Date.now() },
  ];
  const res = await tools.importBills({ items, meta: {} });
  return res; // { ok: true, imported: 1, strategy: "append" } 等
}
\`\`\`

## Output

- \`success: true\` with \`result\` when execution succeeds
- \`success: false\` with \`error\` when parsing/execution/timeout fails

## Notes

- Keep snippets small and deterministic
- Avoid depending on blocked globals (network, timers, DOM, dynamic eval)
- Use \`getFile(index)\` when you need to parse or inspect user-uploaded files
`;function Xn(e){return e instanceof Error?e.message:String(e)}async function Zn(e){return e.flatMap(e=>e.role===`user`&&e.assets?.length?e.assets:[]).map((e,t)=>({index:t+1,file:e}))}var Qn=X({name:`playground`,describe:"Execute JavaScript module code in a sandboxed worker. Supports getFile(index) for uploaded files in this conversation. Also exposes an async `tools` object: call any other available tool as a function, e.g. `await tools.importBills({ items, meta })`. Use this to compute data and invoke a tool with it in one snippet, instead of emitting the payload as a separate tool call.",argSchema:L({code:P().min(1).describe(`JavaScript module source code. Must export default function.`),args:z(N()).optional().describe(`Arguments passed to the default-exported function.`)}),returnSchema:L({success:I(),result:N().optional(),error:P().optional()}),handler:(async(e,t)=>{let{history:n,tools:r}=t,i=await Zn(n),a=async(e,n)=>{if(e===`playground`)throw Error(`playground cannot call itself.`);let i=r.find(t=>t.name===e);if(!i)throw Error(`Tool "${e}" not found.`);let a=Y(i.argSchema,n),o=await i.handler(a,t);return Y(i.returnSchema,o)},o=`const getFile = (index) => globalThis.__FROM_TRANSFER__.find(f => f.index === index)?.file;\nconst tools = {};\n${r.map(e=>e.name).filter(e=>e!==`playground`).map(e=>`tools[${JSON.stringify(e)}] = (params) => globalThis.__CALL_HOST__(${JSON.stringify(e)}, params);`).join(`
`)}\n`,s=we([],void 0,i,a);try{return{success:!0,result:await s.runDefaultExport(`${o}${e.code}`,e.args??[],e.timeoutMs??2e3)}}catch(e){return{success:!1,error:Xn(e)}}finally{s.destroy()}})}),$n=xt(Yn);function er(e){let t=s.getState().id,n=E.getState().infos?.meta.personal?.[t]?.assistant;if(n?.configs&&n.configs.length>0){if(e){let t=n.configs.find(t=>t.id===e);if(t)return t}let t=n.defaultConfigId;if(t){let e=n.configs.find(e=>e.id===t);if(e)return e}}let r=n?.bigmodel?.apiKey;if(r)return{id:`legacy-bigmodel`,name:`智谱GLM (Legacy)`,apiKey:r,apiUrl:`https://open.bigmodel.cn/api/paas/v4`,model:`glm-4-flash`,apiType:`open-ai-compatible`};throw Error(`未找到 AI 配置，请先在设置中配置 AI API`)}function tr(e){return e.apiType===`google-ai-studio`?`${e.apiUrl.endsWith(`/`)?e.apiUrl.slice(0,-1):e.apiUrl}/v1beta/models/${e.model}:streamGenerateContent?alt=sse`:e.apiUrl.endsWith(`/`)?`${e.apiUrl}chat/completions`:`${e.apiUrl}/chat/completions`}function nr(e,t){let n={"Content-Type":`application/json`};return e===`google-ai-studio`?n[`x-goog-api-key`]=t:n.Authorization=`Bearer ${t}`,n}function rr(e,t,n){if(e.apiType===`google-ai-studio`){let e=[],r;for(let n of t)if(n.role===`system`)r?r+=`

`+n.content:r=n.content;else{let t=n.role===`user`?`user`:`model`;e.push({role:t,parts:[{text:n.content}]})}let i={contents:e,generationConfig:{temperature:n?.temperature??.7,maxOutputTokens:n?.maxOutputTokens??n?.max_tokens??2e3}};return r&&(i.systemInstruction={parts:[{text:r}]}),i}else return{model:e.model,messages:t,stream:!0,temperature:n?.temperature??.7,max_tokens:n?.max_tokens??2e3}}async function*ir(e){let t=e.body.getReader(),n=new TextDecoder,r=``,i=``,a=``;try{for(;;){let{done:e,value:o}=await t.read();if(e)break;r+=n.decode(o,{stream:!0});let s=r.split(`
`);r=s.pop()||``;for(let e of s){let t=e.trim();if(!t||!t.startsWith(`data: `))continue;let n=t.slice(6);if(n!==`[DONE]`)try{let e=JSON.parse(n).choices?.[0]?.delta,t=e?.reasoning_content||``,r=e?.content||``;(t||r)&&(i+=t,a+=r,yield{thought:i,answer:a})}catch(e){console.warn(`Failed to parse OpenAI SSE line:`,e)}}}}finally{t.releaseLock()}}async function*ar(e){let t=e.body.getReader(),n=new TextDecoder,r=``,i=``,a=``;try{for(;;){let{done:e,value:o}=await t.read();if(e)break;r+=n.decode(o,{stream:!0});let s=r.split(`
`);r=s.pop()||``;for(let e of s){let t=e.trim();if(!t||!t.startsWith(`data: `))continue;let n=t.slice(6);try{let e=JSON.parse(n).candidates?.[0]?.content?.parts||[],t=!1;for(let n of e)n.thought===!0||`thought`in n?(i+=n.text||``,t=!0):(a+=n.text||``,t=!0);t&&(yield{thought:i,answer:a})}catch(e){console.warn(`Failed to parse Google SSE line:`,e)}}}}finally{t.releaseLock()}}async function or(e,t,n,r){let i=tr(e),a=nr(e.apiType,t),o=rr(e,n,{temperature:.7,max_tokens:e.maxTokens??8192});return fetch(i,{method:`POST`,headers:a,body:JSON.stringify(o),signal:r})}async function sr(e,t){let n=await or(t,t.apiKey,e);if(!n.ok){let e=await n.text();throw Error(`AI API 请求失败: ${n.status} ${n.statusText}. ${e}`)}let r=t.apiType===`google-ai-studio`?ar:ir,i=``;for await(let e of r(n))(e.answer?.trim()||e.thought?.trim())&&(i=e.answer||``);return i}function cr(){let e=o.getState().voiceAIConfigId;return er(e)}async function lr(e){let t=cr();return sr(e,{...t,apiKey:De(t.apiKey)})}function ur(e,t){return e?.length?`本次用户上传了如下文件：${e.map((e,n)=>`(${t+n})[${e.name}]`).join(`, `)}。
你可以通过使用工具 PlaygroundTool，编写代码进行访问，例如使用 getFile(${t}) 获取序号为 ${t} 的文件。`:``}function dr(e,t=1e4){if(e.length<=t)return e;let n=e.slice(0,t/2),r=e.slice(-t/2);return console.warn(`Text truncated: ${e.length} -> ${t}`),`${n}...（返回值过长，已截断）...${r}`}function fr(e){return dr(JSON.stringify(e))}function pr(e){let t=`[工具调用: ${e.formatted.name}]\n`;return t+=`参数: ${JSON.stringify(e.formatted.params,null,2)}\n`,e.formatted.returns!==void 0&&(t+=`返回结果: ${fr(e.formatted.returns)}`),e.formatted.errors!==void 0&&(t+=`错误: ${fr(e.formatted.errors)}`),t}function mr(e){let t=[];for(let n of e)if(n.role===`user`){let e=n.raw,r=n.assets&&n.assets.length>0?ur(n.assets,1):void 0;t.push({role:`user`,content:`${r?`${r}\n`:``}${e}`})}else n.role===`assistant`?t.push({role:`assistant`,content:n.raw}):n.role===`tool`?t.push({role:`user`,content:pr(n)}):n.role===`system`&&t.push({role:`system`,content:n.raw});return t}var hr={request({history:e}){console.log(`History:`,e);let t=!1,r=null;return St((async()=>{let i=er(),a=De(i.apiKey),o=await(async()=>i.model===`glm-4-flash`?mr([{role:`system`,raw:(await n(()=>import(`./strict-system-prompt-CmKTJ0mz.js`),[])).default},...e.filter(e=>e.role!==`system`)]):mr(e))();r=new AbortController,t&&r.abort();let s=await or(i,a,o,r.signal);if(!s.ok){let e=await s.text();throw Error(`AI API 请求失败: ${s.status} ${s.statusText}. ${e}`)}return i.apiType===`google-ai-studio`?ar(s):ir(s)})(),()=>{t=!0,r?.abort()})}},gr=`# Widget API 1.0 技术规范文档

本规范定义了 Widget 脚本的结构、权限管理、用户交互及渲染逻辑。脚本需保存为 \`.js\` 文件，并遵循以下约定。

---

## 1. 脚本总体结构
每一个 Widget 脚本必须包含三个核心部分：**元数据与权限声明**（通过头部注释）、**配置表单声明**（导出对象）以及 **主渲染函数**（默认导出）。

\`\`\`javascript
/**
 * @widget-api 1.0
 * @name 资产概览组件
 * @permissions billing, budget
 */

// 1. 表单声明 (可选)
export const config = { ... };

// 2. 渲染函数 (必选)
export default async (context) => { ... };
\`\`\`

---

## 2. 权限声明 (Permissions)
Widget 必须在文件头部的 JSDoc 注释中声明其所需访问的数据权限。未声明的权限对应的上下文数据将为 \`undefined\`。

| 权限标识符 | 数据说明 | 注入上下文后的字段 |
| :--- | :--- | :--- |
| \`billing\` | 用户的账单历史、收支流水记录 | \`context.data.billing\` |
| \`filter\` | 应用当前的全局筛选状态（如时间区间、分类） | \`context.data.filter\` |
| \`budget\` | 用户的预算设置及当前执行进度数据 | \`context.data.budget\` |
| \`collaborators\` | 账本协作者信息 | \`context.data.collaborators\` |
| \`category\` | 账单类别信息 | \`context.data.categories\` |
| \`currency\` | 多币种信息 | \`context.data.currencies\` |
| \`tag\` | 账单标签信息 | \`context.data.tags\` |

### 数据结构说明

#### billing 账单流水
\`\`\`typescript
context.data.billing // Bill[]

type BillType = "income" | "expense";
/** 整数金额，10000:1（即代码中的 amount 数值需除以 10000 才是实际金额） */
type Amount = number;
type GeoLocation = { latitude: number; longitude: number; accuracy: number };

type Bill = {
  /** 每笔账单的唯一标识 */
  id: string;
  /** 账单类型，代表收入或者支出 */
  type: BillType;
  /** 账单的类别 id（对应 BillCategory.id），可以是父类或子类 */
  categoryId: string;
  /** 创建者的 id */
  creatorId: number | string;
  /** 备注 */
  comment?: string;
  /** 整数金额，10000:1 */
  amount: Amount;
  /** 账单发生的时间（毫秒时间戳） */
  time: number;
  /** 账单的图片附件 */
  images?: (File | string)[];
  /** 账单的地址 */
  location?: GeoLocation;
  /** 账单的 tag id 列表 */
  tagIds?: string[];
  /** 多币种信息 */
  currency?: {
    /** 记账当时设置的本位币 */
    base: string;
    /** 记账当时选择的币种 */
    target: string;
    /** 记账当时填写的金额（非 10000:1 缩放） */
    amount: number;
  };
  /** 其他额外信息 */
  extra?: {
    scheduledId?: string;
  };
};
\`\`\`

#### filter 全局筛选状态
\`\`\`typescript
context.data.filter // BillFilter（无筛选时为 {}）

type BillFilter = Partial<{
  /** 备注关键字 */
  comment: string;
  /** 相对时间区间（与 start/end 二选一） */
  recent?: {
    value: number;
    unit: "year" | "month" | "week" | "day";
  };
  /** 起始时间（毫秒时间戳） */
  start: number;
  /** 结束时间（毫秒时间戳） */
  end: number;
  /** 限定收/支类型 */
  type: BillType | undefined;
  /** 限定创建者 id 列表 */
  creators: (string | number)[];
  /** 限定分类 id 列表 */
  categories: string[];
  /** 最小金额（实际金额，非 10000:1 缩放） */
  minAmountNumber: number;
  /** 最大金额（实际金额，非 10000:1 缩放） */
  maxAmountNumber: number;
  /** 是否仅资产相关 */
  assets?: boolean;
  /** 是否仅周期记账生成 */
  scheduled?: boolean;
  /** 必须包含的标签 id */
  tags?: string[];
  /** 排除的标签 id */
  excludeTags?: string[];
  /** 展示用的本位币 */
  baseCurrency: string;
  /** 限定币种列表 */
  currencies?: string[];
}>;
\`\`\`

#### budget 预算
\`\`\`typescript
context.data.budget // Budget[]

type Budget = {
  /** 预算唯一标识 */
  id: string;
  /** 预算名称 */
  title: string;
  /** 预算起始时间（毫秒时间戳） */
  start: number;
  /** 预算结束时间（毫秒时间戳，可选） */
  end?: number;
  /** 预算重复周期 */
  repeat: {
    unit: "week" | "day" | "month" | "year";
    value: number;
  };
  /** 参与者（创建者 id 列表） */
  joiners: (string | number)[];
  /** 总预算金额（整数，10000:1） */
  totalBudget: number;
  /** 分类预算明细 */
  categoriesBudget?: {
    /** 分类 id */
    id: string;
    /** 该分类的预算金额（整数，10000:1） */
    budget: number;
  }[];
  /** 仅统计这些标签 */
  onlyTags?: string[];
  /** 排除这些标签 */
  excludeTags?: string[];
};
\`\`\`

> 注：\`budget\` 中仅包含预算的配置数据，**不包含已使用进度**。如需统计已用金额，需结合 \`billing\` 数据按 \`start\`/\`end\`/\`categoriesBudget\`/\`onlyTags\`/\`excludeTags\` 等字段自行计算。

#### collaborators 协作者信息
\`\`\`javascript
context.data.collaborators // Array<{ id: string | number; name: string; avatar_url?: string; ... }>
\`\`\`

#### categories 账单类别
\`\`\`javascript
context.data.categories // Array<{ id: string; name: string; type: 'income' | 'expense'; icon: string; color: string; parent?: string; ... }>
\`\`\`

#### currencies 多币种
\`\`\`javascript
context.data.currencies // { base: string; custom?: Array<{ id, name, symbol, rateToBase }>; quick?: string[] }
\`\`\`

#### tags 账单标签
\`\`\`javascript
context.data.tags // Array<{ id: string; name: string; preferCurrency?: string; ... }>
| \`collaborators\` | 账本协作者信息 | \`context.data.collaborators\` |
| \`category\` | 账单分类信息 | \`context.data.categories\` |
| \`currency\` | 多币种配置信息 | \`context.data.currencies\` |
| \`tag\` | 账单标签信息 | \`context.data.tags\` |

---

## 3. 表单声明 (Config Form)
通过导出 \`config\` 对象，Widget 可以要求用户在放置组件前输入特定的配置参数。这些参数将通过 \`context.settings\` 注入渲染函数。

### 表单配置项类型
* **text**: 文本输入框。
* **number**: 数字输入框
* **date**: 日期选择器。
* **select**: 下拉单选。

**示例：**
\`\`\`javascript
export const config = {
  title: { type: 'text', label: '组件标题', default: '我的账单' },
  threshold: { type: 'number', label: '预警阈值', default: 1000 },
  category: { type: 'select', label: '统计分类', options: ['餐饮', '交通', '购物'] },
  time: { type: 'date', label: '开始时间' },
};
\`\`\`

---

## 4. 渲染函数 (Render Function)
Widget 脚本必须默认导出一个函数（支持 \`async\`）。该函数是 Widget 的生命周期核心，负责将数据转化为 UI 描述。

### 函数签名
\`export default async function(context): DSL\`

### 参数：\`context\` 对象
\`context\` 是一个只读对象，包含了脚本运行所需的所有外部信息：

| 属性 | 类型 | 说明 |
| :--- | :--- | :--- |
| \`data\` | \`Object\` | 包含已授权读取的业务数据（如 \`data.billing\`）。 |
| \`settings\` | \`Object\` | 包含用户在“表单声明”中填写的数值。 |
| \`env\` | \`Object\` | 包含系统环境信息，如 \`env.theme\` (light/dark) 或 \`env.language\`。 |

---

## 5. UI 描述语言 (DSL)
渲染函数必须返回由预定义帮助函数构建的 DSL 对象。这些函数支持链式调用以配置样式。

### 基础组件库
* **\`Flex(...children)\`**: 容器组件。
    * \`.direction(value)\`: 布局方向，可选 \`'row' | 'column'\`。
    * \`.justify(value)\`: 对齐方式，如 \`'center' | 'space-between'\`。
    * \`.align(value)\`: 交叉轴对齐，如 \`'center' | 'stretch'\`。
    * \`.gap(value)\`: 子元素间距（数字）。
* **\`Text(content)\`**: 文本组件。
    * \`.fontSize(value)\`: 字号。
    * \`.color(value)\`: 颜色（Hex 或 rgba 字符串）。
    * \`.bold(bool)\`: 是否加粗。
* **\`Image(src)\`**: 图片组件。
    * \`.width(value)\` / \`.height(value)\`: 尺寸。
    * \`.mode(value)\`: 裁剪模式，如 \`'cover' | 'contain'\`。
* **\`Container(...children)\`**: 万能容器，支持更多样式属性如 \`.bg()\`, \`.padding()\`, \`.borderRadius()\`。

---

## 6. 完整代码示例
以下是一个标准的 Widget 脚本实现参考：

\`\`\`javascript
/**
 * @widget-api 1.0
 * @name 预算进度条
 * @permissions budget, billing
 */

export const config = {
  showPercent: { type: 'select', label: '显示百分比', options: ['是', '否'], default: '是' }
};

export default async ({ data, settings }) => {
  // data.budget 为 Budget[]，这里取第一个预算演示
  const budget = (data.budget ?? [])[0];
  if (!budget) return Text('暂无预算').color('#999');

  // amount 为 10000:1 的整数金额，需统一换算为实际数值
  const total = budget.totalBudget / 10000;

  // budget 中不包含已使用进度，需从 billing 中按预算的时间范围与参与者过滤累计支出
  const start = budget.start;
  const end = budget.end ?? Date.now();
  const used = (data.billing ?? [])
    .filter(b =>
      b.type === 'expense' &&
      b.time >= start && b.time <= end &&
      budget.joiners.includes(b.creatorId)
    )
    .reduce((sum, b) => sum + b.amount / 10000, 0);

  const ratio = total > 0 ? used / total : 0;
  const isWarning = ratio > 0.9;

  return Flex(
    Text(budget.title || "预算进度").fontSize(14).color('#999'),
    Flex(
      Container().bg(isWarning ? 'red' : 'green').width(\`\${Math.min(ratio, 1) * 100}%\`).height(8),
      Container().bg('#eee').width(\`\${Math.max(1 - ratio, 0) * 100}%\`).height(8)
    ).direction('row').borderRadius(4).padding(2),
    settings.showPercent === '是' ? Text(\`\${Math.round(ratio * 100)}%\`).bold() : null
  ).direction('column').gap(8);
};
\`\`\`

---

## 7. 执行约束
1.  **纯净性**：渲染函数应尽可能为纯函数，不建议在函数内部产生副作用（如修改全局变量）。
2.  **超时**：渲染函数执行时间不得超过 2000ms，否则系统将强制终止。
3.  **安全性**：脚本无法访问 \`eval\`, \`Function\` (构造函数), \`XMLHttpRequest\`, \`WebSocket\` 以及任何 DOM 元素。`;function _r({config:e,settings:t,onChange:n}){let i=r();if(Object.keys(e).length===0)return null;let a=(e,r)=>{let a=t[e]??r.default??``;switch(r.type){case`text`:return(0,$.jsx)(y,{id:`config-${e}`,type:`text`,value:a,onChange:t=>n(e,t.target.value),className:`flex-1 h-8 text-xs`,placeholder:r.label});case`number`:return(0,$.jsx)(y,{id:`config-${e}`,type:`number`,value:a,onChange:t=>n(e,parseFloat(t.target.value)||0),className:`flex-1 h-8 text-xs`,placeholder:r.label});case`date`:return(0,$.jsx)(y,{id:`config-${e}`,type:`date`,value:a,onChange:t=>n(e,t.target.value),className:`flex-1 h-8 text-xs`});case`select`:return(0,$.jsxs)(_e,{value:a,onValueChange:t=>n(e,t),children:[(0,$.jsx)(ie,{className:`flex-1 h-8 text-xs`,children:(0,$.jsx)(M,{placeholder:i(`select-placeholder`)})}),(0,$.jsx)(ce,{children:r.options?.map(e=>(0,$.jsx)(me,{value:e,children:e},e))})]});default:return null}};return(0,$.jsxs)(`div`,{className:`px-4 py-2 border-b space-y-2`,children:[(0,$.jsx)(`div`,{className:`text-xs font-medium text-muted-foreground mb-2`,children:i(`widget-config`)}),Object.entries(e).map(([e,t])=>(0,$.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,$.jsx)(v,{htmlFor:`config-${e}`,className:`text-xs min-w-[80px]`,children:t.label}),a(e,t)]},e))]})}var vr=`/**
 * @widget-api 1.0
 * @name My Widget
 * @permissions billing
 */

export const config = {
  title: { type: 'text', label: '组件标题', default: '我的账单' },
  showCount: { type: 'select', label: '显示数量', options: ['是', '否'], default: '是' }
};

export default async ({ data, settings }) => {
    const bills = data.billing || [];
    const total = bills.reduce((sum, bill) => sum + bill.amount, 0);
    const title = settings.title || '我的账单';
    const showCount = settings.showCount === '是';
    
    return Flex(
        Text(title).fontSize(16).bold(),
        Text("Total: " + total).fontSize(14),
        showCount ? Text("Bills: " + bills.length).fontSize(12) : null
    ).direction('column').gap(8);
};
`;function yr({edit:e,onCancel:t}){let n=r(),{add:i,update:a}=ue(),[o,s]=(0,Q.useState)(e?.code??vr),[l,u]=(0,Q.useState)(e?.settings??{}),[d,f]=(0,Q.useState)(null),[p,m]=(0,Q.useState)(null),[h,g]=(0,Q.useState)(!0),[_,v]=(0,Q.useState)({billing:!1,filter:!1,budget:!1,collaborators:!1,category:!1,currency:!1,tag:!1}),[y,b]=(0,Q.useState)({billing:!0,filter:!0,budget:!0,collaborators:!0,category:!0,currency:!0,tag:!0}),x=E(e=>e.bills),C=E(e=>e.infos?.meta.budgets),w=E(e=>e.infos?.creators),T=E(e=>e.infos?.meta.categories),D=E(e=>e.infos?.meta.baseCurrency),O=E(e=>e.infos?.meta.customCurrencies),k=E(e=>e.infos?.meta.quickCurrencies),A=E(e=>e.infos?.meta.tags),{theme:j}=Ce(),M=(0,Q.useMemo)(()=>{try{return Oe(o)}catch{return null}},[o]);(0,Q.useEffect)(()=>{M&&v({billing:M.permissions.includes(V.Billing),filter:M.permissions.includes(V.Filter),budget:M.permissions.includes(V.Budget),collaborators:M.permissions.includes(V.Collaborators),category:M.permissions.includes(V.Category),currency:M.permissions.includes(V.Currency),tag:M.permissions.includes(V.Tag)})},[M]);let ee=(0,Q.useCallback)(async()=>({bills:x,budgets:C,filter:{},creators:w,categories:T,baseCurrency:D,customCurrencies:O,quickCurrencies:k,tags:A}),[x,C,w,T,D,O,k,A]),te=(0,Q.useCallback)(async()=>{if(!M){m(`Invalid widget code`),f(null),g(!1);return}let e=Object.entries(y).filter(([,e])=>e).map(([e])=>e);if(M.permissions.some(t=>!e.includes(t))){m(`Some permissions are not allowed`),f(null),g(!1);return}g(!0);try{let e=await Ee(o,{settings:l,getData:ee,env:{theme:j===`dark`||j===`system`&&window.matchMedia(`(prefers-color-scheme: dark)`).matches?`dark`:`light`,language:`zh-CN`}});e.success&&e.result?(f(e.result?._node??e.result),m(null)):(m(e.error??`Unknown error`),f(null))}catch(e){m(e instanceof Error?e.message:String(e)),f(null)}finally{g(!1)}},[o,M,y,l,ee,j]);(0,Q.useEffect)(()=>{let e=setTimeout(te,500);return()=>clearTimeout(e)},[te]);let ne=(0,Q.useCallback)((e,t)=>{u(n=>({...n,[e]:t}))},[]);return(0,$.jsx)(re,{onBack:t,title:e?.id?n(`edit-widget`):n(`add-widget`),className:`h-full overflow-hidden`,children:(0,$.jsxs)(`div`,{className:`flex flex-col h-full overflow-hidden`,children:[(0,$.jsx)(`div`,{className:`flex-1 flex flex-col overflow-y-auto`,children:(0,$.jsxs)(`div`,{className:`flex flex-col`,children:[(0,$.jsxs)(`div`,{className:`px-4 py-2 flex items-center gap-2 border-b`,children:[(0,$.jsx)(`div`,{className:`text-sm font-medium`,children:n(`widget-permissions`)}),Object.entries(_).map(([e,t])=>t&&(0,$.jsxs)(`label`,{className:`flex items-center gap-1 text-xs`,children:[(0,$.jsx)(`input`,{type:`checkbox`,checked:y[e],onChange:t=>b(n=>({...n,[e]:t.target.checked})),className:`size-3`}),n(`permission-${e}`)]},e))]}),M?.config&&(0,$.jsx)(_r,{config:M.config,settings:l,onChange:ne}),(0,$.jsxs)(`div`,{className:`flex-1 flex flex-col overflow-hidden flex-shrink-0`,children:[(0,$.jsxs)(`div`,{className:`flex flex-col overflow-hidden`,children:[(0,$.jsx)(`div`,{className:`px-4 py-2 text-xs font-medium border-b bg-muted/50`,children:n(`widget-preview`)}),(0,$.jsx)(`div`,{className:`p-4 flex justify-center items-start`,children:h?(0,$.jsx)(`div`,{className:`max-w-[320px] w-full h-[120px] bg-card rounded-lg shadow-lg`,children:(0,$.jsx)(Ae,{})}):p?(0,$.jsx)(`div`,{className:`text-red-500 text-xs whitespace-pre-wrap select-text`,children:p}):(0,$.jsx)(`div`,{className:`max-w-[320px] w-full h-[120px] bg-card rounded-lg shadow-lg`,children:(0,$.jsx)(ke,{dsl:d})})})]}),(0,$.jsxs)(`div`,{className:`flex-1 flex flex-col overflow-hidden border-t min-h-[400px]`,children:[(0,$.jsx)(`div`,{className:`px-4 py-2 text-xs font-medium border-b bg-muted/50`,children:n(`widget-code`)}),(0,$.jsx)(`textarea`,{value:o,onChange:e=>s(e.target.value),className:`flex-1 w-full p-4 font-mono text-xs resize-none border-none outline-none bg-background`,spellCheck:!1})]})]})]})}),(0,$.jsxs)(`div`,{className:`flex justify-end gap-2 p-4 border-t`,children:[(0,$.jsx)(S,{variant:`outline`,onClick:t,children:n(`cancel`)}),(0,$.jsx)(S,{onClick:async()=>{if(!M){c.error(n(`widget-invalid-code`));return}let r={name:M.name||`Untitled Widget`,code:o,permissions:M.permissions,settings:l};e?.id?await a(e.id,r):await i(r),t?.()},children:n(`save`)})]})]})})}var[br,xr]=m(yr,{dialogTitle:`Widget Edit`,dialogModalClose:!0,contentClassName:`h-full w-full max-h-full max-w-full rounded-none sm:rounded-md sm:max-h-[90vh] sm:w-[90vw] sm:max-w-[900px]`}),Sr=`---
name: widget
description: Author and preview a Cent widget. Use this skill before calling \`createWidget\` to ensure the generated code follows the Widget DSL contract (header metadata, permissions, config schema, default export, DSL builders).
---

# Widget Skill

Use the \`createWidget\` tool to open the widget editor with AI-generated code for preview and saving. Before generating code, follow the Widget API reference below to produce valid widgets.

## When to use

- The user asks to create, draft, or prototype a widget
- The user wants to visualize ledger data with a custom small component
- The user wants to iterate on an existing widget idea

## Workflow

1. Read the API reference (embedded below) to understand the available DSL nodes, permissions, data shapes, and config form schema.
2. Write a complete widget source file:
   - Top-of-file JSDoc-style header declaring \`@widget-api\`, \`@name\`, and \`@permissions\`
   - Optional \`export const config = { ... }\` for user-tunable settings
   - \`export default async ({ data, settings, env }) => DSLNode\` as the main entry
3. Call the \`createWidget\` tool with \`{ code }\` containing the full widget source.
4. The editor opens with a live preview. The user can tweak settings, save, or cancel.

## Output contract

The \`createWidget\` tool returns \`{ saved, cancelled }\`:

- \`saved: true\` — user accepted and persisted the widget
- \`cancelled: true\` — user dismissed without saving

If cancelled, ask the user what to adjust before re-invoking.

---

# Widget API Reference

The following section is the authoritative Widget API documentation. All generated widget code MUST conform to it.

`,Cr=X({name:`createWidget`,describe:"创建一个新的 widget 预览。传入符合 widget DSL 规范的代码，弹出 widget 编辑器进行预览与保存。代码必须以 `export default async ({ data, settings, env }) => { ... }` 形式导出，并在文件顶部以注释声明 `@widget-api`、`@name`、`@permissions`。可在 `data` 中读取 billing/budgets/categories/tags 等数据。调用前请先阅读 `widget` skill 了解完整 API。",argSchema:L({code:P().min(1).describe(`Widget 源代码（ES Module 格式），需 default export 一个返回 DSL 节点的 async 函数。`)}),returnSchema:L({saved:I().describe(`用户是否保存了 widget`),cancelled:I().describe(`用户是否取消`)}),handler:async e=>{try{return await xr({code:e.code}),{saved:!0,cancelled:!1}}catch{return{saved:!1,cancelled:!0}}}}),wr=xt(`${Sr}\n\n${gr}\n`),Tr={tools:[xn,qn,Kn,Jn,Un,Qn,Cr].map(e=>Fe(e)),skills:[$n,wr],provider:hr,systemPrompt:`你是一个专业的记账助手，必须基于工具返回的数据回答，禁止臆造数据。`};export{sr as a,Ln as c,bn as d,yn as f,lr as i,jn as l,Kt as m,br as n,In as o,vn as p,xr as r,Rn as s,Tr as t,wn as u};