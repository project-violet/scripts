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
case 1210:
case 2332:
case 0:
case 4038:
case 758:
case 3035:
case 434:
case 324:
case 3462:
case 1420:
case 567:
case 14:
case 3732:
case 2747:
case 3485:
case 3630:
case 2537:
case 2847:
case 664:
case 3960:
case 2354:
case 3291:
case 1922:
case 837:
case 772:
case 301:
case 782:
case 1053:
case 1302:
case 1909:
case 3754:
case 3798:
case 2669:
case 3854:
case 2123:
case 397:
case 3025:
case 249:
case 3283:
case 62:
case 3722:
case 1860:
case 3620:
case 551:
case 1151:
case 3822:
case 1760:
case 2527:
case 1998:
case 2322:
case 3709:
case 2021:
case 1103:
case 3809:
case 3565:
case 2493:
case 328:
case 668:
case 2887:
case 2067:
case 3445:
case 2133:
case 3111:
case 746:
case 869:
case 1873:
case 2441:
case 3179:
case 2996:
case 783:
case 2407:
case 3578:
case 2284:
case 3380:
case 3152:
case 1721:
case 881:
case 291:
case 2665:
case 2060:
case 4064:
case 2682:
case 1905:
case 2880:
case 1649:
case 3494:
case 3458:
case 2073:
case 1112:
case 2935:
case 462:
case 3134:
case 1374:
case 1581:
case 1437:
case 3931:
case 690:
case 25:
case 2520:
case 3449:
case 1238:
case 335:
case 4010:
case 957:
case 1593:
case 1047:
case 3257:
case 3967:
case 826:
case 1831:
case 1541:
case 2119:
case 3175:
case 895:
case 285:
case 131:
case 1292:
case 1427:
case 1689:
case 2740:
case 2701:
case 2642:
case 715:
case 3637:
case 2208:
case 2925:
case 3124:
case 3002:
case 1658:
case 2810:
case 2612:
case 806:
case 878:
case 44:
case 1006:
case 2424:
case 2555:
case 298:
case 689:
case 1038:
case 405:
case 679:
case 1488:
case 3310:
case 2214:
case 1247:
case 350:
case 92:
case 1017:
case 2475:
case 3202:
case 1092:
case 1977:
case 3471:
case 1511:
case 1182:
case 4053:
case 1795:
case 1391:
case 2036:
case 1895:
case 2099:
case 500:
case 1028:
case 3688:
case 2950:
case 2566:
case 2194:
case 2084:
case 4080:
case 3877:
case 2572:
case 3116:
case 2943:
case 3777:
case 410:
case 1287:
case 3239:
case 1671:
case 294:
case 853:
case 884:
case 964:
case 874:
case 1064:
case 3415:
case 3100:
case 1884:
case 3328:
case 3863:
case 2828:
case 1799:
case 60:
case 3763:
case 739:
case 3908:
case 1280:
case 2411:
case 2145:
case 1455:
case 573:
case 3672:
case 236:
case 162:
case 386:
case 3274:
case 2370:
case 2957:
case 2267:
case 3666:
case 2548:
case 2504:
case 2738:
case 2468:
case 260:
case 4047:
case 2231:
case 3338:
case 2706:
case 196:
case 2892:
case 2162:
case 163:
case 3043:
case 2185:
case 1736:
case 1240:
case 1546:
case 2095:
case 342:
case 582:
case 1844:
case 3512:
case 459:
case 2817:
case 1708:
case 1472:
case 1963:
case 3392:
case 1055:
case 2241:
case 1650:
case 588:
case 578:
case 2125:
case 2293:
case 3924:
case 348:
case 3245:
case 2848:
case 2804:
case 2079:
case 3015:
case 2517:
case 1508:
case 1834:
case 3986:
case 479:
case 2919:
case 3483:
case 1230:
case 3797:
case 2592:
case 3167:
case 3897:
case 2011:
case 1912:
case 1786:
case 1066:
case 800:
case 1886:
case 781:
case 934:
case 302:
case 771:
case 1072:
case 3491:
case 1997:
case 3450:
case 3131:
case 2113:
case 1775:
case 3262:
case 344:
case 3359:
case 1220:
case 2888:
case 2788:
case 3023:
case 3388:
case 687:
case 3276:
case 2759:
case 1724:
case 574:
case 211:
case 1824:
case 584:
case 2444:
case 3911:
case 2933:
case 1417:
case 132:
case 2075:
case 457:
case 1492:
case 2196:
case 190:
case 3114:
case 1132:
case 2915:
case 925:
case 3372:
case 1990:
case 3457:
case 293:
case 1261:
case 2102:
case 4020:
case 1406:
case 1059:
case 3249:
case 1903:
case 1088:
case 1768:
case 1868:
case 3628:
case 1154:
case 2303:
case 3890:
case 3751:
case 461:
case 2426:
case 1122:
case 1004:
case 2351:
case 858:
case 3294:
case 2855:
case 2390:
case 3968:
case 133:
case 3617:
case 2216:
case 3703:
case 2046:
case 540:
case 1595:
case 230:
case 1711:
case 1315:
case 3638:
case 1811:
case 1779:
case 3:
case 1333:
case 292:
case 1657:
case 1602:
case 3058:
case 3094:
case 1700:
case 2985:
case 255:
case 1531:
case 1800:
case 1841:
case 3184:
case 2473:
case 2962:
case 2252:
case 2698:
case 1893:
case 977:
case 1163:
case 2654:
case 1037:
case 3199:
case 3089:
case 3981:
case 3439:
case 2976:
case 2007:
case 464:
case 634:
case 2234:
case 3330:
case 2246:
case 2730:
case 116:
case 2460:
case 3126:
case 910:
case 1639:
case 3271:
case 1027:
case 839:
case 3687:
case 851:
case 3429:
case 1521:
case 638:
case 3778:
case 3049:
case 1567:
case 2720:
case 27:
case 3900:
case 3941:
case 1881:
case 1781:
case 1362:
case 2224:
case 157:
case 1401:
case 1674:
case 322:
case 2761:
case 753:
case 784:
case 2150:
case 2365:
case 2191:
case 1573:
case 1942:
case 3413:
case 145:
case 3062:
case 2143:
case 3782:
case 3435:
case 10:
case 2587:
case 4059:
case 2994:
case 2268:
case 3223:
case 3532:
case 2547:
case 3842:
case 3474:
case 3742:
case 3601:
case 3640:
case 1514:
case 1358:
case 323:
case 3045:
case 1255:
case 2041:
case 4048:
case 788:
case 161:
case 1965:
case 2342:
case 2949:
case 595:
case 1816:
case 1389:
case 1982:
case 526:
case 209:
case 3554:
case 3425:
case 3233:
case 3318:
case 2211:
case 1480:
case 752:
case 2718:
case 2818:
case 1613:
case 696:
case 625:
case 3856:
case 2694:
case 1753:
case 1925:
case 3980:
case 4095:
case 2217:
case 522:
case 1244:
case 259:
case 3098:
case 1236:
case 1530:
case 2689:
case 1801:
case 1840:
case 3188:
case 2292:
case 231:
case 2731:
case 1974:
case 3607:
case 2831:
case 2541:
case 744:
case 914:
case 3032:
case 2593:
case 3465:
case 1014:
case 460:
case 3735:
case 3482:
case 2238:
case 2313:
case 3835:
case 3545:
case 2867:
case 2767:
case 2087:
case 3874:
case 3585:
case 395:
case 436:
case 3442:
case 2437:
case 2581:
case 3576:
case 2112:
case 1073:
case 909:
case 3148:
case 2649:
case 1780:
case 2905:
case 1682:
case 3725:
case 3953:
case 191:
case 2228:
case 3321:
case 1299:
case 3825:
case 2721:
case 3456:
case 2325:
case 2821:
case 1284:
case 3940:
case 1407:
case 824:
case 1400:
case 3947:
case 1115:
case 2932:
case 1678:
case 2773:
case 3839:
case 3739:
case 717:
case 947:
case 1493:
case 494:
case 3469:
case 2103:
case 1021:
case 287:
case 897:
case 2264:
case 3360:
case 1527:
case 2080:
case 4084:
case 2151:
case 2190:
case 770:
case 2685:
case 1902:
case 7:
case 801:
case 149:
case 1123:
case 3693:
case 3829:
case 2040:
case 4008:
case 2001:
case 2302:
case 2645:
case 2053:
case 2507:
case 3478:
case 3702:
case 3600:
case 1518:
case 3641:
case 2329:
case 1398:
case 86:
case 369:
case 1847:
case 2714:
case 1747:
case 24:
case 498:
case 3896:
case 828:
case 3558:
case 2396:
case 2516:
case 3172:
case 1332:
case 3987:
case 3928:
case 3336:
case 1176:
case 1817:
case 1717:
case 2534:
case 2808:
case 1095:
case 2546:
case 2836:
case 2240:
case 3120:
case 2466:
case 1892:
case 1806:
case 966:
case 2615:
case 296:
case 1706:
case 819:
case 886:
case 843:
case 160:
case 4014:
case 2552:
case 2357:
case 485:
case 618:
case 1738:
case 3611:
case 2633:
case 1838:
case 4073:
case 1267:
case 517:
case 1957:
case 3130:
case 992:
case 1588:
case 3403:
case 136:
case 45:
case 3917:
case 407:
case 3384:
case 2799:
case 1728:
case 2623:
case 580:
case 2169:
case 821:
case 3077:
case 3399:
case 491:
case 3992:
case 1479:
case 842:
case 2064:
case 4060:
case 2784:
case 2156:
case 723:
case 238:
case 194:
case 548:
case 2619:
case 3118:
case 503:
case 2671:
case 2404:
case 1026:
case 3686:
case 2287:
case 306:
case 378:
case 3209:
case 1434:
case 1572:
case 1084:
case 127:
case 413:
case 1864:
case 3624:
case 3137:
case 765:
case 1446:
case 1377:
case 2142:
case 3783:
case 1099:
case 67:
case 2350:
case 2391:
case 3964:
case 3743:
case 2182:
case 1486:
case 3533:
case 1149:
case 2092:
case 2977:
case 722:
case 2579:
case 3515:
case 2343:
case 1475:
case 3161:
case 3891:
case 3850:
case 502:
case 3791:
case 1044:
case 3232:
case 2247:
case 3646:
case 4031:
case 2038:
case 544:
case 2006:
case 1555:
case 198:
case 234:
case 647:
case 556:
case 3256:
case 418:
case 3591:
case 675:
case 3550:
case 409:
case 2879:
case 3815:
case 2218:
case 1484:
case 1207:
case 2779:
case 3543:
case 3833:
case 2811:
case 3379:
case 3972:
case 1139:
case 3733:
case 2711:
case 1046:
case 519:
case 586:
case 3470:
case 1052:
case 3608:
case 4093:
case 576:
case 728:
case 1755:
case 543:
case 1390:
case 2122:
case 2004:
case 354:
case 373:
case 1303:
case 2237:
case 3242:
case 3636:
case 2154:
case 3823:
case 2198:
case 1129:
case 2868:
case 2768:
case 2088:
case 3282:
case 2438:
case 3368:
case 2323:
case 193:
case 2951:
case 1436:
case 2132:
case 382:
case 3583:
case 1766:
case 2227:
case 2492:
case 1866:
case 3626:
case 1564:
case 797:
case 1075:
case 1933:
case 2417:
case 232:
case 1772:
case 1408:
case 542:
case 1670:
case 1859:
case 48:
case 2824:
case 2724:
case 735:
case 3140:
case 3101:
case 2683:
case 2220:
case 3324:
case 22:
case 315:
case 2775:
case 2584:
case 2072:
case 2997:
case 2886:
case 3871:
case 2066:
case 2786:
case 2746:
case 3334:
case 129:
case 2846:
case 2536:
case 300:
case 2834:
case 2544:
case 2734:
case 1517:
case 1079:
case 1538:
case 1804:
case 3051:
case 1748:
case 455:
case 3090:
case 1704:
case 3352:
case 3695:
case 3269:
case 2752:
case 844:
case 1506:
case 3988:
case 320:
case 1421:
case 95:
case 822:
case 1279:
case 2707:
case 3631:
case 1718:
case 3502:
case 2807:
case 1211:
case 2480:
case 4034:
case 841:
case 2982:
case 2816:
case 2177:
case 1949:
case 3758:
case 1000:
case 1041:
case 3164:
case 3894:
case 991:
case 1467:
case 3961:
case 3596:
case 3251:
case 2358:
case 3290:
case 4052:
case 2514:
case 1183:
case 3069:
case 1093:
case 3316:
case 1268:
case 4024:
case 20:
case 1143:
case 3849:
case 3539:
case 1989:
case 245:
case 1431:
case 3937:
case 2349:
case 535:
case 2573:
case 823:
case 1150:
case 1081:
case 1761:
case 985:
case 2401:
case 975:
case 1727:
case 2266:
case 3667:
case 114:
case 2453:
case 4086:
case 257:
case 3078:
case 3110:
case 2259:
case 1224:
case 524:
case 2969:
case 2362:
case 2061:
case 4068:
case 3876:
case 3776:
case 2385:
case 3065:
case 2376:
case 3785:
case 2447:
case 3574:
case 1414:
case 2288:
case 3381:
case 1820:
case 18:
case 1622:
case 3192:
case 1720:
case 3862:
case 411:
case 3930:
case 912:
case 1275:
case 694:
case 2521:
case 597:
case 721:
case 501:
case 1286:
case 2027:
case 3138:
case 2639:
case 2696:
case 3422:
case 279:
case 289:
case 1730:
case 899:
case 3056:
case 1234:
case 351:
case 4011:
case 147:
case 56:
case 1007:
case 3300:
case 2248:
case 2204:
case 3845:
case 3745:
case 1654:
case 2037:
case 3128:
case 3042:
case 1698:
case 2629:
case 2893:
case 39:
case 913:
case 528:
case 3393:
case 1962:
case 1473:
case 708:
case 2345:
case 2531:
case 3513:
case 776:
case 719:
case 786:
case 2741:
case 155:
case 2700:
case 1985:
case 2602:
case 88:
case 29:
case 3741:
case 3700:
case 1058:
case 650:
case 3602:
case 3345:
case 1184:
case 1981:
case 736:
case 3204:
case 3248:
case 2300:
case 1869:
case 1199:
case 3037:
case 3793:
case 1089:
case 1769:
case 1505:
case 2409:
case 1330:
case 549:
case 1126:
case 2422:
case 4015:
case 316:
case 389:
case 2614:
case 847:
case 2525:
case 2138:
case 1271:
case 3027:
case 1219:
case 1878:
case 2673:
case 1778:
case 2106:
case 924:
case 402:
case 901:
case 2574:
case 3288:
case 2432:
case 3376:
case 1941:
case 2785:
case 2192:
case 2762:
case 3362:
case 3969:
case 444:
case 3259:
case 1320:
case 3385:
case 512:
case 1108:
case 2876:
case 3061:
case 456:
case 3781:
case 357:
case 1327:
case 2078:
case 809:
case 3453:
case 2110:
case 2405:
case 3272:
case 1907:
case 3440:
case 643:
case 1522:
case 619:
case 2667:
case 3956:
case 676:
case 3560:
case 3349:
case 2937:
case 3942:
case 3573:
case 1076:
case 798:
case 1195:
case 1435:
case 1916:
case 2749:
case 3020:
case 1882:
case 30:
case 3358:
case 3394:
case 794:
case 2290:
case 123:
case 642:
case 1842:
case 2069:
case 1532:
case 2316:
case 2889:
case 1640:
case 1601:
case 1474:
case 3389:
case 3255:
case 2894:
case 2858:
case 55:
case 2307:
case 4:
case 3480:
case 1318:
case 1425:
case 2529:
case 727:
case 814:
case 1756:
case 220:
case 1856:
case 3807:
case 1215:
case 3707:
case 3613:
case 2631:
case 3691:
case 75:
case 3650:
case 1348:
case 2051:
case 4058:
case 3643:
case 697:
case 2959:
case 2352:
case 594:
case 3734:
case 1812:
case 200:
case 1712:
case 1986:
case 1610:
case 1015:
case 1797:
case 1897:
case 364:
case 624:
case 3536:
case 2334:
case 368:
case 3599:
case 102:
case 3066:
case 499:
case 3912:
case 3886:
case 628:
case 2771:
case 3584:
case 1946:
case 829:
case 1131:
case 215:
case 2719:
case 2386:
case 1450:
case 3072:
case 1285:
case 3683:
case 1023:
case 785:
case 950:
case 3526:
case 1262:
case 1952:
case 32:
case 4049:
case 3824:
case 2948:
case 2904:
case 1019:
case 1366:
case 830:
case 904:
case 332:
case 3417:
case 1911:
case 1577:
case 2583:
case 1979:
case 3227:
case 2626:
case 390:
case 4062:
case 3406:
case 712:
case 3951:
case 3990:
case 3261:
case 2368:
case 3323:
case 3768:
case 2955:
case 1628:
case 560:
case 4076:
case 3903:
case 1851:
case 273:
case 893:
case 1790:
case 3048:
case 1692:
case 254:
case 1751:
case 2242:
case 3237:
case 246:
case 2636:
case 1289:
case 536:
case 1703:
case 2470:
case 3109:
case 2608:
case 1803:
case 1294:
case 117:
case 465:
case 3711:
case 3811:
case 2379:
case 3595:
case 635:
case 2591:
case 170:
case 2012:
case 713:
case 986:
case 1:
case 1606:
case 3779:
case 2715:
case 908:
case 3879:
case 866:
case 1173:
case 3333:
case 2311:
case 334:
case 3006:
case 2634:
case 1310:
case 3247:
case 2232:
case 1296:
case 3038:
case 284:
case 253:
case 511:
case 1590:
case 3343:
case 1419:
case 1202:
case 944:
case 150:
case 2652:
case 2161:
case 2850:
case 3795:
case 2254:
case 3350:
case 3165:
case 2298:
case 3391:
case 3511:
case 1604:
case 1364:
case 2497:
case 2222:
case 2783:
case 252:
case 1688:
case 2412:
case 1877:
case 2209:
case 3383:
case 903:
case 63:
case 1659:
case 46:
case 1995:
case 718:
case 948:
case 2910:
case 3671:
case 3404:
case 3568:
case 278:
case 288:
case 898:
case 699:
case 3156:
case 338:
case 428:
case 2070:
case 3619:
case 2992:
case 530:
case 2077:
case 3064:
case 3784:
case 3575:
case 1141:
case 1415:
case 1908:
case 592:
case 2571:
case 1193:
case 1225:
case 917:
case 641:
case 2938:
case 1770:
case 3455:
case 3524:
case 4039:
case 970:
case 860:
case 143:
case 622:
case 3826:
case 186:
case 2906:
case 3357:
case 1423:
case 104:
case 1306:
case 2679:
case 1338:
case 1213:
case 435:
case 325:
case 665:
case 2857:
case 3010:
case 2308:
case 3240:
case 2344:
case 1984:
case 3836:
case 1043:
case 363:
case 3466:
case 2120:
case 21:
case 121:
case 1392:
case 2928:
case 3963:
case 3253:
case 2205:
case 3744:
case 3472:
case 58:
case 1013:
case 2558:
case 2987:
case 3210:
case 2314:
case 1630:
case 4057:
case 269:
case 1542:
case 1832:
case 3714:
case 1973:
case 1035:
case 3420:
case 2702:
case 101:
case 849:
case 2478:
case 2600:
case 766:
case 1960:
case 3329:
case 1291:
case 813:
case 3040:
case 3001:
case 1798:
case 450:
case 197:
case 603:
case 93:
case 1898:
case 2693:
case 3302:
case 648:
case 3151:
case 1620:
case 547:
case 1722:
case 3190:
case 1822:
case 3080:
case 1283:
case 792:
case 3676:
case 2277:
case 2155:
case 377:
case 387:
case 2739:
case 1111:
case 555:
case 1445:
case 2373:
case 2839:
case 2469:
case 128:
case 310:
case 1387:
case 3773:
case 1914:
case 3932:
case 1179:
case 3339:
case 2947:
case 3873:
case 3325:
case 518:
case 3821:
case 509:
case 3721:
case 4083:
case 2940:
case 1380:
case 3649:
case 2263:
case 2825:
case 2725:
case 486:
case 3112:
case 419:
case 3581:
case 2270:
case 1134:
case 1458:
case 2367:
case 1627:
case 1039:
case 2562:
case 965:
case 875:
case 226:
case 3437:
case 2585:
case 295:
case 1489:
case 711:
case 941:
case 1569:
case 3593:
case 1096:
case 3313:
case 1449:
case 2545:
case 2835:
case 2482:
case 3335:
case 404:
case 670:
case 1618:
case 3500:
case 3831:
case 2813:
case 2713:
case 922:
case 85:
case 1257:
case 6:
case 1967:
case 3689:
case 2054:
case 4050:
case 359:
case 2098:
case 1029:
case 807:
case 1353:
case 891:
case 3694:
case 1002:
case 1301:
case 2616:
case 3217:
case 442:
case 995:
case 3279:
case 2215:
case 1502:
case 265:
case 2856:
case 3356:
case 318:
case 2598:
case 2554:
case 2425:
case 2233:
case 2318:
case 3211:
case 1758:
case 454:
case 473:
case 2653:
case 1858:
case 1894:
case 1164:
case 1203:
case 3605:
case 2337:
case 446:
case 2742:
case 3183:
case 845:
case 2601:
case 3837:
case 3467:
case 2882:
case 1749:
case 2062:
case 2916:
case 2435:
case 3143:
case 2361:
case 3268:
case 861:
case 2765:
case 981:
case 3365:
case 2076:
case 3081:
case 3727:
case 314:
case 2522:
case 222:
case 2907:
case 482:
case 1110:
case 472:
case 559:
case 2509:
case 1078:
case 2144:
case 3609:
case 23:
case 2993:
case 54:
case 1660:
case 3820:
case 1862:
case 2496:
case 2049:
case 3720:
case 3622:
case 2136:
case 1785:
case 2900:
case 2941:
case 1574:
case 3157:
case 763:
case 1930:
case 2778:
case 2402:
case 2878:
case 889:
case 1673:
case 816:
case 3275:
case 415:
case 606:
case 3580:
case 2271:
case 1454:
case 1525:
case 400:
case 3540:
case 3501:
case 3830:
case 1614:
case 3730:
case 653:
case 684:
case 1422:
case 2126:
case 1297:
case 3460:
case 587:
case 3234:
case 2769:
case 4003:
case 2199:
case 2869:
case 1845:
case 2439:
case 1341:
case 2981:
case 1745:
case 1513:
case 3473:
case 2184:
case 4051:
case 3252:
case 3962:
case 3016:
case 392:
case 270:
case 1550:
case 1591:
case 420:
case 330:
case 787:
case 3046:
case 1463:
case 832:
case 1097:
case 1379:
case 1833:
case 2638:
case 1733:
case 1187:
case 3755:
case 2968:
case 3923:
case 3351:
case 1608:
case 3510:
case 3052:
case 1470:
case 671:
case 681:
case 3216:
case 2703:
case 146:
case 1636:
case 1242:
case 2692:
case 940:
case 183:
case 710:
case 3426:
case 2160:
case 173:
case 596:
case 1723:
case 1955:
case 74:
case 1684:
case 695:
case 3086:
case 626:
case 1626:
case 3866:
case 3196:
case 4078:
case 172:
case 3872:
case 3933:
case 3772:
case 2366:
case 2019:
case 4065:
case 1948:
case 1153:
case 4082:
case 311:
case 2359:
case 2952:
case 1324:
case 534:
case 2262:
case 244:
case 3788:
case 2023:
case 3888:
case 1101:
case 2285:
case 974:
case 1386:
case 759:
case 1278:
case 2131:
case 3113:
case 2934:
case 1771:
case 1375:
case 2443:
case 3495:
case 1334:
case 2975:
case 439:
case 2167:
case 3592:
case 2033:
case 3011:
case 2015:
case 3397:
case 978:
case 868:
case 2712:
case 100:
case 2986:
case 3517:
case 1346:
case 3971:
case 248:
case 1959:
case 49:
case 538:
case 3125:
case 1269:
case 2245:
case 3848:
case 3704:
case 1090:
case 3200:
case 952:
case 1988:
case 1557:
case 1003:
case 2121:
case 1336:
case 3717:
case 2181:
case 221:
case 1928:
case 3792:
case 3651:
case 3892:
case 2984:
case 532:
case 1308:
case 3185:
case 1344:
case 4032:
case 1757:
case 1857:
case 360:
case 982:
case 620:
case 3806:
case 1679:
case 3738:
case 2306:
case 3504:
case 3548:
case 2423:
case 825:
case 2274:
case 208:
case 896:
case 219:
case 3957:
case 1326:
case 3559:
case 495:
case 2870:
case 1403:
case 336:
case 2672:
case 1938:
case 4009:
case 2225:
case 1668:
case 1384:
case 2433:
case 4022:
case 779:
case 3479:
case 1519:
case 789:
case 716:
case 140:
case 954:
case 1992:
case 2328:
case 1399:
case 3221:
case 973:
case 3273:
case 1675:
case 761:
case 834:
case 106:
case 3026:
case 1910:
case 1686:
case 3764:
case 2995:
case 327:
case 3084:
case 3158:
case 2659:
case 3864:
case 3194:
case 3434:
case 2777:
case 1209:
case 667:
case 3943:
case 2116:
case 1883:
case 3189:
case 3377:
case 3950:
case 3566:
case 3991:
case 1497:
case 1222:
case 2364:
case 3260:
case 3486:
case 1743:
case 3149:
case 2604:
case 3036:
case 1254:
case 4005:
case 1395:
case 1850:
case 1161:
case 3008:
case 1791:
case 1652:
case 1750:
case 1515:
case 838:
case 2551:
case 174:
case 153:
case 1127:
case 1646:
case 3214:
case 2310:
case 651:
case 3612:
case 2057:
case 3424:
case 398:
case 3555:
case 52:
case 3244:
case 2805:
case 2002:
case 171:
case 41:
case 557:
case 2921:
case 646:
case 2029:
case 1054:
case 683:
case 3642:
case 654:
case 673:
case 1188:
case 3305:
case 3801:
case 3974:
case 1713:
case 375:
case 2618:
case 1813:
case 2175:
case 235:
case 1735:
case 1545:
case 545:
case 1835:
case 2096:
case 1465:
case 1032:
case 3014:
case 2489:
case 3913:
case 1774:
case 126:
case 3226:
case 2039:
case 682:
case 2627:
case 920:
case 35:
case 3520:
case 1367:
case 2494:
case 2458:
case 3416:
case 1725:
case 1263:
case 1321:
case 391:
case 3880:
case 1104:
case 1022:
case 658:
case 2578:
case 859:
case 307:
case 1456:
case 2152:
case 764:
case 1009:
case 831:
case 3678:
case 3115:
case 2179:
case 1947:
case 2387:
case 2914:
case 84:
case 4070:
case 733:
case 951:
case 2074:
case 2565:
case 3493:
case 3067:
case 2445:
case 1373:
case 939:
case 2582:
case 3887:
case 3929:
case 1155:
case 1360:
case 1681:
case 2809:
case 579:
case 2709:
case 3021:
case 452:
case 3309:
case 3902:
case 349:
case 2025:
case 313:
case 2822:
case 2243:
case 2168:
case 1829:
case 3123:
case 297:
case 3669:
case 2250:
case 2291:
case 2960:
case 1005:
case 2556:
case 3518:
case 1600:
case 1702:
case 201:
case 1478:
case 1796:
case 224:
case 2035:
case 1896:
case 2462:
case 1166:
case 2542:
case 3537:
case 2485:
case 3747:
case 2630:
case 1589:
case 3332:
case 2347:
case 3939:
case 2476:
case 3481:
case 1987:
case 600:
case 1558:
case 1594:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1757664002/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,0,1,1,0,1,1,0,0,1,0,0,0,1,0,0,0,1,0,1,1,1,1,1,1,0,1,0,1,1,0,1,0,0,1,0,0,0,1,0,1,0,0,1,1,1,0,1,1,0,0,1,0,1,1,1,0,1,0,1,0,1,1,0,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,1,0,1,0,0,0,1,1,0,1,0,0,0,0,1,1,1,0,1,0,1,0,0,0,0,0,0,0,1,0,1,1,0,0,0,1,0,1,0,0,1,1,1,1,0,1,1,1,0,0,1,0,0,0,1,0,0,1,0,1,1,1,0,1,1,0,0,1,0,1,0,1,0,0,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,1,1,0,1,1,0,1,1,1,0,1,1,0,0,0,0,0,0,1,1,0,1,0,0,0,1,0,0,0,1,1,1,1,0,1,0,1,0,0,0,1,1,1,0,1,1,1,0,1,0,0,0,0,0,1,1,1,0,1,1,0,0,1,1,1,1,0,1,0,1,1,0,0,0,0,1,0,0,0,1,1,0,0,1,0,0,0,0,1,1,0,0,0,0,1,1,0,1,1,1,0,1,1,1,1,1,1,1,1,0,1,1,1,0,0,0,1,1,0,0,1,1,0,1,1,1,1,0,1,0,1,0,1,1,1,1,0,1,1,0,1,0,1,0,1,1,1,0,1,0,0,0,1,0,1,0,0,0,1,1,1,1,0,0,1,0,0,1,0,1,1,0,0,1,1,0,0,0,1,1,0,0,0,1,0,1,0,1,1,0,0,0,1,0,0,0,1,1,0,1,1,1,1,0,0,1,0,1,1,0,1,0,1,0,1,1,0,1,0,1,1,1,0,1,0,1,0,0,1,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,1,0,0,1,0,0,1,0,1,0,1,0,0,0,1,0,1,0,1,1,1,1,0,1,1,1,1,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,1,0,0,1,1,0,0,0,0,1,0,0,1,1,0,0,1,1,1,1,1,1,0,0,0,0,0,1,0,1,1,0,0,0,0,1,1,1,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,0,1,0,1,0,1,1,1,1,0,1,1,1,0,1,0,0,0,1,1,1,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,1,1,0,1,0,1,1,1,0,1,0,1,0,1,1,1,0,0,0,1,0,1,1,1,1,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,1,0,1,1,1,0,1,0,0,0,0,0,1,1,0,0,1,0,0,1,1,1,0,0,1,1,1,0,1,1,0,1,1,0,0,0,1,0,0,0,0,0,1,1,0,1,1,0,1,1,0,1,0,1,1,0,0,1,0,1,1,1,1,0,0,1,0,1,1,0,0,0,1,1,1,1,0,1,0,0,0,0,0,0,0,0,1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,1,0,0,0,1,1,0,0,0,0,1,0,1,1,0,0,1,0,0,0,0,1,0,1,0,0,0,0,0,1,1,0,0,0,0,1,1,0,1,0,1,1,1,1,0,0,0,1,1,1,0,0,0,1,0,0,1,0,1,1,1,1,1,1,1,1,1,0,0,1,0,1,0,0,1,1,0,1,1,0,0,0,0,1,1,0,1,0,0,0,1,1,0,1,0,0,1,0,1,1,1,1,1,1,0,1,1,1,1,1,0,1,0,0,1,1,1,0,1,1,1,1,1,0,1,0,1,0,1,0,1,0,0,0,0,1,1,1,1,0,0,0,0,1,0,1,1,0,0,0,0,1,1,0,0,1,0,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,1,1,1,1,1,0,1,0,1,1,0,0,0,1,1,1,0,1,1,1,0,0,1,0,0,1,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,1,0,0,1,0,0,1,1,0,1,1,1,0,1,0,0,1,0,0,0,0,0,0,1,1,1,0,0,0,1,0,0,1,1,1,0,1,1,0,0,1,1,0,0,1,1,0,0,0,0,1,1,0,0,1,0,0,0,0,1,0,1,1,1,1,1,1,0,1,0,0,0,1,1,1,0,1,0,1,0,1,1,1,0,0,1,1,1,1,0,0,1,0,0,1,0,1,1,1,0,1,0,1,1,0,1,1,0,0,0,0,1,1,1,1,0,0,1,1,0,0,0,0,1,0,1,0,0,0,0,0,1,1,0,1,1,0,1,1,0,1,0,0,1,0,0,0,1,1,1,0,1,1,0,1,1,1,0,1,0,1,0,1,1,0,0,0,1,0,1,1,1,0,0,1,0,0,0,0,0,0,1,1,0,0,1,1,0,1,0,1,1,0,1,0,0,0,0,1,0,1,0,1,0,0,0,0,0,1,1,1,0,1,1,1,0,0,0,0,0,1,0,1,1,0,1,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,1,1,1,0,0,1,1,0,0,0,0,1,0,1,0,0,0,1,0,0,1,1,0,0,0,1,0,1,1,1,0,1,0,1,0,0,0,1,1,0,1,0,1,1,0,0,0,0,1,0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,0,1,0,0,0,0,0,0,1,1,0,1,0,0,0,1,1,1,0,0,0,1,1,1,0,1,0,0,0,1,0,0,1,1,1,0,0,1,1,1,1,1,0,1,0,1,1,0,1,0,1,1,0,1,0,1,1,1,0,0,1,0,1,0,1,0,0,0,0,1,0,0,1,0,1,1,0,0,1,0,1,1,0,0,1,0,1,1,1,0,1,0,1,0,0,1,0,0,1,0,1,0,1,0,0,0,0,1,0,0,0,0,1,0,1,0,1,0,1,0,1,1,0,0,0,0,0,1,1,1,0,1,0,1,1,0,0,0,1,0,1,1,0,1,1,1,1,0,0,1,0,0,1,1,1,1,0,1,0,0,1,1,1,0,0,0,0,0,1,1,0,1,0,1,1,1,1,1,0,1,0,1,0,0,0,1,0,0,1,1,1,1,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,1,1,1,0,1,0,0,0,0,1,0,1,0,1,0,0,1,0,1,1,1,1,0,0,1,1,1,0,0,0,1,0,1,0,1,1,0,0,1,1,0,0,0,1,0,0,0,0,1,0,0,1,1,0,1,0,0,1,0,1,1,1,0,1,1,1,0,1,1,0,0,1,0,1,0,0,1,1,1,0,0,0,0,0,1,0,0,1,1,0,0,1,1,0,0,0,1,0,0,0,0,1,0,1,1,0,0,0,0,0,1,0,0,1,0,1,0,0,1,1,1,0,0,1,0,0,0,1,0,0,0,0,0,0,1,1,1,1,0,1,1,1,0,0,0,0,1,1,1,0,1,0,1,0,1,0,1,0,0,1,1,0,0,0,1,0,1,0,1,0,0,0,1,1,1,0,1,0,0,0,0,0,1,0,0,1,1,0,0,0,0,0,1,0,0,1,1,0,1,0,1,0,0,1,1,1,1,0,0,0,0,0,0,0,1,0,1,1,0,1,1,1,0,0,1,1,0,1,1,0,1,0,1,0,1,1,0,0,1,0,0,0,0,0,1,0,1,0,1,1,1,0,1,0,1,0,0,1,1,1,0,0,0,1,1,0,1,1,1,1,1,1,0,1,1,0,1,0,0,1,0,1,1,0,1,0,0,0,0,1,0,1,0,1,1,1,1,1,0,1,0,1,1,1,1,0,1,1,0,0,0,0,1,0,1,1,1,1,1,0,1,1,0,0,1,1,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,1,1,1,1,1,0,1,1,0,1,0,0,0,0,1,1,1,0,0,1,1,0,0,1,0,1,0,1,0,0,0,0,1,0,1,1,1,1,1,0,0,1,0,1,1,1,0,1,1,0,1,0,0,1,1,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0,1,1,0,0,0,1,0,0,0,1,1,0,0,1,1,1,1,0,1,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,1,1,0,1,0,1,1,1,1,1,1,0,1,0,1,0,0,0,0,0,1,0,0,1,0,0,1,0,1,0,0,1,0,0,0,0,1,0,0,1,1,0,0,0,1,1,1,1,0,0,1,0,0,1,0,1,0,1,1,0,1,1,0,1,0,1,0,0,0,0,0,1,1,0,0,1,0,1,0,1,1,0,1,1,1,1,1,1,1,0,1,0,0,1,0,1,1,0,0,1,1,0,1,0,1,1,0,0,0,1,1,0,0,1,0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,1,0,1,1,1,1,1,1,1,0,0,0,0,1,0,0,1,0,1,0,1,1,0,0,1,0,0,1,1,1,0,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,0,0,0,1,0,0,1,1,0,0,0,1,0,0,1,1,0,1,1,0,0,1,1,0,0,1,0,0,0,1,0,1,1,0,0,1,0,0,1,1,1,1,1,0,1,1,0,0,0,0,1,1,1,0,0,1,0,1,0,0,0,1,1,1,1,0,0,0,0,1,1,1,0,1,1,1,0,0,0,1,1,1,0,0,0,0,1,1,1,0,0,0,0,0,1,0,1,0,1,0,1,1,0,1,1,0,0,0,0,1,1,1,0,1,0,1,0,1,1,0,0,0,0,1,1,0,0,1,1,0,1,0,0,1,1,1,1,1,0,1,0,1,0,1,1,0,1,1,0,0,1,1,1,1,0,0,1,1,0,1,1,1,1,0,1,1,1,1,0,1,0,1,0,1,0,0,0,0,1,0,0,1,1,1,0,1,1,1,0,1,1,0,0,1,0,0,1,0,0,0,0,0,0,1,1,0,1,1,0,1,1,1,1,0,0,0,0,1,0,1,0,1,1,0,0,1,1,1,0,1,1,0,1,1,0,1,0,1,0,0,0,1,1,0,1,0,0,1,1,0,0,1,0,1,0,0,1,0,0,0,0,1,1,1,1,0,1,0,1,1,1,1,0,1,0,0,1,1,1,0,1,1,0,1,1,1,1,1,0,1,0,0,1,0,0,1,0,0,1,0,0,0,0,0,1,1,1,0,0,1,1,0,0,0,0,1,0,0,0,0,1,1,0,1,1,0,1,0,1,0,1,1,0,0,0,0,1,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,0,1,0,1,1,1,0,1,0,1,1,1,0,1,0,0,0,0,0,1,0,0,0,0,1,0,1,0,1,0,0,0,1,0,1,1,1,0,0,1,0,1,1,0,1,0,1,0,1,0,0,1,0,0,0,1,0,0,1,1,1,0,1,1,0,0,0,0,0,0,1,0,0,1,0,1,0,0,0,0,1,0,1,1,0,0,1,1,1,0,0,1,0,1,0,1,0,1,0,0,1,0,1,1,0,0,0,1,1,0,1,1,1,1,1,0,0,1,1,0,1,1,1,0,1,0,0,0,1,0,0,1,1,0,0,0,0,1,1,1,1,0,0,0,1,1,0,1,1,1,1,1,0,1,0,0,0,1,1,1,0,0,0,0,1,0,1,1,1,0,1,0,0,0,1,0,0,0,1,0,1,1,1,0,1,1,0,0,0,1,0,0,1,1,0,1,1,1,0,1,1,0,1,0,1,1,0,0,1,0,0,1,0,0,0,1,0,0,1,1,1,0,0,0,0,1,0,0,0,0,0,1,0,1,0,1,0,1,1,1,0,0,0,0,0,1,0,0,1,1,0,1,0,0,0,1,0,0,1,1,1,0,1,0,1,0,1,1,1,1,0,0,1,1,0,1,0,1,1,1,1,1,0,0,1,1,1,1,0,0,1,1,0,0,0,0,1,1,0,0,1,0,0,0,1,1,1,1,1,0,0,0,1,1,0,1,0,0,1,0,0,0,0,0,0,1,0,1,1,0,0,1,0,1,1,1,0,1,0,1,0,1,0,1,1,1,0,0,0,1,1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,1,1,1,1,1,0,1,0,0,1,1,1,0,0,1,1,0,1,1,0,0,1,0,0,1,0,0,1,1,1,0,0,1,0,0,0,0,0,0,1,1,1,0,1,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,1,0,1,1,1,0,1,0,0,0,1,1,1,1,0,0,1,1,1,0,0,0,0,0,1,0,0,0,1,1,1,1,0,0,1,0,0,0,1,1,1,0,0,1,0,1,0,0,0,1,0,0,1,0,0,0,1,1,1,1,0,1,1,0,1,1,0,1,0,0,0,1,1,1,1,1,1,0,0,1,0,1,0,1,1,0,1,0,0,0,0,0,1,1,0,0,0,0,0,1,1,1,0,0,0,1,1,0,1,1,1,1,0,0,0,0,1,1,1,1,1,1,0,0,0,1,1,0,0,0,1,0,1,0,1,1,0,0,1,1,1,0,0,0,1,1,0,1,0,1,1,1,0,0,0,0,1,0,0,1,1,1,1,0,1,0,1,1,0,1,1,0,1,1,0,1,1,0,0,0,1,0,1,0,0,1,1,0,1,1,1,1,0,1,0,0,1,0,0,0,0,1,1,0,1,1,0,0,1,0,1,0,0,1,1,0,0,0,1,0,0,0,1,0,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,1,0,1,0,0,1,1,1,1,0,1,0,1,1,0,0,1,0,0,1,1,0,1,0,0,1,0,0,0,0,1,1,0,1,1,0,0,0,1,1,1,0,0,1,0,0,1,1,0,1,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,1,1,1,0,0,1,1,1,0,1,0,1,0,1,0,0,1,1,0,1,0,1,0,0,0,0,1,1,1,0,0,1,0,1,1,0,0,0,1,0,1,0,0,1,1,0,0,0,0,1,1,1,0,0,1,0,1,1,0,1,0,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,1,0,0,0,0,0,1,1,0,1,1,1,1,1,1,0,0,1,0,0,1,1,0,0,0,0,1,0,1,1,0,0,1,0,0,0,0,0,1,0,1,0,0,1,0,0,0,1,1,0,0,1,0,0,1,0,1,0,0,1,0,1,1,1,0,0,1,1,1,0,1,1,1,1,1,0,1,1,0,0,0,1,0,1,0,0,0,1,1,1,1,0,0,0,1,1,1,1,1,0,1,0,0,1,0,0,1,0,0,0,1,0,0,0,1,1,0,1,1,1,0,1,1,1,0,0,1,1,0,1,1,1,1,0,0,1,0,1,0,0,0,1,1,0,1,0,0,0,0,0,0,1,0,1,1,1,0,0,1,0,1,0,1,1,1,0,0,1,0,0,0,0,1,1,0,1,0,1,1,0,1,0,0,1,0,0,0,1,1,0,0,1,0,1,1,1,1,0,1,0,1,0,0,1,1,1,0,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,0,1,1,0,0,0,0,1,0,1,1,1,0,0,0,0,1,1,1,0,1,0,0,0,0,0,1,1,1,1,0,1,0,1,1,0,1,0,0,0,1,0,1,0,0,0,0,0,1,1,0,0,1,1,0,1,1,0,0,1,0,1,0,0,1,0,1,0,0,0,1,1,0,0,1,1,1,0,0,0,0,1,1,0,1,0,0,0,0,1,1,1,1,0,1,0,1,1,0,1,1,1,0,0,0,0,0,1,1,1,0,1,1,0,0,1,1,1,1,0,0,1,0,1,1,1,0,1,1,1,0,0,0,1,0,1,1,0,1,0,1,0,1,0,1,0,1,1,0,0,0,0,1,1,1,0,1,1,1,1,0,0,1,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,1,1,0,0,0,1,0,1,0,0,0,0,1,0,0,1,1,1,1,0,1,0,1,1,1,0,0,0,0,1,0,1,1,1,0,0,1,0,1,0,1,0,0,1,0,0,1,0,0,1,1,1,0,0,1,0,1,0,0,1,0,1,1,1,1,0,0,1,1,0,1,1,1,1,1,0,1,0,0,0,1,0,0,1,1,0,0,1,0,0,0,0,1,1,0,0,0,1,0,0,0,1,1,0,0,1,1,1,1,0,1,1,1,1,1,0,0,1,0,0,1,1,1,0,1,0,1,1,0,0,1,0,0,0,0,1,1,0,1,0,1,0,0,0,1,0,0,0,0,1,1,1,1,1,1,1,0,0,1,1,1,0,1,0,1,1,1,0,1,0,0,1,0,0,1,0,0,1,1,1,0,0,0,1,0,1,0,0,0,0,0,1,1,1,0,1,0,0,0,0,1,1,1,1,0,1,1,0,1,1,0,0,0,0,0,1,1,1,0,1,1,1,0,1,0,1,1,0,0,1,0,1,1,0,0,0,0,1,0,0,1,1,1,0,0,0,1,0,0,0,0,0,1,1,0,0,0,1,1,1,1,1,1,0,0,0,1,0,1,1,1,1,1,0,0,0,1,0,0,1,1,0,1,0,0,1,1,0,0,1,1,1,1,1,0,0,1,1,1,0,1,1,0,1,0,0,0,0,0,1,1,0,0,0,0,1,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1,1,1,1,0,0,1,1,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,1,1,0,1,0,0,0,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,1,1,1,1,0,1,0,1,1,0,0,1,0,1,0,0,1,0,0,1,0,1,0,1,0,1,1,1,0,1,0,0,0,0,0,0,1,0,1,];
var gg_b = "1757664002/";

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
