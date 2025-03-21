// This source code is a part of Project Violet.
// Copyright (C) 2021. violet-team. Licensed under the Apache-2.0 License.
//
// Script Name: hitomi_get_image_list.js
// Input:  $id     [int] - Hitomi.la Article Id
// Output: $result [Map] - Image List, Thumbnail List

function create_download_url(id) {
  return "https://ltn.hitomi.la/galleries/" + id + ".js";
}

var gg = {};
var window = {};
var document = {};
var name = {};
var location = {};
var customElements = {};
var history = {};
var locationbar = {};
var menubar = {};
var personalbar = {};
var scrollbars = {};
var statusbar = {};
var toolbar = {};
var status = {};
var closed = {};
var frames = {};
var length = {};
var top = {};
var opener = {};
var parent = {};
var frameElement = {};
var navigator = {};
var origin = {};
var external = {};
var screen = {};
var innerWidth = {};
var innerHeight = {};
var scrollX = {};
var pageXOffset = {};
var scrollY = {};
var pageYOffset = {};
var visualViewport = {};
var screenX = {};
var screenY = {};
var outerWidth = {};
var outerHeight = {};
var devicePixelRatio = {};
var clientInformation = {};
var screenLeft = {};
var screenTop = {};
var defaultStatus = {};
var defaultstatus = {};
var styleMedia = {};
var onsearch = {};
var isSecureContext = {};
var performance = {};
var onappinstalled = {};
var onbeforeinstallprompt = {};
var crypto = {};
var indexedDB = {};
var webkitStorageInfo = {};
var sessionStorage = {};
var localStorage = {};
var onbeforexrselect = {};
var onabort = {};
var onblur = {};
var oncancel = {};
var oncanplay = {};
var oncanplaythrough = {};
var onchange = {};
var onclick = {};
var onclose = {};
var oncontextmenu = {};
var oncuechange = {};
var ondblclick = {};
var ondrag = {};
var ondragend = {};
var ondragenter = {};
var ondragleave = {};
var ondragover = {};
var ondragstart = {};
var ondrop = {};
var ondurationchange = {};
var onemptied = {};
var onended = {};
var onerror = {};
var onfocus = {};
var onformdata = {};
var oninput = {};
var oninvalid = {};
var onkeydown = {};
var onkeypress = {};
var onkeyup = {};
var onload = {};
var onloadeddata = {};
var onloadedmetadata = {};
var onloadstart = {};
var onmousedown = {};
var onmouseenter = {};
var onmouseleave = {};
var onmousemove = {};
var onmouseout = {};
var onmouseover = {};
var onmouseup = {};
var onmousewheel = {};
var onpause = {};
var onplay = {};
var onplaying = {};
var onprogress = {};
var onratechange = {};
var onreset = {};
var onresize = {};
var onscroll = {};
var onseeked = {};
var onseeking = {};
var onselect = {};
var onstalled = {};
var onsubmit = {};
var onsuspend = {};
var ontimeupdate = {};
var ontoggle = {};
var onvolumechange = {};
var onwaiting = {};
var onwebkitanimationend = {};
var onwebkitanimationiteration = {};
var onwebkitanimationstart = {};
var onwebkittransitionend = {};
var onwheel = {};
var onauxclick = {};
var ongotpointercapture = {};
var onlostpointercapture = {};
var onpointerdown = {};
var onpointermove = {};
var onpointerup = {};
var onpointercancel = {};
var onpointerover = {};
var onpointerout = {};
var onpointerenter = {};
var onpointerleave = {};
var onselectstart = {};
var onselectionchange = {};
var onanimationend = {};
var onanimationiteration = {};
var onanimationstart = {};
var ontransitionrun = {};
var ontransitionstart = {};
var ontransitionend = {};
var ontransitioncancel = {};
var onafterprint = {};
var onbeforeprint = {};
var onbeforeunload = {};
var onhashchange = {};
var onlanguagechange = {};
var onmessage = {};
var onmessageerror = {};
var onoffline = {};
var ononline = {};
var onpagehide = {};
var onpageshow = {};
var onpopstate = {};
var onrejectionhandled = {};
var onstorage = {};
var onunhandledrejection = {};
var onunload = {};
var alert = {};
var atob = {};
var blur = {};
var btoa = {};
var cancelAnimationFrame = {};
var cancelIdleCallback = {};
var captureEvents = {};
var clearInterval = {};
var clearTimeout = {};
var close = {};
var confirm = {};
var createImageBitmap = {};
var fetch = {};
var find = {};
var focus = {};
var getComputedStyle = {};
var getSelection = {};
var matchMedia = {};
var moveBy = {};
var moveTo = {};
var open = {};
var postMessage = {};
var print = {};
var prompt = {};
var queueMicrotask = {};
var releaseEvents = {};
var reportError = {};
var requestAnimationFrame = {};
var requestIdleCallback = {};
var resizeBy = {};
var resizeTo = {};
var scroll = {};
var scrollBy = {};
var scrollTo = {};
var setInterval = {};
var setTimeout = {};
var stop = {};
var webkitCancelAnimationFrame = {};
var webkitRequestAnimationFrame = {};
var chrome = {};
var caches = {};
var cookieStore = {};
var ondevicemotion = {};
var ondeviceorientation = {};
var ondeviceorientationabsolute = {};
var showDirectoryPicker = {};
var showOpenFilePicker = {};
var showSaveFilePicker = {};
var originAgentCluster = {};
var trustedTypes = {};
var speechSynthesis = {};
var onpointerrawupdate = {};
var crossOriginIsolated = {};
var scheduler = {};
var openDatabase = {};
var webkitRequestFileSystem = {};
var webkitResolveLocalFileSystemURL = {};
var cr = {};


