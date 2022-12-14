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
case 217:
case 1133:
case 2201:
case 210:
case 1429:
case 4070:
case 1911:
case 846:
case 744:
case 68:
case 585:
case 2995:
case 1392:
case 1762:
case 976:
case 2949:
case 2894:
case 3864:
case 3408:
case 2854:
case 2726:
case 1314:
case 2515:
case 3800:
case 3400:
case 2178:
case 248:
case 4006:
case 2134:
case 1091:
case 3266:
case 2261:
case 1125:
case 860:
case 2655:
case 631:
case 282:
case 522:
case 2202:
case 3275:
case 2411:
case 1570:
case 356:
case 1203:
case 2351:
case 2368:
case 2682:
case 169:
case 3733:
case 1213:
case 2778:
case 2613:
case 2150:
case 2850:
case 643:
case 1542:
case 423:
case 513:
case 2882:
case 3108:
case 4061:
case 3789:
case 3967:
case 2264:
case 1311:
case 2426:
case 3437:
case 2520:
case 3307:
case 2997:
case 1710:
case 1248:
case 2916:
case 2509:
case 4058:
case 3372:
case 1379:
case 3930:
case 2292:
case 2212:
case 1455:
case 1984:
case 1044:
case 1224:
case 708:
case 1129:
case 1421:
case 3785:
case 3323:
case 2244:
case 1545:
case 2837:
case 1110:
case 2684:
case 2940:
case 3767:
case 3863:
case 952:
case 731:
case 899:
case 246:
case 3896:
case 2298:
case 1035:
case 1805:
case 3927:
case 847:
case 1039:
case 3618:
case 1159:
case 2388:
case 3911:
case 3984:
case 41:
case 1604:
case 697:
case 1990:
case 2057:
case 1863:
case 3561:
case 1279:
case 2378:
case 2413:
case 2195:
case 1437:
case 4075:
case 3033:
case 221:
case 2590:
case 2902:
case 3311:
case 3069:
case 3678:
case 783:
case 616:
case 23:
case 1648:
case 793:
case 1105:
case 2206:
case 3979:
case 523:
case 2845:
case 3923:
case 2440:
case 3268:
case 65:
case 3624:
case 3513:
case 1222:
case 2122:
case 3524:
case 3680:
case 592:
case 2414:
case 3626:
case 1832:
case 3246:
case 3507:
case 3934:
case 1536:
case 845:
case 1957:
case 3736:
case 1272:
case 1283:
case 1238:
case 4095:
case 764:
case 1976:
case 2540:
case 1267:
case 1309:
case 3713:
case 3070:
case 854:
case 3998:
case 374:
case 3234:
case 2159:
case 129:
case 2697:
case 1031:
case 3942:
case 3975:
case 3431:
case 1836:
case 1952:
case 8:
case 3870:
case 2954:
case 2742:
case 1036:
case 2435:
case 1731:
case 3983:
case 2699:
case 1674:
case 2725:
case 3222:
case 2436:
case 3872:
case 812:
case 3285:
case 1905:
case 1259:
case 4018:
case 1205:
case 3457:
case 2241:
case 2263:
case 2558:
case 2665:
case 3139:
case 1578:
case 3676:
case 3722:
case 404:
case 1181:
case 3552:
case 3620:
case 2693:
case 158:
case 1728:
case 2228:
case 2360:
case 3740:
case 3918:
case 4022:
case 1206:
case 1262:
case 647:
case 2714:
case 3330:
case 2532:
case 2322:
case 2094:
case 2818:
case 2546:
case 3356:
case 2783:
case 1488:
case 3563:
case 1686:
case 3760:
case 3772:
case 1981:
case 3049:
case 928:
case 1528:
case 3315:
case 3601:
case 2344:
case 3361:
case 1331:
case 272:
case 2464:
case 3898:
case 1060:
case 4094:
case 3650:
case 1966:
case 3995:
case 3208:
case 3038:
case 1560:
case 1552:
case 99:
case 1946:
case 1965:
case 3263:
case 2773:
case 3368:
case 4082:
case 3959:
case 168:
case 194:
case 2677:
case 3586:
case 1461:
case 557:
case 3203:
case 2375:
case 2027:
case 2669:
case 692:
case 2762:
case 1708:
case 233:
case 1660:
case 1008:
case 1890:
case 3363:
case 3991:
case 336:
case 1102:
case 228:
case 1759:
case 60:
case 2880:
case 834:
case 338:
case 871:
case 3915:
case 2353:
case 2123:
case 4031:
case 494:
case 2832:
case 2529:
case 607:
case 284:
case 3248:
case 1468:
case 2920:
case 989:
case 1010:
case 243:
case 311:
case 2639:
case 3012:
case 756:
case 2755:
case 1341:
case 2400:
case 1109:
case 1548:
case 2661:
case 1048:
case 571:
case 941:
case 566:
case 1753:
case 364:
case 3045:
case 3608:
case 1748:
case 226:
case 1470:
case 2839:
case 2768:
case 1192:
case 537:
case 2099:
case 1927:
case 2238:
case 103:
case 1682:
case 39:
case 2765:
case 487:
case 2114:
case 2517:
case 3111:
case 3326:
case 3689:
case 3212:
case 891:
case 2189:
case 3432:
case 559:
case 1709:
case 2657:
case 3829:
case 2570:
case 307:
case 2979:
case 3619:
case 1574:
case 3806:
case 729:
case 782:
case 823:
case 3875:
case 28:
case 1735:
case 3353:
case 3174:
case 203:
case 1723:
case 3054:
case 2958:
case 551:
case 987:
case 3382:
case 4002:
case 3850:
case 145:
case 2252:
case 3001:
case 2595:
case 3928:
case 819:
case 1111:
case 32:
case 3081:
case 1265:
case 1140:
case 1210:
case 2158:
case 58:
case 3404:
case 4086:
case 3414:
case 425:
case 872:
case 3990:
case 1054:
case 117:
case 324:
case 1435:
case 1549:
case 1992:
case 400:
case 2909:
case 1741:
case 1550:
case 3916:
case 3319:
case 781:
case 1046:
case 3188:
case 3424:
case 2054:
case 206:
case 288:
case 2488:
case 3978:
case 1076:
case 2786:
case 202:
case 542:
case 565:
case 2811:
case 1310:
case 191:
case 3506:
case 3752:
case 1642:
case 1186:
case 3757:
case 2065:
case 1943:
case 1438:
case 489:
case 213:
case 2149:
case 3088:
case 480:
case 2217:
case 2788:
case 1568:
case 2226:
case 3274:
case 650:
case 347:
case 3010:
case 4078:
case 1104:
case 3328:
case 2361:
case 3412:
case 3167:
case 3302:
case 2147:
case 533:
case 2879:
case 1784:
case 2874:
case 567:
case 3729:
case 1906:
case 2006:
case 1086:
case 2316:
case 390:
case 1606:
case 985:
case 2817:
case 1128:
case 3110:
case 3173:
case 1006:
case 3264:
case 519:
case 1519:
case 1491:
case 1810:
case 3015:
case 3649:
case 3685:
case 3615:
case 1986:
case 2089:
case 48:
case 3884:
case 719:
case 3698:
case 2629:
case 3791:
case 4013:
case 259:
case 2764:
case 1803:
case 887:
case 1335:
case 4047:
case 3712:
case 882:
case 2319:
case 3422:
case 2406:
case 3746:
case 3393:
case 2304:
case 3016:
case 1342:
case 588:
case 2745:
case 3242:
case 825:
case 3646:
case 935:
case 2767:
case 867:
case 2536:
case 3013:
case 3282:
case 173:
case 1880:
case 3989:
case 375:
case 3971:
case 1688:
case 2255:
case 2152:
case 1530:
case 2365:
case 2005:
case 1073:
case 817:
case 721:
case 25:
case 818:
case 1361:
case 745:
case 4077:
case 959:
case 4088:
case 3004:
case 2031:
case 2441:
case 2312:
case 540:
case 2120:
case 2191:
case 410:
case 2715:
case 1:
case 3118:
case 572:
case 1756:
case 1458:
case 3374:
case 2860:
case 1641:
case 303:
case 81:
case 1958:
case 3386:
case 111:
case 1912:
case 1325:
case 1698:
case 1593:
case 4060:
case 418:
case 429:
case 1865:
case 680:
case 2938:
case 926:
case 2527:
case 1879:
case 2946:
case 3544:
case 3960:
case 2138:
case 3187:
case 1699:
case 621:
case 2279:
case 3007:
case 2104:
case 876:
case 3717:
case 1452:
case 2280:
case 343:
case 1571:
case 3690:
case 3379:
case 2566:
case 458:
case 2862:
case 624:
case 911:
case 2455:
case 2078:
case 2776:
case 2865:
case 2051:
case 1891:
case 2800:
case 6:
case 3011:
case 1175:
case 1504:
case 342:
case 3122:
case 843:
case 2553:
case 1183:
case 543:
case 3065:
case 155:
case 1410:
case 1847:
case 1734:
case 1554:
case 2468:
case 673:
case 900:
case 2183:
case 1771:
case 2182:
case 620:
case 101:
case 718:
case 1888:
case 1037:
case 3512:
case 2156:
case 3957:
case 593:
case 3587:
case 506:
case 915:
case 4036:
case 1907:
case 1126:
case 2070:
case 2819:
case 1127:
case 3254:
case 778:
case 2076:
case 3140:
case 3843:
case 1289:
case 461:
case 2490:
case 1383:
case 1448:
case 934:
case 791:
case 3161:
case 3668:
case 3574:
case 4009:
case 800:
case 2688:
case 448:
case 890:
case 2702:
case 334:
case 1623:
case 2833:
case 1305:
case 4028:
case 2289:
case 157:
case 3245:
case 917:
case 576:
case 2307:
case 3964:
case 2443:
case 3199:
case 366:
case 3091:
case 1740:
case 687:
case 4087:
case 1903:
case 3499:
case 1299:
case 1533:
case 2945:
case 747:
case 3751:
case 658:
case 724:
case 3218:
case 3455:
case 409:
case 866:
case 1338:
case 1303:
case 2545:
case 748:
case 2756:
case 408:
case 807:
case 2696:
case 3813:
case 2431:
case 476:
case 771:
case 1855:
case 1887:
case 1831:
case 1370:
case 3871:
case 973:
case 2416:
case 2813:
case 1935:
case 3448:
case 1269:
case 2231:
case 3516:
case 1200:
case 121:
case 986:
case 2222:
case 1928:
case 2276:
case 240:
case 3866:
case 2919:
case 699:
case 3581:
case 1634:
case 3271:
case 407:
case 3965:
case 2166:
case 1662:
case 1527:
case 4024:
case 2583:
case 193:
case 1750:
case 943:
case 611:
case 187:
case 3334:
case 3532:
case 691:
case 3635:
case 1114:
case 2080:
case 358:
case 1824:
case 3878:
case 1147:
case 362:
case 1506:
case 1511:
case 431:
case 2267:
case 2315:
case 1618:
case 1694:
case 2430:
case 328:
case 3262:
case 2911:
case 3642:
case 90:
case 2711:
case 1100:
case 864:
case 1705:
case 2777:
case 1680:
case 2808:
case 3141:
case 20:
case 3362:
case 2352:
case 3644:
case 3654:
case 3251:
case 4041:
case 1672:
case 927:
case 359:
case 3555:
case 1620:
case 2177:
case 1849:
case 3905:
case 3849:
case 3150:
case 1451:
case 615:
case 2346:
case 1355:
case 763:
case 3:
case 773:
case 1231:
case 3235:
case 555:
case 1758:
case 1551:
case 2870:
case 3562:
case 1023:
case 2787:
case 1600:
case 2257:
case 665:
case 1881:
case 2058:
case 2728:
case 531:
case 759:
case 3803:
case 420:
case 83:
case 4066:
case 1064:
case 1681:
case 1512:
case 2743:
case 440:
case 239:
case 627:
case 1639:
case 380:
case 3479:
case 3758:
case 3394:
case 3095:
case 262:
case 2841:
case 1145:
case 3117:
case 1867:
case 1583:
case 266:
case 1752:
case 2980:
case 677:
case 1298:
case 2343:
case 2145:
case 1726:
case 1683:
case 3963:
case 2925:
case 3628:
case 2042:
case 3639:
case 308:
case 3848:
case 587:
case 3943:
case 2852:
case 2868:
case 2712:
case 3397:
case 1087:
case 4068:
case 3469:
case 3401:
case 3797:
case 2685:
case 123:
case 3701:
case 2842:
case 3244:
case 2723:
case 172:
case 2561:
case 2937:
case 1352:
case 2055:
case 1479:
case 1945:
case 3643:
case 1268:
case 2480:
case 1868:
case 4074:
case 1793:
case 2709:
case 1830:
case 532:
case 3205:
case 3861:
case 1754:
case 3962:
case 3300:
case 2148:
case 3014:
case 1895:
case 2067:
case 546:
case 1951:
case 1747:
case 1040:
case 2644:
case 1195:
case 3508:
case 2660:
case 1182:
case 2966:
case 3221:
case 1567:
case 4080:
case 815:
case 2470:
case 2117:
case 2881:
case 130:
case 314:
case 3937:
case 3291:
case 3136:
case 2286:
case 1415:
case 2823:
case 578:
case 1580:
case 3534:
case 1516:
case 3189:
case 286:
case 500:
case 2399:
case 1106:
case 1457:
case 1988:
case 668:
case 453:
case 317:
case 2172:
case 3318:
case 2906:
case 3079:
case 3137:
case 2392:
case 3287:
case 2830:
case 3165:
case 2552:
case 3487:
case 2321:
case 152:
case 2466:
case 3883:
case 564:
case 4044:
case 1875:
case 2088:
case 2296:
case 671:
case 1343:
case 2999:
case 580:
case 1738:
case 3290:
case 2210:
case 2016:
case 2288:
case 1566:
case 600:
case 3931:
case 1628:
case 3659:
case 785:
case 2339:
case 2573:
case 451:
case 2324:
case 1288:
case 994:
case 683:
case 2326:
case 517:
case 2251:
case 2428:
case 829:
case 464:
case 4026:
case 3519:
case 3071:
case 3810:
case 1075:
case 2749:
case 3840:
case 978:
case 1132:
case 329:
case 1082:
case 1067:
case 2829:
case 1409:
case 3981:
case 3867:
case 3121:
case 2174:
case 2692:
case 1024:
case 2872:
case 2681:
case 2913:
case 1215:
case 1320:
case 11:
case 3858:
case 3839:
case 2157:
case 1346:
case 2560:
case 1716:
case 520:
case 777:
case 1160:
case 52:
case 1953:
case 1191:
case 1524:
case 1995:
case 2084:
case 1164:
case 3588:
case 648:
case 3131:
case 2794:
case 684:
case 3970:
case 1263:
case 2423:
case 4053:
case 1333:
case 944:
case 960:
case 2864:
case 1171:
case 196:
case 2475:
case 1179:
case 2556:
case 3301:
case 2586:
case 4084:
case 2877:
case 879:
case 1321:
case 87:
case 2062:
case 639:
case 938:
case 1565:
case 3171:
case 365:
case 1402:
case 417:
case 3324:
case 2703:
case 146:
case 2858:
case 3672:
case 2959:
case 3109:
case 3997:
case 3777:
case 1282:
case 2597:
case 483:
case 3146:
case 1826:
case 293:
case 2492:
case 909:
case 2695:
case 2537:
case 92:
case 2162:
case 3470:
case 1564:
case 2867:
case 1445:
case 125:
case 1041:
case 2651:
case 1395:
case 2198:
case 1954:
case 4064:
case 2303:
case 3340:
case 1596:
case 2849:
case 3495:
case 2514:
case 312:
case 2585:
case 605:
case 3277:
case 1725:
case 884:
case 1621:
case 2554:
case 1324:
case 3593:
case 679:
case 3360:
case 2626:
case 2484:
case 1864:
case 2965:
case 1611:
case 1546:
case 3929:
case 1732:
case 2003:
case 4046:
case 2020:
case 1651:
case 1306:
case 412:
case 3192:
case 2798:
case 1373:
case 1294:
case 3536:
case 1386:
case 3795:
case 3289:
case 3169:
case 2221:
case 254:
case 2638:
case 3464:
case 3272:
case 3994:
case 827:
case 2242:
case 2771:
case 2992:
case 3583:
case 3365:
case 1785:
case 1572:
case 3474:
case 399:
case 3057:
case 1211:
case 4092:
case 3874:
case 2297:
case 3130:
case 1137:
case 38:
case 1670:
case 1792:
case 2083:
case 2827:
case 449:
case 3692:
case 2503:
case 1245:
case 2521:
case 704:
case 1344:
case 1274:
case 953:
case 2485:
case 3018:
case 1508:
case 625:
case 3021:
case 712:
case 2610:
case 554:
case 2066:
case 3999:
case 2299:
case 2445:
case 1004:
case 3584:
case 3753:
case 2386:
case 3744:
case 3265:
case 3641:
case 3473:
case 1807:
case 1605:
case 1365:
case 3820:
case 3609:
case 503:
case 518:
case 2635:
case 1243:
case 2750:
case 1632:
case 269:
case 2991:
case 127:
case 4003:
case 289:
case 1387:
case 3157:
case 2967:
case 2017:
case 89:
case 3780:
case 3035:
case 3217:
case 4038:
case 720:
case 3048:
case 946:
case 1131:
case 2942:
case 3375:
case 3153:
case 1391:
case 2588:
case 1397:
case 2968:
case 787:
case 1598:
case 1625:
case 3625:
case 1464:
case 3980:
case 104:
case 1599:
case 3185:
case 1940:
case 271:
case 3170:
case 2223:
case 1152:
case 4012:
case 2625:
case 4085:
case 3003:
case 1221:
case 3899:
case 1218:
case 3342:
case 344:
case 3705:
case 1286:
case 190:
case 3197:
case 840:
case 1249:
case 1614:
case 1169:
case 181:
case 50:
case 3936:
case 2240:
case 119:
case 1385:
case 2295:
case 2659:
case 1520:
case 2108:
case 2990:
case 3127:
case 3826:
case 2834:
case 3439:
case 2754:
case 1113:
case 1899:
case 1369:
case 2736:
case 2637:
case 3684:
case 2142:
case 2960:
case 1323:
case 1967:
case 370:
case 2976:
case 492:
case 1408:
case 1586:
case 2444:
case 3522:
case 2746:
case 1789:
case 3435:
case 4089:
case 1382:
case 4049:
case 2506:
case 3727:
case 1153:
case 2876:
case 1358:
case 754:
case 1930:
case 2769:
case 2594:
case 2886:
case 2614:
case 3630:
case 2508:
case 1454:
case 434:
case 1280:
case 230:
case 950:
case 1422:
case 3389:
case 1223:
case 484:
case 3286:
case 536:
case 1624:
case 2516:
case 1007:
case 693:
case 1052:
case 3756:
case 940:
case 3083:
case 4045:
case 1345:
case 1483:
case 2100:
case 2224:
case 1149:
case 1817:
case 88:
case 2133:
case 3123:
case 0:
case 861:
case 4065:
case 3842:
case 1172:
case 1675:
case 1718:
case 1234:
case 3115:
case 2547:
case 160:
case 3782:
case 3614:
case 3028:
case 1579:
case 2293:
case 726:
case 3175:
case 649:
case 2600:
case 2422:
case 3347:
case 2603:
case 3719:
case 1932:
case 3009:
case 2673:
case 1637:
case 3633:
case 2822:
case 560:
case 1576:
case 24:
case 3598:
case 2974:
case 1347:
case 2135:
case 1712:
case 2738:
case 1922:
case 1495:
case 3419:
case 902:
case 31:
case 3298:
case 2306:
case 478:
case 3700:
case 703:
case 2331:
case 339:
case 3073:
case 2314:
case 2577:
case 360:
case 865:
case 132:
case 3545:
case 3210:
case 3313:
case 1165:
case 837:
case 2395:
case 5:
case 2012:
case 663:
case 3067:
case 1910:
case 2021:
case 3395:
case 2591:
case 2330:
case 3112:
case 2126:
case 2128:
case 2087:
case 102:
case 3662:
case 2032:
case 1049:
case 1375:
case 2923:
case 688:
case 996:
case 2270:
case 2563:
case 1851:
case 965:
case 2424:
case 1151:
case 1749:
case 455:
case 3000:
case 2405:
case 3520:
case 1277:
case 415:
case 716:
case 1150:
case 3920:
case 3288:
case 881:
case 681:
case 2188:
case 3982:
case 2093:
case 995:
case 919:
case 2805:
case 1366:
case 1763:
case 936:
case 1308:
case 1258:
case 3085:
case 3656:
case 3201:
case 3059:
case 96:
case 2184:
case 2501:
case 3734:
case 2453:
case 1850:
case 1256:
case 841:
case 3774:
case 3305:
case 454:
case 601:
case 3182:
case 507:
case 1068:
case 3907:
case 232:
case 3881:
case 1721:
case 2192:
case 1944:
case 1616:
case 2851:
case 467:
case 1404:
case 1739:
case 4004:
case 1518:
case 1822:
case 1877:
case 1715:
case 1134:
case 1295:
case 2434:
case 1664:
case 2035:
case 51:
case 2548:
case 2824:
case 2247:
case 301:
case 2587:
case 1845:
case 2472:
case 957:
case 1582:
case 916:
case 264:
case 694:
case 3442:
case 3954:
case 1116:
case 192:
case 3046:
case 319:
case 722:
case 2369:
case 2350:
case 2250:
case 2479:
case 2203:
case 1920:
case 1034:
case 2716:
case 836:
case 363:
case 2425:
case 3357:
case 3837:
case 3238:
case 642:
case 700:
case 4016:
case 2873:
case 62:
case 3901:
case 1012:
case 1767:
case 2342:
case 603:
case 1266:
case 1381:
case 3807:
case 1751:
case 378:
case 1393:
case 3855:
case 3783:
case 1444:
case 1592:
case 2107:
case 602:
case 4023:
case 2914:
case 3482:
case 2013:
case 234:
case 2680:
case 3671:
case 1607:
case 445:
case 1655:
case 3955:
case 3681:
case 1679:
case 1398:
case 382:
case 2362:
case 2934:
case 1595:
case 1013:
case 509:
case 2790:
case 2792:
case 4063:
case 3105:
case 2861:
case 3547:
case 3691:
case 3715:
case 1782:
case 3303:
case 1938:
case 1439:
case 1296:
case 156:
case 470:
case 2739:
case 403:
case 468:
case 1667:
case 792:
case 1961:
case 1900:
case 2955:
case 1253:
case 85:
case 3284:
case 1304:
case 3556:
case 2173:
case 249:
case 3637:
case 2975:
case 584:
case 4057:
case 3770:
case 1038:
case 3788:
case 1525:
case 2086:
case 1537:
case 3343:
case 3349:
case 733:
case 1973:
case 219:
case 165:
case 750:
case 1474:
case 562:
case 1972:
case 2838:
case 613:
case 3597:
case 3675:
case 516:
case 3430:
case 1389:
case 1841:
case 2407:
case 185:
case 3467:
case 3742:
case 3026:
case 2131:
case 2305:
case 3276:
case 2077:
case 3147:
case 2604:
case 3741:
case 1588:
case 1526:
case 1189:
case 2462:
case 29:
case 2737:
case 527:
case 3325:
case 2971:
case 2160:
case 3154:
case 4042:
case 1921:
case 2389:
case 216:
case 2046:
case 220:
case 2029:
case 3859:
case 1077:
case 3229:
case 1949:
case 4027:
case 258:
case 508:
case 2809:
case 1704:
case 2354:
case 1857:
case 1255:
case 3728:
case 3882:
case 1246:
case 2085:
case 2265:
case 2469:
case 709:
case 1011:
case 1665:
case 305:
case 3539:
case 2181:
case 100:
case 3178:
case 833:
case 1626:
case 2863:
case 755:
case 55:
case 368:
case 1273:
case 894:
case 432:
case 2534:
case 2656:
case 2097:
case 3735:
case 1695:
case 1783:
case 1465:
case 1293:
case 3055:
case 1148:
case 982:
case 3190:
case 3255:
case 1770:
case 1650:
case 1993:
case 354:
case 491:
case 2921:
case 3179:
case 3207:
case 1894:
case 2917:
case 3996:
case 1970:
case 1969:
case 2606:
case 229:
case 3415:
case 3724:
case 3149:
case 1219:
case 3180:
case 2000:
case 497:
case 1873:
case 857:
case 253:
case 786:
case 3259:
case 1559:
case 3471:
case 3200:
case 3627:
case 452:
case 2687:
case 275:
case 1442:
case 811:
case 4069:
case 1929:
case 3754:
case 1329:
case 869:
case 2905:
case 736:
case 95:
case 1846:
case 569:
case 384:
case 1724:
case 1889:
case 15:
case 3985:
case 1176:
case 3906:
case 3371:
case 1088:
case 1414:
case 164:
case 1484:
case 2415:
case 27:
case 2333:
case 44:
case 3227:
case 3396:
case 3168:
case 335:
case 1812:
case 3638:
case 2258:
case 1497:
case 2678:
case 3533:
case 2127:
case 2802:
case 2433:
case 2636:
case 3768:
case 1348:
case 2649:
case 2504:
case 3051:
case 2136:
case 2890:
case 3100:
case 1777:
case 735:
case 547:
case 2327:
case 762:
case 3278:
case 3747:
case 1804:
case 2893:
case 3036:
case 3322:
case 292:
case 3438:
case 2580:
case 3160:
case 3304:
case 1261:
case 2752:
case 1003:
case 320:
case 3364:
case 3688:
case 966:
case 3779:
case 749:
case 1711:
case 795:
case 1197:
case 4090:
case 3176:
case 3621:
case 3002:
case 3496:
case 582:
case 3505:
case 2511:
case 3211:
case 2523:
case 3819:
case 1653:
case 577:
case 1332:
case 3039:
case 1207:
case 3988:
case 16:
case 3761:
case 1188:
case 2301:
case 204:
case 2063:
case 2232:
case 2593:
case 2953:
case 1609:
case 256:
case 439:
case 610:
case 2896:
case 2810:
case 3475:
case 3321:
case 1532:
case 2001:
case 1569:
case 799:
case 1872:
case 1021:
case 3554:
case 435:
case 3050:
case 2124:
case 1144:
case 3629:
case 3162:
case 3104:
case 3769:
case 1428:
case 1163:
case 3172:
case 3461:
case 441:
case 2903:
case 1487:
case 645:
case 2933:
case 1923:
case 3947:
case 326:
case 2574:
case 2450:
case 281:
case 3341:
case 844:
case 332:
case 3489:
case 1380:
case 544:
case 2939:
case 285:
case 3142:
case 2733:
case 2816:
case 1663:
case 385:
case 2291:
case 816:
case 255:
case 397:
case 3904:
case 2268:
case 7:
case 3283:
case 858:
case 3525:
case 561:
case 333:
case 3847:
case 2522:
case 2246:
case 2385:
case 2524:
case 91:
case 878:
case 2227:
case 1507:
case 3077:
case 575:
case 2538:
case 3337:
case 1871:
case 852:
case 3510:
case 1367:
case 2694:
case 2927:
case 2313:
case 1828:
case 1700:
case 3380:
case 3261:
case 2458:
case 931:
case 70:
case 2323:
case 1459:
case 2167:
case 956:
case 3716:
case 340:
case 1473:
case 2996:
case 3833:
case 1640:
case 862:
case 1101:
case 3497:
case 2704:
case 1629:
case 3573:
case 1557:
case 486:
case 1047:
case 201:
case 1622:
case 2720:
case 1441:
case 136:
case 2631:
case 3590:
case 618:
case 1696:
case 3346:
case 1440:
case 1631:
case 188:
case 3230:
case 3853:
case 250:
case 1384:
case 2033:
case 3865:
case 3151:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1671030001/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,0,1,0,1,1,1,1,0,0,1,0,0,0,1,1,0,0,0,1,0,0,1,1,1,0,1,1,1,0,1,1,0,0,0,0,0,1,1,0,1,0,0,1,0,0,0,1,0,1,1,1,0,0,1,0,0,1,0,1,0,1,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,1,1,1,1,1,0,0,1,1,0,0,1,1,1,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,1,1,1,1,0,1,0,0,0,1,1,0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,1,0,0,0,1,0,1,1,0,1,1,1,1,1,0,1,0,0,0,0,1,1,1,1,0,1,0,0,0,1,0,0,1,0,0,1,1,0,1,1,1,0,0,0,0,1,0,1,1,1,0,1,1,1,0,0,0,0,1,1,0,0,1,0,0,1,0,1,1,1,0,0,1,1,1,1,0,1,1,0,0,1,0,1,0,1,0,0,1,0,1,1,0,0,1,0,0,0,0,0,1,1,0,1,1,1,0,1,1,0,0,1,1,0,0,0,0,0,0,0,1,0,1,0,1,0,1,1,0,0,1,1,0,1,0,0,1,0,1,1,0,0,0,1,0,1,0,1,1,0,0,1,1,1,1,1,0,1,1,1,0,1,1,1,0,0,1,0,0,0,0,0,0,1,0,1,0,1,1,1,0,1,1,1,1,1,0,1,0,1,0,0,0,1,1,0,0,1,0,1,0,1,0,1,1,0,0,0,0,1,0,0,0,0,0,0,1,0,1,1,0,0,1,1,0,0,1,1,1,1,0,1,0,0,1,0,1,1,0,1,0,0,1,0,1,0,0,0,1,0,1,1,0,1,1,0,0,0,1,1,1,0,0,0,1,0,0,1,1,0,1,1,1,1,1,0,0,1,0,0,1,0,0,1,0,0,1,1,0,1,0,0,0,0,0,1,0,1,0,1,0,0,1,1,0,1,1,0,1,0,1,1,0,1,0,0,1,0,0,1,0,0,1,0,0,1,1,1,1,0,0,0,1,0,0,1,1,1,1,1,0,1,1,0,0,0,1,0,0,0,1,1,1,0,0,1,1,0,0,1,0,1,1,1,0,1,1,0,0,0,1,0,0,1,1,0,1,0,1,1,1,1,0,1,1,1,1,0,1,0,1,1,0,0,1,1,1,1,0,1,0,1,0,1,1,0,1,1,0,0,0,1,1,0,0,0,0,0,0,1,1,1,1,0,1,0,1,0,0,1,1,0,1,0,1,1,0,1,0,1,1,0,0,1,1,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,1,0,1,0,1,1,1,1,0,0,0,0,0,0,0,1,0,0,0,0,1,0,1,0,0,1,0,0,1,0,1,0,0,0,1,0,1,1,1,0,1,1,0,0,1,1,0,0,1,1,1,1,0,0,1,0,1,1,0,0,1,1,0,0,0,1,1,0,0,1,0,0,0,1,0,1,1,1,1,1,0,1,0,1,0,0,1,0,1,0,1,0,1,1,0,0,0,0,0,0,0,1,1,0,1,1,1,1,0,0,0,1,1,1,0,0,1,0,0,1,1,1,0,0,0,0,0,0,1,0,1,0,0,0,1,1,0,0,1,1,1,0,1,1,1,0,0,0,1,1,1,0,1,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,1,1,0,0,1,1,1,1,1,0,0,0,1,0,1,0,1,0,1,0,0,0,1,1,0,1,1,0,0,1,1,0,1,1,1,1,1,0,0,0,0,1,0,1,0,0,1,1,0,1,1,1,0,1,1,1,1,0,1,0,1,1,0,0,0,1,0,1,1,0,1,1,0,1,0,0,1,0,0,1,1,0,0,1,0,0,0,0,1,1,0,1,0,0,0,0,0,0,1,0,1,0,0,0,1,1,1,0,1,0,0,0,0,0,0,1,1,1,0,0,1,0,0,1,1,1,0,1,0,1,1,0,1,1,0,1,0,0,0,1,0,1,1,0,0,1,1,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,1,0,1,0,0,0,1,0,0,1,1,1,0,1,0,0,0,0,1,1,1,0,0,0,0,0,0,1,1,0,1,1,1,0,1,1,1,1,0,0,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,1,0,0,1,1,1,1,1,1,1,1,0,0,1,0,1,1,1,1,0,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,1,1,0,0,0,0,1,0,1,1,1,0,0,0,0,1,0,0,0,1,1,1,0,0,1,0,0,0,0,0,0,0,0,1,1,1,0,1,1,1,0,0,1,1,1,0,1,1,0,1,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,1,1,1,0,0,1,0,0,1,0,0,0,1,1,0,1,1,1,1,1,1,1,0,0,0,0,0,1,1,0,0,1,1,1,0,0,0,1,0,1,1,0,0,1,1,0,0,1,0,1,1,1,0,0,1,0,1,1,0,1,1,0,0,1,0,1,0,0,1,0,0,1,0,1,1,1,0,0,1,1,0,1,0,1,0,0,1,1,0,1,1,1,1,0,0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,1,0,1,1,0,1,1,0,0,0,1,0,1,1,0,1,1,0,1,1,1,0,1,1,1,1,1,0,0,1,1,1,0,0,1,0,1,1,0,1,1,0,0,1,0,1,1,0,0,0,1,1,1,1,0,1,1,0,0,0,1,1,1,1,0,1,1,1,1,0,0,1,0,0,0,0,0,1,1,0,1,1,1,0,0,0,1,0,1,1,1,0,1,0,0,1,0,0,1,1,1,1,1,1,1,1,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,1,1,0,1,1,0,0,1,0,1,0,0,0,1,1,1,1,1,1,1,1,1,0,1,0,1,1,1,0,1,0,1,1,0,0,0,1,0,1,0,0,0,1,1,1,0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,1,0,1,1,1,1,1,1,0,1,1,0,0,1,0,0,1,1,0,1,1,0,1,1,1,0,1,0,0,1,1,0,0,1,0,1,0,0,1,1,0,0,0,0,1,0,0,0,1,1,0,0,1,1,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,1,0,1,1,1,0,0,1,1,0,0,0,1,0,1,1,1,0,0,0,1,1,1,1,1,0,1,0,1,1,0,0,1,1,0,0,0,0,1,0,0,1,1,0,1,1,1,1,1,0,1,0,0,1,0,1,1,0,0,0,1,1,1,1,1,1,1,1,1,0,1,0,1,0,1,1,1,0,1,1,0,0,1,0,1,0,0,0,1,1,0,1,1,0,1,1,1,0,0,0,1,1,1,1,0,1,0,1,0,0,1,0,1,0,1,0,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,0,0,1,0,1,1,1,1,0,0,0,0,0,1,0,1,1,0,1,0,1,0,0,0,0,1,0,1,1,1,1,0,1,0,0,1,0,1,0,1,1,0,0,0,1,1,1,1,1,0,0,1,0,1,0,0,0,0,0,1,1,1,0,1,1,1,0,0,0,1,1,0,0,1,1,1,1,1,0,0,1,1,0,1,0,0,1,0,1,1,1,1,0,1,0,0,1,1,0,1,1,0,0,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,0,1,0,1,1,0,0,1,1,0,0,0,1,0,0,1,1,0,0,0,0,0,1,0,0,0,0,1,1,1,1,0,0,0,1,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,1,0,0,1,0,1,0,0,0,0,1,0,0,0,0,1,0,1,0,1,0,1,0,1,1,1,0,0,0,1,0,0,0,0,1,0,0,0,1,1,1,0,1,1,1,0,0,0,1,0,1,0,0,0,0,0,1,1,1,0,1,1,0,0,1,1,1,0,1,0,1,0,1,1,1,0,0,0,0,0,1,1,1,1,1,0,0,1,1,0,0,0,1,1,0,0,1,0,1,1,1,0,0,1,1,1,0,0,0,0,0,0,0,1,1,1,1,0,0,0,1,1,1,1,0,1,0,0,1,0,0,1,0,1,0,0,1,1,1,1,0,0,1,0,1,1,1,1,0,0,1,1,0,0,1,0,0,0,1,1,1,0,1,1,0,1,1,0,0,1,0,0,0,0,1,0,0,1,0,1,0,1,0,1,0,1,1,0,1,0,0,0,0,1,1,0,1,0,1,1,0,0,0,0,0,1,1,0,0,1,1,0,0,1,1,0,0,0,0,0,1,0,1,0,1,1,1,0,1,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1,0,0,1,1,0,1,1,0,0,0,1,1,0,1,1,1,0,0,1,0,0,0,0,0,1,1,1,0,1,0,0,1,1,1,1,1,1,1,0,0,0,1,1,0,0,1,0,1,1,0,0,0,1,0,0,1,1,0,0,0,0,0,1,0,0,1,0,0,1,0,1,1,1,0,1,1,1,0,0,1,0,1,1,1,1,0,1,0,0,0,1,0,0,1,0,1,1,1,1,0,1,0,0,0,1,1,1,1,1,0,1,0,0,0,1,1,0,0,0,0,1,1,1,0,0,1,1,0,0,1,1,1,1,0,0,0,1,1,0,1,1,0,0,1,0,0,1,0,0,1,1,1,0,0,1,0,0,0,1,0,1,0,0,0,0,1,0,0,0,1,1,1,1,0,1,1,1,0,0,1,1,0,0,0,0,0,1,0,1,1,1,0,1,0,1,1,0,0,1,1,1,0,0,1,0,1,1,0,0,1,0,1,1,1,0,1,1,0,1,0,0,0,0,0,1,0,0,1,1,0,0,0,0,0,1,0,1,1,0,1,1,1,0,1,1,1,1,1,0,1,0,1,1,1,1,1,0,0,0,0,1,1,1,1,1,0,0,1,0,1,1,1,1,0,1,1,0,0,1,1,0,1,0,0,0,0,0,1,0,0,1,1,1,0,1,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,0,0,1,0,0,1,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,1,1,0,1,1,0,0,1,0,0,1,0,0,0,1,1,0,0,0,0,1,1,1,0,0,0,1,0,1,1,1,1,0,0,0,0,0,1,1,1,1,1,0,1,0,1,1,0,1,1,1,1,0,0,0,1,1,0,1,1,1,0,0,0,0,1,0,0,1,0,1,0,0,1,0,0,0,1,0,1,0,1,0,1,1,1,0,1,0,0,1,0,0,0,1,1,0,0,0,1,1,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,1,0,1,1,0,1,0,1,1,0,1,0,0,1,1,1,1,0,0,1,1,1,1,1,0,0,1,0,1,0,0,1,0,1,0,1,1,1,0,1,0,0,0,0,1,1,1,1,0,0,0,1,1,1,0,1,0,1,0,1,1,0,1,0,0,1,0,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,1,0,1,1,1,1,0,1,1,0,1,1,1,0,1,0,0,1,0,0,1,1,0,1,0,0,0,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,0,1,0,0,0,1,1,1,1,1,0,0,0,0,1,0,0,0,0,1,0,1,0,0,0,1,1,1,0,1,1,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,1,0,1,1,1,0,1,1,0,1,1,0,0,0,1,1,1,1,1,1,0,1,0,0,1,1,1,0,0,0,0,1,0,1,1,0,1,1,1,0,0,0,1,0,0,1,0,1,1,0,1,0,0,0,0,1,0,0,1,1,1,1,0,0,1,1,0,1,1,0,0,1,1,0,1,0,1,1,1,0,0,0,0,0,1,0,1,1,0,1,1,1,0,1,0,1,0,0,1,1,1,0,0,0,0,1,0,0,1,1,1,0,1,0,1,0,1,0,0,0,1,0,1,0,1,0,0,1,0,0,1,1,1,1,0,1,0,0,1,1,1,1,0,0,1,1,1,0,0,1,0,1,1,0,1,1,1,0,0,1,1,1,0,1,1,0,0,1,0,0,0,1,1,1,1,0,1,0,0,0,1,0,1,1,1,1,1,1,0,1,1,0,1,0,1,1,1,0,1,1,0,1,1,1,1,0,0,0,1,0,0,0,1,0,0,1,1,0,1,0,0,0,0,0,1,1,0,1,1,0,0,1,0,1,0,1,1,0,1,1,0,1,1,1,0,1,0,1,0,1,0,0,0,0,0,1,1,0,0,1,1,1,1,0,1,0,0,1,1,0,0,1,0,0,0,1,1,1,0,0,1,1,1,0,0,0,0,1,1,1,1,0,0,1,0,0,1,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,1,1,0,1,1,1,1,1,1,0,0,1,0,1,1,1,1,1,1,1,1,0,1,0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,1,1,0,1,1,0,0,0,0,0,1,1,0,1,1,1,1,0,0,1,1,0,1,0,1,0,0,0,0,0,1,0,1,0,1,1,1,0,1,0,0,0,1,0,1,0,1,0,1,0,1,0,0,1,0,0,1,0,0,0,1,0,0,0,0,1,0,0,0,1,1,0,0,1,1,1,1,1,0,0,1,0,1,1,0,0,1,1,1,0,0,0,1,0,0,1,1,0,0,0,0,1,1,0,1,1,1,1,0,0,0,1,1,0,1,1,1,0,1,1,0,0,1,0,0,1,1,1,0,0,1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,1,0,1,0,0,1,0,1,1,1,1,0,1,0,0,0,0,1,0,1,1,1,0,1,0,1,0,1,1,0,1,1,1,0,0,0,0,1,1,0,0,1,1,0,0,0,0,1,0,1,1,0,0,0,1,1,0,0,1,0,0,0,1,0,1,1,1,0,1,0,0,1,0,0,1,1,0,0,0,1,0,1,1,1,1,1,1,0,1,0,0,1,1,0,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,0,1,1,1,1,1,1,0,1,0,0,0,1,0,1,0,1,0,0,1,1,0,1,1,1,1,1,1,0,1,0,1,0,0,0,1,0,0,1,0,0,1,1,1,1,0,0,1,1,0,1,0,0,0,1,0,0,1,1,0,0,1,1,1,1,1,1,0,0,1,0,0,1,1,0,1,1,0,0,0,1,1,0,1,0,0,0,1,0,0,1,0,0,0,1,1,1,1,1,0,0,1,1,0,0,1,0,0,0,1,0,0,0,1,0,1,1,0,0,0,1,0,0,1,0,1,0,0,0,0,0,1,1,1,0,0,1,0,1,1,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,1,0,0,1,0,1,1,1,0,1,1,1,0,0,0,1,0,0,1,0,0,0,0,1,0,1,0,0,0,0,0,1,1,1,0,1,0,0,0,0,0,1,1,1,1,0,1,0,1,1,0,0,1,0,0,1,1,0,1,0,1,1,0,0,0,0,0,0,1,1,1,0,1,0,0,1,0,0,0,0,1,1,0,1,0,0,0,0,1,0,1,1,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,0,1,1,0,1,1,1,0,1,0,0,1,0,0,0,1,1,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,1,1,1,1,0,0,1,1,1,1,1,1,1,0,0,1,0,1,0,1,1,1,0,1,1,1,1,0,1,0,0,1,1,0,0,0,1,0,1,0,0,1,0,0,1,0,0,0,0,0,1,0,0,1,1,0,0,1,1,0,1,0,1,1,0,0,1,1,0,0,1,1,1,1,1,0,0,0,0,0,1,0,1,1,0,0,0,1,0,0,0,0,0,0,1,1,0,1,1,1,0,1,0,0,1,0,1,0,0,1,1,1,0,0,0,1,1,1,1,0,0,0,1,1,1,0,1,0,1,1,0,0,0,1,1,1,1,0,1,1,1,0,1,1,0,0,0,0,0,1,1,1,1,0,1,0,1,0,0,1,0,1,1,0,1,1,0,1,0,0,1,1,0,1,0,0,0,1,0,1,0,0,1,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,1,0,1,1,0,1,1,0,0,0,1,1,1,1,0,0,1,0,1,0,0,1,1,0,1,0,1,1,1,1,1,0,0,1,1,1,0,1,1,0,0,1,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,1,0,0,1,1,1,1,0,0,0,1,0,0,0,1,1,0,1,0,1,0,0,1,0,0,0,1,1,1,1,1,0,0,1,0,1,1,0,0,0,0,1,1,0,0,0,1,0,0,0,0,0,0,1,1,0,1,0,1,1,0,1,1,1,1,0,1,0,0,1,1,0,0,0,1,0,0,1,1,1,1,1,1,1,1,0,0,1,1,1,1,0,0,1,1,1,1,1,1,0,0,1,1,1,0,1,0,0,1,0,0,1,1,0,0,1,0,1,0,0,0,1,1,1,0,1,1,1,0,0,1,0,0,0,0,1,0,1,0,0,1,1,0,1,1,1,1,0,1,0,0,0,1,0,0,0,1,1,0,1,1,0,1,1,1,1,0,1,1,1,0,0,0,1,1,0,1,1,0,1,0,1,0,1,1,1,1,1,1,1,0,1,0,1,1,];
var gg_b = "1671030001/";

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
    if (rr["haswebp"] == 0 || rr["haswebp"] == null) subdomainx = "b";
    x = parseInt(postfix[2] + postfix[0] + postfix[1], 16);
    if (!isNaN(x)) {
      if (x < 4096) subdomainx = String.fromCharCode(97 + gg_m[x]);
      else subdomainx = String.fromCharCode(97 + 0);
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
