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
var o = 0;
switch (g) {
case 2167:
case 108:
case 3028:
case 2521:
case 365:
case 357:
case 2269:
case 212:
case 1637:
case 2364:
case 3238:
case 231:
case 1254:
case 2213:
case 301:
case 735:
case 1936:
case 1359:
case 2981:
case 2719:
case 2498:
case 304:
case 390:
case 3730:
case 410:
case 441:
case 399:
case 444:
case 2408:
case 3152:
case 1180:
case 4056:
case 2622:
case 336:
case 2574:
case 2230:
case 3344:
case 3219:
case 3117:
case 99:
case 3456:
case 3407:
case 2435:
case 2994:
case 1474:
case 2027:
case 3168:
case 3140:
case 1289:
case 3110:
case 3400:
case 676:
case 3295:
case 1535:
case 1810:
case 510:
case 766:
case 3263:
case 1187:
case 1840:
case 1868:
case 544:
case 2014:
case 3490:
case 993:
case 1440:
case 2524:
case 1468:
case 872:
case 584:
case 2361:
case 2672:
case 3800:
case 1245:
case 3953:
case 1:
case 2070:
case 2517:
case 1215:
case 1190:
case 1452:
case 1765:
case 1197:
case 1304:
case 3665:
case 3603:
case 3856:
case 1209:
case 2568:
case 1424:
case 2540:
case 1107:
case 1394:
case 729:
case 653:
case 2984:
case 3567:
case 3078:
case 1821:
case 2055:
case 2533:
case 191:
case 1964:
case 3036:
case 109:
case 2898:
case 2699:
case 3932:
case 2785:
case 217:
case 2571:
case 3226:
case 352:
case 2651:
case 1433:
case 1272:
case 398:
case 2488:
case 3560:
case 2645:
case 3439:
case 815:
case 1672:
case 3580:
case 416:
case 2100:
case 1361:
case 3772:
case 2440:
case 93:
case 3004:
case 2190:
case 1517:
case 1547:
case 2:
case 396:
case 1540:
case 1077:
case 2209:
case 1568:
case 2304:
case 2197:
case 2765:
case 2452:
case 502:
case 2447:
case 1726:
case 3135:
case 2299:
case 2251:
case 2394:
case 2793:
case 2107:
case 89:
case 760:
case 1533:
case 4018:
case 1808:
case 200:
case 4060:
case 294:
case 679:
case 2821:
case 3265:
case 387:
case 3081:
case 2588:
case 3108:
case 3685:
case 117:
case 977:
case 1699:
case 3448:
case 1011:
case 2928:
case 2433:
case 1645:
case 4067:
case 2381:
case 1378:
case 1991:
case 795:
case 1336:
case 2871:
case 3283:
case 1795:
case 3332:
case 3789:
case 2598:
case 3091:
case 678:
case 1364:
case 2637:
case 451:
case 972:
case 2833:
case 112:
case 2508:
case 1269:
case 134:
case 3605:
case 3663:
case 3955:
case 2222:
case 3860:
case 1719:
case 2978:
case 774:
case 3649:
case 2359:
case 1981:
case 3848:
case 3619:
case 771:
case 2391:
case 1749:
case 42:
case 347:
case 664:
case 2301:
case 2817:
case 1654:
case 1230:
case 3754:
case 3353:
case 3977:
case 3500:
case 551:
case 2852:
case 2824:
case 933:
case 3084:
case 3590:
case 2783:
case 2384:
case 507:
case 3597:
case 683:
case 2474:
case 713:
case 1014:
case 3970:
case 2669:
case 2868:
case 2053:
case 2187:
case 1738:
case 3507:
case 3556:
case 1904:
case 1776:
case 1044:
case 1237:
case 2117:
case 2456:
case 1590:
case 1084:
case 3435:
case 3020:
case 2147:
case 2152:
case 2314:
case 1353:
case 2497:
case 3622:
case 3230:
case 592:
case 2344:
case 1722:
case 2219:
case 2124:
case 4035:
case 613:
case 3044:
case 3237:
case 3776:
case 1507:
case 2205:
case 783:
case 2263:
case 1970:
case 2490:
case 3027:
case 3994:
case 2140:
case 3139:
case 845:
case 668:
case 2276:
case 1663:
case 1867:
case 962:
case 2171:
case 312:
case 1188:
case 2737:
case 3705:
case 3364:
case 3763:
case 1091:
case 705:
case 331:
case 2133:
case 1332:
case 1695:
case 3167:
case 3795:
case 492:
case 3888:
case 778:
case 2028:
case 3160:
case 458:
case 3328:
case 299:
case 147:
case 674:
case 3213:
case 3749:
case 201:
case 1818:
case 1848:
case 204:
case 3498:
case 3243:
case 2730:
case 586:
case 1448:
case 779:
case 3898:
case 1751:
case 3785:
case 1293:
case 967:
case 1685:
case 955:
case 660:
case 3571:
case 1799:
case 1418:
case 2078:
case 3055:
case 497:
case 3609:
case 1709:
case 669:
case 2036:
case 1745:
case 2518:
case 3336:
case 450:
case 2560:
case 2548:
case 3959:
case 130:
case 4088:
case 3041:
case 695:
case 139:
case 1467:
case 2953:
case 1914:
case 3070:
case 3547:
case 2487:
case 1944:
case 1004:
case 743:
case 3524:
case 597:
case 1772:
case 2890:
case 3361:
case 3552:
case 3672:
case 1580:
case 1094:
case 2285:
case 2061:
case 3726:
case 3984:
case 2897:
case 3835:
case 2539:
case 61:
case 2603:
case 2807:
case 3540:
case 559:
case 152:
case 2418:
case 2799:
case 414:
case 432:
case 1121:
case 2293:
case 2460:
case 411:
case 2448:
case 3964:
case 1036:
case 391:
case 2709:
case 449:
case 1078:
case 2203:
case 2081:
case 1355:
case 1560:
case 4033:
case 242:
case 1518:
case 2745:
case 4071:
case 2004:
case 4010:
case 514:
case 3215:
case 1487:
case 473:
case 3245:
case 296:
case 3:
case 4068:
case 2439:
case 3100:
case 3468:
case 3440:
case 1174:
case 1897:
case 90:
case 3299:
case 2626:
case 3251:
case 927:
case 2920:
case 3107:
case 3394:
case 1856:
case 4047:
case 3765:
case 3304:
case 1539:
case 1480:
case 3961:
case 548:
case 1880:
case 537:
case 2590:
case 2084:
case 3817:
case 1497:
case 3643:
case 2977:
case 867:
case 2353:
case 2754:
case 3847:
case 1314:
case 3180:
case 721:
case 2500:
case 1152:
case 3868:
case 1490:
case 75:
case 3840:
case 2676:
case 2507:
case 2638:
case 2839:
case 3783:
case 3384:
case 903:
case 2597:
case 1400:
case 3289:
case 1168:
case 666:
case 1887:
case 2091:
case 448:
case 2188:
case 437:
case 1171:
case 165:
case 2663:
case 3871:
case 2941:
case 2283:
case 985:
case 2332:
case 2789:
case 3032:
case 247:
case 635:
case 3301:
case 190:
case 4021:
case 3978:
case 104:
case 2818:
case 101:
case 1595:
case 2449:
case 3589:
case 2798:
case 3025:
case 2885:
case 72:
case 952:
case 471:
case 513:
case 1505:
case 3621:
case 1563:
case 4030:
case 707:
case 474:
case 3235:
case 4037:
case 1519:
case 825:
case 1366:
case 2495:
case 692:
case 1549:
case 468:
case 3437:
case 2290:
case 2463:
case 2115:
case 3522:
case 2172:
case 4069:
case 1600:
case 393:
case 1016:
case 3700:
case 3554:
case 571:
case 1331:
case 2476:
case 2386:
case 1002:
case 2923:
case 2826:
case 3413:
case 3165:
case 3797:
case 3103:
case 1893:
case 847:
case 3298:
case 526:
case 3193:
case 3707:
case 568:
case 3982:
case 1950:
case 1865:
case 1607:
case 595:
case 2312:
case 1465:
case 2931:
case 1986:
case 2122:
case 1143:
case 3572:
case 3652:
case 1493:
case 3647:
case 1082:
case 2973:
case 3050:
case 1260:
case 1248:
case 3813:
case 39:
case 3617:
case 3916:
case 2838:
case 3610:
case 842:
case 569:
case 3668:
case 830:
case 1267:
case 3946:
case 122:
case 1687:
case 839:
case 3012:
case 560:
case 1334:
case 3509:
case 51:
case 2805:
case 723:
case 185:
case 896:
case 2667:
case 1239:
case 659:
case 3633:
case 1137:
case 1771:
case 3551:
case 3671:
case 965:
case 1585:
case 315:
case 2287:
case 697:
case 901:
case 999:
case 2485:
case 3545:
case 2966:
case 2849:
case 3979:
case 460:
case 1342:
case 2680:
case 1122:
case 2143:
case 1931:
case 2465:
case 2752:
case 3854:
case 2747:
case 333:
case 1426:
case 2248:
case 2260:
case 420:
case 3822:
case 2717:
case 2082:
case 1357:
case 3382:
case 2768:
case 3472:
case 1838:
case 1593:
case 3138:
case 2883:
case 3023:
case 2687:
case 4072:
case 3271:
case 718:
case 3210:
case 3767:
case 3195:
case 2239:
case 1667:
case 1058:
case 285:
case 529:
case 3240:
case 3105:
case 3163:
case 1287:
case 2585:
case 3889:
case 2771:
case 520:
case 3445:
case 3409:
case 3119:
case 3224:
case 3252:
case 4051:
case 649:
case 781:
case 1849:
case 632:
case 1966:
case 3247:
case 614:
case 947:
case 611:
case 3451:
case 3760:
case 3748:
case 784:
case 680:
case 987:
case 1798:
case 741:
case 3698:
case 3899:
case 566:
case 1449:
case 1297:
case 1199:
case 2721:
case 689:
case 2505:
case 3185:
case 3608:
case 719:
case 1151:
case 2549:
case 1200:
case 3845:
case 3815:
case 3530:
case 2519:
case 1115:
case 942:
case 1290:
case 4089:
case 930:
case 637:
case 1145:
case 33:
case 2483:
case 3513:
case 2600:
case 1172:
case 3543:
case 1923:
case 1438:
case 2996:
case 2912:
case 2690:
case 3422:
case 2697:
case 656:
case 1583:
case 1826:
case 3346:
case 2607:
case 2656:
case 2803:
case 2950:
case 3073:
case 1735:
case 3569:
case 804:
case 20:
case 3635:
case 4054:
case 3316:
case 2469:
case 3438:
case 3386:
case 808:
case 3923:
case 1872:
case 2522:
case 45:
case 293:
case 2700:
case 2554:
case 13:
case 2674:
case 1316:
case 2756:
case 421:
case 1392:
case 77:
case 3735:
case 1073:
case 2982:
case 1221:
case 1302:
case 1454:
case 2165:
case 66:
case 2298:
case 3151:
case 4049:
case 3934:
case 1185:
case 3256:
case 2621:
case 917:
case 641:
case 644:
case 3199:
case 2235:
case 780:
case 3708:
case 3449:
case 576:
case 2589:
case 1851:
case 3798:
case 1962:
case 2929:
case 1489:
case 1274:
case 1530:
case 1815:
case 1845:
case 4005:
case 4063:
case 3200:
case 748:
case 1958:
case 3895:
case 1445:
case 788:
case 1889:
case 2551:
case 553:
case 215:
case 2075:
case 1240:
case 3863:
case 3805:
case 3667:
case 3058:
case 8:
case 1210:
case 1748:
case 1760:
case 1217:
case 2830:
case 3485:
case 3966:
case 3660:
case 1718:
case 1499:
case 684:
case 3062:
case 1252:
case 1149:
case 3280:
case 740:
case 1119:
case 1224:
case 1409:
case 714:
case 681:
case 2647:
case 3973:
case 3306:
case 3357:
case 2050:
case 2843:
case 800:
case 3426:
case 453:
case 29:
case 2813:
case 891:
case 2617:
case 2780:
case 809:
case 3396:
case 2572:
case 2652:
case 906:
case 2288:
case 2042:
case 1176:
case 1138:
case 2787:
case 2012:
case 3593:
case 2096:
case 663:
case 3838:
case 2916:
case 773:
case 2992:
case 1382:
case 2668:
case 2057:
case 2006:
case 3565:
case 3876:
case 1739:
case 2163:
case 115:
case 2105:
case 3585:
case 2415:
case 1671:
case 1362:
case 2688:
case 58:
case 1551:
case 3771:
case 1599:
case 3137:
case 1633:
case 2210:
case 3239:
case 385:
case 2240:
case 908:
case 1075:
case 3733:
case 2268:
case 2718:
case 1545:
case 2217:
case 543:
case 2748:
case 2409:
case 2149:
case 479:
case 2252:
case 19:
case 233:
case 48:
case 3260:
case 4065:
case 3717:
case 2822:
case 4003:
case 3493:
case 1647:
case 3082:
case 3724:
case 1652:
case 1572:
case 3143:
case 3465:
case 1624:
case 1780:
case 1096:
case 1012:
case 3883:
case 1042:
case 3687:
case 570:
case 2271:
case 616:
case 3267:
case 1006:
case 1869:
case 2382:
case 1640:
case 786:
case 2472:
case 1610:
case 3768:
case 579:
case 746:
case 2872:
case 561:
case 3996:
case 3331:
case 1469:
case 564:
case 3912:
case 3092:
case 2513:
case 483:
case 1554:
case 812:
case 3906:
case 3774:
case 1522:
case 3607:
case 3656:
case 3803:
case 2221:
case 578:
case 1982:
case 2126:
case 2073:
case 1193:
case 1707:
case 1756:
case 2316:
case 1443:
case 3697:
case 505:
case 1103:
case 44:
case 3721:
case 277:
case 2608:
case 1430:
case 994:
case 1025:
case 2851:
case 1589:
case 607:
case 900:
case 758:
case 991:
case 792:
case 345:
case 478:
case 1437:
case 654:
case 2958:
case 2815:
case 2274:
case 3519:
case 2489:
case 319:
case 4064:
case 969:
case 2918:
case 3836:
case 3591:
case 2960:
case 777:
case 3878:
case 2666:
case 1273:
case 180:
case 1625:
case 310:
case 2098:
case 499:
case 536:
case 2811:
case 828:
case 995:
case 4028:
case 292:
case 866:
case 465:
case 3933:
case 3428:
case 148:
case 1987:
case 2444:
case 1520:
case 3602:
case 3584:
case 3090:
case 2414:
case 504:
case 1453:
case 3692:
case 3335:
case 3910:
case 1074:
case 1746:
case 2356:
case 3646:
case 2300:
case 1161:
case 2553:
case 2877:
case 1514:
case 1266:
case 2673:
case 17:
case 91:
case 2420:
case 2035:
case 2631:
case 1527:
case 1686:
case 3750:
case 1907:
case 1956:
case 1570:
case 1234:
case 3682:
case 3594:
case 3080:
case 3262:
case 4061:
case 1997:
case 1696:
case 1990:
case 2470:
case 3742:
case 2827:
case 3712:
case 2380:
case 1642:
case 3796:
case 3153:
case 1900:
case 3258:
case 2814:
case 1606:
case 1068:
case 2275:
case 1040:
case 286:
case 3757:
case 552:
case 3706:
case 1010:
case 3974:
case 2844:
case 913:
case 1223:
case 2242:
case 1071:
case 188:
case 2296:
case 2191:
case 3775:
case 2758:
case 2441:
case 3581:
case 2411:
case 1360:
case 250:
case 1675:
case 384:
case 149:
case 2634:
case 4078:
case 2250:
case 3864:
case 381:
case 2762:
case 1511:
case 1164:
case 829:
case 140:
case 971:
case 3388:
case 1541:
case 3436:
case 2234:
case 3368:
case 2570:
case 539:
case 2650:
case 860:
case 2339:
case 1184:
case 2017:
case 2997:
case 2024:
case 869:
case 530:
case 1387:
case 3229:
case 3114:
case 3561:
case 1623:
case 1380:
case 1827:
case 587:
case 2612:
case 2990:
case 1470:
case 603:
case 3144:
case 3039:
case 1844:
case 4004:
case 928:
case 2853:
case 186:
case 2068:
case 3347:
case 1275:
case 439:
case 1191:
case 2729:
case 159:
case 685:
case 1242:
case 2675:
case 1257:
case 2555:
case 3578:
case 1101:
case 430:
case 3859:
case 2348:
case 1411:
case 1441:
case 1758:
case 323:
case 3891:
case 3018:
case 3908:
case 3048:
case 197:
case 3060:
case 232:
case 3662:
case 2541:
case 935:
case 81:
case 2164:
case 2832:
case 211:
case 3481:
case 280:
case 1855:
case 2273:
case 307:
case 2779:
case 525:
case 1098:
case 158:
case 3155:
case 1286:
case 2625:
case 2178:
case 1181:
case 3202:
case 1841:
case 3988:
case 1811:
case 3216:
case 645:
case 3292:
case 3111:
case 3401:
case 3321:
case 354:
case 1104:
case 3170:
case 2520:
case 868:
case 425:
case 2792:
case 826:
case 1194:
case 1307:
case 793:
case 1939:
case 538:
case 2074:
case 1427:
case 3773:
case 3374:
case 582:
case 874:
case 1420:
case 2266:
case 1877:
case 871:
case 627:
case 2686:
case 3177:
case 920:
case 2910:
case 2335:
case 3427:
case 2692:
case 1804:
case 4044:
case 3939:
case 406:
case 2000:
case 4014:
case 3194:
case 3307:
case 805:
case 2940:
case 1894:
case 1170:
case 693:
case 2090:
case 2584:
case 878:
case 3104:
case 2924:
case 3390:
case 2952:
case 2861:
case 3225:
case 1177:
case 4020:
case 2056:
case 3300:
case 1279:
case 70:
case 3673:
case 1484:
case 2917:
case 3035:
case 26:
case 727:
case 3181:
case 2501:
case 3286:
case 241:
case 3098:
case 506:
case 2725:
case 1766:
case 2836:
case 2591:
case 3666:
case 3967:
case 412:
case 154:
case 434:
case 2308:
case 151:
case 2428:
case 1216:
case 3811:
case 2971:
case 1202:
case 3841:
case 1988:
case 123:
case 1891:
case 1536:
case 2581:
case 350:
case 3206:
case 218:
case 4041:
case 843:
case 3242:
case 2629:
case 2828:
case 102:
case 3088:
case 359:
case 2478:
case 1998:
case 3762:
case 1481:
case 3455:
case 2436:
case 417:
case 1371:
case 2921:
case 4055:
case 397:
case 1282:
case 3250:
case 1734:
case 1018:
case 3820:
case 879:
case 2594:
case 924:
case 2262:
case 3477:
case 921:
case 69:
case 1884:
case 2461:
case 1935:
case 3184:
case 870:
case 1340:
case 4070:
case 3275:
case 3844:
case 517:
case 1144:
case 2742:
case 1723:
case 1324:
case 3380:
case 1352:
case 1561:
case 2087:
case 3623:
case 2796:
case 2153:
case 1404:
case 1229:
case 3675:
case 2578:
case 2859:
case 2067:
case 3348:
case 223:
case 2891:
case 3033:
case 3729:
case 762:
case 3071:
case 1828:
case 1629:
case 388:
case 2801:
case 1388:
case 3541:
case 2662:
case 1436:
case 340:
case 3832:
case 409:
case 3511:
case 1478:
case 2998:
case 181:
case 1132:
case 2018:
case 1864:
case 853:
case 491:
case 2734:
case 3367:
case 400:
case 184:
case 3997:
case 1080:
case 1594:
case 3052:
case 3570:
case 1682:
case 2340:
case 2120:
case 3907:
case 3956:
case 3339:
case 1504:
case 2935:
case 3782:
case 163:
case 2039:
case 1757:
case 1706:
case 1974:
case 3010:
case 3853:
case 3577:
case 3657:
case 2347:
case 373:
case 1258:
case 4:
case 3900:
case 1796:
case 216:
case 1153:
case 3642:
case 2561:
case 1742:
case 2723:
case 983:
case 3990:
case 2144:
case 1940:
case 943:
case 1646:
case 2804:
case 1616:
case 1692:
case 1090:
case 2170:
case 1602:
case 3686:
case 2731:
case 575:
case 1861:
case 1952:
case 1924:
case 1097:
case 1786:
case 98:
case 16:
case 508:
case 1917:
case 3544:
case 2484:
case 37:
case 3266:
case 2279:
case 1007:
case 1725:
case 4032:
case 141:
case 110:
case 2155:
case 1464:
case 979:
case 824:
case 1878:
case 1591:
case 755:
case 3779:
case 821:
case 22:
case 2766:
case 119:
case 2216:
case 2564:
case 85:
case 2292:
case 2111:
case 1308:
case 2141:
case 337:
case 2988:
case 2202:
case 408:
case 1398:
case 2459:
case 3319:
case 3244:
case 2915:
case 2945:
case 3875:
case 3129:
case 2858:
case 2579:
case 368:
case 634:
case 612:
case 2095:
case 178:
case 782:
case 631:
case 1284:
case 981:
case 2999:
case 1479:
case 2134:
case 1732:
case 2909:
case 3764:
case 3363:
case 3305:
case 164:
case 2049:
case 1664:
case 374:
case 3425:
case 4086:
case 2720:
case 3993:
case 2684:
case 221:
case 82:
case 2264:
case 3338:
case 2516:
case 2592:
case 3013:
case 807:
case 1882:
case 2546:
case 3573:
case 3069:
case 3806:
case 854:
case 3857:
case 1322:
case 2343:
case 2123:
case 2076:
case 1259:
case 725:
case 183:
case 25:
case 2313:
case 851:
case 1753:
case 1196:
case 3812:
case 3896:
case 1446:
case 1416:
case 2228:
case 2972:
case 3842:
case 2604:
case 796:
case 823:
case 3442:
case 3102:
case 4006:
case 1802:
case 4042:
case 3241:
case 143:
case 802:
case 3457:
case 4012:
case 3450:
case 3761:
case 1482:
case 1093:
case 31:
case 1661:
case 3523:
case 3255:
case 1281:
case 2278:
case 4050:
case 253:
case 2236:
case 2131:
case 18:
case 1913:
case 2166:
case 2085:
case 3179:
case 3825:
case 919:
case 369:
case 1636:
case 3778:
case 170:
case 910:
case 1345:
case 1125:
case 1879:
case 2681:
case 1558:
case 3534:
case 3270:
case 742:
case 4075:
case 1204:
case 1937:
case 730:
case 3475:
case 2458:
case 2741:
case 1399:
case 2711:
case 2989:
case 415:
case 1294:
case 818:
case 3365:
case 2969:
case 3670:
case 1582:
case 1770:
case 3938:
case 3393:
case 1694:
case 6:
case 243:
case 4023:
case 2661:
case 1026:
case 1173:
case 3831:
case 329:
case 28:
case 1131:
case 433:
case 1954:
case 881:
case 1236:
case 153:
case 2065:
case 884:
case 572:
case 3506:
case 3873:
case 320:
case 3677:
case 2186:
case 1922:
case 1261:
case 1085:
case 279:
case 1166:
case 1529:
case 694:
case 3051:
case 4034:
case 3949:
case 2345:
case 3866:
case 1755:
case 1462:
case 609:
case 2636:
case 3015:
case 863:
case 2204:
case 2429:
case 3963:
case 3045:
case 954:
case 533:
case 3641:
case 1989:
case 798:
case 3611:
case 1579:
case 608:
case 1005:
case 3253:
case 1330:
case 1691:
case 765:
case 3759:
case 675:
case 278:
case 1095:
case 923:
case 3701:
case 3525:
case 1134:
case 1862:
case 799:
case 1951:
case 2284:
case 1337:
case 477:
case 261:
case 1019:
case 2664:
case 86:
case 264:
case 335:
case 3834:
case 1909:
case 3232:
case 4031:
case 3383:
case 3620:
case 841:
case 2150:
case 3926:
case 124:
case 4073:
case 3431:
case 1369:
case 2882:
case 3022:
case 736:
case 1516:
case 1264:
case 819:
case 2196:
case 3644:
case 283:
case 2112:
case 43:
case 1038:
case 2402:
case 1123:
case 2322:
case 916:
case 3823:
case 577:
case 2083:
case 3627:
case 2106:
case 2157:
case 2416:
case 1054:
case 2013:
case 2043:
case 3369:
case 880:
case 3546:
case 2903:
case 2965:
case 2182:
case 3502:
case 889:
case 1473:
case 213:
case 2896:
case 1586:
case 128:
case 1823:
case 1614:
case 2806:
case 2069:
case 2857:
case 166:
case 837:
case 3076:
case 3714:
case 35:
case 376:
case 665:
case 3601:
case 2227:
case 1701:
case 2728:
case 708:
case 1759:
case 2244:
case 2037:
case 959:
case 3915:
case 226:
case 1253:
case 3945:
case 2129:
case 2214:
case 2875:
case 2349:
case 3858:
case 3005:
case 3063:
case 467:
case 455:
case 2764:
case 2363:
case 3019:
case 3337:
case 1466:
case 2395:
case 3999:
case 601:
case 604:
case 2778:
case 1781:
case 700:
case 3755:
case 1866:
case 1655:
case 2277:
case 260:
case 2736:
case 1949:
case 3681:
case 709:
case 3529:
case 3261:
case 1099:
case 269:
case 1641:
case 462:
case 2385:
case 873:
case 1045:
case 2270:
case 4058:
case 2534:
case 698:
case 1905:
case 295:
case 1015:
case 2241:
case 2326:
case 2146:
case 1072:
case 2983:
case 3694:
case 888:
case 2457:
case 3604:
case 1938:
case 7:
case 2412:
case 3582:
case 2102:
case 1704:
case 1303:
case 2255:
case 1677:
case 1557:
case 1506:
case 3777:
case 562:
case 3131:
case 2761:
case 1512:
case 1831:
case 21:
case 129:
case 3173:
case 814:
case 3558:
case 3125:
case 1736:
case 3678:
case 3879:
case 1277:
case 2655:
case 2575:
case 2866:
case 2009:
case 3315:
case 3930:
case 2781:
case 1778:
case 2099:
case 2434:
case 980:
case 2051:
case 687:
case 1385:
case 3562:
case 2641:
case 642:
case 3937:
case 3204:
case 2963:
case 3309:
case 1534:
case 2045:
case 485:
case 1192:
case 1116:
case 2393:
case 2794:
case 1146:
case 2072:
case 1983:
case 1326:
case 3802:
case 850:
case 2976:
case 2303:
case 1412:
case 3969:
case 2423:
case 403:
case 2938:
case 3816:
case 3913:
case 3065:
case 3281:
case 4082:
case 2873:
case 1255:
case 3372:
case 3661:
case 97:
case 229:
case 2512:
case 1761:
case 1903:
case 545:
case 1850:
case 1043:
case 2054:
case 1486:
case 34:
case 2784:
case 858:
case 2926:
case 1182:
case 2823:
case 4002:
case 892:
case 3492:
case 3157:
case 228:
case 625:
case 2586:
case 3416:
case 3446:
case 1896:
case 3753:
case 706:
case 383:
case 3112:
case 3402:
case 3259:
case 3142:
case 3322:
case 266:
case 1806:
case 1857:
case 846:
case 527:
case 2701:
case 2525:
case 2089:
case 168:
case 3628:
case 305:
case 1349:
case 1566:
case 1875:
case 1129:
case 988:
case 712:
case 1037:
case 1244:
case 2759:
case 734:
case 1030:
case 3664:
case 174:
case 171:
case 914:
case 1363:
case 638:
case 2834:
case 932:
case 949:
case 3732:
case 3389:
case 3284:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1743256801/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,1,1,1,0,1,1,1,0,0,0,0,1,0,0,1,1,1,1,1,1,1,0,0,1,1,0,1,1,0,1,0,1,1,1,0,1,0,1,0,0,1,1,1,1,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,1,1,0,1,0,0,1,0,1,0,0,0,1,1,0,0,1,1,0,0,1,1,1,0,1,0,0,0,1,1,1,0,1,1,0,1,0,0,0,1,1,1,0,1,0,0,1,0,1,0,1,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,0,0,0,0,1,1,1,0,1,0,0,0,1,1,1,0,1,1,1,1,0,0,0,1,1,0,0,0,1,1,1,1,0,1,0,1,1,0,0,1,0,0,0,1,0,1,1,0,1,1,1,1,0,1,0,1,1,0,0,0,0,0,1,0,0,1,1,0,0,1,0,0,0,0,0,0,1,1,1,0,1,1,1,1,0,0,1,0,1,0,0,1,0,1,1,0,1,1,1,0,0,0,0,0,0,0,1,1,1,0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,1,1,0,0,1,0,1,0,0,1,0,0,0,0,0,0,0,1,1,1,1,0,0,1,0,1,1,0,0,0,0,0,1,1,1,1,1,0,0,1,0,1,0,0,1,1,0,1,0,0,1,0,1,0,0,1,0,0,0,1,1,0,0,1,0,0,0,0,0,1,0,1,0,1,0,1,1,1,0,0,1,0,0,0,0,1,0,1,0,0,1,0,1,0,1,0,0,1,0,1,0,0,0,0,0,1,0,0,1,1,0,0,0,1,1,0,1,0,0,0,0,1,0,1,1,1,0,1,1,0,1,1,0,1,0,0,1,1,1,1,1,0,0,1,0,0,1,0,1,1,1,1,1,0,1,1,1,1,0,0,1,1,0,0,0,1,0,0,0,0,1,0,1,1,1,0,0,1,0,1,0,1,0,0,1,0,0,0,1,1,1,1,0,1,0,1,0,0,1,0,1,0,1,0,0,1,0,1,1,0,0,1,0,1,1,0,0,1,1,1,0,0,0,1,0,1,0,0,0,0,0,1,1,0,0,0,0,1,0,1,0,0,1,0,1,1,1,1,1,0,1,0,0,1,1,0,0,1,0,0,1,0,0,0,0,1,1,1,0,1,1,0,0,1,0,0,1,1,1,1,0,0,0,1,1,1,0,0,1,0,0,1,1,1,0,0,0,0,0,1,1,1,1,0,1,0,1,0,1,1,1,1,1,0,0,1,1,1,1,1,0,0,1,0,1,0,1,1,0,0,0,0,1,0,0,1,0,1,0,0,0,1,0,1,1,0,0,1,1,1,0,1,1,1,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,1,0,1,1,0,1,1,0,0,1,1,0,1,1,0,0,0,1,0,0,0,1,1,0,1,0,0,1,1,0,0,1,1,1,1,0,1,1,0,0,0,0,1,1,1,0,1,1,1,1,0,1,1,1,0,1,0,1,0,0,1,1,1,1,0,1,1,0,1,0,0,0,0,1,1,1,1,1,0,0,1,1,1,0,0,0,1,1,0,1,0,1,0,1,0,1,0,1,1,0,0,0,1,1,1,0,0,0,1,1,1,1,0,0,1,0,1,0,0,0,0,0,0,1,0,0,1,0,1,0,1,0,0,1,1,0,0,0,0,1,0,1,1,0,0,1,1,1,1,1,1,1,1,0,1,0,1,0,0,0,1,1,0,1,1,0,1,1,1,0,1,0,1,1,0,1,1,1,0,0,1,0,1,1,0,0,1,1,0,1,0,1,1,1,1,0,1,1,1,0,0,0,0,0,0,1,0,1,0,1,1,1,0,1,1,1,0,0,1,1,0,1,1,0,0,0,1,0,1,0,0,1,0,0,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,0,0,1,0,0,0,1,1,0,1,1,0,0,0,1,0,0,0,1,1,0,1,0,0,1,0,1,0,1,0,0,1,1,0,1,1,0,1,1,1,0,1,1,0,0,1,1,0,1,0,1,1,0,1,0,0,0,0,0,0,1,1,0,0,0,1,0,1,0,0,1,0,1,1,0,0,0,1,0,0,1,0,0,1,0,1,0,1,0,1,1,0,0,0,0,1,0,1,1,1,0,1,0,1,0,1,1,0,0,1,0,1,1,1,0,0,0,1,0,0,1,0,1,1,1,1,0,0,1,1,1,0,1,1,1,0,1,1,0,0,0,0,0,1,1,0,0,0,1,0,0,0,0,0,1,1,1,0,1,0,1,1,1,1,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,1,1,0,1,1,0,1,0,1,0,1,1,0,0,0,0,1,1,0,1,1,1,1,1,1,1,0,1,0,1,1,0,0,1,0,0,0,0,0,0,0,1,1,0,0,1,0,1,1,1,0,1,0,0,0,1,0,1,1,0,1,0,0,1,1,0,0,0,0,1,1,1,1,0,0,1,0,1,1,1,0,0,0,0,0,0,0,1,0,0,1,0,1,0,1,0,1,1,1,1,1,0,1,1,0,0,1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,0,1,1,0,1,1,0,1,0,1,0,0,0,0,1,1,0,0,0,0,1,1,1,0,0,0,1,0,1,1,0,0,0,0,1,1,0,0,0,1,0,1,1,0,1,1,0,1,0,1,1,0,0,1,0,0,0,1,1,1,1,0,1,1,1,1,1,0,0,1,0,1,1,0,1,0,0,1,1,1,1,0,1,0,1,0,1,1,0,1,0,1,1,0,1,1,0,0,1,1,0,0,1,0,0,0,0,1,1,1,0,0,1,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,1,0,0,0,1,1,1,0,1,0,1,1,0,0,1,0,1,0,0,1,0,0,0,1,0,0,1,1,0,1,0,1,0,1,1,1,1,1,1,0,1,0,0,1,0,1,0,0,0,0,0,0,1,0,1,0,1,0,0,1,0,1,1,0,0,0,1,0,1,0,0,0,1,1,1,0,0,0,1,0,0,0,0,1,0,1,1,0,0,0,1,0,1,0,1,0,0,0,1,0,1,1,0,0,1,0,0,1,0,0,1,1,1,0,1,1,0,1,0,1,1,0,1,1,0,0,1,1,1,0,0,0,0,0,0,0,1,0,1,1,1,1,1,1,1,0,0,1,1,0,0,0,1,1,1,1,1,0,1,0,1,1,0,1,1,0,0,1,0,0,0,1,0,1,0,0,0,0,1,1,1,1,0,0,0,1,1,0,1,0,1,1,1,1,1,0,1,0,0,0,0,1,0,1,1,0,0,1,1,1,1,0,0,1,1,1,0,0,0,1,0,1,0,1,0,1,0,0,1,0,0,1,1,0,1,1,0,1,0,0,1,0,1,0,1,0,1,0,0,0,0,0,0,1,1,0,1,1,0,1,1,0,0,1,1,1,0,1,1,1,0,0,0,1,1,0,1,0,0,0,1,1,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,1,1,1,0,0,0,1,0,0,0,1,0,0,1,1,0,0,1,1,1,0,0,1,1,1,0,0,0,0,1,0,1,1,0,0,0,0,0,1,0,1,1,0,0,1,0,0,0,1,1,0,0,1,0,1,0,0,0,0,1,0,0,1,1,1,0,0,0,1,1,0,1,1,1,0,0,1,0,1,0,0,1,0,1,1,0,1,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,1,1,0,0,0,0,0,1,0,1,1,1,0,1,1,0,0,1,0,0,1,1,0,1,1,0,1,0,1,0,1,1,1,1,1,1,1,0,0,0,1,1,0,0,0,1,1,1,0,0,0,1,0,1,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,0,1,1,0,0,1,0,1,0,1,0,1,0,1,1,0,0,0,1,0,0,1,0,0,1,0,1,0,0,1,1,1,0,0,1,0,0,0,0,0,0,1,0,1,1,0,0,1,1,0,0,1,1,1,1,0,0,0,1,1,1,0,0,0,1,1,0,1,1,1,1,1,1,0,0,1,0,0,1,0,1,1,1,1,0,1,0,1,0,0,1,0,1,0,1,0,1,1,0,1,1,0,0,1,0,0,1,1,1,0,1,0,1,0,0,0,1,1,0,0,1,0,0,0,0,1,1,1,0,0,0,0,0,0,1,0,0,0,1,1,1,1,1,1,0,0,0,1,0,0,0,0,1,1,1,1,0,1,0,1,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1,1,1,0,0,1,1,1,1,1,1,0,0,0,0,0,1,1,0,1,0,0,0,1,0,1,0,0,1,0,0,1,1,1,0,0,1,1,0,0,0,0,0,1,0,0,1,1,0,0,0,0,0,0,1,1,1,0,1,0,0,1,1,0,1,0,0,0,1,1,1,0,1,1,1,1,1,0,0,0,1,0,0,0,1,0,1,1,1,1,0,1,1,1,1,1,0,1,0,0,1,1,1,1,1,0,1,0,1,1,1,0,0,0,1,1,0,1,1,1,0,1,0,0,1,1,1,0,0,0,1,1,0,0,1,0,1,0,0,1,0,1,1,1,0,1,0,0,1,0,1,0,1,1,0,0,0,0,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,0,1,0,0,0,0,0,1,1,1,1,1,0,0,1,1,1,0,0,0,0,0,1,0,0,0,1,0,0,0,1,1,1,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,1,1,0,0,0,1,1,0,0,1,1,0,1,1,0,1,0,1,1,0,0,0,0,1,1,0,1,0,0,0,1,1,1,0,0,1,1,1,1,0,1,0,0,0,1,0,1,1,1,0,0,1,0,0,0,0,1,0,1,1,1,0,1,0,1,1,1,1,0,1,1,1,1,1,1,1,0,0,0,1,1,1,0,1,1,0,1,0,1,1,0,0,1,0,1,1,1,1,0,1,1,0,0,0,1,0,0,0,1,1,1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,1,1,0,0,1,1,1,0,1,1,1,0,0,0,1,0,0,1,0,0,1,0,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,1,1,1,0,0,0,0,1,0,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,1,1,0,1,1,0,1,1,1,0,1,0,1,0,0,1,0,0,0,0,1,1,0,0,0,1,1,1,1,0,0,1,1,1,0,0,1,0,0,1,1,1,0,0,1,0,0,0,1,1,1,1,1,1,0,1,0,1,0,0,0,1,1,0,1,0,1,0,1,0,1,0,0,0,0,1,1,1,0,1,1,1,1,0,0,0,0,1,0,1,1,0,1,1,0,0,0,1,0,1,1,0,0,0,1,1,0,0,1,1,1,1,1,1,1,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,1,0,0,0,0,1,0,1,1,0,1,0,1,1,1,0,0,0,0,1,1,0,0,1,0,0,0,1,0,1,1,1,0,1,1,0,0,1,1,0,1,0,0,1,1,1,0,1,1,1,1,1,0,1,0,0,1,1,0,1,0,0,1,1,0,0,1,1,0,0,0,1,0,0,0,0,1,0,0,0,1,1,0,0,1,1,0,0,1,0,1,0,0,1,0,1,1,1,0,0,1,0,0,0,1,0,1,0,0,1,1,1,0,0,1,1,0,0,0,0,1,1,1,1,0,1,1,1,1,0,0,1,1,1,1,1,0,0,0,1,1,0,0,1,0,1,1,1,0,1,0,1,0,0,0,0,1,0,1,1,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,0,1,1,1,1,0,0,1,0,1,1,0,0,0,1,1,0,0,1,0,1,1,0,0,0,1,0,1,0,1,0,1,1,0,1,1,0,1,1,1,0,1,0,0,1,0,0,0,0,0,0,1,1,1,1,0,1,1,1,0,1,0,1,0,0,1,1,1,0,1,0,1,1,0,1,0,1,1,1,1,1,0,0,0,1,0,1,1,1,0,1,1,0,0,1,1,1,1,0,1,1,1,0,1,0,1,1,1,0,1,0,1,1,0,0,0,1,1,0,0,0,0,1,0,1,1,1,0,0,0,1,1,1,0,1,0,0,0,0,1,0,1,0,0,1,1,1,0,1,0,1,0,0,0,0,1,1,0,1,0,0,0,0,1,1,0,0,0,0,1,1,1,0,0,0,0,1,0,0,0,0,0,1,1,0,1,0,0,1,1,1,1,0,1,1,0,1,1,0,1,0,1,1,0,1,0,0,0,1,0,0,1,0,1,1,0,0,0,1,0,0,0,0,1,0,1,1,0,0,0,0,1,0,1,0,0,1,0,1,1,0,0,1,0,1,1,1,0,0,1,1,1,0,0,1,1,1,1,0,0,0,1,1,1,0,1,0,1,0,1,1,1,1,0,0,0,0,1,1,0,0,0,0,1,0,1,1,0,1,0,0,1,1,1,0,1,1,0,1,0,1,1,0,0,0,1,1,0,1,1,0,0,1,0,1,0,0,1,1,0,0,1,0,1,1,1,0,0,1,0,0,1,0,1,0,1,1,0,1,0,0,0,1,1,1,0,1,0,0,1,0,1,0,1,1,1,0,1,0,0,0,1,0,1,1,1,0,0,0,0,0,1,0,1,0,1,1,1,1,0,1,1,0,1,1,1,0,1,0,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,1,0,1,1,1,1,0,1,1,1,0,0,0,0,0,0,1,1,1,0,1,0,1,0,0,1,0,0,1,0,1,0,1,1,0,1,0,0,1,0,0,0,1,0,1,1,1,0,0,1,1,0,0,0,0,0,0,0,1,1,1,0,0,0,1,1,0,1,0,1,0,1,0,0,0,1,0,0,1,0,1,1,0,0,1,0,0,0,0,1,1,1,0,0,1,1,0,1,0,0,1,0,1,1,1,1,1,1,1,1,1,0,1,0,0,1,1,1,1,0,1,1,0,1,1,1,1,1,1,0,1,1,1,0,0,1,1,0,0,0,1,0,0,0,0,1,1,0,1,1,0,1,0,0,1,0,0,1,0,0,1,0,0,1,1,1,1,0,0,1,1,1,1,0,1,0,0,0,0,0,1,1,0,0,1,0,1,1,0,0,0,0,0,1,0,0,1,1,0,0,1,1,1,1,1,0,0,0,0,1,0,1,1,1,0,0,0,0,1,0,0,0,1,0,0,0,1,0,1,1,1,0,1,1,1,0,0,1,0,1,0,0,0,0,0,1,0,1,1,1,0,1,0,1,1,1,0,0,1,1,0,1,0,0,0,1,1,1,0,0,0,0,1,0,1,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,1,1,1,1,0,0,1,0,0,0,1,1,1,1,1,1,0,1,0,0,1,1,0,1,1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,0,1,0,1,1,0,0,0,0,1,0,1,0,1,0,0,0,1,1,0,1,0,1,0,1,0,0,0,0,0,1,0,0,1,1,1,1,0,0,0,1,1,0,0,0,1,0,0,0,0,0,1,1,0,1,1,1,1,1,0,0,0,1,1,0,1,0,1,0,1,0,1,1,1,0,0,1,0,1,0,1,1,1,1,1,0,0,0,1,1,0,1,1,1,0,1,1,0,0,0,1,1,1,0,1,1,0,0,1,0,0,0,1,1,1,1,1,0,1,1,1,1,1,0,0,0,0,0,1,0,1,1,1,1,1,0,0,0,1,1,0,0,0,0,1,0,1,0,0,0,0,0,1,1,1,1,0,1,1,0,1,0,0,1,0,0,0,1,1,0,0,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,0,1,1,0,0,1,1,0,0,1,1,1,0,0,0,0,1,0,1,0,0,1,1,0,1,1,0,0,0,1,1,1,1,0,0,0,1,0,1,0,0,1,0,0,0,1,0,0,1,0,1,0,0,1,1,0,1,1,0,1,0,0,0,0,0,0,1,0,0,0,0,0,1,1,1,0,0,1,1,1,0,1,0,1,1,1,1,1,1,1,0,1,1,0,0,1,1,1,1,1,1,1,1,1,0,0,1,1,0,1,0,0,0,1,0,0,0,0,0,1,1,1,1,0,1,0,1,1,0,1,1,0,0,0,0,1,1,1,0,1,1,1,0,0,1,0,1,1,0,1,0,0,0,0,0,1,1,0,1,1,1,0,1,0,1,1,1,0,1,1,0,1,1,0,0,0,0,1,1,0,1,1,1,1,1,0,0,1,1,0,1,0,1,0,0,1,0,1,0,1,1,0,1,1,0,0,0,1,0,0,0,0,1,1,0,1,0,0,0,1,1,0,1,1,1,0,0,0,0,0,1,1,1,0,1,0,1,1,0,1,1,0,0,0,0,0,0,1,0,0,1,0,0,0,1,0,1,1,1,0,0,1,1,1,0,0,0,0,0,1,1,0,0,1,0,0,0,1,0,1,1,0,0,1,0,1,0,1,1,0,1,1,0,1,1,0,0,1,1,0,0,1,1,1,0,0,1,0,1,0,0,0,1,0,1,0,0,1,1,0,1,1,0,1,0,0,1,1,1,1,1,0,0,0,1,0,1,0,1,0,0,0,1,0,1,1,0,1,0,0,0,0,1,0,1,1,1,1,1,1,0,1,0,0,0,1,1,0,1,0,0,1,0,1,1,1,0,0,1,1,1,0,1,0,1,1,0,1,1,1,0,1,1,1,1,1,1,1,0,1,0,0,1,0,0,0,1,0,0,0,1,0,1,1,0,0,0,0,0,0,];
var gg_b = "1743256801/";

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
