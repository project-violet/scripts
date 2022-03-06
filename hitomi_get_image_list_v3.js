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
case 3595:
case 970:
case 989:
case 2730:
case 694:
case 1185:
case 2556:
case 2399:
case 403:
case 1881:
case 1097:
case 4075:
case 909:
case 2555:
case 1502:
case 543:
case 2875:
case 1761:
case 3272:
case 2519:
case 744:
case 3474:
case 1193:
case 1007:
case 3086:
case 149:
case 2145:
case 794:
case 455:
case 1013:
case 3824:
case 709:
case 2714:
case 1019:
case 477:
case 2346:
case 2911:
case 1026:
case 491:
case 2798:
case 3719:
case 2237:
case 242:
case 1672:
case 2285:
case 1931:
case 816:
case 1344:
case 1769:
case 753:
case 3426:
case 899:
case 1452:
case 438:
case 2791:
case 2401:
case 1469:
case 327:
case 2995:
case 3476:
case 3884:
case 3952:
case 741:
case 3047:
case 3891:
case 2083:
case 3996:
case 3638:
case 145:
case 163:
case 3740:
case 2597:
case 1295:
case 3751:
case 1524:
case 821:
case 705:
case 469:
case 3698:
case 3572:
case 2896:
case 1796:
case 91:
case 1159:
case 3441:
case 2070:
case 4059:
case 1218:
case 1919:
case 3942:
case 444:
case 2165:
case 16:
case 2849:
case 2043:
case 2903:
case 3956:
case 902:
case 2967:
case 1554:
case 3392:
case 703:
case 2944:
case 2219:
case 334:
case 3406:
case 3103:
case 257:
case 924:
case 3226:
case 3829:
case 3693:
case 1750:
case 3814:
case 3448:
case 479:
case 3246:
case 1365:
case 919:
case 3517:
case 2248:
case 1036:
case 933:
case 482:
case 3742:
case 315:
case 906:
case 1462:
case 317:
case 2404:
case 3211:
case 1664:
case 2459:
case 3907:
case 3909:
case 2455:
case 789:
case 1824:
case 3833:
case 4019:
case 1577:
case 3177:
case 2985:
case 521:
case 3694:
case 1799:
case 1390:
case 1154:
case 1691:
case 2764:
case 2685:
case 2038:
case 3078:
case 1503:
case 429:
case 2560:
case 3707:
case 1249:
case 2663:
case 1402:
case 1448:
case 2697:
case 2782:
case 541:
case 1980:
case 2236:
case 2518:
case 1930:
case 627:
case 3332:
case 3805:
case 358:
case 527:
case 3855:
case 4006:
case 178:
case 839:
case 1418:
case 2637:
case 2441:
case 436:
case 1984:
case 3903:
case 3142:
case 3183:
case 2238:
case 3691:
case 1562:
case 1705:
case 1557:
case 1511:
case 2153:
case 3102:
case 3538:
case 1069:
case 204:
case 328:
case 1625:
case 3876:
case 3607:
case 591:
case 475:
case 467:
case 2075:
case 3104:
case 3897:
case 3158:
case 2936:
case 1876:
case 1965:
case 2031:
case 834:
case 767:
case 2181:
case 399:
case 3688:
case 691:
case 1128:
case 590:
case 3335:
case 2713:
case 751:
case 1283:
case 2261:
case 3779:
case 4040:
case 1152:
case 1527:
case 2209:
case 1998:
case 1446:
case 55:
case 531:
case 2105:
case 1263:
case 1151:
case 1751:
case 1611:
case 2674:
case 1507:
case 2742:
case 2618:
case 1238:
case 1253:
case 3173:
case 1090:
case 2243:
case 2008:
case 370:
case 3644:
case 1488:
case 2302:
case 3542:
case 1376:
case 1110:
case 2067:
case 2991:
case 40:
case 1970:
case 2367:
case 2900:
case 2442:
case 1214:
case 3483:
case 635:
case 3523:
case 2492:
case 2841:
case 1083:
case 3243:
case 2429:
case 3935:
case 3010:
case 1888:
case 2769:
case 363:
case 2415:
case 1950:
case 1517:
case 748:
case 3307:
case 2173:
case 3256:
case 3743:
case 2971:
case 3235:
case 2941:
case 1043:
case 3125:
case 3558:
case 3457:
case 3963:
case 2831:
case 871:
case 1728:
case 3487:
case 975:
case 1791:
case 1626:
case 2531:
case 1039:
case 1733:
case 3208:
case 2760:
case 1742:
case 3592:
case 554:
case 1580:
case 2832:
case 319:
case 1304:
case 3502:
case 3590:
case 408:
case 605:
case 3518:
case 911:
case 3003:
case 496:
case 3695:
case 2694:
case 1131:
case 1299:
case 1118:
case 695:
case 2751:
case 3593:
case 3422:
case 3070:
case 3170:
case 667:
case 3383:
case 3429:
case 331:
case 3340:
case 723:
case 2489:
case 3823:
case 943:
case 348:
case 3747:
case 51:
case 3393:
case 562:
case 161:
case 192:
case 1874:
case 2316:
case 326:
case 3001:
case 1887:
case 699:
case 2482:
case 2723:
case 26:
case 2808:
case 2641:
case 632:
case 4009:
case 2809:
case 4032:
case 2205:
case 646:
case 921:
case 3491:
case 3998:
case 13:
case 1937:
case 2731:
case 3920:
case 2072:
case 2747:
case 238:
case 728:
case 2313:
case 2447:
case 3906:
case 1850:
case 329:
case 3914:
case 2431:
case 845:
case 3649:
case 3712:
case 4008:
case 2016:
case 4010:
case 2676:
case 828:
case 1136:
case 2693:
case 3193:
case 1235:
case 3462:
case 2202:
case 3706:
case 2280:
case 1914:
case 1537:
case 3434:
case 1472:
case 1519:
case 1844:
case 3958:
case 2630:
case 3461:
case 1473:
case 1044:
case 3080:
case 1491:
case 2916:
case 942:
case 263:
case 2958:
case 1339:
case 2197:
case 2123:
case 1008:
case 2465:
case 159:
case 175:
case 730:
case 235:
case 2516:
case 76:
case 1963:
case 2680:
case 74:
case 1061:
case 2762:
case 1369:
case 201:
case 820:
case 420:
case 484:
case 719:
case 577:
case 1920:
case 1605:
case 2646:
case 2483:
case 1116:
case 1655:
case 3790:
case 3430:
case 1350:
case 3399:
case 3090:
case 3282:
case 1053:
case 3459:
case 3407:
case 2989:
case 2567:
case 2645:
case 3396:
case 3885:
case 1324:
case 2445:
case 2949:
case 2945:
case 537:
case 1805:
case 1941:
case 2348:
case 1575:
case 2758:
case 361:
case 3368:
case 1198:
case 3815:
case 2843:
case 3806:
case 2937:
case 372:
case 2034:
case 139:
case 2611:
case 3536:
case 483:
case 1841:
case 198:
case 1757:
case 3498:
case 3444:
case 701:
case 1323:
case 340:
case 2102:
case 2743:
case 2035:
case 3033:
case 31:
case 913:
case 1175:
case 1603:
case 3339:
case 1156:
case 1272:
case 729:
case 2112:
case 308:
case 1560:
case 1786:
case 2651:
case 1556:
case 3328:
case 265:
case 3614:
case 1088:
case 3174:
case 3755:
case 3631:
case 495:
case 2545:
case 2725:
case 1808:
case 2549:
case 2268:
case 2662:
case 3646:
case 2231:
case 1753:
case 2282:
case 1910:
case 3401:
case 3584:
case 2905:
case 1362:
case 2570:
case 570:
case 1126:
case 3041:
case 2293:
case 3863:
case 3414:
case 376:
case 2698:
case 1754:
case 2287:
case 3959:
case 93:
case 2254:
case 4030:
case 373:
case 3028:
case 29:
case 146:
case 2114:
case 1607:
case 1608:
case 1356:
case 2317:
case 858:
case 4024:
case 529:
case 954:
case 1373:
case 874:
case 1098:
case 1289:
case 1878:
case 2608:
case 1221:
case 984:
case 2537:
case 928:
case 1609:
case 2104:
case 3600:
case 2426:
case 1871:
case 1661:
case 2687:
case 2865:
case 2510:
case 1366:
case 1813:
case 9:
case 2450:
case 1954:
case 1416:
case 2250:
case 1015:
case 37:
case 3043:
case 189:
case 2234:
case 3971:
case 946:
case 843:
case 1482:
case 157:
case 2664:
case 206:
case 1398:
case 1781:
case 1105:
case 1357:
case 3446:
case 3526:
case 3657:
case 3601:
case 2146:
case 1595:
case 624:
case 2428:
case 1600:
case 2474:
case 4050:
case 1387:
case 3944:
case 1461:
case 2318:
case 2965:
case 2026:
case 1157:
case 2795:
case 1718:
case 3535:
case 2432:
case 2139:
case 454:
case 1905:
case 3247:
case 1812:
case 3689:
case 2912:
case 1444:
case 3797:
case 949:
case 4048:
case 4013:
case 3149:
case 1328:
case 3533:
case 1224:
case 4073:
case 310:
case 85:
case 84:
case 1160:
case 1215:
case 1523:
case 1407:
case 2370:
case 2315:
case 802:
case 3579:
case 3729:
case 2603:
case 1981:
case 3715:
case 2304:
case 1075:
case 3586:
case 2098:
case 71:
case 3585:
case 3842:
case 3232:
case 3899:
case 2175:
case 2978:
case 3248:
case 200:
case 1176:
case 3894:
case 2854:
case 3717:
case 3609:
case 2573:
case 935:
case 1915:
case 4061:
case 937:
case 1591:
case 3306:
case 108:
case 784:
case 604:
case 2381:
case 2969:
case 2398:
case 1138:
case 2547:
case 3025:
case 2652:
case 1764:
case 1242:
case 1057:
case 991:
case 394:
case 2126:
case 2490:
case 1163:
case 3709:
case 147:
case 1278:
case 49:
case 785:
case 4076:
case 3255:
case 1631:
case 2988:
case 3239:
case 2833:
case 3925:
case 2683:
case 947:
case 1184:
case 1269:
case 2511:
case 514:
case 3400:
case 1879:
case 1949:
case 1790:
case 216:
case 3879:
case 1696:
case 4014:
case 3872:
case 170:
case 380:
case 2320:
case 233:
case 2639:
case 3873:
case 1290:
case 116:
case 3613:
case 2366:
case 3910:
case 3516:
case 1258:
case 3334:
case 3204:
case 252:
case 1699:
case 15:
case 2251:
case 3660:
case 321:
case 686:
case 492:
case 2337:
case 1650:
case 1188:
case 1220:
case 2476:
case 2975:
case 3132:
case 2242:
case 171:
case 3733:
case 769:
case 3369:
case 2976:
case 425:
case 2257:
case 1710:
case 2801:
case 3964:
case 938:
case 3744:
case 3937:
case 3353:
case 3110:
case 1567:
case 2470:
case 1146:
case 750:
case 2593:
case 517:
case 268:
case 3591:
case 1318:
case 3647:
case 2109:
case 1721:
case 1895:
case 2057:
case 2863:
case 2085:
case 3685:
case 3027:
case 2061:
case 1251:
case 3278:
case 3849:
case 3793:
case 3182:
case 3509:
case 1743:
case 611:
case 722:
case 1942:
case 1329:
case 3636:
case 520:
case 830:
case 1440:
case 2933:
case 2521:
case 2656:
case 412:
case 405:
case 1800:
case 2217:
case 1697:
case 1457:
case 1746:
case 1986:
case 3438:
case 2113:
case 3394:
case 428:
case 2622:
case 3257:
case 961:
case 3472:
case 1052:
case 1389:
case 3788:
case 859:
case 1145:
case 52:
case 3251:
case 341:
case 774:
case 3347:
case 3194:
case 2610:
case 3936:
case 3375:
case 3544:
case 1509:
case 1999:
case 743:
case 3800:
case 3055:
case 3856:
case 2487:
case 1959:
case 1568:
case 3926:
case 3007:
case 1453:
case 323:
case 1308:
case 1375:
case 3099:
case 3073:
case 1228:
case 1162:
case 1882:
case 3270:
case 2215:
case 2839:
case 1814:
case 2290:
case 2696:
case 3896:
case 3620:
case 2813:
case 4079:
case 742:
case 3356:
case 3506:
case 1445:
case 3643:
case 941:
case 2613:
case 2897:
case 2218:
case 4088:
case 3176:
case 2577:
case 3411:
case 1890:
case 1665:
case 761:
case 980:
case 987:
case 576:
case 1633:
case 2014:
case 1266:
case 72:
case 2249:
case 2530:
case 3753:
case 1602:
case 2040:
case 1449:
case 2051:
case 2212:
case 2761:
case 1265:
case 3760:
case 1106:
case 3905:
case 432:
case 3415:
case 773:
case 2389:
case 3521:
case 1477:
case 3130:
case 4069:
case 940:
case 1244:
case 2166:
case 1722:
case 217:
case 1680:
case 3802:
case 2060:
case 1641:
case 3550:
case 1588:
case 4035:
case 4078:
case 1161:
case 1125:
case 3710:
case 1711:
case 48:
case 2444:
case 885:
case 2526:
case 2914:
case 3420:
case 448:
case 188:
case 1869:
case 2074:
case 3213:
case 2365:
case 3005:
case 2325:
case 2094:
case 3730:
case 2565:
case 1415:
case 823:
case 1086:
case 2654:
case 1320:
case 2793:
case 12:
case 3283:
case 366:
case 3200:
case 2322:
case 3981:
case 431:
case 3314:
case 3548:
case 2468:
case 1883:
case 1055:
case 4094:
case 584:
case 3299:
case 3841:
case 3117:
case 1294:
case 2779:
case 697:
case 2604:
case 739:
case 1643:
case 1795:
case 665:
case 3037:
case 1292:
case 2484:
case 36:
case 3547:
case 3032:
case 2846:
case 2453:
case 3331:
case 1615:
case 2312:
case 1205:
case 3587:
case 3408:
case 2842:
case 3302:
case 1520:
case 2149:
case 1071:
case 3175:
case 2275:
case 1137:
case 3621:
case 2617:
case 4070:
case 2638:
case 165:
case 503:
case 2271:
case 501:
case 3494:
case 400:
case 3554:
case 471:
case 2595:
case 3015:
case 3702:
case 62:
case 3143:
case 1186:
case 1693:
case 3762:
case 3131:
case 1960:
case 2851:
case 1518:
case 3582:
case 1016:
case 3419:
case 1985:
case 3488:
case 3606:
case 489:
case 3581:
case 1164:
case 1410:
case 3921:
case 2748:
case 516:
case 851:
case 3987:
case 1863:
case 555:
case 1681:
case 872:
case 799:
case 296:
case 298:
case 3929:
case 2745:
case 1023:
case 3943:
case 1334:
case 1486:
case 4063:
case 3838:
case 2186:
case 3045:
case 2961:
case 3772:
case 24:
case 128:
case 2532:
case 679:
case 2821:
case 894:
case 3358:
case 3309:
case 3840:
case 3927:
case 3847:
case 1682:
case 0:
case 409:
case 1474:
case 3878:
case 1934:
case 2128:
case 589:
case 3766:
case 155:
case 3038:
case 1226:
case 3975:
case 3850:
case 3787:
case 764:
case 1494:
case 335:
case 1143:
case 1851:
case 1701:
case 2672:
case 655:
case 1582:
case 1281:
case 2295:
case 1598:
case 1596:
case 1892:
case 1219:
case 3888:
case 2882:
case 3578:
case 523:
case 2385:
case 674:
case 4064:
case 1889:
case 1425:
case 234:
case 223:
case 552:
case 437:
case 1797:
case 2643:
case 2993:
case 2403:
case 1997:
case 1317:
case 1909:
case 3311:
case 2499:
case 3366:
case 66:
case 80:
case 1716:
case 3791:
case 1634:
case 3453:
case 2959:
case 1601:
case 3540:
case 199:
case 1107:
case 3510:
case 3072:
case 3063:
case 788:
case 1368:
case 1179:
case 3424:
case 2913:
case 4084:
case 1822:
case 2940:
case 557:
case 4095:
case 846:
case 1133:
case 209:
case 1893:
case 3126:
case 3258:
case 236:
case 3589:
case 717:
case 2328:
case 3186:
case 2514:
case 855:
case 3231:
case 1996:
case 2210:
case 132:
case 2437:
case 597:
case 1022:
case 2408:
case 2463:
case 3902:
case 2528:
case 3804:
case 3136:
case 2410:
case 1212:
case 2980:
case 1766:
case 3467:
case 196:
case 2855:
case 1725:
case 2036:
case 1409:
case 4003:
case 2857:
case 1325:
case 1951:
case 1749:
case 1475:
case 3625:
case 2982:
case 1209:
case 3816:
case 3325:
case 1636:
case 3945:
case 2540:
case 54:
case 936:
case 1564:
case 3284:
case 397:
case 616:
case 2397:
case 3187:
case 2130:
case 2546:
case 313:
case 3389:
case 1313:
case 2997:
case 1279:
case 1201:
case 891:
case 156:
case 809:
case 953:
case 1401:
case 759:
case 360:
case 567:
case 2383:
case 3122:
case 1144:
case 2475:
case 3822:
case 3716:
case 797:
case 1532:
case 1148:
case 1629:
case 879:
case 193:
case 2599:
case 460:
case 2485:
case 2928:
case 526:
case 421:
case 3639:
case 2033:
case 1094:
case 779:
case 795:
case 1570:
case 1379:
case 3798:
case 3341:
case 3972:
case 2566:
case 829:
case 3731:
case 2118:
case 2227:
case 1300:
case 1552:
case 2572:
case 619:
case 3060:
case 3721:
case 2276:
case 141:
case 286:
case 1555:
case 504:
case 3279:
case 826:
case 3982:
case 3767:
case 2990:
case 1817:
case 1521:
case 1974:
case 3978:
case 1624:
case 661:
case 2405:
case 1988:
case 2834:
case 2830:
case 2960:
case 3036:
case 2837:
case 581:
case 1922:
case 213:
case 2262:
case 1853:
case 1946:
case 3121:
case 2206:
case 473:
case 393:
case 2152:
case 433:
case 594:
case 1630:
case 966:
case 2479:
case 1896:
case 533:
case 2464:
case 1408:
case 506:
case 2869:
case 3388:
case 290:
case 1967:
case 3690:
case 1048:
case 3870:
case 3469:
case 3860:
case 1724:
case 3671:
case 2579:
case 3795:
case 1839:
case 1654:
case 8:
case 3807:
case 2115:
case 2010:
case 2505:
case 892:
case 3297:
case 3221:
case 2297:
case 3738:
case 2717:
case 768:
case 353:
case 339:
case 182:
case 2319:
case 1229:
case 3159:
case 4002:
case 1080:
case 3782:
case 2340:
case 2360:
case 2409:
case 3079:
case 1978:
case 997:
case 952:
case 3225:
case 787:
case 1476:
case 1166:
case 2823:
case 418:
case 1884:
case 1038:
case 1862:
case 423:
case 4090:
case 2056:
case 249:
case 124:
case 571:
case 3813:
case 544:
case 508:
case 3087:
case 2568:
case 1870:
case 2877:
case 1825:
case 2336:
case 2023:
case 1612:
case 1029:
case 3893:
case 3064:
case 3566:
case 1085:
case 897:
case 96:
case 377:
case 1864:
case 2201:
case 3612:
case 1450:
case 1773:
case 2416:
case 3697:
case 3780:
case 1428:
case 1497:
case 2999:
case 229:
case 4046:
case 2324:
case 2513:
case 3941:
case 3361:
case 3684:
case 2451:
case 3458:
case 2151:
case 2256:
case 1429:
case 1394:
case 1572:
case 1747:
case 3904:
case 3675:
case 1826:
case 1589:
case 461:
case 687:
case 1695:
case 305:
case 4018:
case 2208:
case 538:
case 734:
case 1056:
case 3133:
case 601:
case 4080:
case 2517:
case 4017:
case 1372:
case 123:
case 350:
case 1935:
case 1112:
case 3081:
case 42:
case 2678:
case 3551:
case 1351:
case 3868:
case 1037:
case 3240:
case 2512:
case 325:
case 2957:
case 2089:
case 2049:
case 1806:
case 3799:
case 3512:
case 1788:
case 1618:
case 2785:
case 2462:
case 2902:
case 3009:
case 817:
case 1147:
case 2335:
case 314:
case 3108:
case 3291:
case 2876:
case 2522:
case 1688:
case 1726:
case 3265:
case 1342:
case 4001:
case 344:
case 1708:
case 2984:
case 3784:
case 2002:
case 2520:
case 2183:
case 3281:
case 2001:
case 3835:
case 566:
case 38:
case 1216:
case 1045:
case 4015:
case 1081:
case 493:
case 1343:
case 2477:
case 2425:
case 593:
case 3596:
case 1142:
case 2994:
case 746:
case 2357:
case 4012:
case 95:
case 3735:
case 3846:
case 3513:
case 917:
case 4041:
case 3525:
case 1543:
case 2701:
case 1309:
case 1082:
case 1498:
case 2497:
case 2886:
case 2582:
case 805:
case 1046:
case 547:
case 827:
case 2391:
case 896:
case 2962:
case 281:
case 3473:
case 1345:
case 426:
case 626:
case 3185:
case 986:
case 1635:
case 1180:
case 2017:
case 3655:
case 3932:
case 854:
case 114:
case 283:
case 2586:
case 2169:
case 2135:
case 3851:
case 3654:
case 105:
case 2790:
case 1849:
case 1692:
case 3553:
case 2204:
case 1230:
case 2811:
case 1465:
case 2199:
case 783:
case 2342:
case 1436:
case 798:
case 3759:
case 367:
case 2213:
case 2358:
case 968:
case 230:
case 1620:
case 1028:
case 2569:
case 2576:
case 190:
case 1275:
case 1285:
case 3113:
case 563:
case 2310:
case 1902:
case 3269:
case 882:
case 525:
case 3739:
case 3084:
case 3044:
case 3507:
case 251:
case 1297:
case 2948:
case 2110:
case 934:
case 3559:
case 1383:
case 3918:
case 3268:
case 142:
case 2634:
case 2345:
case 3848:
case 2260:
case 1078:
case 3527:
case 3629:
case 2807:
case 1298:
case 3433:
case 2929:
case 2780:
case 3188:
case 1424:
case 355:
case 3148:
case 375:
case 2068:
case 4047:
case 345:
case 1140:
case 4042:
case 585:
case 278:
case 3608:
case 3495:
case 587:
case 3287:
case 44:
case 1594:
case 458:
case 2692:
case 104:
case 3796:
case 2266:
case 1646:
case 215:
case 23:
case 152:
case 1858:
case 1270:
case 2541:
case 1925:
case 3821:
case 129:
case 958:
case 1907:
case 4067:
case 3195:
case 3370:
case 1430:
case 3138:
case 2954:
case 3061:
case 733:
case 47:
case 1940:
case 312:
case 1397:
case 2752:
case 3775:
case 2133:
case 1512:
case 1437:
case 2571:
case 806:
case 887:
case 3577:
case 3830:
case 1338:
case 2221:
case 2029:
case 2321:
case 950:
case 1809:
case 1627:
case 1460:
case 672:
case 3161:
case 1868:
case 1248:
case 2376:
case 1393:
case 2430:
case 4077:
case 3705:
case 2088:
case 2816:
case 3624:
case 2331:
case 3147:
case 2007:
case 1845:
case 3703:
case 2458:
case 2895:
case 545:
case 583:
case 357:
case 2938:
case 27:
case 1481:
case 267:
case 2265:
case 3836:
case 1539:
case 2232:
case 1353:
case 3035:
case 3616:
case 955:
case 162:
case 1031:
case 1979:
case 3514:
case 1191:
case 3683:
case 1361:
case 2198:
case 4056:
case 3843:
case 3357:
case 191:
case 1803:
case 1574:
case 3961:
case 3350:
case 862:
case 2789:
case 628:
case 617:
case 3930:
case 1225:
case 2563:
case 2787:
case 3490:
case 813:
case 158:
case 1252:
case 113:
case 2160:
case 1975:
case 3979:
case 1103:
case 2299:
case 2584:
case 2341:
case 69:
case 306:
case 2800:
case 303:
case 1585:
case 2216:
case 2131:
case 3405:
case 1807:
case 2894:
case 2417:
case 3466:
case 714:
case 1599:
case 1321:
case 3492:
case 4:
case 2502:
case 237:
case 2164:
case 539:
case 2159:
case 75:
case 2899:
case 842:
case 1327:
case 2544:
case 3736:
case 82:
case 2182:
case 1267:
case 2097:
case 2601:
case 2681:
case 3534:
case 3853:
case 1404:
case 1991:
case 1359:
case 4004:
case 1810:
case 3140:
case 3611:
case 1505:
case 1604:
case 1566:
case 245:
case 1187:
case 1649:
case 2783:
case 463:
case 685:
case 4062:
case 925:
case 3882:
case 857:
case 3116:
case 2504:
case 3026:
case 757:
case 404:
case 2138:
case 2784:
case 1134:
case 1793:
case 652:
case 1260:
case 877:
case 758:
case 2788:
case 3701:
case 2172:
case 1062:
case 1734:
case 2307:
case 3993:
case 3757:
case 666:
case 760:
case 3722:
case 11:
case 2653:
case 1496:
case 3359:
case 3365:
case 2427:
case 1713:
case 2884:
case 893:
case 1777:
case 2631:
case 832:
case 430:
case 1877:
case 3378:
case 39:
case 3181:
case 2657:
case 2660:
case 227:
case 3305:
case 1114:
case 1952:
case 2596:
case 2121:
case 1506:
case 1903:
case 3354:
case 2968:
case 452:
case 2117:
case 2303:
case 2794:
case 614:
case 2677:
case 2688:
case 1033:
case 442:
case 2042:
case 2507:
case 3085:
case 1933:
case 569:
case 3711:
case 364:
case 951:
case 2406:
case 849:
case 1816:
case 663:
case 2352:
case 1245:
case 259:
case 840:
case 3069:
case 2009:
case 1333:
case 1246:
case 3819:
case 1898:
case 3931:
case 1331:
case 1619:
case 1340:
case 3481:
case 3496:
case 1687:
case 3046:
case 3541:
case 637:
case 995:
case 2361:
case 3737:
case 3053:
case 1939:
case 2015:
case 1768:
case 7:
case 297:
case 2326:
case 2632:
case 3119:
case 4052:
case 2935:
case 796:
case 3986:
case 2750:
case 2623:
case 2359:
case 2966:
case 2829:
case 507:
case 3667:
case 1872:
case 2673:
case 752:
case 2749:
case 542:
case 2893:
case 649:
case 3222:
case 46:
case 2786:
case 2558:
case 1277:
case 1644:
case 2244:
case 3967:
case 2557:
case 347:
case 1005:
case 50:
case 2486:
case 1947:
case 1354:
case 1223:
case 2466:
case 2148:
case 3765:
case 2305:
case 2671:
case 1077:
case 922:
case 2407:
case 3380:
case 2818:
case 3137:
case 406:
case 898:
case 1698:
case 3157:
case 2125:
case 1832:
case 1973:
case 4057:
case 3871:
case 3454:
case 3207:
case 2222:
case 64:
case 2668:
case 3699:
case 3024:
case 3519:
case 1109:
case 3051:
case 3376:
case 3985:
case 2775:
case 3900:
case 2308:
case 2006:
case 1363:
case 1414:
case 869:
case 304:
case 3021:
case 2655:
case 1597:
case 481:
case 117:
case 3199:
case 2283:
case 208:
case 476:
case 2927:
case 3661:
case 684:
case 1834:
case 3417:
case 540:
case 1513:
case 271:
case 1495:
case 3854:
case 4023:
case 3984:
case 4037:
case 2021:
case 2503:
case 3627:
case 3022:
case 90:
case 2806:
case 3827:
case 222:
case 2705:
case 1348:
case 2141:
case 3668:
case 3295:
case 1377:
case 2820:
case 3364:
case 2983:
case 2583:
case 3901:
case 2411:
case 1135:
case 2712:
case 3948:
case 285:
case 1096:
case 299:
case 1319:
case 2274:
case 427:
case 2718:
case 465:
case 1958:
case 2759:
case 3160:
case 1487:
case 2091:
case 2377:
case 125:
case 648:
case 3042:
case 2253:
case 2433:
case 3234:
case 2071:
case 1529:
case 4092:
case 1904:
case 3953:
case 509:
case 3769:
case 2669:
case 600:
case 770:
case 362:
case 457:
case 3928:
case 3315:
case 2392:
case 777:
case 2012:
case 932:
case 2438:
case 1538:
case 1923:
case 1241:
case 814:
case 3677:
case 1207:
case 258:
case 1395:
case 644:
case 1782:
case 1349:
case 2279:
case 2943:
case 3486:
case 1956:
case 2003:
case 1034:
case 3294:
case 1522:
case 1208:
case 2086:
case 811:
case 645:
case 1181:
case 3351:
case 65:
case 3969:
case 999:
case 654:
case 721:
case 272:
case 2817:
case 63:
case 2039:
case 1792:
case 1119:
case 565:
case 1823:
case 2706:
case 3778:
case 3312:
case 727:
case 2156:
case 3227:
case 3475:
case 3659:
case 3151:
case 33:
case 2046:
case 2792:
case 282:
case 177:
case 908:
case 2004:
case 2388:
case 2064:
case 3464:
case 2111:
case 959:
case 3436:
case 622:
case 870:
case 3680:
case 3682:
case 1441:
case 4039:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1646596801/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,0,0,0,0,0,0,1,0,0,1,1,1,0,0,0,1,1,0,0,1,0,1,1,1,1,1,0,0,0,1,1,1,0,1,1,0,1,0,0,0,1,0,0,1,0,0,0,1,1,1,1,1,0,1,1,1,0,0,0,1,0,1,1,1,1,0,0,0,0,0,1,0,1,1,1,0,1,1,0,0,1,1,1,1,0,1,0,1,1,1,0,1,0,0,0,0,1,0,0,0,1,1,0,1,1,0,1,1,0,1,1,0,1,0,0,1,1,0,0,1,1,0,0,1,0,0,1,1,1,0,1,1,1,1,0,1,1,0,0,0,0,0,1,1,0,0,1,0,1,0,0,1,0,1,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,1,1,1,1,1,1,1,0,1,0,1,0,0,0,1,0,1,0,1,0,0,1,1,1,0,1,1,0,0,1,1,0,0,1,1,1,0,0,0,0,0,1,1,1,0,1,0,0,0,0,0,1,0,0,1,1,1,0,0,1,1,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,1,1,1,0,0,0,1,0,0,1,0,1,0,0,1,0,1,1,0,1,0,0,1,0,1,0,0,0,0,1,0,0,0,0,0,0,1,1,0,0,1,1,0,0,1,1,1,0,0,0,0,1,0,0,1,0,1,1,0,1,0,0,1,1,1,1,1,1,1,0,0,1,1,0,0,1,0,1,1,0,1,0,0,1,1,0,1,0,0,1,1,0,0,0,1,1,1,1,1,0,1,0,1,0,0,0,0,0,0,1,1,1,1,1,1,1,0,1,0,1,1,0,1,1,0,0,0,1,1,1,1,1,1,1,1,1,0,1,0,0,0,1,0,0,1,0,0,0,0,1,0,1,1,1,1,0,0,1,0,1,1,1,0,0,1,0,1,0,1,1,1,0,1,1,1,1,1,0,1,0,1,0,1,1,1,1,0,0,0,1,0,1,0,0,1,0,0,0,0,1,1,0,0,0,1,0,1,0,1,0,1,1,1,0,1,1,0,0,1,1,0,0,1,1,0,1,0,0,1,0,0,0,0,1,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,1,1,0,0,0,1,1,0,1,0,1,1,0,1,0,0,1,0,1,1,1,1,0,0,1,0,1,0,0,0,0,0,1,0,1,1,1,1,0,0,1,0,1,1,1,0,0,0,1,0,0,0,1,0,1,1,1,1,0,1,0,0,0,0,1,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,0,0,0,1,1,1,0,1,1,1,1,0,0,0,1,0,1,0,0,1,0,1,0,0,0,1,0,0,1,1,0,0,1,0,1,1,0,1,1,0,0,1,0,0,1,1,0,1,0,1,1,1,1,1,1,1,0,0,0,1,0,0,1,0,0,1,0,0,0,1,0,1,1,0,0,0,1,0,1,1,0,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,1,0,1,1,1,0,0,0,1,0,0,1,0,1,0,1,1,0,0,1,1,1,0,0,1,0,0,1,0,1,0,1,1,0,0,0,0,0,1,0,0,1,0,1,1,1,1,1,0,0,0,1,0,1,0,0,1,0,1,0,1,1,1,0,0,0,0,0,1,1,0,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,1,0,1,1,0,1,1,0,0,1,0,1,1,1,1,1,1,0,1,1,0,0,0,0,0,0,1,1,0,1,0,1,0,1,1,1,1,1,1,0,0,0,1,0,1,0,1,1,0,1,1,0,0,0,0,0,1,1,0,1,0,0,1,1,1,1,0,0,1,1,0,1,1,0,1,0,0,0,0,0,1,1,0,0,1,0,0,0,1,0,0,0,1,1,1,0,0,1,0,1,0,0,1,0,0,1,0,1,1,0,1,1,1,0,1,0,1,1,0,0,1,1,0,1,0,1,0,0,1,1,1,0,0,0,1,1,1,1,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,0,0,1,0,0,1,0,1,0,1,0,0,0,0,1,1,1,0,0,1,1,0,1,1,1,1,1,0,1,1,0,0,0,0,1,1,0,0,1,1,0,0,0,0,1,1,1,0,0,1,1,0,0,0,1,1,0,1,0,1,1,0,1,1,1,0,1,1,1,0,0,0,0,0,0,0,1,1,1,1,0,1,1,0,1,1,0,0,1,1,1,1,1,0,0,0,0,1,1,1,0,0,0,1,1,0,0,0,1,1,0,0,1,0,1,0,0,0,1,1,0,1,0,0,1,0,1,1,0,1,1,0,0,1,1,1,1,0,0,0,0,0,1,0,1,0,0,1,0,0,1,1,0,0,1,1,0,0,1,1,1,0,0,1,1,1,0,1,1,0,0,1,1,0,1,0,1,0,1,0,0,0,0,1,1,1,0,0,0,1,1,0,1,1,1,1,1,0,0,1,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,1,1,0,1,1,0,0,0,1,0,0,0,0,0,1,1,0,1,1,1,0,1,0,0,0,1,1,1,0,0,0,1,1,0,0,1,1,0,0,1,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,1,0,0,1,1,0,1,0,0,0,1,0,0,1,1,1,1,1,0,0,0,1,1,0,0,1,0,1,0,0,1,1,1,0,0,1,0,1,1,0,0,0,0,1,1,0,1,0,0,1,0,1,0,1,1,1,0,1,1,0,0,1,0,1,0,0,1,0,0,1,1,0,0,1,1,0,1,0,0,0,0,0,1,1,0,0,1,0,0,1,0,0,0,1,0,1,1,0,1,0,1,0,0,1,1,1,0,1,1,0,0,0,0,1,0,0,0,1,1,1,0,1,0,1,0,0,1,1,1,1,1,0,0,1,0,0,0,1,0,0,1,1,0,0,0,1,1,0,0,1,0,0,1,1,0,1,1,1,0,0,1,1,0,1,1,0,0,0,0,0,1,1,1,0,1,1,0,1,0,0,0,0,1,0,1,0,0,0,1,1,0,0,1,1,1,0,0,0,0,1,1,1,1,1,1,0,1,1,1,0,1,0,1,0,0,1,1,1,0,1,0,0,0,1,0,1,1,0,1,1,0,1,0,1,1,1,0,1,0,1,0,1,0,1,1,1,1,1,1,0,0,1,0,0,1,0,0,0,0,1,0,1,1,0,1,1,0,0,1,0,1,0,1,0,1,1,0,1,0,0,1,1,1,0,0,1,1,0,0,1,0,1,1,1,0,1,0,0,1,0,0,0,0,1,1,1,0,0,0,1,0,1,1,0,0,0,0,0,0,1,0,1,0,1,1,0,1,0,0,0,1,0,1,0,1,1,1,1,0,0,1,1,0,0,1,0,0,1,1,1,1,1,1,0,0,0,0,1,0,0,1,1,1,1,0,0,0,1,0,1,1,1,1,0,1,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,0,0,1,0,0,0,1,0,0,1,1,1,1,1,1,1,0,1,0,0,1,1,1,0,1,0,0,1,0,0,1,0,1,1,1,0,0,1,1,0,1,1,0,0,1,1,1,1,0,0,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,1,1,1,1,0,1,0,0,0,0,1,0,1,1,0,1,1,1,0,1,1,1,1,1,0,1,0,1,1,0,0,0,0,1,0,1,0,0,1,0,0,1,1,1,1,1,0,0,0,1,1,0,0,0,1,1,1,1,0,0,0,1,1,1,0,0,1,1,1,1,1,1,1,1,0,1,1,0,0,1,1,0,0,0,0,1,1,0,0,0,1,0,1,1,0,1,0,1,1,1,1,1,0,0,1,0,0,1,1,1,1,0,1,1,1,0,1,1,0,0,0,1,1,0,0,0,0,1,0,0,1,0,0,1,1,1,0,0,1,0,1,1,0,0,1,0,1,0,1,0,1,1,0,1,1,1,1,1,1,1,0,0,1,1,0,0,0,1,0,1,1,1,0,1,0,1,1,1,0,0,0,0,0,0,0,1,0,0,0,1,1,1,1,0,0,1,1,0,0,1,0,1,0,0,0,0,1,0,1,0,1,1,0,0,0,1,1,1,1,1,1,1,0,0,0,1,1,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,1,0,1,0,0,1,1,0,0,1,1,0,0,1,0,1,1,0,1,0,1,1,1,0,1,1,0,1,1,0,1,1,0,0,1,1,1,0,0,0,1,1,0,0,1,1,1,0,0,1,0,0,1,1,0,0,1,0,0,0,1,1,0,0,1,0,0,0,0,1,0,0,0,0,1,1,1,1,0,0,1,1,1,0,1,0,1,0,1,0,1,1,0,0,1,0,1,0,0,0,0,0,0,1,0,0,1,1,1,0,1,1,0,1,0,1,1,0,0,0,0,1,0,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,1,1,0,1,0,1,0,1,1,1,0,0,0,1,1,0,0,0,0,1,0,1,0,0,1,1,0,1,0,0,1,1,1,0,1,0,0,0,0,0,1,0,1,0,0,0,1,0,1,1,0,0,0,0,1,1,0,1,0,1,1,0,0,1,0,1,1,0,1,1,1,0,0,0,1,0,1,0,1,1,1,1,0,0,0,1,1,0,0,1,0,0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,1,0,0,1,0,0,0,1,1,0,1,1,0,1,1,1,1,1,1,0,1,0,1,0,1,0,1,1,0,1,0,1,0,1,0,1,0,0,1,0,1,1,1,0,0,1,1,1,0,0,1,0,1,1,1,0,1,0,0,0,0,1,1,1,1,0,0,1,0,0,1,0,1,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,0,1,1,0,1,0,0,1,0,0,0,1,1,1,0,1,1,1,1,0,1,0,1,0,1,1,1,1,0,1,0,0,1,1,1,0,0,0,1,1,0,0,1,0,1,1,1,0,0,0,1,0,1,1,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,1,0,0,1,1,0,1,1,0,1,0,0,1,1,1,1,0,0,0,1,1,1,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,1,1,1,1,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,0,1,0,0,1,1,0,1,0,0,0,1,0,1,1,0,0,0,0,1,1,1,0,1,0,0,0,1,0,1,1,0,0,0,1,0,0,1,1,0,1,0,1,1,0,0,0,1,0,0,1,0,0,1,1,1,0,0,0,0,0,0,0,1,0,0,1,1,1,0,1,0,1,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,1,0,1,0,1,0,1,0,0,0,0,0,1,0,0,1,1,1,1,0,0,1,1,0,1,1,1,0,1,0,1,1,0,1,1,0,0,0,0,1,1,1,1,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,1,0,1,1,1,0,0,0,1,0,0,1,0,1,0,1,0,0,1,0,0,0,0,0,1,0,1,0,0,1,0,1,0,1,0,0,0,1,1,0,1,1,0,0,0,0,0,1,1,0,1,0,1,1,0,0,0,1,0,1,1,1,0,0,1,0,1,1,0,0,0,1,0,1,0,1,1,1,1,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1,1,1,0,1,1,0,1,1,0,1,0,1,1,0,1,0,1,1,0,0,0,0,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,1,0,1,1,1,0,0,0,0,0,1,0,1,0,1,1,1,0,0,1,1,0,0,1,0,1,0,0,1,0,0,1,1,1,0,0,0,1,0,0,1,0,1,1,0,0,1,1,1,1,1,1,0,0,0,1,0,0,1,1,0,0,0,1,1,1,0,1,1,1,0,0,0,1,0,1,0,1,1,0,0,1,1,0,1,0,0,0,0,0,1,0,0,0,1,0,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,1,1,1,1,0,0,0,1,0,0,1,1,1,1,1,1,0,0,1,0,0,0,1,1,0,1,0,0,1,1,0,1,1,1,0,1,0,1,1,1,1,0,1,1,1,0,0,1,1,1,1,1,0,0,1,0,0,1,0,1,0,1,0,0,0,0,0,1,0,1,0,1,0,0,1,1,1,1,0,0,0,0,0,0,1,0,0,0,1,1,1,1,1,1,0,0,1,0,1,0,1,1,0,1,0,0,0,1,0,0,1,0,0,0,0,1,1,1,0,0,1,0,0,0,0,1,1,1,0,1,1,0,0,1,1,0,1,1,1,1,1,0,1,0,1,1,0,1,0,0,1,1,0,0,1,0,0,1,0,0,1,1,1,0,1,1,0,1,0,0,1,0,0,0,0,1,0,1,1,1,1,0,1,0,0,1,0,1,1,1,0,0,1,0,0,0,1,0,1,0,0,1,1,0,1,0,1,1,0,1,0,0,0,0,0,1,0,0,1,1,0,0,0,0,0,0,1,0,1,1,1,0,0,1,1,1,0,1,1,0,1,1,0,0,0,1,0,1,0,0,0,0,0,0,1,1,1,1,1,0,1,0,0,0,0,1,1,1,1,1,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,0,0,0,1,1,0,0,1,0,1,0,0,1,0,1,0,0,0,0,1,0,1,0,0,0,0,1,1,0,1,0,0,0,0,1,1,0,1,0,0,1,1,0,0,0,1,0,0,0,0,0,1,0,0,1,1,1,0,1,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,1,0,0,0,1,1,1,1,1,0,0,0,0,1,1,0,0,0,0,0,1,0,1,0,0,1,0,1,1,1,0,1,1,0,1,0,0,1,1,1,1,1,1,0,0,0,1,1,0,1,1,0,0,0,1,0,1,1,0,1,1,0,1,1,1,0,0,1,0,0,0,0,0,1,0,1,0,1,0,0,0,0,1,0,0,1,1,0,1,1,1,0,1,0,0,1,0,0,1,0,0,1,0,1,0,0,1,1,0,0,0,1,1,1,0,0,1,1,1,1,1,0,1,0,0,0,1,1,1,1,1,1,1,1,0,1,1,1,1,0,0,1,1,0,1,1,0,1,0,0,1,0,0,0,0,0,0,1,0,0,1,1,1,1,1,1,0,0,1,1,0,0,0,0,1,1,1,1,1,0,0,1,0,0,0,0,1,1,0,1,0,1,1,0,1,0,1,0,0,0,1,1,0,1,1,0,1,1,0,1,0,0,1,1,0,0,0,0,0,1,1,1,1,0,0,1,1,1,0,1,1,1,1,1,1,1,0,0,0,0,0,1,1,0,1,0,1,0,1,0,1,0,1,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,1,0,1,0,0,0,0,1,1,0,1,1,0,0,1,1,1,0,1,0,1,1,1,0,0,1,1,1,1,1,1,0,1,1,0,1,0,1,1,0,1,0,1,1,0,0,0,1,1,1,1,1,0,1,1,1,0,1,0,0,0,1,1,0,0,1,1,0,1,1,1,1,1,0,1,1,1,0,0,1,1,1,1,0,0,1,1,0,0,1,0,1,1,1,1,0,0,0,0,0,1,0,0,1,1,1,1,1,0,1,0,0,0,0,1,0,1,1,1,1,0,1,1,0,0,0,0,0,1,1,0,0,0,1,0,1,1,0,0,0,1,1,1,0,1,0,1,0,0,1,0,0,0,0,1,1,0,0,0,1,1,0,1,0,1,1,0,0,1,0,1,1,0,0,0,0,1,1,1,0,0,0,0,0,0,1,1,0,1,1,1,0,1,1,0,1,0,0,0,0,0,1,1,0,1,1,1,0,0,0,1,1,1,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,0,1,1,1,1,0,1,0,0,0,1,1,1,0,0,0,1,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,1,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,0,0,0,0,0,0,1,0,0,1,0,1,0,1,1,0,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,1,1,0,1,0,0,0,1,1,1,1,1,0,0,1,0,0,0,0,0,0,1,1,1,1,1,0,0,1,0,0,1,1,1,0,0,1,0,1,0,0,0,1,0,0,1,1,0,0,0,1,1,1,0,0,0,0,1,1,1,1,1,1,0,0,1,1,0,1,0,0,1,0,1,1,1,1,0,0,1,1,1,1,0,0,1,1,1,0,1,1,1,1,0,1,0,1,0,0,0,0,1,0,1,0,0,1,1,0,0,1,0,0,0,1,0,1,1,1,0,1,0,1,1,1,0,1,1,1,1,1,0,0,0,0,1,0,1,1,0,1,1,0,1,0,1,1,1,0,0,1,0,0,0,0,1,0,1,1,0,1,0,1,0,1,0,0,0,1,0,0,0,0,1,1,1,0,1,0,0,0,0,1,0,1,1,1,1,0,0,0,1,1,1,0,0,0,0,0,1,0,0,1,0,1,0,0,0,1,0,0,1,1,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0,1,0,0,0,1,0,0,1,0,1,0,0,0,1,1,0,1,0,1,0,1,0,0,1,1,1,0,1,1,0,0,1,1,1,0,0,1,0,1,1,0,0,0,0,0,1,1,0,1,1,1,1,0,0,0,0,0,1,0,1,1,1,0,1,0,0,1,0,1,0,1,1,0,0,0,1,0,1,1,1,0,0,1,1,1,1,1,1,1,1,0,0,0,1,1,0,0,0,1,1,1,];
var gg_b = "1646593201/";

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
