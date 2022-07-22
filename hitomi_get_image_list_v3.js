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
var o = 1;
switch (g) {
case 334:
case 3619:
case 71:
case 441:
case 847:
case 4037:
case 3636:
case 3538:
case 1347:
case 3015:
case 1743:
case 2481:
case 159:
case 1532:
case 2726:
case 1456:
case 243:
case 744:
case 413:
case 4002:
case 3665:
case 1570:
case 2178:
case 2775:
case 937:
case 449:
case 1857:
case 276:
case 2004:
case 2935:
case 1109:
case 1165:
case 2653:
case 1422:
case 689:
case 694:
case 3176:
case 3684:
case 2461:
case 1985:
case 2164:
case 31:
case 4031:
case 1542:
case 898:
case 1863:
case 365:
case 2070:
case 2875:
case 1460:
case 938:
case 1920:
case 1897:
case 3509:
case 2816:
case 83:
case 1023:
case 379:
case 1929:
case 3029:
case 3277:
case 1253:
case 3829:
case 7:
case 2169:
case 875:
case 1149:
case 3815:
case 1866:
case 227:
case 693:
case 148:
case 2343:
case 318:
case 3840:
case 3207:
case 974:
case 2127:
case 2326:
case 951:
case 3383:
case 3377:
case 4007:
case 34:
case 3514:
case 3065:
case 1963:
case 3393:
case 3051:
case 1366:
case 622:
case 580:
case 3053:
case 2267:
case 2384:
case 3614:
case 3429:
case 2711:
case 3083:
case 1962:
case 652:
case 2956:
case 4068:
case 2390:
case 3488:
case 3396:
case 214:
case 3736:
case 3108:
case 2954:
case 1565:
case 335:
case 269:
case 1074:
case 636:
case 2895:
case 817:
case 3853:
case 3226:
case 73:
case 1969:
case 4048:
case 493:
case 2223:
case 1850:
case 3958:
case 1453:
case 1506:
case 2005:
case 728:
case 3494:
case 3531:
case 2328:
case 867:
case 2572:
case 2179:
case 2441:
case 3326:
case 3934:
case 1646:
case 2789:
case 2843:
case 1629:
case 3385:
case 4065:
case 87:
case 2625:
case 600:
case 392:
case 3092:
case 2072:
case 2536:
case 1657:
case 186:
case 1404:
case 2555:
case 3610:
case 1587:
case 1413:
case 642:
case 1539:
case 3869:
case 2583:
case 2984:
case 3367:
case 347:
case 982:
case 1320:
case 1195:
case 2007:
case 3616:
case 3796:
case 1524:
case 1392:
case 3272:
case 1267:
case 1521:
case 602:
case 1973:
case 1047:
case 2728:
case 2744:
case 1492:
case 3416:
case 2425:
case 1441:
case 133:
case 3731:
case 3191:
case 2191:
case 2090:
case 1363:
case 2317:
case 3890:
case 2414:
case 3758:
case 4092:
case 3343:
case 3292:
case 3828:
case 1091:
case 3056:
case 730:
case 2683:
case 3844:
case 2123:
case 2848:
case 2094:
case 9:
case 651:
case 3524:
case 3730:
case 2446:
case 1457:
case 877:
case 1374:
case 3271:
case 479:
case 2380:
case 904:
case 455:
case 3975:
case 2910:
case 75:
case 945:
case 1429:
case 3826:
case 3620:
case 1272:
case 3737:
case 1029:
case 476:
case 2661:
case 1995:
case 246:
case 3727:
case 259:
case 3659:
case 3687:
case 2703:
case 3489:
case 1344:
case 2335:
case 1662:
case 3470:
case 394:
case 2234:
case 3135:
case 197:
case 260:
case 2239:
case 1760:
case 2146:
case 1905:
case 2577:
case 2868:
case 470:
case 2067:
case 3232:
case 2392:
case 61:
case 1323:
case 3310:
case 2270:
case 1322:
case 914:
case 3346:
case 358:
case 765:
case 2748:
case 950:
case 396:
case 2675:
case 2374:
case 3566:
case 2668:
case 633:
case 3442:
case 4058:
case 481:
case 430:
case 3421:
case 2719:
case 1381:
case 2682:
case 2778:
case 94:
case 1719:
case 3173:
case 1786:
case 1445:
case 3641:
case 3062:
case 179:
case 4055:
case 1853:
case 1533:
case 1096:
case 3469:
case 559:
case 2023:
case 515:
case 1419:
case 3718:
case 923:
case 3510:
case 2739:
case 1612:
case 3381:
case 3969:
case 1797:
case 2330:
case 2301:
case 2853:
case 3626:
case 1192:
case 902:
case 2291:
case 3080:
case 3460:
case 3502:
case 3939:
case 2773:
case 3435:
case 860:
case 930:
case 3194:
case 2920:
case 1315:
case 1072:
case 2188:
case 1485:
case 2196:
case 262:
case 3919:
case 3994:
case 4032:
case 2707:
case 3766:
case 1018:
case 2845:
case 3495:
case 29:
case 1901:
case 249:
case 1832:
case 1941:
case 857:
case 2031:
case 604:
case 3533:
case 3845:
case 2542:
case 1343:
case 2147:
case 3527:
case 1573:
case 3351:
case 748:
case 2975:
case 1685:
case 2864:
case 815:
case 612:
case 1952:
case 2738:
case 630:
case 3513:
case 2075:
case 539:
case 2151:
case 1640:
case 2337:
case 1351:
case 2478:
case 1051:
case 2568:
case 3497:
case 947:
case 2473:
case 3325:
case 371:
case 3492:
case 2793:
case 1000:
case 3703:
case 1490:
case 3423:
case 656:
case 1717:
case 2805:
case 1982:
case 1911:
case 2571:
case 637:
case 38:
case 3417:
case 362:
case 42:
case 2287:
case 2627:
case 1618:
case 1458:
case 1924:
case 3240:
case 1839:
case 2155:
case 2276:
case 2085:
case 3713:
case 3646:
case 1981:
case 1813:
case 2184:
case 710:
case 4036:
case 3327:
case 4089:
case 113:
case 1078:
case 973:
case 2030:
case 1718:
case 2014:
case 2922:
case 1896:
case 723:
case 843:
case 698:
case 229:
case 2652:
case 2595:
case 1945:
case 1311:
case 675:
case 1607:
case 697:
case 2427:
case 1329:
case 574:
case 3951:
case 873:
case 104:
case 3767:
case 2052:
case 3285:
case 451:
case 3448:
case 3864:
case 282:
case 2091:
case 2804:
case 1520:
case 2423:
case 2252:
case 1426:
case 1147:
case 4010:
case 2874:
case 1411:
case 3215:
case 2321:
case 1008:
case 3987:
case 1621:
case 1368:
case 3693:
case 807:
case 3142:
case 3246:
case 2786:
case 3199:
case 2938:
case 373:
case 2230:
case 3434:
case 1480:
case 363:
case 3358:
case 562:
case 3075:
case 3081:
case 957:
case 3525:
case 3644:
case 2826:
case 3239:
case 2827:
case 3504:
case 169:
case 3954:
case 2465:
case 1031:
case 3810:
case 58:
case 3013:
case 2633:
case 1536:
case 125:
case 3995:
case 442:
case 3568:
case 3624:
case 48:
case 775:
case 3719:
case 2617:
case 2339:
case 1949:
case 1139:
case 3757:
case 1153:
case 1649:
case 2083:
case 3201:
case 1785:
case 1057:
case 3993:
case 309:
case 3162:
case 2605:
case 753:
case 661:
case 2483:
case 2767:
case 1912:
case 423:
case 3117:
case 2903:
case 1388:
case 2467:
case 1980:
case 2588:
case 3360:
case 2579:
case 3908:
case 3165:
case 3041:
case 100:
case 2338:
case 3160:
case 3084:
case 2243:
case 2630:
case 3440:
case 966:
case 1522:
case 2985:
case 1473:
case 1698:
case 2592:
case 2513:
case 2570:
case 871:
case 1040:
case 2609:
case 2882:
case 3490:
case 1405:
case 3446:
case 3364:
case 2419:
case 30:
case 994:
case 603:
case 192:
case 814:
case 2244:
case 2909:
case 3153:
case 41:
case 3088:
case 3726:
case 275:
case 868:
case 291:
case 3623:
case 833:
case 2421:
case 3894:
case 2136:
case 3496:
case 3374:
case 3120:
case 1054:
case 1541:
case 3984:
case 173:
case 2429:
case 2705:
case 1861:
case 216:
case 579:
case 1015:
case 3481:
case 293:
case 2747:
case 1390:
case 2261:
case 3111:
case 469:
case 1756:
case 2578:
case 1434:
case 2718:
case 2141:
case 509:
case 3357:
case 2877:
case 2780:
case 3613:
case 3193:
case 2878:
case 415:
case 3643:
case 1216:
case 1161:
case 1070:
case 1221:
case 3948:
case 200:
case 2172:
case 1844:
case 3384:
case 3228:
case 4030:
case 2133:
case 1158:
case 2736:
case 92:
case 3526:
case 696:
case 429:
case 1818:
case 2058:
case 739:
case 23:
case 2941:
case 3264:
case 21:
case 44:
case 2366:
case 1471:
case 1156:
case 916:
case 161:
case 3565:
case 704:
case 2027:
case 3989:
case 3389:
case 2977:
case 2010:
case 1511:
case 3519:
case 643:
case 3409:
case 3005:
case 2349:
case 2893:
case 4078:
case 1819:
case 1014:
case 3047:
case 3115:
case 1420:
case 1224:
case 2200:
case 770:
case 894:
case 217:
case 2859:
case 2105:
case 1217:
case 3661:
case 2281:
case 2690:
case 786:
case 3552:
case 760:
case 3764:
case 779:
case 3930:
case 4019:
case 1723:
case 3801:
case 3170:
case 2458:
case 3618:
case 666:
case 2455:
case 2539:
case 2224:
case 123:
case 383:
case 3701:
case 2182:
case 729:
case 590:
case 408:
case 1116:
case 2821:
case 787:
case 353:
case 1065:
case 2112:
case 3043:
case 3369:
case 2299:
case 2945:
case 1947:
case 827:
case 715:
case 3298:
case 4069:
case 4000:
case 440:
case 1301:
case 2245:
case 3537:
case 540:
case 411:
case 2342:
case 475:
case 3020:
case 4062:
case 3190:
case 797:
case 3825:
case 1477:
case 1502:
case 2201:
case 456:
case 3066:
case 1611:
case 568:
case 1757:
case 3561:
case 2114:
case 978:
case 2946:
case 361:
case 2508:
case 1370:
case 2753:
case 2757:
case 1562:
case 1227:
case 615:
case 2604:
case 2341:
case 3672:
case 3886:
case 1877:
case 412:
case 506:
case 2310:
case 1189:
case 3803:
case 3419:
case 2957:
case 2464:
case 3843:
case 3992:
case 3673:
case 3635:
case 521:
case 3064:
case 2253:
case 2917:
case 2755:
case 3134:
case 3928:
case 213:
case 1661:
case 2177:
case 1060:
case 3250:
case 3122:
case 2634:
case 1605:
case 2022:
case 864:
case 998:
case 2076:
case 3256:
case 2779:
case 1677:
case 2580:
case 771:
case 1339:
case 2764:
case 410:
case 3860:
case 674:
case 4080:
case 1955:
case 3942:
case 400:
case 3259:
case 3414:
case 376:
case 948:
case 2034:
case 2850:
case 121:
case 4091:
case 990:
case 3577:
case 1529:
case 3463:
case 3473:
case 2564:
case 10:
case 2314:
case 466:
case 2043:
case 1442:
case 1305:
case 3221:
case 2138:
case 618:
case 1289:
case 63:
case 2598:
case 1249:
case 2926:
case 164:
case 2300:
case 1655:
case 2991:
case 3976:
case 3997:
case 1092:
case 587:
case 281:
case 4064:
case 1450:
case 1287:
case 3582:
case 3445:
case 1652:
case 922:
case 91:
case 2996:
case 1235:
case 3129:
case 1321:
case 2435:
case 3290:
case 3106:
case 690:
case 2045:
case 2796:
case 1546:
case 3071:
case 2929:
case 2995:
case 617:
case 2042:
case 2431:
case 3138:
case 404:
case 1555:
case 3368:
case 3046:
case 949:
case 1354:
case 896:
case 3119:
case 211:
case 954:
case 794:
case 1787:
case 2649:
case 2904:
case 3740:
case 3104:
case 554:
case 1255:
case 1053:
case 256:
case 3747:
case 1919:
case 2256:
case 2994:
case 3286:
case 2901:
case 2720:
case 2856:
case 837:
case 3541:
case 2990:
case 4039:
case 920:
case 1089:
case 2735:
case 3063:
case 2222:
case 3224:
case 2677:
case 2382:
case 106:
case 1198:
case 4035:
case 1622:
case 2535:
case 889:
case 2666:
case 1187:
case 856:
case 3671:
case 4003:
case 705:
case 1809:
case 2198:
case 3164:
case 3856:
case 1469:
case 3420:
case 2187:
case 2717:
case 2013:
case 3032:
case 859:
case 2442:
case 2153:
case 1254:
case 614:
case 2651:
case 1079:
case 758:
case 4085:
case 2000:
case 2194:
case 2939:
case 1569:
case 1834:
case 3039:
case 184:
case 1763:
case 3099:
case 480:
case 2061:
case 1277:
case 1528:
case 1362:
case 1759:
case 1319:
case 1628:
case 1169:
case 1317:
case 605:
case 3185:
case 601:
case 3042:
case 443:
case 3868:
case 3413:
case 2393:
case 2345:
case 1316:
case 312:
case 1454:
case 1712:
case 2484:
case 2145:
case 1409:
case 129:
case 2510:
case 3301:
case 1378:
case 3827:
case 701:
case 1926:
case 3748:
case 2186:
case 3376:
case 3382:
case 2639:
case 2628:
case 3392:
case 241:
case 1383:
case 2783:
case 1435:
case 2713:
case 3621:
case 1474:
case 279:
case 3482:
case 3832:
case 277:
case 3627:
case 2988:
case 500:
case 1806:
case 182:
case 2432:
case 0:
case 3578:
case 2531:
case 1237:
case 3571:
case 736:
case 4042:
case 194:
case 1294:
case 2386:
case 607:
case 3348:
case 3023:
case 1309:
case 804:
case 2566:
case 538:
case 3274:
case 1279:
case 3002:
case 115:
case 2603:
case 1534:
case 74:
case 1022:
case 3438:
case 3929:
case 2965:
case 3927:
case 3499:
case 528:
case 1827:
case 3780:
case 428:
case 2499:
case 1262:
case 1676:
case 1831:
case 3491:
case 2173:
case 3230:
case 2902:
case 3089:
case 4053:
case 2550:
case 2373:
case 193:
case 1682:
case 1634:
case 3776:
case 1145:
case 1312:
case 3752:
case 3018:
case 2093:
case 327:
case 2643:
case 3172:
case 2477:
case 738:
case 727:
case 2456:
case 344:
case 1942:
case 1327:
case 3574:
case 3974:
case 1313:
case 2656:
case 2762:
case 981:
case 1376:
case 3804:
case 1133:
case 3127:
case 551:
case 646:
case 85:
case 3781:
case 3902:
case 1697:
case 3356:
case 3027:
case 2839:
case 676:
case 1286:
case 3557:
case 3575:
case 2120:
case 534:
case 542:
case 1761:
case 150:
case 417:
case 2303:
case 1681:
case 208:
case 1306:
case 446:
case 3468:
case 26:
case 2054:
case 1043:
case 3379:
case 1601:
case 1406:
case 1352:
case 2665:
case 1777:
case 1101:
case 813:
case 3751:
case 2399:
case 147:
case 1125:
case 3200:
case 1647:
case 2009:
case 1493:
case 1067:
case 2611:
case 2192:
case 1048:
case 3000:
case 62:
case 1515:
case 1639:
case 1740:
case 3683:
case 1102:
case 3462:
case 3161:
case 1020:
case 2095:
case 3596:
case 3428:
case 953:
case 181:
case 3967:
case 3874:
case 2489:
case 471:
case 3124:
case 1137:
case 641:
case 1630:
case 2873:
case 3143:
case 2635:
case 677:
case 1064:
case 2706:
case 2404:
case 1714:
case 3721:
case 1126:
case 2881:
case 1223:
case 331:
case 1292:
case 2372:
case 3863:
case 2226:
case 3422:
case 832:
case 2397:
case 2591:
case 2396:
case 2420:
case 1856:
case 3076:
case 2282:
case 3366:
case 1887:
case 166:
case 2754:
case 1882:
case 2527:
case 3045:
case 2923:
case 2356:
case 3716:
case 1090:
case 295:
case 2263:
case 735:
case 1273:
case 2218:
case 1364:
case 1953:
case 2797:
case 802:
case 3760:
case 1499:
case 3329:
case 2880:
case 3823:
case 1691:
case 820:
case 1957:
case 1407:
case 134:
case 2296:
case 3177:
case 695:
case 1933:
case 3735:
case 1284:
case 1397:
case 2944:
case 672:
case 406:
case 2379:
case 3943:
case 2170:
case 1318:
case 2057:
case 3632:
case 2424:
case 3694:
case 1128:
case 1106:
case 2814:
case 1581:
case 1278:
case 972:
case 3872:
case 8:
case 382:
case 756:
case 3334:
case 1568:
case 1564:
case 848:
case 2074:
case 2569:
case 3181:
case 3884:
case 89:
case 1820:
case 2629:
case 3231:
case 239:
case 1167:
case 1069:
case 508:
case 3964:
case 2927:
case 3312:
case 3835:
case 1749:
case 286:
case 414:
case 3648:
case 1862:
case 838:
case 1236:
case 732:
case 3598:
case 1898:
case 3592:
case 745:
case 782:
case 839:
case 1849:
case 1296:
case 3965:
case 2020:
case 2545:
case 366:
case 3219:
case 2306:
case 3859:
case 3611:
case 692:
case 2597:
case 2657:
case 3639:
case 468:
case 3022:
case 154:
case 3678:
case 345:
case 3154:
case 2876:
case 222:
case 3546:
case 1416:
case 919:
case 2948:
case 1673:
case 1202:
case 3977:
case 3443:
case 2818:
case 3404:
case 2822:
case 1164:
case 2260:
case 1437:
case 2970:
case 2411:
case 2333:
case 3996:
case 1810:
case 1656:
case 3775:
case 1299:
case 1175:
case 3184:
case 1616:
case 1637:
case 3284:
case 3144:
case 798:
case 367:
case 2737:
case 2028:
case 2890:
case 1871:
case 3485:
case 348:
case 330:
case 2751:
case 3011:
case 57:
case 853:
case 2586:
case 1584:
case 131:
case 484:
case 888:
case 2171:
case 2537:
case 882:
case 195:
case 1956:
case 3168:
case 206:
case 497:
case 2723:
case 959:
case 2781:
case 3979:
case 3505:
case 2932:
case 175:
case 1925:
case 3622:
case 1264:
case 3397:
case 300:
case 196:
case 2517:
case 3749:
case 2099:
case 1773:
case 2232:
case 3543:
case 2979:
case 596:
case 3028:
case 3875:
case 2254:
case 1554:
case 1822:
case 68:
case 2982:
case 2053:
case 912:
case 578:
case 2189:
case 1035:
case 2660:
case 3330:
case 586:
case 4027:
case 2156:
case 3010:
case 1932:
case 819:
case 828:
case 846:
case 961:
case 2231:
case 283:
case 205:
case 2116:
case 488:
case 1645:
case 3182:
case 1482:
case 2730:
case 3003:
case 2824:
case 2346:
case 850:
case 2820:
case 1984:
case 472:
case 3690:
case 2972:
case 80:
case 2949:
case 3695:
case 3935:
case 635:
case 616:
case 270:
case 3581:
case 1778:
case 763:
case 3704:
case 1208:
case 3087:
case 3998:
case 1006:
case 2302:
case 3339:
case 2148:
case 3058:
case 1061:
case 3580:
case 1219:
case 3082:
case 2885:
case 2825:
case 1996:
case 1134:
case 1690:
case 2389:
case 2525:
case 3313:
case 401:
case 341:
case 3877:
case 2692:
case 1025:
case 1085:
case 621:
case 296:
case 1510:
case 2642:
case 2278:
case 1075:
case 1993:
case 3794:
case 1585:
case 3410:
case 487:
case 51:
case 3789:
case 1207:
case 3606:
case 70:
case 818:
case 486:
case 655:
case 1739:
case 514:
case 1270:
case 2620:
case 905:
case 3187:
case 960:
case 3150:
case 2225:
case 3322:
case 2648:
case 3077:
case 3906:
case 1263:
case 3941:
case 56:
case 1250:
case 1959:
case 537:
case 1944:
case 3560:
case 764:
case 620:
case 795:
case 809:
case 3634:
case 1836:
case 108:
case 2152:
case 1704:
case 1598:
case 1859:
case 1964:
case 1595:
case 4001:
case 2888:
case 3923:
case 183:
case 2130:
case 3034:
case 647:
case 1904:
case 2012:
case 555:
case 1418:
case 4045:
case 3910:
case 1636:
case 11:
case 2417:
case 2823:
case 2149:
case 1178:
case 1212:
case 2950:
case 1624:
case 109:
case 1675:
case 146:
case 492:
case 1812:
case 3647:
case 2472:
case 3159:
case 2227:
case 76:
case 489:
case 1172:
case 565:
case 1396:
case 1916:
case 143:
case 1614:
case 3139:
case 297:
case 2817:
case 1045:
case 425:
case 549:
case 3847:
case 2019:
case 2969:
case 2811:
case 3698:
case 2107:
case 2785:
case 2891:
case 2819:
case 743:
case 178:
case 459:
case 2428:
case 2921:
case 774:
case 1808:
case 4072:
case 2746:
case 2685:
case 2082:
case 2678:
case 4054:
case 302:
case 4017:
case 2987:
case 2233:
case 1593:
case 2722:
case 3761:
case 1098:
case 3518:
case 2086:
case 1592:
case 3932:
case 1481:
case 891:
case 3871:
case 2084:
case 25:
case 2801:
case 711:
case 219:
case 3025:
case 2596:
case 3175:
case 3834:
case 975:
case 1037:
case 2892:
case 1285:
case 2758:
case 844:
case 3741:
case 648:
case 1884:
case 1951:
case 3777:
case 3195:
case 3151:
case 2546:
case 2498:
case 3008:
case 1094:
case 2654:
case 1026:
case 1946:
case 2807:
case 2293:
case 53:
case 15:
case 1715:
case 3881:
case 2815:
case 3391:
case 968:
case 2558:
case 2068:
case 1464:
case 2438:
case 2563:
case 2658:
case 3125:
case 307:
case 3600:
case 1261:
case 3249:
case 350:
case 2212:
case 3107:
case 834:
case 1540:
case 979:
case 3100:
case 2375:
case 3820:
case 1563:
case 3999:
case 2033:
case 3898:
case 4075:
case 445:
case 2676:
case 1514:
case 3289:
case 1627:
case 2331:
case 3068:
case 3680:
case 3451:
case 1765:
case 2443:
case 2445:
case 3743:
case 2733:
case 2964:
case 746:
case 1530:
case 3355:
case 2934:
case 1889:
case 3128:
case 611:
case 3905:
case 1229:
case 2495:
case 2907:
case 1307:
case 1152:
case 2324:
case 2686:
case 2769:
case 1846:
case 1907:
case 1705:
case 3899:
case 1371:
case 1815:
case 977:
case 2357:
case 3333:
case 3982:
case 46:
case 1007:
case 503:
case 2311:
case 4087:
case 158:
case 1334:
case 2981:
case 1095:
case 3663:
case 2496:
case 2529:
case 2284:
case 1199:
case 558:
case 4018:
case 2410:
case 563:
case 2771:
case 570:
case 2165:
case 3625:
case 791:
case 50:
case 1936:
case 2659:
case 1505:
case 496:
case 584:
case 3841:
case 1041:
case 752:
case 691:
case 2716:
case 1892:
case 3691:
case 1036:
case 654:
case 3733:
case 1769:
case 895:
case 1567:
case 1345:
case 3254:
case 2466:
case 1943:
case 3102:
case 499:
case 3137:
case 3373:
case 536:
case 2699:
case 189:
case 1885:
case 1814:
case 2183:
case 2548:
case 3484:
case 1958:
case 2209:
case 18:
case 2040:
case 946:
case 3001:
case 4050:
case 3465:
case 3287:
case 2297:
case 592:
case 589:
case 3774:
case 2265:
case 1976:
case 3968:
case 2166:
case 825:
case 3708:
case 1088:
case 796:
case 910:
case 3268:
case 308:
case 3078:
case 1917:
case 2480:
case 2886:
case 627:
case 3654:
case 3403:
case 2727:
case 1935:
case 1526:
case 3521:
case 4073:
case 2181:
case 1696:
case 2180:
case 2858:
case 2863:
case 1194:
case 3855:
case 681:
case 3378:
case 3283:
case 783:
case 319:
case 2865:
case 360:
case 2829:
case 1384:
case 1402:
case 722:
case 3365:
case 3507:
case 1162:
case 4014:
case 3210:
case 168:
case 3253:
case 13:
case 1355:
case 498:
case 303:
case 1900:
case 911:
case 3700:
case 3388:
case 419:
case 494:
case 2587:
case 3660:
case 3539:
case 2701:
case 2524:
case 667:
case 3101:
case 1549:
case 3630:
case 2139:
case 3675:
case 700:
case 1940:
case 3220:
case 1847:
case 215:
case 3431:
case 176:
case 1361:
case 1288:
case 1380:
case 1789:
case 1908:
case 747:
case 3072:
case 996:
case 187:
case 145:
case 2534:
case 1572:
case 191:
case 245:
case 4034:
case 3511:
case 3315:
case 901:
case 1121:
case 1970:
case 1010:
case 66:
case 3666:
case 3576:
case 3157:
case 3759:
case 2475:
case 3950:
case 1934:
case 1794:
case 1050:
case 2759:
case 1176:
case 3642:
case 151:
case 1975:
case 1071:
case 2494:
case 333:
case 1508:
case 2601:
case 1276:
case 2459:
case 118:
case 1560:
case 3799:
case 388:
case 1119:
case 2621:
case 2264:
case 1509:
case 1024:
case 3857:
case 2594:
case 1779:
case 3612:
case 2918:
case 3955:
case 3212:
case 1783:
case 2504:
case 174:
case 2251:
case 512:
case 2992:
case 2844:
case 2561:
case 2405:
case 1971:
case 2632:
case 2073:
case 3873:
case 3252:
case 2512:
case 1342:
case 3563:
case 2847:
case 1001:
case 1851:
case 2364:
case 3223:
case 3878:
case 1583:
case 1259:
case 3458:
case 2430:
case 3818:
case 1328:
case 4057:
case 1077:
case 1668:
case 1873:
case 2352:
case 332:
case 204:
case 322:
case 126:
case 624:
case 1463:
case 781:
case 1191:
case 1203:
case 3734:
case 2614:
case 2457:
case 2319:
case 1921:
case 3591:
case 255:
case 2398:
case 4038:
case 127:
case 2394:
case 2667:
case 268:
case 1393:
case 1275:
case 3604:
case 462:
case 3426:
case 3472:
case 3772:
case 1883:
case 2247:
case 2749:
case 999:
case 1398:
case 4093:
case 1909:
case 2274:
case 1127:
case 1375:
case 2554:
case 929:
case 1080:
case 3822:
case 3851:
case 1686:
case 1803:
case 988:
case 1238:
case 317:
case 52:
case 2552:
case 2413:
case 1281:
case 649:
case 2741:
case 1791:
case 4:
case 3270:
case 2724:
case 908:
case 3650:
case 1478:
case 707:
case 883:
case 3714:
case 1688:
case 2791:
case 381:
case 2928:
case 1135:
case 2782:
case 1516:
case 2908:
case 2228:
case 3093:
case 385:
case 1938:
case 325:
case 3447:
case 2623:
case 3555:
case 3916:
case 141:
case 2924:
case 1590:
case 564:
case 571:
case 810:
case 3085:
case 935:
case 140:
case 3912:
case 2259:
case 3503:
case 2943:
case 2540:
case 2671:
case 4021:
case 2998:
case 3903:
case 1107:
case 2967:
case 1644:
case 3931:
case 3372:
case 77:
case 619:
case 1338:
case 2307:
case 3722:
case 4020:
case 751:
case 321:
case 3770:
case 625:
case 673:
case 4025:
case 3402:
case 2412:
case 3306:
case 3821:
case 749:
case 380:
case 3031:
case 3130:
case 248:
case 2101:
case 1013:
case 2065:
case 887:
case 2144:
case 3241:
case 4083:
case 453:
case 1860:
case 2842:
case 2161:
case 1895:
case 3959:
case 2884:
case 4052:
case 2468:
case 1265:
case 3208:
case 416:
case 3225:
case 3477:
case 1890:
case 1724:
case 610:
case 223:
case 921:
case 2039:
case 1725:
case 1768:
case 4006:
case 1150:
case 1461:
case 1387:
case 292:
case 2846:
case 2195:
case 3536:
case 4090:
case 1875:
case 1110:
case 788:
case 1732:
case 3637:
case 3681:
case 778:
case 858:
case 2828:
case 2294:
case 306:
case 851:
case 3167:
case 1385:
case 913:
case 119:
case 890:
case 525:
case 403:
case 2434:
case 82:
case 865:
case 3293:
case 2487:
case 3152:
case 805:
case 623:
case 3920:
case 3467:
case 346:
case 1225:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1658451601/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,1,1,0,1,1,0,0,0,0,0,1,0,1,0,1,1,0,1,1,0,1,0,1,0,0,1,1,0,0,0,1,1,0,1,1,1,0,1,1,0,0,1,0,1,0,1,0,1,0,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,1,0,1,0,0,1,0,0,0,0,0,1,1,0,1,0,0,1,0,1,0,1,0,1,0,0,1,0,1,1,1,1,1,0,1,1,1,0,1,0,1,0,0,1,1,1,0,1,0,1,1,0,0,1,0,1,0,1,0,0,0,1,0,1,0,1,0,0,1,1,1,1,1,0,0,1,0,1,0,0,0,0,1,0,0,1,1,0,1,1,1,0,0,1,0,1,1,0,1,0,1,0,0,1,1,1,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,1,1,0,1,1,1,0,0,0,1,0,1,1,0,1,0,0,0,0,0,1,0,1,1,0,0,1,1,1,0,1,0,1,1,1,1,1,1,1,1,1,0,1,0,1,0,1,0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,0,1,0,1,1,1,1,1,0,0,0,1,1,1,1,0,0,0,1,0,1,0,0,0,1,1,0,1,1,1,1,0,0,0,1,0,0,0,1,1,0,1,0,0,1,1,0,0,0,0,1,1,0,1,1,1,1,0,0,0,1,0,0,1,1,0,1,0,1,1,0,0,0,0,0,0,1,1,1,1,1,0,1,1,0,0,0,0,0,1,0,1,1,0,1,1,1,1,0,1,0,0,0,0,1,0,0,0,1,1,1,0,1,0,1,1,0,1,1,0,0,0,0,0,1,0,1,1,0,1,1,1,0,1,0,1,0,1,1,1,0,0,1,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,1,0,1,1,1,0,1,0,1,1,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,1,0,0,1,1,0,1,0,1,0,1,0,0,1,1,0,1,1,0,1,1,1,0,1,0,0,0,0,0,1,1,0,0,1,1,0,0,0,1,1,0,1,0,0,0,0,1,1,0,0,0,1,0,0,0,0,0,1,1,0,1,1,0,1,0,0,1,1,0,1,0,0,1,1,1,1,1,0,1,1,1,0,1,1,0,1,1,1,1,1,0,1,0,0,0,0,0,1,0,1,1,1,1,1,1,0,1,0,1,1,0,0,1,1,0,0,1,1,0,0,0,0,1,1,0,1,0,0,1,1,0,1,1,1,0,0,0,1,1,1,0,1,0,0,1,0,0,1,0,1,1,1,0,1,1,1,0,0,0,0,0,0,1,0,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,1,1,0,1,0,0,0,1,1,1,0,0,0,1,1,0,0,0,0,1,0,0,1,0,0,0,1,1,1,1,0,1,1,1,1,0,0,1,1,1,1,0,0,0,0,0,0,1,1,1,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,0,1,0,1,1,0,0,1,1,1,0,1,1,1,1,1,1,0,0,1,1,1,0,0,0,0,1,0,1,1,0,0,1,0,0,1,1,1,0,0,0,0,0,0,0,1,0,0,0,1,1,0,1,0,1,0,1,1,0,0,0,1,1,1,1,0,0,1,1,0,0,1,1,0,0,1,0,0,0,1,1,0,0,0,1,1,0,1,1,0,0,0,0,0,1,1,1,0,1,0,0,1,0,1,0,0,1,1,0,0,0,1,0,0,0,0,1,1,1,1,0,1,0,0,1,1,1,0,0,0,1,1,0,0,0,1,1,1,0,0,1,0,0,0,1,0,0,1,0,1,1,0,0,0,0,0,1,1,1,0,0,1,0,0,1,1,0,1,0,1,0,1,0,1,1,1,1,0,0,1,1,1,0,0,0,0,0,1,1,0,0,0,1,0,1,1,0,0,1,0,0,1,1,0,1,0,0,0,0,0,1,0,1,1,0,0,0,0,0,1,1,1,1,1,0,0,1,1,1,1,0,1,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,1,0,0,1,1,0,1,0,0,0,1,1,1,1,0,1,0,1,1,1,0,0,0,0,1,0,0,0,1,0,0,1,1,1,1,1,0,1,0,1,1,1,0,1,0,1,0,0,0,0,1,1,1,1,0,0,0,1,0,1,1,0,0,0,1,1,0,1,0,1,0,0,0,0,0,1,1,0,1,0,1,1,1,0,0,0,1,1,0,0,1,0,1,0,1,0,0,1,0,0,1,0,0,1,1,0,1,1,0,0,1,1,0,0,1,0,1,0,0,0,0,1,0,0,1,0,0,0,0,1,1,1,1,0,1,1,0,0,0,0,0,1,0,0,0,1,0,1,1,0,0,1,1,1,0,0,1,0,0,1,1,1,1,1,0,1,1,0,1,0,1,1,1,0,0,0,0,1,1,1,1,0,0,0,1,0,1,0,1,1,1,1,1,0,1,0,1,0,0,1,0,0,1,1,0,1,0,1,1,0,0,1,0,0,1,0,1,0,1,1,0,1,1,0,0,1,0,1,1,1,1,1,1,1,1,0,1,0,1,0,0,1,0,0,1,1,0,0,1,1,0,0,1,1,1,0,0,1,1,1,0,1,1,1,0,0,1,0,1,0,1,0,0,0,1,0,1,0,1,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,1,1,0,0,0,1,1,1,0,1,0,0,0,0,0,1,0,1,1,0,1,0,0,1,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,1,1,0,1,0,1,0,1,1,0,1,0,1,1,1,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,1,1,1,0,1,1,1,0,0,1,1,0,0,0,0,1,0,1,1,1,0,0,1,0,0,1,1,1,1,1,0,0,0,0,1,0,1,0,1,0,0,1,1,0,0,0,1,0,1,0,0,1,0,0,0,1,0,0,1,0,1,0,0,1,1,0,0,0,1,1,1,0,1,0,0,0,0,1,0,1,0,1,0,1,1,0,1,0,0,0,1,0,1,1,1,0,1,1,0,1,1,1,1,0,0,1,0,1,1,1,0,0,1,1,0,1,1,1,1,0,1,1,0,0,1,0,0,0,1,0,0,1,0,0,1,1,1,1,0,1,0,1,0,0,1,1,0,0,1,0,0,0,1,1,0,1,1,1,1,0,1,0,0,1,1,1,1,1,0,1,1,0,1,1,0,0,1,0,0,0,0,1,1,0,0,0,1,1,1,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,1,1,0,0,0,0,1,1,1,0,1,1,0,1,1,1,1,0,0,1,1,1,1,0,1,0,0,0,0,1,0,0,0,0,1,0,0,1,1,1,1,1,1,1,0,1,0,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1,1,0,1,1,1,0,1,0,1,1,1,0,0,1,0,1,0,1,0,1,1,0,0,1,0,1,1,0,0,0,0,1,1,1,0,1,0,0,1,0,0,1,1,1,0,0,0,0,1,0,1,1,0,1,1,0,0,0,1,1,1,0,0,1,1,1,1,1,0,1,1,1,1,0,1,0,0,0,1,1,1,0,0,1,1,0,0,1,0,1,0,0,1,1,1,1,0,0,0,1,1,1,1,1,0,0,1,1,1,1,1,1,0,1,0,0,1,0,0,0,1,1,1,0,0,0,1,1,1,1,1,1,0,1,1,1,1,1,1,0,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,0,0,1,0,0,0,1,0,1,0,1,1,0,0,1,1,1,0,1,1,1,0,0,0,1,1,1,0,1,0,0,0,1,0,1,0,1,1,0,1,1,0,1,1,1,1,1,0,1,1,0,1,0,0,0,1,0,0,0,0,1,1,0,0,0,1,0,1,1,1,1,0,1,1,1,0,0,1,0,1,0,1,1,0,1,1,1,1,0,1,0,0,1,0,0,0,1,0,1,1,0,0,1,0,0,0,0,0,1,1,0,1,1,1,1,0,1,0,1,0,1,0,1,1,1,1,0,0,0,0,1,0,1,0,0,1,0,1,1,0,0,0,0,1,0,0,1,1,0,0,1,0,0,0,1,0,0,1,1,1,0,0,1,0,0,0,1,1,0,0,0,1,1,0,1,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,1,1,0,0,0,1,1,1,1,0,0,0,1,0,1,0,0,1,1,1,0,0,0,1,0,0,1,1,1,1,1,1,1,0,1,0,0,1,1,1,0,1,1,1,0,0,1,0,1,0,0,1,0,0,0,1,1,1,1,0,0,1,0,0,1,1,1,0,0,1,0,0,1,0,0,1,1,1,1,0,0,1,0,0,1,0,1,1,1,1,1,1,0,0,0,1,1,0,0,1,1,0,1,1,1,0,1,0,0,1,0,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,0,0,1,0,0,0,1,1,1,0,1,0,1,1,1,0,1,0,1,1,1,1,0,1,0,1,0,1,1,1,0,1,1,0,1,1,1,0,1,1,0,1,1,0,1,1,0,1,0,0,1,0,1,1,0,0,0,0,0,0,1,0,0,0,1,0,0,1,1,1,1,0,1,1,0,0,0,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,0,1,0,1,0,0,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,0,1,1,1,0,0,0,1,0,1,1,1,0,0,0,0,1,0,1,1,0,0,0,1,0,0,0,1,0,1,1,0,1,1,1,0,1,0,1,0,1,1,0,0,1,0,1,1,0,1,1,1,0,1,0,0,1,0,0,1,0,0,0,0,0,1,1,0,0,1,1,0,0,1,1,0,1,1,0,1,0,1,0,1,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,0,1,1,0,1,1,0,1,1,1,0,0,1,1,1,1,1,1,0,1,0,1,1,1,1,1,0,0,0,0,1,1,1,0,0,1,0,1,0,1,0,1,1,0,0,1,0,0,0,1,0,0,0,0,1,1,1,1,0,0,1,1,1,1,0,0,0,0,0,1,1,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0,1,1,0,1,1,0,0,0,1,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,1,0,1,1,0,0,0,0,0,1,1,1,0,0,1,0,1,0,0,1,0,0,1,0,0,1,1,0,1,0,1,1,1,1,0,0,0,1,0,0,1,1,1,1,0,1,1,1,0,1,0,1,0,0,1,1,1,0,1,1,1,1,1,1,0,0,1,0,1,0,1,0,1,1,0,0,0,0,1,0,0,1,0,1,1,0,0,1,0,1,0,1,0,1,0,0,1,1,0,1,1,0,1,0,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,1,1,0,1,1,0,0,0,1,1,0,0,1,0,0,0,0,0,1,1,0,1,0,0,0,1,1,1,0,1,0,1,1,0,1,1,0,1,1,0,0,1,0,1,0,1,0,0,0,0,1,0,0,0,0,1,1,1,0,1,1,0,0,1,1,1,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,1,1,1,0,0,0,0,1,1,0,1,1,1,0,0,0,0,1,1,1,0,0,1,0,0,1,1,1,0,1,0,1,1,1,1,1,1,0,1,0,1,0,1,0,0,0,1,1,1,0,1,0,1,1,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,1,1,0,1,0,0,0,0,0,1,0,1,1,0,1,0,0,0,0,1,0,1,0,0,0,1,0,0,0,1,1,0,1,0,1,1,0,1,0,1,0,1,0,1,0,1,1,0,0,0,0,0,0,1,0,0,1,1,0,1,0,1,0,1,1,0,0,1,1,1,0,1,1,0,0,1,0,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,1,1,0,0,0,0,0,0,0,1,0,1,1,0,1,1,0,1,0,0,1,1,1,0,0,0,1,1,0,1,1,1,1,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,1,0,0,0,0,1,0,1,1,1,1,1,0,0,0,0,1,1,0,0,0,0,1,1,1,1,1,1,0,0,1,0,0,0,0,0,1,0,0,0,0,1,1,0,1,0,0,1,1,0,0,1,0,1,0,0,0,0,1,0,0,0,1,1,1,0,1,0,0,1,1,1,1,1,1,0,0,1,0,1,0,0,1,0,1,1,0,1,0,1,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,0,1,0,1,0,0,0,0,1,0,1,1,0,1,0,0,1,0,1,0,1,1,0,1,0,1,0,0,1,0,1,0,0,0,1,0,0,1,0,1,1,1,1,0,1,0,0,0,1,0,0,0,1,1,1,0,1,0,1,1,0,1,0,1,1,1,0,0,0,0,0,1,0,1,1,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1,1,0,0,1,1,1,1,1,0,0,0,0,1,0,1,0,0,0,1,1,0,1,1,1,0,1,0,1,0,0,1,0,1,0,0,1,0,0,0,0,1,1,1,0,0,1,0,0,0,1,1,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,0,1,0,0,0,0,1,0,0,1,0,0,1,0,1,0,0,1,0,0,0,1,1,1,0,0,1,0,0,1,0,1,1,0,0,1,0,0,0,1,1,1,0,0,0,1,1,1,1,1,0,0,1,0,1,0,1,1,0,1,1,1,0,0,0,1,0,0,0,0,1,0,1,0,0,0,1,1,1,1,1,1,0,0,0,1,1,1,1,0,1,1,0,0,1,0,0,0,1,0,1,1,0,1,1,1,1,0,1,1,1,0,1,0,0,0,1,0,1,1,0,1,1,1,1,1,0,0,0,0,0,1,0,0,1,0,0,1,1,1,1,0,1,1,0,1,1,1,1,0,1,1,1,0,1,0,0,1,0,1,1,1,1,1,1,0,1,1,0,0,0,1,0,0,1,1,0,0,1,1,1,1,0,1,1,1,0,1,1,0,1,0,1,1,0,1,1,1,0,0,0,0,1,0,1,1,1,0,0,0,0,0,0,1,1,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,1,0,0,1,0,0,0,1,1,0,0,1,1,1,1,0,0,0,1,1,1,1,0,0,1,1,0,0,1,0,0,1,0,0,0,0,0,1,1,0,1,0,0,1,0,1,1,0,0,1,1,0,1,0,1,0,0,1,0,0,0,0,1,1,0,1,1,1,1,1,1,0,1,0,1,0,0,1,0,1,0,0,0,0,1,0,0,1,1,1,0,1,1,1,0,0,1,0,0,1,1,0,0,0,0,0,1,0,0,0,0,1,0,1,1,0,0,0,0,1,0,1,0,0,0,1,0,0,1,1,1,0,0,1,0,1,1,0,0,0,0,1,1,1,0,1,0,1,1,0,0,0,0,1,0,1,0,1,1,0,1,1,1,1,1,0,1,1,0,1,0,1,1,0,0,1,0,1,0,0,1,0,1,1,0,1,1,0,0,0,0,0,1,0,0,0,1,1,1,1,1,1,1,1,0,0,1,1,1,0,1,0,1,0,1,1,1,0,1,0,1,1,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0,0,1,0,1,1,1,0,1,1,1,1,0,0,0,1,0,1,0,0,1,1,1,1,0,0,0,1,0,1,1,0,1,0,0,1,0,0,1,1,0,1,1,0,0,1,0,0,0,1,1,0,1,0,0,1,0,0,1,1,1,0,1,1,1,1,0,0,1,0,1,0,0,1,0,0,1,1,1,0,0,1,1,0,0,1,0,0,0,0,0,1,1,0,0,1,0,1,1,1,0,0,0,1,0,0,1,1,1,1,0,0,0,0,0,1,1,0,1,0,0,1,1,0,1,0,1,0,0,0,0,1,1,0,0,1,1,1,1,1,1,1,0,1,1,1,1,0,1,0,1,1,0,1,0,1,0,0,1,1,1,1,1,0,1,1,1,1,0,1,1,0,1,0,0,0,0,1,0,0,0,0,0,1,1,0,1,0,0,1,1,1,1,0,0,1,0,0,0,1,0,1,1,1,0,1,0,1,0,0,0,1,0,0,1,1,0,0,1,1,1,0,0,1,0,0,0,0,0,1,0,0,1,1,0,1,1,0,1,0,1,1,1,0,1,1,1,0,1,1,1,0,0,1,1,0,0,1,0,0,1,0,1,0,1,0,1,1,1,0,1,1,0,0,1,1,0,1,1,1,0,0,0,0,0,0,1,0,0,1,1,1,0,1,0,0,0,1,1,1,1,0,1,0,0,1,1,0,0,1,1,0,0,1,1,1,1,0,0,1,0,0,0,1,1,1,1,0,0,0,0,1,0,1,1,0,1,0,1,1,0,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,1,1,1,0,1,1,0,0,0,0,0,1,1,1,0,1,0,1,1,0,0,0,1,0,0,0,0,0,0,1,1,0,1,1,0,1,1,0,1,0,1,0,0,0,0,1,0,0,1,1,1,0,1,0,0,1,1,0,0,1,1,0,0,1,0,1,1,0,1,0,1,1,0,1,0,1,0,1,0,0,0,0,0,1,1,];
var gg_b = "1658451601/";

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
