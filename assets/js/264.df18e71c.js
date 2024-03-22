(window.webpackJsonp=window.webpackJsonp||[]).push([[264],{2946:function(s,a,n){"use strict";n.r(a);var t=n(0),e=Object(t.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"操作类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#操作类型"}},[s._v("#")]),s._v(" 操作类型")]),s._v(" "),a("h3",{attrs:{id:"数据库读写"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据库读写"}},[s._v("#")]),s._v(" 数据库读写")]),s._v(" "),a("p",[s._v("新建类CwDatabase")]),s._v(" "),a("p",[s._v("CwDatabase.h")]),s._v(" "),a("div",{staticClass:"language-c++ line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('#pragma once\nclass CwDatabase\n{\npublic:\n\t/// <summary>\n\t/// 向模型空间添加实体\n\t/// </summary>\n\t/// <param name="pEnt"></param>\n\t/// <param name="pDb"></param>\n\t/// <returns></returns>\n\tstatic AcDbObjectId PostToModelSpace(AcDbEntity* pEnt, AcDbDatabase* pDb = acdbHostApplicationServices()->workingDatabase());\n\t/// <summary>\n    /// 获取指定层的所有实体\n    /// </summary>\n    /// <param name="layer"></param>\n    /// <param name="pDb"></param>\n    /// <returns></returns>\n\tstatic AcDbObjectIdArray GetAllEntIds(const ACHAR* layer = NULL, AcDbDatabase* pDb = acdbHostApplicationServices()->workingDatabase());\n};\n\n\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br")])]),a("p",[s._v("Database.cpp")]),s._v(" "),a("div",{staticClass:"language-c++ line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('AcDbObjectId CwDatabase::PostToModelSpace(AcDbEntity* pEnt, AcDbDatabase* pDb)\n{\n    AcDbBlockTable* pBlkTbl = NULL;\n    Acad::ErrorStatus es;\n    es = pDb->getBlockTable(pBlkTbl, AcDb::kForRead);\n    if (es != Acad::eOk)\n    {\n        acutPrintf(TEXT("\\n块表打开失败，错误代码:%s"), acadErrorStatusText(es));\n        return AcDbObjectId::kNull;\n    }\n    AcDbBlockTableRecord* pBlkTblRcd = NULL;\n    es = pBlkTbl->getAt(ACDB_MODEL_SPACE, pBlkTblRcd, AcDb::kForWrite);\n    if (es != Acad::eOk)\n    {\n        acutPrintf(TEXT("\\n模块空间块表记录打开失败，错误代码:%s"), acadErrorStatusText(es));\n        pBlkTbl->close();\n        return AcDbObjectId::kNull;\n    }\n\n    pBlkTbl->close();\n    AcDbObjectId outId;\n    es = pBlkTblRcd->appendAcDbEntity(outId, pEnt);\n    if (es != Acad::eOk)\n    {\n        acutPrintf(TEXT("\\n无法添加实体到模块空间，错误代码:%s"), acadErrorStatusText(es));\n        pBlkTblRcd->close();\n        return AcDbObjectId::kNull;\n    }\n    pEnt->close();\n    pBlkTblRcd->close();\n    return outId;\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br")])]),a("h2",{attrs:{id:"命令添加"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#命令添加"}},[s._v("#")]),s._v(" 命令添加")]),s._v(" "),a("div",{staticClass:"language-c++ line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('/// <summary>\n/// 添加命令\n/// </summary>\n/// <param name="cmdName"></param>\n/// <param name="cmdFlags"></param>\n/// <param name="functionPtr"></param>\nstatic void AddCommand(const ACHAR* cmdName, Adesk::Int32 cmdFlags, AcRxFunctionPtr functionPtr);\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("div",{staticClass:"language-c++ line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('void CwDatabase::AddCommand(const ACHAR* cmdName, Adesk::Int32 cmdFlags, AcRxFunctionPtr functionPtr)\n{\n    acedRegCmds->addCommand(TEXT("CwTool"), cmdName, cmdName, cmdFlags, functionPtr);\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);