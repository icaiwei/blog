(window.webpackJsonp=window.webpackJsonp||[]).push([[243],{2919:function(s,n,a){"use strict";a.r(n);var t=a(0),e=Object(t.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"画笔"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#画笔"}},[s._v("#")]),s._v(" 画笔")]),s._v(" "),n("h3",{attrs:{id:"画笔的作用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#画笔的作用"}},[s._v("#")]),s._v(" 画笔的作用")]),s._v(" "),n("p",[s._v("显得颜色、线型、线粗")]),s._v(" "),n("p",[s._v("HPEN、画笔句柄")]),s._v(" "),n("h3",{attrs:{id:"画笔的使用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#画笔的使用"}},[s._v("#")]),s._v(" 画笔的使用")]),s._v(" "),n("h4",{attrs:{id:"_1-创建画笔"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-创建画笔"}},[s._v("#")]),s._v(" 1 创建画笔")]),s._v(" "),n("div",{staticClass:"language-C++ line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("HPEN CreatePen(\n    int fnPenStyle,\t//画笔样式\n    int nWidth,\t\t//画笔粗细\n    COLORREF crColor\t//画笔颜色\n); //创建成功返回句柄\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[s._v("PS_SOLID 实心线，可以支持多个像素宽，其它线型只能是一个像素宽")]),s._v(" "),n("h4",{attrs:{id:"_2-江画笔应用到dc中"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-江画笔应用到dc中"}},[s._v("#")]),s._v(" 2 江画笔应用到DC中")]),s._v(" "),n("div",{staticClass:"language-C++ line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("HGDIOBJ SelectObject(\n\tHDC hdc,\t//绘图设备句柄\n    HGDIOBJ hjdiobj\t//GDI绘图对象句柄，画笔句柄\n);//返回原来的GDI绘图对象句柄\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("p",[s._v("注意保存原来DC当中的画笔")]),s._v(" "),n("h4",{attrs:{id:"_3-绘图"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-绘图"}},[s._v("#")]),s._v(" 3 绘图")]),s._v(" "),n("h4",{attrs:{id:"_4-去除dc中的画笔"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-去除dc中的画笔"}},[s._v("#")]),s._v(" 4 去除DC中的画笔")]),s._v(" "),n("p",[s._v("将原来的画笔，使用SelectObject函数，放入到设备DC中，就会将我们创建的画笔取出")]),s._v(" "),n("h4",{attrs:{id:"_5-释放画笔"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-释放画笔"}},[s._v("#")]),s._v(" 5 释放画笔")]),s._v(" "),n("div",{staticClass:"language-C++ line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("BOOL DeleteObject(\n\tHGDIOBJ hObject\t//GDI绘图对象句柄，画笔句柄\n);\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[s._v("只能删除不被DC使用的画笔，所以在释放前，必须将画笔从DC中取出")]),s._v(" "),n("h2",{attrs:{id:"画刷"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#画刷"}},[s._v("#")]),s._v(" 画刷")]),s._v(" "),n("h3",{attrs:{id:"画刷相关"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#画刷相关"}},[s._v("#")]),s._v(" 画刷相关")]),s._v(" "),n("p",[s._v("画刷-封闭图形的填充颜色、图案")]),s._v(" "),n("p",[s._v("HBRUSH 画刷句柄")]),s._v(" "),n("h3",{attrs:{id:"画刷的使用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#画刷的使用"}},[s._v("#")]),s._v(" 画刷的使用")]),s._v(" "),n("h4",{attrs:{id:"_1-创建画刷"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-创建画刷"}},[s._v("#")]),s._v(" 1 创建画刷")]),s._v(" "),n("p",[s._v("CreateSolidBrush-创建实心画刷")]),s._v(" "),n("p",[s._v("CreateHatchBrush-创建纹理画刷")]),s._v(" "),n("h4",{attrs:{id:"_2-将画刷应用到dc中"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-将画刷应用到dc中"}},[s._v("#")]),s._v(" 2 将画刷应用到DC中")]),s._v(" "),n("p",[s._v("SelectObject")]),s._v(" "),n("h4",{attrs:{id:"_3-绘图-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-绘图-2"}},[s._v("#")]),s._v(" 3 绘图")]),s._v(" "),n("h4",{attrs:{id:"_4-将画刷从dc中取出"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-将画刷从dc中取出"}},[s._v("#")]),s._v(" 4 将画刷从DC中取出")]),s._v(" "),n("p",[s._v("SelectObject")]),s._v(" "),n("h4",{attrs:{id:"_5-删除画刷"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-删除画刷"}},[s._v("#")]),s._v(" 5 删除画刷")]),s._v(" "),n("p",[s._v("DeleteObject")]),s._v(" "),n("h2",{attrs:{id:"其它"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#其它"}},[s._v("#")]),s._v(" 其它")]),s._v(" "),n("p",[s._v("可以使用GetStockObject函数获取系统维护的画刷、画笔等")]),s._v(" "),n("p",[s._v("如果不使用画刷填充，需要使用NULL_BRUSH参数，获取不填充的画刷")]),s._v(" "),n("p",[s._v("GetStockObject返回的画刷不需要DeleteObject")]),s._v(" "),n("h2",{attrs:{id:"代码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#代码"}},[s._v("#")]),s._v(" 代码")]),s._v(" "),n("div",{staticClass:"language-C++ line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('//\n// Created by JS-001 on 2022/10/26 0026.\n//\n#include <Windows.h>\n#include <stdio.h>\n\n#define WM_MYMESSAGE WM_USER+1001\n\nHANDLE g_hOutput = 0;//接收标准输出句柄\n\nvoid DrawPit(HDC hdc) {\n\tfor (int i = 0; i < 256; i++) {\n\t\tfor (int j = 0; j < 256; j++) {\n\t\t\tSetPixel(hdc, i, j, RGB(i, j, 0));\n\t\t}\n\t}\n}\nvoid DrawLine(HDC hdc) {\n\tMoveToEx(hdc, 100, 100, NULL);\n\tLineTo(hdc,300,300);\n\tLineTo(hdc, 0, 300);\n}\nvoid DrawRectangle(HDC hdc) {\n\tRectangle(hdc, 100, 100, 300, 300);\n}\nvoid DrawEllipse(HDC hdc) {\n\tEllipse(hdc, 100, 100, 400, 300);\n\tEllipse(hdc, 100, 100, 200, 200);\n}\nvoid OnPaint(HWND hWnd) {\n\tPAINTSTRUCT ps = { 0 };\n\tHDC hdc = BeginPaint(hWnd, &ps);\n\n\tHPEN hPen = CreatePen(PS_SOLID, 10, RGB(255, 0, 0));\n\tHGDIOBJ nOldPen = SelectObject(hdc, hPen);\n\n\t//HBRUSH hBrush = CreateSolidBrush(RGB(0, 255, 0));\n\t//HBRUSH hBrush = CreateHatchBrush(HS_CROSS, RGB(0, 255, 0));\n\t//透明画刷\n\tHGDIOBJ hBrush = GetStockObject(NULL_BRUSH);\n\tHGDIOBJ nOldBrush = SelectObject(hdc, hBrush);\n\n\t//绘制点\n\t//DrawPit(hdc);\n\t//绘制线\n\t//DrawLine(hdc);\n\t//绘制矩形\n\t//DrawRectangle(hdc);\n\t//绘制椭圆\n\tDrawEllipse(hdc);\n\n\tSelectObject(hdc, nOldBrush);\n\t//DeleteObject(hBrush);\n\n\tSelectObject(hdc, nOldPen);\n\tDeleteObject(hPen);\n\n\tEndPaint(hWnd, &ps);\n}\n\n//窗口处理函数\nLRESULT CALLBACK WndProc(HWND hWnd, UINT msgID, WPARAM wParam, LPARAM lParam) {\n\tswitch (msgID)\n\t{\n\tcase WM_PAINT:\n\t\tOnPaint(hWnd);\n\t\tbreak;\n\tcase WM_DESTROY:\n\t\tPostQuitMessage(0);//可以使GetMessage函数返回0\n\t\tbreak;\n\t}\n\treturn DefWindowProc(hWnd, msgID, wParam, lParam);\n}\n\n//入口函数\nint CALLBACK WinMain(HINSTANCE hInstance, HINSTANCE hPreInstance, LPSTR lpCmdLine, int nCmdShow) {\n\t//增加DOS\n\tAllocConsole();\n\tg_hOutput = GetStdHandle(STD_OUTPUT_HANDLE);\n\t// 注册窗口类\n\tWNDCLASS wc = { 0 };\n\twc.cbClsExtra = 0;\n\twc.cbWndExtra = 0;\n\twc.hbrBackground = (HBRUSH)(COLOR_WINDOW + 1);\n\twc.hCursor = NULL;\n\twc.hIcon = NULL;\n\twc.hInstance = hInstance;\n\twc.lpfnWndProc = WndProc;\n\twc.lpszClassName = "Main";\n\twc.lpszMenuName = NULL;\n\twc.style = CS_HREDRAW | CS_VREDRAW;\n\n\tRegisterClass(&wc);\n\n\t//在内存中创建窗口\n\tchar* pszText = (char*)"hello data";\n\tHWND hWnd = CreateWindowEx(0, "Main", "Window", WS_OVERLAPPEDWINDOW, 100, 100, 500, 500, NULL, NULL, hInstance, pszText);\n\t//显示窗口\n\tShowWindow(hWnd, SW_SHOW);\n\tUpdateWindow(hWnd);\n\t// 消息循环，避免窗口消失\n\tMSG nMsg = { 0 };\n\twhile (GetMessage(&nMsg, NULL, 0, 0))\n\t{\n\t\tTranslateMessage(&nMsg);\n\t\t//将消息交给窗口处理函数\n\t\tDispatchMessage(&nMsg);\n\t}\n\treturn 0;\n\n}\n\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br"),n("span",{staticClass:"line-number"},[s._v("50")]),n("br"),n("span",{staticClass:"line-number"},[s._v("51")]),n("br"),n("span",{staticClass:"line-number"},[s._v("52")]),n("br"),n("span",{staticClass:"line-number"},[s._v("53")]),n("br"),n("span",{staticClass:"line-number"},[s._v("54")]),n("br"),n("span",{staticClass:"line-number"},[s._v("55")]),n("br"),n("span",{staticClass:"line-number"},[s._v("56")]),n("br"),n("span",{staticClass:"line-number"},[s._v("57")]),n("br"),n("span",{staticClass:"line-number"},[s._v("58")]),n("br"),n("span",{staticClass:"line-number"},[s._v("59")]),n("br"),n("span",{staticClass:"line-number"},[s._v("60")]),n("br"),n("span",{staticClass:"line-number"},[s._v("61")]),n("br"),n("span",{staticClass:"line-number"},[s._v("62")]),n("br"),n("span",{staticClass:"line-number"},[s._v("63")]),n("br"),n("span",{staticClass:"line-number"},[s._v("64")]),n("br"),n("span",{staticClass:"line-number"},[s._v("65")]),n("br"),n("span",{staticClass:"line-number"},[s._v("66")]),n("br"),n("span",{staticClass:"line-number"},[s._v("67")]),n("br"),n("span",{staticClass:"line-number"},[s._v("68")]),n("br"),n("span",{staticClass:"line-number"},[s._v("69")]),n("br"),n("span",{staticClass:"line-number"},[s._v("70")]),n("br"),n("span",{staticClass:"line-number"},[s._v("71")]),n("br"),n("span",{staticClass:"line-number"},[s._v("72")]),n("br"),n("span",{staticClass:"line-number"},[s._v("73")]),n("br"),n("span",{staticClass:"line-number"},[s._v("74")]),n("br"),n("span",{staticClass:"line-number"},[s._v("75")]),n("br"),n("span",{staticClass:"line-number"},[s._v("76")]),n("br"),n("span",{staticClass:"line-number"},[s._v("77")]),n("br"),n("span",{staticClass:"line-number"},[s._v("78")]),n("br"),n("span",{staticClass:"line-number"},[s._v("79")]),n("br"),n("span",{staticClass:"line-number"},[s._v("80")]),n("br"),n("span",{staticClass:"line-number"},[s._v("81")]),n("br"),n("span",{staticClass:"line-number"},[s._v("82")]),n("br"),n("span",{staticClass:"line-number"},[s._v("83")]),n("br"),n("span",{staticClass:"line-number"},[s._v("84")]),n("br"),n("span",{staticClass:"line-number"},[s._v("85")]),n("br"),n("span",{staticClass:"line-number"},[s._v("86")]),n("br"),n("span",{staticClass:"line-number"},[s._v("87")]),n("br"),n("span",{staticClass:"line-number"},[s._v("88")]),n("br"),n("span",{staticClass:"line-number"},[s._v("89")]),n("br"),n("span",{staticClass:"line-number"},[s._v("90")]),n("br"),n("span",{staticClass:"line-number"},[s._v("91")]),n("br"),n("span",{staticClass:"line-number"},[s._v("92")]),n("br"),n("span",{staticClass:"line-number"},[s._v("93")]),n("br"),n("span",{staticClass:"line-number"},[s._v("94")]),n("br"),n("span",{staticClass:"line-number"},[s._v("95")]),n("br"),n("span",{staticClass:"line-number"},[s._v("96")]),n("br"),n("span",{staticClass:"line-number"},[s._v("97")]),n("br"),n("span",{staticClass:"line-number"},[s._v("98")]),n("br"),n("span",{staticClass:"line-number"},[s._v("99")]),n("br"),n("span",{staticClass:"line-number"},[s._v("100")]),n("br"),n("span",{staticClass:"line-number"},[s._v("101")]),n("br"),n("span",{staticClass:"line-number"},[s._v("102")]),n("br"),n("span",{staticClass:"line-number"},[s._v("103")]),n("br"),n("span",{staticClass:"line-number"},[s._v("104")]),n("br"),n("span",{staticClass:"line-number"},[s._v("105")]),n("br"),n("span",{staticClass:"line-number"},[s._v("106")]),n("br"),n("span",{staticClass:"line-number"},[s._v("107")]),n("br"),n("span",{staticClass:"line-number"},[s._v("108")]),n("br"),n("span",{staticClass:"line-number"},[s._v("109")]),n("br"),n("span",{staticClass:"line-number"},[s._v("110")]),n("br"),n("span",{staticClass:"line-number"},[s._v("111")]),n("br"),n("span",{staticClass:"line-number"},[s._v("112")]),n("br")])])])}),[],!1,null,null,null);n.default=e.exports}}]);