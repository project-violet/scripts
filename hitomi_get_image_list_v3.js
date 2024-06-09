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
case 1353:
case 3221:
case 330:
case 878:
case 489:
case 2004:
case 3125:
case 2242:
case 1533:
case 2405:
case 2119:
case 650:
case 2276:
case 3923:
case 493:
case 3145:
case 928:
case 1254:
case 778:
case 2765:
case 2572:
case 995:
case 3704:
case 387:
case 756:
case 2013:
case 3940:
case 274:
case 2473:
case 2312:
case 2424:
case 3091:
case 539:
case 779:
case 2796:
case 3592:
case 3149:
case 2992:
case 523:
case 3710:
case 1378:
case 847:
case 3506:
case 4056:
case 1880:
case 2198:
case 1152:
case 394:
case 3679:
case 584:
case 3502:
case 3284:
case 89:
case 3069:
case 1010:
case 2217:
case 870:
case 751:
case 652:
case 3744:
case 2060:
case 3519:
case 635:
case 1512:
case 156:
case 9:
case 1720:
case 1108:
case 352:
case 716:
case 2986:
case 1204:
case 1085:
case 265:
case 649:
case 3524:
case 1848:
case 440:
case 184:
case 4047:
case 1486:
case 1806:
case 154:
case 3638:
case 4:
case 1732:
case 853:
case 775:
case 2547:
case 244:
case 1441:
case 3804:
case 1145:
case 3903:
case 1293:
case 1539:
case 297:
case 1221:
case 2575:
case 2057:
case 2477:
case 1792:
case 1012:
case 344:
case 834:
case 3434:
case 3324:
case 1394:
case 2799:
case 1187:
case 3765:
case 1654:
case 2288:
case 2184:
case 1543:
case 990:
case 838:
case 2269:
case 82:
case 4038:
case 2904:
case 4045:
case 2361:
case 425:
case 3060:
case 3827:
case 370:
case 449:
case 3205:
case 672:
case 2895:
case 960:
case 3785:
case 547:
case 3644:
case 3604:
case 236:
case 3356:
case 1053:
case 2388:
case 2368:
case 3981:
case 781:
case 587:
case 4017:
case 823:
case 2150:
case 1093:
case 2759:
case 2520:
case 2098:
case 3131:
case 1538:
case 989:
case 1705:
case 2190:
case 127:
case 2225:
case 2394:
case 2729:
case 2597:
case 1131:
case 2468:
case 1690:
case 3143:
case 933:
case 903:
case 709:
case 1147:
case 144:
case 1463:
case 2549:
case 3231:
case 3900:
case 536:
case 1288:
case 3691:
case 984:
case 1936:
case 3014:
case 3415:
case 2313:
case 4011:
case 3267:
case 2157:
case 2735:
case 3406:
case 1154:
case 2973:
case 762:
case 2767:
case 2595:
case 1042:
case 2709:
case 3357:
case 1738:
case 3686:
case 929:
case 1073:
case 1226:
case 1033:
case 1926:
case 1387:
case 2187:
case 3634:
case 3134:
case 1540:
case 2291:
case 1139:
case 2826:
case 356:
case 4070:
case 3857:
case 772:
case 393:
case 1643:
case 521:
case 3851:
case 1161:
case 1473:
case 529:
case 3677:
case 2055:
case 3674:
case 1418:
case 3946:
case 2500:
case 2762:
case 5:
case 1314:
case 3759:
case 3062:
case 2191:
case 2795:
case 2456:
case 3203:
case 2510:
case 2722:
case 2398:
case 52:
case 1605:
case 3793:
case 1636:
case 1392:
case 2738:
case 2699:
case 2366:
case 136:
case 2788:
case 209:
case 351:
case 3076:
case 1477:
case 1072:
case 4031:
case 703:
case 1349:
case 3528:
case 2030:
case 2763:
case 2140:
case 2392:
case 1030:
case 1410:
case 3761:
case 701:
case 2087:
case 492:
case 961:
case 748:
case 2421:
case 3376:
case 4087:
case 1165:
case 3783:
case 3990:
case 3870:
case 1661:
case 2543:
case 2953:
case 1845:
case 2146:
case 2712:
case 1489:
case 411:
case 1630:
case 3572:
case 3917:
case 613:
case 94:
case 3543:
case 3162:
case 909:
case 1116:
case 181:
case 3365:
case 2229:
case 1408:
case 2349:
case 2675:
case 476:
case 3351:
case 1505:
case 409:
case 1428:
case 859:
case 1952:
case 3603:
case 2602:
case 902:
case 1616:
case 1134:
case 3330:
case 1144:
case 2647:
case 3548:
case 304:
case 2860:
case 4050:
case 1238:
case 1338:
case 952:
case 3968:
case 450:
case 3999:
case 65:
case 2723:
case 3584:
case 3157:
case 3433:
case 3820:
case 4043:
case 530:
case 3892:
case 1291:
case 3093:
case 3414:
case 2078:
case 484:
case 2824:
case 1011:
case 3101:
case 3689:
case 397:
case 735:
case 3294:
case 2412:
case 1774:
case 3830:
case 3491:
case 862:
case 1726:
case 180:
case 2486:
case 3238:
case 2674:
case 2293:
case 4069:
case 2899:
case 1468:
case 2052:
case 987:
case 3982:
case 3188:
case 2773:
case 773:
case 3429:
case 2097:
case 634:
case 571:
case 3849:
case 1764:
case 1200:
case 1004:
case 3967:
case 2245:
case 317:
case 3253:
case 33:
case 2093:
case 2998:
case 2522:
case 3379:
case 3171:
case 2677:
case 3370:
case 2387:
case 500:
case 1176:
case 1502:
case 2846:
case 2246:
case 1550:
case 1196:
case 1682:
case 3565:
case 3492:
case 2517:
case 563:
case 406:
case 607:
case 1572:
case 1218:
case 4044:
case 4029:
case 2599:
case 2534:
case 3834:
case 3651:
case 3313:
case 1655:
case 2341:
case 2436:
case 2397:
case 1524:
case 1597:
case 1253:
case 759:
case 1052:
case 830:
case 2472:
case 2661:
case 2851:
case 364:
case 2681:
case 1199:
case 1067:
case 3395:
case 3319:
case 1113:
case 2815:
case 3404:
case 1700:
case 665:
case 1361:
case 131:
case 2474:
case 491:
case 2007:
case 1976:
case 3788:
case 589:
case 1442:
case 2116:
case 1674:
case 1267:
case 3398:
case 3114:
case 2665:
case 2764:
case 2126:
case 3016:
case 1163:
case 3225:
case 2822:
case 2962:
case 806:
case 96:
case 3275:
case 3696:
case 3174:
case 379:
case 577:
case 567:
case 3192:
case 1784:
case 3575:
case 1693:
case 3625:
case 22:
case 2806:
case 3731:
case 1366:
case 2237:
case 2244:
case 1930:
case 1599:
case 1232:
case 3884:
case 1039:
case 4051:
case 3338:
case 1112:
case 816:
case 2455:
case 2089:
case 1401:
case 3949:
case 3250:
case 3694:
case 441:
case 4035:
case 3956:
case 315:
case 2912:
case 3977:
case 3090:
case 1968:
case 1635:
case 3179:
case 3298:
case 3930:
case 661:
case 4066:
case 1188:
case 2148:
case 2980:
case 3372:
case 3891:
case 2071:
case 561:
case 3856:
case 2122:
case 2000:
case 174:
case 109:
case 660:
case 3446:
case 219:
case 3780:
case 83:
case 2192:
case 1024:
case 2158:
case 964:
case 3865:
case 1316:
case 527:
case 1731:
case 1303:
case 182:
case 3352:
case 1973:
case 2579:
case 2135:
case 3596:
case 696:
case 3409:
case 3935:
case 2185:
case 1576:
case 3248:
case 1035:
case 1878:
case 49:
case 1719:
case 2207:
case 676:
case 1450:
case 2182:
case 2911:
case 3281:
case 3054:
case 1808:
case 2770:
case 3623:
case 2284:
case 2247:
case 3823:
case 2737:
case 1472:
case 1851:
case 2131:
case 843:
case 3380:
case 3563:
case 1988:
case 1751:
case 4071:
case 3355:
case 1451:
case 3285:
case 3334:
case 769:
case 1476:
case 2651:
case 3022:
case 269:
case 2194:
case 3167:
case 2161:
case 2360:
case 1268:
case 605:
case 1631:
case 1066:
case 1933:
case 1965:
case 1173:
case 3700:
case 1422:
case 2029:
case 1192:
case 1263:
case 3182:
case 3729:
case 1102:
case 724:
case 1669:
case 1089:
case 1376:
case 3580:
case 2740:
case 3059:
case 3615:
case 2487:
case 2976:
case 2527:
case 448:
case 927:
case 3979:
case 714:
case 3942:
case 2643:
case 3326:
case 1000:
case 1658:
case 2437:
case 3112:
case 678:
case 2870:
case 1637:
case 2227:
case 2924:
case 3279:
case 1351:
case 2820:
case 3939:
case 1485:
case 1838:
case 2129:
case 1568:
case 2228:
case 2138:
case 3573:
case 2408:
case 1077:
case 2142:
case 3719:
case 1480:
case 3495:
case 2958:
case 1600:
case 3074:
case 2353:
case 2261:
case 2907:
case 2516:
case 1292:
case 899:
case 705:
case 3236:
case 3649:
case 4030:
case 608:
case 2927:
case 1744:
case 1006:
case 2197:
case 3095:
case 1252:
case 3444:
case 112:
case 170:
case 1882:
case 4065:
case 1871:
case 3779:
case 3480:
case 3217:
case 1390:
case 1558:
case 3218:
case 3390:
case 3241:
case 1384:
case 1124:
case 552:
case 3111:
case 954:
case 1601:
case 3833:
case 2670:
case 2307:
case 2535:
case 250:
case 2372:
case 996:
case 2375:
case 1421:
case 4019:
case 201:
case 1084:
case 295:
case 2359:
case 1223:
case 3349:
case 1057:
case 3272:
case 3354:
case 3012:
case 176:
case 619:
case 2514:
case 3505:
case 1645:
case 4022:
case 1928:
case 3094:
case 2562:
case 25:
case 3043:
case 4046:
case 3730:
case 3381:
case 2838:
case 3235:
case 3108:
case 1475:
case 2605:
case 890:
case 2318:
case 4028:
case 3781:
case 3119:
case 2024:
case 2833:
case 1499:
case 3559:
case 1179:
case 1497:
case 556:
case 505:
case 752:
case 1641:
case 3462:
case 2613:
case 1785:
case 3353:
case 2365:
case 3425:
case 3052:
case 711:
case 1333:
case 1675:
case 383:
case 2040:
case 1062:
case 877:
case 2509:
case 1841:
case 1964:
case 1301:
case 1562:
case 1414:
case 537:
case 3366:
case 2062:
case 795:
case 3671:
case 2730:
case 4042:
case 2576:
case 690:
case 3:
case 1712:
case 277:
case 2845:
case 3133:
case 1639:
case 3966:
case 1900:
case 2913:
case 2878:
case 2690:
case 860:
case 842:
case 2530:
case 43:
case 744:
case 54:
case 4055:
case 2445:
case 593:
case 1104:
case 1120:
case 1174:
case 2960:
case 1443:
case 2563:
case 2673:
case 916:
case 1699:
case 3310:
case 1448:
case 3455:
case 1264:
case 1056:
case 1728:
case 3474:
case 90:
case 1711:
case 2652:
case 872:
case 62:
case 2883:
case 3057:
case 1769:
case 2612:
case 3270:
case 1840:
case 71:
case 1336:
case 4036:
case 2241:
case 3734:
case 2969:
case 2844:
case 906:
case 1697:
case 1478:
case 3867:
case 2755:
case 2554:
case 3530:
case 969:
case 932:
case 2175:
case 1369:
case 1761:
case 904:
case 1884:
case 3456:
case 2587:
case 1876:
case 2823:
case 2691:
case 4021:
case 524:
case 410:
case 2262:
case 2827:
case 2457:
case 264:
case 2694:
case 901:
case 1628:
case 712:
case 977:
case 1363:
case 2252:
case 1162:
case 1296:
case 1937:
case 1660:
case 300:
case 2103:
case 2425:
case 770:
case 3899:
case 161:
case 1207:
case 3866:
case 3061:
case 3826:
case 1373:
case 1993:
case 3396:
case 1591:
case 1458:
case 739:
case 235:
case 1398:
case 3777:
case 1795:
case 2847:
case 45:
case 2716:
case 3498:
case 1798:
case 2271:
case 1206:
case 197:
case 731:
case 926:
case 1758:
case 3632:
case 337:
case 1580:
case 3897:
case 1255:
case 3539:
case 2676:
case 2687:
case 1970:
case 1585:
case 1665:
case 1482:
case 1724:
case 314:
case 165:
case 1736:
case 1386:
case 1446:
case 1122:
case 2336:
case 3096:
case 2607:
case 3544:
case 3021:
case 73:
case 2678:
case 1832:
case 1858:
case 2433:
case 3913:
case 185:
case 1826:
case 939:
case 2272:
case 1324:
case 3413:
case 3952:
case 1752:
case 1867:
case 2304:
case 855:
case 550:
case 2601:
case 2894:
case 3369:
case 1571:
case 1622:
case 1847:
case 2063:
case 2744:
case 3256:
case 1334:
case 1924:
case 3684:
case 555:
case 951:
case 3229:
case 581:
case 1629:
case 1573:
case 671:
case 3598:
case 402:
case 1118:
case 3013:
case 2054:
case 531:
case 517:
case 1969:
case 160:
case 3288:
case 4088:
case 422:
case 1670:
case 2107:
case 326:
case 1198:
case 2050:
case 3477:
case 2936:
case 922:
case 2964:
case 1130:
case 3607:
case 496:
case 1088:
case 137:
case 195:
case 3168:
case 3687:
case 1777:
case 2874:
case 3034:
case 1742:
case 633:
case 897:
case 3633:
case 2739:
case 1295:
case 1276:
case 1977:
case 858:
case 2920:
case 3332:
case 2988:
case 892:
case 1587:
case 1246:
case 3318:
case 1177:
case 788:
case 1822:
case 949:
case 3576:
case 3749:
case 3482:
case 2033:
case 1459:
case 1016:
case 3461:
case 3932:
case 3795:
case 1511:
case 612:
case 2348:
case 2379:
case 106:
case 1247:
case 2592:
case 2298:
case 1666:
case 2893:
case 4024:
case 2715:
case 12:
case 2634:
case 2508:
case 1107:
case 3039:
case 2571:
case 956:
case 2902:
case 1541:
case 2490:
case 854:
case 2008:
case 1244:
case 270:
case 342:
case 2181:
case 309:
case 3169:
case 1251:
case 958:
case 1906:
case 2481:
case 3099:
case 2507:
case 1545:
case 3552:
case 3251:
case 2403:
case 2929:
case 3286:
case 1189:
case 238:
case 1783:
case 553:
case 1110:
case 2794:
case 1797:
case 456:
case 544:
case 3005:
case 738:
case 3989:
case 887:
case 2609:
case 3030:
case 3102:
case 363:
case 192:
case 1215:
case 2128:
case 1506:
case 1642:
case 3721:
case 1975:
case 298:
case 2037:
case 419:
case 2010:
case 331:
case 2939:
case 2682:
case 1339:
case 942:
case 1525:
case 3295:
case 1481:
case 674:
case 1310:
case 3258:
case 3723:
case 2950:
case 1730:
case 2031:
case 215:
case 976:
case 2377:
case 2745:
case 2578:
case 1590:
case 288:
case 596:
case 1959:
case 2608:
case 2842:
case 3540:
case 1885:
case 2542:
case 3147:
case 2642:
case 1302:
case 1424:
case 345:
case 2518:
case 3153:
case 3071:
case 19:
case 1508:
case 2697:
case 389:
case 3776:
case 3562:
case 4091:
case 3784:
case 3618:
case 51:
case 3051:
case 625:
case 2066:
case 2961:
case 1919:
case 3199:
case 3186:
case 302:
case 971:
case 1955:
case 3018:
case 3586:
case 3564:
case 3998:
case 2590:
case 2017:
case 3223:
case 599:
case 1583:
case 938:
case 3040:
case 1897:
case 37:
case 2777:
case 2813:
case 2297:
case 3702:
case 3261:
case 107:
case 728:
case 1087:
case 1782:
case 349:
case 2210:
case 598:
case 3985:
case 2179:
case 2357:
case 1294:
case 1680:
case 3007:
case 1830:
case 2825:
case 2417:
case 2202:
case 159:
case 981:
case 3077:
case 850:
case 1813:
case 1431:
case 1754:
case 258:
case 454:
case 1911:
case 1260:
case 3863:
case 3739:
case 558:
case 2415:
case 2073:
case 1781:
case 3120:
case 1770:
case 2061:
case 1833:
case 747:
case 303:
case 261:
case 893:
case 3468:
case 2525:
case 2734:
case 1544:
case 694:
case 3175:
case 2125:
case 2876:
case 2461:
case 3847:
case 407:
case 3296:
case 3650:
case 199:
case 3672:
case 3247:
case 4002:
case 3109:
case 667:
case 1078:
case 1032:
case 4058:
case 2956:
case 1036:
case 1688:
case 2748:
case 606:
case 1997:
case 566:
case 2149:
case 1805:
case 1086:
case 3666:
case 3402:
case 8:
case 2584:
case 3201:
case 2201:
case 105:
case 3117:
case 3751:
case 1415:
case 784:
case 248:
case 1861:
case 3191:
case 799:
case 1014:
case 3024:
case 1346:
case 3840:
case 1519:
case 2908:
case 1290:
case 1129:
case 2933:
case 965:
case 2864:
case 1632:
case 1677:
case 889:
case 490:
case 1606:
case 2290:
case 98:
case 3842:
case 3616:
case 1856:
case 912:
case 1469:
case 1873:
case 3346:
case 3441:
case 3756:
case 2631:
case 3617:
case 966:
case 1094:
case 3994:
case 285:
case 3554:
case 693:
case 2650:
case 913:
case 2320:
case 3104:
case 2309:
case 1327:
case 1787:
case 3545:
case 447:
case 2169:
case 335:
case 653:
case 3299:
case 2492:
case 438:
case 1979:
case 1096:
case 1892:
case 1679:
case 2790:
case 1470:
case 1149:
case 487:
case 789:
case 3720:
case 632:
case 2254:
case 386:
case 3755:
case 2432:
case 53:
case 3664:
case 3993:
case 2880:
case 2465:
case 717:
case 3363:
case 292:
case 992:
case 32:
case 3854:
case 3695:
case 2872:
case 162:
case 2990:
case 3234:
case 223:
case 590:
case 3276:
case 2358:
case 2664:
case 2249:
case 1561:
case 2839:
case 3597:
case 3000:
case 21:
case 2504:
case 2343:
case 4060:
case 3245:
case 2873:
case 469:
case 284:
case 2488:
case 980:
case 774:
case 2635:
case 255:
case 638:
case 451:
case 2451:
case 1080:
case 2434:
case 2443:
case 2545:
case 4074:
case 1704:
case 2515:
case 108:
case 3388:
case 3813:
case 1277:
case 323:
case 597:
case 548:
case 377:
case 2023:
case 1753:
case 3885:
case 1128:
case 3808:
case 798:
case 4000:
case 224:
case 2499:
case 279:
case 812:
case 1694:
case 1501:
case 2141:
case 1483:
case 2818:
case 266:
case 1619:
case 2045:
case 2235:
case 3872:
case 444:
case 1372:
case 2974:
case 173:
case 3073:
case 993:
case 921:
case 1877:
case 579:
case 93:
case 2603:
case 362:
case 2761:
case 2178:
case 3163:
case 3521:
case 3301:
case 2952:
case 3511:
case 2447:
case 2787:
case 3232:
case 2300:
case 1005:
case 1972:
case 1383:
case 2015:
case 346:
case 3079:
case 1046:
case 1300:
case 2854:
case 3031:
case 24:
case 2:
case 3954:
case 1879:
case 446:
case 56:
case 2364:
case 1767:
case 1167:
case 3419:
case 1772:
case 2919:
case 3630:
case 2867:
case 74:
case 424:
case 827:
case 1925:
case 2519:
case 3561:
case 3789:
case 2209:
case 522:
case 494:
case 1467:
case 2032:
case 1256:
case 2414:
case 2351:
case 1155:
case 3011:
case 2531:
case 15:
case 3350:
case 777:
case 1271:
case 919:
case 2419:
case 2573:
case 40:
case 2943:
case 2659:
case 1054:
case 3278:
case 495:
case 600:
case 44:
case 2840:
case 1749:
case 3449:
case 234:
case 2224:
case 1786:
case 4005:
case 483:
case 1454:
case 2705:
case 3577:
case 3006:
case 445:
case 2616:
case 3032:
case 757:
case 2502:
case 2236:
case 2931:
case 2383:
case 879:
case 1549:
case 2758:
case 3083:
case 2112:
case 631:
case 894:
case 2837:
case 1111:
case 3437:
case 1231:
case 271:
case 2308:
case 3204:
case 3368:
case 2076:
case 307:
case 328:
case 206:
case 2727:
case 2438:
case 1405:
case 475:
case 1090:
case 864:
case 1389:
case 3458:
case 2503:
case 689:
case 637:
case 247:
case 3421:
case 2971:
case 760:
case 2114:
case 3508:
case 3490:
case 153:
case 3158:
case 1756:
case 77:
case 1498:
case 84:
case 640:
case 3004:
case 3670:
case 2274:
case 2354:
case 574:
case 3374:
case 2802:
case 2162:
case 3520:
case 155:
case 560:
case 228:
case 2803:
case 3941:
case 2581:
case 3974:
case 2923:
case 212:
case 3824:
case 3669:
case 1193:
case 4057:
case 2701:
case 1083:
case 2780:
case 1766:
case 2215:
case 3568:
case 3682:
case 3768:
case 3546:
case 2086:
case 1521:
case 3970:
case 3213:
case 1311:
case 1001:
case 374:
case 825:
case 471:
case 2345:
case 1618:
case 3397:
case 1647:
case 2640:
case 4009:
case 1426:
case 2769:
case 1673:
case 14:
case 177:
case 1281:
case 3948:
case 479:
case 3787:
case 2695:
case 3938:
case 3886:
case 3882:
case 2460:
case 460:
case 2593:
case 985:
case 2426:
case 1740:
case 101:
case 1043:
case 2079:
case 354:
case 3029:
case 3728:
case 1554:
case 120:
case 3450:
case 3467:
case 2890:
case 291:
case 2323:
case 3860:
case 1017:
case 175:
case 3961:
case 2618:
case 3475:
case 2917:
case 1350:
case 2553:
case 3339:
case 3902:
case 2821:
case 3879:
case 1190:
case 1464:
case 20:
case 1272:
case 991:
case 627:
case 103:
case 3709:
case 1939:
case 3271:
case 126:
case 1815:
case 3947:
case 1799:
case 656:
case 2698:
case 615:
case 2099:
case 3964:
case 2757:
case 3127:
case 1487:
case 1228:
case 3144:
case 1365:
case 3805:
case 1114:
case 1381:
case 2483:
case 390:
case 2170:
case 3762:
case 246:
case 765:
case 836:
case 3715:
case 2779:
case 1409:
case 1528:
case 1532:
case 290:
case 1932:
case 3599:
case 2708:
case 1170:
case 3140:
case 2868:
case 1570:
case 1403:
case 3681:
case 2092:
case 2416:
case 1117:
case 2043:
case 851:
case 1307:
case 2053:
case 2725:
case 3806:
case 135:
case 1436:
case 474:
case 1126:
case 869:
case 4001:
case 3569:
case 95:
case 3009:
case 257:
case 1553:
case 863:
case 882:
case 1963:
case 868:
case 1763:
case 3242:
case 2446:
case 3300:
case 2384:
case 782:
case 1299:
case 2669:
case 1160:
case 818:
case 2035:
case 1278:
case 2984:
case 3637:
case 1040:
case 249:
case 361:
case 1344:
case 3322:
case 3943:
case 3926:
case 2800:
case 950:
case 18:
case 1013:
case 3002:
case 1045:
case 325:
case 1393:
case 1812:
case 1146:
case 3293:
case 2381:
case 1484:
case 2752:
case 2557:
case 3320:
case 3816:
case 923:
case 2995:
case 3814:
case 2996:
case 4085:
case 378:
case 3713:
case 369:
case 1894:
case 171:
case 3180:
case 2949:
case 301:
case 275:
case 2649:
case 2047:
case 3619:
case 2667:
case 2718:
case 3116:
case 519:
case 1626:
case 2222:
case 3745:
case 117:
case 2156:
case 3383:
case 2407:
case 2470:
case 3216:
case 3736:
case 2778:
case 1135:
case 1182:
case 465:
case 2409:
case 3685:
case 501:
case 758:
case 321:
case 3778:
case 2155:
case 233:
case 395:
case 2478:
case 2471:
case 3183:
case 1987:
case 2657:
case 3683:
case 3428:
case 3382:
case 35:
case 1556:
case 3435:
case 4081:
case 202:
case 1917:
case 3407:
case 2256:
case 3635:
case 97:
case 2916:
case 2044:
case 2389:
case 3658:
case 3846:
case 3280:
case 3809:
case 776:
case 1227:
case 3613:
case 1733:
case 999:
case 3648:
case 3911:
case 2989:
case 1960:
case 2598:
case 478:
case 2751:
case 763:
case 3121:
case 2617:
case 3905:
case 948:
case 1948:
case 3154:
case 2223:
case 3741:
case 1615:
case 1123:
case 975:
case 2160:
case 636:
case 420:
case 2230:
case 372:
case 148:
case 2143:
case 3868:
case 2322:
case 3818:
case 3852:
case 533:
case 2886:
case 1992:
case 829:
case 809:
case 2645:
case 2855:
case 943:
case 3620:
case 1536:
case 1904:
case 3641:
case 3479:
case 2719:
case 1340:
case 1517:
case 891:
case 205:
case 2728:
case 3531:
case 2239:
case 1164:
case 3909:
case 3392:
case 1842:
case 601:
case 718:
case 3995:
case 1801:
case 183:
case 918:
case 551:
case 1210:
case 503:
case 3986:
case 1931:
case 3196:
case 3975:
case 1157:
case 915:
case 4082:
case 2747:
case 3992:
case 267:
case 2200:
case 2188:
case 3166:
case 2926:
case 3907:
case 1261:
case 1250:
case 796:
case 1737:
case 1397:
case 220:
case 3980:
case 3971:
case 4068:
case 399:
case 3509:
case 2467:
case 27:
case 3360:
case 39:
case 3753:
case 398:
case 3348:
case 2001:
case 3124:
case 3193:
case 3210:
case 168:
case 2395:
case 3478:
case 3636:
case 1985:
case 786:
case 3915:
case 2742:
case 391:
case 3643:
case 4016:
case 1623:
case 3556:
case 2260:
case 296:
case 3792:
case 1978:
case 3329:
case 1896:
case 1686:
case 2526:
case 3297:
case 232:
case 790:
case 2942:
case 1598:
case 1444:
case 1061:
case 91:
case 1402:
case 457:
case 3594:
case 1320:
case 3693:
case 1008:
case 3500:
case 766:
case 1360:
case 343:
case 3484:
case 564:
case 2829:
case 41:
case 2067:
case 792:
case 3705:
case 2965:
case 263:
case 3775:
case 75:
case 1698:
case 3126:
case 2564:
case 3767:
case 684:
case 2281:
case 371:
case 3587:
case 413:
case 2637:
case 167:
case 470:
case 1259:
case 936:
case 380:
case 4006:
case 1994:
case 26:
case 3269:
case 1921:
case 1341:
case 3962:
case 3328:
case 2016:
case 749:
case 3667:
case 146:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1717923602/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,1,1,1,1,0,0,1,1,0,0,1,0,1,1,0,0,1,1,1,1,1,0,1,1,1,1,0,0,0,0,1,1,0,1,0,1,0,1,1,1,0,1,1,1,0,0,0,1,0,1,1,1,1,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,1,1,1,0,1,0,0,0,0,1,1,1,0,0,0,0,1,1,1,0,1,1,1,1,1,1,0,0,1,0,1,0,1,1,1,1,1,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,1,1,0,0,0,1,0,0,0,1,1,1,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0,1,1,1,1,0,0,1,1,1,1,0,0,1,0,1,1,0,1,1,0,1,1,1,1,1,0,0,1,1,1,1,1,1,0,0,0,0,0,0,1,0,0,1,0,1,0,1,0,1,1,0,0,1,1,0,0,1,0,0,1,0,0,1,0,0,0,1,1,0,0,1,1,0,0,0,1,0,0,0,1,1,1,1,1,0,1,0,0,0,0,0,1,0,1,1,1,1,1,0,0,0,0,1,0,1,1,0,0,1,0,1,1,1,1,1,0,1,1,1,0,0,1,1,0,1,0,1,0,0,0,0,1,1,0,0,1,0,1,1,1,0,0,1,1,1,1,0,1,1,1,1,1,0,0,1,0,1,0,0,0,0,1,1,0,1,0,0,0,1,0,1,0,1,1,0,1,0,1,1,0,0,0,1,0,1,0,0,0,0,1,1,1,1,1,0,0,1,0,1,1,0,1,0,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,1,0,0,1,1,1,1,0,0,1,0,0,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,0,1,0,0,0,1,1,0,1,1,1,0,1,0,0,0,0,0,1,1,0,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,1,1,1,1,1,1,1,1,0,0,1,0,1,1,0,0,1,0,0,0,0,1,0,0,0,1,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,0,0,1,0,1,1,1,1,1,1,1,1,0,0,0,1,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,1,1,1,0,0,1,0,1,1,1,0,1,0,0,1,1,0,1,0,0,0,0,1,0,0,1,1,0,1,1,1,1,0,1,1,0,1,0,1,1,0,1,1,0,1,1,0,0,0,1,0,0,1,0,0,1,0,1,0,1,0,0,1,0,0,1,0,1,1,0,0,1,0,0,1,1,1,1,1,1,0,0,0,1,1,1,1,0,0,0,1,1,0,1,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,1,1,1,1,1,1,1,1,0,1,0,0,0,0,0,0,0,0,1,1,0,1,1,0,0,1,0,0,0,1,1,0,0,0,1,0,1,0,0,0,1,1,0,1,0,1,0,1,0,0,0,0,0,1,0,0,0,0,1,1,0,0,1,1,0,1,0,0,0,0,1,0,1,0,1,0,0,0,1,0,1,1,0,1,0,1,1,1,0,0,0,0,0,1,0,0,0,1,0,0,1,0,0,0,1,0,0,1,1,0,0,0,0,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1,1,0,1,1,0,1,1,0,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,0,1,0,1,1,1,0,1,0,0,1,1,0,1,1,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0,1,0,1,0,0,0,0,1,0,1,0,1,0,1,1,0,0,0,1,0,1,0,1,0,0,0,1,1,0,0,0,1,0,0,1,1,0,1,1,1,0,0,1,1,1,0,1,1,1,0,0,0,1,1,1,0,1,0,0,0,0,1,1,1,0,0,1,0,0,0,0,1,0,1,1,1,1,1,1,0,0,1,0,1,0,1,1,1,1,0,1,0,0,1,0,0,1,1,0,1,1,0,1,1,0,1,1,1,0,0,1,1,1,1,0,0,1,1,0,0,1,0,1,1,0,0,1,1,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0,1,1,0,0,1,1,1,0,0,1,0,1,0,0,0,1,1,1,0,0,1,1,0,0,1,1,0,1,0,1,1,1,1,1,0,1,1,0,0,1,1,1,0,0,1,1,1,0,1,0,1,1,1,1,1,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,1,0,1,1,0,1,1,0,0,1,1,0,1,1,0,1,1,0,0,0,0,0,1,1,1,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,0,1,1,0,0,0,1,1,0,1,0,0,1,1,1,1,1,1,1,1,0,0,1,1,0,1,0,0,0,0,0,1,0,1,0,0,1,1,0,1,1,1,1,1,0,1,1,1,0,1,0,1,1,1,0,1,0,1,1,1,1,0,0,1,1,0,0,0,1,0,0,0,0,1,1,1,1,0,1,0,0,1,0,1,1,0,1,0,0,1,1,1,1,1,1,0,1,0,0,1,0,0,1,1,0,1,1,0,1,0,0,1,0,0,0,0,1,1,1,1,0,1,1,0,0,1,0,1,1,1,0,0,0,1,0,1,1,0,0,1,0,0,0,0,1,0,0,1,0,0,1,0,1,0,0,1,1,1,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0,1,0,1,1,0,0,1,1,1,1,1,1,1,0,0,1,1,1,0,1,1,0,0,1,1,0,0,1,1,0,0,0,1,1,1,0,0,1,0,0,0,0,0,0,1,0,1,1,1,1,1,1,1,0,0,1,1,1,1,1,0,0,0,1,0,0,1,1,0,0,1,0,1,0,0,0,1,0,0,0,1,0,0,1,0,0,0,0,0,1,1,0,1,0,1,1,1,1,0,0,1,0,1,0,0,1,1,1,0,1,0,0,0,0,0,0,1,1,0,1,0,1,1,0,0,1,0,0,1,1,0,0,1,0,1,0,0,1,0,1,1,0,1,1,0,1,1,0,1,1,1,0,0,1,1,0,0,1,1,1,0,1,0,0,1,1,1,0,0,0,1,1,0,0,1,0,0,1,1,0,1,0,1,0,1,0,0,1,0,0,0,0,1,0,0,0,0,1,1,1,1,0,1,0,1,0,1,1,0,0,1,0,0,0,1,1,0,0,0,1,1,0,0,1,1,1,1,0,1,1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,0,1,0,0,0,0,0,0,0,1,1,1,0,1,1,0,0,1,1,0,1,0,0,1,1,0,0,0,0,1,0,1,0,1,0,0,1,1,0,0,1,0,0,0,1,1,0,0,1,0,1,1,1,1,0,1,1,1,0,0,0,1,1,0,0,1,1,0,1,0,1,0,0,1,1,0,0,0,0,0,1,0,1,1,1,1,0,0,1,0,0,0,1,0,0,1,0,1,0,1,0,0,1,1,0,0,0,0,0,1,1,1,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,1,1,0,0,1,1,0,0,1,0,1,1,1,1,1,0,0,1,1,1,0,1,0,1,1,1,0,1,0,1,0,0,0,0,0,0,1,1,0,0,1,0,1,1,0,0,0,1,1,0,0,1,1,0,0,1,1,1,0,1,0,1,1,0,1,0,0,0,1,0,1,0,1,0,0,1,1,0,0,1,1,1,1,0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,1,0,1,0,1,0,1,1,1,1,0,0,1,1,1,0,1,0,1,0,1,0,0,0,0,1,0,1,1,1,1,0,1,0,1,0,0,1,0,1,1,0,1,1,0,1,1,0,1,0,1,0,0,1,0,0,0,1,1,1,1,1,1,1,0,0,0,0,1,0,0,1,0,1,1,1,0,1,0,0,0,1,1,0,1,0,0,0,1,1,0,1,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,1,1,0,0,0,0,1,0,1,1,1,0,0,1,0,1,1,0,0,1,0,0,0,0,1,0,1,0,0,1,0,0,0,0,0,1,0,0,0,1,0,1,0,0,1,1,1,1,1,0,1,0,1,1,0,0,0,0,0,0,1,0,1,0,1,1,0,0,1,0,0,0,1,0,1,0,0,0,0,1,0,0,0,0,0,1,0,1,0,1,0,0,1,1,1,0,1,0,1,1,1,1,0,0,1,1,0,1,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,1,0,0,0,1,1,0,0,1,1,1,0,0,1,1,1,0,1,1,0,1,1,1,1,1,0,0,0,0,0,1,0,1,1,0,0,0,1,1,1,0,0,1,0,0,1,1,0,0,1,0,0,1,1,0,1,0,0,1,0,1,1,1,0,0,0,0,0,1,1,0,0,0,0,1,1,1,1,1,0,1,0,1,0,0,1,0,0,1,1,1,0,1,0,0,1,0,1,1,1,1,0,1,0,0,1,1,1,1,0,0,1,1,0,0,0,1,0,1,0,0,1,0,1,1,0,0,0,0,0,0,1,1,0,1,0,0,1,1,0,0,0,1,1,1,0,0,0,1,0,0,0,1,0,0,0,0,1,0,1,0,1,0,0,1,0,0,1,0,0,1,1,0,1,1,0,1,0,0,0,1,0,0,1,0,1,1,1,1,0,0,1,0,1,1,1,0,0,0,0,1,1,1,1,0,1,1,1,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,1,0,1,0,0,1,1,0,1,1,1,0,0,0,0,1,0,1,1,0,0,0,0,1,0,1,0,0,0,0,1,1,1,1,0,1,1,1,1,0,0,0,0,1,1,1,0,1,0,1,1,0,1,1,1,1,0,1,0,0,1,0,1,0,1,0,0,0,1,1,1,0,0,0,0,0,0,1,0,1,1,0,1,0,1,0,0,0,0,1,0,0,1,0,0,0,1,0,1,1,0,1,0,0,0,1,1,0,1,0,0,0,1,0,0,1,1,1,0,0,1,1,0,0,0,0,1,0,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,1,0,1,0,0,1,1,0,1,0,1,1,0,0,1,1,1,1,1,0,0,1,1,1,0,1,0,0,0,1,0,0,1,0,1,0,1,0,1,0,1,1,0,0,1,1,1,0,0,1,0,1,1,0,1,1,0,0,0,0,1,0,1,0,1,1,1,0,0,1,0,1,1,1,1,0,1,0,1,0,0,1,1,1,0,0,0,0,0,1,1,1,0,1,1,1,0,0,0,0,1,0,1,1,1,0,0,0,1,0,0,0,1,1,1,0,0,1,1,0,0,0,1,0,1,1,0,1,1,1,1,1,0,0,1,1,0,0,1,0,1,0,0,1,1,1,0,1,0,1,0,0,0,0,0,0,1,1,0,1,1,1,0,0,1,1,1,1,0,0,0,1,1,1,1,1,1,1,0,1,0,0,1,1,1,0,0,1,1,0,0,1,1,0,0,0,0,0,0,1,1,0,1,0,1,0,1,0,0,0,1,1,0,0,1,0,0,0,0,1,1,1,0,0,0,0,0,0,1,1,1,0,1,1,0,1,1,0,1,0,0,1,0,0,1,0,0,1,0,1,1,0,1,0,1,1,1,0,1,1,1,0,1,0,1,1,1,0,0,1,1,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,1,0,0,1,0,1,1,0,1,0,1,0,1,1,1,1,0,0,0,0,1,0,1,0,1,0,0,1,1,0,1,0,1,1,0,0,1,1,1,1,1,1,0,0,1,1,0,0,0,0,1,0,0,1,1,0,0,1,1,0,1,1,1,0,1,0,0,0,1,0,0,1,1,0,0,1,0,0,1,1,0,1,1,0,0,1,1,0,1,0,1,1,1,1,0,0,0,1,1,0,1,1,1,1,0,1,0,1,1,0,1,1,0,0,1,1,0,0,1,0,1,1,1,0,1,1,1,1,1,0,1,0,1,1,0,0,1,0,0,0,1,1,1,1,0,0,0,0,0,0,1,1,0,1,0,0,0,1,1,1,0,0,1,1,0,1,1,0,0,1,0,0,0,0,0,0,1,0,1,0,0,1,0,1,1,1,1,1,1,1,1,0,1,0,0,0,1,0,0,0,1,1,1,1,0,1,0,1,1,1,1,0,0,0,1,0,0,1,1,0,0,0,0,1,0,0,0,1,0,0,1,1,0,1,0,1,1,1,0,1,0,1,0,1,0,0,1,0,0,1,0,0,0,1,0,0,1,1,1,0,0,0,1,0,0,1,0,1,0,0,1,1,0,0,1,1,1,0,0,1,1,0,1,1,0,0,1,1,0,1,1,0,1,0,1,0,1,0,0,1,0,0,1,0,0,1,1,0,0,0,0,0,1,1,0,1,1,0,0,1,0,1,0,1,1,1,0,1,1,0,0,0,1,0,1,0,1,1,0,1,0,0,0,1,0,0,0,1,0,1,0,1,1,1,0,1,0,0,1,1,0,1,0,1,0,1,0,1,1,1,1,0,1,0,1,1,1,1,0,1,0,1,0,0,1,1,0,1,0,0,0,0,1,1,1,1,0,1,0,0,0,0,1,1,0,0,1,0,0,0,0,0,0,0,1,1,0,1,0,0,1,0,1,1,1,1,0,0,0,0,0,0,1,0,1,0,1,1,0,1,1,0,1,0,0,0,1,0,0,0,0,0,0,1,1,0,1,1,1,1,0,0,1,0,1,1,0,1,0,0,0,1,1,0,1,1,0,1,0,1,1,0,1,1,1,0,0,1,1,1,1,0,0,0,1,0,1,1,0,0,0,0,0,1,0,0,1,1,1,0,1,0,1,0,0,0,1,1,0,0,1,1,0,0,0,1,1,0,0,1,1,1,1,0,1,0,0,1,1,0,0,0,1,1,0,1,1,0,0,1,0,1,0,0,1,1,1,0,0,1,0,0,1,0,1,0,1,1,1,0,0,0,0,1,0,0,1,0,0,1,1,1,0,0,1,0,1,0,1,0,0,0,1,0,1,1,0,1,1,1,0,1,0,0,1,1,0,0,1,0,1,1,0,1,1,0,1,0,0,1,0,1,0,0,1,0,0,0,0,0,1,0,1,1,1,1,0,0,1,1,0,1,1,1,1,0,0,1,1,1,0,1,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,1,1,0,1,0,1,0,1,0,1,1,1,0,1,0,1,0,0,0,1,1,0,0,0,0,0,0,1,0,1,1,1,1,1,1,1,1,1,1,0,0,1,0,0,1,0,1,1,0,1,1,1,0,1,0,1,0,1,0,0,1,1,1,1,1,0,0,0,0,1,0,1,0,1,0,0,1,1,1,1,0,0,0,1,0,1,0,1,1,0,1,0,0,0,1,1,1,0,0,0,1,0,1,0,0,0,1,0,0,1,1,0,0,0,1,1,1,0,1,0,0,0,1,0,0,1,0,1,0,0,1,1,0,0,0,0,1,1,0,1,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,1,1,0,1,1,1,1,0,1,0,1,0,0,0,0,0,1,1,1,0,0,1,0,0,1,0,1,0,1,0,0,1,1,0,1,1,0,1,0,0,0,0,0,0,0,1,1,1,0,0,1,0,0,0,1,0,1,1,0,0,0,0,0,0,0,1,1,0,0,1,1,1,1,0,1,0,0,0,1,0,1,0,1,0,0,1,0,1,1,1,1,1,0,0,1,1,0,0,1,1,0,1,1,1,0,0,1,0,0,0,1,0,1,1,0,0,0,0,1,0,1,0,1,1,1,1,0,0,0,1,1,0,0,1,0,0,0,0,0,1,0,1,1,1,1,1,1,0,0,1,0,1,0,0,0,0,1,0,1,1,1,1,1,1,1,0,0,1,0,1,1,0,0,0,1,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,1,0,1,1,0,1,1,1,1,0,1,0,0,1,0,1,0,1,1,1,1,1,1,1,0,1,0,1,0,1,1,1,1,0,0,0,1,0,1,0,1,1,0,0,0,1,1,0,0,1,0,1,0,0,0,1,1,1,0,1,0,0,0,0,1,1,1,1,0,0,1,0,1,0,0,1,0,1,0,0,1,1,0,0,0,1,0,1,0,1,0,1,1,0,0,1,0,1,1,0,0,1,0,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,0,1,1,1,0,1,1,1,0,0,1,1,0,1,0,0,0,0,0,0,0,0,1,1,1,0,1,1,0,0,0,1,1,0,1,0,1,0,1,0,0,1,1,0,1,1,0,0,1,0,0,1,1,0,0,0,0,0,1,0,1,0,0,0,1,1,0,1,0,1,1,0,1,0,1,1,0,0,1,0,0,1,0,1,1,1,1,0,1,0,1,0,0,0,0,0,0,1,0,0,1,0,1,1,1,0,0,0,0,1,1,0,0,0,0,1,0,1,1,0,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,0,0,1,0,0,1,0,0,0,1,0,1,0,0,1,0,0,1,1,1,1,1,1,0,0,1,1,1,1,0,0,1,0,1,0,1,0,0,0,0,1,1,0,1,0,1,1,1,0,1,1,0,0,1,1,0,1,0,1,1,1,1,0,0,1,1,0,0,1,1,0,1,1,1,1,0,0,1,1,1,1,1,0,0,1,1,0,0,1,0,1,0,0,0,0,1,1,0,1,0,1,1,0,1,0,0,0,1,1,1,1,0,0,0,1,1,0,1,0,0,0,1,1,1,1,1,1,0,0,1,1,0,0,0,1,1,1,1,0,1,0,0,0,0,1,1,0,1,1,1,1,0,0,1,0,0,0,0,0,0,1,1,0,0,1,0,1,1,0,0,1,0,0,0,0,];
var gg_b = "1717923602/";

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
