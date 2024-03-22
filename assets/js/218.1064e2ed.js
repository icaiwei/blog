(window.webpackJsonp=window.webpackJsonp||[]).push([[218],{2885:function(s,n,a){"use strict";a.r(n);var e=a(0),t=Object(e.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"passwordboxhelper"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#passwordboxhelper"}},[s._v("#")]),s._v(" PasswordBoxHelper")]),s._v(" "),n("div",{staticClass:"language-c# line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('using System;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Text;\nusing System.Threading.Tasks;\nusing System.Windows;\nusing System.Windows.Controls;\n\nnamespace CaiWei.Common\n{\n    public class PasswordBoxHelper\n    {\n        //包含两个依赖附加属性Password Attach\n        public static readonly DependencyProperty PasswordProperty = DependencyProperty.RegisterAttached("Password", typeof(string), typeof(PasswordBoxHelper),\n            new PropertyMetadata(new PropertyChangedCallback(OnPropertyChanged)));\n        public static string GetPassword(DependencyObject d)\n        {\n            return (string)d.GetValue(PasswordProperty);\n        }\n        public static void SetPassword(DependencyObject d, string value)\n        {\n            d.SetValue(PasswordProperty, value);\n        }\n        public static readonly DependencyProperty AttachProperty = DependencyProperty.RegisterAttached("Attach", typeof(string),\n            typeof(PasswordBoxHelper), new PropertyMetadata(new PropertyChangedCallback(OnAttachChanged)));\n        public static string GetAttach(DependencyObject d)\n        {\n            return (string)d.GetValue(PasswordProperty);\n        }\n        public static void SetAttach(DependencyObject d, string value)\n        {\n            d.SetValue(PasswordProperty, value);\n        }\n        static bool _isUpdating = false;\n        private static void OnPropertyChanged(DependencyObject d, DependencyPropertyChangedEventArgs e)\n        {\n            PasswordBox pb = d as PasswordBox;\n            pb.PasswordChanged -= Pb_PasswordChanged;\n            if (!_isUpdating)\n                (d as PasswordBox).Password = e.NewValue.ToString();\n            pb.PasswordChanged += Pb_PasswordChanged;\n        }\n        private static void OnAttachChanged(DependencyObject d, DependencyPropertyChangedEventArgs e)\n        {\n            PasswordBox pb = d as PasswordBox;\n            pb.PasswordChanged -= Pb_PasswordChanged;\n        }\n        private static void Pb_PasswordChanged(object sender, RoutedEventArgs e)\n        {\n            PasswordBox pb = sender as PasswordBox;\n            _isUpdating = true;\n            SetPassword(pb, pb.Password);\n            _isUpdating = false;\n        }\n    }\n}\n\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br"),n("span",{staticClass:"line-number"},[s._v("50")]),n("br"),n("span",{staticClass:"line-number"},[s._v("51")]),n("br"),n("span",{staticClass:"line-number"},[s._v("52")]),n("br"),n("span",{staticClass:"line-number"},[s._v("53")]),n("br"),n("span",{staticClass:"line-number"},[s._v("54")]),n("br"),n("span",{staticClass:"line-number"},[s._v("55")]),n("br"),n("span",{staticClass:"line-number"},[s._v("56")]),n("br"),n("span",{staticClass:"line-number"},[s._v("57")]),n("br")])]),n("h2",{attrs:{id:"passwordbox"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#passwordbox"}},[s._v("#")]),s._v(" PasswordBox")]),s._v(" "),n("div",{staticClass:"language-xaml line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('<PasswordBox\n             Grid.Column="1"\n             VerticalAlignment="Center"\n             common:PasswordBoxHelper.Attach="true"\n             common:PasswordBoxHelper.Password="{Binding UserModel.Password, Mode=TwoWay, UpdateSourceTrigger=PropertyChanged}"\n             materialDesign:HintAssist.Hint="请输入密码"\n             Style="{StaticResource MaterialDesignFloatingHintPasswordBox}" />\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])])])}),[],!1,null,null,null);n.default=t.exports}}]);