(window.webpackJsonp=window.webpackJsonp||[]).push([[125],{2406:function(s,n,a){s.exports=a.p+"assets/img/image-20231017202222559.067220a5.png"},2407:function(s,n,a){s.exports=a.p+"assets/img/image-20231017202635610.48a01c3b.png"},2408:function(s,n,a){s.exports=a.p+"assets/img/image-20231017203017080.3810c082.png"},2863:function(s,n,a){"use strict";a.r(n);var e=a(0),r=Object(e.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"说明"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#说明"}},[s._v("#")]),s._v(" 说明")]),s._v(" "),n("p",[s._v("对Swagger美化，带有说明及版本")]),s._v(" "),n("p",[s._v("新建文件夹Config/Swagger")]),s._v(" "),n("h2",{attrs:{id:"apiversions类"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#apiversions类"}},[s._v("#")]),s._v(" ApiVersions类")]),s._v(" "),n("p",[s._v("在文件夹下新建ApiVersions类，作为版本控制")]),s._v(" "),n("div",{staticClass:"language-c# line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("public enum ApiVersions\n{\n    /// <summary>\n    /// 版本一\n    /// </summary>\n    V1,\n\n    /// <summary>\n    /// 版本二\n    /// </summary>\n    V2,\n\n    /// <summary>\n    /// 版本三\n    /// </summary>\n    V3\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br")])]),n("h2",{attrs:{id:"swaggerconfig类"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#swaggerconfig类"}},[s._v("#")]),s._v(" SwaggerConfig类")]),s._v(" "),n("p",[s._v("添加安全定义和文件上传按钮，为后续服务使用")]),s._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),n("p",[s._v("需要打开Test.Api的xml文档生成")])]),s._v(" "),n("p",[n("img",{attrs:{src:a(2406),alt:"image-20231017202222559"}})]),s._v(" "),n("div",{staticClass:"language-c# line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('/// <summary>\n/// Swagger配置类\n/// </summary>\npublic static class SwaggerConfig\n{\n    public static void AddSwaggerConfig(this WebApplicationBuilder builder)\n    {\n        // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle\n        builder.Services.AddEndpointsApiExplorer();\n        builder.Services.AddSwaggerGen(option =>\n        {\n            typeof(ApiVersions).GetEnumNames().ToList().ForEach(version =>\n            {\n                option.SwaggerDoc(version, new OpenApiInfo()\n                {\n                    Title = $"{version}测试API文档",\n                    Version = version,\n                    Description = $"通用版本的CoreApi版本{version}"\n                });\n            });\n            // xml文档绝对路径\n            var file = Path.Combine(AppContext.BaseDirectory, "Test.Api.xml");\n            // true: 显示控制器层注释\n            option.IncludeXmlComments(file, true);\n            // 对Action名称排序\n            option.OrderActionsBy(o => o.RelativePath);\n\n            // 添加安全定义\n            option.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme\n            {\n                Description = "请输入token,格式为 Bearer xxxxxx (注意中间必须有空格)",\n                Name = "Authorization",\n                In = ParameterLocation.Header,\n                Type = SecuritySchemeType.ApiKey,\n                BearerFormat = "JWT",\n                Scheme = "Bearer"\n            });\n            // 添加安全要求\n            option.AddSecurityRequirement(new OpenApiSecurityRequirement\n            {\n                {\n                    new OpenApiSecurityScheme\n                    {\n                        Reference = new OpenApiReference()\n                        {\n                            Type = ReferenceType.SecurityScheme,\n                            Id = "Bearer"\n                        }\n                    },\n                    new string[] { }\n                }\n            });\n\n            // 文件上传按钮\n            option.OperationFilter<FileUploadFilter>();\n        });\n    }\n\n    public static void UseSwaggerConfig(this WebApplication app)\n    {\n\n        app.UseSwagger();\n        app.UseSwaggerUI(option =>\n        {\n            foreach (string version in typeof(ApiVersions).GetEnumNames())\n            {\n                option.SwaggerEndpoint($"/swagger/{version}/swagger.json",\n                    $"测试第【{version}】版本");\n            }\n        });\n    }\n}\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br"),n("span",{staticClass:"line-number"},[s._v("50")]),n("br"),n("span",{staticClass:"line-number"},[s._v("51")]),n("br"),n("span",{staticClass:"line-number"},[s._v("52")]),n("br"),n("span",{staticClass:"line-number"},[s._v("53")]),n("br"),n("span",{staticClass:"line-number"},[s._v("54")]),n("br"),n("span",{staticClass:"line-number"},[s._v("55")]),n("br"),n("span",{staticClass:"line-number"},[s._v("56")]),n("br"),n("span",{staticClass:"line-number"},[s._v("57")]),n("br"),n("span",{staticClass:"line-number"},[s._v("58")]),n("br"),n("span",{staticClass:"line-number"},[s._v("59")]),n("br"),n("span",{staticClass:"line-number"},[s._v("60")]),n("br"),n("span",{staticClass:"line-number"},[s._v("61")]),n("br"),n("span",{staticClass:"line-number"},[s._v("62")]),n("br"),n("span",{staticClass:"line-number"},[s._v("63")]),n("br"),n("span",{staticClass:"line-number"},[s._v("64")]),n("br"),n("span",{staticClass:"line-number"},[s._v("65")]),n("br"),n("span",{staticClass:"line-number"},[s._v("66")]),n("br"),n("span",{staticClass:"line-number"},[s._v("67")]),n("br"),n("span",{staticClass:"line-number"},[s._v("68")]),n("br"),n("span",{staticClass:"line-number"},[s._v("69")]),n("br"),n("span",{staticClass:"line-number"},[s._v("70")]),n("br"),n("span",{staticClass:"line-number"},[s._v("71")]),n("br"),n("span",{staticClass:"line-number"},[s._v("72")]),n("br")])]),n("h2",{attrs:{id:"fileuploadfilter类"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#fileuploadfilter类"}},[s._v("#")]),s._v(" FileUploadFilter类")]),s._v(" "),n("p",[s._v("文件上传按钮过滤文件类")]),s._v(" "),n("div",{staticClass:"language-c# line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('public class FileUploadFilter : IOperationFilter\n{\n    /// <summary>\n    /// 文件上传筛选\n    /// </summary>\n    /// <param name="operation"></param>\n    /// <param name="context"></param>\n    public void Apply(OpenApiOperation operation, OperationFilterContext context)\n    {\n        const string FileUploadContentType = "multipart/form-data";\n        if (operation.RequestBody == null ||\n            !operation.RequestBody.Content.Any(x =>\n            x.Key.Equals(FileUploadContentType,\n            StringComparison.InvariantCultureIgnoreCase)))\n        {\n            return;\n        }\n\n        if (context.ApiDescription.ParameterDescriptions[0].Type == typeof(IFormCollection))\n        {\n            operation.RequestBody = new OpenApiRequestBody\n            {\n                Description = "文件上传",\n                Content = new Dictionary<string, OpenApiMediaType>\n                {\n                    {\n                        FileUploadContentType, new OpenApiMediaType\n                        {\n                            Schema = new OpenApiSchema\n                            {\n                                Type = "object",\n                                Required = new HashSet<string>{ "file" },\n                                Properties = new Dictionary<string, OpenApiSchema>\n                                {\n                                    {\n                                        "file", new OpenApiSchema()\n                                        {\n                                            Type = "string",\n                                            Format = "binary"\n                                        }\n                                    }\n                                }\n                            }\n                        }\n                    }\n                }\n            };\n        }\n    }\n}\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br"),n("span",{staticClass:"line-number"},[s._v("50")]),n("br")])]),n("h2",{attrs:{id:"注册配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#注册配置"}},[s._v("#")]),s._v(" 注册配置")]),s._v(" "),n("p",[s._v("在Program.cs类中注册SwaggerConfig")]),s._v(" "),n("div",{staticClass:"language-c# line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("// Swagger配置\nbuilder.AddSwaggerConfig();\n\nvar app = builder.Build();\n\n// Configure the HTTP request pipeline.\nif (app.Environment.IsDevelopment())\n{\n    app.UseSwaggerConfig();\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br")])]),n("h2",{attrs:{id:"测试"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#测试"}},[s._v("#")]),s._v(" 测试")]),s._v(" "),n("p",[s._v("在Controller方法中添加注释")]),s._v(" "),n("div",{staticClass:"language-c# line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('/// <summary>\n/// 获取天气\n/// </summary>\n/// <returns></returns>\n[HttpGet(Name = "GetWeatherForecast")]\npublic IEnumerable<WeatherForecast> Get()\n{\n    return Enumerable.Range(1, 5).Select(index => new WeatherForecast\n    {\n        Date = DateTime.Now.AddDays(index),\n        TemperatureC = Random.Shared.Next(-20, 55),\n        Summary = Summaries[Random.Shared.Next(Summaries.Length)]\n    })\n    .ToArray();\n}\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br")])]),n("p",[n("img",{attrs:{src:a(2407),alt:"image-20231017202635610"}})]),s._v(" "),n("p",[s._v("上传文件测试")]),s._v(" "),n("div",{staticClass:"language-c# line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('/// <summary>\n/// 上传文件\n/// </summary>\n[Route("api/[controller]/[action]")]\n[ApiController]\npublic class FileController : ControllerBase\n{\n    /// <summary>\n    /// 构造函数\n    /// </summary>\n    public FileController()\n    {\n    }\n\n    /// <summary>\n    /// 上传文件测试\n    /// </summary>\n    /// <param name="form"></param>\n    /// <returns></returns>\n    [HttpPost(Name = "File")]\n    public IActionResult UploadFile(IFormCollection form)\n    {\n        var filename = form.Files.FirstOrDefault()?.FileName;\n        return Ok(filename);\n    }\n}\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br")])]),n("p",[n("img",{attrs:{src:a(2408),alt:"image-20231017203017080"}})])])}),[],!1,null,null,null);n.default=r.exports}}]);