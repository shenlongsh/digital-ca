const e=()=>({legacy:!1,locale:"en",messages:{en:{p0:"Digital CA",p1:"Prepare Data",p2:"Make Certificate",p3:"Sign CRL",p4:"Step 1: Choose a  key type, then create key file, or import an existing key file.",p5:"Step 2: Input the key holder's DN, and supplement the SAN as needed.",p5a:"# Ref to item 3 of Q&A tab page for input guidance",p6:"Optional step, download and modify the default configuration file.",p7:"Please import or drag in the following files required to create the certificate:",p8:"Preview Certificate Information:",p9:"Step 1: Please import or drag in the following files required to sign a CRL file:",p10:"Step 2: If some valid certificates need to be revoked, input the serial numbers:",p11:"Then check the revocation reason:",p12:"Choose the DN and SAN source:",p13:"From CSR|From Config",p14:"Preview parsed data:",manifest:"manifest-en.json",m0:"Missing file: ",m1:`In Step 1 Config file parsed total certificate record number: {issuedlistnum}
`,m1a:`Expired number: {expired_num}
`,m1b:`Valid number: {valid_num}
`,m1c:`Revoked number: {revoked_num}
`,m2:"Key file not start with -----BEGIN PRIVATE KEY-----|Key file not end with -----END PRIVATE KEY-----",m3:"The imported ECDSA key parameter is neither P-256 nor P-384|The imported RSA-PSS key length is neither 2048 nor 4096",m4:"Import key successful|Import key failed",m5:"Lack of necessary data|Lack of key file",m6:"Please provide the distinguished name required to create CSR|No parsed valid distinguished name, please provide the DN meet the format",m7:"Please provide the key file to sign the CSR|OK",m8:"The public key and signature in the CSR file is not matched",m9:"The total number of certificate serial numbers parsed in the step 2 textarea: {0}",m9a:`. Compared to the records in the configuration file:
`,m9b:`Not matched number: {0}  ({1})
`,m9c:`Already expired number: {0}  ({1})
`,m9d:`Already revoked number: {0}  ({1})
`,m9e:`Still valid but will be revoked number:{0}
`,m14:"The Generated CRL will have {0} + {1} = {2} revoked records.",m15:"My key.key|My CSR.CSR",m16:"Please check the reason for revocation first",r0:"Unspecified",r1:"Key Compromise",r2:"CA Compromise",r3:"Affiliation Changed",r4:"Superseded",r5:"Cessation Of Operation",v0:"Issue a self-signed root certificate|Issue a subcertificate",v2:`Version: V3
Serial number: ***** (Determined at creation time)
Signature algorithm: {signalg}
Signature hash algorithm: {signhashalg}
Issuer: {issuer}
Valid from: {from}
Valid to: {to}
Subject: {user}
Public key: {pubkey}
Public key parameters: {keypara}

`,v3:"Authority Key Identifier: ",v4:"Subject Key Identifier: ",v5:"Subject Alternative Name: ",v6:"Enhanced Key Usage: ",v7:"Authority Information Access: ",v8:"CRL Distribution Points: ",v9:"BasicConstraints: ",v10:"KeyUsage: ",v11:"Thumbprint: ***** (Determined at creation time)",v21:"Client Authentication (1.3.6.1.5.5.7.3.2), ",v22:"Server Authentication (1.3.6.1.5.5.7.3.1), ",v23:"Code Signing (1.3.6.1.5.5.7.3.3), ",v24:`Certification Authority Issuer (1.3.6.1.5.5.7.48.2)
`,b1:"Generate key file",b2:"Import or drag in key file",b3:"Generate CSR file",b4:"Download configuration file",b5:"Signing Key",b6:"Certificate Signing Request",b7:"Configuration file",b8:"Generate Certificate",b9:"Generate CRL",q1:"Will this page send data back to the back-end server?",a1:"No. This webpage can work normally in off-line mode after complete the first loading. All data is generated locally by the browser and will not be sent back to the back-end server. Refreshing the webpage will clear the relevant data.",q2:"Can this website use a secret key created by a third party?",a2:`Yes. After testing, the same type of key created with openssl, in PEM format without password protection, can be used normally on this webpage.
If you need to use a key provided by a third party, you need to ensure that the key was created on an offline device, otherwise the key could be compromised and misused.
The keys generated online by some static web pages are also unreliable, because static web pages can secretly pass the keys created for you to the background through CORS method.
`,q3:"What are the available DN and SAN parameters?",a3:`# DN: Distinguished Name. SAN:Subject Alternative Name
# The DN parameters that can be parsed are as follows, separated by commas. Not all attributes are needed, only pick what you want to use.
CN = common name, C = country name, L = locality name, ST = state or  province name,
STREET = street address, O = organization name, OU = organization unit name,
description = some description, uniqueIdentifier = some uid, dnQualifier = some dnq,
DC = www, DC = xyz, DC = com, UID = user ID

# The SAN parameters that can be parsed are as follows, the supported types are email, URI, DNS, and IP.
subjectAltName = email:my{'@'}example.com, 
subjectAltName = URI:http://my.example.com/
subjectAltName = DNS:test1.example.com,DNS:test2.example.com
subjectAltName = IP:192.168.7.1,IP:13::17`,q4:"Do I have to use a configuration file?",a4:"If the created key is only used to request a digital certificate from a certificate authority, then there is no need to use a configuration file. Only when you use the created key to make digital certificates and sign CRLs, then the configuration file is required.",q5:"Can I modify the certificate holder's DN and SAN information when issuing a certificate?",a5:"The certificate holder's DN and SAN information comes from the CSR. If the certificate issuer wants to change the certificate holder's DN and SAN information, you can change the option [change_dn_san: hidden] to [change_dn_san: show] in the configuration file to switch the DN and SAN information sources.",q6:"How is the certificate issue date and valid period set?",a6:"This page uses the current system time as the certificate issue date, so make sure that the system time and UTC time are roughly the same. The valid_days parameter in the configuration file is used to set the valid period of the certificate, and the valid_crl_days parameter is used to set the valid period of the CRL.",q7:"What do the numbers in the configuration file name mean?",a7:"The first number represents the number of issued certificate, and the second number represents the number of the issued CRL. Each time issuing a certificate or CRL the respect number will be incremented by one, also the file name of download certificate or CRL will include the respect number.",q8:"Where are the issued certificates recorded?",a8:`Each time a certificate is issued, a record of the issued certificate is added to the configuration file. Open the configuration file to see. Be careful not to confuse the record index number with the certificate serial number. Records with status V are valid certificate records, E are expired certificate records, and R are revoked certificate records. 
Each time the web page reads the configuration file, it will check whether the certificate record has expired. If there is an expired record, the status will be changed to E at the next time when download the configuration file.`,q9:"Can I delete the certificate record in the configuration file?",a9:"You can delete records with status E, but do not delete records with status V or R. Deleting a record with status V makes it irrevocable until it expires. Deleting a record with status R will cause it to be missing the next time the CRL is published, causing it to be mistaken for a valid state again."},"zh-CN":{p0:"数字证书",p1:"准备数据",p2:"制作证书",p3:"签发CRL",p4:"第一步：选择秘钥类型后创建秘钥文件，或者导入已有密钥文件。",p5:"第二步：请输入秘钥持有人的的可分辨名称，并按需补充SAN。",p5a:"#参考问答标签页的条目3以获取输入指导",p6:"可选步骤，下载并修改默认构型文件。",p7:"请导入或拖入以下制作证书所需文件：",p8:"预览证书信息：",p9:"第一步：请导入或拖入以下签发CRL所需文件：",p10:"第二步：如有现行有效的证书需要被撤销，请输入序列号：",p11:"再勾选撤销原因：",p12:"请选择DN和SAN的来源：",p13:"来自CSR|来自构型文件",p14:"预览解析的数据",manifest:"manifest-zh.json",m0:"缺少文件：",m1:`在第一步构型文件中解析出的证书记录总数：{issuedlistnum}
已过期记录数量：{expired_num}
现行有效记录数量：{valid_num}
已撤销记录数量：{revoked_num}`,m2:"密钥文件不是以-----BEGIN PRIVATE KEY-----开头|密钥文件不是以-----END PRIVATE KEY-----结尾",m3:"导入ECDSA密钥参数不是P-256或P-384|导入RSA-PSS密钥长度不是2048或4096位",m4:"密钥导入成功|密钥导入失败",m5:"缺少必要信息|缺少秘钥文件",m6:"请先提供创建CSR所需的可分辨名称|没有解析出有效的可分辨名称，请先提供符合格式要求的可分辨名称",m7:"请先提供签署CSR所需的秘钥文件|知道了",m8:"导入CSR文件的公钥和签名不匹配",m9:"在第二步文本框中解析出的证书序号总数：{0}",m9a:`。 与构型文件中的记录相比：
`,m9b:`没有匹配到的序号数量：{0}  ({1})
`,m9c:`已在失效状态的序号数量：{0}  ({1})
`,m9d:`已被撤销的序号数量：{0}  ({1})
`,m9e:`还是现行有效即将被撤销的序号数量：{0}
`,m14:"生成的CRL将会有{0} + {1} = {2}个被撤销的记录",m15:"我的秘钥.key|我的证书签名请求.CSR",m16:"请先勾选撤销原因",r0:"未指定",r1:"密钥泄漏",r2:"CA 泄漏",r3:"附属关系已更改",r4:"被取代",r5:"停止运行",v0:"颁发自签名根证书|颁发子证书",v2:`版本：V3
序列号：*****（创建时确定）
签名算法：{signalg}
签名哈希算法: {signhashalg}
颁发者：{issuer}
有效期从：{from}
到：{to}
使用者：{user}
公钥：{pubkey}
公钥参数：{keypara}

`,v3:"授权秘钥标识符：",v4:"使用者秘钥标识符：",v5:"使用者可选名称：",v6:"增强型秘钥用法：",v7:"授权信息访问：",v8:"CRL分发点：",v9:"基本约束：",v10:"秘钥用法：",v11:"指纹：*****（创建时确定）",v21:"客户端身份验证 (1.3.6.1.5.5.7.3.2), ",v22:"服务器身份验证 (1.3.6.1.5.5.7.3.1), ",v23:"代码签名 (1.3.6.1.5.5.7.3.3), ",v24:`证书颁发机构颁发者 (1.3.6.1.5.5.7.48.2)
`,b1:"生成秘钥文件",b2:"导入或拖入密钥文件",b3:"生成CSR文件",b4:"下载构型文件",b5:"签名密钥",b6:"证书签名请求(CSR)",b7:"构型文件",b8:"生成证书",b9:"生成CRL",q1:"本网页会往后台服务器回传数据吗？",a1:"不会。本网页在初次加载完毕后可以在没有网络的模式下正常工作，所有数据都是浏览器在本地计算产生的，不会向后台服务器回传数据。刷新网页就会清空相关数据。",q2:"本网页能否使用第三方创建的秘钥？",a2:`可以。经测试，使用openssl创建的相同类型，没有密码保护的PEM格式的密钥可以在本网页上正常使用。
如需使用第三方提供的秘钥，需要确保秘钥是在离线设备上创建的，否则该秘钥就有被泄露和滥用的可能。
一些静态网页在线生成的秘钥也是不可靠的，因为静态网页可以通过CORS的方式向后台偷偷传递为你创建的秘钥。`,q3:"可以使用的DN和SAN参数有哪些?",a3:`#DN：Distinguished Name，可分辨名称。SAN：Subject Alternative Name，使用者可选名称
#可以解析的DN参数如下，并不是所有属性都要使用，仅挑选要用的属性。
CN = common name, C = country name, L = locality name, ST = state or  province name,
STREET = street address, O = organization name, OU = organization unit name,
description = some description, uniqueIdentifier = some uid, dnQualifier = some dnq,
DC = www, DC = xyz, DC = com, UID = user ID

#可以解析的SAN格式如下，支持的类型有email，URI，DNS，IP。
subjectAltName = email:my{'@'}example.com, 
subjectAltName = URI:http://my.example.com/
subjectAltName = DNS:test1.example.com,DNS:test2.example.com
subjectAltName = IP:192.168.7.1,IP:13::17`,q4:"必须要使用构型文件吗？",a4:"如果创建的秘钥只是用来向证书授权机构申请获取一份数字证书的话，无需使用构型文件。只有在创建的秘钥是用于制作数字证书和签署CRL时，才需要使用构型文件。",q5:"签发证书时能否修改证书持有人的DN和SAN信息?",a5:"证书持有人的DN和SAN信息来自CSR，如果证书颁发者想要替换证书中持有人的DN和SAN信息，可以在构型文件中将选项[change_dn_san:hidden]修改成[change_dn_san:show]，就可以切换证书持有人的DN和SAN信息来源了。",q6:"证书颁发日期和有效期都是如何设置的?",a6:"本网页使用当前系统时间作为证书颁发日期，因此请确保系统时间和UTC时间保持基本一致。构型文件中的valid_days参数用于设置证书的有效期，valid_crl_days参数用于设置CRL的有效期。",q7:"构型文件名中的数字有何含义?",a7:"第一个数字代表已颁发证书的数量，第二个数字代表已颁发CRL的数量。每次颁发证书或者CRL时对应数字都会加一，下载的证书或者CRL文件名中也含有对应的数字。",q8:"已颁发证书清单在哪里？",a8:`每次颁发证书后，都会在构型文件里添加一条已颁发证书记录。打开构型文件即可看到。注意不要混淆记录编号和证书序列号。状态V是指现行有效的证书记录，E是已过期的证书记录，R是被撤销的证书记录。
网页每次读取构型文件时，都会检查有无证书记录到期。如有到期的记录，会在下次下载构型文件时将对应记录的状态改成E。`,q9:"可否删除构型文件中的证书记录？",a9:"可以删除状态为E的记录，但不要删除状态为V或R的记录。删除了状态为V的记录会使其在到期前无法撤销。删除了状态为R的记录会在下次发布CRL时缺少该记录，导致其又会被误认为还处于有效状态。"}}});export{e as default};
