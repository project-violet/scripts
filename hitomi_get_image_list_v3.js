// This source code is a part of Project Violet.
// Copyright (C) 2021. violet-team. Licensed under the Apache-2.0 License.
//
// Script Name: hitomi_get_image_list.js
// Input:  $id     [int] - Hitomi.la Article Id
// Output: $result [Map] - Image List, Thumbnail List

const domain2 = 'gold-usergeneratedcontent.net';

function create_download_url(id) {
  return "https://ltn.gold-usergeneratedcontent.net/galleries/" + id + ".js";
}

function gg_s(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); }

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
var o = 1;
switch (g) {
case 962:
case 2902:
case 2763:
case 916:
case 2406:
case 2582:
case 3809:
case 2633:
case 2752:
case 1842:
case 3371:
case 3606:
case 4045:
case 3727:
case 2199:
case 624:
case 2189:
case 1931:
case 2909:
case 3312:
case 3088:
case 1324:
case 1646:
case 1650:
case 2328:
case 2759:
case 3537:
case 660:
case 500:
case 1585:
case 563:
case 603:
case 956:
case 1755:
case 2845:
case 1905:
case 3246:
case 576:
case 1773:
case 488:
case 17:
case 2895:
case 1545:
case 223:
case 3531:
case 484:
case 2142:
case 3110:
case 1323:
case 143:
case 3048:
case 1774:
case 2380:
case 1899:
case 2549:
case 2778:
case 377:
case 3434:
case 1638:
case 3995:
case 2149:
case 204:
case 1937:
case 3131:
case 3238:
case 2004:
case 3721:
case 2087:
case 2097:
case 313:
case 1209:
case 2538:
case 2196:
case 3242:
case 372:
case 2205:
case 2352:
case 1410:
case 2363:
case 3719:
case 3806:
case 1642:
case 1431:
case 13:
case 536:
case 3032:
case 1202:
case 1355:
case 468:
case 1134:
case 3070:
case 2728:
case 631:
case 1724:
case 1846:
case 1649:
case 2596:
case 680:
case 4033:
case 702:
case 2780:
case 2546:
case 2790:
case 1374:
case 2550:
case 1896:
case 1723:
case 711:
case 3485:
case 4034:
case 464:
case 3299:
case 3321:
case 751:
case 1692:
case 1682:
case 2081:
case 420:
case 193:
case 2834:
case 2364:
case 2047:
case 2146:
case 1838:
case 3282:
case 3292:
case 2150:
case 723:
case 3052:
case 456:
case 3063:
case 1865:
case 1872:
case 3341:
case 3387:
case 4062:
case 355:
case 3397:
case 2869:
case 379:
case 3466:
case 2339:
case 1154:
case 1360:
case 2413:
case 2027:
case 3962:
case 2158:
case 3975:
case 315:
case 2370:
case 1811:
case 3059:
case 1784:
case 2526:
case 1301:
case 2558:
case 4069:
case 416:
case 2332:
case 2875:
case 646:
case 848:
case 3276:
case 849:
case 2853:
case 1743:
case 161:
case 1307:
case 1575:
case 170:
case 1562:
case 1817:
case 1793:
case 2625:
case 844:
case 1553:
case 3078:
case 106:
case 1169:
case 2748:
case 1858:
case 708:
case 374:
case 3222:
case 3347:
case 2530:
case 2179:
case 2218:
case 4054:
case 3704:
case 1162:
case 3614:
case 1418:
case 984:
case 1153:
case 202:
case 2336:
case 3469:
case 898:
case 3303:
case 899:
case 1630:
case 339:
case 3557:
case 338:
case 3265:
case 850:
case 3797:
case 211:
case 2019:
case 42:
case 565:
case 3230:
case 969:
case 1125:
case 968:
case 2071:
case 1665:
case 251:
case 3462:
case 3475:
case 4066:
case 2913:
case 2662:
case 3453:
case 3966:
case 1525:
case 2653:
case 1611:
case 2398:
case 3157:
case 1876:
case 2770:
case 1679:
case 3454:
case 1918:
case 68:
case 3090:
case 3080:
case 1344:
case 2576:
case 2320:
case 2914:
case 1067:
case 3151:
case 1957:
case 3226:
case 1383:
case 2825:
case 920:
case 1617:
case 3258:
case 3551:
case 1822:
case 3791:
case 964:
case 3925:
case 2077:
case 2176:
case 3747:
case 4025:
case 1201:
case 2104:
case 1432:
case 3843:
case 3031:
case 1108:
case 3376:
case 3894:
case 3520:
case 3779:
case 3548:
case 2232:
case 1470:
case 2943:
case 188:
case 2460:
case 3005:
case 1439:
case 786:
case 3730:
case 2435:
case 1641:
case 3010:
case 1998:
case 3635:
case 2042:
case 1988:
case 3297:
case 3287:
case 3765:
case 2351:
case 2984:
case 2994:
case 1508:
case 1691:
case 1681:
case 2092:
case 2082:
case 1948:
case 1804:
case 2944:
case 3322:
case 1920:
case 443:
case 1314:
case 3247:
case 259:
case 258:
case 3291:
case 275:
case 510:
case 184:
case 290:
case 995:
case 219:
case 3844:
case 3726:
case 2099:
case 3329:
case 3758:
case 3598:
case 598:
case 380:
case 3607:
case 3893:
case 865:
case 2407:
case 3801:
case 2494:
case 1243:
case 3311:
case 1488:
case 2935:
case 752:
case 2147:
case 1294:
case 2288:
case 2298:
case 2591:
case 1970:
case 328:
case 544:
case 3365:
case 3372:
case 1841:
case 169:
case 168:
case 773:
case 1897:
case 1887:
case 766:
case 1436:
case 2547:
case 712:
case 4:
case 3204:
case 3170:
case 2587:
case 1034:
case 1847:
case 548:
case 1881:
case 1714:
case 3408:
case 74:
case 3132:
case 3317:
case 1244:
case 371:
case 2483:
case 2248:
case 3807:
case 3683:
case 3532:
case 885:
case 1420:
case 3644:
case 2444:
case 3729:
case 3358:
case 2096:
case 2197:
case 2187:
case 1293:
case 3326:
case 1053:
case 3873:
case 2240:
case 1062:
case 1224:
case 2256:
case 2661:
case 1952:
case 3346:
case 97:
case 758:
case 1612:
case 3164:
case 597:
case 2011:
case 1456:
case 1963:
case 2424:
case 55:
case 790:
case 3624:
case 156:
case 2030:
case 2615:
case 29:
case 718:
case 3271:
case 3564:
case 2955:
case 51:
case 634:
case 1959:
case 1671:
case 2065:
case 2072:
case 322:
case 1619:
case 1816:
case 1709:
case 2600:
case 3563:
case 1978:
case 406:
case 883:
case 3552:
case 542:
case 3277:
case 2516:
case 3792:
case 3338:
case 495:
case 187:
case 2127:
case 3874:
case 1223:
case 3386:
case 2737:
case 1490:
case 1480:
case 3799:
case 286:
case 1054:
case 3163:
case 2017:
case 1964:
case 3623:
case 2968:
case 3152:
case 2280:
case 2290:
case 1302:
case 1255:
case 3900:
case 3349:
case 93:
case 3590:
case 2259:
case 3915:
case 36:
case 2861:
case 2473:
case 621:
case 24:
case 740:
case 3227:
case 547:
case 2310:
case 3342:
case 1956:
case 1871:
case 1463:
case 3051:
case 1819:
case 1928:
case 1616:
case 2263:
case 2815:
case 4061:
case 182:
case 3180:
case 3190:
case 2577:
case 1515:
case 800:
case 167:
case 2468:
case 3140:
case 3221:
case 2112:
case 1877:
case 3738:
case 481:
case 2923:
case 1268:
case 3392:
case 3382:
case 4067:
case 2571:
case 1990:
case 3018:
case 327:
case 2022:
case 2519:
case 678:
case 679:
case 863:
case 655:
case 1500:
case 1161:
case 3967:
case 1274:
case 2119:
case 445:
case 201:
case 2278:
case 615:
case 1115:
case 3389:
case 3674:
case 3399:
case 273:
case 2867:
case 9:
case 2337:
case 346:
case 3786:
case 2029:
case 1478:
case 1181:
case 3997:
case 1191:
case 2294:
case 2284:
case 3353:
case 879:
case 3507:
case 663:
case 1960:
case 1298:
case 4087:
case 3362:
case 855:
case 1046:
case 1484:
case 767:
case 1494:
case 600:
case 951:
case 2498:
case 2243:
case 1147:
case 3941:
case 3698:
case 3688:
case 269:
case 268:
case 349:
case 3766:
case 3403:
case 3636:
case 2897:
case 2887:
case 2603:
case 2970:
case 2033:
case 1591:
case 2841:
case 1901:
case 815:
case 2891:
case 2604:
case 1608:
case 3560:
case 1907:
case 3101:
case 1038:
case 135:
case 2034:
case 1597:
case 1757:
case 3208:
case 72:
case 2847:
case 3501:
case 220:
case 2420:
case 3620:
case 3991:
case 3981:
case 1187:
case 3648:
case 2448:
case 3354:
case 782:
case 3135:
case 1141:
case 140:
case 1483:
case 4047:
case 874:
case 3544:
case 787:
case 3002:
case 1049:
case 114:
case 1401:
case 3670:
case 3898:
case 1232:
case 3762:
case 2201:
case 2936:
case 838:
case 3903:
case 408:
case 839:
case 1104:
case 4003:
case 399:
case 636:
case 2432:
case 3632:
case 2045:
case 310:
case 3441:
case 1435:
case 2988:
case 1504:
case 2641:
case 1351:
case 3193:
case 1239:
case 1994:
case 1943:
case 2235:
case 1460:
case 154:
case 2687:
case 3836:
case 2439:
case 2803:
case 3639:
case 3497:
case 158:
case 284:
case 3184:
case 175:
case 423:
case 2647:
case 1092:
case 2948:
case 2691:
case 3491:
case 3481:
case 2804:
case 907:
case 3143:
case 834:
case 3543:
case 1407:
case 1089:
case 3754:
case 3584:
case 3594:
case 3820:
case 2207:
case 762:
case 3904:
case 1103:
case 392:
case 1455:
case 3345:
case 546:
case 402:
case 1861:
case 832:
case 14:
case 2255:
case 3919:
case 764:
case 2302:
case 2567:
case 3840:
case 2812:
case 641:
case 1177:
case 411:
case 1263:
case 1815:
case 2627:
case 720:
case 3013:
case 1305:
case 3912:
case 1310:
case 2463:
case 3123:
case 3416:
case 3652:
case 2452:
case 4012:
case 1800:
case 2928:
case 2616:
case 1264:
case 1022:
case 2161:
case 3014:
case 347:
case 267:
case 152:
case 1112:
case 1923:
case 3124:
case 173:
case 1337:
case 1474:
case 112:
case 3678:
case 1512:
case 3880:
case 166:
case 60:
case 3524:
case 3385:
case 1278:
case 1119:
case 4077:
case 2561:
case 326:
case 784:
case 2952:
case 3168:
case 3574:
case 2428:
case 3628:
case 1079:
case 3916:
case 117:
case 2456:
case 2963:
case 3640:
case 3412:
case 2702:
case 2440:
case 3261:
case 872:
case 1731:
case 4027:
case 2053:
case 813:
case 3927:
case 2224:
case 2062:
case 3471:
case 3215:
case 2959:
case 909:
case 1065:
case 3852:
case 2619:
case 1710:
case 2816:
case 3174:
case 596:
case 1615:
case 1973:
case 19:
case 157:
case 262:
case 216:
case 3200:
case 342:
case 1527:
case 287:
case 3864:
case 3477:
case 2677:
case 3155:
case 904:
case 2821:
case 1516:
case 407:
case 3555:
case 1017:
case 3267:
case 3785:
case 35:
case 397:
case 1280:
case 1290:
case 1058:
case 2490:
case 2480:
case 1737:
case 58:
case 3690:
case 4021:
case 2054:
case 3950:
case 781:
case 2410:
case 4050:
case 3700:
case 537:
case 1041:
case 3035:
case 3605:
case 1087:
case 1097:
case 3715:
case 88:
case 1538:
case 2209:
case 1210:
case 2134:
case 694:
case 3245:
case 94:
case 1906:
case 1231:
case 2846:
case 1596:
case 2431:
case 2373:
case 3631:
case 2355:
case 2202:
case 3007:
case 1685:
case 1695:
case 805:
case 2133:
case 973:
case 3106:
case 4038:
case 1378:
case 3295:
case 699:
case 698:
case 383:
case 1546:
case 1790:
case 896:
case 3489:
case 2886:
case 1550:
case 3637:
case 1047:
case 440:
case 610:
case 1150:
case 952:
case 3996:
case 4086:
case 1081:
case 572:
case 2692:
case 2682:
case 3492:
case 3482:
case 3233:
case 2931:
case 2206:
case 3949:
case 761:
case 3300:
case 1592:
case 414:
case 1582:
case 1633:
case 2842:
case 3810:
case 2585:
case 2595:
case 2755:
case 3831:
case 1192:
case 454:
case 27:
case 917:
case 1340:
case 1909:
case 2910:
case 2324:
case 2646:
case 1589:
case 2849:
case 2650:
case 1328:
case 3982:
case 243:
case 2774:
case 1390:
case 363:
case 2899:
case 3486:
case 2889:
case 376:
case 3044:
case 4092:
case 4082:
case 3367:
case 1549:
case 2696:
case 1895:
case 3083:
case 490:
case 3093:
case 3109:
case 475:
case 1142:
case 459:
case 3999:
case 2937:
case 532:
case 846:
case 2882:
case 1004:
case 419:
case 1634:
case 2768:
case 2638:
case 104:
case 3438:
case 1149:
case 1522:
case 3851:
case 111:
case 3514:
case 3269:
case 1071:
case 102:
case 1336:
case 44:
case 1669:
case 2760:
case 2630:
case 2015:
case 1012:
case 1398:
case 2701:
case 3411:
case 1388:
case 3262:
case 2951:
case 3479:
case 2384:
case 3253:
case 1770:
case 1122:
case 2343:
case 1662:
case 1913:
case 2525:
case 793:
case 2957:
case 3254:
case 2393:
case 2617:
case 230:
case 2707:
case 1348:
case 3426:
case 2918:
case 1654:
case 2344:
case 1914:
case 2566:
case 401:
case 831:
case 1077:
case 1176:
case 880:
case 466:
case 642:
case 935:
case 2822:
case 3308:
case 73:
case 4029:
case 3818:
case 473:
case 538:
case 539:
case 1126:
case 743:
case 1736:
case 3651:
case 4011:
case 1016:
case 3911:
case 4079:
case 417:
case 2872:
case 954:
case 647:
case 2213:
case 2865:
case 2335:
case 3930:
case 30:
case 3073:
case 1875:
case 1862:
case 3055:
case 457:
case 914:
case 2743:
case 2811:
case 626:
case 2554:
case 3965:
case 4072:
case 2301:
case 2676:
case 4065:
case 2879:
case 3476:
case 828:
case 2629:
case 2744:
case 1854:
case 3429:
case 824:
case 692:
case 2858:
case 1748:
case 261:
case 270:
case 341:
case 2562:
case 295:
case 2793:
case 2783:
case 2553:
case 578:
case 990:
case 433:
case 803:
case 486:
case 1414:
case 0:
case 555:
case 3708:
case 1257:
case 2153:
case 975:
case 3618:
case 385:
case 3917:
case 2214:
case 3657:
case 871:
case 107:
case 860:
case 1218:
case 1179:
case 4017:
case 2741:
case 311:
case 1976:
case 1851:
case 1472:
case 949:
case 948:
case 3071:
case 302:
case 3129:
case 239:
case 238:
case 2813:
case 2272:
case 2787:
case 1262:
case 3388:
case 2056:
case 737:
case 1253:
case 3770:
case 530:
case 633:
case 686:
case 2211:
case 2475:
case 3675:
case 2966:
case 3732:
case 2118:
case 888:
case 3825:
case 2258:
case 4014:
case 3348:
case 3654:
case 2080:
case 1922:
case 3576:
case 772:
case 3320:
case 426:
case 2925:
case 3077:
case 3176:
case 191:
case 2747:
case 2551:
case 2814:
case 2781:
case 2791:
case 1308:
case 944:
case 69:
case 2387:
case 255:
case 2397:
case 3666:
case 3251:
case 3869:
case 2953:
case 2466:
case 3339:
case 910:
case 3413:
case 3027:
case 2962:
case 3736:
case 2975:
case 2613:
case 1266:
case 2052:
case 1979:
case 2341:
case 1930:
case 506:
case 3332:
case 612:
case 3875:
case 2276:
case 3853:
case 999:
case 570:
case 998:
case 3370:
case 601:
case 1965:
case 777:
case 561:
case 3526:
case 950:
case 3798:
case 2078:
case 221:
case 994:
case 41:
case 3748:
case 2229:
case 141:
case 864:
case 3625:
case 3172:
case 2704:
case 1422:
case 2614:
case 3257:
case 1708:
case 2391:
case 2381:
case 2954:
case 3565:
case 274:
case 3111:
case 2347:
case 3530:
case 3179:
case 307:
case 3205:
case 3352:
case 1946:
case 856:
case 1950:
case 2316:
case 2609:
case 3833:
case 1700:
case 675:
case 1610:
case 3097:
case 1715:
case 2039:
case 1060:
case 593:
case 2242:
case 3210:
case 3359:
case 3231:
case 3756:
case 1001:
case 1449:
case 734:
case 3138:
case 3740:
case 3586:
case 2712:
case 3402:
case 2445:
case 2032:
case 448:
case 1761:
case 3685:
case 3695:
case 2485:
case 2495:
case 614:
case 2289:
case 1106:
case 444:
case 1767:
case 53:
case 926:
case 3546:
case 3550:
case 1637:
case 1489:
case 738:
case 1499:
case 3834:
case 2777:
case 3150:
case 654:
case 3081:
case 1492:
case 1482:
case 232:
case 1805:
case 2727:
case 3003:
case 499:
case 721:
case 3189:
case 1233:
case 2137:
case 2945:
case 450:
case 635:
case 1300:
case 2716:
case 3406:
case 3582:
case 3633:
case 2606:
case 1831:
case 543:
case 3182:
case 3192:
case 2246:
case 3909:
case 2312:
case 1450:
case 4009:
case 3328:
case 3759:
case 1094:
case 1446:
case 410:
case 778:
case 779:
case 1992:
case 1982:
case 3390:
case 163:
case 1044:
case 1486:
case 1496:
case 176:
case 3778:
case 1837:
case 3885:
case 1093:
case 2531:
case 867:
case 100:
case 1109:
case 1234:
case 1989:
case 1999:
case 2131:
case 1509:
case 2510:
case 91:
case 3634:
case 715:
case 2377:
case 2434:
case 2985:
case 3764:
case 3149:
case 304:
case 192:
case 2655:
case 1523:
case 2915:
case 3331:
case 3861:
case 34:
case 1345:
case 3076:
case 2900:
case 2750:
case 1659:
case 2824:
case 1856:
case 3815:
case 87:
case 1013:
case 1427:
case 1912:
case 2227:
case 567:
case 3310:
case 2342:
case 760:
case 3924:
case 4024:
case 1416:
case 2392:
case 2382:
case 3571:
case 2018:
case 227:
case 1014:
case 843:
case 2967:
case 147:
case 4023:
case 3468:
case 1734:
case 2128:
case 2140:
case 352:
case 2738:
case 2674:
case 3337:
case 1678:
case 2786:
case 3029:
case 312:
case 1524:
case 1880:
case 1890:
case 3171:
case 1977:
case 3119:
case 1385:
case 1395:
case 936:
case 983:
case 2346:
case 1574:
case 1168:
case 317:
case 1628:
case 2350:
case 1916:
case 2164:
case 2578:
case 1640:
case 2749:
case 3011:
case 1261:
case 3731:
case 28:
case 2461:
case 2873:
case 3240:
case 2212:
case 587:
case 1215:
case 1333:
case 3065:
case 3072:
case 2742:
case 2400:
case 3710:
case 1852:
case 1419:
case 3600:
case 3030:
case 3615:
case 1174:
case 4055:
case 3705:
case 2415:
case 2564:
case 2178:
case 3955:
case 142:
case 40:
case 8:
case 2338:
case 3527:
case 2159:
case 1477:
case 1864:
case 205:
case 1334:
case 1155:
case 2563:
case 296:
case 4074:
case 516:
case 11:
case 3516:
case 562:
case 2792:
case 1555:
case 976:
case 2623:
case 3116:
case 3280:
case 3290:
case 485:
case 2874:
case 2467:
case 3667:
case 2396:
case 1878:
case 2799:
case 386:
case 3026:
case 2789:
case 651:
case 3181:
case 1997:
case 4060:
case 1353:
case 520:
case 1507:
case 3960:
case 2643:
case 3443:
case 3288:
case 1375:
case 3494:
case 4035:
case 3046:
case 2684:
case 3050:
case 2694:
case 2379:
case 2311:
case 1870:
case 3147:
case 2330:
case 2860:
case 148:
case 1403:
case 746:
case 3547:
case 604:
case 228:
case 3751:
case 4001:
case 2372:
case 3236:
case 1107:
case 991:
case 1404:
case 609:
case 3541:
case 224:
case 2722:
case 1535:
case 483:
case 965:
case 3608:
case 3038:
case 1560:
case 3907:
case 895:
case 2170:
case 870:
case 3757:
case 2644:
case 3444:
case 1620:
case 3096:
case 1991:
case 3197:
case 3187:
case 1981:
case 203:
case 2326:
case 260:
case 3220:
case 271:
case 1135:
case 3483:
case 1725:
case 2683:
case 2693:
case 2601:
case 2894:
case 314:
case 3401:
case 2884:
case 3049:
case 2520:
case 2779:
case 90:
case 3232:
case 705:
case 1888:
case 1775:
case 150:
case 1903:
case 2843:
case 198:
case 3270:
case 1632:
case 1009:
case 4084:
case 584:
case 3435:
case 4094:
case 110:
case 3504:
case 2010:
case 2297:
case 2772:
case 2765:
case 3351:
case 3984:
case 3994:
case 1183:
case 2660:
case 1144:
case 354:
case 1836:
case 1487:
case 4043:
case 1497:
case 2730:
case 3357:
case 358:
case 2281:
case 2291:
case 3983:
case 830:
case 3993:
case 375:
case 1184:
case 1447:
case 390:
case 4093:
case 2188:
case 3503:
case 3092:
case 4044:
case 1481:
case 476:
case 3944:
case 985:
case 463:
case 1143:
case 78:
case 2247:
case 1325:
case 231:
case 1543:
case 845:
case 2883:
case 3407:
case 194:
case 318:
case 2844:
case 319:
case 2908:
case 1820:
case 1584:
case 1594:
case 2758:
case 3103:
case 1904:
case 2745:
case 586:
case 2927:
case 533:
case 478:
case 1873:
case 1461:
case 3224:
case 3062:
case 455:
case 2168:
case 2628:
case 4063:
case 2859:
case 3456:
case 1578:
case 2640:
case 1749:
case 4052:
case 3440:
case 2261:
case 681:
case 2568:
case 1415:
case 1271:
case 1219:
case 362:
case 242:
case 3069:
case 2863:
case 2333:
case 3306:
case 2852:
case 794:
case 1400:
case 2419:
case 3709:
case 1563:
case 59:
case 750:
case 196:
case 21:
case 977:
case 3821:
case 4078:
case 799:
case 421:
case 798:
case 1277:
case 1782:
case 1868:
case 2864:
case 105:
case 1159:
case 1467:
case 1874:
case 3223:
case 1386:
case 1396:
case 2680:
case 1789:
case 3054:
case 710:
case 2795:
case 1623:
case 2573:
case 4064:
case 1349:
case 1900:
case 3273:
case 1750:
case 2659:
case 2971:
case 661:
case 1590:
case 1746:
case 501:
case 292:
case 1655:
case 808:
case 439:
case 438:
case 573:
case 16:
case 2345:
case 953:
case 1227:
case 4028:
case 2663:
case 1342:
case 3463:
case 3871:
case 972:
case 3819:
case 1051:
case 4056:
case 2652:
case 3452:
case 4040:
case 3928:
case 913:
case 3616:
case 2427:
case 2013:
case 382:
case 1216:
case 1190:
case 2734:
case 823:
case 1221:
case 2664:
case 1392:
case 1382:
case 3268:
case 3990:
case 1018:
case 127:
case 937:
case 3621:
case 4090:
case 4080:
case 2014:
case 804:
case 3025:
case 1823:
case 2977:
case 2395:
case 3561:
case 3100:
case 1389:
case 3115:
case 54:
case 1796:
case 2678:
case 1540:
case 2890:
case 1556:
case 2762:
case 250:
case 2775:
case 3936:
case 2903:
case 298:
case 915:
case 3045:
case 2583:
case 71:
case 2593:
case 432:
case 1031:
case 802:
case 1601:
case 1884:
case 1779:
case 1548:
case 3470:
case 2888:
case 2898:
case 2769:
case 389:
case 2144:
case 1120:
case 3235:
case 3313:
case 3687:
case 1005:
case 3439:
case 2366:
case 3803:
case 2639:
case 1730:
case 575:
case 2441:
case 2009:
case 558:
case 1010:
case 559:
case 3641:
case 797:
case 4088:
case 1297:
case 1287:
case 1772:
case 2193:
case 75:
case 554:
case 3948:
case 3681:
case 2491:
case 2481:
case 3804:
case 974:
case 2143:
case 1247:
case 1281:
case 2194:
case 2447:
case 1188:
case 1198:
case 2754:
case 1726:
case 2594:
case 1037:
case 1908:
case 1136:
case 2848:
case 3207:
case 1758:
case 1329:
case 2904:
case 825:
case 63:
case 514:
case 180:
case 2325:
case 131:
case 2543:
case 294:
case 1893:
case 477:
case 540:
case 1801:
case 1379:
case 1311:
case 3498:
case 3488:
case 2941:
case 472:
case 2987:
case 3939:
case 2353:
case 3284:
case 413:
case 2507:
case 4039:
case 2362:
case 2832:
case 3970:
case 128:
case 3033:
case 129:
case 3841:
case 1835:
case 726:
case 4070:
case 535:
case 368:
case 249:
case 248:
case 3932:
case 3713:
case 3897:
case 2839:
case 2369:
case 2101:
case 2560:
case 244:
case 3034:
case 1539:
case 2208:
case 3847:
case 3714:
case 3891:
case 124:
case 2535:
case 792:
case 1408:
case 1132:
case 807:
case 2135:
case 2947:
case 171:
case 1807:
case 2725:
case 1532:
case 1693:
case 3420:
case 1729:
case 2991:
case 2981:
case 3448:
case 3293:
case 1326:
case 2266:
case 2651:
case 3451:
case 667:
case 2911:
case 1063:
case 507:
case 3872:
case 3213:
case 3335:
case 1387:
case 155:
case 3154:
case 48:
case 178:
case 1953:
case 1466:
case 1703:
case 1613:
case 1975:
case 1962:
case 3784:
case 2972:
case 3879:
case 20:
case 1276:
case 3307:
case 1229:
case 62:
case 405:
case 370:
case 241:
case 835:
case 3575:
case 3817:
case 3553:
case 1425:
case 1078:
case 121:
case 3744:
case 306:
case 2429:
case 2225:
case 496:
case 1064:
case 285:
case 174:
case 1222:
case 3569:
case 1347:
case 2657:
case 3457:
case 682:
case 1614:
case 2422:
case 3175:
case 3418:
case 2708:
case 3153:
case 2618:
case 2926:
case 783:
case 1303:
case 46:
case 139:
case 1557:
case 138:
case 929:
case 1797:
case 1272:
case 3735:
case 2976:
case 1741:
case 2269:
case 3000:
case 3125:
case 2465:
case 814:
case 687:
case 1211:
case 3343:
case 3525:
case 1453:
case 1279:
case 1118:
case 3611:
case 2275:
case 4051:
case 3701:
case 2024:
case 1056:
case 3876:
case 1454:
case 2426:
case 3918:
case 1090:
case 551:
case 3626:
case 4018:
case 427:
case 2922:
case 3344:
case 3067:
case 971:
case 3658:
case 1151:
case 1226:
case 3617:
case 875:
case 330:
case 2023:
case 1258:
case 859:
case 1781:
case 1814:
case 446:
case 1791:
case 2929:
case 1304:
case 2818:
case 819:
case 3566:
case 265:
case 1925:
case 2513:
case 134:
case 741:
case 2949:
case 504:
case 1606:
case 1371:
case 1433:
case 922:
case 132:
case 84:
case 1036:
case 2805:
case 3931:
case 1137:
case 3206:
case 98:
case 1098:
case 1088:
case 3324:
case 4010:
case 3646:
case 2446:
case 3849:
case 1537:
case 2043:
case 3755:
case 4005:
case 1246:
case 620:
case 1250:
case 3545:
case 2083:
case 2093:
case 2109:
case 200:
case 2992:
case 3774:
case 263:
case 2486:
case 2502:
case 2044:
case 2367:
case 1020:
case 3686:
case 1505:
case 177:
case 801:
case 3638:
case 1985:
case 1995:
case 996:
case 2438:
case 2234:
case 2989:
case 2999:
case 812:
case 1131:
case 3145:
case 3882:
case 2509:
case 873:
case 1510:
case 509:
case 3534:
case 113:
case 3405:
case 1327:
case 3209:
case 172:
case 1609:
case 684:
case 817:
case 1719:
case 1806:
case 3431:
case 3373:
case 3355:
case 89:
case 1070:
case 3134:
case 153:
case 2245:
case 765:
case 2449:
case 1602:
case 428:
case 429:
case 3649:
case 1712:
case 2295:
case 2285:
case 283:
case 424:
case 3689:
case 3374:
case 3896:
case 2637:
case 2007:
case 1495:
case 1289:
case 3:
case 1321:
case 886:
case 2986:
case 2996:
case 3533:
case 2492:
case 689:
case 1282:
case 1777:
case 1292:
case 3838:
case 471:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1761850801/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,1,0,0,1,1,1,0,0,1,0,1,0,0,1,0,0,1,0,0,0,1,1,0,1,1,0,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,0,1,0,1,0,1,1,0,1,0,0,0,1,1,0,0,0,1,0,0,1,1,1,1,0,0,1,0,0,0,0,0,1,1,0,1,1,1,1,1,0,1,1,0,0,0,0,0,1,0,0,1,1,0,0,1,0,1,0,1,0,0,0,0,1,1,0,0,0,0,0,1,1,0,1,1,1,0,1,1,0,1,1,0,0,0,1,0,0,1,0,0,1,1,0,0,0,0,0,0,1,1,1,0,0,1,0,1,0,0,0,0,0,0,0,1,1,0,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,1,0,0,1,1,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,1,1,1,1,1,0,1,1,1,1,0,1,1,0,0,0,1,0,0,1,1,0,0,1,0,0,0,1,1,1,1,1,0,0,1,0,0,0,0,1,1,1,0,0,0,0,1,1,1,0,1,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,1,1,0,1,0,1,0,0,0,1,0,1,1,1,0,1,0,1,0,0,1,1,0,0,0,0,0,0,1,0,0,0,1,1,0,1,1,1,0,0,0,1,0,1,1,1,1,1,1,1,0,0,1,0,0,1,1,1,0,0,1,0,1,1,0,1,0,0,1,1,0,1,1,1,0,0,1,1,1,1,0,1,0,0,0,1,0,0,0,0,1,0,0,1,0,0,1,0,0,1,1,0,0,1,0,1,1,1,1,0,1,0,1,0,0,1,1,0,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,1,0,0,0,0,1,1,0,0,1,1,1,1,0,0,0,1,1,0,0,0,0,1,0,1,0,1,1,1,0,0,0,0,1,0,1,1,1,0,0,1,0,1,0,1,1,0,0,0,1,0,0,0,0,1,1,0,1,0,0,0,0,1,0,1,0,1,1,1,1,0,0,1,1,0,0,0,1,1,0,1,0,0,1,0,0,1,1,1,0,1,0,1,1,1,0,1,1,1,1,1,1,1,1,1,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,1,0,1,1,0,0,1,1,0,0,1,0,0,0,1,0,1,0,1,1,0,1,0,0,1,0,0,1,0,1,1,1,1,1,0,1,0,0,1,1,1,1,1,0,1,1,0,0,0,1,0,0,1,0,0,1,1,1,1,0,0,1,0,1,0,0,1,1,1,1,0,0,1,1,0,1,0,1,1,1,1,0,1,0,0,0,0,1,1,1,1,0,0,1,1,1,0,0,1,1,1,0,1,1,0,0,1,1,1,1,0,0,1,0,1,1,1,0,1,1,1,1,1,1,1,0,1,1,0,0,0,0,0,1,0,1,0,0,1,0,1,1,0,1,0,1,1,1,0,0,1,1,0,1,1,0,1,1,0,1,0,0,0,1,1,0,1,1,0,1,0,0,1,0,1,1,0,1,1,1,1,1,1,1,0,1,1,0,0,1,0,0,1,0,1,1,0,1,1,1,0,0,0,1,1,1,1,1,0,1,0,0,0,1,0,0,0,0,1,1,1,1,0,0,1,1,1,0,0,0,1,0,0,0,0,1,0,0,1,1,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,0,0,0,0,1,0,1,0,1,1,1,0,0,0,1,1,0,1,0,0,0,1,0,0,1,1,0,0,1,1,1,0,0,0,0,1,0,0,0,1,1,1,1,0,0,1,1,0,0,1,1,0,0,0,1,0,1,1,0,0,0,0,0,0,1,1,1,0,0,1,1,0,1,0,0,1,0,1,1,1,1,1,1,0,0,1,0,0,1,1,1,1,0,1,1,0,1,0,0,1,1,0,0,0,0,0,1,1,0,1,0,1,1,1,0,1,1,0,1,1,1,1,1,0,0,0,1,1,1,1,1,1,0,1,1,1,0,0,0,0,0,0,0,1,0,1,1,1,1,1,0,1,0,0,1,1,0,0,1,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,1,1,1,1,0,0,1,1,0,0,0,1,0,0,1,0,1,1,0,0,1,1,1,0,0,1,0,0,0,1,0,0,0,1,0,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,0,0,0,1,1,0,1,1,0,1,0,0,1,0,1,0,1,0,0,1,0,1,0,1,0,1,0,0,0,0,1,0,1,1,0,0,1,1,1,1,1,0,0,0,1,0,1,1,1,1,1,0,0,0,0,1,0,0,0,1,1,0,0,1,1,1,1,0,0,1,0,0,0,0,1,1,0,1,1,0,1,1,0,0,0,1,0,1,1,0,0,1,1,1,1,0,0,1,0,0,0,0,1,1,1,0,0,0,0,1,1,0,1,0,0,0,1,0,0,0,1,1,1,0,1,0,0,1,1,1,1,1,0,0,1,1,1,1,0,1,0,0,1,0,1,0,1,0,0,1,1,0,0,1,0,0,0,1,1,1,1,1,0,1,1,0,0,1,1,1,1,1,1,0,0,0,1,1,1,0,0,1,0,0,1,0,0,0,0,1,0,0,1,0,1,0,0,0,0,1,1,1,1,0,1,1,1,0,0,1,0,0,1,1,0,1,1,0,1,0,1,0,0,1,1,0,0,0,0,1,0,1,0,1,1,0,0,1,0,1,0,0,0,0,0,0,0,1,1,1,1,0,1,0,0,1,0,0,0,1,1,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,1,1,0,1,1,1,1,1,1,0,1,0,0,0,0,0,0,0,1,1,1,0,0,1,0,0,1,1,0,1,0,1,0,0,1,0,0,0,1,0,1,0,1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,0,1,1,0,0,1,1,0,0,1,0,0,0,0,0,0,1,0,1,1,0,0,1,0,1,0,0,1,0,0,1,1,0,0,1,0,1,1,1,0,0,0,1,0,0,0,1,0,1,1,0,1,0,1,1,1,0,0,0,1,0,0,1,1,0,1,1,1,1,1,1,0,0,1,0,0,1,1,0,0,0,0,1,1,1,0,0,1,0,1,1,0,0,1,1,0,1,0,1,0,1,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,1,0,0,1,1,1,0,0,1,0,0,0,0,1,0,1,1,0,0,1,1,1,1,1,0,0,0,0,1,0,1,1,1,1,0,1,1,0,1,0,0,0,0,1,1,0,1,0,0,1,0,0,0,1,1,0,1,0,0,0,1,1,0,1,0,0,1,1,1,1,1,1,1,1,1,1,0,0,1,1,0,1,1,1,0,1,0,0,1,1,1,0,0,0,0,1,0,1,0,0,1,1,1,0,0,1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,1,1,1,1,0,1,0,1,0,0,0,1,1,0,0,1,0,0,0,1,1,1,0,1,1,0,0,1,1,1,0,0,1,1,1,0,1,1,0,1,1,0,1,1,1,0,1,0,1,1,1,1,1,1,0,0,1,0,0,1,1,0,1,1,1,1,1,0,0,0,1,0,1,1,1,1,0,1,1,0,1,1,1,1,0,0,0,1,0,1,0,0,1,1,1,0,1,1,1,0,0,0,0,1,1,0,0,0,1,1,0,1,0,0,1,1,1,0,1,0,1,1,0,1,0,0,0,1,1,1,1,0,1,0,0,1,1,0,1,1,1,1,1,0,1,1,0,1,0,0,0,0,1,0,1,0,1,0,0,1,0,1,1,1,1,0,0,0,1,0,1,1,0,0,1,1,0,0,1,1,0,0,0,0,1,1,1,0,1,1,0,0,0,0,1,0,0,1,0,0,1,1,1,1,1,1,1,0,1,1,1,0,0,0,0,1,1,0,0,1,1,1,0,0,1,1,1,0,0,1,0,1,0,1,0,1,1,0,0,1,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,1,1,0,0,1,0,1,1,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,0,1,0,1,0,1,0,1,0,0,1,0,1,1,0,1,0,0,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,0,1,0,1,0,0,1,1,0,0,1,0,0,1,0,0,0,0,1,1,1,1,0,1,1,0,1,0,0,0,0,0,1,0,0,1,1,0,1,1,0,0,0,0,0,1,0,0,1,0,0,0,1,1,1,1,0,1,1,0,1,0,0,0,1,0,0,0,1,0,0,0,1,1,0,0,0,1,1,0,1,0,0,1,0,0,0,1,1,1,1,0,1,1,0,0,0,0,1,0,1,1,1,1,0,0,0,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,0,1,1,1,1,0,0,1,0,0,0,0,1,1,1,0,1,1,1,1,0,0,1,1,0,0,1,0,1,0,1,1,0,1,1,1,1,0,1,1,0,1,1,1,1,1,0,0,1,1,1,1,1,1,1,0,0,1,1,0,1,0,0,0,1,0,1,1,0,1,0,0,0,1,0,0,1,0,0,1,1,0,1,1,1,1,0,0,1,0,1,1,0,1,1,1,0,1,0,1,1,1,1,1,0,1,0,0,1,1,1,1,1,1,1,0,0,0,1,1,1,0,0,1,0,0,1,0,1,0,0,1,1,0,0,0,0,0,1,0,0,0,0,1,1,1,0,1,1,1,1,1,0,0,1,0,1,0,1,1,0,1,0,0,1,1,1,1,0,1,0,0,1,0,0,0,0,1,1,1,1,1,1,0,0,1,0,0,1,0,1,0,1,1,0,1,1,0,1,1,0,1,1,0,0,1,0,1,0,0,1,1,0,0,1,1,0,0,0,0,1,1,0,0,1,0,0,1,1,0,0,1,1,1,1,1,1,1,0,0,0,1,1,1,0,1,1,1,0,1,1,1,0,0,0,1,0,1,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,1,1,1,1,1,1,0,0,0,1,0,0,1,0,0,1,0,0,1,1,1,0,1,0,0,0,0,1,0,1,1,0,1,1,1,0,0,0,1,0,0,0,0,1,0,1,1,1,1,1,0,0,1,1,0,1,1,0,1,0,1,1,1,0,0,1,0,1,0,1,0,0,0,0,1,0,0,1,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,1,1,1,0,1,1,1,0,0,1,0,1,0,0,0,0,1,1,1,1,0,1,0,1,1,1,1,0,0,1,0,1,0,0,1,1,1,0,0,0,1,0,0,1,1,0,1,1,1,0,1,1,1,1,0,1,0,0,1,1,0,1,1,0,1,1,0,0,1,1,1,1,0,0,1,1,1,0,0,1,1,1,0,1,1,0,1,1,1,1,0,1,1,0,0,1,0,0,0,1,0,0,1,1,1,0,1,0,0,0,0,0,1,0,0,0,1,1,0,1,0,1,1,0,0,0,1,1,1,0,0,1,0,1,0,1,1,1,0,1,0,0,0,0,1,1,1,0,0,1,0,0,1,0,1,1,0,1,1,1,0,0,0,0,0,0,0,1,1,1,0,1,0,1,0,0,0,0,1,1,0,1,1,1,0,0,0,0,0,1,0,0,1,0,0,1,1,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,1,0,0,0,1,0,1,0,0,0,1,1,0,1,1,1,0,0,0,0,1,0,1,1,1,1,0,0,1,0,1,1,0,0,1,1,1,0,1,1,1,0,1,1,1,1,1,0,1,1,0,1,0,0,1,0,1,1,1,0,1,1,0,0,1,1,0,0,0,0,0,1,0,0,0,0,1,0,1,0,0,1,1,0,0,0,1,0,0,1,0,1,1,0,0,0,1,0,1,0,0,1,0,0,0,0,0,1,0,1,1,0,0,1,0,0,0,0,0,1,0,1,1,1,0,1,1,1,0,0,0,1,1,1,1,1,0,0,0,0,0,0,1,0,1,1,0,0,1,0,0,1,1,1,1,1,1,0,1,0,1,1,1,1,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,1,1,0,0,0,0,1,0,0,0,1,0,1,0,1,1,0,0,0,0,1,1,1,0,1,1,0,0,0,1,0,0,0,0,0,0,1,1,0,0,1,0,0,0,0,1,0,0,0,1,1,1,0,0,0,0,1,0,0,0,1,1,0,1,1,1,0,0,1,0,0,0,0,0,1,0,1,1,1,0,0,0,1,1,1,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,1,0,1,1,0,0,1,1,0,0,0,1,0,0,0,1,1,0,0,0,1,1,1,0,1,1,0,0,0,0,0,0,1,0,0,1,0,1,0,1,1,0,0,1,0,0,1,0,1,0,1,1,0,0,1,0,0,1,1,1,0,1,1,1,1,1,1,0,0,0,1,0,0,0,0,0,0,0,1,1,0,1,1,1,1,1,0,0,0,1,0,0,0,0,0,1,0,0,1,1,1,0,1,1,0,0,1,0,1,0,1,0,0,0,0,0,1,1,0,0,0,1,0,0,1,0,1,1,1,1,0,1,0,1,0,0,1,1,0,0,1,1,0,0,1,0,1,1,0,1,1,0,0,0,1,1,1,0,0,1,1,0,1,1,1,0,0,0,1,1,1,0,1,0,0,1,0,0,1,1,0,1,0,1,1,0,1,0,1,0,1,0,0,0,0,0,0,0,1,0,1,1,1,1,1,0,0,1,1,1,0,1,0,0,0,1,0,0,0,1,1,0,0,0,0,1,0,1,1,0,1,0,0,1,0,0,1,1,1,0,1,1,0,1,1,1,0,0,0,0,0,0,0,1,1,0,1,0,1,1,1,1,0,0,0,0,0,1,0,0,1,1,0,0,0,0,1,0,0,1,0,1,0,1,0,1,1,0,0,0,1,1,1,0,1,0,0,1,1,0,0,1,1,0,0,1,1,0,1,0,0,0,0,0,1,0,1,1,0,0,1,1,0,1,0,1,0,1,1,0,0,1,0,0,0,0,1,0,1,0,1,0,0,1,1,0,1,1,0,0,0,1,0,0,0,0,1,1,1,0,1,1,0,0,0,1,0,1,0,1,0,0,1,0,0,1,1,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,1,0,1,1,0,1,0,1,1,0,0,0,0,0,1,0,1,1,1,1,1,0,1,1,0,0,0,0,0,0,1,0,1,1,1,1,0,1,0,1,0,0,0,1,0,0,0,0,1,1,0,0,0,1,1,0,1,0,1,0,1,1,1,1,1,0,1,1,0,1,0,1,1,0,0,1,1,0,0,0,0,1,0,0,1,1,1,0,1,1,0,0,0,0,1,0,0,1,1,1,1,0,0,1,1,0,1,0,0,0,0,1,1,1,0,0,0,1,0,1,0,0,0,1,0,0,1,0,0,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,1,0,1,1,1,1,1,1,0,1,0,1,1,1,0,1,1,1,0,0,0,0,1,1,0,0,0,0,0,1,1,0,1,1,1,0,1,0,0,0,0,0,0,1,0,0,0,0,1,0,1,0,1,1,0,0,1,0,0,0,0,1,1,0,1,0,1,1,0,0,0,1,1,1,1,1,0,1,0,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,0,1,1,1,1,0,0,0,0,1,1,0,1,1,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,1,0,0,1,0,0,1,0,1,1,0,0,1,1,1,1,1,1,1,0,0,1,1,0,1,1,1,0,0,1,1,0,1,1,0,1,0,1,0,0,0,0,0,0,1,1,1,1,0,1,1,0,1,0,0,1,1,0,0,1,1,0,0,0,1,1,0,0,0,1,1,1,0,1,0,1,1,1,1,0,0,1,0,0,0,0,1,1,0,0,1,0,1,0,1,1,1,0,1,1,0,0,1,1,0,1,1,0,0,0,0,0,0,1,1,0,1,0,0,0,1,1,1,0,1,1,1,0,1,1,1,0,0,1,1,1,1,0,0,0,1,1,1,1,0,0,1,1,1,1,0,0,0,1,0,1,0,0,1,0,0,1,0,0,1,1,1,1,0,1,0,0,0,0,0,1,1,1,0,1,1,1,1,1,0,1,0,0,1,0,1,0,1,0,0,1,0,0,1,1,0,1,0,1,0,0,0,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,0,1,0,0,0,0,0,0,1,1,0,0,1,0,1,1,0,1,1,1,1,1,0,1,0,0,1,0,0,0,1,0,1,1,0,0,1,1,0,1,0,1,0,0,1,1,0,0,0,0,0,1,1,1,1,0,0,1,0,0,1,0,0,0,1,1,1,0,1,1,0,1,0,1,1,0,1,1,1,0,0,0,1,1,1,1,0,1,1,1,1,0,1,0,1,1,0,0,0,1,1,0,1,1,1,1,0,1,1,1,1,1,0,0,0,0,1,1,1,1,1,0,0,1,0,0,0,0,0,1,0,1,0,1,0,1,0,1,1,1,0,0,0,0,1,0,1,1,0,0,1,1,0,1,0,0,0,1,0,0,0,1,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,0,1,1,0,0,0,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,1,1,0,0,0,0,1,0,1,0,1,0,0,0,1,0,1,0,0,0,1,];
var gg_b = "1761850801/";

