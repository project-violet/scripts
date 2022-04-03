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
case 3663:
case 345:
case 1658:
case 1629:
case 3037:
case 1497:
case 409:
case 763:
case 894:
case 2010:
case 2922:
case 2992:
case 299:
case 3202:
case 3175:
case 2217:
case 1695:
case 648:
case 1625:
case 1869:
case 1465:
case 2727:
case 1993:
case 657:
case 1296:
case 1363:
case 2523:
case 78:
case 3077:
case 176:
case 1132:
case 3328:
case 1310:
case 1502:
case 3022:
case 223:
case 1189:
case 1046:
case 1787:
case 1996:
case 427:
case 719:
case 3700:
case 3050:
case 1274:
case 790:
case 1470:
case 3307:
case 2323:
case 3871:
case 645:
case 3714:
case 2069:
case 3633:
case 1627:
case 2160:
case 1707:
case 530:
case 3686:
case 1847:
case 2125:
case 687:
case 2333:
case 794:
case 2513:
case 2768:
case 1795:
case 1312:
case 481:
case 3562:
case 1413:
case 2346:
case 2950:
case 1863:
case 3532:
case 197:
case 1191:
case 903:
case 2755:
case 3675:
case 1700:
case 3914:
case 4037:
case 3569:
case 990:
case 2485:
case 2760:
case 260:
case 182:
case 797:
case 3722:
case 1615:
case 308:
case 4085:
case 3983:
case 3469:
case 2081:
case 3972:
case 2173:
case 1474:
case 2028:
case 2877:
case 4056:
case 3038:
case 276:
case 445:
case 3299:
case 554:
case 89:
case 3410:
case 2440:
case 3198:
case 1407:
case 3363:
case 1402:
case 3991:
case 3373:
case 3450:
case 3035:
case 2525:
case 650:
case 3338:
case 3563:
case 3159:
case 3514:
case 3861:
case 3756:
case 2191:
case 296:
case 1276:
case 1373:
case 737:
case 976:
case 3781:
case 1828:
case 2267:
case 3309:
case 1618:
case 100:
case 2341:
case 607:
case 1637:
case 447:
case 3004:
case 3706:
case 84:
case 2943:
case 1148:
case 1159:
case 2683:
case 2964:
case 3430:
case 2976:
case 1005:
case 566:
case 1816:
case 1234:
case 2907:
case 3147:
case 2216:
case 1990:
case 1004:
case 2886:
case 2732:
case 3989:
case 312:
case 3244:
case 2457:
case 497:
case 1441:
case 590:
case 3737:
case 1053:
case 4007:
case 2680:
case 1075:
case 1645:
case 3913:
case 2891:
case 3398:
case 2295:
case 38:
case 1660:
case 3334:
case 1750:
case 847:
case 3977:
case 3267:
case 2662:
case 1293:
case 3974:
case 618:
case 981:
case 1742:
case 2103:
case 617:
case 2716:
case 3811:
case 3510:
case 436:
case 2753:
case 59:
case 1894:
case 1526:
case 3990:
case 2058:
case 3352:
case 1686:
case 3091:
case 2837:
case 954:
case 513:
case 3764:
case 2361:
case 3354:
case 55:
case 2949:
case 845:
case 714:
case 2427:
case 489:
case 2490:
case 34:
case 3233:
case 1915:
case 830:
case 970:
case 2797:
case 1639:
case 476:
case 1815:
case 3814:
case 2728:
case 1532:
case 527:
case 3732:
case 1371:
case 2369:
case 3255:
case 1457:
case 2612:
case 1617:
case 2522:
case 535:
case 2993:
case 2437:
case 2134:
case 339:
case 2065:
case 632:
case 2054:
case 2928:
case 502:
case 1319:
case 265:
case 3673:
case 2394:
case 2199:
case 3801:
case 1821:
case 1574:
case 1320:
case 368:
case 755:
case 3620:
case 1508:
case 2998:
case 1572:
case 2871:
case 985:
case 3394:
case 844:
case 336:
case 1205:
case 588:
case 4089:
case 3776:
case 2450:
case 1579:
case 3503:
case 789:
case 2300:
case 3708:
case 1622:
case 1668:
case 2641:
case 4026:
case 3444:
case 325:
case 180:
case 471:
case 1283:
case 3184:
case 163:
case 3103:
case 4084:
case 190:
case 560:
case 2247:
case 1094:
case 1998:
case 441:
case 2345:
case 3471:
case 1903:
case 538:
case 1587:
case 3605:
case 880:
case 3089:
case 1931:
case 3853:
case 1315:
case 862:
case 569:
case 2547:
case 2464:
case 1451:
case 2356:
case 1463:
case 3830:
case 3252:
case 3588:
case 2166:
case 2897:
case 1485:
case 449:
case 3822:
case 3847:
case 1161:
case 2115:
case 1680:
case 773:
case 1177:
case 2459:
case 992:
case 2023:
case 1263:
case 864:
case 44:
case 1395:
case 3133:
case 519:
case 3629:
case 634:
case 699:
case 2803:
case 450:
case 143:
case 1166:
case 1219:
case 1006:
case 1746:
case 485:
case 1631:
case 793:
case 3301:
case 301:
case 2207:
case 518:
case 3956:
case 1676:
case 3104:
case 771:
case 2477:
case 1835:
case 2569:
case 1839:
case 3069:
case 3432:
case 2616:
case 52:
case 3055:
case 1528:
case 204:
case 2050:
case 676:
case 2482:
case 1934:
case 930:
case 1564:
case 811:
case 1321:
case 2925:
case 683:
case 1013:
case 2119:
case 2850:
case 3186:
case 1718:
case 2867:
case 425:
case 2172:
case 942:
case 1760:
case 2142:
case 3816:
case 576:
case 1784:
case 3168:
case 3785:
case 1375:
case 2412:
case 2977:
case 3319:
case 1749:
case 1193:
case 4047:
case 712:
case 1807:
case 2657:
case 1275:
case 882:
case 628:
case 2067:
case 1201:
case 3180:
case 290:
case 3971:
case 174:
case 3132:
case 3435:
case 3114:
case 1536:
case 2990:
case 3025:
case 1481:
case 267:
case 3063:
case 2656:
case 3250:
case 1420:
case 1123:
case 3747:
case 4080:
case 1382:
case 2888:
case 1936:
case 1967:
case 2299:
case 2847:
case 1531:
case 756:
case 410:
case 1711:
case 2222:
case 3637:
case 3364:
case 2561:
case 2442:
case 3988:
case 1369:
case 2940:
case 1611:
case 1522:
case 2013:
case 3182:
case 1092:
case 787:
case 3683:
case 3340:
case 1737:
case 244:
case 3220:
case 1664:
case 2063:
case 2098:
case 1422:
case 735:
case 4038:
case 3937:
case 1367:
case 2514:
case 2969:
case 1899:
case 961:
case 147:
case 655:
case 2962:
case 3345:
case 520:
case 1372:
case 1091:
case 3448:
case 86:
case 2811:
case 596:
case 2256:
case 1891:
case 403:
case 3248:
case 2952:
case 4022:
case 1802:
case 1109:
case 3815:
case 3734:
case 1185:
case 468:
case 2528:
case 323:
case 2389:
case 2195:
case 2288:
case 2648:
case 3156:
case 1255:
case 2363:
case 769:
case 2036:
case 3289:
case 57:
case 973:
case 297:
case 2855:
case 3648:
case 1089:
case 1237:
case 2741:
case 2377:
case 2938:
case 3701:
case 1174:
case 2087:
case 827:
case 2664:
case 2429:
case 4073:
case 1888:
case 2965:
case 124:
case 567:
case 1482:
case 321:
case 3331:
case 625:
case 983:
case 3725:
case 164:
case 1245:
case 3739:
case 1154:
case 2456:
case 2209:
case 2033:
case 1150:
case 803:
case 2436:
case 157:
case 2325:
case 3928:
case 4010:
case 2091:
case 556:
case 3199:
case 1258:
case 3169:
case 2075:
case 3074:
case 1759:
case 4095:
case 849:
case 177:
case 298:
case 2314:
case 2579:
case 1728:
case 887:
case 2311:
case 1350:
case 2373:
case 361:
case 1081:
case 2074:
case 1353:
case 1115:
case 3664:
case 548:
case 4004:
case 2746:
case 1071:
case 477:
case 2972:
case 3779:
case 3221:
case 578:
case 501:
case 3277:
case 3097:
case 3013:
case 3825:
case 1490:
case 3070:
case 429:
case 1909:
case 1146:
case 2615:
case 4066:
case 748:
case 2194:
case 3434:
case 3099:
case 1675:
case 3869:
case 1767:
case 1417:
case 3459:
case 2541:
case 3603:
case 415:
case 2583:
case 382:
case 1055:
case 2936:
case 3607:
case 2960:
case 3533:
case 885:
case 3018:
case 709:
case 3343:
case 3048:
case 732:
case 480:
case 2179:
case 2769:
case 546:
case 412:
case 2644:
case 2509:
case 2162:
case 3810:
case 3625:
case 1945:
case 3566:
case 3594:
case 1829:
case 722:
case 1158:
case 3782:
case 126:
case 2269:
case 2124:
case 134:
case 810:
case 3080:
case 3525:
case 2705:
case 902:
case 3689:
case 3344:
case 1916:
case 2678:
case 3051:
case 2258:
case 912:
case 2956:
case 3106:
case 975:
case 1000:
case 2026:
case 1223:
case 3597:
case 2554:
case 1606:
case 2000:
case 3129:
case 1673:
case 1646:
case 3992:
case 2027:
case 3993:
case 2393:
case 635:
case 1782:
case 852:
case 1624:
case 3021:
case 684:
case 2220:
case 3644:
case 2077:
case 456:
case 2815:
case 1661:
case 1325:
case 795:
case 3203:
case 3170:
case 2533:
case 2794:
case 3719:
case 675:
case 2386:
case 2503:
case 131:
case 322:
case 1739:
case 1163:
case 314:
case 1805:
case 2933:
case 1523:
case 3375:
case 2661:
case 4040:
case 991:
case 1755:
case 1538:
case 2921:
case 2335:
case 828:
case 1054:
case 2231:
case 4031:
case 3975:
case 2709:
case 1236:
case 158:
case 2558:
case 275:
case 2588:
case 2219:
case 289:
case 3335:
case 2758:
case 929:
case 1003:
case 3268:
case 3610:
case 2506:
case 1834:
case 2935:
case 3513:
case 187:
case 1290:
case 2519:
case 2649:
case 2809:
case 2095:
case 434:
case 2951:
case 840:
case 2591:
case 3241:
case 2600:
case 168:
case 3302:
case 103:
case 2019:
case 3515:
case 734:
case 494:
case 1729:
case 2354:
case 817:
case 4063:
case 179:
case 1720:
case 1788:
case 3865:
case 2360:
case 1581:
case 1386:
case 2734:
case 1506:
case 3940:
case 2432:
case 916:
case 798:
case 1980:
case 2941:
case 2947:
case 3703:
case 726:
case 2619:
case 2830:
case 3860:
case 2006:
case 3320:
case 2364:
case 2190:
case 82:
case 1939:
case 1719:
case 470:
case 254:
case 1423:
case 2029:
case 4015:
case 3851:
case 1871:
case 3376:
case 904:
case 1140:
case 1038:
case 3068:
case 2634:
case 1100:
case 760:
case 2278:
case 3210:
case 1969:
case 537:
case 2416:
case 3772:
case 122:
case 3545:
case 1449:
case 1288:
case 2997:
case 48:
case 3326:
case 1983:
case 952:
case 107:
case 1215:
case 2764:
case 104:
case 3045:
case 1501:
case 2249:
case 895:
case 3667:
case 1636:
case 3211:
case 1702:
case 3930:
case 3306:
case 3873:
case 3646:
case 3167:
case 1854:
case 3073:
case 1650:
case 665:
case 3958:
case 2156:
case 3023:
case 3312:
case 1179:
case 376:
case 1291:
case 2189:
case 1846:
case 3488:
case 999:
case 3498:
case 1065:
case 1586:
case 2205:
case 727:
case 1929:
case 3670:
case 338:
case 2424:
case 3327:
case 3645:
case 2781:
case 3368:
case 668:
case 2679:
case 1693:
case 2073:
case 2608:
case 672:
case 1214:
case 1971:
case 1052:
case 1793:
case 2999:
case 242:
case 2255:
case 3438:
case 273:
case 1024:
case 71:
case 366:
case 910:
case 386:
case 762:
case 39:
case 3125:
case 595:
case 870:
case 877:
case 2089:
case 3918:
case 1823:
case 2676:
case 269:
case 1151:
case 2367:
case 2039:
case 2982:
case 2687:
case 2754:
case 3265:
case 246:
case 3621:
case 1841:
case 58:
case 3543:
case 4045:
case 2642:
case 3310:
case 401:
case 3043:
case 4016:
case 2934:
case 3600:
case 1188:
case 2703:
case 1464:
case 521:
case 2777:
case 3414:
case 2495:
case 1048:
case 1867:
case 3403:
case 3635:
case 1069:
case 2469:
case 2447:
case 3946:
case 2251:
case 1096:
case 1561:
case 3423:
case 3121:
case 639:
case 2565:
case 3837:
case 2876:
case 3229:
case 1785:
case 3586:
case 333:
case 2208:
case 1989:
case 2101:
case 5:
case 132:
case 306:
case 3823:
case 2336:
case 1601:
case 1642:
case 1356:
case 575:
case 3029:
case 1400:
case 3456:
case 1756:
case 2539:
case 674:
case 602:
case 3283:
case 2896:
case 908:
case 4055:
case 1928:
case 1034:
case 1575:
case 3381:
case 3228:
case 3959:
case 1446:
case 2666:
case 3126:
case 3939:
case 2283:
case 2301:
case 1412:
case 1259:
case 1337:
case 2542:
case 230:
case 3188:
case 1095:
case 2721:
case 3534:
case 744:
case 1655:
case 397:
case 3413:
case 620:
case 898:
case 1085:
case 2915:
case 3924:
case 1644:
case 128:
case 3237:
case 3666:
case 3794:
case 2724:
case 2468:
case 3458:
case 1251:
case 231:
case 1137:
case 3718:
case 2842:
case 2186:
case 2353:
case 1662:
case 2302:
case 1134:
case 61:
case 2919:
case 1619:
case 2293:
case 2745:
case 1654:
case 772:
case 202:
case 1600:
case 1817:
case 1355:
case 651:
case 3008:
case 3546:
case 1542:
case 1062:
case 2879:
case 294:
case 75:
case 1036:
case 1330:
case 1391:
case 1517:
case 1102:
case 3160:
case 3187:
case 1211:
case 3780:
case 2812:
case 2848:
case 4008:
case 1870:
case 62:
case 285:
case 1227:
case 380:
case 3377:
case 1106:
case 3808:
case 3769:
case 120:
case 32:
case 3536:
case 2572:
case 510:
case 3820:
case 1015:
case 2540:
case 2524:
case 37:
case 871:
case 1687:
case 2096:
case 1515:
case 2638:
case 1169:
case 1083:
case 1585:
case 10:
case 3693:
case 2515:
case 1143:
case 156:
case 1399:
case 2667:
case 646:
case 108:
case 1738:
case 3314:
case 641:
case 503:
case 1657:
case 2221:
case 144:
case 2904:
case 543:
case 3911:
case 350:
case 2501:
case 2344:
case 532:
case 3938:
case 2692:
case 2617:
case 980:
case 2720:
case 3012:
case 4020:
case 1010:
case 1425:
case 2165:
case 4025:
case 832:
case 934:
case 1524:
case 1518:
case 3632:
case 1922:
case 2431:
case 4028:
case 3232:
case 1796:
case 3191:
case 2271:
case 3906:
case 717:
case 558:
case 3174:
case 2544:
case 3420:
case 2593:
case 1602:
case 3609:
case 2690:
case 3356:
case 317:
case 465:
case 3733:
case 3552:
case 3404:
case 685:
case 392:
case 883:
case 2916:
case 3878:
case 101:
case 3067:
case 331:
case 208:
case 2862:
case 3755:
case 2322:
case 1921:
case 3298:
case 24:
case 4029:
case 1776:
case 1218:
case 2136:
case 859:
case 3036:
case 2779:
case 2452:
case 2866:
case 3578:
case 500:
case 1691:
case 3641:
case 2213:
case 443:
case 2434:
case 750:
case 541:
case 2860:
case 3076:
case 3304:
case 2610:
case 1507:
case 218:
case 3316:
case 286:
case 2097:
case 3042:
case 3627:
case 738:
case 609:
case 3421:
case 1056:
case 121:
case 3929:
case 3480:
case 1057:
case 319:
case 2494:
case 3386:
case 1893:
case 890:
case 1730:
case 4079:
case 1203:
case 2167:
case 2611:
case 1133:
case 148:
case 3422:
case 1009:
case 1195:
case 3271:
case 865:
case 2603:
case 2549:
case 3955:
case 2290:
case 2766:
case 1303:
case 2024:
case 1721:
case 3754:
case 1543:
case 2618:
case 129:
case 619:
case 185:
case 3565:
case 3792:
case 1868:
case 2620:
case 2694:
case 3010:
case 3072:
case 3041:
case 1282:
case 3215:
case 3523:
case 3576:
case 2329:
case 924:
case 2512:
case 3431:
case 1948:
case 3845:
case 2184:
case 3567:
case 2309:
case 1786:
case 1014:
case 3557:
case 207:
case 3672:
case 3138:
case 587:
case 3681:
case 3516:
case 22:
case 3656:
case 3429:
case 1173:
case 1284:
case 1199:
case 841:
case 2881:
case 3688:
case 2130:
case 1504:
case 3399:
case 2861:
case 3518:
case 3134:
case 1432:
case 64:
case 1875:
case 3826:
case 711:
case 1354:
case 2715:
case 3856:
case 3862:
case 3437:
case 3784:
case 1681:
case 45:
case 2984:
case 2031:
case 3622:
case 3704:
case 3547:
case 3249:
case 2243:
case 16:
case 264:
case 3442:
case 3465:
case 3651:
case 2885:
case 3143:
case 1480:
case 1577:
case 705:
case 212:
case 2493:
case 1984:
case 25:
case 889:
case 3524:
case 188:
case 2994:
case 2939:
case 3952:
case 2682:
case 3953:
case 1803:
case 1352:
case 2957:
case 2146:
case 1783:
case 796:
case 283:
case 2798:
case 820:
case 3671:
case 4064:
case 3353:
case 1209:
case 777:
case 2121:
case 2778:
case 3049:
case 2989:
case 531:
case 1429:
case 3176:
case 2650:
case 585:
case 1885:
case 2749:
case 1483:
case 2545:
case 3604:
case 3752:
case 528:
case 1812:
case 73:
case 1261:
case 2530:
case 3290:
case 2802:
case 1442:
case 3224:
case 955:
case 3855:
case 860:
case 3809:
case 1270:
case 1733:
case 647:
case 3317:
case 850:
case 484:
case 3258:
case 1610:
case 723:
case 3800:
case 1080:
case 3017:
case 642:
case 3572:
case 1492:
case 3445:
case 1130:
case 3658:
case 257:
case 451:
case 1043:
case 3027:
case 534:
case 1434:
case 1198:
case 1688:
case 2831:
case 1844:
case 2287:
case 600:
case 1956:
case 2454:
case 679:
case 2265:
case 757:
case 2918:
case 1379:
case 493:
case 1887:
case 1331:
case 3788:
case 935:
case 3844:
case 3717:
case 173:
case 1752:
case 2375:
case 3617:
case 2714:
case 3259:
case 1450:
case 3573:
case 1165:
case 1743:
case 293:
case 1026:
case 622:
case 1831:
case 631:
case 1926:
case 3145:
case 1405:
case 369:
case 901:
case 4011:
case 1070:
case 1090:
case 2646:
case 2093:
case 2079:
case 1914:
case 2822:
case 598:
case 2578:
case 33:
case 4000:
case 3446:
case 995:
case 3362:
case 2011:
case 2577:
case 1679:
case 3606:
case 1067:
case 1630:
case 421:
case 658:
case 1827:
case 3582:
case 1663:
case 2747:
case 150:
case 1129:
case 663:
case 396:
case 1509:
case 1281:
case 1938:
case 1952:
case 2472:
case 3112:
case 2654:
case 3775:
case 3066:
case 116:
case 2767:
case 818:
case 1884:
case 115:
case 1559:
case 1349:
case 3094:
case 3797:
case 3162:
case 3799:
case 2371:
case 629:
case 224:
case 3235:
case 3690:
case 2817:
case 2632:
case 2260:
case 2129:
case 842:
case 3590:
case 3584:
case 1317:
case 3046:
case 3643:
case 2629:
case 1539:
case 3910:
case 1099:
case 3539:
case 2575:
case 60:
case 1131:
case 3549:
case 2200:
case 70:
case 1516:
case 2932:
case 3127:
case 2670:
case 2622:
case 4024:
case 3155:
case 3378:
case 2056:
case 977:
case 2181:
case 637:
case 1388:
case 688:
case 2923:
case 3274:
case 2438:
case 464:
case 956:
case 3858:
case 2138:
case 1162:
case 4017:
case 785:
case 1754:
case 913:
case 200:
case 2117:
case 718:
case 3190:
case 2310:
case 1145:
case 653:
case 3116:
case 112:
case 83:
case 1328:
case 3540:
case 1568:
case 1953:
case 3916:
case 3802:
case 1724:
case 3101:
case 2444:
case 3384:
case 1452:
case 3685:
case 2750:
case 2475:
case 1565:
case 522:
case 2832:
case 2730:
case 2239:
case 557:
case 3846:
case 1256:
case 1696:
case 1035:
case 3392:
case 3419:
case 1904:
case 2996:
case 3636:
case 3942:
case 1976:
case 957:
case 2621:
case 1907:
case 533:
case 2631:
case 1424:
case 2048:
case 2557:
case 3979:
case 1459:
case 3923:
case 1254:
case 536:
case 1930:
case 110:
case 1277:
case 682:
case 866:
case 1546:
case 2462:
case 1212:
case 1764:
case 1927:
case 2652:
case 1958:
case 2390:
case 1765:
case 1228:
case 751:
case 8:
case 612:
case 1471:
case 615:
case 2873:
case 2717:
case 678:
case 1230:
case 3239:
case 2105:
case 835:
case 3921:
case 1748:
case 2430:
case 2435:
case 11:
case 3877:
case 3339:
case 3544:
case 2279:
case 953:
case 1044:
case 993:
case 2009:
case 2630:
case 3323:
case 1294:
case 994:
case 1018:
case 2647:
case 3509:
case 2521:
case 393:
case 2268:
case 3591:
case 564:
case 2788:
case 248:
case 2448:
case 3337:
case 2137:
case 88:
case 2241:
case 1362:
case 3261:
case 1918:
case 2102:
case 243:
case 1064:
case 3493:
case 713:
case 2085:
case 2399:
case 1960:
case 1860:
case 2109:
case 943:
case 2321:
case 1229:
case 2674:
case 17:
case 2094:
case 1351:
case 1306:
case 2489:
case 2002:
case 2487:
case 2824:
case 2810:
case 2068:
case 3500:
case 3084:
case 1461:
case 3441:
case 3969:
case 161:
case 4065:
case 1845:
case 630:
case 3945:
case 4006:
case 442:
case 746:
case 2149:
case 2869:
case 2183:
case 2712:
case 3113:
case 30:
case 2198:
case 196:
case 1468:
case 1455:
case 1573:
case 1924:
case 1777:
case 3005:
case 944:
case 1551:
case 1974:
case 1690:
case 1623:
case 716:
case 2789:
case 1279:
case 3287:
case 2090:
case 304:
case 710:
case 2351:
case 1433:
case 814:
case 292:
case 21:
case 2076:
case 1460:
case 1122:
case 2406:
case 2563:
case 360:
case 949:
case 3163:
case 640:
case 459:
case 2906:
case 1467:
case 1333:
case 483:
case 2423:
case 2883:
case 2722:
case 7:
case 2193:
case 1790:
case 2086:
case 2852:
case 1216:
case 1855:
case 2508:
case 1316:
case 1020:
case 1883:
case 127:
case 2044:
case 2587:
case 3272:
case 256:
case 378:
case 3555:
case 2872:
case 4048:
case 3288:
case 1226:
case 3705:
case 3960:
case 3213:
case 753:
case 1347:
case 2272:
case 514:
case 3561:
case 759:
case 1488:
case 1651:
case 3152:
case 824:
case 1197:
case 153:
case 2158:
case 3243:
case 3829:
case 399:
case 2774:
case 3612:
case 881:
case 2700:
case 3880:
case 784:
case 1224:
case 1428:
case 673:
case 2639:
case 1475:
case 3840:
case 2032:
case 1902:
case 95:
case 592:
case 2550:
case 1994:
case 2844:
case 43:
case 3574:
case 2235:
case 49:
case 3595:
case 3665:
case 435:
case 3245:
case 358:
case 3009:
case 142:
case 2461:
case 1578:
case 3623:
case 1951:
case 969:
case 2396:
case 1774:
case 958:
case 1535:
case 1761:
case 1436:
case 2264:
case 2372:
case 2795:
case 2605:
case 3110:
case 0:
case 440:
case 1856:
case 169:
case 287:
case 3920:
case 51:
case 2376:
case 491:
case 3372:
case 2407:
case 2534:
case 9:
case 3172:
case 1548:
case 743:
case 2163:
case 2210:
case 2671:
case 2051:
case 3330:
case 1172:
case 2262:
case 730:
case 2980:
case 2286:
case 1136:
case 2562:
case 492:
case 3124:
case 1196:
case 1716:
case 2498:
case 3528:
case 654:
case 3805:
case 3965:
case 3179:
case 3870:
case 2274:
case 2536:
case 1649:
case 2188:
case 3044:
case 3679:
case 1634:
case 461:
case 2488:
case 3926:
case 1999:
case 1941:
case 3849:
case 2417:
case 3522:
case 2038:
case 1202:
case 2248:
case 3761:
case 2226:
case 2574:
case 2426:
case 3899:
case 3680:
case 215:
case 488:
case 978:
case 2254:
case 1745:
case 3078:
case 3391:
case 1822:
case 3660:
case 68:
case 2347:
case 888:
case 1339:
case 3206:
case 375:
case 1268:
case 221:
case 3383:
case 1947:
case 3020:
case 1060:
case 2945:
case 2113:
case 2135:
case 50:
case 3407:
case 2693:
case 700:
case 3111:
case 1278:
case 1370:
case 1962:
case 3409:
case 237:
case 979:
case 279:
case 1262:
case 2532:
case 1800:
case 2451:
case 2291:
case 703:
case 3759:
case 2467:
case 1669:
case 968:
case 900:
case 529:
case 1955:
case 3520:
case 1448:
case 813:
case 3385:
case 1672:
case 2092:
case 1289:
case 3193:
case 1142:
case 2449:
case 2312:
case 1889:
case 2606:
case 1309:
case 2053:
case 1550:
case 4071:
case 3117:
case 3599:
case 1865:
case 2145:
case 4009:
case 2233:
case 3694:
case 1558:
case 357:
case 92:
case 2825:
case 2059:
case 2898:
case 2415:
case 1511:
case 303:
case 1933:
case 3697:
case 28:
case 3332:
case 2986:
case 2004:
case 2698:
case 3583:
case 1814:
case 3476:
case 2672:
case 3246:
case 1977:
case 2122:
case 408:
case 3207:
case 1722:
case 1380:
case 1:
case 1621:
case 3875:
case 2836:
case 2155:
case 1476:
case 3095:
case 1900:
case 3092:
case 808:
case 3894:
case 1943:
case 413:
case 1491:
case 229:
case 1235:
case 1762:
case 1583:
case 482:
case 932:
case 2580:
case 1510:
case 1940:
case 3691:
case 905:
case 3857:
case 720:
case 3634:
case 3886:
case 354:
case 3995:
case 3296:
case 1152:
case 3676:
case 3902:
case 3827:
case 742:
case 3212:
case 1712:
case 681:
case 2413:
case 1246:
case 3642:
case 696:
case 1376:
case 2954:
case 3949:
case 2030:
case 776:
case 1789:
case 833:
case 886:
case 1824:
case 2813:
case 2535:
case 2114:
case 960:
case 6:
case 1431:
case 1248:
case 3427:
case 555:
case 2763:
case 1307:
case 1213:
case 3908:
case 3787:
case 81:
case 1626:
case 1444:
case 359:
case 253:
case 3852:
case 1593:
case 3713:
case 1111:
case 786:
case 1286:
case 77:
case 3034:
case 3962:
case 2362:
case 2659:
case 633:
case 235:
case 1607:
case 165:
case 2021:
case 988:
case 2123:
case 1731:
case 69:
case 3197:
case 3580:
case 2168:
case 708:
case 1305:
case 1397:
case 3773:
case 2410:
case 1684:
case 3859:
case 3165:
case 18:
case 3039:
case 1107:
case 1029:
case 3227:
case 3777:
case 3684:
case 2701:
case 1041:
case 2273:
case 3661:
case 167:
case 340:
case 3806:
case 728:
case 320:
case 1809:
case 1329:
case 3463:
case 3659:
case 848:
case 419:
case 3807:
case 2596:
case 892:
case 1153:
case 334:
case 2900:
case 764:
case 2143:
case 823:
case 2987:
case 1594:
case 210:
case 3798:
case 3161:
case 3292:
case 1699:
case 2348:
case 3638:
case 563:
case 344:
case 348:
case 774:
case 1813:
case 166:
case 4093:
case 1853:
case 2893:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1648944002/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,1,1,1,0,0,0,0,0,0,0,1,1,1,1,0,0,0,1,1,0,0,1,0,0,1,1,0,1,0,1,0,0,0,1,1,0,0,0,1,1,1,0,0,0,1,1,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,1,0,1,1,1,0,0,0,0,1,0,1,0,1,0,0,1,1,0,0,0,0,1,0,1,0,0,1,1,0,1,1,0,1,1,1,1,0,0,1,0,0,1,1,0,0,1,0,1,0,1,1,0,0,1,1,1,0,0,0,1,0,1,0,0,0,0,1,0,0,1,0,1,1,1,1,1,1,1,0,0,0,1,1,0,0,1,0,1,1,0,1,1,0,0,0,1,1,0,1,0,0,0,0,0,0,0,1,1,1,0,0,1,0,0,1,0,0,1,0,1,1,0,1,0,0,1,0,1,1,1,1,1,0,0,1,1,0,1,0,1,0,1,1,0,0,1,0,1,0,1,1,0,1,1,0,1,1,0,1,0,0,1,1,1,1,0,0,0,1,1,1,0,1,0,1,1,1,1,0,0,0,1,0,1,0,1,1,1,1,0,0,1,0,0,1,1,0,1,1,1,0,0,1,0,1,0,1,1,1,0,1,0,0,1,1,0,1,1,1,0,1,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,1,0,1,0,0,1,0,1,0,1,1,1,0,1,0,1,1,0,1,0,0,0,0,0,1,0,1,1,1,1,1,0,1,0,0,1,0,1,0,0,0,1,1,1,0,0,1,1,0,1,0,1,1,1,0,1,1,0,0,0,0,0,1,1,1,1,0,1,0,0,1,1,1,1,1,0,0,1,0,1,0,1,0,1,1,1,0,1,1,1,1,1,0,0,1,1,0,0,1,0,1,0,1,0,1,1,1,1,0,0,0,1,0,0,1,0,1,1,1,0,1,0,1,1,1,0,1,0,1,0,1,1,1,1,0,0,0,1,1,1,0,0,0,0,1,0,1,0,1,0,0,0,1,1,1,1,0,1,1,0,1,0,1,1,0,0,1,1,0,1,0,0,1,1,1,1,0,0,1,1,0,0,0,0,0,0,1,1,0,0,1,0,0,0,0,1,1,0,1,1,0,0,0,0,1,1,1,1,1,1,0,1,1,0,0,1,1,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,1,1,0,1,0,1,1,1,1,1,0,0,0,0,0,1,0,1,1,0,0,1,0,0,1,0,1,1,1,1,1,0,0,1,0,1,1,1,1,1,1,0,1,0,0,1,0,1,0,1,1,0,0,1,0,1,0,1,0,1,1,1,1,0,1,0,1,1,0,1,1,0,1,0,0,0,0,1,0,1,1,0,1,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,1,1,0,0,0,0,1,0,0,1,0,0,0,1,0,0,1,1,1,1,0,1,0,1,1,0,1,1,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,1,1,1,1,1,1,1,0,1,1,0,0,1,1,0,1,0,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,1,1,0,0,0,1,0,1,0,1,0,0,1,0,0,1,1,1,0,0,0,1,0,1,0,1,0,0,1,0,1,0,0,0,1,0,0,1,0,0,0,1,1,1,1,0,1,0,0,0,0,1,0,0,1,1,1,1,1,1,0,0,0,0,1,0,0,1,1,0,0,0,0,0,0,1,1,1,1,0,1,1,1,1,0,1,0,0,1,0,0,1,1,0,0,1,0,1,1,0,0,1,1,0,0,1,0,1,0,0,1,0,1,1,1,1,0,0,0,1,0,0,1,0,0,0,0,1,0,1,1,1,1,1,1,0,0,1,0,1,0,0,0,1,1,1,0,0,1,1,1,1,1,0,1,1,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,1,1,0,1,0,0,0,0,0,0,1,1,0,1,0,1,0,0,1,1,0,1,1,1,1,1,1,1,0,1,1,1,1,0,0,1,0,1,0,0,1,1,1,1,1,1,0,0,0,1,1,1,1,0,1,1,0,0,0,0,0,0,0,1,0,0,1,1,1,1,1,1,0,0,0,1,1,0,1,0,0,0,0,0,0,0,1,0,1,0,1,1,0,1,0,0,0,0,0,0,1,1,1,0,0,1,1,0,0,0,0,1,1,0,0,1,1,0,0,0,1,1,0,1,0,1,1,1,0,1,0,1,1,0,1,1,1,1,0,0,0,1,0,1,1,0,1,0,0,1,0,1,0,1,1,1,0,0,0,0,0,0,1,1,0,1,0,1,0,0,1,0,1,0,0,0,1,1,1,0,1,1,1,1,0,0,1,0,1,0,1,1,1,0,0,0,0,1,0,0,0,1,1,0,0,1,0,1,1,1,0,0,1,0,1,0,1,1,1,0,1,1,1,1,1,1,0,0,1,1,1,1,1,0,0,0,0,0,0,1,0,0,1,1,0,1,0,0,1,0,0,1,0,1,0,0,0,0,0,1,1,1,0,0,1,0,0,0,1,0,0,1,1,0,1,1,0,0,0,1,1,0,1,0,1,1,1,1,1,0,1,1,0,0,1,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,1,1,1,0,1,0,0,0,0,0,0,1,0,0,1,1,1,0,0,1,0,0,0,0,0,1,1,1,0,0,0,0,1,1,1,1,1,1,1,0,0,1,0,1,1,0,1,1,0,0,0,1,0,0,1,0,0,0,1,1,1,1,0,1,0,1,1,1,0,0,0,0,0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0,1,0,1,1,1,1,1,1,0,1,0,0,0,1,0,0,1,0,1,1,0,0,0,1,0,0,0,1,1,1,0,1,1,0,0,0,0,1,0,1,1,1,0,1,0,1,1,1,1,1,1,1,0,1,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,1,1,1,0,1,0,0,0,0,0,1,0,0,1,1,0,0,1,0,1,1,1,0,1,0,1,1,0,1,1,1,0,1,0,1,0,0,1,0,1,1,0,1,0,1,1,1,1,0,0,1,1,1,0,1,1,0,1,0,0,0,0,1,1,0,0,1,0,0,0,0,1,0,1,1,1,1,0,0,1,0,1,0,1,0,0,0,0,0,1,1,0,1,0,1,0,0,0,1,0,0,0,1,0,0,1,0,0,1,1,0,0,0,1,1,1,0,0,0,0,1,0,1,1,0,1,0,0,0,1,1,1,1,0,1,1,1,0,0,1,0,1,0,0,0,0,0,0,1,1,1,0,0,0,0,1,1,1,0,0,0,1,0,1,0,1,1,0,0,1,1,0,0,1,0,0,1,1,0,0,1,1,0,1,0,1,0,0,1,1,1,1,1,1,0,0,1,0,1,1,0,0,1,1,0,1,1,1,0,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,1,1,1,1,1,0,0,1,1,1,1,1,0,0,0,1,1,1,0,0,1,1,0,0,1,1,1,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,1,0,1,0,0,1,0,1,1,0,1,0,0,0,1,1,0,0,0,1,1,0,0,1,0,0,1,0,0,0,0,0,1,1,1,0,0,1,1,0,0,1,0,0,1,1,0,0,0,1,1,0,1,0,0,0,1,0,0,1,0,1,0,0,1,1,0,0,1,0,1,1,1,1,0,1,1,1,0,0,1,1,1,0,1,0,0,0,0,0,1,0,1,1,1,0,0,0,0,1,0,1,1,1,0,0,0,1,1,0,0,1,0,0,1,0,0,0,1,0,1,0,0,0,1,1,0,0,0,0,1,0,0,1,0,1,1,1,1,1,1,0,1,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,1,1,1,0,1,0,0,1,0,1,0,1,0,1,1,0,0,0,0,0,0,1,1,1,0,0,0,0,1,1,0,0,0,1,0,1,1,0,0,1,1,1,0,1,0,1,1,0,0,0,0,1,1,1,1,1,0,0,0,0,1,1,1,0,1,1,0,1,0,1,0,0,0,0,0,1,1,1,0,1,1,1,1,1,1,1,0,0,0,1,0,0,0,1,0,1,0,0,1,1,1,1,0,0,1,0,0,0,1,1,0,1,0,1,1,1,1,0,0,0,1,0,1,1,0,0,1,0,1,0,0,0,0,0,0,1,0,0,1,0,1,0,0,0,0,1,0,1,0,1,0,0,1,1,0,0,0,1,0,0,1,0,1,0,1,0,1,1,1,1,0,1,0,1,0,1,1,0,1,0,0,1,1,0,1,1,0,0,1,1,1,1,0,0,1,1,0,0,1,0,1,0,0,0,1,0,1,0,1,0,1,1,0,0,0,1,0,1,1,1,1,1,0,1,0,1,0,0,1,0,0,0,0,0,0,0,0,1,1,0,1,0,0,1,1,1,1,0,1,1,1,0,1,0,0,1,0,0,1,0,1,0,0,1,1,1,0,1,0,1,0,0,0,1,1,1,0,0,0,0,0,1,0,1,0,1,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,0,1,1,1,0,1,1,1,0,0,0,1,0,1,0,1,0,0,0,0,0,1,1,1,0,0,1,1,1,0,0,0,0,0,1,1,1,0,0,1,0,0,1,1,0,1,1,1,1,1,0,0,1,0,1,0,1,0,0,1,0,0,0,0,1,1,1,0,0,1,1,1,1,1,0,1,0,1,0,0,1,0,1,0,0,0,0,1,0,0,0,1,1,0,0,0,1,1,1,1,0,1,0,0,0,0,1,1,0,1,1,0,0,1,0,0,0,0,1,1,1,0,1,1,1,1,0,1,0,1,0,1,1,1,0,1,0,1,0,1,1,1,0,0,0,1,0,1,1,0,0,0,1,0,1,0,1,0,1,0,0,1,0,0,0,1,0,0,0,0,1,1,1,0,0,1,1,1,0,1,1,0,0,0,1,0,0,1,0,1,0,1,1,1,0,0,0,0,1,1,1,1,1,1,0,0,0,0,1,0,1,1,1,1,1,1,0,0,0,1,0,1,1,1,0,1,1,1,0,1,0,0,1,1,1,1,0,1,1,0,0,0,0,0,1,1,0,1,0,0,1,0,1,1,1,0,0,0,0,0,1,1,0,1,0,1,0,0,0,1,0,0,0,1,1,1,1,1,1,1,1,0,1,1,0,0,1,1,0,0,1,0,1,1,0,1,1,1,1,1,1,0,0,1,1,0,1,0,0,1,0,0,0,1,1,1,1,1,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,1,0,1,0,1,1,0,0,0,0,0,0,1,0,1,0,0,1,0,1,0,0,1,0,1,1,0,0,0,1,1,0,1,1,0,1,0,1,1,1,1,0,1,1,0,1,0,0,0,0,1,1,0,0,0,1,1,0,1,1,0,1,0,1,1,0,1,0,0,1,1,0,0,0,0,1,1,1,0,1,0,0,0,0,0,1,1,0,1,0,1,0,0,0,0,0,1,1,0,0,0,0,1,0,0,1,0,1,0,0,1,1,1,0,1,1,0,0,1,1,0,0,0,1,0,1,1,1,0,1,1,0,1,0,0,1,0,0,0,0,1,1,0,1,1,1,0,0,1,1,0,1,0,1,1,0,1,1,1,0,1,1,0,1,0,0,1,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,1,0,1,1,1,0,0,1,0,0,1,0,1,0,0,0,0,0,1,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,0,1,1,0,0,0,1,0,1,0,1,0,0,0,1,0,0,1,1,1,0,1,1,0,1,0,0,0,1,1,1,0,1,0,0,1,0,1,0,1,1,1,0,1,1,0,1,0,0,0,0,1,1,0,0,0,1,0,1,1,0,0,1,0,1,0,1,0,1,1,1,1,1,1,0,1,1,1,0,0,0,1,0,0,1,1,0,0,0,1,1,0,1,0,1,1,0,0,1,0,0,0,0,1,1,1,1,0,1,1,0,0,0,1,0,1,1,1,1,1,1,0,0,1,1,1,1,0,0,1,0,0,1,1,1,0,0,1,1,1,1,1,0,0,0,0,0,1,0,1,0,1,1,1,1,0,1,0,0,1,1,1,1,0,0,0,1,1,1,0,0,1,1,1,1,0,1,0,1,1,0,0,1,0,1,0,1,1,0,1,1,1,1,0,0,0,1,1,1,0,0,1,0,1,0,0,0,1,1,0,0,1,0,1,0,1,0,1,0,0,1,0,1,1,0,1,0,1,1,0,0,0,1,0,1,1,1,0,1,0,0,1,1,1,1,1,1,1,0,0,1,0,0,1,0,0,0,1,0,1,1,0,1,1,1,0,0,0,0,0,1,0,0,0,0,1,0,1,0,1,0,1,0,0,0,0,1,0,1,0,0,1,1,0,1,0,1,0,0,1,1,1,0,1,1,0,1,1,1,0,0,1,1,0,1,0,1,0,1,0,0,1,0,0,1,0,0,0,1,0,0,0,0,1,1,1,1,0,0,1,1,0,0,0,1,0,0,1,1,1,0,0,1,0,0,0,0,1,0,1,0,1,0,1,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,1,1,1,0,1,1,1,1,1,1,1,0,1,1,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,1,1,1,0,1,1,1,1,0,1,0,0,1,0,0,1,0,1,0,1,0,1,0,0,1,0,1,1,1,0,0,0,0,0,1,0,0,1,1,1,0,1,1,0,0,0,0,1,0,1,1,0,0,0,1,1,1,0,1,1,1,1,0,1,0,1,0,1,1,1,1,0,1,1,0,0,1,1,0,0,0,0,0,1,0,1,0,0,0,0,1,0,1,0,0,0,1,1,0,0,1,0,1,0,1,0,0,0,1,0,0,1,0,1,1,1,0,0,0,1,1,0,0,1,1,0,0,1,1,0,0,0,0,1,0,1,1,1,1,0,0,1,1,0,1,1,0,0,0,1,1,0,0,1,0,1,0,1,0,1,0,1,0,0,0,0,1,0,0,0,1,0,1,1,0,1,1,0,0,1,0,1,1,1,0,1,0,0,1,1,0,0,1,0,1,1,0,1,1,1,1,1,0,1,1,1,0,0,0,0,1,0,1,1,1,0,1,0,0,1,0,0,1,0,1,0,0,1,0,0,1,0,1,0,1,0,0,1,0,0,1,1,0,1,1,0,0,0,1,0,0,0,1,0,0,1,0,0,0,0,1,1,0,0,0,1,1,1,1,1,1,0,0,0,1,0,1,1,1,1,1,0,0,0,1,1,1,0,1,1,1,0,0,1,0,0,0,0,1,1,0,1,0,0,0,0,1,1,1,1,0,0,1,0,1,1,1,0,0,1,1,1,0,0,1,1,0,1,0,0,1,1,0,0,1,1,1,1,0,0,0,0,0,1,1,1,0,1,0,0,0,0,1,0,0,1,0,0,1,1,0,0,1,0,0,0,1,0,1,0,1,1,1,1,1,0,1,0,0,1,1,1,0,1,0,1,1,1,0,1,0,1,1,1,1,0,1,1,1,0,1,1,1,1,1,1,1,0,1,1,1,1,0,1,1,1,1,0,1,0,1,1,0,1,1,1,1,1,0,0,1,1,0,0,0,0,1,0,1,0,1,0,0,0,0,1,1,0,1,1,1,0,0,0,1,0,1,1,0,0,1,1,0,0,0,0,0,1,0,1,1,0,1,1,0,1,0,1,1,1,0,0,0,1,0,0,0,1,0,1,1,0,0,0,1,0,1,0,1,0,1,0,0,0,1,0,1,0,1,0,0,1,1,0,0,1,0,1,0,0,1,1,0,0,0,0,0,1,0,0,1,0,1,1,1,1,0,1,1,0,0,0,0,1,0,1,0,1,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,0,1,1,0,1,1,1,1,0,1,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,0,1,0,0,1,1,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,1,1,0,1,1,0,0,1,0,0,0,0,1,0,1,1,1,1,0,0,1,1,0,0,0,1,1,0,1,1,0,1,1,1,1,1,1,0,0,0,1,1,0,1,0,1,1,1,1,1,1,1,0,1,1,1,1,0,1,0,0,0,1,1,0,1,0,1,1,0,1,1,1,1,0,1,1,0,0,1,0,0,0,1,0,0,0,0,1,0,0,1,0,0,1,1,1,0,1,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,1,1,1,0,1,0,0,1,0,0,0,1,0,0,1,1,1,1,1,1,0,1,1,0,1,1,1,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,1,0,1,1,1,0,0,0,1,0,1,0,1,0,0,1,0,1,1,1,1,1,0,1,1,1,1,1,1,1,0,1,1,1,1,0,1,1,0,1,1,1,0,1,0,1,0,0,1,0,0,1,0,1,0,1,0,0,1,0,0,1,0,1,0,0,0,1,1,1,1,1,1,0,0,0,0,1,0,1,1,0,0,1,1,0,1,1,0,0,1,0,0,1,0,0,0,1,0,1,1,0,1,1,1,0,1,0,0,1,0,0,1,0,1,0,1,1,1,0,1,1,1,1,0,0,0,0,0,0,1,0,1,1,1,1,0,1,1,1,0,1,0,0,0,0,0,0,1,1,1,0,0,0,1,1,0,1,0,1,0,0,0,1,0,0,1,0,1,1,1,1,1,0,0,1,0,1,1,1,1,0,1,0,0,1,1,1,1,1,1,0,0,1,1,1,1,1,1,0,0,0,0,1,1,1,1,0,1,0,1,1,1,1,1,0,0,1,1,1,0,0,1,1,1,0,1,1,1,0,1,0,];
var gg_b = "1648944002/";

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
