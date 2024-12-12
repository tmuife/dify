# 1.About OCI Generative AI

You can use Oracle Cloud Infrastructure Generative AI (OCI Generative AI)  as a Model Provider, you can get more info about Oracle Cloud Infrastructure Generative AI (OCI Generative AI) on Oracle Web Site: https://docs.oracle.com/en/solutions/oci-generative-ai-llm/index.html

# 2.How to config OCI Generative AI

## 2.1 Apply a OCI Account

...

## 2.2 Setup api key

1. Click your Personal Info icon, and then click the "User settings" menu

![Img](./USE_ORACLE/img-20241212125641.png)

2. In Resources area, chose "API keys"

   ![image-20241212130149135](USE_ORACLE/image-20241212130149135.png)

3. You can click on "Add API key ", and you can using an exist pem key or generate a new pem key in this step. If you "Generate API key pair", don't forget to "Download private key", we will use it later.

![image-20241212130550133](USE_ORACLE/image-20241212130550133.png)

4. API key should like this, and you should click on "copy" to copy these contents, generately, for Generative AI, you'd better change the region to region=us-chicago-1:

![image-20241212132305909](USE_ORACLE/image-20241212132305909.png)

5. Find out the compartment id. Click the left top hamburger icon, -> "Identity & Security" -> "Compartments":

![image-20241212151507418](USE_ORACLE/image-20241212151507418.png)

create or chose your compartment ocid:

![image-20241212151614634](USE_ORACLE/image-20241212151614634.png)

6. Now we have api key and compartment info

```
[DEFAULT]
user=ocid1.user.oc1..
fingerprint=b2:94...:bb
tenancy=ocid1.tenancy.oc1.....kba
region=us-chicago-1
compartment_id=ocid1.compartment.oc1.....puq
```

and also we have a pem key file <oci_api_key.pem>

### 2.3 Encode Base64

We organize the api key information like this:

user/fingerprint/tenancy/region/compartment_id

For me:

```
ocid1.user.oc1../b2:94...:bb/ocid1.tenancy.oc1.....kba/us-chicago-1/ocid1.compartment.oc1.....puq
```

then open a website that can encode our string information to base64

> https://www.base64encode.org/

![image-20241212154025579](USE_ORACLE/image-20241212154025579.png)

Copy the string of base64, this is for the first input area

![image-20241212152812953](USE_ORACLE/image-20241212152812953.png)

Open the private pem key, copy the key file content

```
-----BEGIN PRIVATE KEY-----
MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC7pLjNou8SEbkQ
.......
zS62r72vuegBJWFkTP5lDPdmUeZVxBxXRR2w4lJc9QgoGo0zwqRLkNm9XMt4slcK
Jo2KvdjiKa0tk88C6ZJVaTDu
-----END PRIVATE KEY-----
```

Copy the content to encode base64

![image-20241212153957071](USE_ORACLE/image-20241212153957071.png)



![image-20241212152907403](USE_ORACLE/image-20241212152907403.png)

Enjoy it!