function subdomain_from_url(url, base, dir) {
        var retval = '';
        if (!base) {
                if (dir === 'webp') {
                        retval = 'w';
                } else if (dir === 'avif') {
                        retval = 'a';
                }
        }
        
        var b = 16;
        
        var r = /\/[0-9a-f]{61}([0-9a-f]{2})([0-9a-f])/;
        var m = r.exec(url);
        if (!m) {
                return retval;
        }
        
        var g = parseInt(m[2]+m[1], b);
        if (!isNaN(g)) {
                if (base) {
                        retval = String.fromCharCode(97 + gg_m[g]) + base;
                } else {
                        retval = retval + (1+gg_m[g]);
                }
        }
        
        return retval;
}


function url_from_url(url, base, dir) {
        return url.replace(/\/\/..?\.(?:gold-usergeneratedcontent\.net|hitomi\.la)\//, '//'+subdomain_from_url(url, base, dir)+'.'+domain2+'/');
}

function full_path_from_hash(hash) {
        return gg_b+gg_s(hash)+'/'+hash;
}


function real_full_path_from_hash(hash) {
        return hash.replace(/^.*(..)(.)$/, '$2/$1/'+hash);
}

function url_from_hash(_galleryid, image, dir, ext) {
        ext = ext || dir || image.name.split('.').pop();
        if (dir === 'webp' || dir === 'avif') {
                dir = '';
        } else {
                dir += '/';
        }
        
        return 'https://a.'+domain2+'/'+dir+full_path_from_hash(image.hash)+'.'+ext;
}

function url_from_url_from_hash(_galleryid, image, dir, ext, base) {
        if ('tn' === base) {
                return url_from_url('https://a.'+domain2+'/'+dir+'/'+real_full_path_from_hash(image.hash)+'.'+ext, base);
        }
        return url_from_url(url_from_hash(_galleryid, image, dir, ext), base, dir);
}


function hitomi_get_image_list() {
  files = galleryinfo["files"];
  dir = "webp";
  type = "webp";
  base = "webp";
  result = [];
  btresult = [];
  stresult = [];
  for (var file of files) {
    result.push(url_from_url(url_from_hash(0, file, dir), undefined, dir));
    btresult.push(url_from_url_from_hash(0, file, 'webpbigtn', 'webp', 'tn'));
    stresult.push(url_from_url_from_hash(0, file, type+'smalltn', type, 'tn'));
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