gg = { m: function(g) {
var o = 0;
switch (g) {
case 1584:
case 3917:
case 3343:
case 2971:
case 3192:
case 1516:
case 1824:
case 716:
case 900:
case 2523:
case 1021:
case 280:
case 1539:
case 1043:
case 1907:
case 818:
case 3004:
case 1811:
case 3960:
case 3314:
case 1161:
case 1357:
case 3386:
case 1869:
case 1119:
case 1671:
case 2846:
case 2459:
case 623:
case 2607:
case 2493:
case 1662:
case 3139:
case 3754:
case 2637:
case 3089:
case 3831:
case 1172:
case 3034:
case 3116:
case 2570:
case 3184:
case 800:
case 3548:
case 3345:
case 3536:
case 607:
case 177:
case 199:
case 283:
case 1509:
case 1640:
case 2897:
case 1937:
case 114:
case 3519:
case 2328:
case 1258:
case 3561:
case 1045:
case 5:
case 1581:
case 1129:
case 2217:
case 2133:
case 3324:
case 883:
case 1951:
case 231:
case 423:
case 3150:
case 701:
case 200:
case 439:
case 4078:
case 14:
case 1024:
case 2105:
case 2544:
case 2651:
case 1526:
case 2377:
case 2260:
case 1164:
case 227:
case 3927:
case 2046:
case 3857:
case 1886:
case 1069:
case 758:
case 2758:
case 782:
case 1011:
case 856:
case 795:
case 3402:
case 3240:
case 3476:
case 3751:
case 956:
case 832:
case 1291:
case 3066:
case 1366:
case 1447:
case 2318:
case 2515:
case 2008:
case 1980:
case 3529:
case 407:
case 1845:
case 462:
case 555:
case 1727:
case 2135:
case 4017:
case 661:
case 2097:
case 2278:
case 880:
case 420:
case 983:
case 733:
case 729:
case 3453:
case 687:
case 2430:
case 3126:
case 3384:
case 3462:
case 1189:
case 853:
case 3316:
case 950:
case 749:
case 3253:
case 2230:
case 1016:
case 1759:
case 1306:
case 2478:
case 1372:
case 440:
case 3339:
case 2068:
case 1793:
case 1514:
case 1491:
case 1826:
case 1586:
case 3202:
case 3276:
case 3440:
case 3995:
case 3622:
case 1212:
case 2813:
case 2163:
case 1247:
case 3504:
case 247:
case 2460:
case 986:
case 3993:
case 1279:
case 1850:
case 2722:
case 3589:
case 3143:
case 87:
case 3829:
case 694:
case 1348:
case 585:
case 1296:
case 4030:
case 443:
case 3309:
case 2417:
case 3019:
case 1319:
case 1157:
case 3864:
case 2620:
case 3048:
case 2044:
case 3381:
case 1602:
case 626:
case 1884:
case 2118:
case 1524:
case 1816:
case 1166:
case 3806:
case 1131:
case 3930:
case 3647:
case 2352:
case 1458:
case 2779:
case 2999:
case 1839:
case 570:
case 3612:
case 3326:
case 1494:
case 2303:
case 806:
case 708:
case 1700:
case 238:
case 2796:
case 2976:
case 640:
case 2538:
case 2335:
case 2546:
case 1699:
case 27:
case 1026:
case 3501:
case 3029:
case 2015:
case 2508:
case 2305:
case 4095:
case 591:
case 3566:
case 668:
case 2333:
case 710:
case 4087:
case 947:
case 1655:
case 2870:
case 1730:
case 2259:
case 2932:
case 1101:
case 3900:
case 912:
case 3848:
case 2597:
case 3474:
case 1809:
case 2667:
case 2955:
case 3169:
case 1632:
case 2825:
case 1910:
case 2177:
case 1364:
case 2585:
case 3861:
case 3958:
case 1680:
case 914:
case 3588:
case 1430:
case 999:
case 3385:
case 1085:
case 329:
case 2845:
case 333:
case 175:
case 605:
case 3049:
case 2366:
case 2447:
case 1782:
case 2980:
case 2412:
case 1152:
case 3308:
case 2331:
case 543:
case 1349:
case 825:
case 3994:
case 3774:
case 485:
case 3346:
case 3535:
case 1513:
case 540:
case 2479:
case 3077:
case 1377:
case 395:
case 1188:
case 2814:
case 2674:
case 1038:
case 358:
case 2886:
case 1046:
case 526:
case 301:
case 765:
case 330:
case 1544:
case 1974:
case 1794:
case 2843:
case 2129:
case 670:
case 2821:
case 877:
case 131:
case 1328:
case 2258:
case 1525:
case 3473:
case 685:
case 1885:
case 519:
case 84:
case 2045:
case 277:
case 299:
case 1363:
case 2937:
case 214:
case 1962:
case 2509:
case 405:
case 3678:
case 3280:
case 473:
case 1808:
case 1637:
case 3141:
case 1940:
case 2742:
case 2662:
case 3849:
case 1487:
case 3123:
case 2106:
case 2294:
case 1190:
case 1838:
case 1846:
case 1459:
case 2148:
case 2014:
case 302:
case 225:
case 3877:
case 1227:
case 2357:
case 754:
case 2869:
case 180:
case 2282:
case 3065:
case 1698:
case 2907:
case 1883:
case 2539:
case 2043:
case 1971:
case 2584:
case 367:
case 1365:
case 2516:
case 3251:
case 2632:
case 655:
case 1825:
case 1667:
case 464:
case 1955:
case 2482:
case 2910:
case 2364:
case 39:
case 1585:
case 92:
case 3451:
case 2101:
case 3776:
case 3996:
case 561:
case 587:
case 4022:
case 3146:
case 1597:
case 3220:
case 186:
case 3799:
case 1610:
case 3315:
case 3753:
case 2655:
case 2967:
case 3518:
case 3005:
case 1015:
case 1508:
case 310:
case 3549:
case 245:
case 1335:
case 3912:
case 308:
case 2026:
case 313:
case 2653:
case 2494:
case 1303:
case 3185:
case 3256:
case 1013:
case 2700:
case 1976:
case 784:
case 1823:
case 3890:
case 150:
case 6:
case 1999:
case 2839:
case 3344:
case 3273:
case 1583:
case 2884:
case 3052:
case 1118:
case 1044:
case 2166:
case 2524:
case 3659:
case 507:
case 2009:
case 3407:
case 2795:
case 1620:
case 112:
case 546:
case 3888:
case 3693:
case 3210:
case 3454:
case 2348:
case 3563:
case 336:
case 945:
case 3267:
case 2092:
case 147:
case 498:
case 1070:
case 3805:
case 676:
case 234:
case 1163:
case 2247:
case 4079:
case 2491:
case 2514:
case 2826:
case 2956:
case 523:
case 68:
case 1128:
case 4:
case 2306:
case 1478:
case 3323:
case 2134:
case 2973:
case 3852:
case 2084:
case 3922:
case 1068:
case 1844:
case 3695:
case 3368:
case 2881:
case 2039:
case 3565:
case 3437:
case 1023:
case 1656:
case 3090:
case 2521:
case 2451:
case 51:
case 1848:
case 1064:
case 849:
case 3101:
case 1836:
case 1900:
case 2088:
case 3809:
case 2146:
case 1169:
case 2275:
case 1861:
case 3364:
case 753:
case 1029:
case 210:
case 3050:
case 2033:
case 2600:
case 345:
case 2220:
case 1124:
case 4056:
case 590:
case 2979:
case 1566:
case 2315:
case 3329:
case 3892:
case 3655:
case 2005:
case 2185:
case 4020:
case 3700:
case 3569:
case 77:
case 2035:
case 2197:
case 988:
case 184:
case 3699:
case 3026:
case 2313:
case 2755:
case 952:
case 2630:
case 836:
case 3884:
case 3676:
case 1381:
case 3166:
case 3816:
case 949:
case 1647:
case 1767:
case 1806:
case 3131:
case 1930:
case 417:
case 3081:
case 3839:
case 1612:
case 2344:
case 1061:
case 3545:
case 2454:
case 99:
case 3104:
case 2563:
case 3787:
case 1471:
case 2659:
case 1186:
case 3157:
case 1255:
case 2407:
case 3795:
case 1864:
case 2888:
case 2693:
case 1036:
case 3361:
case 1114:
case 2210:
case 236:
case 1589:
case 3920:
case 1121:
case 1773:
case 813:
case 2833:
case 1993:
case 706:
case 910:
case 3279:
case 3850:
case 808:
case 1959:
case 2370:
case 2498:
case 2267:
case 1143:
case 252:
case 3491:
case 3826:
case 810:
case 913:
case 3956:
case 1202:
case 104:
case 674:
case 908:
case 1276:
case 4067:
case 288:
case 3586:
case 1557:
case 1775:
case 2835:
case 334:
case 1622:
case 3247:
case 3543:
case 0:
case 3039:
case 3881:
case 1384:
case 2565:
case 4010:
case 1316:
case 441:
case 249:
case 2090:
case 3189:
case 3372:
case 3134:
case 3759:
case 3793:
case 544:
case 1339:
case 642:
case 229:
case 816:
case 3845:
case 881:
case 2113:
case 1694:
case 421:
case 2237:
case 867:
case 4007:
case 2397:
case 660:
case 2958:
case 622:
case 775:
case 1499:
case 524:
case 2588:
case 1564:
case 2385:
case 2018:
case 1751:
case 437:
case 1834:
case 2994:
case 3291:
case 802:
case 2049:
case 1889:
case 1031:
case 1529:
case 1181:
case 3412:
case 295:
case 3164:
case 282:
case 1001:
case 3674:
case 1369:
case 3886:
case 2346:
case 3069:
case 1432:
case 2338:
case 2077:
case 1682:
case 2865:
case 2627:
case 3581:
case 3129:
case 3821:
case 2254:
case 700:
case 3024:
case 2410:
case 2982:
case 230:
case 731:
case 1780:
case 967:
case 1455:
case 663:
case 1536:
case 399:
case 314:
case 3509:
case 2028:
case 1519:
case 830:
case 783:
case 933:
case 929:
case 1561:
case 3045:
case 1139:
case 858:
case 2849:
case 2456:
case 3334:
case 882:
case 1831:
case 2991:
case 2771:
case 3106:
case 3294:
case 3172:
case 895:
case 1866:
case 1707:
case 1034:
case 460:
case 2168:
case 621:
case 2642:
case 1960:
case 3161:
case 463:
case 3671:
case 2125:
case 2617:
case 179:
case 609:
case 3357:
case 1386:
case 3869:
case 3778:
case 3998:
case 982:
case 732:
case 3304:
case 3136:
case 202:
case 1343:
case 1192:
case 2740:
case 3516:
case 2660:
case 3824:
case 780:
case 930:
case 1942:
case 3954:
case 216:
case 901:
case 489:
case 1321:
case 596:
case 2475:
case 2065:
case 3043:
case 43:
case 415:
case 3478:
case 3068:
case 1695:
case 1341:
case 1687:
case 149:
case 478:
case 3023:
case 2775:
case 1835:
case 2622:
case 3813:
case 2145:
case 509:
case 2504:
case 2987:
case 152:
case 3128:
case 734:
case 204:
case 2440:
case 2993:
case 3722:
case 2589:
case 3675:
case 4076:
case 1370:
case 3815:
case 884:
case 4002:
case 2829:
case 2232:
case 3165:
case 347:
case 3070:
case 521:
case 1325:
case 1528:
case 1659:
case 2186:
case 312:
case 1888:
case 1693:
case 2036:
case 2864:
case 3442:
case 3200:
case 2061:
case 2309:
case 3417:
case 2806:
case 1890:
case 1732:
case 3953:
case 2767:
case 3779:
case 3999:
case 1344:
case 1273:
case 3044:
case 3118:
case 563:
case 904:
case 678:
case 3538:
case 3335:
case 3546:
case 1197:
case 1912:
case 1003:
case 2501:
case 496:
case 1755:
case 3287:
case 2326:
case 3013:
case 1577:
case 615:
case 1035:
case 338:
case 3902:
case 26:
case 1799:
case 1979:
case 3610:
case 1220:
case 2124:
case 2350:
case 3870:
case 3932:
case 3015:
case 3508:
case 3427:
case 3305:
case 1183:
case 1549:
case 1600:
case 110:
case 3747:
case 3825:
case 2111:
case 3585:
case 2679:
case 3712:
case 3388:
case 1275:
case 1776:
case 1996:
case 2900:
case 1451:
case 2474:
case 1138:
case 965:
case 2572:
case 3541:
case 3698:
case 3883:
case 3365:
case 2274:
case 2343:
case 3971:
case 3791:
case 2192:
case 116:
case 1251:
case 542:
case 1740:
case 644:
case 181:
case 2942:
case 254:
case 2109:
case 2057:
case 3607:
case 672:
case 102:
case 2737:
case 2004:
case 332:
case 2314:
case 3227:
case 1617:
case 2707:
case 2116:
case 1168:
case 3570:
case 1280:
case 1141:
case 1991:
case 1123:
case 3525:
case 1473:
case 3328:
case 2798:
case 777:
case 3885:
case 865:
case 3363:
case 383:
case 1982:
case 130:
case 671:
case 101:
case 1383:
case 2455:
case 1207:
case 472:
case 3083:
case 2271:
case 3974:
case 3133:
case 1254:
case 2150:
case 3242:
case 74:
case 265:
case 3400:
case 693:
case 1338:
case 1467:
case 4040:
case 1535:
case 1298:
case 997:
case 2804:
case 3513:
case 182:
case 2001:
case 1503:
case 3260:
case 195:
case 541:
case 158:
case 954:
case 2889:
case 3515:
case 3782:
case 3008:
case 2658:
case 2476:
case 879:
case 1018:
case 897:
case 3152:
case 318:
case 4071:
case 61:
case 635:
case 3097:
case 3103:
case 3430:
case 133:
case 3085:
case 1863:
case 3135:
case 2262:
case 1411:
case 1594:
case 2781:
case 1079:
case 3032:
case 650:
case 2859:
case 2367:
case 3915:
case 894:
case 2929:
case 3379:
case 2688:
case 2151:
case 226:
case 3703:
case 4041:
case 3055:
case 3396:
case 3248:
case 67:
case 4023:
case 2310:
case 315:
case 33:
case 3650:
case 2633:
case 2000:
case 638:
case 1096:
case 2225:
case 4068:
case 1713:
case 3219:
case 1629:
case 1558:
case 243:
case 1216:
case 686:
case 3099:
case 611:
case 3574:
case 2497:
case 3733:
case 1952:
case 2750:
case 1239:
case 3944:
case 412:
case 2485:
case 3206:
case 3158:
case 2527:
case 1376:
case 994:
case 1302:
case 3431:
case 155:
case 919:
case 3913:
case 3466:
case 3002:
case 324:
case 3788:
case 653:
case 2652:
case 3076:
case 2895:
case 1935:
case 3312:
case 1768:
case 1591:
case 4013:
case 1648:
case 926:
case 2093:
case 2716:
case 2059:
case 2107:
case 3609:
case 1486:
case 438:
case 3790:
case 1619:
case 3229:
case 47:
case 2215:
case 1723:
case 1741:
case 742:
case 1250:
case 1879:
case 4044:
case 940:
case 843:
case 1896:
case 2800:
case 1421:
case 774:
case 450:
case 2961:
case 2375:
case 18:
case 759:
case 3692:
case 2919:
case 3855:
case 1445:
case 3968:
case 3899:
case 3322:
case 606:
case 164:
case 176:
case 968:
case 3941:
case 2373:
case 943:
case 1770:
case 1990:
case 2972:
case 2792:
case 4015:
case 3802:
case 1226:
case 599:
case 3616:
case 3489:
case 826:
case 1847:
case 219:
case 411:
case 1672:
case 2690:
case 2213:
case 1606:
case 1162:
case 728:
case 1949:
case 2931:
case 1426:
case 1153:
case 3908:
case 3840:
case 371:
case 170:
case 2380:
case 600:
case 2966:
case 1094:
case 2711:
case 3777:
case 3112:
case 2500:
case 1596:
case 2769:
case 393:
case 2649:
case 1631:
case 1746:
case 789:
case 939:
case 3985:
case 923:
case 2878:
case 1102:
case 3555:
case 1221:
case 545:
case 839:
case 191:
case 2351:
case 2842:
case 920:
case 3179:
case 823:
case 2677:
case 1082:
case 2817:
case 3871:
case 3749:
case 1243:
case 3599:
case 2530:
case 962:
case 3718:
case 1601:
case 1286:
case 907:
case 3576:
case 603:
case 760:
case 2860:
case 618:
case 1214:
case 1977:
case 31:
case 1450:
case 105:
case 675:
case 2901:
case 3196:
case 3429:
case 3946:
case 2743:
case 2663:
case 3765:
case 1894:
case 861:
case 3231:
case 2173:
case 4046:
case 2208:
case 2721:
case 2628:
case 3266:
case 2989:
case 1362:
case 2297:
case 4083:
case 223:
case 1963:
case 2078:
case 400:
case 2786:
case 239:
case 534:
case 2441:
case 2354:
case 2120:
case 3614:
case 3448:
case 4085:
case 1657:
case 1371:
case 1409:
case 2283:
case 3071:
case 418:
case 3419:
case 1882:
case 3461:
case 2957:
case 1269:
case 3763:
case 3621:
case 185:
case 2587:
case 192:
case 1211:
case 2060:
case 52:
case 2904:
case 3201:
case 2595:
case 987:
case 683:
case 207:
case 2470:
case 4008:
case 2246:
case 3719:
case 1087:
case 2672:
case 3056:
case 2606:
case 1213:
case 3623:
case 2847:
case 119:
case 3235:
case 3598:
case 3395:
case 1137:
case 2812:
case 194:
case 3748:
case 8:
case 328:
case 1095:
case 583:
case 1709:
case 1560:
case 3178:
case 2226:
case 445:
case 1356:
case 3387:
case 3507:
case 1244:
case 2140:
case 3939:
case 276:
case 3252:
case 3428:
case 1906:
case 2990:
case 1830:
case 1972:
case 1792:
case 3463:
case 3916:
case 1542:
case 569:
case 2281:
case 3073:
case 3288:
case 28:
case 1578:
case 1919:
case 3670:
case 3537:
case 3909:
case 2896:
case 1800:
case 2421:
case 359:
case 532:
case 1948:
case 9:
case 3359:
case 1215:
case 3625:
case 2171:
case 3706:
case 2619:
case 3772:
case 1154:
case 2879:
case 1739:
case 3233:
case 4026:
case 2741:
case 796:
case 1093:
case 2768:
case 2591:
case 2414:
case 342:
case 2486:
case 1107:
case 1059:
case 898:
case 503:
case 1895:
case 3764:
case 3418:
case 1652:
case 518:
case 298:
case 1408:
case 2376:
case 724:
case 575:
case 255:
case 1887:
case 3449:
case 2047:
case 3926:
case 2822:
case 1635:
case 645:
case 2952:
case 1750:
case 2239:
case 2715:
case 88:
case 3729:
case 42:
case 1030:
case 2216:
case 3551:
case 976:
case 1268:
case 168:
case 1497:
case 1180:
case 3981:
case 1633:
case 2096:
case 1964:
case 4084:
case 3127:
case 864:
case 1225:
case 2355:
case 2209:
case 341:
case 2424:
case 3010:
case 73:
case 98:
case 1438:
case 1929:
case 2332:
case 2292:
case 1893:
case 1151:
case 3820:
case 2744:
case 1781:
case 500:
case 2905:
case 3067:
case 2469:
case 2:
case 614:
case 1060:
case 146:
case 512:
case 107:
case 1398:
case 2269:
case 1665:
case 1745:
case 3098:
case 3986:
case 292:
case 2211:
case 3360:
case 3914:
case 285:
case 1587:
case 1425:
case 3573:
case 1283:
case 3054:
case 1042:
case 120:
case 3193:
case 162:
case 3342:
case 2224:
case 3317:
case 3943:
case 2409:
case 547:
case 2965:
case 3734:
case 3575:
case 3187:
case 44:
case 1285:
case 309:
case 3490:
case 2858:
case 1441:
case 3195:
case 2362:
case 891:
case 1078:
case 2634:
case 95:
case 3757:
case 139:
case 123:
case 2963:
case 2416:
case 1559:
case 3218:
case 805:
case 1593:
case 4011:
case 2894:
case 1934:
case 1173:
case 1208:
case 970:
case 2547:
case 71:
case 992:
case 2450:
case 3433:
case 3898:
case 187:
case 2155:
case 3969:
case 3405:
case 2214:
case 2797:
case 553:
case 3051:
case 511:
case 2601:
case 4045:
case 477:
case 1677:
case 2221:
case 1351:
case 790:
case 291:
case 2374:
case 1817:
case 3265:
case 3731:
case 4021:
case 2738:
case 2666:
case 2746:
case 793:
case 25:
case 1444:
case 1618:
case 2176:
case 1711:
case 3837:
case 2631:
case 1500:
case 3263:
case 2596:
case 389:
case 1649:
case 771:
case 270:
case 1380:
case 3435:
case 2783:
case 3685:
case 550:
case 425:
case 2426:
case 363:
case 892:
case 3403:
case 1724:
case 64:
case 2199:
case 348:
case 707:
case 1643:
case 237:
case 392:
case 960:
case 3211:
case 2360:
case 2914:
case 746:
case 2556:
case 4049:
case 1728:
case 429:
case 2342:
case 720:
case 221:
case 2921:
case 2943:
case 3409:
case 3657:
case 2007:
case 2159:
case 3965:
case 1419:
case 1071:
case 2789:
case 762:
case 3484:
case 172:
case 3634:
case 2757:
case 2575:
case 2187:
case 209:
case 430:
case 2490:
case 3928:
case 1062:
case 2037:
case 1765:
case 495:
case 1645:
case 1391:
case 822:
case 2249:
case 1122:
case 3340:
case 681:
case 1040:
case 2218:
case 1266:
case 1576:
case 1502:
case 373:
case 3286:
case 3797:
case 3977:
case 2911:
case 222:
case 1196:
case 3547:
case 2100:
case 260:
case 1946:
case 3785:
case 629:
case 787:
case 3512:
case 633:
case 1938:
case 1179:
case 1611:
case 3221:
case 1669:
case 1749:
case 3243:
case 3374:
case 1871:
case 3132:
case 1599:
case 2766:
case 2646:
case 1074:
case 2807:
case 4063:
case 56:
case 1553:
case 190:
case 1862:
case 3481:
case 1777:
case 1112:
case 3058:
case 909:
case 3245:
case 2263:
case 3596:
case 1147:
case 658:
case 3746:
case 35:
case 3176:
case 3891:
case 2130:
case 1234:
case 3949:
case 837:
case 1840:
case 171:
case 3918:
case 1289:
case 3094:
case 3783:
case 2685:
case 402:
case 2748:
case 228:
case 1876:
case 2736:
case 1802:
case 2203:
case 2387:
case 719:
case 3672:
case 2056:
case 2623:
case 3847:
case 3162:
case 2761:
case 3812:
case 1639:
case 4088:
case 841:
case 1571:
case 3022:
case 3281:
case 2984:
case 2073:
case 1941:
case 3140:
case 364:
case 376:
case 2428:
case 3770:
case 3990:
case 1923:
case 4052:
case 2465:
case 579:
case 3443:
case 259:
case 451:
case 266:
case 1264:
case 688:
case 652:
case 554:
case 2670:
case 3636:
case 3768:
case 2020:
case 3591:
case 1457:
case 2205:
case 1609:
case 1229:
case 3723:
case 1790:
case 2625:
case 1970:
case 2706:
case 408:
case 196:
case 3250:
case 3879:
case 413:
case 2233:
case 4003:
case 1404:
case 2393:
case 398:
case 1681:
case 1158:
case 355:
case 3047:
case 1347:
case 3935:
case 2644:
case 2418:
case 1312:
case 1788:
case 124:
case 1076:
case 3216:
case 1626:
case 2551:
case 2981:
case 1944:
case 2873:
case 817:
case 1733:
case 1272:
case 2290:
case 2613:
case 1206:
case 874:
case 3715:
case 866:
case 2729:
case 3353:
case 613:
case 917:
case 740:
case 30:
case 1236:
case 2010:
case 3424:
case 1396:
case 608:
case 1248:
case 974:
case 449:
case 1650:
case 3096:
case 115:
case 1735:
case 13:
case 959:
case 3629:
case 2615:
case 3713:
case 1219:
case 1182:
case 565:
case 3594:
case 3905:
case 828:
case 3469:
case 3332:
case 1752:
case 1401:
case 2820:
case 454:
case 1435:
case 665:
case 3380:
case 2532:
case 3966:
case 2394:
case 1403:
case 3931:
case 1130:
case 497:
case 1080:
case 2908:
case 3724:
case 2985:
case 3878:
case 3618:
case 1701:
case 2555:
case 1608:
case 1837:
case 2112:
case 2862:
case 1263:
case 3769:
case 293:
case 189:
case 1807:
case 2983:
case 2599:
case 2382:
case 3530:
case 2553:
case 791:
case 290:
case 2718:
case 1924:
case 510:
case 2179:
case 1265:
case 2871:
case 2669:
case 160:
case 59:
case 4034:
case 1433:
case 2204:
case 1100:
case 2429:
case 1683:
case 1898:
case 2946:
case 3027:
case 1405:
case 1327:
case 2502:
case 361:
case 4089:
case 705:
case 3110:
case 1911:
case 21:
case 1880:
case 244:
case 2040:
case 3989:
case 3663:
case 1249:
case 2765:
case 3208:
case 2472:
case 3285:
case 109:
case 697:
case 2406:
case 3423:
case 1575:
case 1187:
case 3441:
case 2062:
case 3468:
case 588:
case 323:
case 654:
case 465:
case 1945:
case 3078:
case 552:
case 1757:
case 339:
case 2071:
case 3017:
case 3425:
case 1573:
case 2419:
case 3042:
case 320:
case 3354:
case 2436:
case 1921:
case 2614:
case 893:
case 1342:
case 1159:
case 1734:
case 2874:
case 1317:
case 935:
case 785:
case 3060:
case 91:
case 792:
case 3904:
case 3595:
case 307:
case 3398:
case 3470:
case 3745:
case 1986:
case 2643:
case 3175:
case 3859:
case 3270:
case 3929:
case 2401:
case 1820:
case 2752:
case 2182:
case 2032:
case 1067:
case 3310:
case 2261:
case 3964:
case 2650:
case 3000:
case 3225:
case 2219:
case 1615:
case 2396:
case 4006:
case 278:
case 1873:
case 3750:
case 3241:
case 1729:
case 2272:
case 4048:
case 2206:
case 1613:
case 2705:
case 1551:
case 2053:
case 1981:
case 4019:
case 368:
case 896:
case 2913:
case 2347:
case 755:
case 2788:
case 3652:
case 2076:
case 1764:
case 3895:
case 1644:
case 1418:
case 2312:
case 2158:
case 3527:
case 2431:
case 1856:
case 1449:
case 3887:
case 2790:
case 1625:
case 1706:
case 2832:
case 1992:
case 2404:
case 1393:
case 3154:
case 3739:
case 1233:
case 3320:
case 1020:
case 142:
case 516:
case 3784:
case 3093:
case 3716:
case 567:
case 2609:
case 1205:
case 3578:
case 3961:
case 3375:
case 174:
case 166:
case 604:
case 2925:
case 1909:
case 1465:
case 93:
case 2899:
case 2191:
case 3830:
case 3972:
case 3792:
case 815:
case 1554:
case 1916:
case 3542:
case 878:
case 1984:
case 2968:
case 2489:
case 46:
case 1719:
case 3087:
case 3690:
case 3137:
case 394:
case 1761:
case 1641:
case 1235:
case 1736:
case 4029:
case 2802:
case 924:
case 1748:
case 1203:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1742522401/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,1,0,1,1,1,0,1,1,0,0,0,1,1,0,0,0,1,0,0,1,0,0,0,1,1,1,1,0,1,1,0,1,0,1,0,0,0,1,0,0,1,1,1,0,1,1,0,0,0,1,1,0,0,0,1,0,0,1,0,1,0,0,1,0,0,1,1,0,0,1,0,1,1,0,0,1,0,0,0,0,0,0,1,0,0,1,1,0,0,1,1,1,0,1,0,0,1,1,0,1,1,0,1,1,0,1,0,1,1,0,1,0,1,1,1,0,0,1,1,0,0,1,1,0,0,0,0,0,1,1,0,1,0,0,0,0,0,1,0,0,1,0,0,0,1,1,0,1,1,0,1,0,0,1,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,0,1,1,1,1,0,1,1,1,1,0,1,1,1,1,0,1,1,1,1,0,1,1,1,0,0,1,1,0,1,0,1,0,0,1,0,1,1,0,0,0,1,0,1,0,0,1,0,1,1,1,0,1,1,1,1,1,1,1,0,0,1,0,1,1,1,1,0,0,0,1,1,1,0,1,0,1,0,0,1,0,1,1,0,0,0,1,1,0,0,0,0,1,1,0,0,0,1,0,0,0,0,0,1,1,1,0,1,0,1,1,0,1,0,0,1,0,1,1,1,1,0,1,0,0,1,1,0,1,1,0,0,0,0,1,1,1,1,0,1,1,1,1,0,0,1,0,1,0,0,1,1,0,0,0,1,1,1,0,1,1,1,0,1,0,1,1,0,1,1,0,0,1,0,1,1,0,0,0,0,0,0,1,0,0,1,1,0,1,0,1,1,0,0,1,1,0,0,1,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,1,1,1,1,0,0,1,1,1,0,1,0,0,1,0,1,1,0,0,1,1,1,0,1,0,1,1,0,1,1,0,1,0,1,0,0,0,1,1,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,0,0,1,1,1,0,0,1,0,0,0,0,0,1,0,1,1,1,1,0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,1,1,1,1,0,1,0,0,1,0,0,0,1,0,1,1,1,1,0,0,0,1,0,1,1,0,1,0,1,1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,1,0,1,1,1,1,0,0,0,0,0,1,0,1,0,1,0,1,0,1,1,0,0,0,0,1,0,0,0,1,0,0,0,1,0,1,0,1,1,0,1,1,0,0,0,0,1,0,0,1,1,0,0,1,1,1,1,1,1,1,0,1,0,1,1,1,0,0,1,0,0,1,1,1,0,0,1,0,0,1,0,0,0,1,0,1,0,0,1,0,1,0,1,0,1,1,0,0,0,0,1,0,1,1,1,1,0,0,1,0,1,1,0,1,0,1,0,0,1,0,1,1,1,0,1,1,1,0,1,0,0,1,0,1,0,1,1,1,1,0,0,0,0,1,1,0,0,1,0,0,1,1,0,0,0,1,1,1,1,0,1,0,0,0,0,0,1,0,0,1,1,0,0,0,1,0,0,0,1,1,0,1,1,1,1,0,0,0,0,0,1,0,1,0,0,0,1,0,0,1,0,0,0,1,1,1,0,0,1,1,1,0,1,0,0,1,0,0,0,0,0,1,0,0,1,1,0,1,0,0,1,0,1,1,1,1,0,1,0,1,1,1,1,1,0,1,1,0,0,0,1,0,1,0,0,1,1,0,1,0,1,0,0,1,0,1,1,1,1,0,0,0,1,1,0,1,1,0,1,0,1,0,1,0,0,0,1,1,0,1,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,1,0,1,0,0,1,0,0,1,1,1,1,0,0,0,0,0,0,1,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,1,1,0,0,1,0,0,1,1,1,1,0,1,1,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,1,0,0,1,0,1,0,0,0,1,1,0,0,1,0,1,0,1,0,1,1,0,1,0,1,0,1,0,0,1,1,0,1,0,0,1,0,1,1,0,1,0,0,0,1,0,1,0,0,0,0,0,1,1,0,0,1,1,1,0,0,0,1,0,1,0,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,1,0,1,0,1,1,0,1,0,1,1,0,1,1,0,1,0,0,1,1,1,0,0,1,1,1,0,1,0,1,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,1,0,0,1,1,1,1,1,0,0,1,0,1,0,1,1,1,0,1,0,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,0,1,1,1,0,0,0,0,1,0,0,0,0,1,0,1,0,0,0,1,1,0,1,1,1,1,0,0,0,1,1,1,1,0,0,0,0,0,1,1,1,0,1,0,1,0,0,0,1,0,0,0,1,1,1,1,0,0,1,1,1,0,1,1,1,1,0,1,0,1,1,0,0,1,1,0,0,0,0,0,1,1,1,1,1,0,0,1,1,1,1,1,0,1,0,0,0,1,1,0,0,0,0,1,1,0,1,1,1,1,0,0,1,1,1,1,1,1,0,0,1,1,1,0,0,0,1,1,1,0,1,0,0,0,1,1,1,1,0,0,1,0,0,0,1,1,0,0,1,1,1,1,1,0,0,1,1,0,0,1,0,0,0,0,1,1,1,1,0,1,1,0,0,1,1,0,1,1,0,0,1,1,0,0,1,0,1,1,0,0,1,0,1,0,0,0,0,1,0,1,0,0,0,1,1,0,0,1,0,0,0,0,0,1,0,0,0,1,1,0,1,0,1,0,0,0,1,0,1,1,0,0,0,0,0,0,1,0,0,1,1,0,1,1,1,1,0,0,1,1,1,0,1,0,0,0,0,1,1,0,0,0,0,1,1,1,1,1,0,0,1,1,1,1,0,0,0,1,1,0,0,1,1,0,1,1,0,1,0,0,0,0,1,0,1,0,0,1,0,1,0,0,1,0,1,1,1,0,0,1,1,0,1,0,0,0,0,0,0,1,1,0,1,0,0,0,1,1,0,0,0,1,0,1,1,0,1,0,0,1,0,0,1,0,0,1,1,0,1,0,1,1,1,0,0,0,1,0,1,1,1,0,0,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,0,1,0,0,1,0,0,1,0,1,1,0,1,1,0,0,0,0,1,1,0,0,0,1,1,0,1,0,0,1,0,0,0,0,1,1,1,0,1,1,0,0,0,0,0,1,1,0,0,1,0,0,1,0,1,0,0,0,0,1,0,1,0,1,1,0,0,1,1,1,1,1,0,0,1,0,1,0,0,0,0,1,0,1,0,1,1,1,1,0,0,1,0,1,1,1,1,1,0,1,0,1,0,1,1,0,1,1,0,1,1,1,1,0,0,0,1,0,1,1,1,1,1,1,0,1,0,1,1,1,1,0,1,0,0,1,1,0,0,1,0,1,1,1,0,1,0,1,0,1,1,1,0,1,1,1,0,1,1,1,1,0,1,0,0,1,1,1,0,1,0,0,1,0,0,1,0,1,0,1,0,1,1,0,0,0,0,1,0,0,1,1,1,1,0,0,0,1,0,0,0,0,0,1,1,1,0,0,1,1,1,1,0,0,0,0,1,1,0,1,0,1,0,1,0,0,0,0,0,1,0,0,0,1,1,0,0,1,1,1,1,0,1,1,1,1,1,0,0,1,1,1,0,0,0,1,1,0,1,1,1,1,1,0,0,1,0,1,0,1,0,1,0,0,1,1,0,1,1,0,1,0,0,1,0,1,1,1,0,0,1,1,1,0,0,0,0,0,1,0,1,0,1,1,1,0,0,0,0,1,1,0,1,0,0,0,1,1,1,1,0,1,0,0,0,0,1,1,0,0,1,0,0,1,1,1,1,0,0,0,1,1,0,0,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,0,1,0,0,0,0,0,1,0,0,0,0,1,1,1,1,0,1,0,0,1,0,1,0,1,0,0,1,0,0,1,1,0,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,0,1,0,1,0,0,0,0,0,1,1,0,1,1,1,1,0,0,0,1,0,0,1,0,1,0,1,1,0,0,0,0,1,1,0,0,0,1,1,0,1,1,0,1,1,1,0,1,1,1,0,1,1,0,1,1,0,0,1,0,0,0,1,1,0,1,1,1,0,0,0,0,0,1,1,1,0,1,0,1,1,0,1,1,1,1,0,1,0,1,0,0,0,1,1,1,1,0,0,1,0,0,1,1,1,0,0,1,1,0,1,1,1,1,0,0,0,1,1,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,1,1,0,1,1,1,0,1,1,0,0,1,1,1,1,1,0,1,0,0,0,1,0,0,1,1,0,1,1,1,1,0,0,1,0,0,1,0,0,1,0,1,0,0,1,1,1,0,0,0,0,0,1,0,0,0,1,0,1,0,1,1,0,0,1,1,0,0,1,1,0,0,0,1,1,1,0,1,0,1,1,1,0,0,1,0,1,0,1,0,0,0,1,1,0,0,0,1,1,0,0,1,1,1,0,0,0,0,1,0,0,0,0,1,1,0,1,0,1,1,0,0,0,1,0,0,1,1,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0,0,1,1,0,1,0,0,1,0,0,1,1,1,0,0,0,1,1,0,0,0,0,1,0,1,0,0,0,1,1,1,1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,0,0,1,1,1,0,0,0,1,0,1,1,0,0,0,1,0,1,0,0,0,0,0,0,1,1,0,1,0,0,0,0,1,0,0,0,1,1,1,1,1,1,0,0,0,1,0,1,0,1,1,0,1,1,0,0,1,0,0,1,1,1,0,0,0,0,0,0,1,0,1,0,1,0,0,1,0,0,0,0,0,1,0,1,1,0,0,1,1,0,1,1,1,1,0,0,1,0,0,0,0,0,0,0,1,0,1,0,0,1,1,1,0,1,0,0,1,0,0,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,0,1,0,0,1,0,1,0,1,0,1,1,0,0,1,0,0,1,1,1,1,1,0,0,1,0,1,0,0,1,0,1,0,0,0,0,0,1,1,0,1,1,0,0,0,1,0,0,1,0,1,1,0,1,1,0,1,0,1,0,1,1,1,1,0,1,0,0,1,0,1,0,1,1,1,1,0,0,0,0,1,0,0,0,1,1,0,0,0,0,0,1,0,0,1,1,0,0,1,1,1,0,0,1,1,0,0,0,0,1,0,0,0,1,1,0,1,0,1,1,1,0,1,1,0,0,1,0,0,1,1,0,0,1,1,1,0,1,1,0,0,1,1,0,1,1,1,0,1,0,0,0,1,1,0,0,0,0,1,1,1,0,0,0,0,1,0,1,1,0,0,1,0,0,1,0,1,0,0,0,0,0,1,1,0,0,0,0,1,0,1,1,0,0,0,1,0,1,0,1,1,0,0,0,0,0,0,1,0,1,0,0,0,0,1,0,1,0,0,1,0,0,0,0,0,0,0,0,1,1,0,1,1,1,0,1,0,0,0,1,1,1,0,1,1,1,0,0,0,0,1,1,0,1,0,0,0,1,1,1,0,1,0,1,1,0,1,1,0,1,0,1,1,0,1,1,1,1,1,0,0,1,0,0,0,0,1,1,1,0,1,0,0,1,1,1,1,1,0,1,0,0,1,1,1,0,1,1,0,0,1,1,0,1,1,0,1,0,1,0,0,1,0,1,0,0,0,0,0,1,0,0,1,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,0,1,1,1,0,0,0,1,0,0,0,1,1,0,1,0,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,0,1,1,1,1,1,0,1,0,1,0,1,0,1,0,0,1,0,1,1,0,0,1,0,0,0,1,1,1,1,1,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,0,1,0,1,1,1,0,1,0,0,1,1,1,1,0,1,0,1,0,1,0,1,1,0,0,0,0,1,1,1,0,0,1,0,0,1,1,1,0,0,1,1,0,0,1,0,0,1,1,0,1,0,0,0,1,0,0,1,1,0,1,1,1,0,1,0,0,0,0,0,0,0,0,1,1,1,0,1,0,1,1,0,0,0,1,1,1,0,1,1,0,0,0,1,1,0,1,0,0,1,0,1,0,1,1,0,0,0,0,1,1,1,1,0,1,1,1,0,0,1,1,0,1,1,0,1,1,0,1,1,0,0,0,0,1,0,1,0,0,0,1,0,0,0,1,0,1,1,0,0,0,0,1,0,0,0,0,1,1,0,0,1,0,0,0,0,0,1,0,0,1,1,1,1,0,0,1,0,1,0,1,1,1,1,0,0,1,1,1,0,0,1,0,0,1,1,1,1,1,1,1,0,1,0,1,1,1,0,1,1,0,0,0,0,1,1,0,1,0,1,1,0,0,1,0,1,0,0,1,0,1,0,1,0,1,0,0,1,1,1,0,1,1,0,1,0,0,1,0,1,0,0,0,0,1,0,0,1,1,1,1,0,1,1,1,1,1,1,0,1,1,1,0,1,0,1,0,0,0,0,1,1,1,1,1,1,1,0,1,0,0,1,1,1,0,0,1,0,1,0,1,0,1,0,1,1,0,0,1,1,0,1,1,1,1,0,1,0,1,1,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,0,1,0,0,1,1,1,1,0,1,1,1,1,1,1,1,0,1,1,1,0,1,0,0,1,0,0,0,1,0,1,0,1,0,0,1,1,0,0,1,1,0,1,1,1,0,0,1,0,0,1,0,0,1,1,0,1,1,0,0,0,0,1,1,0,1,0,1,0,0,1,1,0,1,1,0,0,0,1,1,1,0,0,0,1,0,1,0,1,1,0,0,0,0,1,0,1,1,1,1,0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,0,1,1,1,1,0,1,0,1,1,0,1,1,1,1,0,0,1,0,0,0,1,0,0,1,0,1,1,1,0,0,1,0,0,1,0,0,1,0,0,1,1,1,0,0,0,1,1,1,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,1,0,1,0,1,1,1,1,0,0,1,0,1,1,1,0,1,0,1,1,0,0,1,0,1,1,0,0,0,1,1,0,1,1,1,1,1,0,0,0,0,0,0,1,1,0,0,1,0,1,1,1,0,1,1,1,0,0,1,0,0,0,1,0,1,1,0,0,0,1,1,1,0,0,1,1,1,1,1,0,0,0,0,0,0,1,1,0,1,0,1,0,1,1,0,1,0,1,0,1,0,0,1,0,0,0,0,1,1,1,0,0,0,1,1,1,0,1,1,1,1,1,0,1,0,1,0,1,0,0,1,1,1,1,0,0,0,0,1,1,0,1,0,1,1,0,0,0,0,0,0,1,1,1,0,0,1,0,1,1,1,0,0,1,1,0,1,0,1,0,0,1,0,0,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,1,1,0,0,1,1,0,1,1,0,1,1,0,0,0,0,0,1,0,1,0,1,1,0,0,0,0,1,1,1,1,0,0,1,1,1,0,1,1,1,1,1,0,1,0,0,0,1,0,0,0,0,0,1,0,1,0,1,1,0,0,1,1,0,0,1,1,1,1,0,1,0,0,1,0,0,0,1,1,0,1,1,0,1,0,0,1,1,1,0,1,1,0,0,0,0,0,0,0,1,0,1,1,0,1,0,1,0,1,0,1,0,0,1,1,1,0,1,0,0,0,1,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,0,0,1,0,0,0,0,0,0,1,1,1,0,1,1,1,0,1,0,0,0,0,0,0,1,0,0,0,0,1,0,1,1,0,1,0,0,1,1,1,0,0,1,0,0,1,0,0,0,0,0,1,1,0,1,1,0,1,1,0,0,1,1,1,0,0,0,0,1,0,1,0,1,1,0,0,0,0,1,0,0,0,0,0,1,1,1,1,1,1,1,0,1,1,0,0,1,0,1,0,0,0,1,1,1,0,0,1,1,1,0,1,0,1,0,1,1,1,1,0,0,1,1,1,1,0,1,1,0,1,1,1,1,0,1,0,1,0,1,0,0,1,0,0,1,1,0,0,1,0,0,1,1,0,1,1,0,0,0,1,1,0,0,1,1,1,0,0,1,1,1,0,0,0,0,0,1,0,1,1,0,0,0,0,1,0,1,1,1,1,0,1,0,0,1,0,1,0,1,0,1,0,0,1,0,0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,1,0,1,1,1,1,1,1,0,1,1,1,0,0,1,0,0,1,1,1,0,1,0,1,1,0,0,1,1,0,0,1,1,1,1,1,1,1,0,1,0,1,0,0,0,1,1,1,1,1,1,1,0,0,1,0,0,0,1,0,1,0,1,1,0,1,0,0,1,0,0,0,1,1,0,1,0,1,0,1,1,0,0,1,1,1,0,1,1,0,1,1,0,1,0,0,1,0,0,0,1,0,0,0,1,1,0,0,1,1,0,0,1,1,1,1,0,1,1,0,0,1,1,0,0,1,1,1,0,1,1,0,1,0,1,0,1,0,1,1,1,1,1,0,0,1,0,0,1,1,0,0,0,1,0,0,0,0,0,1,1,0,0,1,1,1,0,1,1,0,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1,1,0,0,1,0,0,0,0,1,0,1,1,0,0,0,1,1,1,0,1,1,1,0,0,0,0,0,1,];
var gg_b = "1742522401/";

function hitomi_get_image_list() {
  files = galleryinfo["files"];
  // function test(id, files) {
  number_of_frontends = 3;
  subdomain = "a";
  btresult = [];
  stresult = [];
  result = [];
  for (var rr of files) {
    hash = rr["hash"];
    postfix = hash.substr(hash.length - 3);
    subdomainx = subdomain;
    if (rr["hasavif"] == 1) rr["haswebp"] = 1;
    if (rr["haswebp"] == 0 || rr["haswebp"] == null) subdomainx = "b";
    x = parseInt(postfix[2] + postfix[0] + postfix[1], 16);
    if (!isNaN(x)) {
      subdomainx = String.fromCharCode(97 + gg_m[x]);
    }
    if (rr["haswebp"] == 0 || rr["haswebp"] == null) {
      result.push(
        `https://${subdomainx}b.hitomi.la/images/${gg_b + gg.s(hash)}/${hash}.${
          rr["name"].split(".").slice(-1)[0]
        }`
      );
    } else if (hash == "")
      result.push(`https://${subdomainx}a.hitomi.la/webp/${rr["name"]}.webp`);
    else if (hash.length < 3)
      result.push(`https://${subdomainx}a.hitomi.la/webp/${hash}.webp`);
    else {
      result.push(
        `https://${subdomainx}a.hitomi.la/webp/${
            gg.b + gg.s(hash)
        }/${hash}.webp`
      );
    }
    if (rr["haswebp"] == 1)
    {
      btresult.push(
        `https://tn.hitomi.la/webpbigtn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.webp`
      );
      stresult.push(
        `https://${subdomainx}tn.hitomi.la/webpsmalltn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.webp`
      );
    }
    // else if (rr["hasavif"] == 1)
    // {
    //   btresult.push(
    //     `https://tn.hitomi.la/avifbigtn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.avif`
    //   );
    //   stresult.push(
    //     `https://${subdomainx}tn.hitomi.la/avifsmallbigtn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.avif`
    //   );
    // }
    else 
    {
      btresult.push(
        `https://tn.hitomi.la/bigtn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.jpg`
      );
      stresult.push(
        `https://${subdomainx}tn.hitomi.la/smalltn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.jpg`
      );
    }
  }
  return JSON.stringify({
    btresult: btresult,
    stresult: stresult,
    result: result,
  });
}

function hitomi_get_header_content(id) {
  return JSON.stringify({
      'referer': `https://hitomi.la/reader/${id}.html`,
      'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.3',
  });
}
