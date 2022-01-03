// This source code is a part of Project Violet.
// Copyright (C) 2021. violet-team. Licensed under the Apache-2.0 License.
//
// Script Name: hitomi_get_image_list.js
// Input:  $id     [int] - Hitomi.la Article Id
// Output: $result [Map] - Image List, Thumbnail List

function create_download_url(id) {
  return "https://ltn.hitomi.la/galleries/" + id + ".js";
}

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

var "use strict";
gg = { m: function(g) {
var o = 0;
switch (g) {
case 315:
case 3454:
case 470:
case 590:
case 2849:
case 2734:
case 803:
case 1225:
case 61:
case 3421:
case 1430:
case 1606:
case 2341:
case 234:
case 3473:
case 2456:
case 202:
case 3963:
case 2935:
case 3064:
case 1837:
case 1528:
case 2026:
case 1537:
case 3494:
case 240:
case 2448:
case 1767:
case 1933:
case 3449:
case 2912:
case 3374:
case 973:
case 2494:
case 386:
case 1050:
case 3831:
case 249:
case 2118:
case 2185:
case 3711:
case 2611:
case 1427:
case 2616:
case 2126:
case 629:
case 2436:
case 2030:
case 2904:
case 2051:
case 1725:
case 649:
case 3846:
case 2057:
case 3224:
case 1214:
case 1647:
case 222:
case 2440:
case 123:
case 3659:
case 2865:
case 2130:
case 2614:
case 1870:
case 4012:
case 775:
case 2895:
case 2552:
case 511:
case 1259:
case 3731:
case 2760:
case 3025:
case 2104:
case 181:
case 1344:
case 996:
case 2933:
case 3332:
case 3412:
case 3624:
case 3522:
case 818:
case 171:
case 901:
case 182:
case 3435:
case 1600:
case 3699:
case 3080:
case 1153:
case 1871:
case 2698:
case 904:
case 2257:
case 3764:
case 2295:
case 588:
case 342:
case 608:
case 2293:
case 2853:
case 971:
case 4:
case 1351:
case 403:
case 2370:
case 490:
case 63:
case 2479:
case 3837:
case 3628:
case 555:
case 2972:
case 2590:
case 3484:
case 2048:
case 753:
case 1437:
case 3708:
case 1809:
case 3452:
case 558:
case 1853:
case 1020:
case 2277:
case 3387:
case 6:
case 404:
case 4033:
case 2618:
case 2424:
case 1241:
case 2467:
case 3870:
case 1905:
case 2580:
case 216:
case 599:
case 1821:
case 3409:
case 2282:
case 543:
case 3480:
case 1959:
case 2176:
case 320:
case 925:
case 1776:
case 3092:
case 631:
case 1163:
case 709:
case 3207:
case 994:
case 2735:
case 2639:
case 2482:
case 946:
case 1108:
case 2058:
case 207:
case 739:
case 2839:
case 2934:
case 2556:
case 2991:
case 455:
case 1583:
case 1648:
case 493:
case 3352:
case 3419:
case 3395:
case 525:
case 2324:
case 2076:
case 3557:
case 1265:
case 2716:
case 3859:
case 871:
case 2953:
case 3128:
case 3818:
case 2549:
case 2005:
case 643:
case 254:
case 1896:
case 1631:
case 3450:
case 3057:
case 763:
case 612:
case 2114:
case 3074:
case 1476:
case 1232:
case 1688:
case 332:
case 2929:
case 1342:
case 3423:
case 2462:
case 1410:
case 297:
case 3755:
case 1239:
case 658:
case 2799:
case 3692:
case 696:
case 206:
case 2244:
case 1328:
case 2784:
case 360:
case 3468:
case 3771:
case 75:
case 2808:
case 1182:
case 2887:
case 1551:
case 3590:
case 764:
case 2484:
case 610:
case 1715:
case 2987:
case 1586:
case 2258:
case 1806:
case 2227:
case 1138:
case 381:
case 262:
case 2861:
case 3299:
case 1301:
case 1073:
case 1134:
case 2748:
case 3546:
case 2367:
case 801:
case 2353:
case 3110:
case 614:
case 90:
case 3845:
case 2521:
case 2035:
case 1375:
case 3315:
case 2368:
case 3397:
case 3951:
case 2591:
case 1441:
case 1471:
case 3475:
case 3094:
case 1868:
case 3111:
case 2421:
case 1322:
case 73:
case 1998:
case 3694:
case 2098:
case 3919:
case 4045:
case 598:
case 1513:
case 2883:
case 1479:
case 298:
case 1545:
case 1349:
case 1818:
case 1009:
case 965:
case 3840:
case 2363:
case 557:
case 630:
case 1538:
case 175:
case 20:
case 933:
case 2339:
case 1364:
case 2369:
case 84:
case 3274:
case 1639:
case 3214:
case 1358:
case 3799:
case 2800:
case 571:
case 3337:
case 3943:
case 500:
case 3714:
case 3383:
case 3499:
case 1781:
case 3581:
case 2374:
case 2091:
case 1749:
case 984:
case 3948:
case 940:
case 2473:
case 471:
case 259:
case 2070:
case 2631:
case 700:
case 3558:
case 2355:
case 99:
case 1350:
case 1040:
case 731:
case 824:
case 666:
case 1436:
case 13:
case 849:
case 2525:
case 3734:
case 2142:
case 460:
case 113:
case 2144:
case 1271:
case 1408:
case 2869:
case 938:
case 475:
case 3946:
case 3855:
case 3126:
case 1660:
case 1212:
case 2532:
case 76:
case 2543:
case 3823:
case 364:
case 1054:
case 1635:
case 4088:
case 2329:
case 1303:
case 869:
case 1023:
case 1541:
case 1867:
case 3115:
case 3237:
case 3069:
case 44:
case 536:
case 582:
case 1685:
case 352:
case 2377:
case 1596:
case 3371:
case 4001:
case 3980:
case 2499:
case 1219:
case 1562:
case 957:
case 2507:
case 1490:
case 2398:
case 1640:
case 224:
case 769:
case 70:
case 2793:
case 1217:
case 449:
case 777:
case 3463:
case 964:
case 1857:
case 3456:
case 2365:
case 3422:
case 187:
case 4005:
case 521:
case 124:
case 1407:
case 1731:
case 895:
case 1078:
case 3573:
case 2464:
case 745:
case 1616:
case 1549:
case 2343:
case 3178:
case 3081:
case 2433:
case 845:
case 158:
case 572:
case 1717:
case 2207:
case 3243:
case 3687:
case 178:
case 1711:
case 3936:
case 277:
case 3087:
case 436:
case 3229:
case 4025:
case 879:
case 3602:
case 906:
case 1569:
case 3140:
case 3029:
case 3775:
case 2542:
case 1074:
case 838:
case 1865:
case 2173:
case 3962:
case 2426:
case 1760:
case 2601:
case 783:
case 538:
case 3238:
case 173:
case 3670:
case 232:
case 1411:
case 2150:
case 1066:
case 578:
case 2942:
case 813:
case 2046:
case 4072:
case 641:
case 934:
case 3533:
case 687:
case 1786:
case 2653:
case 3664:
case 719:
case 2996:
case 1183:
case 2215:
case 3702:
case 147:
case 4021:
case 1597:
case 100:
case 4064:
case 3683:
case 276:
case 457:
case 3820:
case 1404:
case 3715:
case 1989:
case 779:
case 2527:
case 266:
case 693:
case 3267:
case 1994:
case 2127:
case 1792:
case 2240:
case 2709:
case 3891:
case 2664:
case 1452:
case 1924:
case 754:
case 390:
case 289:
case 319:
case 560:
case 580:
case 837:
case 1684:
case 370:
case 3519:
case 3794:
case 1126:
case 2859:
case 1860:
case 2827:
case 1463:
case 2676:
case 1155:
case 670:
case 1661:
case 554:
case 2848:
case 3031:
case 347:
case 843:
case 1486:
case 2649:
case 3288:
case 3935:
case 561:
case 505:
case 3132:
case 2386:
case 2311:
case 1080:
case 2459:
case 2596:
case 3993:
case 2678:
case 648:
case 280:
case 1668:
case 2216:
case 3250:
case 1474:
case 2187:
case 440:
case 2699:
case 423:
case 3975:
case 1613:
case 3610:
case 1081:
case 3359:
case 1109:
case 3876:
case 1048:
case 1730:
case 2294:
case 644:
case 704:
case 2366:
case 3160:
case 857:
case 564:
case 3633:
case 2990:
case 474:
case 204:
case 2609:
case 2221:
case 28:
case 2063:
case 1807:
case 883:
case 3815:
case 2842:
case 3698:
case 2444:
case 721:
case 3814:
case 3376:
case 1946:
case 3264:
case 2536:
case 1144:
case 778:
case 1296:
case 1105:
case 3703:
case 3724:
case 989:
case 1522:
case 337:
case 1127:
case 2754:
case 3595:
case 2802:
case 1772:
case 458:
case 3168:
case 3486:
case 3017:
case 1367:
case 3606:
case 3143:
case 1386:
case 2882:
case 1724:
case 3185:
case 741:
case 2851:
case 168:
case 1371:
case 1191:
case 3336:
case 1076:
case 1071:
case 3082:
case 1977:
case 642:
case 2021:
case 183:
case 1778:
case 2967:
case 1799:
case 208:
case 1485:
case 3952:
case 1626:
case 1572:
case 733:
case 1154:
case 767:
case 2016:
case 2289:
case 3426:
case 1216:
case 69:
case 2812:
case 125:
case 2673:
case 732:
case 1146:
case 3982:
case 3398:
case 986:
case 3170:
case 199:
case 269:
case 2809:
case 1325:
case 2109:
case 1519:
case 861:
case 1448:
case 2167:
case 3165:
case 3008:
case 379:
case 307:
case 1494:
case 1178:
case 3072:
case 2872:
case 3887:
case 2121:
case 2633:
case 2789:
case 3399:
case 1045:
case 3888:
case 3542:
case 2626:
case 3393:
case 678:
case 3742:
case 3863:
case 1012:
case 1987:
case 2787:
case 1501:
case 1348:
case 3786:
case 975:
case 2857:
case 3535:
case 23:
case 1336:
case 2785:
case 424:
case 415:
case 2500:
case 3122:
case 3497:
case 1100:
case 373:
case 34:
case 1180:
case 2387:
case 195:
case 473:
case 675:
case 43:
case 1297:
case 1236:
case 2995:
case 1438:
case 3239:
case 890:
case 2231:
case 1311:
case 447:
case 3043:
case 1931:
case 3636:
case 1740:
case 279:
case 3517:
case 2457:
case 3792:
case 472:
case 2438:
case 1478:
case 2320:
case 1556:
case 2523:
case 3438:
case 756:
case 573:
case 1206:
case 1942:
case 3665:
case 2405:
case 2296:
case 2820:
case 1759:
case 866:
case 2412:
case 1124:
case 1193:
case 1015:
case 2:
case 1470:
case 2404:
case 2675:
case 993:
case 805:
case 1215:
case 1914:
case 233:
case 33:
case 2314:
case 246:
case 3827:
case 3059:
case 86:
case 1915:
case 1111:
case 3722:
case 3634:
case 2141:
case 142:
case 3107:
case 2199:
case 2899:
case 343:
case 3553:
case 1560:
case 2994:
case 889:
case 463:
case 579:
case 3800:
case 427:
case 1654:
case 3999:
case 433:
case 2400:
case 626:
case 2190:
case 3914:
case 2068:
case 1468:
case 2863:
case 1588:
case 133:
case 2797:
case 1670:
case 546:
case 3933:
case 3488:
case 3754:
case 3594:
case 3881:
case 3697:
case 528:
case 3930:
case 1578:
case 2916:
case 3783:
case 679:
case 422:
case 3851:
case 74:
case 2490:
case 2719:
case 2988:
case 3073:
case 2047:
case 482:
case 661:
case 1642:
case 3327:
case 770:
case 2122:
case 3603:
case 1978:
case 3055:
case 1604:
case 1140:
case 3849:
case 1406:
case 1618:
case 3290:
case 3429:
case 3550:
case 1175:
case 3175:
case 3970:
case 1530:
case 1112:
case 2133:
case 1735:
case 1605:
case 36:
case 673:
case 1042:
case 429:
case 2501:
case 1422:
case 3396:
case 1313:
case 1576:
case 1041:
case 3813:
case 432:
case 1971:
case 937:
case 2914:
case 2630:
case 596:
case 3154:
case 3653:
case 322:
case 1245:
case 3661:
case 796:
case 2461:
case 1251:
case 2637:
case 2997:
case 119:
case 2313:
case 945:
case 2680:
case 3406:
case 952:
case 2682:
case 3020:
case 4047:
case 2406:
case 418:
case 3857:
case 3641:
case 1008:
case 3523:
case 2775:
case 1714:
case 1278:
case 1224:
case 2660:
case 1704:
case 1707:
case 3843:
case 3355:
case 252:
case 1632:
case 2702:
case 1270:
case 2733:
case 2174:
case 3300:
case 2210:
case 1231:
case 3495:
case 2954:
case 2855:
case 4006:
case 2551:
case 3608:
case 2476:
case 1863:
case 2691:
case 3048:
case 640:
case 1150:
case 1899:
case 118:
case 2347:
case 268:
case 3249:
case 2361:
case 245:
case 3282:
case 1858:
case 1844:
case 635:
case 231:
case 165:
case 3042:
case 1621:
case 3617:
case 1381:
case 856:
case 3071:
case 1937:
case 2656:
case 295:
case 3491:
case 1104:
case 2975:
case 2425:
case 3415:
case 4003:
case 384:
case 2434:
case 2432:
case 2724:
case 2358:
case 3404:
case 574:
case 3944:
case 542:
case 1595:
case 2327:
case 2672:
case 4034:
case 685:
case 1249:
case 2898:
case 3469:
case 3309:
case 1701:
case 2706:
case 2770:
case 3695:
case 2303:
case 1680:
case 81:
case 2330:
case 2684:
case 772:
case 2018:
case 2455:
case 722:
case 3518:
case 1611:
case 1086:
case 1106:
case 1662:
case 1624:
case 177:
case 406:
case 1390:
case 2526:
case 2931:
case 1024:
case 3894:
case 1873:
case 2222:
case 1903:
case 2337:
case 3061:
case 3401:
case 439:
case 3254:
case 2739:
case 1049:
case 2155:
case 3600:
case 2372:
case 247:
case 650:
case 865:
case 1677:
case 1397:
case 3945:
case 3705:
case 3037:
case 3564:
case 2011:
case 3989:
case 419:
case 2638:
case 2875:
case 768:
case 513:
case 1306:
case 3640:
case 2316:
case 1737:
case 587:
case 1188:
case 1651:
case 29:
case 1442:
case 383:
case 3155:
case 2744:
case 2242:
case 974:
case 1875:
case 1791:
case 1830:
case 3297:
case 1696:
case 1512:
case 690:
case 914:
case 1172:
case 1859:
case 1897:
case 3487:
case 1775:
case 1473:
case 751:
case 3678:
case 2172:
case 3860:
case 3091:
case 2566:
case 2044:
case 2594:
case 2502:
case 2378:
case 3965:
case 3121:
case 3978:
case 2297:
case 3725:
case 4068:
case 2670:
case 2276:
case 2497:
case 2159:
case 2441:
case 3181:
case 2902:
case 1368:
case 3221:
case 1:
case 1166:
case 2743:
case 211:
case 2023:
case 1761:
case 1638:
case 1599:
case 2266:
case 1043:
case 533:
case 2268:
case 2828:
case 1128:
case 1925:
case 2968:
case 1941:
case 155:
case 1056:
case 2123:
case 46:
case 3995:
case 2530:
case 209:
case 2192:
case 3701:
case 2751:
case 1561:
case 932:
case 1666:
case 2756:
case 808:
case 3424:
case 1179:
case 1841:
case 3917:
case 2992:
case 1487:
case 2253:
case 4044:
case 253:
case 841:
case 3972:
case 2564:
case 4075:
case 2943:
case 2139:
case 56:
case 1803:
case 620:
case 1669:
case 2085:
case 212:
case 3960:
case 3019:
case 2136:
case 1362:
case 362:
case 62:
case 2781:
case 508:
case 3099:
case 388:
case 1584:
case 936:
case 313:
case 2197:
case 1196:
case 497:
case 1194:
case 3335:
case 2662:
case 3848:
case 2930:
case 711:
case 2214:
case 3532:
case 1387:
case 1531:
case 1051:
case 2352:
case 4038:
case 1895:
case 628:
case 3732:
case 3833:
case 3489:
case 3911:
case 3901:
case 637:
case 2778:
case 586:
case 391:
case 894:
case 366:
case 1808:
case 2924:
case 2503:
case 2235:
case 2204:
case 3275:
case 2205:
case 600:
case 1372:
case 1321:
case 717:
case 3260:
case 1798:
case 1409:
case 1466:
case 3171:
case 1812:
case 3481:
case 1412:
case 1598:
case 3147:
case 873:
case 3259:
case 3721:
case 3263:
case 3739:
case 589:
case 2273:
case 4008:
case 3584:
case 3710:
case 3871:
case 3105:
case 4091:
case 3201:
case 2535:
case 1273:
case 1890:
case 3464:
case 1849:
case 1831:
case 1747:
case 3322:
case 2310:
case 1592:
case 2740:
case 2203:
case 2711:
case 2164:
case 1918:
case 1115:
case 57:
case 987:
case 3000:
case 2531:
case 97:
case 2177:
case 2220:
case 1765:
case 2533:
case 1029:
case 1403:
case 1993:
case 3368:
case 196:
case 502:
case 24:
case 4078:
case 1424:
case 2843:
case 2715:
case 3812:
case 923:
case 2088:
case 2305:
case 2138:
case 3291:
case 1135:
case 848:
case 516:
case 2211:
case 3539:
case 1972:
case 3129:
case 742:
case 2036:
case 3922:
case 2874:
case 1690:
case 3124:
case 2238:
case 1741:
case 2669:
case 1276:
case 3339:
case 92:
case 235:
case 713:
case 2264:
case 2831:
case 3816:
case 1083:
case 1011:
case 2965:
case 3569:
case 2836:
case 1094:
case 38:
case 2413:
case 83:
case 4073:
case 3821:
case 3038:
case 1435:
case 839:
case 1521:
case 1356:
case 1687:
case 1420:
case 2000:
case 2514:
case 605:
case 716:
case 3326:
case 3534:
case 1826:
case 3769:
case 2105:
case 2039:
case 2840:
case 532:
case 1192:
case 615:
case 2075:
case 3436:
case 1673:
case 2335:
case 51:
case 3577:
case 1928:
case 2281:
case 705:
case 392:
case 2586:
case 2291:
case 1527:
case 1653:
case 1964:
case 2407:
case 310:
case 492:
case 2108:
case 2232:
case 927:
case 2764:
case 275:
case 3934:
case 3265:
case 1483:
case 1093:
case 788:
case 1734:
case 1960:
case 3854:
case 3408:
case 3241:
case 1294:
case 3502:
case 1209:
case 1143:
case 2864:
case 2092:
case 2819:
case 3777:
case 2978:
case 2658:
case 2259:
case 568:
case 1242:
case 2052:
case 1055:
case 484:
case 1932:
case 3117:
case 3405:
case 759:
case 909:
case 2090:
case 312:
case 3949:
case 1449:
case 2644:
case 1559:
case 836:
case 2246:
case 2966:
case 559:
case 3672:
case 1901:
case 1981:
case 1227:
case 273:
case 2193:
case 338:
case 634:
case 2260:
case 3320:
case 329:
case 3097:
case 876:
case 3658:
case 1546:
case 663:
case 3992:
case 1543:
case 1709:
case 1198:
case 2354:
case 1312:
case 2641:
case 176:
case 835:
case 2998:
case 594:
case 3294:
case 1834:
case 3205:
case 1619:
case 1912:
case 1037:
case 3266:
case 3247:
case 2753:
case 26:
case 1571:
case 1361:
case 1908:
case 1526:
case 541:
case 3033:
case 2385:
case 506:
case 1938:
case 3559:
case 1492:
case 2619:
case 3455:
case 3200:
case 3554:
case 1317:
case 4019:
case 2868:
case 4054:
case 2061:
case 219:
case 730:
case 3058:
case 3269:
case 2852:
case 3350:
case 2475:
case 3585:
case 2477:
case 3572:
case 1389:
case 2509:
case 1813:
case 899:
case 1503:
case 3434:
case 3252:
case 2599:
case 3459:
case 545:
case 3931:
case 712:
case 3234:
case 708:
case 2017:
case 3390:
case 698:
case 2307:
case 1469:
case 3561:
case 2290:
case 665:
case 3941:
case 3651:
case 3591:
case 2602:
case 3808:
case 3164:
case 42:
case 3447:
case 1929:
case 2856:
case 3432:
case 3998:
case 236:
case 814:
case 2040:
case 2504:
case 2604:
case 905:
case 2225:
case 2480:
case 1484:
case 3898:
case 445:
case 1573:
case 3791:
case 2708:
case 3908:
case 4077:
case 2103:
case 1354:
case 3292:
case 2948:
case 3246:
case 1320:
case 242:
case 3718:
case 166:
case 2189:
case 3159:
case 2401:
case 1763:
case 2015:
case 1039:
case 496:
case 959:
case 308:
case 3953:
case 3503:
case 898:
case 3286:
case 395:
case 3144:
case 3021:
case 1794:
case 1003:
case 2344:
case 3131:
case 1723:
case 990:
case 2390:
case 3760:
case 968:
case 3482:
case 303:
case 3787:
case 3416:
case 45:
case 1158:
case 2794:
case 3283:
case 514:
case 1279:
case 3476:
case 3004:
case 2325:
case 345:
case 2825:
case 3928:
case 4095:
case 251:
case 205:
case 435:
case 4036:
case 2695:
case 3657:
case 2822:
case 1681:
case 1258:
case 1378:
case 1790:
case 2862:
case 1142:
case 2541:
case 583:
case 1159:
case 3493:
case 2774:
case 1383:
case 882:
case 3967:
case 2019:
case 106:
case 859:
case 1417:
case 3987:
case 677:
case 1497:
case 2357:
case 68:
case 2635:
case 1958:
case 3303:
case 3377:
case 1457:
case 330:
case 1894:
case 3296:
case 2964:
case 2736:
case 3443:
case 1031:
case 139:
case 2595:
case 2877:
case 3826:
case 1926:
case 863:
case 3667:
case 765:
case 1425:
case 116:
case 102:
case 2032:
case 1017:
case 2867:
case 1557:
case 2022:
case 2881:
case 790:
case 3968:
case 832:
case 1641:
case 2928:
case 3744:
case 3306:
case 4011:
case 1338:
case 3385:
case 507:
case 1533:
case 1443:
case 2944:
case 548:
case 282:
case 1304:
case 652:
case 2219:
case 203:
case 1268:
case 1649:
case 921:
case 361:
case 3979:
case 1539:
case 2096:
case 163:
case 811:
case 1552:
case 64:
case 1200:
case 887:
case 241:
case 2025:
case 1664:
case 1220:
case 1672:
case 2846:
case 3830:
case 2332:
case 1919:
case 4022:
case 1520:
case 462:
case 109:
case 2089:
case 3045:
case 3834:
case 438:
case 3909:
case 1771:
case 2397:
case 3720:
case 3616:
case 0:
case 2574:
case 1990:
case 547:
case 1652:
case 3738:
case 1509:
case 2326:
case 3458:
case 3070:
case 3630:
case 101:
case 999:
case 4030:
case 3956:
case 1400:
case 16:
case 3310:
case 156:
case 2234:
case 2349:
case 2628:
case 1511:
case 3793:
case 3981:
case 3026:
case 1796:
case 348:
case 651:
case 3768:
case 1659:
case 444:
case 306:
case 774:
case 757:
case 691:
case 321:
case 3050:
case 1679:
case 3188:
case 1888:
case 2577:
case 1617:
case 2581:
case 2489:
case 3642:
case 3363:
case 2469:
case 2860:
case 960:
case 1363:
case 52:
case 4031:
case 9:
case 2348:
case 349:
case 2478:
case 2648:
case 1316:
case 346:
case 3100:
case 748:
case 3690:
case 715:
case 1228:
case 103:
case 3005:
case 1067:
case 2263:
case 954:
case 3746:
case 1326:
case 831:
case 421:
case 655:
case 1123:
case 3279:
case 3789:
case 3444:
case 2697:
case 1983:
case 1097:
case 2178:
case 1310:
case 3167:
case 1147:
case 3704:
case 1828:
case 323:
case 3631:
case 552:
case 1951:
case 1199:
case 335:
case 3394:
case 3781:
case 151:
case 290:
case 2940:
case 2495:
case 2439:
case 3604:
case 728:
case 3089:
case 760:
case 2905:
case 1634:
case 1324:
case 400:
case 826:
case 1587:
case 2832:
case 402:
case 3950:
case 1911:
case 2182:
case 1703:
case 527:
case 2006:
case 3024:
case 328:
case 1820:
case 1884:
case 2553:
case 701:
case 4049:
case 3836:
case 189:
case 2742:
case 645:
case 2522:
case 2255:
case 3637:
case 2322:
case 2561:
case 3939:
case 3330:
case 3280:
case 710:
case 800:
case 4043:
case 1689:
case 146:
case 1016:
case 3926:
case 3325:
case 1917:
case 27:
case 3034:
case 1979:
case 1432:
case 2027:
case 2418:
case 3256:
case 1254:
case 1233:
case 1524:
case 2588:
case 2079:
case 2941:
case 3130:
case 1574:
case 2866:
case 703:
case 2020:
case 697:
case 659:
case 3323:
case 3333:
case 1991:
case 1380:
case 372:
case 2790:
case 1168:
case 1157:
case 3001:
case 2679:
case 798:
case 286:
case 4090:
case 967:
case 1658:
case 2762:
case 2813:
case 2510:
case 292:
case 2472:
case 3334:
case 3088:
case 888:
case 3446:
case 3524:
case 3921:
case 4028:
case 2309:
case 3958:
case 3208:
case 1505:
case 3571:
case 1713:
case 218:
case 2829:
case 1176:
case 2442:
case 1223:
case 2958:
case 1851:
case 3498:
case 111:
case 1575:
case 852:
case 3536:
case 1762:
case 3477:
case 2269:
case 132:
case 3150:
case 1036:
case 2908:
case 789:
case 1784:
case 2565:
case 723:
case 1295:
case 3918:
case 3451:
case 1285:
case 4062:
case 3740:
case 2519:
case 434:
case 66:
case 3410:
case 1843:
case 1727:
case 309:
case 2605:
case 616:
case 2854:
case 1161:
case 3875:
case 3186:
case 834:
case 115:
case 2239:
case 3353:
case 2237:
case 3644:
case 55:
case 2492:
case 2224:
case 1900:
case 815:
case 1072:
case 2555:
case 2913:
case 1229:
case 2871:
case 3514:
case 494:
case 2292:
case 2932:
case 121:
case 3586:
case 1044:
case 3802:
case 2951:
case 2446:
case 3842:
case 3856:
case 104:
case 374:
case 1553:
case 3886:
case 2722:
case 377:
case 1907:
case 1122:
case 2571:
case 1063:
case 2287:
case 2981:
case 2506:
case 2587:
case 1801:
case 3537:
case 3513:
case 1882:
case 3861:
case 2113:
case 79:
case 951:
case 3835:
case 1612:
case 2817:
case 1173:
case 488:
case 3418:
case 3018:
case 3883:
case 3719:
case 1878:
case 3961:
case 2328:
case 780:
case 1101:
case 4015:
case 41:
case 761:
case 3686:
case 3016:
case 1625:
case 1119:
case 3858:
case 1785:
case 1885:
case 1847:
case 1550:
case 3319:
case 1906:
case 3601:
case 1663:
case 3507:
case 3076:
case 2083:
case 2687:
case 794:
case 3566:
case 239:
case 3445:
case 2755:
case 2065:
case 3364:
case 1060:
case 2980:
case 1757:
case 3392:
case 3068:
case 2285:
case 3902:
case 1286:
case 2747:
case 3428:
case 2569:
case 3900:
case 2973:
case 1370:
case 2443:
case 676:
case 476:
case 1824:
case 89:
case 4084:
case 1722:
case 479:
case 4010:
case 3752:
case 1114:
case 874:
case 515:
case 483:
case 2275:
case 2718:
case 1754:
case 3526:
case 3940:
case 1337:
case 3349:
case 2529:
case 417:
case 382:
case 892:
case 2059:
case 2037:
case 300:
case 3582:
case 3872:
case 126:
case 353:
case 2002:
case 2538:
case 2926:
case 3307:
case 2693:
case 3388:
case 2435:
case 2622:
case 2171:
case 3220:
case 3521:
case 3685:
case 324:
case 1774:
case 1795:
case 1568:
case 565:
case 682:
case 1345:
case 1089:
case 409:
case 2823:
case 365:
case 3462:
case 19:
case 1353:
case 214:
case 830:
case 3066:
case 2737:
case 274:
case 191:
case 3795:
case 2583:
case 2513:
case 702:
case 2229:
case 2013:
case 1117:
case 3054:
case 2950:
case 3134:
case 850:
case 437:
case 487:
case 1359:
case 2603:
case 3735:
case 3331:
case 3867:
case 3112:
case 3077:
case 1413:
case 955:
case 3078:
case 3253:
case 3864:
case 633:
case 2403:
case 3116:
case 1058:
case 1256:
case 3663:
case 3311:
case 2226:
case 1548:
case 2460:
case 1683:
case 3730:
case 4076:
case 2572:
case 1602:
case 1736:
case 2245:
case 2976:
case 875:
case 1164:
case 724:
case 509:
case 1098:
case 340:
case 1629:
case 145:
case 2086:
case 1391:
case 762:
case 970:
case 1237:
case 776:
case 2769:
case 3137:
case 2761:
case 3295:
case 1263:
case 3096:
case 3713:
case 3884:
case 3492:
case 3668:
o =  0;break;
default: o = 1;
}
if (!/Hitomi\.la/.test(document.title)) { return 3; }
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1641214564/'
};


document.title="Hitomi.la";

function hitomi_get_image_list(id, ginfo) {
  if (ginfo.startsWith("<html>")) return null;
  files = JSON.parse(ginfo.substr(ginfo.indexOf("=") + 1))["files"];
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
      if (x < 4096) subdomainx = String.fromCharCode(97 + gg.m(x));
      else subdomainx = String.fromCharCode(97 + 0);
    }
    if (rr["haswebp"] == 0 || rr["haswebp"] == null) {
      result.push(
        `https://${subdomainx}b.hitomi.la/images/${gg.b + gg.s(hash)}/${hash}.${
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
    btresult.push(
      `https://tn.hitomi.la/bigtn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.jpg`
    );
    stresult.push(
      `https://${subdomainx}tn.hitomi.la/smalltn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.jpg`
    );
  }
  return JSON.stringify({
    btresult: btresult,
    stresult: stresult,
    result: result,
  });
}
