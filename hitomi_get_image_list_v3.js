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
case 3535:
case 3240:
case 2598:
case 4059:
case 3841:
case 2366:
case 835:
case 3646:
case 3847:
case 1124:
case 696:
case 2592:
case 2629:
case 2429:
case 1909:
case 3580:
case 3027:
case 3999:
case 1875:
case 924:
case 301:
case 1790:
case 3021:
case 599:
case 763:
case 25:
case 513:
case 1751:
case 538:
case 3389:
case 2571:
case 256:
case 410:
case 207:
case 1678:
case 215:
case 3852:
case 3292:
case 669:
case 3601:
case 2280:
case 3373:
case 2716:
case 2235:
case 3517:
case 352:
case 1894:
case 2540:
case 1672:
case 1245:
case 498:
case 3511:
case 987:
case 3298:
case 891:
case 1530:
case 2953:
case 32:
case 1208:
case 1450:
case 2732:
case 3271:
case 3804:
case 326:
case 2714:
case 56:
case 1256:
case 2763:
case 1491:
case 2738:
case 1896:
case 2009:
case 1339:
case 546:
case 1697:
case 566:
case 716:
case 2484:
case 3402:
case 620:
case 3291:
case 3456:
case 728:
case 3656:
case 1125:
case 2888:
case 834:
case 3408:
case 1677:
case 14:
case 16:
case 2882:
case 318:
case 146:
case 2033:
case 1320:
case 1471:
case 2068:
case 1876:
case 3454:
case 2737:
case 3654:
case 667:
case 647:
case 2731:
case 1800:
case 1747:
case 2919:
case 3445:
case 209:
case 1498:
case 2160:
case 1874:
case 1692:
case 1529:
case 5:
case 3536:
case 2212:
case 4013:
case 1244:
case 3325:
case 3796:
case 3979:
case 199:
case 2234:
case 3848:
case 781:
case 2218:
case 138:
case 113:
case 4064:
case 1704:
case 3120:
case 1193:
case 3022:
case 2359:
case 1246:
case 842:
case 862:
case 390:
case 1440:
case 3028:
case 1640:
case 2943:
case 3805:
case 1706:
case 4066:
case 2430:
case 2630:
case 472:
case 1586:
case 3558:
case 957:
case 2581:
case 3379:
case 1065:
case 1830:
case 139:
case 3416:
case 3817:
case 2122:
case 2587:
case 3925:
case 537:
case 1594:
case 2247:
case 3506:
case 1885:
case 2241:
case 1362:
case 3614:
case 3414:
case 3570:
case 623:
case 2959:
case 1596:
case 304:
case 2695:
case 1368:
case 2020:
case 2003:
case 3663:
case 3463:
case 2769:
case 3638:
case 2252:
case 3547:
case 2510:
case 3880:
case 2892:
case 3541:
case 729:
case 2423:
case 2600:
case 2623:
case 3281:
case 1903:
case 3729:
case 785:
case 3835:
case 3287:
case 572:
case 393:
case 988:
case 3162:
case 497:
case 2965:
case 2476:
case 2877:
case 1482:
case 1718:
case 90:
case 3383:
case 2755:
case 208:
case 1575:
case 1688:
case 2744:
case 1712:
case 2257:
case 3973:
case 3542:
case 2891:
case 671:
case 2496:
case 3288:
case 413:
case 1595:
case 3548:
case 2850:
case 2290:
case 760:
case 648:
case 668:
case 1681:
case 305:
case 2353:
case 1711:
case 3730:
case 172:
case 2949:
case 1066:
case 784:
case 1576:
case 2121:
case 2702:
case 1263:
case 3590:
case 211:
case 2582:
case 1238:
case 3812:
case 636:
case 2039:
case 44:
case 1214:
case 2242:
case 2675:
case 2708:
case 63:
case 1049:
case 3551:
case 3818:
case 446:
case 3431:
case 2745:
case 2913:
case 1367:
case 1610:
case 1574:
case 1410:
case 959:
case 2754:
case 3637:
case 3437:
case 3399:
case 1735:
case 1361:
case 137:
case 1523:
case 3989:
case 1216:
case 702:
case 2205:
case 724:
case 2979:
case 2848:
case 1863:
case 2796:
case 641:
case 3212:
case 661:
case 1838:
case 3597:
case 963:
case 314:
case 1814:
case 4089:
case 758:
case 3591:
case 678:
case 899:
case 3218:
case 535:
case 1781:
case 1501:
case 1165:
case 3485:
case 3685:
case 3359:
case 3578:
case 955:
case 2022:
case 2794:
case 1611:
case 1816:
case 3630:
case 290:
case 1617:
case 3715:
case 142:
case 2028:
case 3572:
case 86:
case 2456:
case 866:
case 2656:
case 2602:
case 134:
case 2534:
case 47:
case 3068:
case 1928:
case 2408:
case 2250:
case 916:
case 476:
case 2890:
case 233:
case 2512:
case 3882:
case 1544:
case 2445:
case 309:
case 3919:
case 1079:
case 1710:
case 1635:
case 1435:
case 2454:
case 3737:
case 2393:
case 1159:
case 4073:
case 2983:
case 2536:
case 1680:
case 1480:
case 4024:
case 2278:
case 3067:
case 3280:
case 3716:
case 1921:
case 2401:
case 307:
case 191:
case 2407:
case 2324:
case 2858:
case 2511:
case 3881:
case 3686:
case 2298:
case 3486:
case 3540:
case 2804:
case 226:
case 3009:
case 2795:
case 2326:
case 3684:
case 403:
case 3484:
case 954:
case 692:
case 1164:
case 3763:
case 500:
case 2669:
case 3738:
case 135:
case 2774:
case 3598:
case 2535:
case 3217:
case 1831:
case 2723:
case 2580:
case 542:
case 2841:
case 3366:
case 1285:
case 2646:
case 2776:
case 4025:
case 2999:
case 1782:
case 981:
case 356:
case 2389:
case 2455:
case 2444:
case 1412:
case 1788:
case 3702:
case 1844:
case 2812:
case 1295:
case 2834:
case 3248:
case 3121:
case 503:
case 1777:
case 3675:
case 3475:
case 3588:
case 400:
case 176:
case 644:
case 3242:
case 3039:
case 2557:
case 1026:
case 1441:
case 2437:
case 1846:
case 677:
case 1073:
case 2431:
case 1447:
case 3913:
case 2836:
case 788:
case 3696:
case 3496:
case 2288:
case 1327:
case 3251:
case 3897:
case 1514:
case 1670:
case 2542:
case 1563:
case 1538:
case 4083:
case 1604:
case 2924:
case 2109:
case 1089:
case 1276:
case 3353:
case 217:
case 1223:
case 205:
case 632:
case 3949:
case 2615:
case 1452:
case 1606:
case 2730:
case 594:
case 1537:
case 2541:
case 1322:
case 435:
case 1531:
case 645:
case 3510:
case 2880:
case 3674:
case 219:
case 2835:
case 1854:
case 1294:
case 2060:
case 2281:
case 1845:
case 3258:
case 3400:
case 194:
case 1025:
case 38:
case 1808:
case 1690:
case 2993:
case 2162:
case 3319:
case 386:
case 951:
case 3476:
case 3965:
case 1856:
case 1802:
case 1143:
case 653:
case 1657:
case 2133:
case 2383:
case 940:
case 960:
case 3755:
case 2817:
case 1093:
case 3587:
case 282:
case 3840:
case 2925:
case 3707:
case 2379:
case 3581:
case 2416:
case 679:
case 3701:
case 3241:
case 1772:
case 3247:
case 2506:
case 2552:
case 984:
case 2632:
case 1119:
case 2570:
case 2414:
case 1642:
case 1791:
case 230:
case 2663:
case 3769:
case 2638:
case 2438:
case 3695:
case 3020:
case 3705:
case 3478:
case 1607:
case 1407:
case 2815:
case 3585:
case 482:
case 1601:
case 1852:
case 3472:
case 627:
case 3672:
case 3894:
case 152:
case 815:
case 1298:
case 1324:
case 807:
case 651:
case 3208:
case 1277:
case 2113:
case 3742:
case 126:
case 533:
case 404:
case 518:
case 3202:
case 3491:
case 2164:
case 748:
case 3256:
case 3189:
case 3339:
case 1326:
case 3053:
case 419:
case 2554:
case 1535:
case 2230:
case 1774:
case 1446:
case 2837:
case 2436:
case 2636:
case 1723:
case 1700:
case 2831:
case 3124:
case 822:
case 2418:
case 3961:
case 3790:
case 397:
case 2502:
case 101:
case 856:
case 2556:
case 3967:
case 1021:
case 3751:
case 2612:
case 1444:
case 2412:
case 2508:
case 2634:
case 3126:
case 1389:
case 1325:
case 1796:
case 814:
case 723:
case 2863:
case 399:
case 1979:
case 964:
case 1842:
case 3704:
case 1120:
case 1103:
case 2507:
case 3193:
case 1794:
case 2787:
case 2501:
case 3962:
case 977:
case 417:
case 3758:
case 2781:
case 1028:
case 3640:
case 2617:
case 2360:
case 242:
case 3586:
case 2816:
case 2611:
case 3968:
case 3706:
case 1851:
case 1518:
case 1456:
case 52:
case 1291:
case 1602:
case 1857:
case 2284:
case 526:
case 133:
case 34:
case 3477:
case 36:
case 1250:
case 1775:
case 1408:
case 234:
case 3320:
case 3303:
case 1393:
case 2159:
case 3741:
case 1654:
case 2079:
case 2710:
case 1645:
case 1445:
case 3800:
case 809:
case 552:
case 3529:
case 3492:
case 1536:
case 3874:
case 2680:
case 505:
case 119:
case 1547:
case 3059:
case 747:
case 2537:
case 1541:
case 3215:
case 2322:
case 294:
case 1729:
case 1281:
case 3903:
case 2845:
case 193:
case 1060:
case 1835:
case 2328:
case 808:
case 3718:
case 3682:
case 628:
case 2808:
case 2657:
case 1133:
case 654:
case 1168:
case 2451:
case 2143:
case 3488:
case 3688:
case 310:
case 2605:
case 2405:
case 1925:
case 1817:
case 182:
case 452:
case 1786:
case 3885:
case 3237:
case 1614:
case 2442:
case 1570:
case 1414:
case 3362:
case 2119:
case 1432:
case 426:
case 2275:
case 3183:
case 2648:
case 2448:
case 3333:
case 104:
case 3368:
case 1638:
case 2960:
case 2791:
case 1663:
case 130:
case 1463:
case 1834:
case 961:
case 941:
case 295:
case 2844:
case 1590:
case 3263:
case 3214:
case 811:
case 2771:
case 504:
case 276:
case 418:
case 978:
case 3232:
case 643:
case 27:
case 3610:
case 775:
case 3574:
case 3829:
case 655:
case 2073:
case 1631:
case 337:
case 3361:
case 2846:
case 2441:
case 2153:
case 1437:
case 796:
case 2792:
case 2024:
case 3500:
case 79:
case 2470:
case 2514:
case 3884:
case 1542:
case 2321:
case 3013:
case 1288:
case 2327:
case 2869:
case 1109:
case 3595:
case 616:
case 2538:
case 1282:
case 519:
case 4022:
case 2200:
case 2223:
case 2458:
case 3681:
case 3481:
case 1161:
case 117:
case 1505:
case 3199:
case 2452:
case 4028:
case 1926:
case 3711:
case 2652:
case 2606:
case 3066:
case 2807:
case 1615:
case 372:
case 3284:
case 1062:
case 411:
case 971:
case 3922:
case 2876:
case 246:
case 2303:
case 2471:
case 300:
case 3544:
case 1882:
case 673:
case 2043:
case 24:
case 2477:
case 26:
case 4039:
case 3286:
case 3079:
case 1365:
case 2698:
case 3710:
case 515:
case 3159:
case 507:
case 3680:
case 2874:
case 2529:
case 2492:
case 2207:
case 3546:
case 299:
case 2255:
case 1212:
case 2244:
case 2584:
case 114:
case 1597:
case 3569:
case 1591:
case 3165:
case 1236:
case 3501:
case 3781:
case 890:
case 2962:
case 2758:
case 2193:
case 1359:
case 1485:
case 1685:
case 2586:
case 2706:
case 3611:
case 2752:
case 2440:
case 2640:
case 1943:
case 362:
case 1715:
case 3230:
case 335:
case 2053:
case 1217:
case 122:
case 3554:
case 1629:
case 3436:
case 3636:
case 48:
case 1313:
case 2967:
case 297:
case 3418:
case 486:
case 2875:
case 3434:
case 408:
case 2757:
case 744:
case 1571:
case 156:
case 2751:
case 3612:
case 3412:
case 15:
case 3508:
case 3149:
case 1364:
case 3921:
case 3927:
case 2478:
case 3815:
case 2585:
case 107:
case 1686:
case 2530:
case 2245:
case 1881:
case 732:
case 3166:
case 2254:
case 1732:
case 2450:
case 2208:
case 2650:
case 1684:
case 606:
case 1009:
case 2896:
case 1349:
case 826:
case 1763:
case 4020:
case 2202:
case 3869:
case 1251:
case 3532:
case 58:
case 1891:
case 1257:
case 3321:
case 3514:
case 2884:
case 3670:
case 1290:
case 792:
case 974:
case 3563:
case 3276:
case 3604:
case 1694:
case 1494:
case 1872:
case 2487:
case 3658:
case 947:
case 3223:
case 3200:
case 3458:
case 2066:
case 3740:
case 3807:
case 805:
case 1878:
case 689:
case 3274:
case 817:
case 625:
case 3452:
case 111:
case 3844:
case 1582:
case 783:
case 1702:
case 2263:
case 1756:
case 4062:
case 3855:
case 1248:
case 1121:
case 3295:
case 2049:
case 4033:
case 2232:
case 1475:
case 4068:
case 37:
case 2309:
case 1039:
case 3026:
case 2214:
case 376:
case 3771:
case 2361:
case 237:
case 1754:
case 2735:
case 1913:
case 2367:
case 2610:
case 3798:
case 2574:
case 2410:
case 3647:
case 1745:
case 1964:
case 612:
case 415:
case 3405:
case 3778:
case 3093:
case 1587:
case 1122:
case 1701:
case 239:
case 996:
case 298:
case 2885:
case 2237:
case 3515:
case 99:
case 2231:
case 2596:
case 1959:
case 3750:
case 761:
case 804:
case 3442:
case 624:
case 3642:
case 2362:
case 830:
case 1769:
case 750:
case 303:
case 670:
case 3448:
case 3797:
case 3322:
case 3537:
case 2059:
case 949:
case 1674:
case 2179:
case 3531:
case 1206:
case 1746:
case 819:
case 3294:
case 3854:
case 2736:
case 394:
case 1898:
case 1400:
case 1258:
case 1600:
case 2920:
case 3845:
case 3025:
case 1877:
case 1965:
case 1204:
case 456:
case 1744:
case 3451:
case 3651:
case 3802:
case 108:
case 2575:
case 3856:
case 1755:
case 1270:
case 2734:
case 915:
case 2087:
case 1094:
case 1722:
case 2081:
case 4030:
case 287:
case 496:
case 2975:
case 845:
case 865:
case 2867:
case 571:
case 3937:
case 2413:
case 2809:
case 3070:
case 548:
case 568:
case 2664:
case 2464:
case 3191:
case 3004:
case 2783:
case 2503:
case 3689:
case 1378:
case 2996:
case 469:
case 449:
case 922:
case 3673:
case 3047:
case 3301:
case 2779:
case 1146:
case 1293:
case 698:
case 879:
case 1853:
case 2136:
case 3424:
case 2118:
case 1350:
case 3220:
case 381:
case 3743:
case 1075:
case 2112:
case 3369:
case 1391:
case 53:
case 2449:
case 2384:
case 95:
case 3821:
case 2134:
case 536:
case 1397:
case 3426:
case 3626:
case 701:
case 844:
case 864:
case 523:
case 3302:
case 2974:
case 420:
case 3239:
case 1226:
case 3042:
case 363:
case 474:
case 13:
case 1564:
case 1095:
case 2923:
case 1420:
case 1620:
case 136:
case 1982:
case 3493:
case 637:
case 2799:
case 3005:
case 3828:
case 2465:
case 1398:
case 2976:
case 447:
case 355:
case 4086:
case 3140:
case 1566:
case 212:
case 1392:
case 2111:
case 3425:
case 72:
case 2082:
case 2833:
case 1721:
case 1076:
case 1289:
case 148:
case 1108:
case 3051:
case 2088:
case 31:
case 880:
case 2539:
case 316:
case 2659:
case 3932:
case 3914:
case 1145:
case 3938:
case 752:
case 4029:
case 1340:
case 2180:
case 3192:
case 1000:
case 2773:
case 149:
case 3316:
case 169:
case 3679:
case 2098:
case 705:
case 3035:
case 567:
case 547:
case 717:
case 6:
case 3261:
case 327:
case 1299:
case 3209:
case 98:
case 3521:
case 1662:
case 892:
case 423:
case 3182:
case 288:
case 351:
case 986:
case 2985:
case 574:
case 1433:
case 206:
case 1468:
case 2395:
case 2077:
case 20:
case 2443:
case 2643:
case 3363:
case 3749:
case 2567:
case 4094:
case 1116:
case 2374:
case 2561:
case 1085:
case 2105:
case 3902:
case 3956:
case 3011:
case 2300:
case 2323:
case 3017:
case 302:
case 3908:
case 1977:
case 3766:
case 19:
case 2376:
case 1998:
case 2619:
case 697:
case 1132:
case 1382:
case 3954:
case 2148:
case 883:
case 1992:
case 3483:
case 1138:
case 2227:
case 1388:
case 1163:
case 3764:
case 3901:
case 911:
case 471:
case 3907:
case 2725:
case 4076:
case 1978:
case 3018:
case 2986:
case 2533:
case 861:
case 841:
case 448:
case 2568:
case 638:
case 1543:
case 613:
case 3012:
case 3110:
case 259:
case 2147:
case 1131:
case 1381:
case 575:
case 782:
case 2394:
case 2228:
case 2453:
case 1137:
case 2141:
case 1950:
case 2984:
case 1029:
case 3036:
case 4000:
case 1991:
case 1760:
case 3233:
case 2170:
case 1519:
case 120:
case 2929:
case 2097:
case 1813:
case 43:
case 1409:
case 174:
case 1084:
case 3262:
case 2104:
case 436:
case 273:
case 4095:
case 2375:
case 64:
case 3765:
case 549:
case 719:
case 2158:
case 167:
case 147:
case 1461:
case 2078:
case 3499:
case 3337:
case 1866:
case 3955:
case 329:
case 385:
case 1086:
case 3528:
case 2072:
case 1115:
case 3833:
case 848:
case 461:
case 3868:
case 441:
case 631:
case 2425:
case 1213:
case 4044:
case 450:
case 871:
case 933:
case 3862:
case 2171:
case 3539:
case 2057:
case 1526:
case 478:
case 553:
case 2177:
case 21:
case 2051:
case 1573:
case 2198:
case 2914:
case 1942:
case 545:
case 3659:
case 2932:
case 3135:
case 2753:
case 3385:
case 2192:
case 3330:
case 389:
case 325:
case 1311:
case 3995:
case 1660:
case 2963:
case 1317:
case 1883:
case 83:
case 2239:
case 1032:
case 2302:
case 1249:
case 2356:
case 756:
case 4069:
case 676:
case 1589:
case 3923:
case 263:
case 243:
case 579:
case 1767:
case 3465:
case 3665:
case 255:
case 2345:
case 1016:
case 1990:
case 1761:
case 2493:
case 2828:
case 1185:
case 3799:
case 2005:
case 1957:
case 1130:
case 3111:
case 312:
case 1970:
case 2473:
case 3779:
case 3996:
case 1037:
case 577:
case 4045:
case 3386:
case 3136:
case 2424:
case 2624:
case 2560:
case 901:
case 4056:
case 2203:
case 3118:
case 492:
case 564:
case 3384:
case 544:
case 2426:
case 1952:
case 714:
case 1906:
case 4008:
case 2827:
case 3649:
case 3449:
case 603:
case 3081:
case 709:
case 165:
case 145:
case 1593:
case 2178:
case 694:
case 3867:
case 1336:
case 2006:
case 952:
case 2052:
case 1259:
case 1015:
case 3861:
case 2172:
case 3466:
case 3975:
case 1899:
case 92:
case 2719:
case 2931:
case 1318:
case 580:
case 1184:
case 2355:
case 3783:
case 2004:
case 2689:
case 2197:
case 3520:
case 153:
case 1312:
case 874:
case 3050:
case 4014:
case 78:
case 786:
case 4032:
case 1889:
case 373:
case 600:
case 592:
case 1069:
case 464:
case 3097:
case 1936:
case 1703:
case 820:
case 2262:
case 3793:
case 1007:
case 1341:
case 2499:
case 905:
case 2187:
case 2765:
case 1347:
case 477:
case 3158:
case 2331:
case 1001:
case 1912:
case 2944:
case 2528:
case 2955:
case 3152:
case 3106:
case 1627:
case 141:
case 161:
case 583:
case 3725:
case 2018:
case 1421:
case 480:
case 1826:
case 3839:
case 1175:
case 2012:
case 3986:
case 3533:
case 1055:
case 3228:
case 3453:
case 2110:
case 1579:
case 1358:
case 2315:
case 642:
case 1873:
case 445:
case 3105:
case 357:
case 465:
case 896:
case 1422:
case 1622:
case 1599:
case 982:
case 3374:
case 635:
case 202:
case 1893:
case 875:
case 1628:
case 2766:
case 1253:
case 2908:
case 2011:
case 3300:
case 3323:
case 541:
case 561:
case 1390:
case 2954:
case 3142:
case 2945:
case 3419:
case 3619:
case 321:
case 578:
case 1351:
case 550:
case 2764:
case 2683:
case 1980:
case 3509:
case 3789:
case 2035:
case 1305:
case 691:
case 919:
case 479:
case 4031:
case 2316:
case 1174:
case 2679:
case 849:
case 2080:
case 3724:
case 3092:
case 1002:
case 251:
case 2527:
case 2182:
case 2314:
case 3443:
case 1008:
case 2338:
case 30:
case 240:
case 192:
case 3157:
case 1348:
case 306:
case 3071:
case 682:
case 1307:
case 2037:
case 1041:
case 935:
case 4035:
case 555:
case 2031:
case 2970:
case 1473:
case 279:
case 1673:
case 3853:
case 1560:
case 4080:
case 3372:
case 1424:
case 1624:
case 3987:
case 2525:
case 799:
case 451:
case 1203:
case 858:
case 1915:
case 713:
case 3075:
case 1743:
case 824:
case 1369:
case 543:
case 2768:
case 3397:
case 2906:
case 1821:
case 2733:
case 3722:
case 1178:
case 3107:
case 265:
case 887:
case 3565:
case 3101:
case 619:
case 693:
case 1346:
case 1172:
case 2015:
case 4017:
case 402:
case 1052:
case 484:
case 3096:
case 2941:
case 2318:
case 128:
case 2947:
case 1931:
case 3225:
case 2312:
case 76:
case 3169:
case 74:
case 1344:
case 1689:
case 766:
case 2184:
case 746:
case 1004:
case 2264:
case 3156:
case 1090:
case 3102:
case 3843:
case 3727:
case 371:
case 3289:
case 3076:
case 1916:
case 3721:
case 1177:
case 934:
case 3108:
case 1051:
case 4034:
case 900:
case 1057:
case 116:
case 2526:
case 554:
case 2213:
case 4012:
case 2266:
case 825:
case 617:
case 3145:
case 3074:
case 605:
case 2573:
case 1914:
case 2660:
case 1938:
case 7:
case 2879:
case 3023:
case 1302:
case 797:
case 2249:
case 1356:
case 1042:
case 1239:
case 3513:
case 2038:
case 581:
case 2063:
case 143:
case 3420:
case 1048:
case 336:
case 3620:
case 3371:
case 1354:
case 1005:
case 2335:
case 2761:
case 1693:
case 1493:
case 2016:
case 1345:
case 3398:
case 1822:
case 485:
case 2951:
case 2380:
case 962:
case 3392:
case 2599:
case 1956:
case 1902:
case 3085:
case 3030:
case 396:
case 3865:
case 1011:
case 2628:
case 3977:
case 2893:
case 428:
case 1945:
case 184:
case 3998:
case 3114:
case 2935:
case 4070:
case 283:
case 3132:
case 2195:
case 1683:
case 903:
case 1483:
case 454:
case 4041:
case 1679:
case 2045:
case 349:
case 1860:
case 4047:
case 2054:
case 2305:
case 585:
case 2123:
case 2100:
case 1267:
case 529:
case 652:
case 3299:
case 127:
case 1261:
case 3859:
case 3662:
case 3462:
case 2342:
case 1209:
case 1332:
case 806:
case 3468:
case 481:
case 3668:
case 2348:
case 3433:
case 3633:
case 888:
case 1749:
case 140:
case 1338:
case 2825:
case 1188:
case 3940:
case 3519:
case 873:
case 320:
case 3864:
case 2196:
case 4042:
case 551:
case 443:
case 3084:
case 463:
case 374:
case 2583:
case 560:
case 618:
case 1946:
case 710:
case 1181:
case 3467:
case 4005:
case 3310:
case 1337:
case 3866:
case 1699:
case 3461:
case 2918:
case 367:
case 347:
case 455:
case 3279:
case 3086:
case 185:
case 1955:
case 1528:
case 3115:
case 527:
case 2421:
case 2621:
case 4090:
case 1901:
case 3978:
case 2627:
case 2055:
case 1034:
case 4051:
case 41:
case 2175:
case 2044:
case 416:
case 4057:
case 2579:
case 3381:
case 2358:
case 2824:
case 739:
case 3131:
case 3387:
case 1759:
case 3029:
case 3997:
case 2306:
case 2352:
case 2873:
case 3991:
case 690:
case 3760:
case 1315:
case 859:
case 2226:
case 4050:
case 3014:
case 843:
case 863:
case 524:
case 3249:
case 2819:
case 473:
case 1923:
case 3589:
case 2371:
case 2620:
case 236:
case 344:
case 2377:
case 23:
case 570:
case 3038:
case 3063:
case 558:
case 2224:
case 735:
case 3767:
case 1976:
case 4078:
case 3335:
case 1799:
case 3185:
case 1111:
case 3957:
case 2273:
case 112:
case 2566:
case 81:
case 2289:
case 1868:
case 2721:
case 1833:
case 2102:
case 1082:
case 380:
case 2843:
case 2727:
case 3526:
case 1862:
case 96:
case 94:
case 3213:
case 2108:
case 268:
case 2145:
case 3573:
case 459:
case 1135:
case 1659:
case 3311:
case 1995:
case 3879:
case 125:
case 3524:
case 0:
case 2000:
case 1330:
case 332:
case 365:
case 345:
case 2101:
case 2722:
case 2107:
case 1087:
case 525:
case 4040:
case 1329:
case 589:
case 9:
case 2728:
case 1861:
case 3947:
case 1613:
case 1413:
case 2910:
case 1809:
case 2096:
case 3941:
case 68:
case 1503:
case 3334:
case 828:
case 1664:
case 608:
case 1464:
case 353:
case 3312:
case 1010:
case 379:
case 3031:
case 3970:
case 2378:
case 3037:
case 1996:
case 3904:
case 3129:
case 3265:
case 2853:
case 2372:
case 2293:
case 488:
case 3958:
case 3762:
case 997:
case 124:
case 881:
case 2350:
case 2987:
case 1994:
case 3525:
case 1118:
case 3906:
case 40:
case 2639:
case 4077:
case 1384:
case 3733:
case 406:
case 2391:
case 4071:
case 1649:
case 1449:
case 170:
case 2075:
case 2849:
case 341:
case 1396:
case 1562:
case 3826:
case 1839:
case 4082:
case 3370:
case 3421:
case 3621:
case 3175:
case 350:
case 521:
case 2543:
case 1568:
case 3055:
case 1533:
case 1228:
case 1141:
case 2950:
case 2387:
case 557:
case 1394:
case 1147:
case 3824:
case 3358:
case 2131:
case 937:
case 425:
case 2997:
case 3306:
case 220:
case 2864:
case 588:
case 3196:
case 1170:
case 3069:
case 1091:
case 173:
case 50:
case 2084:
case 3720:
case 3703:
case 3583:
case 1929:
case 506:
case 3936:
case 2813:
case 1097:
case 2609:
case 2409:
case 3341:
case 3194:
case 267:
case 247:
case 3001:
case 2310:
case 2667:
case 1072:
case 2115:
case 3912:
case 412:
case 3934:
case 3305:
case 3054:
case 4010:
case 615:
case 3045:
case 269:
case 827:
case 3174:
case 2859:
case 1092:
case 3100:
case 731:
case 1985:
case 3056:
case 1190:
case 3002:
case 392:
case 3825:
case 2940:
case 3008:
case 1151:
case 458:
case 3911:
case 1395:
case 2668:
case 3739:
case 851:
case 910:
case 1157:
case 2433:
case 2633:
case 939:
case 4081:
case 3622:
case 1105:
case 275:
case 559:
case 3628:
case 2977:
case 1040:
case 29:
case 3253:
case 3428:
case 3893:
case 998:
case 487:
case 1300:
case 2030:
case 3390:
case 2132:
case 2382:
case 383:
case 1803:
case 2114:
case 1142:
case 2998:
case 65:
case 3351:
case 3195:
case 1221:
case 2992:
case 776:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1750867201/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,1,1,1,0,0,0,1,0,1,1,1,0,0,0,0,1,1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0,1,0,0,0,1,0,0,1,0,0,1,1,0,0,1,0,1,0,0,1,1,0,1,0,1,1,1,1,0,0,0,1,1,0,1,1,1,0,1,0,1,0,1,0,0,1,0,1,0,1,1,0,1,1,1,0,1,0,1,0,0,0,1,0,0,1,0,1,1,0,1,1,0,0,1,1,0,0,0,0,1,0,0,1,0,0,1,0,1,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,0,0,1,1,0,1,1,1,1,0,1,1,1,0,1,0,1,0,0,1,0,0,0,1,0,1,1,1,1,1,0,1,0,0,1,1,1,1,1,0,0,0,0,1,1,1,1,0,1,1,0,1,1,0,0,0,0,0,1,0,0,1,1,0,1,0,1,0,0,1,1,1,1,1,0,1,1,1,0,1,1,0,0,1,0,0,1,0,0,1,0,0,1,1,0,0,1,1,1,0,1,1,1,0,0,1,1,0,1,1,1,0,1,0,1,0,0,0,1,1,1,0,1,0,0,1,1,0,1,1,0,0,1,1,1,0,0,1,0,1,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,1,0,1,0,1,0,0,1,1,1,0,0,0,1,0,1,1,0,1,1,0,0,0,1,1,1,0,1,1,0,0,1,0,1,0,0,0,0,0,1,0,0,0,1,1,1,1,0,0,1,0,1,0,1,1,1,0,0,0,0,1,0,1,1,0,0,0,1,0,1,0,0,1,1,0,0,1,0,0,0,1,0,0,1,0,0,1,0,0,0,1,0,1,0,1,0,0,0,0,1,0,0,0,0,0,0,1,1,0,1,0,0,1,0,1,1,1,1,1,1,0,0,1,1,1,1,0,1,0,1,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,1,0,1,0,0,0,1,1,1,0,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,1,0,1,1,1,0,0,0,1,0,1,1,0,0,0,0,0,1,1,1,1,1,0,1,0,1,1,0,0,1,0,1,0,0,0,0,0,1,0,1,1,1,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,0,1,0,0,0,1,0,0,0,1,0,0,1,0,0,0,0,0,1,0,1,0,1,1,0,0,1,1,0,1,0,1,1,1,1,0,0,1,1,0,1,0,0,1,0,1,1,1,0,0,1,0,0,0,0,0,0,1,1,0,0,0,1,0,0,1,1,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,1,0,0,1,1,0,0,0,0,0,1,1,1,1,1,0,1,1,1,1,1,0,0,0,0,0,1,0,1,1,0,0,0,0,1,1,0,1,1,1,1,1,1,0,0,0,0,0,0,1,0,0,0,1,1,0,0,1,1,0,1,1,1,0,0,1,1,0,0,1,0,0,1,0,1,1,1,0,0,1,1,1,0,0,1,0,0,1,1,0,1,1,1,0,1,1,1,1,0,1,0,0,0,1,0,1,0,1,1,1,0,1,0,1,0,0,1,0,1,1,0,1,1,1,1,1,1,1,1,0,0,1,1,1,1,0,0,0,0,0,0,1,0,1,1,1,0,1,1,1,0,0,1,0,1,1,1,1,0,0,0,0,0,0,1,0,1,1,0,0,1,0,1,0,0,1,0,1,0,0,0,0,0,1,0,1,1,1,0,0,1,1,1,1,1,0,0,0,0,0,1,1,0,0,1,0,1,1,1,1,0,1,0,0,1,0,0,0,0,0,0,1,1,1,1,0,1,0,0,0,1,1,1,0,0,0,1,0,1,1,1,0,0,1,0,0,0,1,1,1,0,1,1,0,0,0,1,0,1,0,1,1,1,1,0,0,1,1,1,0,0,1,1,0,1,1,0,1,0,1,1,1,1,1,1,1,1,0,0,0,1,0,1,0,0,0,1,1,1,1,1,0,1,0,1,0,0,1,0,0,1,0,1,0,0,0,0,0,0,1,1,1,1,1,1,0,1,1,0,1,1,0,0,1,1,0,0,1,0,1,0,0,0,1,1,1,1,1,1,1,0,0,0,1,0,0,0,1,0,0,1,0,0,0,0,0,1,1,1,0,0,1,1,1,1,0,1,1,1,0,0,1,0,0,1,1,0,1,0,1,1,0,1,0,0,0,0,1,1,1,1,1,0,0,1,0,0,1,1,0,1,0,1,1,0,1,0,1,1,0,0,1,1,0,1,1,0,0,1,0,0,1,1,0,1,1,0,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,1,1,1,1,0,1,0,1,1,0,0,1,0,1,1,1,0,0,1,0,0,0,0,0,1,0,0,1,1,1,1,0,0,0,0,1,0,1,0,0,1,1,0,0,0,1,0,0,0,1,1,1,0,1,1,1,1,1,0,1,0,1,0,1,0,0,0,1,1,0,1,0,1,0,1,0,0,1,0,0,1,1,0,1,1,0,0,1,1,0,1,0,1,1,0,1,1,1,1,1,1,1,1,1,0,0,1,0,1,0,0,1,1,0,0,0,1,0,0,1,1,1,0,1,0,1,1,0,1,0,1,1,1,1,1,1,1,0,1,0,0,1,1,1,1,0,0,0,1,0,0,0,0,1,0,1,1,0,0,0,0,1,0,1,0,1,1,1,0,1,1,0,1,1,1,1,1,0,0,1,1,1,0,0,1,1,0,1,1,0,0,0,0,1,0,0,0,1,1,0,0,0,1,0,1,1,0,1,0,1,1,1,0,0,0,1,0,1,0,0,1,0,1,0,1,0,0,0,0,1,0,0,1,0,1,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,1,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,1,1,1,1,1,1,1,0,1,1,0,0,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,1,1,1,0,0,0,0,1,0,0,0,1,1,1,1,1,0,0,0,1,0,1,1,1,1,1,1,1,0,0,1,0,1,0,1,1,0,0,1,1,0,0,0,0,1,0,0,1,0,1,1,1,0,1,1,1,1,0,1,0,0,1,1,1,0,1,1,0,1,0,1,0,1,1,1,1,0,1,0,0,1,0,1,1,1,1,1,0,1,0,0,1,1,1,0,1,1,0,1,0,1,0,1,1,1,1,1,1,1,1,0,1,1,1,0,0,1,1,1,0,1,1,0,1,0,0,0,0,1,0,1,0,0,0,0,1,1,0,0,0,0,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,0,0,1,0,1,0,1,0,0,1,0,0,0,0,1,1,0,1,1,0,1,1,1,0,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0,1,0,0,1,1,0,0,1,0,0,0,1,0,1,1,0,1,0,1,0,1,1,0,0,0,1,0,1,1,1,0,1,1,0,1,0,1,0,1,1,0,1,1,1,0,1,1,1,1,0,1,1,0,1,0,0,1,0,0,0,1,1,1,1,1,0,1,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,0,1,1,0,1,0,0,0,0,0,0,1,0,1,1,1,0,0,0,1,1,0,1,1,0,1,1,0,0,0,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,0,0,0,0,0,1,0,1,0,1,1,0,0,0,1,1,0,0,0,1,0,1,1,1,0,1,0,1,1,0,1,0,0,1,0,1,1,1,0,0,1,1,1,0,1,0,1,0,0,1,1,0,1,0,1,1,0,0,1,0,0,1,1,1,1,0,0,1,1,1,0,0,1,0,0,1,1,1,0,0,1,1,1,0,1,1,1,0,0,1,0,0,0,1,1,0,0,1,1,0,1,0,0,0,1,1,1,1,0,0,0,0,1,0,0,1,1,0,0,0,0,1,1,0,1,0,1,1,1,0,0,0,0,0,0,0,1,1,0,0,0,1,0,1,1,1,0,1,0,1,0,0,1,0,1,0,0,1,0,0,0,1,1,0,1,1,0,1,1,0,0,0,0,0,1,1,1,1,0,1,0,1,0,0,1,0,0,1,0,1,1,1,1,0,1,0,1,1,1,0,0,1,0,0,1,1,1,0,1,0,1,1,0,0,0,1,0,1,1,1,1,0,0,1,1,1,1,0,1,1,1,1,1,0,0,0,0,0,1,0,1,1,0,1,1,1,1,0,0,0,1,0,0,0,1,0,1,0,1,1,0,0,0,0,1,1,0,1,0,0,1,1,0,0,1,0,1,0,1,0,1,0,1,1,1,0,1,0,0,1,0,1,0,1,0,0,0,1,1,1,0,0,0,1,1,1,0,1,0,0,0,0,0,1,0,1,0,0,1,1,0,1,1,0,1,0,1,1,1,0,0,1,0,1,0,0,0,0,0,0,1,0,1,1,0,0,1,1,1,1,1,1,1,0,0,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0,1,0,0,0,1,1,1,1,1,1,1,0,0,0,0,1,0,1,1,1,1,0,1,0,1,0,1,0,0,1,1,1,1,0,1,1,1,1,0,0,0,1,0,1,0,1,1,1,1,1,0,0,0,1,1,0,1,0,0,0,0,1,0,1,0,1,1,0,1,1,1,1,0,0,1,0,0,0,0,1,0,1,0,0,1,0,1,0,0,1,1,1,0,0,0,1,1,1,0,1,1,1,1,0,0,1,0,0,0,1,0,0,0,1,0,0,1,0,1,0,1,0,0,1,0,0,1,0,1,0,0,1,0,1,0,0,1,0,1,1,1,1,0,0,0,1,0,1,1,1,1,1,1,0,1,0,1,1,0,1,0,0,1,1,0,1,1,1,0,0,0,1,1,0,1,1,1,1,0,1,0,1,0,0,1,0,0,1,1,0,0,1,0,1,0,0,0,1,0,1,1,0,0,0,0,1,0,0,0,1,1,0,1,1,1,0,1,1,0,1,1,1,0,1,1,0,1,1,0,1,0,1,0,0,1,0,0,1,0,0,0,0,0,1,1,1,0,0,1,1,1,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,1,0,1,0,1,0,1,0,0,0,1,1,1,1,1,0,1,1,1,0,1,0,0,0,0,1,0,0,0,1,0,1,0,1,1,0,1,0,0,0,0,1,1,0,0,0,1,0,1,1,0,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,0,1,1,1,1,1,0,0,1,1,1,1,0,0,1,0,1,1,0,0,0,1,1,1,1,1,0,1,1,0,1,1,1,1,0,0,1,1,0,1,1,0,1,0,0,0,1,1,0,0,0,1,0,0,0,1,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,1,0,1,0,0,1,1,0,0,1,1,1,1,0,0,0,1,0,0,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,0,1,1,1,0,1,0,0,0,1,0,1,1,0,0,1,1,0,0,0,0,1,1,0,1,0,1,0,0,0,1,0,0,1,1,0,0,0,0,1,0,0,0,1,0,1,0,0,0,1,1,0,1,1,0,1,0,1,0,1,0,1,1,1,0,0,1,0,0,1,1,0,0,1,1,0,0,0,1,1,1,1,1,0,1,1,1,0,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,1,1,0,1,0,1,1,0,1,0,0,0,1,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,1,1,1,1,1,0,0,0,0,0,1,0,0,1,1,0,1,0,0,0,0,1,0,0,1,0,1,0,0,1,0,1,1,0,1,0,1,0,1,1,1,0,1,1,1,0,0,1,0,0,0,1,1,0,1,1,1,1,0,1,1,0,0,0,1,1,0,0,1,0,0,0,1,0,1,1,1,1,0,0,1,0,0,1,1,0,1,0,0,0,0,0,1,1,1,0,1,0,0,0,0,1,0,0,0,1,1,0,1,1,1,1,0,0,1,1,1,0,0,1,1,0,1,0,1,1,1,0,0,0,0,0,1,0,0,1,0,1,0,0,1,1,0,1,0,0,0,0,1,1,0,1,1,1,1,1,1,1,1,1,0,1,0,1,0,1,1,0,0,1,1,1,0,0,0,1,1,0,0,0,1,1,1,0,1,0,0,1,1,0,1,1,1,1,0,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,1,1,1,0,0,1,0,0,1,0,1,0,1,1,0,1,1,1,0,0,0,0,1,0,1,1,1,0,0,0,0,0,1,1,1,1,0,0,1,1,0,0,0,0,1,0,0,1,0,0,1,1,0,0,1,0,0,0,0,1,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,0,1,1,0,1,0,1,1,0,0,1,0,0,0,0,1,1,0,1,1,1,0,1,1,0,0,0,0,0,0,1,1,0,0,0,1,1,0,1,0,1,1,0,0,0,1,1,1,1,1,0,0,1,1,0,0,1,1,0,0,0,1,1,0,0,0,0,1,0,0,1,1,0,0,1,1,0,1,0,0,1,1,0,1,0,1,1,0,1,0,0,1,1,0,0,1,1,1,0,1,0,1,1,0,1,1,1,0,1,1,0,1,1,1,0,0,0,0,1,1,0,1,1,0,0,1,1,0,1,1,1,1,0,0,1,1,1,1,1,1,0,0,1,0,1,1,1,0,1,0,0,0,0,0,0,1,1,0,0,1,0,1,1,1,1,1,0,0,1,1,0,0,0,0,1,0,0,1,0,1,1,0,1,0,1,1,0,1,0,1,0,0,1,1,1,0,1,0,0,0,0,1,1,1,1,0,0,0,1,0,1,0,1,1,0,1,0,1,1,0,0,0,1,0,1,1,1,1,1,0,1,1,0,1,0,1,1,0,0,0,1,1,0,1,0,0,0,0,1,0,0,1,0,0,1,1,0,0,0,0,0,0,1,0,0,1,1,1,0,0,0,1,1,1,0,1,1,0,0,0,0,0,1,0,1,1,1,1,0,1,1,0,0,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,0,1,0,1,1,1,1,0,0,1,0,0,0,1,1,0,1,0,0,0,0,0,0,0,1,1,1,1,0,1,0,1,0,0,0,0,0,1,0,0,1,0,1,1,1,1,0,0,0,0,1,0,1,1,0,1,1,0,1,1,1,0,1,0,1,0,1,0,0,0,0,1,1,0,0,0,1,0,1,1,0,1,0,0,1,0,0,1,1,1,1,0,0,1,0,1,1,0,0,1,0,0,0,0,1,0,1,0,1,1,0,0,0,1,0,0,0,0,1,1,1,0,1,1,0,0,0,0,1,1,0,1,0,0,0,0,1,0,1,1,0,0,0,1,1,0,1,1,0,0,0,1,1,1,1,0,1,0,0,0,0,1,0,0,0,1,0,1,0,0,0,1,1,0,0,0,1,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,1,0,1,0,0,0,1,1,0,1,1,0,1,1,1,0,1,1,1,1,0,1,0,1,1,1,0,0,1,0,0,0,1,1,1,0,1,0,0,1,0,1,0,0,0,0,0,0,0,1,1,1,0,1,0,0,1,1,0,1,1,0,1,1,1,1,1,0,0,0,1,0,1,1,1,1,0,0,0,0,1,1,1,0,1,0,1,0,1,1,0,1,1,0,0,0,1,0,1,0,1,1,1,0,0,1,0,1,0,1,1,0,1,0,1,0,0,1,1,0,0,1,0,1,1,0,1,0,1,0,0,0,0,1,1,1,0,0,0,0,1,0,0,0,1,0,0,1,1,1,1,1,0,0,1,1,1,1,0,0,0,0,0,0,0,1,1,0,0,1,1,1,0,0,1,0,1,0,0,0,1,0,0,1,0,1,0,0,1,1,0,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,1,1,1,0,1,1,0,1,0,1,0,0,0,0,0,0,1,0,1,0,1,1,1,1,1,1,0,0,1,0,1,0,1,1,1,1,1,0,0,1,1,0,1,1,0,0,0,0,0,1,0,1,0,0,1,0,1,1,1,1,0,1,1,0,1,0,0,1,1,0,1,1,0,0,0,1,0,0,1,1,1,0,1,0,1,1,1,0,0,0,1,0,0,0,1,0,0,1,1,1,0,0,0,0,0,1,1,0,1,0,0,1,0,0,0,0,0,0,1,1,1,1,0,1,1,1,1,0,0,0,0,1,0,0,1,1,1,1,1,1,1,0,0,1,1,0,1,1,1,0,0,0,0,1,0,0,0,1,1,0,0,0,0,1,1,1,1,0,1,0,0,0,1,0,1,0,1,1,1,1,0,1,0,1,0,0,0,1,0,0,1,1,1,1,1,0,1,0,1,1,1,1,0,0,0,0,0,1,1,0,0,1,1,0,1,0,0,1,0,1,1,0,1,0,1,0,0,0,1,1,1,1,1,1,0,0,1,0,1,0,1,1,1,0,0,0,0,0,0,1,1,1,1,0,1,1,0,1,0,1,0,0,0,1,1,0,1,1,0,1,0,1,0,0,1,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,0,0,1,0,1,1,0,0,1,1,1,1,0,0,1,0,1,1,0,1,0,1,0,1,0,0,0,0,1,0,1,1,0,0,0,1,0,0,0,0,1,1,0,1,1,0,0,1,1,1,0,0,];
var gg_b = "1750867201/";

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
