(window.webpackJsonp=window.webpackJsonp||[]).push([[271],{2959:function(s,a,t){"use strict";t.r(a);var n=t(0),e=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"私有仓库搭建"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#私有仓库搭建"}},[s._v("#")]),s._v(" 私有仓库搭建")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 1.拉取私有仓库镜像")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" pull registry\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 2.启动私有仓库容器")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-id")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--name")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("registry "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5000")]),s._v(":5000 registry\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 3.打开浏览器，输入地址可以看到私有仓库")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 4. 修改daemon.json")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/docker/daemon.json\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 添加私有仓库地址")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"insecure-registries"')]),s._v(":"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"192.168.1.5:5000"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 5.重启docker服务")]),s._v("\nsystemctl restart "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" start registry\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("h2",{attrs:{id:"上传镜像到私有仓库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#上传镜像到私有仓库"}},[s._v("#")]),s._v(" 上传镜像到私有仓库")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 1.标记镜像为私有仓库的镜像")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" tag centos:7 私有仓库服务器IP:5000/centos:7\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 2.上传标记的镜像")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" push 私有仓库服务器IP:5000/centos:7\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h2",{attrs:{id:"从私有仓库拉取镜像"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#从私有仓库拉取镜像"}},[s._v("#")]),s._v(" 从私有仓库拉取镜像")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" pull 私有仓库服务器IP:5000/centos:7\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);