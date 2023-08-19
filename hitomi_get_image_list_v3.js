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
case 1238:
case 1741:
case 2029:
case 1903:
case 1335:
case 2799:
case 1048:
case 2705:
case 1408:
case 252:
case 544:
case 2668:
case 258:
case 3339:
case 1269:
case 2993:
case 3631:
case 2469:
case 1495:
case 376:
case 383:
case 3242:
case 2429:
case 1669:
case 1932:
case 3020:
case 1530:
case 482:
case 2148:
case 1079:
case 513:
case 1858:
case 3748:
case 356:
case 3023:
case 3421:
case 1849:
case 1611:
case 732:
case 3711:
case 151:
case 1762:
case 321:
case 3394:
case 2225:
case 1666:
case 1648:
case 95:
case 349:
case 853:
case 3607:
case 3012:
case 2410:
case 693:
case 3081:
case 2577:
case 1263:
case 1954:
case 207:
case 1199:
case 2529:
case 286:
case 4040:
case 3189:
case 3746:
case 642:
case 1859:
case 2316:
case 2611:
case 2390:
case 2564:
case 1398:
case 4050:
case 2490:
case 2301:
case 3594:
case 2024:
case 3586:
case 3227:
case 3945:
case 3408:
case 1754:
case 678:
case 2574:
case 1380:
case 885:
case 1916:
case 2666:
case 1577:
case 2200:
case 2674:
case 3835:
case 3839:
case 2602:
case 2958:
case 785:
case 3854:
case 2707:
case 1587:
case 2595:
case 2588:
case 411:
case 2426:
case 161:
case 1596:
case 3112:
case 3279:
case 3325:
case 2002:
case 2040:
case 1818:
case 1143:
case 2718:
case 2624:
case 1992:
case 102:
case 297:
case 4060:
case 2334:
case 3515:
case 3173:
case 3074:
case 688:
case 847:
case 960:
case 3717:
case 2156:
case 75:
case 927:
case 129:
case 2716:
case 1706:
case 3700:
case 3222:
case 1149:
case 3125:
case 3841:
case 3316:
case 2621:
case 620:
case 1362:
case 862:
case 381:
case 1015:
case 1496:
case 86:
case 2213:
case 2814:
case 3135:
case 186:
case 3786:
case 724:
case 856:
case 997:
case 2367:
case 3626:
case 1201:
case 4:
case 4010:
case 3265:
case 3413:
case 820:
case 1197:
case 2500:
case 2194:
case 2388:
case 2492:
case 3162:
case 1184:
case 3357:
case 1318:
case 1590:
case 3930:
case 460:
case 874:
case 2288:
case 3596:
case 1659:
case 3137:
case 3068:
case 2581:
case 3939:
case 2532:
case 25:
case 1740:
case 125:
case 327:
case 2692:
case 1475:
case 915:
case 1260:
case 2430:
case 2748:
case 3739:
case 130:
case 1819:
case 141:
case 3674:
case 3805:
case 3569:
case 1389:
case 2221:
case 2105:
case 1686:
case 2466:
case 2570:
case 1162:
case 3236:
case 3022:
case 1287:
case 2402:
case 366:
case 2146:
case 2126:
case 2591:
case 3205:
case 1770:
case 2198:
case 725:
case 2935:
case 2313:
case 470:
case 112:
case 3769:
case 335:
case 3429:
case 4018:
case 2143:
case 3998:
case 2937:
case 1057:
case 700:
case 3201:
case 3987:
case 2285:
case 3417:
case 917:
case 2703:
case 2507:
case 2895:
case 978:
case 1418:
case 1520:
case 3376:
case 3370:
case 1003:
case 907:
case 619:
case 1636:
case 3727:
case 386:
case 2445:
case 1297:
case 3223:
case 537:
case 639:
case 3617:
case 2140:
case 4066:
case 821:
case 2409:
case 4013:
case 3703:
case 3292:
case 726:
case 1122:
case 3791:
case 3714:
case 3050:
case 3072:
case 3555:
case 2694:
case 3280:
case 3730:
case 483:
case 3524:
case 1874:
case 370:
case 342:
case 3364:
case 2616:
case 1951:
case 2428:
case 4059:
case 4017:
case 3411:
case 2107:
case 3297:
case 1299:
case 989:
case 2717:
case 1974:
case 2364:
case 1301:
case 2747:
case 999:
case 2311:
case 1956:
case 3698:
case 576:
case 2606:
case 369:
case 2415:
case 3171:
case 2208:
case 611:
case 2039:
case 4004:
case 2286:
case 2787:
case 1268:
case 3286:
case 2355:
case 26:
case 2809:
case 1367:
case 2175:
case 1045:
case 128:
case 840:
case 3921:
case 2975:
case 2032:
case 3784:
case 3453:
case 3831:
case 985:
case 3887:
case 1379:
case 253:
case 2396:
case 1386:
case 2432:
case 1870:
case 1898:
case 3958:
case 2572:
case 1173:
case 3618:
case 2969:
case 2217:
case 2321:
case 1853:
case 743:
case 1904:
case 555:
case 4062:
case 3910:
case 2245:
case 2559:
case 456:
case 2781:
case 1673:
case 1552:
case 3044:
case 3255:
case 982:
case 3306:
case 208:
case 3768:
case 1717:
case 2875:
case 3418:
case 3940:
case 3629:
case 2258:
case 263:
case 2115:
case 1787:
case 3086:
case 97:
case 3334:
case 150:
case 1140:
case 2224:
case 1734:
case 1776:
case 3110:
case 271:
case 1959:
case 3905:
case 101:
case 2449:
case 240:
case 687:
case 2628:
case 1825:
case 2133:
case 3111:
case 3969:
case 3733:
case 4016:
case 539:
case 3035:
case 1316:
case 3694:
case 666:
case 4036:
case 2941:
case 2670:
case 2936:
case 73:
case 3374:
case 1470:
case 1156:
case 2558:
case 2473:
case 2662:
case 518:
case 1178:
case 3317:
case 634:
case 1336:
case 4043:
case 524:
case 2049:
case 2886:
case 3680:
case 131:
case 396:
case 1691:
case 2199:
case 2555:
case 2603:
case 1052:
case 3577:
case 2145:
case 3087:
case 1100:
case 430:
case 334:
case 1628:
case 3425:
case 648:
case 4067:
case 633:
case 2965:
case 448:
case 2371:
case 1513:
case 3234:
case 110:
case 4045:
case 2919:
case 1881:
case 3788:
case 1834:
case 1050:
case 733:
case 3406:
case 3250:
case 1504:
case 1857:
case 469:
case 2270:
case 2005:
case 4093:
case 2848:
case 834:
case 2751:
case 680:
case 3619:
case 1935:
case 1031:
case 3523:
case 1410:
case 599:
case 3362:
case 3153:
case 517:
case 1969:
case 3105:
case 3393:
case 458:
case 3021:
case 3420:
case 1296:
case 2544:
case 3620:
case 1542:
case 2447:
case 2159:
case 1417:
case 310:
case 2335:
case 2150:
case 2815:
case 3499:
case 3174:
case 1384:
case 2630:
case 658:
case 3797:
case 1339:
case 2222:
case 1920:
case 731:
case 554:
case 2165:
case 3755:
case 3099:
case 1900:
case 3752:
case 901:
case 1665:
case 46:
case 3298:
case 422:
case 3039:
case 2846:
case 3396:
case 760:
case 2079:
case 2708:
case 2072:
case 4054:
case 3195:
case 2508:
case 2365:
case 3856:
case 1310:
case 3342:
case 691:
case 632:
case 1256:
case 3431:
case 1204:
case 2065:
case 3377:
case 191:
case 932:
case 3773:
case 2168:
case 1023:
case 1014:
case 3932:
case 1579:
case 757:
case 392:
case 1767:
case 87:
case 739:
case 2560:
case 1593:
case 2312:
case 1133:
case 100:
case 267:
case 1426:
case 1534:
case 2660:
case 2483:
case 367:
case 3491:
case 625:
case 452:
case 1712:
case 2893:
case 2251:
case 3126:
case 2858:
case 3100:
case 3089:
case 3016:
case 2749:
case 2101:
case 3662:
case 508:
case 977:
case 2053:
case 35:
case 270:
case 3573:
case 1157:
case 3144:
case 2549:
case 4031:
case 3875:
case 3542:
case 2850:
case 449:
case 2519:
case 149:
case 945:
case 326:
case 3995:
case 2777:
case 1786:
case 567:
case 2096:
case 2766:
case 1361:
case 2069:
case 2823:
case 918:
case 1346:
case 3313:
case 886:
case 1136:
case 1546:
case 2864:
case 1365:
case 799:
case 1368:
case 3211:
case 3226:
case 1971:
case 1158:
case 3142:
case 2204:
case 1917:
case 2418:
case 3299:
case 1322:
case 2699:
case 2622:
case 3494:
case 421:
case 1423:
case 268:
case 2068:
case 1231:
case 504:
case 1866:
case 2120:
case 1053:
case 2988:
case 2033:
case 1764:
case 2172:
case 3989:
case 1766:
case 3392:
case 425:
case 2645:
case 1498:
case 3349:
case 3140:
case 3386:
case 2604:
case 277:
case 1092:
case 2505:
case 1794:
case 3249:
case 3070:
case 589:
case 3301:
case 28:
case 3527:
case 1972:
case 464:
case 3434:
case 1568:
case 596:
case 2343:
case 2184:
case 2046:
case 1183:
case 2331:
case 2618:
case 1839:
case 2664:
case 348:
case 3536:
case 2464:
case 3258:
case 575:
case 2309:
case 345:
case 4037:
case 2873:
case 587:
case 775:
case 1065:
case 1101:
case 1982:
case 2775:
case 3502:
case 2566:
case 2869:
case 3478:
case 1523:
case 830:
case 993:
case 664:
case 2438:
case 1064:
case 3385:
case 1503:
case 838:
case 455:
case 671:
case 2990:
case 677:
case 3170:
case 873:
case 2797:
case 1026:
case 872:
case 781:
case 798:
case 3776:
case 672:
case 2746:
case 135:
case 2788:
case 1308:
case 293:
case 1209:
case 3139:
case 750:
case 3356:
case 673:
case 3332:
case 1012:
case 2350:
case 2738:
case 447:
case 938:
case 2650:
case 3666:
case 511:
case 2477:
case 2934:
case 3367:
case 660:
case 1345:
case 3480:
case 946:
case 3344:
case 610:
case 2249:
case 3224:
case 2305:
case 3131:
case 723:
case 3203:
case 3283:
case 2725:
case 3274:
case 4071:
case 1493:
case 3278:
case 3563:
case 1127:
case 90:
case 2125:
case 2683:
case 3407:
case 3692:
case 2970:
case 2563:
case 797:
case 2913:
case 2314:
case 2897:
case 3673:
case 1677:
case 761:
case 1752:
case 4079:
case 2629:
case 3096:
case 1406:
case 4081:
case 1676:
case 2671:
case 152:
case 120:
case 3622:
case 2050:
case 3064:
case 2001:
case 1189:
case 3799:
case 1990:
case 2594:
case 574:
case 1748:
case 594:
case 1205:
case 3168:
case 2226:
case 1937:
case 898:
case 900:
case 3640:
case 3084:
case 3492:
case 339:
case 3861:
case 1885:
case 3648:
case 3816:
case 1298:
case 3678:
case 3808:
case 2180:
case 3576:
case 1950:
case 2219:
case 1742:
case 3612:
case 2772:
case 3950:
case 193:
case 2724:
case 2383:
case 3803:
case 4007:
case 3462:
case 2608:
case 1283:
case 1358:
case 418:
case 734:
case 3388:
case 1229:
case 3428:
case 1999:
case 1667:
case 1007:
case 2474:
case 3217:
case 1387:
case 2887:
case 2783:
case 3818:
case 2889:
case 1735:
case 2169:
case 1855:
case 3403:
case 1621:
case 3351:
case 551:
case 2824:
case 94:
case 2721:
case 3083:
case 597:
case 3304:
case 2691:
case 2080:
case 3936:
case 1519:
case 2842:
case 1099:
case 3343:
case 794:
case 1791:
case 1824:
case 3960:
case 2158:
case 328:
case 2011:
case 3062:
case 2248:
case 593:
case 3380:
case 3972:
case 2349:
case 2119:
case 1351:
case 2395:
case 27:
case 391:
case 1963:
case 1836:
case 3475:
case 2973:
case 245:
case 3232:
case 22:
case 2951:
case 2134:
case 4092:
case 515:
case 571:
case 1940:
case 998:
case 564:
case 3966:
case 3878:
case 3900:
case 2308:
case 1432:
case 3836:
case 2580:
case 388:
case 1312:
case 3713:
case 4084:
case 1746:
case 2109:
case 34:
case 1445:
case 3546:
case 3078:
case 495:
case 3800:
case 3025:
case 1082:
case 284:
case 3437:
case 2497:
case 1373:
case 2153:
case 1965:
case 2006:
case 3194:
case 1599:
case 3696:
case 1314:
case 2016:
case 2818:
case 163:
case 3398:
case 3014:
case 61:
case 1977:
case 2771:
case 331:
case 3583:
case 2488:
case 975:
case 1001:
case 991:
case 861:
case 1650:
case 1341:
case 1074:
case 3042:
case 2414:
case 2195:
case 3661:
case 3734:
case 696:
case 970:
case 1113:
case 2816:
case 173:
case 1034:
case 2237:
case 2545:
case 1894:
case 3510:
case 3947:
case 318:
case 2835:
case 3684:
case 3237:
case 199:
case 3653:
case 2759:
case 1805:
case 2642:
case 2758:
case 730:
case 3743:
case 3295:
case 3637:
case 2571:
case 1876:
case 2190:
case 415:
case 3918:
case 2789:
case 1860:
case 3593:
case 2592:
case 3584:
case 1565:
case 661:
case 3196:
case 3479:
case 3885:
case 2023:
case 2252:
case 2498:
case 1531:
case 3819:
case 1886:
case 1476:
case 1843:
case 791:
case 2060:
case 408:
case 1675:
case 3093:
case 405:
case 2711:
case 762:
case 1258:
case 223:
case 3994:
case 764:
case 1324:
case 2411:
case 155:
case 1198:
case 737:
case 1254:
case 209:
case 2712:
case 3530:
case 2912:
case 653:
case 1941:
case 2289:
case 123:
case 1295:
case 1453:
case 3949:
case 3719:
case 3638:
case 1830:
case 2062:
case 3466:
case 2904:
case 870:
case 2760:
case 3742:
case 1581:
case 2091:
case 3151:
case 1152:
case 3077:
case 1489:
case 2898:
case 1102:
case 4089:
case 175:
case 3956:
case 4083:
case 2921:
case 665:
case 1412:
case 755:
case 2160:
case 543:
case 3712:
case 2246:
case 1721:
case 2631:
case 3761:
case 526:
case 3240:
case 1420:
case 1128:
case 1132:
case 2765:
case 3778:
case 226:
case 241:
case 1981:
case 2354:
case 1494:
case 2446:
case 1693:
case 1021:
case 3368:
case 3837:
case 964:
case 2030:
case 2136:
case 3129:
case 613:
case 4091:
case 302:
case 2291:
case 2141:
case 3702:
case 2635:
case 1813:
case 2186:
case 3264:
case 1333:
case 1989:
case 3658:
case 1878:
case 3314:
case 341:
case 3424:
case 2792:
case 1768:
case 952:
case 883:
case 352:
case 269:
case 2501:
case 816:
case 3390:
case 4082:
case 2863:
case 1078:
case 2743:
case 1462:
case 3449:
case 2378:
case 3718:
case 181:
case 2955:
case 2238:
case 3013:
case 1592:
case 2373:
case 2128:
case 3601:
case 1193:
case 607:
case 1170:
case 3321:
case 523:
case 1138:
case 3827:
case 2679:
case 160:
case 2805:
case 1089:
case 1094:
case 2167:
case 1216:
case 2551:
case 742:
case 379:
case 3245:
case 2688:
case 3049:
case 4030:
case 3508:
case 2420:
case 3687:
case 4020:
case 363:
case 3365:
case 950:
case 1219:
case 2317:
case 2785:
case 3500:
case 2693:
case 2663:
case 2811:
case 2753:
case 194:
case 1793:
case 4047:
case 1585:
case 2922:
case 3959:
case 529:
case 2078:
case 3052:
case 2637:
case 3822:
case 1249:
case 3660:
case 1264:
case 2713:
case 3871:
case 429:
case 3942:
case 205:
case 3519:
case 674:
case 1773:
case 3401:
case 1272:
case 3866:
case 877:
case 941:
case 3422:
case 8:
case 3402:
case 389:
case 1111:
case 3976:
case 3539:
case 971:
case 3588:
case 1983:
case 738:
case 878:
case 1779:
case 3616:
case 1696:
case 1726:
case 1747:
case 920:
case 296:
case 467:
case 1435:
case 2151:
case 1806:
case 2353:
case 842:
case 2672:
case 506:
case 3460:
case 1619:
case 1683:
case 3128:
case 1524:
case 846:
case 62:
case 2844:
case 2389:
case 3094:
case 1195:
case 1633:
case 2137:
case 157:
case 759:
case 1608:
case 1088:
case 774:
case 641:
case 829:
case 1159:
case 498:
case 3267:
case 790:
case 2585:
case 298:
case 377:
case 1555:
case 2502:
case 3231:
case 2996:
case 228:
case 509:
case 1720:
case 1066:
case 426:
case 590:
case 683:
case 238:
case 3161:
case 1557:
case 2924:
case 1890:
case 3109:
case 942:
case 1701:
case 323:
case 3426:
case 1532:
case 720:
case 3219:
case 1284:
case 1732:
case 3891:
case 869:
case 2468:
case 4000:
case 3082:
case 2090:
case 2756:
case 218:
case 3182:
case 1562:
case 3336:
case 652:
case 4008:
case 2112:
case 3689:
case 3681:
case 2278:
case 2547:
case 2681:
case 2700:
case 3320:
case 3409:
case 1901:
case 1253:
case 1831:
case 1507:
case 3497:
case 7:
case 2086:
case 3664:
case 3243:
case 654:
case 1261:
case 164:
case 1323:
case 427:
case 2051:
case 474:
case 12:
case 2914:
case 3369:
case 828:
case 1699:
case 282:
case 3027:
case 2659:
case 811:
case 1838:
case 439:
case 3847:
case 1240:
case 1280:
case 817:
case 2004:
case 562:
case 1311:
case 1842:
case 1455:
case 1545:
case 1277:
case 598:
case 3974:
case 2925:
case 3288:
case 815:
case 3331:
case 2157:
case 3582:
case 2271:
case 3886:
case 3102:
case 525:
case 698:
case 1645:
case 754:
case 3828:
case 552:
case 3379:
case 974:
case 2908:
case 488:
case 924:
case 3133:
case 2773:
case 1980:
case 1020:
case 1397:
case 3549:
case 126:
case 1827:
case 2161:
case 1896:
case 1644:
case 3134:
case 2829:
case 40:
case 933:
case 3148:
case 4028:
case 3457:
case 1968:
case 3132:
case 63:
case 3591:
case 2579:
case 393:
case 2496:
case 1529:
case 2689:
case 2031:
case 1325:
case 3041:
case 3865:
case 2113:
case 146:
case 3058:
case 3346:
case 650:
case 1451:
case 171:
case 1011:
case 3630:
case 3040:
case 2723:
case 669:
case 255:
case 291:
case 1751:
case 2025:
case 3535:
case 899:
case 1220:
case 2088:
case 1763:
case 888:
case 3468:
case 3747:
case 1388:
case 1575:
case 2087:
case 1472:
case 2932:
case 78:
case 2193:
case 148:
case 499:
case 1942:
case 679:
case 2041:
case 2007:
case 2821:
case 2538:
case 3470:
case 966:
case 1908:
case 2130:
case 3218:
case 4076:
case 2727:
case 4011:
case 746:
case 659:
case 3065:
case 3651:
case 690:
case 3551:
case 1909:
case 1580:
case 1783:
case 3329:
case 3175:
case 2881:
case 3019:
case 809:
case 3399:
case 1038:
case 3340:
case 3060:
case 1800:
case 3859:
case 4048:
case 92:
case 117:
case 3045:
case 2476:
case 1485:
case 1663:
case 3315:
case 2368:
case 432:
case 2612:
case 384:
case 2516:
case 329:
case 336:
case 3305:
case 2715:
case 707:
case 959:
case 808:
case 1123:
case 3636:
case 19:
case 1719:
case 1163:
case 606:
case 2617:
case 3842:
case 2528:
case 3754:
case 887:
case 2506:
case 2022:
case 1511:
case 3892:
case 206:
case 3540:
case 635:
case 979:
case 3600:
case 1464:
case 3375:
case 1840:
case 1354:
case 2116:
case 3795:
case 1595:
case 3285:
case 332:
case 3679:
case 3444:
case 360:
case 4022:
case 1822:
case 588:
case 527:
case 36:
case 3657:
case 3825:
case 2129:
case 3750:
case 2008:
case 3863:
case 1573:
case 2202:
case 1588:
case 140:
case 1302:
case 1882:
case 2504:
case 1515:
case 1816:
case 1374:
case 295:
case 2745:
case 361:
case 3047:
case 1549:
case 699:
case 2971:
case 1191:
case 996:
case 1934:
case 510:
case 1347:
case 2802:
case 278:
case 3533:
case 1928:
case 1477:
case 2601:
case 1833:
case 719:
case 2957:
case 1166:
case 2423:
case 2276:
case 2376:
case 3266:
case 2013:
case 3348:
case 3552:
case 2868:
case 1068:
case 3066:
case 896:
case 1795:
case 2045:
case 3032:
case 863:
case 1425:
case 667:
case 1456:
case 1207:
case 1653:
case 2205:
case 2979:
case 1692:
case 2962:
case 2877:
case 3446:
case 2229:
case 2736:
case 1153:
case 1884:
case 2235:
case 3184:
case 2003:
case 60:
case 4034:
case 3858:
case 1558:
case 1947:
case 1376:
case 2359:
case 3471:
case 3770:
case 3521:
case 1828:
case 4051:
case 3644:
case 1343:
case 2191:
case 1279:
case 1465:
case 1987:
case 159:
case 3507:
case 3988:
case 2092:
case 2697:
case 2280:
case 1674:
case 2019:
case 2584:
case 1891:
case 1662:
case 0:
case 20:
case 2261:
case 2272:
case 736:
case 1180:
case 167:
case 3397:
case 2027:
case 260:
case 3333:
case 4061:
case 1371:
case 2874:
case 1098:
case 1929:
case 3252:
case 3983:
case 2623:
case 484:
case 2460:
case 1055:
case 3732:
case 682:
case 3807:
case 3073:
case 3372:
case 2405:
case 3412:
case 2114:
case 53:
case 169:
case 3520:
case 983:
case 359:
case 1694:
case 3943:
case 2407:
case 889:
case 2444:
case 1393:
case 602:
case 2471:
case 2015:
case 2455:
case 1054:
case 2909:
case 231:
case 3169:
case 172:
case 1107:
case 1214:
case 485:
case 1300:
case 1902:
case 33:
case 1744:
case 1161:
case 2827:
case 1030:
case 1687:
case 3210:
case 3273:
case 2882:
case 2099:
case 1814:
case 3554:
case 1704:
case 2044:
case 3067:
case 3485:
case 2260:
case 76:
case 2472:
case 2831:
case 3079:
case 3228:
case 3724:
case 3193:
case 2232:
case 1:
case 2849:
case 475:
case 2686:
case 1009:
case 600:
case 4006:
case 1466:
case 3801:
case 2535:
case 2063:
case 1192:
case 2427:
case 3432:
case 1309:
case 2761:
case 491:
case 1713:
case 1535:
case 1872:
case 3957:
case 1121:
case 843:
case 2299:
case 2038:
case 414:
case 2384:
case 1303:
case 3815:
case 3463:
case 1071:
case 1835:
case 3587:
case 4024:
case 2337:
case 542:
case 557:
case 4019:
case 3311:
case 3545:
case 3884:
case 1897:
case 187:
case 2757:
case 1570:
case 1960:
case 2448:
case 2540:
case 1781:
case 3635:
case 3567:
case 3018:
case 1998:
case 1551:
case 98:
case 585:
case 2655:
case 3029:
case 2493:
case 911:
case 1994:
case 1353:
case 3063:
case 768:
case 984:
case 3185:
case 72:
case 409:
case 1758:
case 136:
case 4003:
case 2590:
case 2293:
case 3798:
case 579:
case 3156:
case 294:
case 3996:
case 264:
case 2891:
case 936:
case 3015:
case 111:
case 2731:
case 477:
case 4014:
case 849:
case 2374:
case 1733:
case 3951:
case 879:
case 3284:
case 818:
case 106:
case 1349:
case 756:
case 1887:
case 1729:
case 2857:
case 1906:
case 1473:
case 2412:
case 3097:
case 2740:
case 2546:
case 1769:
case 814:
case 1684:
case 1868:
case 787:
case 3790:
case 2880:
case 3562:
case 1187:
case 3261:
case 3464:
case 3954:
case 121:
case 10:
case 2793:
case 2277:
case 2425:
case 987:
case 4041:
case 3824:
case 1936:
case 1097:
case 1331:
case 247:
case 1440:
case 1177:
case 3916:
case 3121:
case 1512:
case 407:
case 2479:
case 1008:
case 338:
case 3955:
case 2377:
case 1338:
case 3300:
case 1459:
case 2860:
case 2470:
case 2187:
case 3935:
case 2361:
case 1820:
case 931:
case 1845:
case 3359:
case 353:
case 3917:
case 3663:
case 1245:
case 2319:
case 2132:
case 56:
case 1239:
case 1019:
case 3602:
case 2798:
case 779:
case 362:
case 2778:
case 1075:
case 3625:
case 3176:
case 77:
case 835:
case 274:
case 1413:
case 2036:
case 3852:
case 1910:
case 2387:
case 65:
case 2661:
case 3172:
case 434:
case 1175:
case 2963:
case 2362:
case 1043:
case 3804:
case 266:
case 3296:
case 4056:
case 2698:
case 3623:
case 3483:
case 3970:
case 2503:
case 684:
case 1792:
case 1036:
case 882:
case 2020:
case 3092:
case 2203:
case 84:
case 3944:
case 1282:
case 955:
case 3785:
case 3239:
case 3113:
case 2372:
case 419:
case 3270:
case 3599:
case 1321:
case 2826:
case 704:
case 3774:
case 577:
case 3609:
case 1115:
case 3665:
case 662:
case 1134:
case 1332:
case 804:
case 3826:
case 2176:
case 313:
case 4085:
case 2239:
case 2185:
case 3277:
case 528:
case 2960:
case 2929:
case 3759:
case 1228:
case 262:
case 2061:
case 2619:
case 3338:
case 1798:
case 1326:
case 3036:
case 2253:
case 2651:
case 792:
case 3999:
case 2701:
case 114:
case 1508:
case 2625:
case 1292:
case 1873:
case 2181:
case 3738:
case 1492:
case 627:
case 2938:
case 637:
case 1709:
case 1864:
case 1087:
case 1137:
case 2985:
case 3938:
case 1716:
case 3384:
case 3178:
case 1436:
case 3414:
case 1996:
case 2968:
case 1307:
case 3667:
case 2254:
case 3155:
case 139:
case 890:
case 3395:
case 3728:
case 2768:
case 1076:
case 1958:
case 3150:
case 969:
case 793:
case 3574:
case 3127:
case 777:
case 2853:
case 1085:
case 275:
case 2517:
case 2340:
case 2948:
case 2081:
case 147:
case 2332:
case 2118:
case 233:
case 1438:
case 122:
case 1212:
case 1888:
case 2561:
case 4077:
case 1005:
case 2067:
case 2552:
case 2475:
case 3330:
case 1985:
case 105:
case 242:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1692453601/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,0,0,1,0,0,1,1,0,1,0,1,0,0,0,0,0,0,1,1,0,1,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,1,1,1,1,0,1,0,0,0,0,0,0,1,1,0,1,1,1,1,0,0,0,0,0,1,0,1,1,0,0,1,0,1,0,1,1,0,1,1,0,1,1,1,0,0,1,1,0,0,0,1,1,1,0,1,0,0,1,0,0,1,1,1,1,0,1,1,0,1,1,1,1,0,0,0,1,1,0,0,1,1,1,0,0,0,0,1,1,1,1,1,1,1,0,0,1,0,1,0,1,1,1,0,1,1,0,0,1,0,1,0,1,1,1,0,1,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,1,0,1,1,0,0,0,0,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0,0,0,0,1,0,1,1,1,0,0,1,0,1,0,0,0,0,1,1,0,1,0,0,1,0,1,0,1,1,1,0,1,1,1,1,1,1,0,0,1,1,0,1,1,0,0,0,1,0,1,0,1,0,0,0,0,1,0,1,1,1,1,1,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,1,0,1,0,0,1,1,1,1,0,1,1,0,1,1,1,0,1,1,0,1,1,0,0,1,0,0,1,1,0,0,1,1,0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,1,0,0,0,0,0,1,1,0,1,0,1,0,1,1,0,1,0,1,1,0,1,1,1,0,0,1,0,0,0,0,0,0,0,0,1,0,1,1,1,0,1,0,0,1,1,0,0,1,1,0,1,1,0,0,1,1,1,0,1,1,0,1,0,1,0,0,0,0,1,0,0,0,0,0,0,0,1,1,1,0,0,1,0,0,1,1,0,1,0,1,0,0,0,1,0,0,1,0,1,1,0,0,0,1,1,0,1,0,0,0,0,1,1,1,1,0,0,1,0,0,1,0,0,0,1,0,0,1,1,0,0,0,0,1,0,1,0,1,1,1,1,0,1,0,1,0,1,1,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,0,1,0,0,1,1,1,0,0,0,0,0,0,1,1,0,1,1,0,1,0,0,0,0,1,0,1,0,0,1,0,0,0,1,0,0,1,1,1,1,0,1,0,0,0,0,0,1,0,1,1,1,1,0,0,1,1,0,1,1,1,1,1,0,1,0,0,0,1,1,0,0,1,1,0,1,0,0,0,0,0,1,1,0,0,0,0,1,0,1,0,0,0,0,1,1,1,1,0,1,0,1,0,1,1,0,0,0,0,0,1,0,1,0,1,1,1,0,0,0,1,1,1,1,1,0,1,1,1,1,0,1,0,1,1,1,1,0,0,1,1,1,1,0,1,1,1,0,0,1,1,0,1,1,0,1,0,0,1,0,1,1,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,1,1,0,0,0,1,1,1,1,1,0,1,1,1,1,0,0,1,1,0,0,1,0,0,0,1,0,0,0,1,1,1,1,0,1,1,1,1,0,1,0,0,0,1,0,0,0,0,0,1,1,0,1,0,1,0,1,0,0,0,1,0,1,0,0,1,1,1,1,1,0,0,1,1,1,0,0,0,0,1,0,0,0,1,1,0,1,0,0,1,1,1,1,1,0,1,1,0,0,0,0,0,0,1,1,1,0,0,0,1,1,0,0,1,0,1,0,1,1,0,0,1,1,0,1,0,0,0,1,0,0,1,0,0,0,0,1,1,1,0,0,0,0,0,1,1,0,1,1,1,0,0,1,1,1,0,0,1,1,0,1,1,1,1,1,1,0,0,0,0,0,1,0,1,1,1,1,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,1,1,0,1,0,0,0,1,0,0,1,0,0,0,1,1,1,0,0,1,0,1,0,0,1,1,0,0,1,1,0,0,0,1,0,1,0,0,1,0,0,0,1,1,0,0,0,1,0,1,0,0,1,1,1,0,0,1,1,0,1,1,1,0,0,1,1,1,1,0,1,0,1,0,1,0,1,0,0,1,1,1,1,0,1,0,1,0,1,0,1,1,1,0,1,1,0,1,1,0,0,0,1,1,1,0,1,0,0,1,0,0,0,1,1,0,0,1,0,1,0,1,0,0,0,0,1,0,1,0,0,1,0,1,0,1,1,1,1,0,1,0,0,0,0,0,0,1,1,1,0,1,0,0,1,0,0,1,1,1,0,1,1,0,0,1,0,0,1,0,1,1,1,0,0,1,0,1,0,0,1,1,1,1,1,1,0,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0,1,1,1,0,0,0,1,1,0,0,0,1,1,1,0,1,1,1,0,1,0,0,1,0,0,0,0,0,1,0,0,1,1,0,0,1,1,1,1,0,1,1,1,0,0,1,0,0,0,1,0,0,1,0,1,0,1,1,0,1,0,0,1,1,0,0,1,0,1,0,1,1,1,0,1,0,1,1,1,0,1,0,0,1,1,0,1,0,1,0,0,1,0,1,0,1,0,0,1,1,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,1,1,1,0,0,0,0,1,0,0,0,1,0,0,0,1,1,0,1,0,1,0,1,1,0,1,1,0,0,0,1,1,0,0,1,0,0,0,0,1,0,1,1,0,1,1,1,0,0,1,0,0,0,0,1,0,0,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,0,1,0,1,0,1,0,0,1,1,1,1,1,1,0,0,0,0,1,1,1,0,1,1,0,1,1,0,1,0,1,0,1,1,1,0,1,0,1,0,1,1,0,0,0,1,0,0,1,1,0,0,1,0,1,1,0,0,1,0,1,1,0,1,0,0,1,1,0,0,0,1,0,1,1,1,1,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,0,1,0,1,0,1,0,1,1,0,0,0,1,1,0,1,0,0,1,0,1,1,0,0,0,0,0,1,0,0,1,1,0,1,0,1,0,0,0,0,1,0,0,0,0,0,1,0,1,0,1,1,0,0,1,0,0,1,0,1,1,1,0,0,0,1,0,1,1,0,1,1,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,1,1,1,1,1,0,1,0,0,0,0,1,1,0,0,1,1,0,0,1,1,1,0,1,0,0,0,1,1,0,0,1,1,0,0,0,0,1,1,1,1,0,1,1,0,0,0,0,0,0,1,0,0,1,1,0,0,1,0,1,1,0,0,1,0,1,1,0,0,0,1,0,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,1,1,1,0,0,0,1,0,1,1,0,1,0,1,1,0,1,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,1,0,0,1,0,1,0,0,1,0,0,0,0,0,1,0,0,1,1,0,1,1,1,0,1,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,0,1,1,0,0,0,1,1,1,1,0,1,0,0,1,0,1,0,0,1,0,1,0,0,1,0,0,1,1,0,0,1,1,0,1,1,1,0,0,0,0,1,0,0,1,0,0,1,1,1,1,0,0,0,0,1,1,1,0,1,0,1,1,1,0,0,1,1,0,1,0,0,0,1,0,0,0,1,1,1,0,1,1,1,1,1,0,0,1,0,0,1,0,0,1,0,1,0,1,0,0,1,1,0,0,0,1,1,1,1,1,0,0,1,0,1,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,1,0,1,1,1,0,1,0,1,1,0,1,1,0,1,1,0,1,1,1,1,0,1,1,1,0,1,1,0,1,0,0,0,1,0,0,0,1,0,1,0,1,1,1,1,0,0,0,1,0,1,0,1,0,1,0,1,1,1,0,1,0,1,0,0,1,1,0,1,1,1,1,1,0,1,1,0,0,1,0,1,1,1,0,1,1,1,1,1,0,1,0,1,1,1,0,0,0,0,0,1,1,0,0,1,0,0,0,0,0,0,0,1,1,0,0,1,0,1,1,1,1,0,0,1,1,1,0,0,0,0,1,0,0,1,1,0,0,1,0,1,0,1,1,1,0,0,1,0,1,0,0,1,1,0,1,1,0,1,0,0,1,0,0,1,1,1,1,0,1,0,1,0,1,1,0,1,0,1,0,1,0,1,1,0,1,1,1,1,1,1,1,1,0,0,1,0,1,0,1,1,0,0,1,1,0,1,1,1,1,0,1,0,1,1,1,1,1,0,0,1,0,1,1,1,1,0,0,1,1,1,0,0,1,1,1,0,1,0,0,0,0,0,0,1,1,1,1,0,1,0,1,1,1,0,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,0,1,1,1,0,0,0,1,0,0,1,0,1,0,0,0,1,0,1,0,1,0,0,1,1,1,1,1,0,1,1,1,0,0,0,0,1,1,0,1,1,1,0,1,1,1,0,1,1,0,0,1,1,0,1,0,1,1,0,1,0,1,1,0,1,0,0,1,1,1,1,1,1,0,0,0,1,0,1,1,1,0,0,1,0,0,1,1,0,0,0,1,1,0,0,1,1,1,1,0,0,1,1,0,1,1,1,0,0,1,1,1,0,1,1,1,1,0,0,1,0,0,0,0,1,0,0,0,1,0,1,0,1,1,0,1,1,1,0,0,1,0,0,1,0,0,1,0,1,1,1,0,0,0,0,0,1,1,0,1,1,0,1,1,1,1,0,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,1,1,0,1,0,0,0,0,1,1,0,1,1,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,1,0,0,1,1,0,1,1,1,1,0,1,1,0,1,0,1,0,0,0,0,0,0,0,0,0,1,1,0,1,1,0,1,0,0,1,0,0,1,0,0,0,0,0,1,1,0,0,1,1,1,0,0,0,1,0,1,1,0,1,1,0,1,1,0,0,1,1,1,1,0,1,1,1,0,0,0,0,1,1,0,0,1,1,1,1,0,0,0,0,1,1,0,0,0,0,0,1,0,0,1,0,1,0,1,1,1,1,0,1,1,0,0,1,0,1,0,0,1,0,1,1,1,1,1,1,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,0,1,0,0,0,1,0,0,0,0,1,0,1,0,1,1,0,0,1,1,1,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,0,1,1,0,0,1,0,0,1,0,0,1,0,1,0,0,0,1,1,1,1,0,1,0,1,1,0,0,1,0,0,1,1,1,1,0,1,1,0,1,0,0,0,1,1,1,0,1,0,0,1,0,1,1,1,0,0,1,1,0,0,1,0,1,1,1,0,1,1,0,0,0,0,0,1,1,1,1,0,1,0,1,0,0,1,1,0,0,0,1,1,1,1,0,1,1,1,1,1,0,0,1,1,1,1,0,0,0,1,0,1,0,0,0,0,1,0,0,1,0,0,0,0,1,1,0,0,0,1,0,0,0,1,1,1,1,1,1,0,1,0,1,0,1,1,1,0,1,0,0,0,0,1,0,1,0,1,0,0,1,0,1,1,0,1,1,1,1,0,0,1,1,1,1,1,0,1,0,1,0,1,1,0,0,1,1,1,0,1,1,1,1,0,0,1,0,1,1,1,0,1,0,0,0,1,0,0,0,0,1,0,1,0,1,0,0,1,0,1,1,1,1,1,0,1,0,1,0,0,1,1,1,1,1,1,0,0,0,1,1,0,1,0,0,1,1,1,0,1,0,1,1,0,0,1,0,1,0,1,0,1,1,1,0,0,1,1,0,0,0,1,1,1,0,0,1,0,0,1,0,0,0,1,0,1,0,0,1,1,1,0,1,0,0,1,0,1,1,0,1,1,0,1,0,1,0,0,0,1,0,0,0,0,0,0,1,0,1,0,1,0,1,1,1,0,0,1,0,0,0,1,1,0,1,0,0,1,1,0,0,0,1,1,0,0,0,1,1,1,0,1,0,0,1,1,1,0,0,0,1,1,0,1,0,1,0,1,0,1,0,1,1,0,0,0,0,0,1,0,0,0,1,1,0,0,1,1,1,0,0,0,0,1,0,1,1,0,1,1,0,0,0,1,0,0,1,0,1,1,1,1,1,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,1,0,1,1,0,1,0,1,1,0,1,0,0,1,1,1,1,0,1,0,1,0,0,0,1,0,0,0,0,0,1,0,0,1,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,1,1,1,1,1,0,1,0,1,0,1,0,0,1,0,0,1,1,0,0,1,1,1,1,0,1,1,0,1,0,1,1,0,1,0,0,0,0,0,1,0,1,0,1,1,1,1,1,1,1,0,1,0,1,1,1,0,0,1,1,1,0,1,1,1,1,0,1,1,0,1,0,0,1,1,1,0,1,1,0,1,1,0,1,0,0,1,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,1,0,0,0,1,1,1,1,1,0,1,1,1,1,1,0,1,0,1,1,0,1,0,1,0,0,0,1,0,1,1,0,1,0,1,1,0,0,0,0,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,1,0,0,0,1,0,1,1,0,0,0,1,0,0,0,1,1,1,1,0,0,0,0,1,0,1,0,1,0,0,0,0,1,1,0,0,0,0,0,1,1,1,0,0,1,1,1,0,1,1,1,0,0,1,1,0,1,0,1,1,0,1,1,0,1,1,0,1,0,0,0,1,1,0,1,0,0,1,0,0,1,0,0,1,0,0,1,1,1,1,0,0,1,0,0,1,1,0,0,1,1,1,1,0,0,1,1,1,1,0,1,0,0,0,1,0,0,1,1,1,1,1,1,1,0,0,1,1,1,0,0,0,0,1,0,1,1,1,1,1,0,0,1,1,0,0,0,1,0,0,0,1,1,1,1,1,1,0,1,0,1,1,1,0,1,1,1,0,1,0,1,1,0,1,0,0,0,0,1,1,0,1,0,0,1,0,1,1,0,1,1,1,1,0,1,0,1,1,1,1,0,1,1,0,0,0,1,1,1,0,1,0,1,0,1,1,1,1,1,1,1,1,0,1,1,1,0,0,1,1,1,1,0,1,1,1,1,0,0,1,1,0,1,1,1,0,1,1,1,0,1,1,0,1,1,0,1,0,0,1,0,0,0,0,0,0,1,0,1,0,0,1,0,0,0,1,0,0,0,1,0,0,1,0,1,1,1,0,1,0,1,0,1,1,0,0,0,1,0,0,1,1,1,0,0,1,0,1,0,0,0,0,0,1,1,0,1,0,0,1,0,1,1,0,1,0,0,0,0,1,1,0,1,0,0,0,0,1,0,0,0,1,1,1,0,1,1,0,0,1,0,0,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,1,0,0,1,0,1,1,0,1,1,0,0,0,0,0,0,1,1,0,0,0,1,0,1,0,0,0,1,1,0,1,1,0,0,0,0,1,1,1,0,1,1,1,0,0,1,0,1,1,0,1,0,0,1,1,1,1,0,0,0,0,1,0,1,0,0,1,0,0,0,1,1,1,1,1,0,1,1,0,1,1,0,0,1,1,1,0,0,0,1,1,1,1,0,1,0,0,0,1,0,0,0,1,0,0,1,0,1,0,0,0,1,1,0,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,0,0,0,1,1,1,1,0,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,1,0,1,0,1,1,0,0,0,0,0,0,0,1,1,1,1,0,0,1,1,1,0,0,0,0,1,0,0,1,1,0,1,0,1,1,1,0,0,0,1,1,0,0,1,1,0,0,1,1,1,0,1,0,1,0,1,1,0,0,0,1,0,1,0,0,0,0,0,0,1,1,1,0,0,1,1,0,1,0,1,0,0,0,0,0,1,1,1,0,1,0,1,1,0,0,0,1,0,1,1,1,1,1,0,1,1,1,0,1,1,0,0,0,0,0,0,1,1,0,1,1,0,0,1,0,1,1,1,1,1,0,0,1,0,0,0,1,1,1,0,1,0,1,1,0,0,0,0,1,0,0,0,0,1,0,1,0,1,0,1,1,0,1,0,1,0,1,1,0,0,0,0,1,0,0,0,1,0,0,1,0,0,0,0,0,1,1,1,1,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,1,1,0,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,1,1,0,1,1,1,0,1,1,1,1,0,1,0,1,1,1,0,0,1,1,1,1,1,1,1,0,0,0,0,0,1,0,0,1,1,0,1,0,1,0,1,0,0,0,0,0,0,1,0,0,0,1,1,1,0,0,0,0,1,1,1,0,1,1,1,0,0,1,1,0,1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,0,1,0,1,0,0,0,1,0,1,1,0,0,1,0,1,1,0,0,1,1,0,1,0,1,0,1,1,0,1,1,0,0,1,0,1,0,0,1,1,1,1,0,0,0,1,1,0,0,0,1,0,0,0,0,1,1,0,1,0,1,1,1,1,1,0,0,0,1,0,1,1,1,0,0,];
var gg_b = "1692453601/";

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
