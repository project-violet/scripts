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
case 1760:
case 784:
case 2268:
case 2237:
case 831:
case 962:
case 1911:
case 3443:
case 2641:
case 1276:
case 1402:
case 1135:
case 3619:
case 1721:
case 1146:
case 1513:
case 2419:
case 422:
case 3785:
case 1980:
case 1471:
case 1481:
case 2294:
case 1149:
case 139:
case 577:
case 3603:
case 3733:
case 2607:
case 2723:
case 761:
case 1297:
case 4034:
case 540:
case 636:
case 3940:
case 1999:
case 2079:
case 2533:
case 2865:
case 1857:
case 2455:
case 1094:
case 3604:
case 2111:
case 391:
case 1405:
case 1850:
case 3728:
case 3631:
case 101:
case 3848:
case 1041:
case 106:
case 1304:
case 17:
case 1648:
case 906:
case 3426:
case 1511:
case 2091:
case 2985:
case 1891:
case 3133:
case 3480:
case 1075:
case 2745:
case 3387:
case 955:
case 2024:
case 2936:
case 3507:
case 2511:
case 3362:
case 991:
case 3636:
case 668:
case 4059:
case 2068:
case 2924:
case 2951:
case 1408:
case 305:
case 645:
case 2659:
case 2724:
case 1131:
case 1548:
case 1602:
case 2210:
case 2986:
case 3525:
case 3290:
case 1242:
case 3899:
case 3095:
case 1615:
case 1726:
case 2220:
case 3535:
case 793:
case 3513:
case 1845:
case 2666:
case 2821:
case 2655:
case 3209:
case 762:
case 3259:
case 1858:
case 2696:
case 3272:
case 2552:
case 3100:
case 1245:
case 3808:
case 3440:
case 3316:
case 1679:
case 3882:
case 718:
case 399:
case 872:
case 3536:
case 2499:
case 3688:
case 1494:
case 1497:
case 3223:
case 2161:
case 421:
case 2722:
case 3082:
case 2406:
case 212:
case 1138:
case 1713:
case 2021:
case 3341:
case 3074:
case 3432:
case 771:
case 89:
case 3695:
case 2668:
case 69:
case 2013:
case 2378:
case 730:
case 2270:
case 3370:
case 916:
case 4001:
case 3172:
case 3377:
case 1978:
case 2888:
case 3264:
case 1541:
case 2561:
case 1438:
case 3806:
case 1314:
case 2993:
case 845:
case 2572:
case 675:
case 2742:
case 1844:
case 960:
case 479:
case 3183:
case 3839:
case 3757:
case 2727:
case 1847:
case 2871:
case 3913:
case 2942:
case 3313:
case 3895:
case 120:
case 3647:
case 1457:
case 1722:
case 2129:
case 3709:
case 1436:
case 2363:
case 2340:
case 2846:
case 619:
case 1822:
case 1148:
case 3599:
case 517:
case 1130:
case 3875:
case 1581:
case 3541:
case 2394:
case 3182:
case 956:
case 2915:
case 2262:
case 3215:
case 1461:
case 2809:
case 4086:
case 53:
case 2052:
case 1456:
case 4008:
case 15:
case 1924:
case 2176:
case 798:
case 352:
case 3357:
case 2497:
case 2898:
case 3977:
case 3754:
case 729:
case 2312:
case 2087:
case 2760:
case 3294:
case 373:
case 1357:
case 203:
case 3375:
case 280:
case 3963:
case 2509:
case 1819:
case 3160:
case 1127:
case 455:
case 1483:
case 1444:
case 814:
case 530:
case 1958:
case 2380:
case 2539:
case 1339:
case 824:
case 2573:
case 2954:
case 3433:
case 2826:
case 1450:
case 1178:
case 3585:
case 236:
case 744:
case 1761:
case 1698:
case 2437:
case 742:
case 2023:
case 2962:
case 1142:
case 617:
case 1746:
case 285:
case 1506:
case 899:
case 3078:
case 3383:
case 970:
case 156:
case 3246:
case 54:
case 3745:
case 758:
case 1057:
case 1040:
case 1201:
case 2401:
case 2155:
case 1055:
case 2449:
case 884:
case 834:
case 1965:
case 2798:
case 2950:
case 1414:
case 2714:
case 3040:
case 3823:
case 2705:
case 1102:
case 3227:
case 1783:
case 1191:
case 2913:
case 949:
case 1926:
case 3107:
case 2777:
case 293:
case 826:
case 3257:
case 2:
case 3600:
case 436:
case 1902:
case 3718:
case 2324:
case 2645:
case 3612:
case 3888:
case 663:
case 312:
case 3371:
case 576:
case 3924:
case 3677:
case 3407:
case 3967:
case 382:
case 3329:
case 1846:
case 3143:
case 210:
case 1975:
case 2496:
case 2906:
case 2247:
case 1235:
case 3113:
case 3114:
case 3379:
case 6:
case 3540:
case 913:
case 610:
case 456:
case 1963:
case 963:
case 461:
case 2084:
case 2657:
case 450:
case 1462:
case 1950:
case 471:
case 1181:
case 615:
case 1628:
case 3122:
case 3782:
case 3743:
case 1662:
case 1018:
case 2852:
case 2996:
case 1472:
case 3320:
case 1368:
case 169:
case 1086:
case 2436:
case 113:
case 3091:
case 1821:
case 3991:
case 3622:
case 2824:
case 627:
case 3897:
case 4042:
case 3708:
case 1571:
case 1859:
case 3821:
case 3306:
case 640:
case 2460:
case 406:
case 3846:
case 1254:
case 2551:
case 302:
case 2374:
case 3633:
case 2104:
case 2660:
case 1031:
case 1122:
case 3557:
case 3043:
case 2601:
case 674:
case 1083:
case 1407:
case 1708:
case 3231:
case 3969:
case 2681:
case 2121:
case 777:
case 3973:
case 3984:
case 1279:
case 4078:
case 2100:
case 1273:
case 379:
case 3651:
case 3115:
case 3481:
case 2007:
case 2418:
case 1564:
case 3248:
case 2632:
case 1913:
case 787:
case 190:
case 1864:
case 2946:
case 1389:
case 2182:
case 3771:
case 3809:
case 3534:
case 3382:
case 174:
case 2690:
case 887:
case 2611:
case 2316:
case 3960:
case 2107:
case 3693:
case 888:
case 1020:
case 3667:
case 2173:
case 3295:
case 1663:
case 2837:
case 2348:
case 1010:
case 552:
case 4037:
case 810:
case 638:
case 1567:
case 521:
case 2410:
case 4073:
case 4088:
case 3832:
case 987:
case 2862:
case 3335:
case 1454:
case 3237:
case 3326:
case 1688:
case 2344:
case 2253:
case 1747:
case 3526:
case 3442:
case 492:
case 1036:
case 1295:
case 2626:
case 2493:
case 1732:
case 549:
case 3501:
case 3131:
case 2620:
case 1865:
case 4067:
case 1479:
case 1451:
case 1830:
case 76:
case 2923:
case 3308:
case 2027:
case 3276:
case 2470:
case 589:
case 4056:
case 1731:
case 748:
case 43:
case 3618:
case 2709:
case 3544:
case 1790:
case 3620:
case 3602:
case 1680:
case 3914:
case 2469:
case 3233:
case 3088:
case 2360:
case 3795:
case 1003:
case 679:
case 85:
case 1394:
case 2159:
case 1982:
case 1622:
case 3022:
case 481:
case 278:
case 4016:
case 2240:
case 193:
case 3746:
case 3083:
case 2598:
case 1244:
case 863:
case 3080:
case 2725:
case 3398:
case 86:
case 2088:
case 2478:
case 1163:
case 1908:
case 3353:
case 1932:
case 2003:
case 3059:
case 1275:
case 3580:
case 1310:
case 3753:
case 4005:
case 3669:
case 653:
case 1729:
case 3751:
case 639:
case 3207:
case 231:
case 3675:
case 2373:
case 2832:
case 1719:
case 676:
case 3368:
case 1534:
case 3990:
case 62:
case 3909:
case 1592:
case 3852:
case 841:
case 268:
case 3001:
case 3452:
case 2139:
case 225:
case 401:
case 3968:
case 3876:
case 2800:
case 3716:
case 2177:
case 2014:
case 2432:
case 112:
case 3199:
case 659:
case 1737:
case 3951:
case 2282:
case 2984:
case 2635:
case 397:
case 10:
case 1601:
case 3369:
case 3181:
case 1039:
case 2790:
case 3301:
case 1059:
case 3262:
case 2884:
case 1206:
case 2076:
case 3136:
case 2980:
case 115:
case 1302:
case 767:
case 2649:
case 2674:
case 924:
case 820:
case 3983:
case 2956:
case 833:
case 1806:
case 227:
case 781:
case 769:
case 922:
case 1092:
case 2677:
case 2788:
case 16:
case 2684:
case 1071:
case 680:
case 2532:
case 3052:
case 1812:
case 1476:
case 1325:
case 2780:
case 145:
case 2718:
case 340:
case 3770:
case 2474:
case 1524:
case 2330:
case 3905:
case 71:
case 1067:
case 626:
case 2008:
case 2060:
case 2582:
case 133:
case 1687:
case 418:
case 1520:
case 3139:
case 705:
case 1699:
case 772:
case 2158:
case 4015:
case 1700:
case 3798:
case 2300:
case 3051:
case 3661:
case 827:
case 3916:
case 240:
case 3067:
case 2550:
case 584:
case 2230:
case 3270:
case 3015:
case 414:
case 3640:
case 2415:
case 4068:
case 3337:
case 3532:
case 1063:
case 314:
case 3029:
case 3679:
case 1743:
case 3105:
case 2721:
case 3303:
case 3338:
case 1774:
case 2392:
case 91:
case 2782:
case 3149:
case 2628:
case 2707:
case 2624:
case 181:
case 1331:
case 3575:
case 3946:
case 869:
case 3444:
case 2546:
case 3238:
case 3062:
case 1264:
case 1374:
case 1538:
case 347:
case 3932:
case 3242:
case 2842:
case 2072:
case 3775:
case 3559:
case 3925:
case 1433:
case 2242:
case 2411:
case 3912:
case 1166:
case 1646:
case 1543:
case 3696:
case 1453:
case 2504:
case 3045:
case 393:
case 2969:
case 3331:
case 2491:
case 536:
case 2193:
case 2280:
case 1076:
case 2204:
case 3997:
case 564:
case 1725:
case 563:
case 3179:
case 2523:
case 2179:
case 3455:
case 2010:
case 2043:
case 20:
case 1780:
case 3167:
case 2603:
case 2106:
case 4013:
case 3626:
case 1521:
case 3595:
case 3964:
case 1048:
case 2376:
case 509:
case 1229:
case 3579:
case 3175:
case 2812:
case 2341:
case 3768:
case 2695:
case 2835:
case 3191:
case 3721:
case 175:
case 1002:
case 2662:
case 3690:
case 1509:
case 1233:
case 1720:
case 3087:
case 3194:
case 1280:
case 805:
case 3931:
case 3116:
case 2236:
case 2426:
case 3176:
case 737:
case 2856:
case 217:
case 3342:
case 1907:
case 146:
case 1111:
case 1468:
case 927:
case 1391:
case 3980:
case 3547:
case 311:
case 4014:
case 3726:
case 2145:
case 2998:
case 2799:
case 3505:
case 2634:
case 513:
case 2000:
case 1681:
case 2867:
case 3607:
case 84:
case 2711:
case 2454:
case 192:
case 2116:
case 1123:
case 1693:
case 2219:
case 1823:
case 1629:
case 3283:
case 611:
case 2260:
case 457:
case 2473:
case 3682:
case 1190:
case 523:
case 2794:
case 648:
case 3218:
case 1406:
case 3712:
case 3097:
case 1767:
case 1992:
case 2970:
case 1910:
case 2130:
case 319:
case 731:
case 3126:
case 2583:
case 2959:
case 1288:
case 3441:
case 3850:
case 3617:
case 1909:
case 1753:
case 918:
case 3885:
case 3008:
case 792:
case 4077:
case 331:
case 1696:
case 2417:
case 1533:
case 3173:
case 3258:
case 1742:
case 1885:
case 3345:
case 2734:
case 1359:
case 1211:
case 3961:
case 2435:
case 1088:
case 1510:
case 1227:
case 259:
case 1953:
case 1880:
case 3681:
case 2775:
case 3241:
case 2839:
case 2391:
case 894:
case 3720:
case 446:
case 1659:
case 2183:
case 2284:
case 389:
case 1073:
case 59:
case 1157:
case 14:
case 2434:
case 1192:
case 3565:
case 3470:
case 2413:
case 3972:
case 1871:
case 2567:
case 649:
case 329:
case 3343:
case 2586:
case 1716:
case 2142:
case 2083:
case 2012:
case 3793:
case 2101:
case 2638:
case 209:
case 4033:
case 3093:
case 1554:
case 2057:
case 184:
case 2584:
case 1219:
case 463:
case 1714:
case 1209:
case 2897:
case 1226:
case 2778:
case 1586:
case 3623:
case 876:
case 2181:
case 1536:
case 3780:
case 2700:
case 2819:
case 3386:
case 2168:
case 2562:
case 2822:
case 2206:
case 1293:
case 1800:
case 1531:
case 1107:
case 3588:
case 73:
case 2838:
case 3668:
case 3348:
case 2349:
case 3550:
case 2070:
case 408:
case 3581:
case 1966:
case 3596:
case 2910:
case 2955:
case 1781:
case 2963:
case 1876:
case 1626:
case 1366:
case 954:
case 1987:
case 3576:
case 3228:
case 2036:
case 2018:
case 3147:
case 853:
case 2967:
case 2810:
case 3522:
case 2944:
case 782:
case 1090:
case 3038:
case 269:
case 1669:
case 2081:
case 2103:
case 2522:
case 2563:
case 2495:
case 1473:
case 4076:
case 995:
case 2148:
case 1527:
case 2366:
case 1809:
case 1412:
case 3724:
case 3330:
case 2235:
case 2830:
case 1404:
case 3421:
case 2930:
case 2811:
case 708:
case 3291:
case 2165:
case 3410:
case 1762:
case 1991:
case 967:
case 3180:
case 907:
case 3740:
case 977:
case 2878:
case 132:
case 739:
case 938:
case 4055:
case 1165:
case 546:
case 58:
case 685:
case 4041:
case 2741:
case 1928:
case 309:
case 1613:
case 396:
case 756:
case 296:
case 2127:
case 2317:
case 1929:
case 3277:
case 3879:
case 2773:
case 2350:
case 412:
case 1136:
case 2492:
case 2085:
case 3958:
case 2041:
case 290:
case 2667:
case 3736:
case 2022:
case 1246:
case 2257:
case 3325:
case 1416:
case 1522:
case 162:
case 2530:
case 2269:
case 2771:
case 2291:
case 551:
case 1007:
case 1141:
case 3652:
case 508:
case 3119:
case 3044:
case 2754:
case 1572:
case 4066:
case 2246:
case 795:
case 320:
case 1486:
case 1664:
case 1072:
case 1892:
case 3637:
case 3702:
case 3054:
case 3765:
case 2654:
case 1345:
case 1125:
case 3234:
case 3719:
case 196:
case 1080:
case 710:
case 2616:
case 3929:
case 2080:
case 1587:
case 607:
case 1011:
case 2191:
case 3697:
case 117:
case 3635:
case 3027:
case 3548:
case 462:
case 779:
case 3634:
case 1271:
case 2151:
case 599:
case 1666:
case 2803:
case 1943:
case 1173:
case 603:
case 3764:
case 3508:
case 3469:
case 4003:
case 370:
case 2960:
case 2731:
case 936:
case 2402:
case 194:
case 3910:
case 144:
case 3166:
case 1855:
case 592:
case 2889:
case 398:
case 712:
case 1480:
case 1323:
case 2439:
case 1872:
case 2154:
case 2137:
case 882:
case 4061:
case 301:
case 2548:
case 249:
case 3351:
case 404:
case 594:
case 1326:
case 3762:
case 4064:
case 213:
case 650:
case 3268:
case 866:
case 3863:
case 2866:
case 2806:
case 2094:
case 3569:
case 1775:
case 2858:
case 3497:
case 326:
case 2038:
case 2065:
case 2274:
case 2054:
case 1214:
case 3006:
case 1265:
case 2520:
case 1989:
case 2119:
case 419:
case 1542:
case 3216:
case 1186:
case 2692:
case 3312:
case 1834:
case 2576:
case 41:
case 208:
case 3393:
case 2034:
case 3403:
case 2361:
case 2735:
case 3415:
case 1329:
case 2922:
case 1429:
case 1901:
case 903:
case 612:
case 2307:
case 2713:
case 2979:
case 3523:
case 550:
case 2464:
case 3077:
case 506:
case 1287:
case 380:
case 3292:
case 3137:
case 239:
case 1365:
case 2198:
case 3564:
case 2370:
case 460:
case 2733:
case 1248:
case 1284:
case 941:
case 2894:
case 2331:
case 1802:
case 1317:
case 2817:
case 1045:
case 554:
case 2526:
case 3302:
case 3427:
case 1498:
case 3627:
case 1428:
case 2334:
case 323:
case 1936:
case 1673:
case 3956:
case 1598:
case 3170:
case 3779:
case 3424:
case 427:
case 2801:
case 2902:
case 4074:
case 1625:
case 1803:
case 727:
case 1561:
case 127:
case 18:
case 3788:
case 561:
case 3835:
case 2896:
case 1324:
case 634:
case 3323:
case 464:
case 2305:
case 149:
case 2554:
case 843:
case 596:
case 2665:
case 306:
case 3275:
case 3395:
case 1856:
case 3212:
case 292:
case 2538:
case 1882:
case 1578:
case 2281:
case 3185:
case 220:
case 1224:
case 4069:
case 1574:
case 3747:
case 475:
case 2112:
case 1702:
case 411:
case 604:
case 531:
case 1241:
case 547:
case 440:
case 2853:
case 3838:
case 652:
case 2429:
case 3568:
case 2680:
case 1518:
case 1485:
case 2093:
case 3298:
case 424:
case 3533:
case 1593:
case 3766:
case 1128:
case 673:
case 3676:
case 2880:
case 1306:
case 3772:
case 288:
case 2694:
case 978:
case 1119:
case 3263:
case 1985:
case 3687:
case 2994:
case 1431:
case 3492:
case 3211:
case 1651:
case 1434:
case 2347:
case 3163:
case 585:
case 1848:
case 2046:
case 2574:
case 1168:
case 1972:
case 8:
case 545:
case 1544:
case 2768:
case 3224:
case 1134:
case 1104:
case 2074:
case 981:
case 3942:
case 529:
case 2272:
case 1655:
case 3758:
case 2517:
case 559:
case 4035:
case 134:
case 1779:
case 817:
case 1959:
case 262:
case 2133:
case 3521:
case 191:
case 973:
case 308:
case 1671:
case 3810:
case 1597:
case 2792:
case 141:
case 3545:
case 4018:
case 324:
case 3933:
case 3347:
case 126:
case 1537:
case 2973:
case 2991:
case 1307:
case 2543:
case 946:
case 1621:
case 2706:
case 1064:
case 2988:
case 295:
case 3672:
case 264:
case 3488:
case 3188:
case 2387:
case 1239:
case 1046:
case 1903:
case 3418:
case 186:
case 3017:
case 1935:
case 3908:
case 2521:
case 1786:
case 3148:
case 3828:
case 349:
case 2472:
case 378:
case 1258:
case 2534:
case 1415:
case 3949:
case 1715:
case 871:
case 1870:
case 228:
case 2404:
case 1505:
case 3405:
case 2590:
case 1200:
case 2354:
case 3324:
case 753:
case 2055:
case 2591:
case 3475:
case 3332:
case 1558:
case 1150:
case 2934:
case 1185:
case 3285:
case 3089:
case 1933:
case 3004:
case 3092:
case 1210:
case 2118:
case 304:
case 159:
case 3723:
case 2885:
case 206:
case 1393:
case 2990:
case 3397:
case 3938:
case 1109:
case 943:
case 3003:
case 890:
case 1160:
case 1559:
case 3555:
case 2774:
case 2249:
case 735:
case 2188:
case 2156:
case 1182:
case 3198:
case 892:
case 2113:
case 330:
case 2609:
case 3028:
case 114:
case 1875:
case 583:
case 3586:
case 751:
case 3392:
case 2209:
case 409:
case 2757:
case 2683:
case 1916:
case 3730:
case 2467:
case 3939:
case 501:
case 3159:
case 375:
case 1825:
case 2738:
case 686:
case 3158:
case 1723:
case 2178:
case 107:
case 947:
case 720:
case 3025:
case 142:
case 3504:
case 334:
case 2613:
case 2399:
case 385:
case 3460:
case 2328:
case 2040:
case 327:
case 2048:
case 2710:
case 1384:
case 3699:
case 3845:
case 1084:
case 1634:
case 3524:
case 2859:
case 3094:
case 1552:
case 333:
case 3169:
case 200:
case 3349:
case 2004:
case 1270:
case 3874:
case 1787:
case 2381:
case 1638:
case 1894:
case 1301:
case 2971:
case 4038:
case 942:
case 218:
case 699:
case 1776:
case 1881:
case 1103:
case 1563:
case 2484:
case 2095:
case 3437:
case 2592:
case 1635:
case 1489:
case 3729:
case 2766:
case 2311:
case 2298:
case 1387:
case 2271:
case 3414:
case 2855:
case 3783:
case 1419:
case 2428:
case 2232:
case 2412:
case 1920:
case 3381:
case 2480:
case 3744:
case 386:
case 3451:
case 1249:
case 1044:
case 2653:
case 1218:
case 104:
case 1807:
case 2215:
case 2726:
case 1777:
case 2343:
case 3811:
case 1893:
case 2919:
case 2059:
case 1828:
case 998:
case 857:
case 3123:
case 905:
case 94:
case 3707:
case 2293:
case 1988:
case 3344:
case 1549:
case 2593:
case 1749:
case 821:
case 4095:
case 3869:
case 3037:
case 2322:
case 1942:
case 1886:
case 2899:
case 3966:
case 859:
case 733:
case 3917:
case 1033:
case 454:
case 3680:
case 790:
case 719:
case 2217:
case 1831:
case 3220:
case 1496:
case 2445:
case 4045:
case 2658:
case 3954:
case 2939:
case 2141:
case 2765:
case 624:
case 3197:
case 3007:
case 3035:
case 3844:
case 759:
case 1649:
case 4080:
case 3851:
case 1829:
case 294:
case 2614:
case 1849:
case 56:
case 1161:
case 623:
case 109:
case 2728:
case 1643:
case 3425:
case 1328:
case 678:
case 1502:
case 3374:
case 137:
case 522:
case 1692:
case 21:
case 3472:
case 3817:
case 2096:
case 223:
case 2231:
case 2162:
case 2868:
case 556:
case 862:
case 696:
case 677:
case 3698:
case 1764:
case 2015:
case 3947:
case 4087:
case 1143:
case 937:
case 800:
case 148:
case 1098:
case 3657:
case 395:
case 3653:
case 3130:
case 1198:
case 437:
case 2938:
case 515:
case 1765:
case 216:
case 235:
case 848:
case 2796:
case 2213:
case 3081:
case 202:
case 2211:
case 3252:
case 542:
case 1005:
case 1268:
case 3086:
case 1957:
case 261:
case 2528:
case 2308:
case 1984:
case 3563:
case 3240:
case 219:
case 172:
case 1420:
case 1711:
case 345:
case 1701:
case 3202:
case 1154:
case 1205:
case 1751:
case 3862:
case 2346:
case 3748:
case 990:
case 593:
case 3486:
case 3261:
case 252:
case 470:
case 3219:
case 1116:
case 1752:
case 29:
case 1418:
case 3530:
case 2965:
case 2892:
case 1603:
case 3791:
case 736:
case 1689:
case 3439:
case 260:
case 337:
case 2580:
case 2329:
case 925:
case 3518:
case 2633:
case 3012:
case 325:
case 2701:
case 1093:
case 372:
case 3727:
case 499:
case 267:
case 2170:
case 854:
case 1805:
case 2703:
case 880:
case 31:
case 1771:
case 3318:
case 1050:
case 2524:
case 2640:
case 2828:
case 2940:
case 1009:
case 2160:
case 2102:
case 4019:
case 1728:
case 3446:
case 289:
case 2144:
case 3562:
case 313:
case 1437:
case 2208:
case 893:
case 2064:
case 3855:
case 570:
case 2471:
case 2762:
case 2397:
case 3168:
case 1289:
case 3287:
case 3868:
case 726:
case 791:
case 1478:
case 1467:
case 343:
case 3664:
case 2126:
case 1482:
case 2841:
case 3515:
case 476:
case 1463:
case 1425:
case 597:
case 1231:
case 2732:
case 3196:
case 2297:
case 1712:
case 1590:
case 1230:
case 620:
case 3643:
case 1171:
case 3725:
case 537:
case 2730:
case 1303:
case 3273:
case 1794:
case 2815:
case 948:
case 511:
case 3864:
case 4093:
case 2071:
case 2900:
case 923:
case 1905:
case 1321:
case 1993:
case 2303:
case 2321:
case 281:
case 3110:
case 1298:
case 274:
case 1535:
case 1167:
case 544:
case 3878:
case 1038:
case 3608:
case 618:
case 19:
case 4057:
case 3388:
case 37:
case 3389:
case 850:
case 4085:
case 2989:
case 2617:
case 3566:
case 3140:
case 519:
case 170:
case 3235:
case 496:
case 500:
case 478:
case 2907:
case 3494:
case 1906:
case 3429:
case 1874:
case 2605:
case 447:
case 760:
case 1199:
case 1623:
case 2123:
case 3819:
case 3434:
case 1354:
case 3904:
case 2462:
case 1027:
case 273:
case 2109:
case 3244:
case 3670:
case 3659:
case 557:
case 1452:
case 1449:
case 2124:
case 3926:
case 3629:
case 4032:
case 443:
case 3461:
case 847:
case 715:
case 2431:
case 2664:
case 915:
case 2315:
case 1503:
case 24:
case 3201:
case 2883:
case 1065:
case 2134:
case 1676:
case 3892:
case 811:
case 4024:
case 1464:
case 57:
case 3512:
case 61:
case 1349:
case 199:
case 823:
case 1129:
case 3761:
case 2367:
case 1827:
case 3553:
case 819:
case 3713:
case 683:
case 66:
case 1484:
case 3571:
case 1591:
case 1392:
case 803:
case 3996:
case 2744:
case 518:
case 1868:
case 608:
case 684:
case 3305:
case 3955:
case 3315:
case 687:
case 883:
case 1938:
case 3419:
case 3314:
case 3593:
case 2577:
case 158:
case 2020:
case 466:
case 310:
case 1630:
case 111:
case 2699:
case 786:
case 1710:
case 3818:
case 2698:
case 2345:
case 630:
case 3812:
case 1736:
case 1263:
case 2637:
case 651:
case 1052:
case 22:
case 3391:
case 1422:
case 2067:
case 2881:
case 3096:
case 1636:
case 3858:
case 81:
case 1204:
case 47:
case 3674:
case 1951:
case 690:
case 1240:
case 250:
case 3409:
case 1056:
case 566:
case 3995:
case 179:
case 182:
case 3049:
case 3279:
case 666:
case 3601:
case 672:
case 2357:
case 788:
case 732:
case 3799:
case 3970:
case 2502:
case 979:
case 701:
case 2911:
case 3205:
case 2225:
case 2146:
case 2945:
case 642:
case 2941:
case 3872:
case 2180:
case 3490:
case 498:
case 968:
case 3364:
case 1207:
case 2405:
case 974:
case 1332:
case 1351:
case 1443:
case 1:
case 328:
case 2256:
case 1259:
case 1228:
case 344:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1658826001/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,1,0,1,0,1,0,1,1,0,0,1,1,0,0,0,1,0,1,1,1,0,1,0,0,1,1,1,0,0,0,0,1,0,0,0,1,0,1,0,1,1,0,0,1,1,0,0,1,1,0,1,1,1,1,1,0,1,0,1,0,1,1,1,1,1,0,0,1,0,0,0,0,1,1,1,1,0,0,1,1,0,1,1,0,1,1,1,1,1,0,0,0,0,1,0,1,1,0,1,1,0,0,1,1,0,1,1,1,1,0,1,1,1,0,0,1,0,0,1,0,0,1,0,0,1,0,1,1,0,0,1,1,1,1,0,1,1,0,0,1,1,1,1,1,0,0,0,1,1,0,1,1,0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,1,1,0,0,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,0,0,0,1,0,1,1,0,0,1,1,1,1,1,1,0,1,0,1,0,1,1,0,0,0,0,1,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,1,0,1,0,0,0,0,0,0,1,1,0,1,1,0,0,0,0,1,0,1,1,1,1,0,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,0,1,1,1,1,0,0,0,1,0,1,0,0,0,0,0,1,1,0,1,0,0,1,1,1,0,0,0,0,1,1,0,0,1,1,0,1,1,0,0,1,1,1,1,1,0,0,0,1,1,0,0,1,0,0,1,1,1,0,1,1,0,1,0,1,1,0,0,0,0,1,0,0,1,1,0,1,0,0,1,1,0,0,0,1,0,0,0,1,1,1,0,0,0,0,1,0,0,1,0,1,1,1,1,0,0,1,1,0,0,0,1,0,1,0,1,0,0,1,0,0,0,1,0,0,0,1,0,1,1,0,0,0,1,0,0,0,1,0,1,1,1,1,0,0,0,0,0,1,1,1,1,1,0,0,1,1,0,0,0,1,0,1,1,1,0,0,1,0,1,0,1,0,1,0,1,1,1,1,1,1,0,1,0,0,0,0,1,0,0,1,0,0,1,0,1,0,0,0,0,0,1,0,1,0,1,1,1,0,1,0,1,0,0,1,0,1,1,1,0,1,1,1,0,1,0,0,1,1,0,0,1,1,1,1,1,0,0,1,1,0,0,1,0,0,0,0,1,0,1,0,0,0,1,0,1,1,1,0,0,0,0,0,0,1,1,0,1,1,0,0,1,0,0,1,0,1,0,0,1,0,0,1,1,1,0,1,0,0,1,1,1,0,0,0,1,1,0,1,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,1,1,1,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0,1,0,1,0,0,1,0,1,1,1,0,0,1,0,0,0,0,1,1,0,1,1,0,0,0,0,0,0,1,1,0,0,0,1,1,1,1,1,0,0,1,0,0,0,1,0,1,1,0,0,0,1,0,1,1,0,0,1,1,1,0,1,0,1,0,1,1,1,0,1,0,1,0,1,0,0,0,0,0,1,0,1,0,1,1,0,0,0,0,1,0,1,0,0,1,1,1,0,1,0,1,0,0,0,0,1,0,0,0,0,0,0,0,1,1,1,1,0,0,1,0,0,1,1,1,0,1,0,1,0,0,0,0,1,1,1,0,0,0,0,0,1,1,0,0,1,1,1,0,1,0,1,1,1,0,0,0,0,1,0,1,0,1,1,0,1,0,0,0,1,0,0,1,0,1,1,0,0,1,0,1,1,0,0,0,1,1,1,0,1,0,1,0,0,1,0,1,0,1,0,0,1,1,1,1,0,1,0,1,0,1,0,1,1,0,0,1,1,0,0,1,1,1,1,1,0,1,0,1,0,0,0,0,0,0,1,1,1,1,0,1,0,1,1,1,0,0,0,0,0,0,1,0,1,0,1,1,0,0,0,1,0,1,0,0,0,1,0,1,1,1,1,0,1,0,1,0,1,0,0,0,0,0,0,1,1,0,0,1,1,0,1,1,0,0,1,0,0,1,0,1,1,0,1,1,0,1,1,1,0,0,0,1,1,1,0,1,1,1,0,0,0,1,1,1,0,1,0,0,1,0,1,1,1,0,1,1,0,0,0,1,0,0,1,0,1,0,1,0,0,0,1,1,1,1,1,1,1,0,1,0,0,0,1,0,0,1,0,1,1,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1,1,0,1,1,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,1,0,0,1,1,0,1,1,1,0,1,0,0,0,1,1,1,0,1,1,0,1,1,1,0,0,1,1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,1,1,0,1,1,1,0,1,0,1,0,0,1,1,1,0,1,0,1,0,1,0,0,1,1,1,1,1,0,1,1,0,0,0,0,1,0,0,0,0,0,1,1,0,0,1,1,1,0,1,0,0,0,0,0,0,1,1,1,1,1,0,0,1,0,0,0,0,1,0,1,1,0,1,1,1,0,0,0,0,1,0,1,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,0,1,0,1,1,0,1,0,0,0,0,0,1,1,1,0,0,1,1,0,0,0,1,1,0,1,0,0,1,0,0,1,0,1,0,0,0,0,1,0,1,0,1,1,1,1,1,1,1,0,0,1,0,1,1,1,1,0,0,1,1,0,1,1,0,0,1,0,1,1,1,1,1,1,1,0,0,1,1,0,1,1,0,0,0,1,0,0,1,0,1,0,0,1,1,0,1,1,1,0,1,1,0,1,1,0,0,1,0,1,1,1,0,0,1,0,0,0,1,0,1,0,1,1,1,0,1,0,1,0,1,1,1,1,0,1,0,1,0,0,1,1,1,0,1,0,1,1,0,1,0,1,0,1,1,0,0,1,0,0,0,1,0,0,1,1,1,1,1,1,0,0,0,1,1,1,1,0,0,1,0,1,1,0,1,0,1,1,1,1,0,0,0,1,0,1,1,0,1,1,0,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,1,1,1,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0,1,0,1,0,0,1,0,1,1,1,1,1,1,0,0,0,0,0,1,1,1,0,1,1,0,1,1,0,1,0,1,0,1,0,1,1,0,0,1,0,1,0,0,1,1,1,1,1,1,1,1,0,1,1,1,0,0,1,0,0,1,1,0,0,0,1,1,1,1,0,0,1,1,0,0,1,0,0,1,0,0,0,1,1,1,1,0,0,0,1,1,1,1,1,1,0,1,0,1,0,1,0,0,0,0,1,0,0,1,0,1,1,1,0,0,1,1,1,1,1,1,0,1,1,1,1,0,1,0,1,0,0,1,1,1,0,1,1,0,1,1,1,0,0,0,0,1,0,0,0,1,0,1,1,0,1,1,1,1,0,0,0,0,1,0,0,0,1,0,0,1,1,1,1,0,1,0,1,1,0,1,0,1,0,1,1,1,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,1,1,1,1,0,1,1,1,0,0,0,0,1,0,1,0,0,0,1,1,1,1,1,0,0,0,0,1,0,1,1,0,0,1,1,0,0,0,1,1,0,0,0,1,0,0,0,0,0,1,1,1,0,0,1,0,0,0,1,0,0,1,1,0,1,1,0,0,0,0,1,0,0,1,1,0,0,1,0,1,1,0,1,0,0,1,0,0,1,1,0,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,1,0,1,0,0,0,1,0,1,0,1,1,1,0,0,1,1,1,1,0,0,0,0,0,0,0,1,0,1,1,0,1,1,0,1,0,0,1,1,1,0,1,1,0,1,1,0,0,0,1,0,0,1,0,1,0,1,0,1,1,1,0,1,0,0,1,1,1,0,0,0,0,1,0,1,0,1,0,0,0,1,1,0,1,0,1,1,1,1,1,0,0,0,0,0,1,0,1,0,1,1,1,1,1,0,1,0,1,1,1,0,0,0,0,0,0,1,0,0,1,1,0,0,0,1,1,0,0,0,0,0,1,1,0,1,0,0,1,0,1,0,1,1,0,1,0,0,1,0,1,1,1,0,1,1,0,0,1,1,0,0,0,0,1,1,1,0,1,0,1,0,1,0,0,1,0,1,1,1,1,0,0,1,1,0,0,0,0,1,1,0,0,1,0,0,1,1,1,0,0,1,1,1,0,0,0,0,1,0,1,1,1,1,0,1,0,0,1,1,0,1,0,0,1,0,1,0,1,1,1,0,1,0,1,0,0,1,0,0,0,1,1,0,0,0,0,1,0,0,1,1,0,1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,0,0,0,0,0,1,1,0,1,0,0,1,1,1,1,0,1,1,1,0,0,1,0,0,0,0,1,1,0,1,1,1,0,1,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,1,1,0,0,0,1,0,1,0,0,1,1,1,0,0,0,0,1,0,1,0,1,1,0,1,0,1,0,1,0,1,1,1,0,1,1,0,0,0,1,1,0,0,1,1,0,1,0,0,1,1,0,0,1,1,1,0,0,0,0,1,0,0,0,0,0,1,1,1,0,0,0,0,1,1,1,0,1,0,0,0,0,1,0,1,1,0,1,0,1,1,0,1,0,0,1,0,1,0,0,1,1,1,0,0,1,1,1,0,1,0,0,0,1,0,0,1,0,1,0,1,0,1,0,1,0,1,1,0,1,0,0,0,1,0,0,1,0,1,0,1,1,1,1,1,0,1,0,0,0,1,0,1,0,1,1,0,1,1,1,0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,0,0,1,0,1,1,1,1,0,1,0,1,1,1,1,1,0,0,0,1,1,0,0,0,0,1,0,0,1,0,1,0,0,1,1,0,0,1,1,1,1,1,0,1,1,1,1,1,0,0,0,1,0,1,0,0,0,1,0,1,1,0,0,0,1,0,0,0,0,1,0,0,1,1,1,1,0,1,1,0,0,0,1,1,1,1,0,0,0,1,0,1,1,1,1,1,1,1,0,1,0,0,1,1,0,0,1,1,1,0,1,1,1,0,1,1,0,0,1,1,1,0,1,1,1,1,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,0,1,1,1,0,1,1,0,1,0,1,0,0,0,0,0,1,1,0,1,1,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,1,1,0,0,1,0,1,1,0,0,1,0,1,0,1,0,1,0,0,1,1,0,1,0,0,1,1,0,0,0,1,0,1,0,1,1,1,0,0,1,1,0,0,0,1,1,0,1,1,0,1,1,0,0,1,0,1,0,0,0,1,1,0,0,1,1,0,1,0,0,1,1,0,0,0,1,0,1,1,0,0,0,0,1,0,0,0,1,0,0,1,0,1,1,0,1,1,1,0,0,0,0,1,0,1,0,1,0,1,1,0,0,0,1,0,1,0,0,0,1,0,0,0,1,0,1,1,1,1,1,1,0,0,1,1,1,0,0,1,1,1,1,1,0,1,0,0,0,0,1,1,0,0,0,0,0,1,0,0,1,0,0,0,1,0,1,0,0,0,1,0,0,1,1,0,0,0,0,1,1,0,1,0,1,1,1,0,1,0,0,0,1,0,0,1,1,1,1,1,0,1,1,0,1,0,0,1,1,0,1,1,1,0,1,1,0,1,0,0,0,1,0,0,1,1,1,1,0,0,1,1,0,1,0,1,1,1,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,1,1,0,0,0,1,0,0,0,1,1,1,1,0,1,1,1,0,0,1,0,0,0,1,1,1,0,0,0,1,0,0,1,1,1,0,1,1,1,1,1,0,1,1,1,0,1,0,1,0,1,0,0,0,0,1,0,0,1,0,1,0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,1,0,1,0,1,1,0,0,0,0,1,1,0,1,0,0,1,1,1,0,1,1,0,1,0,1,1,0,1,1,0,0,0,1,0,0,0,0,1,1,0,0,1,0,1,1,0,1,1,0,0,1,0,1,0,1,0,1,0,0,0,1,0,0,0,0,1,1,0,1,1,1,1,1,0,0,1,1,1,1,1,1,1,0,1,0,1,1,0,1,0,0,1,0,0,0,1,1,1,1,0,1,1,1,0,0,1,1,0,1,1,1,1,1,0,1,0,1,1,0,0,1,0,1,1,0,0,1,1,0,0,1,0,0,1,0,0,0,1,0,0,1,0,0,0,1,1,1,1,1,1,1,0,0,1,1,0,0,1,0,1,1,0,1,1,1,0,1,0,1,1,0,0,1,1,1,0,0,1,1,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,1,1,1,0,1,1,1,0,0,0,0,0,0,1,0,0,0,1,1,0,1,0,0,1,0,0,1,1,1,0,1,0,1,1,0,1,1,0,0,0,0,0,0,1,1,1,1,0,1,0,0,1,0,0,0,0,0,1,0,0,1,0,1,1,1,1,0,1,0,1,1,1,0,1,1,0,1,0,0,1,1,0,0,0,1,1,0,0,0,0,1,1,1,0,0,0,1,0,1,1,0,1,1,0,1,0,0,1,0,0,1,1,1,1,1,0,1,0,0,0,1,0,0,0,0,1,1,1,1,1,1,1,1,0,1,0,1,0,0,1,1,1,1,0,1,0,0,1,0,1,1,0,1,0,0,1,1,0,0,0,1,1,0,0,1,1,1,1,0,1,1,0,1,0,1,0,1,0,0,1,1,0,1,0,0,1,1,0,1,0,0,1,0,0,0,0,0,0,0,1,1,1,1,0,1,0,0,0,0,1,1,0,0,1,1,1,1,1,0,1,0,1,0,1,1,0,1,1,0,1,0,1,0,0,1,1,0,0,1,1,1,0,1,0,1,0,0,0,1,0,0,0,0,0,1,0,0,1,1,0,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,0,1,0,0,1,0,1,0,0,0,1,0,0,1,0,1,0,1,0,0,1,1,0,0,0,1,0,0,1,1,0,1,1,0,1,1,0,1,1,0,1,0,0,1,0,1,1,1,0,0,0,1,0,1,0,1,1,1,1,1,0,1,0,0,0,0,0,1,0,0,0,1,1,1,1,1,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,1,0,0,1,1,0,0,0,1,1,0,1,0,1,1,0,0,1,1,1,1,0,0,0,0,0,1,1,1,0,0,1,1,0,1,1,1,0,0,0,0,0,1,0,0,1,1,0,0,0,1,0,1,0,0,0,1,1,0,1,1,1,1,1,1,1,1,0,1,0,0,1,0,1,1,1,0,1,1,0,0,1,1,1,0,0,0,0,1,0,1,1,0,0,1,1,1,1,1,1,1,0,0,1,0,0,1,1,1,0,1,0,0,1,0,0,1,0,0,1,1,0,1,1,0,1,1,0,1,1,0,1,0,1,0,1,0,0,0,0,0,1,1,1,0,1,1,0,0,0,0,1,0,1,0,0,0,0,1,1,0,1,0,0,0,1,0,0,1,0,0,1,1,0,1,0,1,1,1,1,0,1,1,1,0,0,1,0,1,1,1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1,0,1,1,1,1,0,0,1,0,0,0,1,1,0,1,0,1,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0,1,0,1,0,0,0,0,1,1,1,1,1,0,1,1,1,1,0,1,1,1,0,1,1,0,1,1,0,0,0,0,0,1,0,0,1,1,0,1,0,0,1,1,1,1,1,1,1,0,0,1,0,1,1,1,0,1,0,1,0,1,0,0,1,1,1,0,0,1,0,1,0,0,1,0,1,1,0,0,1,0,0,1,1,1,0,0,0,0,1,1,1,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1,0,0,1,0,0,0,0,1,0,1,1,0,0,1,0,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,1,0,1,1,0,1,1,1,1,1,1,1,0,0,0,0,0,0,1,0,1,0,0,1,0,1,1,1,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,1,1,0,0,0,0,1,0,0,1,0,0,0,0,1,0,1,1,1,0,1,1,1,0,1,0,1,1,0,1,1,1,0,0,1,1,0,1,1,1,1,0,1,0,1,1,1,0,0,1,0,1,0,1,0,1,0,0,1,1,1,0,1,1,1,1,1,1,0,0,0,0,1,0,0,1,1,0,0,0,0,0,1,1,0,0,1,1,0,0,0,1,1,0,1,1,0,1,0,0,1,0,1,1,1,0,0,1,1,0,0,1,1,1,0,0,1,1,0,0,1,0,1,1,0,0,0,1,1,0,0,1,0,1,1,0,1,1,0,0,0,1,1,1,1,0,1,1,1,1,1,0,0,1,0,1,0,0,1,1,0,1,0,0,0,1,0,1,0,1,1,1,0,0,1,0,0,1,0,0,0,1,1,1,0,1,0,0,1,0,0,1,0,1,1,0,1,1,1,1,1,1,1,1,1,0,1,0,1,0,1,1,0,0,1,1,0,0,1,1,0,1,0,1,0,0,1,0,0,1,0,1,0,0,1,0,0,0,0,0,0,1,1,1,0,0,1,1,1,0,1,0,0,0,1,0,0,0,0,1,0,1,0,0,1,0,1,1,1,0,1,1,1,0,0,0,1,0,0,0,1,1,1,1,1,0,1,0,1,0,1,1,1,0,1,0,0,0,0,0,1,0,1,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,];
var gg_b = "1658829601/";

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
