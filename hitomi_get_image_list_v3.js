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
case 840:
case 1575:
case 3995:
case 11:
case 3860:
case 189:
case 1577:
case 2141:
case 692:
case 2451:
case 1135:
case 3851:
case 979:
case 1308:
case 2391:
case 40:
case 3815:
case 1169:
case 2928:
case 3927:
case 3524:
case 3771:
case 2980:
case 102:
case 1886:
case 646:
case 3501:
case 4052:
case 3476:
case 3004:
case 4:
case 3229:
case 2814:
case 2557:
case 2861:
case 1870:
case 2302:
case 2735:
case 1124:
case 220:
case 555:
case 1841:
case 1552:
case 1165:
case 637:
case 4091:
case 941:
case 836:
case 522:
case 766:
case 452:
case 590:
case 900:
case 375:
case 2297:
case 3699:
case 3728:
case 178:
case 2128:
case 746:
case 3155:
case 4055:
case 2601:
case 1995:
case 2407:
case 2423:
case 2622:
case 1658:
case 2152:
case 3756:
case 2819:
case 3557:
case 2926:
case 1796:
case 3467:
case 2950:
case 3812:
case 61:
case 2554:
case 2579:
case 4030:
case 1782:
case 426:
case 3399:
case 138:
case 1176:
case 1060:
case 370:
case 630:
case 1382:
case 1631:
case 1275:
case 171:
case 2901:
case 1088:
case 3915:
case 3418:
case 550:
case 193:
case 3765:
case 2768:
case 480:
case 823:
case 675:
case 2471:
case 856:
case 3038:
case 2947:
case 2273:
case 260:
case 2443:
case 1564:
case 1424:
case 2449:
case 1035:
case 757:
case 2396:
case 1097:
case 2857:
case 2319:
case 1056:
case 3763:
case 1434:
case 3016:
case 1022:
case 2388:
case 1942:
case 3361:
case 2765:
case 2781:
case 3400:
case 3339:
case 1179:
case 2009:
case 2862:
case 99:
case 1895:
case 3957:
case 1728:
case 3653:
case 3780:
case 901:
case 159:
case 2053:
case 1944:
case 1430:
case 150:
case 2003:
case 2714:
case 3688:
case 2885:
case 2045:
case 2516:
case 1687:
case 4041:
case 594:
case 2214:
case 1298:
case 3757:
case 3428:
case 1067:
case 1834:
case 601:
case 1269:
case 4036:
case 3123:
case 1403:
case 2101:
case 2124:
case 448:
case 3183:
case 778:
case 96:
case 536:
case 2476:
case 1975:
case 754:
case 1990:
case 2955:
case 1332:
case 122:
case 632:
case 3840:
case 3586:
case 1646:
case 538:
case 4015:
case 3434:
case 2089:
case 3394:
case 1367:
case 2794:
case 2331:
case 2311:
case 1410:
case 1192:
case 2643:
case 2421:
case 2264:
case 1960:
case 2547:
case 3066:
case 2543:
case 360:
case 74:
case 1531:
case 2837:
case 3409:
case 1194:
case 1879:
case 288:
case 3153:
case 3794:
case 1021:
case 31:
case 216:
case 3871:
case 642:
case 3785:
case 3496:
case 814:
case 295:
case 970:
case 2660:
case 2215:
case 3727:
case 3194:
case 866:
case 3189:
case 599:
case 3560:
case 3866:
case 3217:
case 0:
case 3435:
case 1374:
case 732:
case 752:
case 421:
case 252:
case 829:
case 3718:
case 3075:
case 1808:
case 3129:
case 1742:
case 1776:
case 233:
case 2914:
case 3697:
case 838:
case 2106:
case 2506:
case 322:
case 1180:
case 2409:
case 2906:
case 2952:
case 1106:
case 1503:
case 381:
case 357:
case 2494:
case 3846:
case 3579:
case 365:
case 2763:
case 992:
case 2405:
case 1609:
case 2916:
case 3216:
case 3968:
case 2361:
case 598:
case 797:
case 2534:
case 3980:
case 4006:
case 3165:
case 59:
case 1076:
case 1120:
case 3491:
case 894:
case 3369:
case 1134:
case 2212:
case 310:
case 3808:
case 1773:
case 2207:
case 2878:
case 3775:
case 3322:
case 1190:
case 1685:
case 139:
case 2822:
case 2325:
case 2491:
case 3750:
case 2701:
case 28:
case 1441:
case 2649:
case 2693:
case 3879:
case 3304:
case 699:
case 286:
case 392:
case 3959:
case 532:
case 833:
case 3759:
case 126:
case 1242:
case 3345:
case 3055:
case 622:
case 1083:
case 1362:
case 1624:
case 3471:
case 4003:
case 3683:
case 3898:
case 4050:
case 2299:
case 2593:
case 2691:
case 1143:
case 934:
case 786:
case 1005:
case 2457:
case 2122:
case 3042:
case 2970:
case 387:
case 128:
case 1328:
case 3372:
case 2027:
case 1793:
case 2198:
case 2213:
case 333:
case 1462:
case 57:
case 4021:
case 3187:
case 3255:
case 548:
case 4028:
case 709:
case 1041:
case 3884:
case 330:
case 1162:
case 1926:
case 2508:
case 2540:
case 673:
case 2853:
case 2873:
case 931:
case 33:
case 2408:
case 3549:
case 3485:
case 2687:
case 2105:
case 1329:
case 3135:
case 312:
case 1250:
case 3870:
case 497:
case 1715:
case 887:
case 2583:
case 164:
case 2487:
case 3267:
case 2619:
case 1000:
case 457:
case 2442:
case 3652:
case 4095:
case 955:
case 72:
case 2227:
case 1836:
case 2939:
case 2064:
case 496:
case 1656:
case 3033:
case 3781:
case 3332:
case 2993:
case 3100:
case 1738:
case 959:
case 2465:
case 4044:
case 3510:
case 566:
case 2913:
case 1287:
case 799:
case 3046:
case 3918:
case 2728:
case 1860:
case 3233:
case 2480:
case 3731:
case 36:
case 2631:
case 1431:
case 2012:
case 1812:
case 1229:
case 2492:
case 1918:
case 1207:
case 2834:
case 985:
case 3855:
case 3824:
case 962:
case 3344:
case 1750:
case 568:
case 27:
case 3931:
case 3221:
case 3600:
case 2902:
case 2171:
case 1376:
case 1055:
case 528:
case 1521:
case 3274:
case 2680:
case 3097:
case 1533:
case 2192:
case 440:
case 3028:
case 1175:
case 3321:
case 2032:
case 772:
case 2513:
case 2436:
case 422:
case 919:
case 2002:
case 2748:
case 765:
case 2475:
case 579:
case 1525:
case 3154:
case 1734:
case 2467:
case 2132:
case 948:
case 1304:
case 3628:
case 1722:
case 494:
case 2312:
case 1029:
case 3151:
case 3929:
case 410:
case 3684:
case 4062:
case 1290:
case 1075:
case 3622:
case 2482:
case 1662:
case 1978:
case 1432:
case 2167:
case 3298:
case 1897:
case 184:
case 3527:
case 1586:
case 2338:
case 3685:
case 2533:
case 2685:
case 3845:
case 2722:
case 1154:
case 3947:
case 1225:
case 2395:
case 1660:
case 1598:
case 2854:
case 1718:
case 53:
case 3005:
case 3133:
case 1163:
case 3701:
case 834:
case 1050:
case 2413:
case 2915:
case 898:
case 3520:
case 2433:
case 280:
case 764:
case 4083:
case 276:
case 1848:
case 957:
case 689:
case 2539:
case 251:
case 2893:
case 2056:
case 4079:
case 230:
case 4032:
case 2553:
case 3407:
case 552:
case 3698:
case 4086:
case 3749:
case 3589:
case 809:
case 997:
case 2829:
case 192:
case 1413:
case 1625:
case 652:
case 4077:
case 432:
case 3214:
case 3314:
case 2780:
case 1822:
case 47:
case 655:
case 3551:
case 2602:
case 3398:
case 3325:
case 3973:
case 366:
case 3045:
case 262:
case 2746:
case 2224:
case 571:
case 634:
case 2774:
case 3431:
case 2879:
case 2742:
case 196:
case 3834:
case 1317:
case 1591:
case 1222:
case 3352:
case 502:
case 1550:
case 202:
case 105:
case 1896:
case 3078:
case 228:
case 2006:
case 2188:
case 3106:
case 486:
case 1356:
case 3691:
case 3223:
case 3500:
case 3232:
case 166:
case 2855:
case 964:
case 705:
case 324:
case 2235:
case 607:
case 1536:
case 3019:
case 2033:
case 2021:
case 287:
case 2075:
case 1208:
case 2107:
case 2818:
case 1993:
case 644:
case 2483:
case 1122:
case 1931:
case 780:
case 3484:
case 329:
case 272:
case 2062:
case 3436:
case 2923:
case 2760:
case 3940:
case 2266:
case 821:
case 1936:
case 3093:
case 850:
case 2621:
case 810:
case 3810:
case 560:
case 710:
case 2989:
case 1950:
case 2706:
case 2507:
case 1611:
case 2959:
case 3071:
case 2193:
case 2068:
case 1751:
case 1377:
case 3280:
case 2265:
case 1087:
case 369:
case 3290:
case 1906:
case 3575:
case 1713:
case 304:
case 508:
case 1672:
case 257:
case 1401:
case 1158:
case 3442:
case 2623:
case 2307:
case 1682:
case 3452:
case 774:
case 4027:
case 629:
case 4087:
case 728:
case 966:
case 1882:
case 258:
case 2907:
case 3937:
case 1522:
case 2963:
case 3311:
case 3285:
case 657:
case 3401:
case 808:
case 3378:
case 2935:
case 1929:
case 965:
case 3493:
case 1137:
case 3816:
case 3498:
case 1736:
case 3877:
case 2185:
case 2823:
case 213:
case 556:
case 3480:
case 933:
case 3047:
case 409:
case 3029:
case 2770:
case 2203:
case 1986:
case 3662:
case 3577:
case 1145:
case 1463:
case 129:
case 2891:
case 2368:
case 1874:
case 3488:
case 3692:
case 3465:
case 2723:
case 3293:
case 67:
case 3218:
case 1580:
case 1814:
case 351:
case 320:
case 1545:
case 1703:
case 3671:
case 1261:
case 3334:
case 3935:
case 1821:
case 3358:
case 2567:
case 3206:
case 3647:
case 771:
case 345:
case 1153:
case 951:
case 1708:
case 514:
case 352:
case 3443:
case 596:
case 1829:
case 3999:
case 1498:
case 1171:
case 1130:
case 3732:
case 526:
case 812:
case 882:
case 3475:
case 1951:
case 798:
case 3141:
case 2726:
case 158:
case 325:
case 3455:
case 623:
case 1956:
case 3717:
case 3991:
case 1421:
case 3562:
case 2253:
case 315:
case 4070:
case 475:
case 1866:
case 1277:
case 2135:
case 2071:
case 2648:
case 3779:
case 2744:
case 1518:
case 2495:
case 1910:
case 1065:
case 3744:
case 2929:
case 3508:
case 4023:
case 2370:
case 2681:
case 1199:
case 3969:
case 612:
case 3936:
case 3001:
case 2530:
case 2514:
case 1071:
case 3712:
case 2347:
case 456:
case 2921:
case 2535:
case 244:
case 1270:
case 95:
case 3829:
case 807:
case 2191:
case 1510:
case 274:
case 1159:
case 4081:
case 4000:
case 1830:
case 1084:
case 3856:
case 1604:
case 582:
case 2971:
case 1542:
case 3526:
case 394:
case 1359:
case 380:
case 134:
case 1628:
case 1068:
case 781:
case 2026:
case 1927:
case 3572:
case 2412:
case 3774:
case 3147:
case 1066:
case 3689:
case 3219:
case 3142:
case 846:
case 203:
case 620:
case 1236:
case 1823:
case 1312:
case 1251:
case 52:
case 2174:
case 1365:
case 22:
case 2058:
case 3597:
case 487:
case 2205:
case 1919:
case 3708:
case 1982:
case 1804:
case 2653:
case 3983:
case 117:
case 2635:
case 3502:
case 229:
case 1442:
case 2591:
case 3997:
case 1214:
case 186:
case 1406:
case 385:
case 1962:
case 3768:
case 1839:
case 2326:
case 604:
case 1935:
case 3567:
case 3073:
case 2137:
case 1353:
case 3035:
case 3585:
case 221:
case 2115:
case 2779:
case 3838:
case 731:
case 3171:
case 3426:
case 2490:
case 2288:
case 641:
case 3349:
case 3848:
case 2716:
case 445:
case 2766:
case 3054:
case 49:
case 2121:
case 2357:
case 559:
case 1965:
case 2827:
case 761:
case 1726:
case 3108:
case 2960:
case 3739:
case 3672:
case 1493:
case 3231:
case 3512:
case 2924:
case 2478:
case 1388:
case 2690:
case 2573:
case 2175:
case 3822:
case 3079:
case 1118:
case 3172:
case 3583:
case 44:
case 704:
case 3680:
case 2580:
case 910:
case 858:
case 1999:
case 587:
case 123:
case 3415:
case 1565:
case 1034:
case 1286:
case 3425:
case 1677:
case 2846:
case 3776:
case 2168:
case 2835:
case 1457:
case 3408:
case 1121:
case 2945:
case 800:
case 1893:
case 1607:
case 222:
case 1961:
case 308:
case 453:
case 1144:
case 1379:
case 776:
case 516:
case 3853:
case 3624:
case 1573:
case 1579:
case 2454:
case 321:
case 1002:
case 3360:
case 1001:
case 355:
case 2741:
case 747:
case 2245:
case 2157:
case 902:
case 3839:
case 3618:
case 921:
case 1202:
case 80:
case 3925:
case 3752:
case 1385:
case 1133:
case 2267:
case 2614:
case 2007:
case 2607:
case 2231:
case 2461:
case 744:
case 356:
case 795:
case 479:
case 1206:
case 1103:
case 2452:
case 227:
case 3565:
case 1294:
case 775:
case 3177:
case 1247:
case 354:
case 3548:
case 1181:
case 2757:
case 2599:
case 788:
case 430:
case 3607:
case 2298:
case 395:
case 1857:
case 1398:
case 398:
case 2524:
case 3559:
case 2291:
case 2776:
case 2585:
case 2787:
case 4018:
case 1881:
case 3695:
case 1947:
case 3954:
case 648:
case 1721:
case 698:
case 2615:
case 1790:
case 1608:
case 1925:
case 1966:
case 1678:
case 1820:
case 733:
case 971:
case 2322:
case 2788:
case 2813:
case 2330:
case 3180:
case 1761:
case 3800:
case 2320:
case 2973:
case 3687:
case 1535:
case 716:
case 1465:
case 1474:
case 3296:
case 726:
case 1934:
case 1289:
case 3319:
case 924:
case 1291:
case 2450:
case 172:
case 3228:
case 2790:
case 2022:
case 2327:
case 1806:
case 1800:
case 2581:
case 1724:
case 420:
case 3257:
case 1619:
case 3390:
case 725:
case 2176:
case 500:
case 2920:
case 1680:
case 3143:
case 2102:
case 849:
case 447:
case 1731:
case 3916:
case 3059:
case 465:
case 3346:
case 1727:
case 3797:
case 1141:
case 1174:
case 2793:
case 2665:
case 1303:
case 1125:
case 460:
case 3397:
case 2086:
case 723:
case 969:
case 2888:
case 2275:
case 263:
case 696:
case 3724:
case 2160:
case 1361:
case 1086:
case 3710:
case 3766:
case 2018:
case 1875:
case 3063:
case 1801:
case 2504:
case 2294:
case 2277:
case 1119:
case 41:
case 3384:
case 2127:
case 2704:
case 3674:
case 103:
case 2255:
case 635:
case 431:
case 2481:
case 3328:
case 804:
case 511:
case 2373:
case 2274:
case 3711:
case 2872:
case 1464:
case 1690:
case 1009:
case 29:
case 2618:
case 1259:
case 791:
case 3060:
case 3670:
case 2624:
case 3478:
case 1714:
case 2751:
case 10:
case 2859:
case 3447:
case 748:
case 100:
case 3279:
case 2720:
case 2100:
case 58:
case 248:
case 3132:
case 1480:
case 3131:
case 1614:
case 1571:
case 876:
case 3297:
case 3516:
case 1393:
case 2588:
case 1019:
case 3462:
case 947:
case 681:
case 759:
case 1397:
case 1364:
case 3889:
case 1316:
case 1416:
case 1914:
case 3239:
case 3301:
case 3537:
case 174:
case 2067:
case 3:
case 1980:
case 3264:
case 768:
case 1209:
case 367:
case 544:
case 3981:
case 2120:
case 2279:
case 1054:
case 2240:
case 1453:
case 464:
case 3987:
case 1039:
case 60:
case 3089:
case 2466:
case 928:
case 3843:
case 2237:
case 1352:
case 1574:
case 1201:
case 195:
case 1700:
case 2634:
case 1524:
case 3669:
case 3880:
case 3644:
case 2118:
case 2949:
case 3388:
case 2448:
case 610:
case 4031:
case 3639:
case 2365:
case 285:
case 1033:
case 990:
case 708:
case 4084:
case 3850:
case 691:
case 2795:
case 2144:
case 277:
case 3379:
case 1045:
case 104:
case 1436:
case 3841:
case 3286:
case 2750:
case 524:
case 859:
case 1635:
case 615:
case 3450:
case 2225:
case 3353:
case 1684:
case 2314:
case 1974:
case 3655:
case 3012:
case 3545:
case 2988:
case 1618:
case 1774:
case 3416:
case 1025:
case 2762:
case 490:
case 1758:
case 1930:
case 2821:
case 2222:
case 3281:
case 982:
case 2882:
case 4017:
case 2641:
case 1485:
case 715:
case 3276:
case 3048:
case 2759:
case 1878:
case 468:
case 3156:
case 1468:
case 2239:
case 400:
case 729:
case 3277:
case 1378:
case 3571:
case 3760:
case 1831:
case 3203:
case 1846:
case 1373:
case 3817:
case 2462:
case 1597:
case 2303:
case 1425:
case 2079:
case 3896:
case 2367:
case 1587:
case 1321:
case 2954:
case 3992:
case 1570:
case 1339:
case 1984:
case 110:
case 2038:
case 318:
case 401:
case 614:
case 3819:
case 204:
case 3857:
case 3159:
case 3535:
case 1012:
case 2566:
case 9:
case 1184:
case 2189:
case 2336:
case 1205:
case 234:
case 961:
case 824:
case 2565:
case 3755:
case 1334:
case 3034:
case 3681:
case 3446:
case 2091:
case 1825:
case 2093:
case 3606:
case 1390:
case 3602:
case 2630:
case 3640:
case 906:
case 1794:
case 1799:
case 455:
case 668:
case 2261:
case 816:
case 1637:
case 1603:
case 3258:
case 3637:
case 2925:
case 349:
case 872:
case 2605:
case 68:
case 3308:
case 1771:
case 2263:
case 2797:
case 3666:
case 3591:
case 1213:
case 3865:
case 694:
case 1371:
case 2371:
case 1920:
case 3505:
case 998:
case 3072:
case 2558:
case 1630:
case 2111:
case 1402:
case 643:
case 3076:
case 3230:
case 112:
case 84:
case 3978:
case 3128:
case 585:
case 3743:
case 2257:
case 3049:
case 860:
case 1231:
case 3090:
case 2528:
case 3725:
case 412:
case 3863:
case 2974:
case 2247:
case 4092:
case 3243:
case 1747:
case 2880:
case 2262:
case 1696:
case 1447:
case 562:
case 2080:
case 683:
case 319:
case 1828:
case 1094:
case 1861:
case 437:
case 2564:
case 1513:
case 433:
case 1074:
case 3395:
case 231:
case 1735:
case 2552:
case 2028:
case 2515:
case 2650:
case 3386:
case 1093:
case 2771:
case 1600:
case 875:
case 4068:
case 2343:
case 75:
case 340:
case 293:
case 1370:
case 2626:
case 1701:
case 1052:
case 109:
case 1553:
case 1404:
case 238:
case 4037:
case 3351:
case 3201:
case 83:
case 1720:
case 259:
case 1741:
case 143:
case 3207:
case 4076:
case 3122:
case 2136:
case 2126:
case 1386:
case 3305:
case 742:
case 3911:
case 156:
case 1149:
case 1972:
case 3836:
case 2260:
case 3601:
case 3168:
case 3886:
case 373:
case 519:
case 873:
case 3748:
case 2517:
case 1706:
case 4094:
case 1112:
case 1583:
case 2571:
case 1292:
case 3104:
case 889:
case 1031:
case 880:
case 3859:
case 1427:
case 2406:
case 3714:
case 2000:
case 1200:
case 3772:
case 2498:
case 3634:
case 168:
case 3832:
case 3661:
case 3107:
case 521:
case 3112:
case 247:
case 313:
case 3733:
case 3427:
case 1204:
case 981:
case 1046:
case 884:
case 1268:
case 541:
case 713:
case 1020:
case 4051:
case 3178:
case 3186:
case 3032:
case 1562:
case 3022:
case 1102:
case 62:
case 418:
case 3338:
case 1843:
case 3245:
case 3905:
case 1588:
case 2754:
case 835:
case 1506:
case 3316:
case 2767:
case 1079:
case 3053:
case 1953:
case 2453:
case 1096:
case 2109:
case 1675:
case 3645:
case 2099:
case 2826:
case 950:
case 802:
case 1349:
case 3067:
case 2472:
case 3882:
case 2074:
case 1652:
case 2258:
case 3068:
case 678:
case 3375:
case 2044:
case 1913:
case 1216:
case 3941:
case 2131:
case 3025:
case 661:
case 3564:
case 2051:
case 1484:
case 3818:
case 2181:
case 3438:
case 3823:
case 3694:
case 226:
case 1061:
case 2804:
case 904:
case 1024:
case 2806:
case 111:
case 2807:
case 2840:
case 2640:
case 4029:
case 4060:
case 81:
case 1007:
case 362:
case 449:
case 740:
case 3026:
case 1967:
case 45:
case 3949:
case 1301:
case 160:
case 1905:
case 3250:
case 2416:
case 1104:
case 3767:
case 3539:
case 428:
case 2380:
case 3667:
case 4039:
case 1894:
case 2869:
case 1952:
case 551:
case 2108:
case 2419:
case 3357:
case 3704:
case 2140:
case 3256:
case 2119:
case 3974:
case 2663:
case 3146:
case 1559:
case 2163:
case 470:
case 298:
case 3629:
case 1845:
case 1003:
case 4089:
case 1272:
case 1109:
case 1307:
case 2094:
case 212:
case 828:
case 3448:
case 2800:
case 943:
case 1047:
case 1113:
case 3874:
case 2519:
case 4012:
case 3411:
case 3200:
case 3963:
case 658:
case 2208:
case 972:
case 1765:
case 154:
case 92:
case 662:
case 3387:
case 1461:
case 2077:
case 760:
case 399:
case 3599:
case 1673:
case 503:
case 2415:
case 1516:
case 3116:
case 2733:
case 3052:
case 1059:
case 1296:
case 2113:
case 563:
case 3070:
case 307:
case 1621:
case 1299:
case 3793:
case 1668:
case 2831:
case 338:
case 165:
case 256:
case 3044:
case 1710:
case 3473:
case 777:
case 1922:
case 1345:
case 3608:
case 2810:
case 936:
case 2597:
case 3806:
case 2232:
case 2404:
case 2008:
case 1593:
case 785:
case 3237:
case 2868:
case 2864:
case 3466:
case 4034:
case 1891:
case 278:
case 3944:
case 2617:
case 1733:
case 19:
case 3837:
case 2522:
case 1273:
case 3051:
case 1538:
case 3594:
case 361:
case 888:
case 3103:
case 2785:
case 281:
case 2206:
case 3770:
case 2568:
case 4049:
case 3805:
case 769:
case 2329:
case 2104:
case 1338:
case 136:
case 573:
case 2182:
case 2306:
case 4080:
case 1868:
case 3039:
case 270:
case 383:
case 1017:
case 517:
case 638:
case 3282:
case 1883:
case 2644:
case 2153:
case 671:
case 3773:
case 3582:
case 3440:
case 3385:
case 976:
case 714:
case 3820:
case 334:
case 1691:
case 2737:
case 3955:
case 3018:
case 3225:
case 2178:
case 3483:
case 2403:
case 1989:
case 2692:
case 1501:
case 2578:
case 2500:
case 3303:
case 2321:
case 4073:
case 3928:
case 1566:
case 2518:
case 1284:
case 4035:
case 2782:
case 2194:
case 359:
case 1981:
case 3451:
case 3951:
case 190:
case 1:
case 1170:
case 2675:
case 1838:
case 135:
case 3094:
case 1949:
case 1964:
case 3554:
case 237:
case 363:
case 2667:
case 806:
case 1602:
case 1752:
case 624:
case 163:
case 2355:
case 3956:
case 3596:
case 3906:
case 3057:
case 3199:
case 2999:
case 64:
case 3787:
case 3872:
case 1709:
case 1189:
case 38:
case 547:
case 755:
case 4038:
case 249:
case 1440:
case 3676:
case 3393:
case 89:
case 3002:
case 1239:
case 3762:
case 1211:
case 3011:
case 483:
case 1166:
case 91:
case 1140:
case 1426:
case 3932:
case 792:
case 3099:
case 3515:
case 3096:
case 1568:
case 3050:
case 3343:
case 2673:
case 1350:
case 450:
case 2538:
case 1754:
case 4002:
case 3472:
case 42:
case 146:
case 2335:
case 2066:
case 3514:
case 3737:
case 265:
case 2651:
case 1279:
case 2610:
case 779:
case 518:
case 1011:
case 2875:
case 264:
case 4047:
case 3854:
case 3650:
case 1433:
case 3270:
case 1890:
case 3294:
case 2698:
case 3242:
case 895:
case 2088:
case 3266:
case 4020:
case 956:
case 1227:
case 3904:
case 1871:
case 2979:
case 2523:
case 3617:
case 2272:
case 1444:
case 2315:
case 2786:
case 2139:
case 2179:
case 2048:
case 3909:
case 2025:
case 3952:
case 2661:
case 2363:
case 309:
case 2582:
case 883:
case 2575:
case 1523:
case 2803:
case 3558:
case 558:
case 2718:
case 2968:
case 625:
case 3542:
case 1369:
case 1156:
case 819:
case 3241:
case 1381:
case 3439:
case 3713:
case 1551:
case 1488:
case 1622:
case 930:
case 3429:
case 1100:
case 2563:
case 187:
case 545:
case 940:
case 2525:
case 3869:
case 763:
case 2387:
case 954:
case 127:
case 2531:
case 2669:
case 1664:
case 2627:
case 142:
case 1123:
case 2360:
case 649:
case 1902:
case 3569:
case 1532:
case 283:
case 3753:
case 832:
case 2884:
case 3798:
case 297:
case 660:
case 2029:
case 149:
case 2201:
case 3105:
case 591:
case 3124:
case 826:
case 1711:
case 3191:
case 738:
case 1451:
case 567:
case 1626:
case 2352:
case 24:
case 1043:
case 1310:
case 1111:
case 1150:
case 1282:
case 133:
case 2372:
case 2845:
case 2281:
case 1195:
case 854:
case 3831:
case 2815:
case 1314:
case 1921:
case 3878:
case 3660:
case 491:
case 575:
case 1203:
case 386:
case 211:
case 3355:
case 572:
case 3150:
case 2155:
case 1363:
case 583:
case 674:
case 37:
case 3803:
case 878:
case 1859:
case 3635:
case 78:
case 1901:
case 730:
case 467:
case 4010:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1711303201/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,0,1,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,1,1,1,0,1,0,1,0,0,1,1,1,0,1,1,1,0,1,1,0,1,0,1,0,0,1,1,0,0,0,1,1,1,1,1,1,0,1,0,0,1,1,0,0,0,1,0,1,1,0,0,1,0,1,1,0,1,1,0,0,0,0,1,0,1,1,0,0,1,1,0,0,1,1,0,1,1,1,1,0,0,0,1,1,1,1,0,0,0,0,1,0,0,0,0,1,1,0,0,1,1,1,1,0,0,0,1,1,1,1,0,1,1,0,0,1,1,0,0,1,0,0,1,1,0,0,0,1,0,1,0,1,1,1,0,0,1,1,1,1,0,1,0,0,1,1,0,1,0,0,0,1,0,0,0,0,0,1,0,1,1,0,1,1,0,1,1,0,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1,1,1,0,0,1,0,0,0,1,1,1,0,0,0,1,1,1,1,1,1,0,1,1,0,0,1,1,0,0,0,0,0,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1,1,0,1,1,1,1,0,0,0,0,1,0,1,0,1,0,1,1,1,0,1,1,0,1,0,1,1,1,1,0,0,0,0,1,0,1,0,1,1,0,0,0,0,0,1,0,0,1,1,1,1,0,1,1,0,1,0,0,1,1,1,1,1,0,1,1,0,0,0,1,1,0,0,1,1,0,0,0,1,0,1,0,0,0,0,1,0,0,0,1,0,1,1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,1,0,1,1,0,0,1,0,1,0,0,0,0,1,1,0,1,0,1,1,1,0,0,0,0,1,0,1,1,0,0,1,1,1,1,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,1,0,1,1,1,0,0,0,1,0,1,0,1,1,1,1,0,0,0,1,0,0,1,0,0,0,0,1,0,1,1,1,1,0,1,1,0,1,1,1,0,0,1,0,0,0,1,1,0,1,1,0,1,0,0,0,0,1,0,0,0,1,1,0,0,1,0,0,1,1,0,0,1,1,0,0,1,0,1,1,0,0,1,0,1,1,0,0,0,0,1,0,0,1,0,0,1,0,1,1,1,1,0,1,1,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,1,0,0,1,0,0,1,1,0,1,1,0,1,1,1,0,0,1,1,0,1,1,1,0,1,1,0,0,1,1,1,0,0,1,1,1,0,1,0,0,0,1,0,0,1,1,0,1,0,1,0,0,1,1,0,0,1,0,1,0,1,1,0,1,0,0,1,0,0,1,0,0,1,0,1,0,1,1,0,0,0,0,1,0,1,1,1,1,0,0,0,1,1,0,1,0,1,1,0,1,1,0,0,1,1,1,1,0,1,0,1,1,0,0,1,0,0,1,0,1,1,0,1,1,1,0,0,0,0,0,1,0,0,1,0,1,1,1,0,0,1,0,0,1,0,1,0,0,0,0,0,1,0,1,1,0,1,0,1,0,1,1,0,0,0,0,1,1,0,0,1,1,1,0,0,1,1,1,1,0,0,0,0,0,0,1,0,1,1,0,1,1,1,1,1,1,0,0,0,0,1,0,1,0,1,0,1,0,1,1,1,0,0,0,1,0,1,1,0,1,0,1,1,1,0,1,1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,0,0,1,1,0,1,0,0,1,1,0,0,1,0,1,1,1,1,0,1,0,1,0,1,1,1,1,1,0,1,0,1,0,1,0,0,1,0,1,0,1,1,0,1,0,1,1,0,0,1,1,1,1,1,0,1,0,1,0,0,0,0,0,1,0,0,1,1,0,0,0,1,0,1,0,1,1,1,0,0,0,0,0,1,0,0,0,0,0,1,1,0,1,1,0,1,0,1,0,1,1,1,0,0,1,1,1,0,0,0,0,1,1,0,0,1,0,1,1,1,0,1,0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,0,0,1,0,1,1,0,1,1,0,1,0,0,0,1,1,0,1,0,0,0,1,1,0,1,1,0,0,1,1,1,1,0,1,0,1,1,0,1,1,1,0,0,1,1,1,1,0,0,0,1,0,0,1,0,1,1,0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,1,0,1,1,1,1,0,1,0,1,0,1,0,1,1,0,0,0,0,1,0,1,1,1,1,0,1,1,0,0,0,1,0,1,0,1,1,1,0,0,0,1,0,1,0,1,0,1,1,1,0,0,1,0,1,0,1,1,1,0,0,1,1,1,0,0,0,1,1,1,1,0,0,1,0,0,1,1,1,0,0,1,0,0,0,1,1,0,1,1,1,0,0,0,0,1,1,0,1,1,0,0,1,0,1,1,1,0,1,0,0,1,0,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,1,0,0,1,1,1,0,1,0,0,1,1,0,1,1,1,0,0,0,1,1,0,0,1,1,0,1,0,1,1,0,0,1,1,0,1,1,0,0,1,1,1,0,0,1,1,1,0,0,1,1,1,0,0,1,0,0,0,0,1,1,0,1,0,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,1,0,1,1,0,1,0,0,0,0,0,1,0,0,1,0,1,0,1,0,1,0,0,0,0,1,0,0,1,0,0,1,0,0,0,0,1,0,0,1,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,1,1,0,1,1,0,1,0,1,0,1,0,0,1,0,1,0,1,1,0,1,1,1,1,0,1,0,1,0,1,1,0,1,0,1,1,0,0,1,1,0,1,0,1,0,1,0,1,1,0,0,0,1,0,0,0,0,0,0,1,1,0,0,1,0,1,0,0,0,1,1,0,0,0,0,0,1,0,0,0,1,1,0,1,1,0,0,1,0,0,1,0,1,1,1,1,1,0,1,0,1,1,1,0,1,1,0,1,1,1,1,0,1,1,0,0,1,1,0,1,0,1,0,0,1,0,0,0,1,1,0,0,1,1,1,1,0,1,0,0,0,1,0,0,1,0,0,1,0,0,0,0,1,0,0,1,1,1,1,0,0,1,1,1,1,1,0,1,0,0,0,1,1,1,0,1,0,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,1,1,1,1,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,1,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,1,0,1,0,0,1,0,0,0,1,0,0,1,0,0,1,0,1,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,0,1,1,0,1,0,0,0,1,0,0,1,0,0,0,0,1,1,1,1,0,0,0,0,0,1,0,0,1,0,1,1,1,0,1,0,1,1,0,1,1,1,0,1,0,1,1,0,0,1,0,0,1,1,1,0,0,1,0,1,0,0,0,1,1,0,1,0,1,1,1,0,0,1,1,1,0,1,0,0,1,0,0,0,1,1,0,1,1,0,1,1,1,0,1,0,1,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,1,0,1,0,1,0,1,0,0,0,1,0,0,0,1,1,0,1,0,1,1,0,1,0,1,0,1,1,0,1,0,0,1,1,0,0,0,0,1,0,0,0,1,1,0,1,0,0,1,0,1,1,1,1,0,1,1,1,0,0,1,0,1,1,1,0,1,0,1,1,1,0,0,1,0,1,1,1,1,0,1,0,0,1,1,0,0,0,0,1,0,0,1,1,1,0,1,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,1,0,1,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,1,0,1,0,0,1,1,1,0,0,1,0,1,0,1,0,0,0,1,0,1,0,0,0,0,0,1,1,1,1,0,1,0,0,1,1,1,1,0,0,1,0,1,0,1,1,0,1,0,1,0,1,1,0,1,0,0,0,0,0,0,0,0,1,0,1,1,1,0,0,0,0,1,0,1,0,1,1,0,0,1,1,0,0,1,1,0,1,1,1,0,0,1,0,0,0,1,1,0,1,1,1,1,1,0,0,0,1,1,0,0,1,1,0,0,0,1,0,0,1,1,0,0,0,1,1,1,1,1,0,0,1,1,1,0,1,1,1,0,0,1,1,1,0,0,0,0,0,1,0,1,0,0,1,0,1,1,1,1,1,0,0,1,0,0,0,1,1,1,0,1,1,1,1,0,0,0,0,1,0,1,1,0,0,1,0,1,1,1,0,1,0,1,0,0,1,1,0,0,1,0,1,0,0,0,1,1,0,1,1,0,0,1,1,1,1,0,0,1,0,0,0,0,0,1,0,0,1,1,0,0,1,1,1,1,1,0,0,1,1,0,0,0,0,1,0,0,0,0,0,1,1,0,0,1,0,0,1,0,1,0,0,1,0,1,0,0,0,1,0,1,0,1,1,1,0,0,1,0,0,1,1,0,1,0,1,1,0,0,0,0,0,1,0,1,1,0,1,0,1,1,0,0,0,0,1,1,1,1,0,1,1,1,1,1,1,0,1,0,1,0,1,0,0,1,1,1,1,1,0,1,0,1,1,1,0,0,1,1,0,0,1,1,1,0,1,1,1,0,0,1,0,0,0,0,0,0,0,1,1,0,1,0,1,0,0,1,0,0,1,0,0,0,1,1,0,0,1,0,0,1,1,1,0,1,1,0,1,1,0,0,1,0,0,1,1,0,1,1,1,1,0,0,0,1,0,0,1,0,1,0,1,1,1,1,0,0,0,1,1,1,1,0,0,0,0,0,0,1,0,1,1,0,1,0,0,0,1,1,0,0,1,0,1,0,1,1,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,1,1,0,1,1,1,1,1,1,1,1,0,0,0,0,1,1,1,1,0,1,0,1,0,1,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,1,1,1,0,0,1,1,0,0,1,1,0,0,0,1,1,0,1,1,0,0,0,1,1,1,1,0,0,1,1,1,0,1,1,1,0,0,0,1,1,0,1,0,0,0,0,1,0,0,0,1,0,0,0,0,1,0,0,1,0,1,0,0,1,1,0,1,0,1,0,1,1,0,1,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,0,1,0,0,0,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,1,1,0,1,1,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,1,0,0,0,0,1,1,1,1,1,1,1,0,0,1,0,0,0,1,1,0,0,1,1,1,0,0,0,1,1,0,0,1,1,0,1,0,1,1,1,1,0,0,0,1,0,0,1,1,1,0,1,1,0,0,1,0,1,0,0,0,1,0,1,1,1,0,0,0,0,1,1,1,1,1,1,1,0,0,1,1,1,1,0,0,1,0,1,1,0,1,1,1,0,0,1,1,1,0,0,1,0,0,0,1,0,0,0,0,1,1,1,0,0,1,1,0,0,0,0,1,1,1,1,1,1,0,0,1,0,1,0,1,0,0,1,1,1,1,1,1,0,1,0,0,1,0,0,1,0,1,0,0,0,1,0,1,0,1,1,0,0,1,0,1,0,0,1,0,0,0,1,1,0,1,1,1,0,1,1,1,1,0,1,1,0,0,1,1,0,0,1,1,0,0,0,0,1,1,0,1,1,0,0,0,1,1,1,1,0,1,0,0,0,0,0,0,1,1,0,1,0,1,0,1,0,1,0,0,0,1,0,1,0,0,0,0,1,1,0,0,0,1,0,1,0,0,1,1,1,1,0,0,0,0,1,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1,1,0,0,1,0,1,0,0,0,0,1,0,1,0,1,0,0,0,1,1,0,1,0,1,0,1,0,1,1,0,0,1,0,0,1,0,1,1,0,1,1,0,1,1,1,1,0,1,1,0,0,1,0,1,0,0,1,1,1,1,0,0,1,1,1,1,0,1,0,0,1,1,1,0,1,0,0,1,0,0,1,1,0,1,1,0,0,1,0,0,1,1,1,0,0,1,1,0,1,1,1,0,0,1,1,0,1,0,1,0,0,1,1,0,1,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,1,1,1,0,1,0,1,0,1,1,0,1,0,0,0,1,1,0,0,1,1,0,1,0,0,1,1,1,0,1,0,1,1,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0,1,1,1,1,0,0,0,1,1,0,1,1,1,1,0,1,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,1,0,1,1,0,1,0,1,1,0,0,0,1,1,0,0,1,0,0,0,0,1,0,1,1,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,1,0,0,0,0,0,1,0,1,1,0,1,1,0,0,0,0,0,1,1,0,0,0,1,0,1,1,0,0,1,0,0,1,1,0,1,1,0,0,1,1,1,1,0,0,1,1,0,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,1,1,0,0,1,0,0,1,1,1,0,1,1,1,1,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,1,1,0,1,1,0,0,1,1,1,1,1,1,0,0,0,1,0,0,0,1,0,0,0,0,0,1,1,1,0,0,0,1,1,0,1,1,1,0,1,0,0,0,0,0,1,1,1,0,0,1,1,0,0,1,1,0,1,1,1,1,0,0,1,0,0,0,0,0,1,0,0,1,0,0,1,1,0,0,0,0,1,1,0,1,0,0,1,0,0,1,1,0,1,0,1,0,0,1,0,0,0,0,1,1,1,0,1,0,0,1,1,0,0,0,0,0,0,1,0,1,1,1,1,0,1,0,1,0,1,0,0,1,1,1,1,1,1,0,0,0,1,0,1,0,1,1,1,0,1,0,0,0,0,1,0,0,0,0,1,1,1,1,0,0,0,0,0,1,0,1,1,0,0,1,0,0,0,1,0,1,1,0,1,1,1,1,0,0,1,1,0,0,0,1,0,0,1,1,0,1,1,1,0,0,1,0,1,1,1,0,0,1,0,0,1,0,0,1,0,1,0,0,1,0,1,1,0,0,1,0,0,1,0,0,0,1,0,1,0,0,0,1,1,0,0,0,1,1,1,1,0,0,1,0,1,1,1,0,1,0,1,1,0,1,1,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,1,1,0,0,0,0,1,1,1,1,1,0,1,0,0,1,1,1,0,1,1,1,1,1,0,0,0,0,0,1,1,1,0,1,0,0,0,1,1,0,1,0,0,0,0,0,0,1,1,1,1,1,0,1,0,0,1,1,1,0,1,1,1,0,1,1,0,0,1,1,1,0,1,1,1,0,0,1,0,0,0,0,0,0,1,0,0,1,1,1,0,0,0,1,1,1,0,1,1,0,1,0,1,0,0,1,1,1,0,0,1,0,0,1,0,1,0,0,1,0,1,0,1,1,1,0,0,1,0,0,1,0,1,0,1,0,1,1,1,0,0,0,1,0,0,0,1,0,1,1,0,0,0,0,0,0,0,1,0,1,0,1,0,0,1,0,0,1,0,0,1,1,0,1,0,0,1,0,0,1,1,1,1,0,1,0,1,1,0,1,0,1,0,1,1,0,0,1,0,1,0,1,0,0,1,1,0,1,1,0,0,1,0,1,0,0,1,0,1,1,0,1,1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,1,0,1,0,0,0,1,1,0,0,0,0,1,1,0,1,0,1,1,0,0,0,1,1,0,1,0,0,1,0,1,1,0,1,0,0,0,0,1,1,1,0,0,0,1,1,0,1,1,1,1,0,1,0,1,0,0,0,1,1,0,1,1,1,0,1,1,1,0,1,1,0,1,1,0,1,1,1,0,1,0,0,1,0,0,0,1,0,1,1,1,1,1,0,0,1,1,0,0,0,0,0,1,1,0,1,1,0,0,1,1,1,0,0,0,1,0,1,0,0,0,1,1,0,0,0,1,1,1,0,1,1,0,1,1,1,0,1,1,0,1,1,0,1,1,1,1,0,1,1,1,1,1,1,1,0,0,1,1,1,0,0,0,1,0,1,0,0,0,0,0,1,1,0,0,1,1,0,1,0,0,1,0,1,1,0,1,0,1,0,1,0,0,1,1,1,1,1,1,0,1,1,1,0,0,0,0,1,0,1,1,0,1,0,1,1,1,1,1,1,0,1,0,1,1,0,1,0,1,1,0,1,1,1,1,1,0,1,1,0,0,1,0,1,1,0,0,1,1,1,1,0,1,0,0,1,1,1,1,0,1,0,1,0,1,0,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,1,1,0,0,1,0,1,0,0,0,1,1,0,1,0,0,0,0,0,0,1,0,1,1,1,0,1,1,0,0,1,1,1,0,0,1,1,0,0,1,0,0,1,0,1,0,1,1,0,1,1,1,1,0,1,0,0,0,1,0,0,0,0,1,1,0,0,0,1,1,0,0,0,1,0,1,1,0,1,0,0,0,1,0,0,0,1,1,0,0,1,0,1,0,1,1,0,1,1,0,0,1,0,0,0,1,0,1,0,0,1,0,1,1,0,1,1,0,1,0,0,0,1,1,1,1,1,1,0,1,1,1,1,1,1,0,1,0,0,1,0,0,1,0,1,1,1,1,0,0,1,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,1,0,0,1,1,0,1,1,1,0,1,1,0,1,1,0,1,0,1,1,0,1,1,];
var gg_b = "1711303201/";

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
