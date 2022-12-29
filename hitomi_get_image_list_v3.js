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
case 824:
case 160:
case 3074:
case 136:
case 1705:
case 3410:
case 2318:
case 1200:
case 3660:
case 2852:
case 612:
case 2556:
case 3691:
case 3359:
case 382:
case 2358:
case 1209:
case 1514:
case 1950:
case 1511:
case 1750:
case 684:
case 616:
case 3348:
case 3419:
case 1269:
case 280:
case 2889:
case 1107:
case 2456:
case 2354:
case 730:
case 31:
case 1481:
case 1512:
case 720:
case 3168:
case 3428:
case 2930:
case 3658:
case 1765:
case 2646:
case 1402:
case 3600:
case 2623:
case 435:
case 1968:
case 3263:
case 2156:
case 505:
case 558:
case 2382:
case 354:
case 1996:
case 1577:
case 2166:
case 1563:
case 3850:
case 1572:
case 3332:
case 3639:
case 438:
case 1300:
case 3222:
case 1870:
case 2910:
case 2613:
case 2055:
case 3586:
case 2424:
case 3172:
case 2549:
case 242:
case 3462:
case 1907:
case 2437:
case 144:
case 1524:
case 633:
case 2567:
case 2645:
case 2971:
case 3464:
case 2633:
case 533:
case 3366:
case 1174:
case 1981:
case 1101:
case 2673:
case 1827:
case 4065:
case 3475:
case 3835:
case 4066:
case 1672:
case 2182:
case 1709:
case 1836:
case 2:
case 1613:
case 2485:
case 335:
case 2086:
case 3842:
case 2436:
case 4036:
case 2092:
case 2788:
case 3164:
case 4072:
case 1004:
case 1301:
case 3622:
case 3107:
case 694:
case 1820:
case 2701:
case 368:
case 3679:
case 3525:
case 1594:
case 2229:
case 2534:
case 1026:
case 1513:
case 2206:
case 1302:
case 3200:
case 1155:
case 1912:
case 964:
case 1282:
case 302:
case 1891:
case 1092:
case 2885:
case 79:
case 3090:
case 3624:
case 2329:
case 1743:
case 1919:
case 1835:
case 3617:
case 2423:
case 1742:
case 2216:
case 499:
case 2875:
case 1639:
case 1135:
case 1879:
case 2231:
case 3089:
case 679:
case 375:
case 2271:
case 4011:
case 2653:
case 1737:
case 363:
case 87:
case 2011:
case 1053:
case 1375:
case 2039:
case 3517:
case 2900:
case 3145:
case 1394:
case 1295:
case 3650:
case 3702:
case 3976:
case 1227:
case 2419:
case 2593:
case 2584:
case 3582:
case 2299:
case 326:
case 553:
case 2479:
case 3038:
case 3873:
case 2759:
case 1334:
case 2845:
case 3299:
case 182:
case 1235:
case 28:
case 1099:
case 800:
case 2688:
case 24:
case 3119:
case 783:
case 2348:
case 3614:
case 3306:
case 1638:
case 1361:
case 561:
case 2414:
case 1263:
case 2221:
case 733:
case 3499:
case 2602:
case 2713:
case 872:
case 2249:
case 1589:
case 236:
case 1236:
case 2700:
case 2806:
case 173:
case 2121:
case 3012:
case 1249:
case 2239:
case 3845:
case 4032:
case 3105:
case 1717:
case 980:
case 768:
case 1599:
case 2874:
case 1969:
case 3882:
case 57:
case 3377:
case 1869:
case 1167:
case 1332:
case 1957:
case 3685:
case 2919:
case 1746:
case 1753:
case 2729:
case 3120:
case 2834:
case 4067:
case 3728:
case 2238:
case 3048:
case 3041:
case 2114:
case 3796:
case 380:
case 517:
case 3541:
case 1797:
case 370:
case 801:
case 2389:
case 2607:
case 2561:
case 2937:
case 3543:
case 3362:
case 290:
case 219:
case 2774:
case 4046:
case 2851:
case 331:
case 546:
case 3731:
case 1609:
case 1503:
case 3269:
case 284:
case 3411:
case 3115:
case 3852:
case 3002:
case 1885:
case 870:
case 297:
case 1410:
case 871:
case 3859:
case 2161:
case 225:
case 2665:
case 952:
case 2747:
case 1405:
case 1714:
case 3378:
case 2709:
case 1131:
case 1645:
case 1916:
case 496:
case 3696:
case 2204:
case 605:
case 579:
case 3761:
case 620:
case 3674:
case 2504:
case 2286:
case 2380:
case 2343:
case 1062:
case 3268:
case 715:
case 1520:
case 1873:
case 96:
case 3405:
case 3918:
case 4006:
case 1059:
case 2739:
case 110:
case 3998:
case 76:
case 288:
case 1126:
case 1436:
case 1279:
case 4053:
case 1908:
case 1771:
case 7:
case 257:
case 1213:
case 2465:
case 2016:
case 3554:
case 1144:
case 945:
case 1725:
case 760:
case 2686:
case 2029:
case 1148:
case 3174:
case 1914:
case 52:
case 1539:
case 252:
case 2939:
case 898:
case 787:
case 1964:
case 18:
case 4075:
case 2974:
case 1088:
case 3868:
case 812:
case 2425:
case 231:
case 1740:
case 651:
case 1152:
case 1233:
case 150:
case 660:
case 1169:
case 1790:
case 2753:
case 2615:
case 3729:
case 1466:
case 1635:
case 3249:
case 309:
case 2744:
case 2512:
case 2970:
case 3668:
case 916:
case 2184:
case 1036:
case 515:
case 3798:
case 443:
case 3601:
case 1085:
case 292:
case 3277:
case 4016:
case 1975:
case 3208:
case 2719:
case 3807:
case 692:
case 3680:
case 2767:
case 3457:
case 3561:
case 2497:
case 1812:
case 3055:
case 1543:
case 3565:
case 984:
case 36:
case 2106:
case 2384:
case 405:
case 2616:
case 3865:
case 693:
case 1383:
case 855:
case 1299:
case 117:
case 3710:
case 1897:
case 2950:
case 2671:
case 2416:
case 3978:
case 1547:
case 3182:
case 1582:
case 2644:
case 268:
case 1739:
case 832:
case 2929:
case 1574:
case 65:
case 1600:
case 3234:
case 1340:
case 270:
case 1113:
case 194:
case 133:
case 452:
case 564:
case 749:
case 2131:
case 1268:
case 547:
case 2989:
case 3039:
case 2321:
case 3443:
case 619:
case 2772:
case 2169:
case 735:
case 126:
case 3837:
case 2902:
case 1662:
case 4068:
case 962:
case 185:
case 1286:
case 1832:
case 664:
case 2505:
case 1345:
case 2761:
case 3598:
case 1731:
case 3167:
case 2194:
case 2888:
case 2183:
case 527:
case 489:
case 480:
case 3166:
case 3049:
case 2771:
case 2399:
case 3446:
case 4088:
case 2521:
case 451:
case 1197:
case 243:
case 130:
case 1504:
case 2217:
case 748:
case 2862:
case 3053:
case 2320:
case 1845:
case 2232:
case 460:
case 3553:
case 3550:
case 2681:
case 2843:
case 765:
case 1702:
case 3571:
case 3453:
case 2065:
case 1920:
case 3204:
case 183:
case 2592:
case 1956:
case 511:
case 2021:
case 1418:
case 956:
case 3872:
case 494:
case 1801:
case 3833:
case 2841:
case 3169:
case 3098:
case 2987:
case 3140:
case 2087:
case 4008:
case 2048:
case 35:
case 2842:
case 2056:
case 3202:
case 2129:
case 2905:
case 1472:
case 2388:
case 1327:
case 1336:
case 275:
case 939:
case 922:
case 3482:
case 3555:
case 2105:
case 2398:
case 915:
case 3184:
case 2832:
case 3403:
case 1708:
case 3969:
case 3832:
case 1447:
case 986:
case 206:
case 120:
case 2245:
case 2117:
case 1294:
case 402:
case 361:
case 1892:
case 3760:
case 3465:
case 193:
case 3441:
case 703:
case 3522:
case 3989:
case 2750:
case 3450:
case 3653:
case 2153:
case 1072:
case 789:
case 685:
case 914:
case 3578:
case 3017:
case 2460:
case 3096:
case 927:
case 388:
case 1924:
case 2270:
case 1051:
case 301:
case 1551:
case 228:
case 3712:
case 3644:
case 1496:
case 391:
case 2517:
case 3552:
case 2580:
case 91:
case 1260:
case 982:
case 3344:
case 3163:
case 3787:
case 1910:
case 3514:
case 403:
case 1029:
case 1516:
case 140:
case 1809:
case 1643:
case 3358:
case 86:
case 2828:
case 1663:
case 1442:
case 2594:
case 2007:
case 2764:
case 2920:
case 1175:
case 1248:
case 1469:
case 464:
case 1172:
case 3483:
case 3719:
case 2494:
case 3664:
case 2024:
case 622:
case 386:
case 1948:
case 3064:
case 3723:
case 6:
case 2550:
case 72:
case 3577:
case 3114:
case 566:
case 3510:
case 1766:
case 113:
case 2606:
case 3478:
case 3083:
case 10:
case 3020:
case 2134:
case 2301:
case 4071:
case 3406:
case 3509:
case 4037:
case 3467:
case 1911:
case 2702:
case 2742:
case 2202:
case 938:
case 3091:
case 1149:
case 1258:
case 3511:
case 667:
case 3183:
case 1003:
case 3289:
case 1889:
case 3856:
case 64:
case 77:
case 3027:
case 2778:
case 3937:
case 2763:
case 3759:
case 2630:
case 1455:
case 1937:
case 2476:
case 2046:
case 3727:
case 3324:
case 3179:
case 2157:
case 594:
case 2488:
case 1942:
case 3109:
case 2102:
case 298:
case 4001:
case 295:
case 2142:
case 1796:
case 2649:
case 3050:
case 889:
case 3080:
case 3840:
case 114:
case 2471:
case 2547:
case 1701:
case 953:
case 683:
case 1046:
case 3765:
case 3149:
case 3438:
case 1035:
case 3463:
case 1230:
case 348:
case 3666:
case 2826:
case 2884:
case 1568:
case 3572:
case 2069:
case 2997:
case 3801:
case 1373:
case 3896:
case 554:
case 1030:
case 3574:
case 2595:
case 3188:
case 3008:
case 2678:
case 803:
case 3645:
case 1081:
case 1492:
case 1008:
case 2390:
case 1588:
case 1212:
case 1755:
case 1285:
case 3245:
case 1634:
case 2572:
case 1578:
case 3990:
case 910:
case 3538:
case 3991:
case 3776:
case 3632:
case 3125:
case 810:
case 2403:
case 1952:
case 3310:
case 106:
case 2373:
case 234:
case 1040:
case 48:
case 817:
case 2213:
case 2026:
case 428:
case 2768:
case 2057:
case 3011:
case 3373:
case 4070:
case 2667:
case 3264:
case 2030:
case 4052:
case 156:
case 54:
case 3352:
case 422:
case 2604:
case 1221:
case 3603:
case 3580:
case 342:
case 2918:
case 1616:
case 3935:
case 3670:
case 3355:
case 597:
case 572:
case 3616:
case 3104:
case 1237:
case 3029:
case 1622:
case 2756:
case 1331:
case 2801:
case 3792:
case 176:
case 1853:
case 737:
case 3311:
case 3135:
case 2680:
case 1459:
case 3542:
case 1:
case 355:
case 610:
case 3888:
case 3129:
case 3767:
case 3741:
case 3000:
case 3955:
case 2983:
case 762:
case 1119:
case 1533:
case 3260:
case 350:
case 1315:
case 75:
case 1604:
case 606:
case 3763:
case 2068:
case 11:
case 2585:
case 1656:
case 2426:
case 1776:
case 437:
case 2118:
case 1475:
case 1134:
case 3194:
case 3492:
case 1202:
case 1353:
case 3346:
case 1555:
case 3045:
case 829:
case 2781:
case 814:
case 4038:
case 3911:
case 2931:
case 1138:
case 2246:
case 2427:
case 1808:
case 3742:
case 552:
case 1680:
case 4009:
case 784:
case 1586:
case 1575:
case 43:
case 2276:
case 2522:
case 2683:
case 2999:
case 954:
case 1187:
case 1678:
case 809:
case 1966:
case 1298:
case 2837:
case 3984:
case 369:
case 1047:
case 1526:
case 3643:
case 1431:
case 3546:
case 3094:
case 1748:
case 2357:
case 532:
case 2773:
case 2520:
case 2386:
case 727:
case 738:
case 131:
case 3560:
case 3795:
case 2340:
case 1015:
case 1788:
case 3:
case 1841:
case 1722:
case 2073:
case 946:
case 4021:
case 149:
case 746:
case 3349:
case 1307:
case 1695:
case 831:
case 3869:
case 3213:
case 1951:
case 3392:
case 209:
case 272:
case 3996:
case 1525:
case 263:
case 2777:
case 478:
case 3007:
case 3915:
case 3788:
case 2356:
case 397:
case 793:
case 2360:
case 943:
case 3851:
case 3747:
case 3726:
case 1648:
case 2802:
case 1925:
case 2402:
case 698:
case 3211:
case 1238:
case 781:
case 56:
case 3294:
case 2448:
case 2000:
case 1222:
case 3844:
case 1795:
case 3811:
case 276:
case 1749:
case 344:
case 3063:
case 1000:
case 3693:
case 4022:
case 421:
case 2328:
case 513:
case 3329:
case 2258:
case 1974:
case 3654:
case 1244:
case 192:
case 2107:
case 265:
case 3198:
case 1786:
case 2901:
case 1655:
case 1657:
case 2172:
case 2751:
case 2088:
case 1791:
case 148:
case 2596:
case 1371:
case 2947:
case 2377:
case 1106:
case 1868:
case 672:
case 379:
case 2878:
case 1531:
case 2883:
case 500:
case 2890:
case 1488:
case 3206:
case 222:
case 3216:
case 3977:
case 3113:
case 345:
case 196:
case 1802:
case 2532:
case 3965:
case 3321:
case 1069:
case 2400:
case 551:
case 1305:
case 1682:
case 357:
case 3066:
case 2835:
case 652:
case 458:
case 2776:
case 3246:
case 2614:
case 2084:
case 591:
case 2877:
case 1756:
case 3953:
case 2715:
case 1566:
case 596:
case 4055:
case 1306:
case 154:
case 1837:
case 3605:
case 3314:
case 1541:
case 1168:
case 3774:
case 3533:
case 3626:
case 3165:
case 2473:
case 3019:
case 3072:
case 3390:
case 1929:
case 1963:
case 2109:
case 1100:
case 2721:
case 1486:
case 3330:
case 1252:
case 3262:
case 1183:
case 2685:
case 974:
case 2732:
case 353:
case 925:
case 1518:
case 2656:
case 3495:
case 259:
case 1458:
case 1395:
case 1685:
case 877:
case 3822:
case 1019:
case 2723:
case 3400:
case 3718:
case 2625:
case 1448:
case 1145:
case 2441:
case 2250:
case 767:
case 763:
case 3085:
case 447:
case 3328:
case 2297:
case 3725:
case 854:
case 884:
case 246:
case 1347:
case 2813:
case 2361:
case 3391:
case 3051:
case 3828:
case 1098:
case 638:
case 240:
case 3547:
case 1649:
case 439:
case 429:
case 3323:
case 1288:
case 3274:
case 2110:
case 2230:
case 2325:
case 69:
case 900:
case 3375:
case 1523:
case 1980:
case 2236:
case 14:
case 2463:
case 535:
case 1002:
case 906:
case 4017:
case 1090:
case 1940:
case 3687:
case 1058:
case 2266:
case 2711:
case 771:
case 3325:
case 159:
case 1056:
case 2783:
case 3331:
case 2638:
case 3890:
case 3899:
case 4093:
case 2816:
case 3758:
case 311:
case 1421:
case 716:
case 1462:
case 2313:
case 2367:
case 1824:
case 1895:
case 105:
case 313:
case 1741:
case 3732:
case 3024:
case 3488:
case 1584:
case 858:
case 1471:
case 116:
case 3945:
case 3449:
case 508:
case 2518:
case 3157:
case 2577:
case 1270:
case 1473:
case 3749:
case 634:
case 2126:
case 3952:
case 1614:
case 3144:
case 2209:
case 1435:
case 1354:
case 1254:
case 896:
case 2557:
case 2324:
case 2215:
case 850:
case 1034:
case 1372:
case 3503:
case 376:
case 3111:
case 305:
case 1073:
case 2314:
case 2617:
case 1858:
case 2352:
case 2214:
case 4077:
case 409:
case 530:
case 2280:
case 2392:
case 1917:
case 3967:
case 2450:
case 2417:
case 798:
case 2203:
case 1400:
case 2640:
case 40:
case 3108:
case 2858:
case 2514:
case 2070:
case 2334:
case 816:
case 1806:
case 2335:
case 1529:
case 3853:
case 3154:
case 3866:
case 3734:
case 1840:
case 756:
case 207:
case 1364:
case 1317:
case 2308:
case 21:
case 321:
case 3237:
case 332:
case 559:
case 3282:
case 2855:
case 1681:
case 3894:
case 3736:
case 2454:
case 2093:
case 971:
case 2495:
case 3422:
case 169:
case 3744:
case 2349:
case 992:
case 3954:
case 1406:
case 1338:
case 2869:
case 3898:
case 935:
case 1902:
case 394:
case 3630:
case 1928:
case 813:
case 1710:
case 1109:
case 902:
case 1798:
case 663:
case 2037:
case 1165:
case 860:
case 3435:
case 66:
case 2944:
case 2992:
case 384:
case 1901:
case 4007:
case 2659:
case 1615:
case 2273:
case 2959:
case 2365:
case 1198:
case 3576:
case 2538:
case 1884:
case 1216:
case 557:
case 1723:
case 2754:
case 1344:
case 3460:
case 2714:
case 2235:
case 3591:
case 1359:
case 2924:
case 431:
case 2856:
case 2381:
case 1193:
case 115:
case 2137:
case 1738:
case 3825:
case 3291:
case 2047:
case 1422:
case 1240:
case 2546:
case 514:
case 3217:
case 1296:
case 1874:
case 2486:
case 1830:
case 4030:
case 1500:
case 1834:
case 802:
case 143:
case 3779:
case 1905:
case 3231:
case 724:
case 2805:
case 1567:
case 2898:
case 3433:
case 419:
case 2540:
case 1860:
case 4057:
case 632:
case 4056:
case 453:
case 4079:
case 3887:
case 3466:
case 325:
case 3548:
case 3139:
case 3220:
case 883:
case 3669:
case 49:
case 1728:
case 1390:
case 3947:
case 1127:
case 1888:
case 3015:
case 3740:
case 250:
case 3535:
case 666:
case 2043:
case 2193:
case 2727:
case 3923:
case 1006:
case 318:
case 1644:
case 3365:
case 869:
case 997:
case 223:
case 3232:
case 1432:
case 249:
case 3491:
case 2692:
case 752:
case 78:
case 2171:
case 358:
case 203:
case 1465:
case 1265:
case 2552:
case 2815:
case 955:
case 774:
case 3997:
case 296:
case 3068:
case 138:
case 2804:
case 2558:
case 2452:
case 3757:
case 347:
case 2130:
case 2326:
case 3187:
case 2605:
case 1039:
case 304:
case 2489:
case 3782:
case 211:
case 705:
case 2369:
case 2809:
case 3061:
case 924:
case 1142:
case 2028:
case 2840:
case 241:
case 1630:
case 1698:
case 791:
case 2336:
case 3678:
case 1239:
case 1570:
case 1181:
case 3751:
case 3118:
case 4091:
case 2148:
case 1309:
case 805:
case 1420:
case 1596:
case 3223:
case 2394:
case 2734:
case 324:
case 1153:
case 1857:
case 2233:
case 274:
case 3247:
case 1196:
case 3663:
case 17:
case 3408:
case 3932:
case 3544:
case 721:
case 2780:
case 2666:
case 1328:
case 121:
case 4012:
case 4042:
case 2041:
case 3570:
case 2113:
case 647:
case 3436:
case 3155:
case 2904:
case 2887:
case 2627:
case 3454:
case 1204:
case 1961:
case 291:
case 1434:
case 82:
case 3309:
case 677:
case 923:
case 525:
case 2583:
case 407:
case 523:
case 3153:
case 3738:
case 2822:
case 3995:
case 3772:
case 975:
case 1156:
case 22:
case 293:
case 1031:
case 1191:
case 1759:
case 338:
case 3069:
case 389:
case 141:
case 1654:
case 2896:
case 878:
case 1552:
case 1646:
case 3504:
case 1407:
case 654:
case 3451:
case 3141:
case 2650:
case 1730:
case 2758:
case 3854:
case 2785:
case 643:
case 456:
case 2588:
case 2797:
case 1290:
case 2492:
case 1641:
case 1038:
case 661:
case 959:
case 969:
case 642:
case 1067:
case 2496:
case 2563:
case 1423:
case 127:
case 3563:
case 600:
case 965:
case 1352:
case 476:
case 2818:
case 3886:
case 3147:
case 1573:
case 2786:
case 2409:
case 3133:
case 2966:
case 3676:
case 2847:
case 836:
case 1129:
case 602:
case 863:
case 668:
case 3100:
case 1848:
case 483:
case 4013:
case 3583:
case 2803:
case 461:
case 1089:
case 3472:
case 1712:
case 2642:
case 2712:
case 2253:
case 4094:
case 3962:
case 3225:
case 674:
case 1417:
case 2579:
case 794:
case 2984:
case 1760:
case 834:
case 3704:
case 1443:
case 1112:
case 277:
case 1321:
case 512:
case 3829:
case 1829:
case 2559:
case 42:
case 521:
case 3699:
case 2598:
case 2112:
case 1636:
case 4028:
case 2115:
case 3724:
case 1017:
case 2207:
case 2535:
case 2724:
case 434:
case 3647:
case 16:
case 2541:
case 822:
case 1610:
case 2013:
case 541:
case 3326:
case 285:
case 137:
case 1821:
case 2063:
case 1579:
case 2136:
case 772:
case 1498:
case 2676:
case 417:
case 1703:
case 2994:
case 890:
case 1960:
case 3308:
case 3116:
case 2020:
case 806:
case 2009:
case 3783:
case 691:
case 687:
case 1349:
case 3893:
case 3778:
case 129:
case 3252:
case 1011:
case 2259:
case 2973:
case 2200:
case 3426:
case 1782:
case 327:
case 3397:
case 3739:
case 3386:
case 2195:
case 3891:
case 818:
case 3487:
case 2462:
case 2223:
case 3418:
case 887:
case 1255:
case 147:
case 3161:
case 2260:
case 609:
case 4023:
case 1923:
case 227:
case 3047:
case 3067:
case 2355:
case 1271:
case 50:
case 3895:
case 2432:
case 1386:
case 961:
case 85:
case 2152:
case 614:
case 377:
case 3913:
case 2743:
case 3903:
case 1542:
case 2243:
case 2821:
case 2247:
case 1935:
case 1871:
case 1449:
case 3823:
case 1123:
case 848:
case 3963:
case 3259:
case 2863:
case 3595:
case 1419:
case 2163:
case 1257:
case 3518:
case 322:
case 2895:
case 1833:
case 3602:
case 736:
case 2420:
case 656:
case 2339:
case 840:
case 3127:
case 3498:
case 1778:
case 3524:
case 2961:
case 3950:
case 1794:
case 3904:
case 3606:
case 846:
case 3190:
case 1308:
case 1735:
case 866:
case 1033:
case 2799:
case 2658:
case 940:
case 1132:
case 2662:
case 1398:
case 3367:
case 12:
case 2256:
case 430:
case 3304:
case 1453:
case 2978:
case 2291:
case 1104:
case 1998:
case 2139:
case 2311:
case 2351:
case 3333:
case 3013:
case 841:
case 2006:
case 968:
case 4059:
case 1576:
case 879:
case 1990:
case 1505:
case 102:
case 172:
case 1686:
case 588:
case 463:
case 549:
case 2032:
case 3892:
case 574:
case 1676:
case 1141:
case 888:
case 3255:
case 366:
case 3196:
case 2122:
case 1959:
case 3395:
case 1763:
case 2054:
case 3320:
case 2693:
case 340:
case 84:
case 754:
case 3379:
case 3943:
case 792:
case 978:
case 1438:
case 3849:
case 2689:
case 3025:
case 1718:
case 998:
case 1719:
case 1922:
case 204:
case 865:
case 3214:
case 2331:
case 1970:
case 3966:
case 985:
case 3948:
case 47:
case 3540:
case 625:
case 3481:
case 3523:
case 411:
case 2943:
case 739:
case 825:
case 3093:
case 215:
case 2624:
case 1366:
case 960:
case 457:
case 3380:
case 2322:
case 2411:
case 3014:
case 1245:
case 2378:
case 717:
case 3714:
case 1316:
case 2757:
case 1012:
case 3201:
case 2812:
case 2543:
case 3637:
case 1772:
case 1077:
case 1333:
case 2934:
case 2341:
case 1949:
case 3203:
case 414:
case 2164:
case 30:
case 3803:
case 427:
case 1592:
case 281:
case 199:
case 1136:
case 1261:
case 1346:
case 2395:
case 3690:
case 3005:
case 1805:
case 920:
case 613:
case 745:
case 346:
case 3009:
case 4069:
case 3797:
case 303:
case 2490:
case 3128:
case 1852:
case 492:
case 1896:
case 3769:
case 2998:
case 1120:
case 1220:
case 3531:
case 1803:
case 2120:
case 2690:
case 497:
case 255:
case 2857:
case 1792:
case 3688:
case 1713:
case 286:
case 3160:
case 269:
case 134:
case 2244:
case 446:
case 3302:
case 1246:
case 1783:
case 989:
case 3612:
case 3756:
case 2850:
case 1548:
case 1028:
case 3040:
case 3681:
case 385:
case 2913:
case 3404:
case 852:
case 2418:
case 1804:
case 1185:
case 3146:
case 471:
case 778:
case 2287:
case 2545:
case 3922:
case 2261:
case 2499:
case 55:
case 897:
case 3097:
case 1499:
case 1721:
case 3407:
case 707:
case 3088:
case 2814:
case 2697:
case 526:
case 3539:
case 1659:
case 372:
case 111:
case 2829:
case 3611:
case 1711:
case 592:
case 1264:
case 1617:
case 2846:
case 351:
case 833:
case 1087:
case 4073:
case 4086:
case 908:
case 759:
case 4063:
case 799:
case 3132:
case 1303:
case 680:
case 1162:
case 1057:
case 62:
case 472:
case 732:
case 3983:
case 1536:
case 1207:
case 2224:
case 617:
case 2670:
case 1464:
case 2201:
case 2376:
case 413:
case 2146:
case 3267:
case 467:
case 247:
case 907:
case 2980:
case 503:
case 3054:
case 3579:
case 2707:
case 2868:
case 1493:
case 2779:
case 892:
case 1429:
case 3791:
case 1675:
case 2415:
case 238:
case 1007:
case 2185:
case 1108:
case 244:
case 315:
case 2429:
case 3180:
case 2912:
case 371:
case 3971:
case 726:
case 2710:
case 2371:
case 830:
case 3095:
case 256:
case 128:
case 2079:
case 2893:
case 1839:
case 4026:
case 2014:
case 569:
case 1583:
case 45:
case 2964:
case 3429:
case 3944:
case 1140:
case 3081:
case 3195:
case 3026:
case 653:
case 519:
case 2515:
case 3848:
case 2509:
case 3745:
case 3318:
case 3789:
case 4044:
case 3781:
case 2647:
case 981:
case 3684:
case 1478:
case 2969:
case 1225:
case 1147:
case 1606:
case 3812:
case 2096:
case 1815:
case 2568:
case 670:
case 1918:
case 1063:
case 2985:
case 3173:
case 2330:
case 1958:
case 777:
case 2725:
case 1581:
case 299:
case 2699:
case 1626:
case 383:
case 2861:
case 3271:
case 1463:
case 2296:
case 3863:
case 1391:
case 933:
case 3993:
case 1392:
case 493:
case 233:
case 3665:
case 2100:
case 615:
case 2733:
case 3458:
case 26:
case 1122:
case 99:
case 1602:
case 3764:
case 2696:
case 2451:
case 2482:
case 4:
case 3227:
case 2612:
case 1470:
case 3296:
case 3210:
case 2338:
case 4062:
case 3994:
case 1847:
case 208:
case 1412:
case 2049:
case 3319:
case 4000:
case 2860:
case 3035:
case 3889:
case 2175:
case 1561:
case 3412:
case 3589:
case 3122:
case 3912:
case 23:
case 1826:
case 2618:
case 1752:
case 3236:
case 237:
case 2749:
case 2610:
case 2187:
case 881:
case 2940:
case 287:
case 722:
case 1767:
case 3300:
case 2651:
case 936:
case 2108:
case 1799:
case 1323:
case 1661:
case 502:
case 563:
case 696:
case 3199:
case 3928:
case 3425:
case 3858:
case 1376:
case 2455:
case 3735:
case 4031:
case 3470:
case 3032:
case 2294:
case 1501:
case 2127:
case 886:
case 1001:
case 2730:
case 2935:
case 826:
case 2703:
case 1256:
case 3399:
case 1627:
case 2071:
case 2573:
case 895:
case 3156:
case 1304:
case 1105:
case 4010:
case 3432:
case 528:
case 578:
case 125:
case 1946:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1672304401/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,1,0,1,1,0,1,1,0,0,1,0,1,1,1,1,0,0,1,0,0,1,1,0,1,1,1,0,1,1,0,0,1,0,1,1,1,1,1,1,0,1,0,0,0,0,0,0,1,0,1,0,1,0,0,1,1,1,1,0,0,0,1,0,1,0,0,0,1,0,1,1,1,0,1,1,1,0,1,1,0,1,1,1,0,0,0,1,1,0,1,0,0,0,1,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,1,1,1,1,0,1,0,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,0,0,1,1,0,0,0,0,1,1,1,1,0,1,1,1,0,0,0,1,1,1,1,0,1,0,1,1,1,0,1,1,0,0,1,0,1,1,1,1,1,1,0,0,0,1,1,0,0,0,0,1,1,1,0,0,0,0,1,1,1,0,1,1,0,0,1,1,0,1,0,1,0,1,1,0,1,0,1,1,1,0,0,0,0,0,0,1,0,1,0,1,1,1,1,1,0,1,1,1,1,0,0,0,1,0,0,1,1,0,1,1,0,1,0,0,0,1,1,1,0,1,0,0,0,1,1,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,1,0,1,1,1,0,1,1,0,0,1,0,1,0,1,1,1,0,1,0,1,1,0,0,0,1,0,0,1,1,1,1,0,0,0,1,1,1,0,1,1,1,0,0,1,1,1,1,1,0,1,0,1,0,0,1,0,1,1,1,1,1,0,1,1,0,0,1,1,0,0,0,0,1,1,0,1,1,1,1,0,1,0,0,0,0,0,1,0,0,1,1,0,0,0,1,1,0,0,1,1,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,0,1,0,0,1,1,1,0,0,1,0,1,0,1,0,0,0,1,1,1,0,0,1,1,1,0,1,0,0,1,1,0,0,1,0,0,1,0,0,1,1,0,0,1,0,1,0,0,0,1,1,1,1,1,1,0,0,0,0,1,0,0,0,0,1,1,1,0,1,0,0,1,1,1,0,1,0,0,1,1,1,0,1,1,0,0,1,1,0,0,1,1,0,0,0,1,0,0,1,0,0,0,1,0,1,1,1,1,0,0,0,0,1,1,0,1,1,0,1,1,1,0,1,0,0,1,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,1,1,0,1,0,0,0,1,0,1,0,0,1,1,1,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,1,0,1,0,1,0,0,1,1,1,0,1,0,1,1,1,1,1,1,1,1,1,0,0,0,0,1,0,1,1,0,1,1,0,0,0,0,1,0,1,1,0,0,1,1,0,1,0,1,0,0,1,0,0,1,0,1,1,0,0,0,1,1,0,1,0,1,0,0,1,1,0,1,1,1,1,0,0,1,1,0,1,0,1,0,0,0,0,0,0,1,1,1,0,1,0,1,0,1,0,0,1,1,1,1,1,1,1,0,0,1,1,0,1,0,0,0,1,0,0,0,0,1,0,1,0,1,0,1,1,0,1,1,1,0,1,1,1,0,1,0,0,1,1,1,1,1,0,0,0,1,0,1,1,1,0,0,1,0,1,0,1,1,1,1,0,1,1,1,0,1,0,0,1,1,0,0,1,0,1,0,0,0,1,0,0,1,1,1,1,1,0,0,1,0,1,1,0,0,1,1,1,0,0,0,1,1,1,0,1,1,1,1,1,1,1,0,1,0,0,1,1,1,1,0,1,1,1,0,0,1,1,0,1,1,0,0,0,0,1,1,0,0,1,0,1,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,1,1,1,1,0,1,0,0,1,0,0,1,1,1,1,1,0,0,0,1,1,0,1,0,1,0,1,0,0,0,1,1,0,1,0,1,0,1,0,0,1,1,1,0,1,1,1,1,1,1,1,0,0,1,1,0,0,0,0,0,0,1,0,1,1,1,1,1,0,0,0,0,1,1,0,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,1,0,0,1,1,0,1,0,0,0,1,1,1,1,1,1,1,0,1,0,0,0,1,0,0,1,1,0,0,0,1,1,0,1,0,1,0,1,1,0,0,0,1,0,1,1,1,1,1,1,1,0,0,1,1,0,1,1,0,0,1,1,1,1,0,0,1,1,0,0,0,1,1,0,0,0,1,0,1,1,0,1,0,0,0,1,0,1,1,1,0,1,0,1,0,0,0,1,1,1,0,0,0,1,1,0,0,1,1,1,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,1,1,0,0,1,0,1,1,1,1,0,1,1,1,1,1,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,1,0,0,1,1,0,1,0,0,0,1,1,1,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,1,1,0,0,1,0,1,1,0,1,0,0,1,1,0,0,1,1,1,0,0,0,0,0,0,0,0,1,1,0,1,0,0,1,0,0,0,1,1,0,0,1,0,0,1,0,1,0,1,0,0,1,1,1,1,0,1,1,1,1,0,1,1,1,0,0,1,1,0,1,1,1,0,0,1,1,0,0,0,0,0,1,0,0,1,0,0,1,1,1,1,0,0,0,0,1,0,1,0,0,1,0,0,0,1,1,0,1,1,0,0,0,0,1,0,0,0,1,1,1,0,1,0,0,1,0,0,0,1,1,0,0,1,1,0,1,1,0,0,1,1,1,1,0,1,0,0,0,1,0,0,1,0,0,1,0,0,0,0,1,0,1,1,1,0,0,1,0,1,0,1,1,1,0,0,1,0,0,0,1,1,1,0,1,0,0,0,1,0,0,0,1,0,1,1,1,1,1,0,0,1,0,0,0,1,0,0,0,1,1,1,0,0,1,0,1,0,0,0,0,0,1,1,1,0,0,0,1,1,1,0,1,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,1,1,1,0,0,0,1,1,0,1,0,1,0,1,0,1,1,1,1,0,0,0,0,1,1,1,1,0,1,0,1,0,0,0,1,0,1,1,0,0,0,1,1,0,0,1,0,0,1,0,1,1,0,0,1,0,0,1,0,0,0,1,0,1,0,0,0,1,1,1,0,1,1,1,0,0,0,0,0,0,0,0,1,1,1,0,0,1,1,0,1,1,1,0,1,1,1,1,0,0,0,0,0,1,1,0,1,0,0,0,0,1,1,1,1,0,0,0,1,0,1,1,0,1,1,1,0,0,0,0,0,0,1,1,0,0,1,1,1,1,0,1,1,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,1,1,0,1,1,0,0,0,0,1,0,1,0,0,0,1,1,1,1,1,0,1,0,0,0,0,0,1,1,1,1,1,1,0,0,1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,1,0,1,1,0,1,1,0,0,0,1,1,0,1,0,0,1,1,1,0,0,1,1,1,0,0,0,1,0,1,1,0,1,1,0,1,1,0,1,1,1,0,0,1,0,0,1,1,0,0,1,0,0,1,1,1,1,1,1,0,0,0,0,0,1,0,1,1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,0,1,0,0,0,1,0,0,0,1,1,1,1,0,1,0,0,1,1,1,1,1,1,0,1,0,0,0,1,0,0,1,0,1,0,1,0,0,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,1,1,1,0,1,1,0,0,1,1,0,1,0,1,0,1,0,0,1,1,0,1,1,0,1,1,0,1,0,0,1,0,1,1,0,0,0,0,0,1,0,1,0,1,0,1,1,0,1,0,1,0,1,1,1,0,0,1,0,1,1,0,1,0,1,0,0,0,1,1,1,0,1,0,0,0,1,1,1,1,0,1,1,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,1,0,0,1,1,0,1,1,0,0,1,1,0,1,0,0,1,0,1,0,0,1,0,0,1,0,0,1,1,0,0,1,0,0,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,1,1,0,0,1,1,0,1,1,0,1,1,0,1,1,1,1,1,0,1,0,1,0,0,1,1,0,0,1,0,1,0,1,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,1,1,0,0,0,1,1,0,1,1,1,1,1,1,0,1,0,0,1,1,0,1,0,1,1,0,0,0,1,1,0,1,0,1,1,1,1,0,1,1,0,1,1,0,1,0,1,0,1,1,1,0,1,0,1,1,1,1,1,0,1,0,1,0,1,0,0,1,1,1,1,1,0,1,1,0,1,0,0,1,1,1,0,0,0,0,1,1,1,0,1,0,1,0,1,1,0,0,0,0,1,0,0,1,0,1,1,0,1,0,0,0,0,1,0,1,0,1,1,0,1,1,0,0,1,1,0,0,0,1,0,0,1,1,1,0,1,0,1,0,1,0,0,0,0,0,0,1,0,1,1,1,1,1,0,1,0,1,1,0,1,0,1,1,0,0,1,1,1,1,0,1,0,1,1,0,0,1,1,0,0,1,1,1,1,0,0,0,1,1,1,1,0,0,1,1,1,0,0,1,0,1,1,0,0,1,0,1,1,0,0,0,1,0,0,0,1,0,1,0,1,1,1,1,1,1,0,1,1,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,1,1,1,1,0,0,0,1,1,0,0,1,0,1,1,1,1,0,1,1,0,0,1,1,1,1,0,0,0,0,1,0,0,0,1,0,0,1,1,1,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,1,1,1,0,1,1,0,1,1,1,0,1,0,1,1,1,0,1,1,1,1,0,1,0,1,1,0,0,0,0,1,1,1,0,0,0,0,0,0,1,0,1,0,1,0,1,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,1,1,0,0,1,1,1,1,0,1,1,0,0,0,0,0,0,1,1,0,0,0,1,1,1,1,1,0,1,0,0,0,1,1,1,0,1,1,1,0,1,0,1,1,0,1,1,1,1,1,0,1,0,0,0,0,0,1,0,1,1,1,0,1,0,1,0,0,0,1,0,1,1,0,0,0,0,0,1,0,1,0,0,1,1,0,0,0,1,0,0,0,0,1,1,1,0,1,0,1,0,1,0,0,0,0,0,0,0,1,1,1,0,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,0,0,1,1,0,1,1,0,0,1,1,0,0,1,0,0,0,1,0,1,0,1,0,1,1,1,1,0,0,0,1,1,1,0,0,0,0,1,0,0,1,1,1,1,0,0,0,1,1,0,1,1,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,1,1,0,1,0,0,0,0,1,0,0,1,0,0,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,0,0,1,0,0,1,1,1,1,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,1,1,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,1,1,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,0,1,1,1,0,0,0,1,1,0,1,1,1,0,0,0,1,1,1,0,1,0,0,1,0,1,1,0,1,0,1,1,1,0,1,0,1,0,0,0,0,0,0,0,0,1,1,0,1,1,0,1,0,1,1,1,0,1,0,0,0,0,0,0,1,0,0,1,1,0,1,1,0,0,1,1,0,1,1,0,1,1,1,0,0,1,0,1,1,0,0,1,1,0,1,0,1,1,1,0,0,0,0,1,1,1,1,1,1,0,1,0,0,1,1,1,0,1,1,0,1,1,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,0,1,1,1,0,1,1,0,1,0,0,0,1,0,0,1,1,1,1,0,0,1,1,1,1,0,1,0,1,0,0,1,0,0,1,0,1,1,0,1,0,0,0,1,1,0,0,1,0,1,1,0,0,0,1,1,0,1,1,1,1,1,0,0,0,0,0,0,1,0,0,1,0,1,1,1,1,0,1,0,1,1,0,1,0,0,1,0,1,0,0,1,0,0,1,1,0,1,0,1,0,1,0,1,1,0,1,0,1,1,0,1,1,0,1,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,1,1,1,0,0,0,1,0,1,1,0,0,0,1,0,0,0,1,0,1,0,1,1,0,0,1,0,1,1,0,0,0,1,0,1,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1,0,0,0,0,0,1,0,0,1,1,1,1,1,0,0,0,0,1,1,0,0,1,1,0,0,1,0,1,0,0,0,0,1,1,1,1,1,0,1,1,1,0,1,0,0,0,1,0,1,1,0,1,0,1,1,0,1,0,1,1,1,1,1,1,1,0,1,0,0,1,1,0,1,1,1,0,0,1,1,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,1,1,0,1,1,1,0,0,0,0,1,1,0,1,1,1,0,1,0,0,0,0,1,0,0,1,1,0,0,1,0,0,1,0,1,0,1,0,1,0,1,1,1,1,1,0,0,0,0,0,1,0,0,1,0,0,1,1,0,0,1,0,0,1,0,1,1,0,1,1,0,0,0,1,1,0,1,0,0,0,0,0,0,1,0,1,0,1,0,0,1,1,0,1,0,0,1,1,0,0,0,0,1,1,0,1,1,1,0,0,0,1,0,0,1,0,1,1,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,1,1,1,0,1,0,0,0,0,0,1,0,1,0,1,1,0,1,0,1,0,1,0,1,1,1,0,1,1,0,0,1,0,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,0,1,1,1,0,1,0,1,0,0,1,1,0,0,0,0,0,1,0,1,1,1,0,0,1,1,1,1,1,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,1,0,1,0,1,1,0,0,1,1,1,0,0,1,1,0,0,1,1,0,0,1,0,1,0,1,1,1,1,1,1,0,0,1,0,0,0,0,0,1,1,0,1,0,0,1,0,1,1,0,1,0,0,1,1,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,0,0,1,0,0,1,1,0,1,1,0,0,0,1,0,0,1,0,1,0,1,0,0,1,0,1,0,1,1,0,1,1,0,0,0,1,1,1,0,1,1,0,1,0,0,1,1,0,1,1,0,1,1,1,0,0,0,0,0,0,0,1,0,1,1,1,1,0,1,1,0,1,0,1,1,1,0,0,0,0,1,1,1,0,0,0,1,1,1,1,0,1,1,0,0,0,0,1,0,1,1,0,1,1,1,1,1,0,0,1,1,1,1,1,0,0,0,0,1,1,1,1,0,1,1,1,1,1,1,1,1,0,0,1,0,1,0,1,0,1,1,0,1,1,1,0,0,0,1,0,1,0,0,0,1,1,1,0,1,1,0,0,1,1,1,1,0,1,1,0,1,0,1,0,1,1,0,0,1,1,1,1,1,0,0,1,1,1,0,0,0,1,1,1,1,0,1,1,1,0,1,0,0,1,0,1,1,0,1,0,0,1,1,0,0,0,1,0,1,1,1,1,0,0,1,1,0,1,1,1,1,1,1,1,1,1,0,1,0,0,1,0,1,0,0,1,1,0,1,1,1,1,1,0,0,1,0,1,0,0,0,0,0,0,1,1,0,1,1,0,0,1,0,0,1,0,1,0,0,1,1,0,1,0,0,0,0,0,1,1,1,1,1,0,1,1,1,1,1,0,1,0,0,0,1,0,1,0,1,0,1,1,0,0,1,1,0,0,0,1,0,0,1,1,0,1,1,0,1,0,0,0,0,0,0,1,0,0,1,1,0,0,0,0,0,1,0,1,0,0,0,0,1,1,1,1,1,0,1,0,1,1,0,0,0,0,1,1,0,0,1,0,1,1,0,0,1,0,1,0,0,1,1,1,0,0,1,0,1,0,0,0,0,0,0,1,0,1,1,0,1,1,1,1,1,0,1,0,0,1,1,1,1,0,0,0,1,0,1,0,0,1,0,0,0,0,0,1,1,0,0,1,0,1,1,0,1,1,0,0,0,1,1,0,0,1,1,0,1,0,0,0,1,0,0,0,1,0,0,0,1,1,1,1,0,0,0,0,1,0,1,1,1,1,0,1,1,1,0,1,1,0,1,1,0,0,0,1,1,0,1,0,0,0,0,0,1,0,0,0,0,1,1,1,1,1,0,1,0,0,0,1,0,0,1,1,1,1,0,0,0,0,0,1,0,0,1,1,1,1,0,0,1,1,0,0,1,1,1,1,0,1,0,1,0,1,1,1,1,1,1,1,1,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,1,0,1,0,0,1,1,0,0,1,1,1,0,0,1,1,0,1,1,0,0,1,0,1,0,0,0,1,1,0,1,0,0,1,1,0,0,1,1,1,0,1,1,1,1,0,1,0,1,1,1,1,0,0,0,0,0,1,1,0,0,1,1,1,0,0,0,1,0,0,1,0,0,0,1,1,0,0,0,1,0,0,0,0,0,0,1,0,1,0,1,0,1,1,1,1,0,0,1,0,0,1,0,0,1,1,0,1,0,0,0,0,1,0,0,1,0,0,0,1,0,0,1,1,1,0,1,0,0,0,0,0,0,0,0,1,0,1,1,0,0,1,0,0,1,0,0,1,];
var gg_b = "1672300802/";

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
