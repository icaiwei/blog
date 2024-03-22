(window.webpackJsonp=window.webpackJsonp||[]).push([[132],{2473:function(s,a,e){s.exports=e.p+"assets/img/image-20221008100219465.d1786d0e.png"},2474:function(s,a,e){s.exports=e.p+"assets/img/image-20221008100251352.d1684ef6.png"},2475:function(s,a,e){s.exports=e.p+"assets/img/image-20221008100341777.1a8886f0.png"},2904:function(s,a,e){"use strict";e.r(a);var n=e(0),t=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"qt-通过odbc连接mysql"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#qt-通过odbc连接mysql"}},[s._v("#")]),s._v(" QT 通过ODBC连接MySQL")]),s._v(" "),a("p",[a("img",{attrs:{src:e(2473),alt:"image-20221008100219465"}})]),s._v(" "),a("p",[a("img",{attrs:{src:e(2474),alt:"image-20221008100251352"}})]),s._v(" "),a("p",[a("img",{attrs:{src:e(2475),alt:"image-20221008100341777"}})]),s._v(" "),a("div",{staticClass:"language-C++ line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('bool SqlTools::connectMySql(QString host, int port, QString databaseName, QString username, QString password)\n{\n    bool isConnected;\n    QSqlDatabase db = QSqlDatabase::addDatabase("QODBC");\n    db.setHostName(host);\n    db.setPort(port);\n    db.setDatabaseName(databaseName);\n    db.setUserName(username);\n    db.setPassword(password);\n\n    bool ok = db.open();\n    if(ok)\n    {\n        // QMessageBox::information(NULL,"连接成功","连接成功");\n        isConnected = true;\n    }\n    else {\n        // QMessageBox::critical(NULL,"失败","数据库连接失败");\n        // qDebug()<<"Error because:"<<db.lastError().text()<<endl;\n        isConnected = false;\n    }\n    return isConnected;\n}\n\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br")])]),a("h2",{attrs:{id:"查询"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查询"}},[s._v("#")]),s._v(" 查询")]),s._v(" "),a("h3",{attrs:{id:"方法一"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方法一"}},[s._v("#")]),s._v(" 方法一")]),s._v(" "),a("div",{staticClass:"language-C++ line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("QString cmd = QString(\"select * from system_users where username='%1'\").arg(username);\nQSqlQuery query;\nbool a = query.exec(cmd);\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("检验是否存在不能使用"),a("code",[s._v("query.exec(cmd)")]),s._v("判断，因为只要代码正确返回值就是true，所以再用一个qq.next();")]),s._v(" "),a("h3",{attrs:{id:"方法二"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方法二"}},[s._v("#")]),s._v(" 方法二")]),s._v(" "),a("div",{staticClass:"language-C++ line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('QSqlTableModel *mode = new QSqlTableModel;\nmodel->setTable("system_users");\nmodel->setFilter(QString("username=\'%1\'")).arg(username);\nmodel->select();\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])])])}),[],!1,null,null,null);a.default=t.exports}}]);