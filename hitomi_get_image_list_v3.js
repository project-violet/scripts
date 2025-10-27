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
case 3127:
case 333:
case 2121:
case 1525:
case 2178:
case 2279:
case 4047:
case 2236:
case 396:
case 2373:
case 3242:
case 748:
case 3576:
case 941:
case 53:
case 1417:
case 3762:
case 1372:
case 3604:
case 3371:
case 265:
case 2377:
case 2300:
case 1761:
case 584:
case 3328:
case 3502:
case 3848:
case 425:
case 2412:
case 1844:
case 3008:
case 2362:
case 713:
case 780:
case 633:
case 1851:
case 500:
case 1393:
case 2932:
case 2818:
case 3442:
case 728:
case 3560:
case 2436:
case 1441:
case 2683:
case 1937:
case 939:
case 2771:
case 3777:
case 458:
case 1367:
case 1198:
case 151:
case 3082:
case 1584:
case 993:
case 1430:
case 2909:
case 3681:
case 2392:
case 1933:
case 525:
case 3773:
case 699:
case 1217:
case 4011:
case 3258:
case 3680:
case 2942:
case 3591:
case 3725:
case 714:
case 1834:
case 1080:
case 809:
case 1788:
case 671:
case 1776:
case 1592:
case 1739:
case 1947:
case 3936:
case 3815:
case 2446:
case 1431:
case 2622:
case 2519:
case 3064:
case 994:
case 1664:
case 2593:
case 2770:
case 2255:
case 147:
case 3701:
case 229:
case 2707:
case 2086:
case 3561:
case 1231:
case 1126:
case 334:
case 2796:
case 1659:
case 1500:
case 3232:
case 1068:
case 566:
case 3698:
case 4033:
case 2506:
case 2845:
case 3416:
case 957:
case 2455:
case 1790:
case 878:
case 2120:
case 3838:
case 3889:
case 249:
case 2766:
case 3209:
case 1087:
case 1174:
case 2773:
case 2590:
case 1211:
case 665:
case 3392:
case 2681:
case 3909:
case 1940:
case 1391:
case 1706:
case 2075:
case 1083:
case 2700:
case 2777:
case 4013:
case 1931:
case 3479:
case 2560:
case 3818:
case 1857:
case 581:
case 1785:
case 2008:
case 908:
case 3362:
case 3020:
case 2848:
case 2502:
case 2955:
case 3695:
case 1767:
case 924:
case 4030:
case 365:
case 1814:
case 3377:
case 2604:
case 673:
case 1243:
case 1719:
case 3835:
case 1507:
case 2194:
case 1411:
case 472:
case 1122:
case 2576:
case 2588:
case 2164:
case 2242:
case 1763:
case 1065:
case 481:
case 4041:
case 3279:
case 976:
case 3236:
case 188:
case 3178:
case 3186:
case 3121:
case 4054:
case 1797:
case 47:
case 3665:
case 1339:
case 2209:
case 711:
case 4040:
case 923:
case 631:
case 349:
case 1969:
case 407:
case 2912:
case 3120:
case 2838:
case 918:
case 2108:
case 1183:
case 1917:
case 1233:
case 2303:
case 798:
case 28:
case 867:
case 2668:
case 991:
case 2549:
case 1571:
case 2175:
case 1410:
case 1187:
case 3572:
case 3585:
case 3796:
case 1913:
case 8:
case 1074:
case 3246:
case 3301:
case 3674:
case 2370:
case 1999:
case 346:
case 1433:
case 331:
case 3567:
case 1686:
case 507:
case 1621:
case 1678:
case 852:
case 2216:
case 3078:
case 649:
case 2027:
case 495:
case 3524:
case 3770:
case 2396:
case 2409:
case 2064:
case 1930:
case 3622:
case 3519:
case 943:
case 3446:
case 2936:
case 326:
case 1605:
case 2366:
case 1954:
case 115:
case 1195:
case 2591:
case 1210:
case 2725:
case 3856:
case 3942:
case 2432:
case 423:
case 2445:
case 3816:
case 1775:
case 1782:
case 418:
case 907:
case 263:
case 1914:
case 753:
case 2787:
case 1929:
case 289:
case 3673:
case 3559:
case 3215:
case 62:
case 1077:
case 34:
case 2256:
case 1000:
case 1184:
case 2783:
case 3395:
case 2628:
case 2671:
case 3677:
case 518:
case 187:
case 3289:
case 2024:
case 523:
case 3188:
case 3139:
case 3809:
case 3662:
case 1661:
case 3527:
case 1125:
case 2586:
case 3704:
case 995:
case 443:
case 2245:
case 3061:
case 3383:
case 2765:
case 1434:
case 3091:
case 1957:
case 3415:
case 3594:
case 1831:
case 2952:
case 3387:
case 1177:
case 4014:
case 3798:
case 524:
case 1830:
case 3684:
case 485:
case 2380:
case 3248:
case 797:
case 1305:
case 444:
case 1690:
case 868:
case 1581:
case 1660:
case 2520:
case 1451:
case 1173:
case 2418:
case 1759:
case 740:
case 3060:
case 1386:
case 1321:
case 2106:
case 1841:
case 2915:
case 2879:
case 585:
case 479:
case 2722:
case 3945:
case 2670:
case 1764:
case 2163:
case 2938:
case 1869:
case 3191:
case 2368:
case 754:
case 1727:
case 544:
case 1504:
case 1899:
case 450:
case 1025:
case 972:
case 3780:
case 292:
case 3625:
case 2167:
case 476:
case 981:
case 1251:
case 788:
case 3076:
case 3326:
case 462:
case 3846:
case 1170:
case 2415:
case 2594:
case 686:
case 3456:
case 966:
case 1951:
case 2102:
case 3097:
case 790:
case 3765:
case 1382:
case 1375:
case 2383:
case 2061:
case 3245:
case 747:
case 375:
case 1103:
case 802:
case 1833:
case 2704:
case 3578:
case 3521:
case 3795:
case 3586:
case 2527:
case 2662:
case 2139:
case 1619:
case 910:
case 3093:
case 983:
case 2289:
case 1308:
case 235:
case 2677:
case 1810:
case 3628:
case 3783:
case 3256:
case 24:
case 2049:
case 56:
case 386:
case 1574:
case 1720:
case 2215:
case 1672:
case 1166:
case 3948:
case 594:
case 1196:
case 2726:
case 3787:
case 457:
case 675:
case 363:
case 2365:
case 2935:
case 3445:
case 727:
case 3218:
case 1705:
case 2088:
case 4051:
case 521:
case 3119:
case 3398:
case 2780:
case 812:
case 1253:
case 593:
case 2191:
case 1414:
case 3812:
case 3938:
case 536:
case 2858:
case 3163:
case 3435:
case 3670:
case 104:
case 1811:
case 2374:
case 925:
case 1007:
case 364:
case 421:
case 69:
case 877:
case 3836:
case 3915:
case 3879:
case 3106:
case 1327:
case 2768:
case 261:
case 439:
case 541:
case 1934:
case 751:
case 3696:
case 1364:
case 2842:
case 1096:
case 3520:
case 692:
case 1457:
case 2508:
case 958:
case 3774:
case 945:
case 1587:
case 3185:
case 436:
case 1950:
case 3235:
case 1066:
case 1394:
case 493:
case 1323:
case 984:
case 664:
case 1171:
case 2575:
case 1453:
case 2149:
case 2081:
case 605:
case 2217:
case 2933:
case 3566:
case 2430:
case 2675:
case 2682:
case 654:
case 3853:
case 2168:
case 817:
case 2584:
case 3083:
case 2198:
case 3361:
case 2454:
case 340:
case 2937:
case 3931:
case 3447:
case 1683:
case 2441:
case 1436:
case 2608:
case 968:
case 3857:
case 2393:
case 2851:
case 3785:
case 2319:
case 2004:
case 2469:
case 3829:
case 2761:
case 1300:
case 3349:
case 354:
case 2372:
case 881:
case 3243:
case 2501:
case 1105:
case 1835:
case 3570:
case 87:
case 3411:
case 3724:
case 3122:
case 2910:
case 3763:
case 1373:
case 3065:
case 1236:
case 1279:
case 1178:
case 2525:
case 2254:
case 1186:
case 1665:
case 2413:
case 3339:
case 1766:
case 3388:
case 2240:
case 3969:
case 149:
case 538:
case 1120:
case 1958:
case 2098:
case 3183:
case 1845:
case 1506:
case 3233:
case 353:
case 1325:
case 552:
case 3302:
case 2068:
case 742:
case 2500:
case 3528:
case 3571:
case 1796:
case 1585:
case 2181:
case 1572:
case 3913:
case 2231:
case 2760:
case 3999:
case 2627:
case 1567:
case 131:
case 3678:
case 438:
case 1078:
case 959:
case 2702:
case 1021:
case 567:
case 1707:
case 247:
case 3360:
case 1255:
case 1770:
case 1593:
case 174:
case 3930:
case 653:
case 1519:
case 1622:
case 2562:
case 5:
case 2694:
case 72:
case 2431:
case 1446:
case 3437:
case 3390:
case 126:
case 2592:
case 970:
case 2788:
case 315:
case 895:
case 1703:
case 45:
case 1597:
case 3210:
case 3195:
case 1942:
case 722:
case 220:
case 2797:
case 1127:
case 3413:
case 3254:
case 133:
case 3791:
case 3241:
case 4079:
case 196:
case 460:
case 792:
case 2763:
case 651:
case 3910:
case 2122:
case 419:
case 825:
case 1194:
case 2411:
case 2724:
case 2570:
case 1123:
case 1458:
case 2507:
case 3501:
case 2719:
case 2243:
case 1762:
case 3385:
case 2349:
case 1604:
case 2814:
case 3761:
case 764:
case 1955:
case 2829:
case 3004:
case 912:
case 3851:
case 2857:
case 83:
case 1442:
case 1946:
case 2931:
case 240:
case 3749:
case 1700:
case 351:
case 1082:
case 1075:
case 516:
case 3584:
case 3269:
case 977:
case 2853:
case 3397:
case 3168:
case 2940:
case 3675:
case 3682:
case 1159:
case 2566:
case 1626:
case 2211:
case 1773:
case 2174:
case 2087:
case 3081:
case 1432:
case 2210:
case 2195:
case 902:
case 3080:
case 3104:
case 883:
case 1023:
case 2954:
case 1366:
case 1094:
case 3739:
case 3776:
case 3947:
case 406:
case 2390:
case 1936:
case 2437:
case 3623:
case 3694:
case 3440:
case 3562:
case 2930:
case 1064:
case 1396:
case 4055:
case 1701:
case 2360:
case 409:
case 2022:
case 627:
case 1216:
case 3943:
case 2678:
case 2686:
case 2999:
case 3760:
case 4046:
case 182:
case 3231:
case 2074:
case 2913:
case 134:
case 3126:
case 2187:
case 506:
case 2410:
case 478:
case 3577:
case 2571:
case 1549:
case 171:
case 3500:
case 690:
case 1232:
case 18:
case 2302:
case 3068:
case 253:
case 1303:
case 2233:
case 647:
case 2917:
case 3911:
case 3098:
case 1416:
case 1838:
case 3790:
case 3573:
case 1912:
case 327:
case 1889:
case 3240:
case 763:
case 1326:
case 314:
case 1063:
case 2101:
case 3837:
case 3107:
case 2831:
case 3663:
case 1456:
case 2957:
case 1097:
case 2691:
case 1765:
case 3697:
case 1245:
case 909:
case 1578:
case 3667:
case 2450:
case 1795:
case 3619:
case 2840:
case 1024:
case 530:
case 287:
case 86:
case 2234:
case 2649:
case 1304:
case 1671:
case 1628:
case 3028:
case 2000:
case 1256:
case 782:
case 1085:
case 3574:
case 2708:
case 186:
case 4015:
case 298:
case 3720:
case 3672:
case 3685:
case 3166:
case 771:
case 189:
case 3196:
case 1787:
case 2914:
case 163:
case 211:
case 2598:
case 2250:
case 3606:
case 430:
case 628:
case 796:
case 3705:
case 2251:
case 2794:
case 3257:
case 733:
case 680:
case 2688:
case 613:
case 2639:
case 2244:
case 1167:
case 919:
case 348:
case 2025:
case 355:
case 2727:
case 1368:
case 41:
case 1197:
case 3786:
case 3721:
case 2602:
case 577:
case 916:
case 1938:
case 1435:
case 1670:
case 1607:
case 3811:
case 799:
case 2817:
case 2001:
case 164:
case 1915:
case 1836:
case 1106:
case 2378:
case 380:
case 2321:
case 2854:
case 3934:
case 3096:
case 3364:
case 2173:
case 2451:
case 1520:
case 1774:
case 2660:
case 477:
case 3587:
case 1666:
case 1185:
case 2581:
case 3950:
case 2690:
case 2305:
case 3066:
case 4048:
case 2084:
case 2830:
case 3214:
case 967:
case 749:
case 687:
case 1816:
case 1935:
case 891:
case 3073:
case 3914:
case 2196:
case 1438:
case 1673:
case 1489:
case 570:
case 2685:
case 823:
case 1190:
case 398:
case 1215:
case 3708:
case 142:
case 2071:
case 556:
case 14:
case 3184:
case 3000:
case 2028:
case 4056:
case 2810:
case 3649:
case 135:
case 3234:
case 938:
case 3062:
case 731:
case 1188:
case 3840:
case 611:
case 2619:
case 1139:
case 1527:
case 1704:
case 2375:
case 3434:
case 1102:
case 2951:
case 3957:
case 470:
case 1832:
case 726:
case 698:
case 3580:
case 952:
case 95:
case 1415:
case 3831:
case 456:
case 1692:
case 3830:
case 1798:
case 3084:
case 1248:
case 2323:
case 3305:
case 3690:
case 3581:
case 2587:
case 773:
case 2457:
case 3451:
case 1842:
case 2364:
case 1956:
case 3444:
case 2934:
case 213:
case 3321:
case 1768:
case 280:
case 468:
case 3841:
case 301:
case 2583:
case 537:
case 850:
case 2007:
case 3192:
case 1601:
case 1374:
case 2811:
case 3764:
case 1858:
case 1448:
case 2721:
case 3727:
case 3025:
case 2003:
case 879:
case 3813:
case 1625:
case 1161:
case 3162:
case 3676:
case 437:
case 3723:
case 1088:
case 3251:
case 3794:
case 1076:
case 963:
case 610:
case 3422:
case 683:
case 207:
case 1982:
case 1975:
case 1344:
case 2609:
case 2318:
case 3735:
case 1824:
case 2040:
case 669:
case 2748:
case 989:
case 3352:
case 2987:
case 1478:
case 2298:
case 3926:
case 3981:
case 1633:
case 2550:
case 1714:
case 2480:
case 1556:
case 2169:
case 178:
case 986:
case 1908:
case 1897:
case 2031:
case 2892:
case 3037:
case 4059:
case 2983:
case 1637:
case 3274:
case 2117:
case 1278:
case 2498:
case 310:
case 1753:
case 1221:
case 1286:
case 383:
case 1545:
case 1179:
case 1806:
case 3147:
case 4064:
case 2873:
case 369:
case 3904:
case 109:
case 295:
case 3718:
case 4023:
case 4094:
case 1885:
case 571:
case 106:
case 534:
case 3871:
case 3348:
case 2801:
case 2131:
case 1535:
case 1146:
case 3807:
case 3870:
case 2281:
case 384:
case 2226:
case 3287:
case 2017:
case 2069:
case 2404:
case 4075:
case 3514:
case 3529:
case 3803:
case 2825:
case 1959:
case 3756:
case 2013:
case 2345:
case 3389:
case 600:
case 596:
case 2715:
case 1220:
case 3338:
case 4008:
case 533:
case 3968:
case 632:
case 1334:
case 325:
case 499:
case 2922:
case 2204:
case 684:
case 964:
case 3487:
case 1643:
case 3866:
case 63:
case 116:
case 3043:
case 2738:
case 3315:
case 3896:
case 2544:
case 272:
case 119:
case 3557:
case 1420:
case 1155:
case 1923:
case 433:
case 3047:
case 1350:
case 1079:
case 2041:
case 15:
case 2010:
case 3752:
case 922:
case 3280:
case 2348:
case 756:
case 3877:
case 2871:
case 3468:
case 2828:
case 1459:
case 770:
case 2474:
case 0:
case 1751:
case 266:
case 3335:
case 2718:
case 429:
case 395:
case 2904:
case 1538:
case 269:
case 138:
case 549:
case 283:
case 210:
case 4021:
case 4086:
case 3498:
case 1016:
case 2274:
case 94:
case 2646:
case 2037:
case 3031:
case 3892:
case 935:
case 1891:
case 1353:
case 526:
case 1920:
case 3480:
case 3169:
case 1:
case 695:
case 2981:
case 2352:
case 3748:
case 3040:
case 1009:
case 1464:
case 3318:
case 3862:
case 449:
case 531:
case 307:
case 1654:
case 617:
case 3054:
case 2636:
case 1116:
case 1905:
case 2557:
case 3642:
case 372:
case 2980:
case 805:
case 3544:
case 3738:
case 2043:
case 1890:
case 2315:
case 3789:
case 573:
case 1921:
case 2487:
case 3481:
case 2110:
case 2745:
case 3030:
case 681:
case 1888:
case 1876:
case 1109:
case 768:
case 2389:
case 317:
case 672:
case 3974:
case 1699:
case 2283:
case 3099:
case 2465:
case 2133:
case 1613:
case 1802:
case 1669:
case 1132:
case 2529:
case 1282:
case 2514:
case 3069:
case 245:
case 2011:
case 840:
case 565:
case 1058:
case 2287:
case 2870:
case 232:
case 2137:
case 1657:
case 3496:
case 2051:
case 3057:
case 3992:
case 241:
case 2554:
case 1710:
case 3883:
case 1536:
case 2530:
case 3962:
case 2716:
case 3053:
case 4002:
case 1331:
case 3755:
case 1961:
case 2881:
case 324:
case 3466:
case 965:
case 3316:
case 168:
case 461:
case 2599:
case 3865:
case 221:
case 2150:
case 2928:
case 2971:
case 3977:
case 3746:
case 4060:
case 2355:
case 1035:
case 344:
case 3407:
case 2401:
case 3635:
case 4090:
case 3470:
case 2569:
case 1629:
case 3973:
case 3014:
case 1733:
case 3895:
case 3029:
case 624:
case 1472:
case 535:
case 422:
case 2903:
case 1485:
case 2292:
case 3358:
case 54:
case 156:
case 1317:
case 26:
case 887:
case 542:
case 1369:
case 1747:
case 752:
case 3779:
case 3736:
case 1976:
case 2400:
case 691:
case 3471:
case 929:
case 2907:
case 1399:
case 2970:
case 1267:
case 294:
case 1313:
case 931:
case 2144:
case 2262:
case 1743:
case 159:
case 618:
case 1293:
case 3157:
case 1555:
case 2151:
case 1224:
case 1902:
case 2996:
case 3228:
case 1330:
case 1056:
case 3114:
case 3271:
case 2034:
case 435:
case 2880:
case 3129:
case 3656:
case 3537:
case 1805:
case 2615:
case 811:
case 442:
case 1285:
case 3342:
case 257:
case 2758:
case 1493:
case 2273:
case 1424:
case 1711:
case 7:
case 2462:
case 1878:
case 3533:
case 323:
case 1354:
case 1821:
case 949:
case 1206:
case 2050:
case 1990:
case 1310:
case 2029:
case 285:
case 3804:
case 2014:
case 1402:
case 2973:
case 3284:
case 336:
case 2470:
case 828:
case 2635:
case 1290:
case 2511:
case 177:
case 2407:
case 1558:
case 393:
case 2746:
case 592:
case 641:
case 3971:
case 2900:
case 1439:
case 3150:
case 208:
case 1985:
case 2403:
case 321:
case 3732:
case 2316:
case 3826:
case 224:
case 1967:
case 2270:
case 464:
case 1337:
case 3201:
case 279:
case 112:
case 11:
case 2053:
case 1202:
case 1924:
case 636:
case 3484:
case 1919:
case 693:
case 2547:
case 719:
case 3225:
case 250:
case 341:
case 2992:
case 760:
case 2057:
case 621:
case 1997:
case 3051:
case 855:
case 2496:
case 1276:
case 1239:
case 996:
case 1138:
case 1460:
case 3336:
case 3379:
case 218:
case 1769:
case 463:
case 1827:
case 3966:
case 2533:
case 1650:
case 1509:
case 575:
case 489:
case 3273:
case 3758:
case 2984:
case 1864:
case 1015:
case 1343:
case 3492:
case 803:
case 2537:
case 2656:
case 1532:
case 662:
case 3880:
case 1249:
case 2271:
case 3277:
case 1491:
case 934:
case 3200:
case 2228:
case 3473:
case 3151:
case 4024:
case 3689:
case 3638:
case 1038:
case 3262:
case 1089:
case 709:
case 243:
case 1261:
case 1730:
case 814:
case 3970:
case 475:
case 1152:
case 2471:
case 1291:
case 10:
case 1741:
case 586:
case 1311:
case 362:
case 2358:
case 4063:
case 1859:
case 102:
case 3903:
case 3329:
case 829:
case 3849:
case 874:
case 1130:
case 2610:
case 3459:
case 831:
case 1965:
case 3223:
case 3294:
case 352:
case 2055:
case 4022:
case 743:
case 209:
case 3142:
case 2806:
case 1616:
case 338:
case 987:
case 2286:
case 2221:
case 3227:
case 2278:
case 3423:
case 1117:
case 3631:
case 65:
case 515:
case 2046:
case 3891:
case 1268:
case 3353:
case 791:
case 1534:
case 2908:
case 998:
case 3920:
case 278:
case 2112:
case 1632:
case 1480:
case 2556:
case 849:
case 2714:
case 3:
case 1113:
case 3427:
case 2633:
case 2867:
case 2478:
case 2729:
case 1040:
case 3357:
case 2824:
case 2351:
case 638:
case 1318:
case 1862:
case 107:
case 1041:
case 2350:
case 260:
case 4065:
case 181:
case 3654:
case 2994:
case 420:
case 1054:
case 17:
case 2923:
case 3641:
case 1551:
case 2518:
case 172:
case 3860:
case 750:
case 454:
case 3921:
case 1426:
case 1481:
case 724:
case 4095:
case 3482:
case 405:
case 779:
case 1356:
case 1030:
case 2964:
case 1140:
case 3109:
case 1715:
case 3208:
case 1345:
case 1013:
case 2959:
case 1099:
case 3548:
case 3282:
case 3275:
case 1404:
case 1069:
case 2012:
case 785:
case 1017:
case 1226:
case 4087:
case 1131:
case 2535:
case 2611:
case 505:
case 3617:
case 1801:
case 2640:
case 3819:
case 3982:
case 3344:
case 3824:
case 903:
case 2357:
case 882:
case 1352:
case 547:
case 3729:
case 3478:
case 834:
case 1926:
case 3633:
case 3486:
case 3556:
case 2920:
case 3908:
case 606:
case 3897:
case 3046:
case 3405:
case 1646:
case 2631:
case 1111:
case 2515:
case 3637:
case 3278:
case 183:
case 3286:
case 3545:
case 2142:
case 2589:
case 447:
case 309:
case 3055:
case 1718:
case 678:
case 2751:
case 76:
case 2223:
case 1143:
case 2459:
case 2744:
case 1828:
case 3610:
case 2849:
case 1871:
case 1348:
case 762:
case 4080:
case 25:
case 2329:
case 1137:
case 1807:
case 1998:
case 184:
case 2058:
case 4081:
case 1011:
case 145:
case 1495:
case 2750:
case 2275:
case 616:
case 2548:
case 736:
case 1529:
case 2132:
case 1133:
case 1465:
case 451:
case 739:
case 619:
case 158:
case 1389:
case 2208:
case 928:
case 2109:
case 2876:
case 721:
case 660:
case 1968:
case 913:
case 3964:
case 904:
case 1745:
case 3334:
case 1295:
case 2630:
case 1110:
case 2475:
case 1553:
case 3643:
case 955:
case 833:
case 896:
case 1315:
case 1043:
case 551:
case 2042:
case 2860:
case 3518:
case 319:
case 899:
case 1557:
case 2905:
case 1483:
case 3647:
case 2116:
case 1636:
case 2641:
case 3994:
case 360:
case 3350:
case 1047:
case 784:
case 2733:
case 3402:
case 504:
case 2629:
case 2156:
case 1569:
case 136:
case 1517:
case 377:
case 1401:
case 3558:
case 3740:
case 4066:
case 745:
case 1709:
case 1355:
case 3260:
case 2737:
case 758:
case 139:
case 3731:
case 2949:
case 1928:
case 3439:
case 951:
case 3972:
case 121:
case 1599:
case 3967:
case 1881:
case 1826:
case 2961:
case 4070:
case 3337:
case 4007:
case 2331:
case 1346:
case 892:
case 89:
case 3202:
case 455:
case 1530:
case 2653:
case 1652:
case 2536:
case 3963:
case 1225:
case 3052:
case 3333:
case 513:
case 2340:
case 3288:
case 1051:
case 580:
case 3997:
case 3276:
case 1044:
case 3808:
case 3138:
case 2820:
case 700:
case 3460:
case 2657:
case 3189:
case 237:
case 2990:
case 2341:
case 3347:
case 927:
case 3769:
case 1966:
case 3827:
case 330:
case 2821:
case 3461:
case 3650:
case 2467:
case 1758:
case 3864:
case 3343:
case 3015:
case 2272:
case 3823:
case 1615:
case 2135:
case 2805:
case 3532:
case 3148:
case 2960:
case 2497:
case 602:
case 3713:
case 3249:
case 4071:
case 3491:
case 1277:
case 2902:
case 2555:
case 1151:
case 1473:
case 1638:
case 259:
case 1144:
case 1262:
case 630:
case 2313:
case 2045:
case 3261:
case 3730:
case 194:
case 2267:
case 2399:
case 947:
case 3516:
case 769:
case 3152:
case 2297:
case 1868:
case 2988:
case 3754:
case 3291:
case 1477:
case 1400:
case 3741:
case 766:
case 2747:
case 2369:
case 2317:
case 256:
case 1742:
case 1903:
case 77:
case 501:
case 2542:
case 2138:
case 1618:
case 176:
case 988:
case 3018:
case 2276:
case 1309:
case 1496:
case 781:
case 3340:
case 2288:
case 2333:
case 2052:
case 4025:
case 3710:
case 2963:
case 1883:
case 3536:
case 3579:
case 2919:
case 2882:
case 2924:
case 1053:
case 4001:
case 905:
case 1207:
case 1270:
case 3961:
case 1887:
case 1466:
case 717:
case 401:
case 1865:
case 2972:
case 1403:
case 2439:
case 3949:
case 940:
case 2731:
case 3737:
case 144:
case 2740:
case 861:
case 2558:
case 2115:
case 2290:
case 1635:
case 2906:
case 3156:
case 3629:
case 2048:
case 2310:
case 3472:
case 915:
case 1358:
case 356:
case 2311:
case 3747:
case 598:
case 2741:
case 3939:
case 1471:
case 2449:
case 2152:
case 1901:
case 2516:
case 3399:
case 2261:
case 2089:
case 511:
case 3743:
case 2038:
case 4062:
case 3118:
case 359:
case 1157:
case 3902:
case 3224:
case 4000:
case 3330:
case 1228:
case 2634:
case 1114:
case 2491:
case 1271:
case 4077:
case 656:
case 2148:
case 2799:
case 3805:
case 1537:
case 3546:
case 3135:
case 3272:
case 498:
case 2015:
case 84:
case 3493:
case 4073:
case 3711:
case 2509:
case 1822:
case 3419:
case 2461:
case 3821:
case 3354:
case 2827:
case 1712:
case 587:
case 411:
case 2769:
case 3206:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1761580802/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,0,1,0,1,0,1,1,0,1,1,0,0,1,1,0,1,1,0,0,0,0,0,1,1,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,1,1,0,1,0,0,0,0,0,1,1,0,1,0,0,0,1,0,0,1,0,0,0,1,1,0,0,0,0,0,1,1,0,1,1,0,1,0,0,0,0,1,1,0,0,0,0,0,0,1,0,1,0,1,1,0,1,0,0,1,0,0,1,1,0,0,1,0,1,0,0,0,0,1,0,0,0,0,1,0,1,1,1,1,0,1,1,0,0,1,0,1,1,0,1,0,1,0,1,0,0,0,0,1,0,1,1,0,0,0,1,1,0,0,0,1,0,0,1,1,0,1,0,1,1,1,0,0,1,1,1,1,0,1,1,1,1,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,0,0,0,1,0,1,1,0,0,1,0,0,0,0,1,0,0,1,0,0,1,0,1,0,0,1,1,0,1,0,1,0,1,0,1,1,0,0,1,0,0,1,1,0,1,1,1,0,1,0,1,1,0,0,1,0,0,1,0,0,0,0,0,1,1,1,0,0,1,0,1,0,1,0,1,0,0,1,0,1,1,0,0,1,0,0,1,0,0,0,0,0,1,0,1,1,0,0,0,1,1,0,1,0,1,0,1,0,1,1,1,1,1,0,0,1,1,0,1,1,0,1,0,1,0,1,1,0,0,1,0,1,0,1,1,0,1,1,1,1,1,1,0,0,1,1,0,1,1,1,1,0,0,0,1,0,0,1,0,0,1,0,1,0,0,1,0,0,1,1,0,1,0,0,0,0,0,0,1,0,1,1,0,1,0,0,1,0,0,0,1,1,1,0,1,0,1,0,0,0,0,0,0,1,1,1,1,1,1,0,1,0,0,0,1,1,0,0,1,0,1,1,1,1,1,0,0,1,1,1,0,0,1,0,1,1,1,0,0,1,1,1,1,1,0,1,1,1,1,1,0,0,0,1,0,1,0,1,0,0,1,1,1,1,1,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,1,0,0,1,1,1,1,0,0,1,1,1,1,0,0,0,1,0,1,0,1,1,0,1,0,0,1,0,1,1,1,1,0,0,0,1,1,0,1,1,1,1,1,1,0,0,1,1,0,1,0,0,1,0,1,0,1,1,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,1,1,0,1,0,1,0,1,0,0,1,1,0,0,1,1,1,1,0,0,0,0,1,1,1,0,1,0,1,0,1,0,1,0,0,1,1,0,0,0,1,1,0,1,0,0,1,1,1,1,0,1,0,0,1,0,0,1,1,0,1,1,1,1,0,0,1,0,1,0,0,1,0,0,0,0,0,1,0,1,0,1,0,1,1,0,1,0,0,0,1,0,1,0,1,1,0,0,0,1,0,1,1,1,0,1,0,0,1,0,1,1,0,1,1,0,1,1,0,0,1,1,1,1,0,1,0,0,1,1,1,0,0,0,0,0,0,0,0,1,0,1,0,1,1,0,0,1,0,1,0,1,1,0,1,0,1,1,1,0,0,1,0,1,0,0,1,0,0,1,1,0,1,1,0,1,0,1,1,1,1,1,1,1,1,0,1,0,1,0,1,0,1,1,1,0,1,0,1,1,1,1,0,1,0,0,0,0,0,1,1,1,1,0,1,1,0,0,1,0,1,1,1,0,0,0,1,1,1,1,0,0,1,1,0,1,0,0,0,1,0,1,1,0,1,0,0,1,0,0,0,0,0,1,0,1,0,0,1,1,0,1,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,1,1,1,0,1,1,1,0,0,0,1,0,0,0,1,1,0,0,1,1,0,0,1,0,0,1,1,1,1,0,1,1,1,1,0,1,1,0,1,1,0,1,1,0,0,1,1,1,1,0,1,1,1,0,1,0,0,1,1,0,0,1,1,1,1,0,1,0,1,0,1,0,1,0,1,1,0,0,1,0,1,1,1,0,0,0,1,1,1,1,1,1,0,1,0,1,0,0,0,1,1,0,0,0,1,0,1,1,0,1,1,1,1,0,1,0,1,1,1,1,0,1,0,1,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1,1,1,0,0,0,1,0,1,1,1,0,0,0,0,1,0,0,0,0,1,0,0,1,0,1,1,0,1,1,0,0,1,0,0,0,1,0,1,1,0,1,0,1,0,0,0,0,1,1,1,1,0,1,1,0,0,0,0,1,1,1,1,1,1,1,0,1,1,0,1,0,1,1,1,0,0,0,0,1,0,1,1,0,1,0,0,1,1,0,1,1,0,0,1,1,1,0,1,1,0,1,1,0,0,1,0,1,1,0,1,1,1,0,0,1,1,1,1,0,0,0,1,1,1,1,0,0,1,1,0,1,0,0,0,0,1,1,0,0,1,0,1,0,1,0,1,0,0,0,0,1,1,0,0,1,1,0,1,1,0,0,1,1,1,0,0,0,1,1,1,1,1,1,0,1,0,0,0,1,1,1,1,1,0,0,0,1,0,0,0,1,1,0,0,1,1,0,0,0,1,1,1,0,0,1,1,0,0,1,1,1,0,1,0,0,1,1,1,0,0,1,0,0,1,0,0,0,1,0,1,0,0,1,1,0,1,0,1,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,1,1,0,0,0,0,1,1,1,1,0,0,1,0,0,1,1,0,0,0,1,1,0,1,0,1,0,0,0,0,1,0,0,1,1,1,0,0,1,1,1,1,0,1,0,1,0,1,1,0,0,1,0,1,0,1,1,1,0,0,1,1,0,0,1,0,0,1,0,1,0,0,0,1,1,1,1,0,1,0,1,0,1,1,1,1,1,0,1,0,0,0,0,0,1,0,1,1,1,1,0,0,1,1,1,1,0,0,0,0,0,0,1,0,0,0,1,0,0,1,0,1,0,1,1,0,1,0,0,1,1,1,1,1,1,0,0,0,0,0,1,1,0,0,1,1,1,1,0,0,1,0,0,0,1,0,1,0,0,0,1,1,1,1,1,1,1,0,1,1,0,1,1,0,0,0,1,0,1,0,0,1,0,1,0,0,1,1,1,1,1,0,0,0,1,1,1,0,0,0,0,1,1,1,0,0,0,1,1,0,1,1,0,1,0,1,0,0,0,1,0,1,0,1,0,1,1,0,0,0,1,0,0,0,1,0,1,1,0,1,0,0,0,0,0,0,0,1,0,1,1,0,0,0,0,1,0,1,0,1,1,0,1,0,1,1,1,1,1,0,0,0,0,0,0,1,0,0,0,1,0,1,0,1,0,1,1,1,1,0,0,0,0,0,0,0,0,1,0,1,0,1,1,0,1,0,0,0,1,0,0,1,0,0,1,1,0,1,0,0,0,0,1,1,0,0,0,1,0,1,0,1,0,0,1,1,0,1,0,0,0,0,0,1,0,1,1,0,1,1,0,1,1,0,0,1,1,0,1,1,0,0,1,1,0,1,1,1,1,0,0,0,0,1,0,0,1,0,0,0,1,0,1,0,1,0,0,1,0,1,1,1,0,0,1,1,1,0,0,1,1,1,1,1,0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,1,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,1,0,0,1,1,1,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,1,0,1,1,1,0,1,0,1,0,0,0,1,0,1,0,0,0,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,0,0,0,0,0,1,0,0,1,0,1,1,0,1,0,0,0,0,1,1,1,1,0,0,1,1,0,0,1,1,1,0,0,1,1,0,0,1,0,1,0,0,0,0,1,1,0,1,0,1,1,1,0,1,1,1,1,1,1,1,0,1,0,0,1,1,0,1,1,0,0,0,0,0,1,0,0,0,0,0,1,1,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,0,0,1,0,1,0,0,1,0,1,0,1,0,1,1,1,1,1,0,0,0,0,0,1,0,1,0,1,1,1,0,1,0,0,1,0,0,0,1,1,1,1,0,1,0,1,1,1,0,1,1,0,1,0,1,1,1,1,0,1,1,1,1,1,1,0,1,0,1,0,0,0,1,1,0,0,1,1,0,0,1,1,1,1,1,1,0,1,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,1,1,1,1,1,0,1,1,0,0,1,1,0,1,1,1,1,1,1,0,1,0,0,0,0,1,0,1,1,0,1,1,1,0,1,0,0,1,0,0,1,1,0,1,1,1,1,0,1,1,0,1,1,1,1,1,1,0,1,0,1,1,0,0,1,0,0,1,0,0,0,1,1,0,1,0,0,1,1,0,0,0,0,0,1,0,0,1,0,1,1,1,1,0,0,0,0,0,0,0,0,1,0,0,1,1,0,0,0,1,0,1,1,1,0,1,0,0,1,1,1,0,0,1,1,1,0,0,0,0,0,0,0,0,1,1,1,0,1,0,1,1,1,0,0,1,0,1,0,0,0,1,1,1,1,1,0,0,0,1,0,0,0,0,0,0,1,1,0,0,1,1,1,0,0,0,1,1,1,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,1,1,1,0,1,0,0,0,0,0,1,0,0,0,1,1,1,1,0,0,0,1,1,1,0,0,0,1,0,1,0,0,1,0,1,0,0,1,0,1,1,0,1,0,0,0,1,0,1,1,1,1,0,0,0,0,1,1,0,0,1,1,1,0,0,0,0,1,1,0,0,0,0,1,0,0,1,1,1,1,1,1,1,0,1,1,0,1,0,1,0,0,1,1,1,1,1,0,1,0,0,0,0,1,1,0,1,0,1,1,0,1,0,0,0,0,1,1,0,1,0,1,1,1,1,1,0,1,0,1,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,1,1,0,0,0,1,0,0,1,1,1,1,1,0,0,1,0,1,1,0,1,0,1,0,1,1,1,0,1,1,1,0,1,1,1,1,0,1,1,0,1,0,0,1,0,0,0,0,0,1,1,0,1,1,0,0,1,0,0,1,1,1,0,1,1,0,0,1,0,1,1,1,1,1,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,1,0,1,0,1,0,0,0,1,1,0,0,1,1,1,0,0,1,1,0,1,0,1,0,1,1,0,0,1,0,1,0,1,1,1,0,0,1,1,0,0,1,0,1,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1,1,1,0,1,1,1,0,0,0,1,1,1,1,0,1,0,0,1,1,1,0,1,1,1,0,0,0,0,1,0,1,0,1,1,0,0,1,0,1,1,1,0,0,0,0,1,0,1,0,0,1,1,1,1,0,0,0,1,1,1,1,1,0,1,0,1,0,0,0,1,0,0,1,1,1,0,0,0,1,1,0,0,0,0,1,0,1,1,0,1,1,1,1,1,1,1,1,1,0,0,0,1,1,0,0,1,0,1,0,0,0,1,1,1,1,0,0,0,1,0,0,0,1,0,0,1,0,0,0,0,1,1,1,1,1,0,1,1,1,1,0,0,1,1,1,0,0,0,0,1,0,0,1,0,0,0,1,0,0,1,1,0,0,1,0,1,0,0,0,0,0,1,0,1,1,0,0,0,1,0,1,1,0,0,1,1,1,0,1,1,0,1,0,1,1,0,0,1,0,0,0,0,0,1,0,1,0,1,0,0,1,1,0,0,0,0,0,1,1,1,0,1,1,0,1,1,0,1,1,1,1,0,1,0,1,0,1,0,0,0,1,1,0,1,1,0,0,1,1,1,1,1,0,1,1,0,0,0,0,0,0,1,0,1,1,0,1,0,1,1,0,1,1,1,1,0,1,0,0,0,1,0,0,1,0,0,1,0,0,0,1,1,0,0,0,0,0,1,0,1,1,0,1,0,1,0,0,0,1,1,0,0,0,1,1,0,0,1,0,0,1,1,0,1,1,0,0,1,1,0,1,1,1,1,1,0,0,0,0,0,0,1,0,1,0,1,0,0,1,0,0,1,1,0,1,0,1,1,0,0,1,1,0,1,0,0,0,0,0,0,1,0,0,1,1,0,1,0,0,1,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,0,1,1,0,1,1,1,0,0,0,1,0,1,1,1,1,1,1,1,1,1,0,1,0,1,0,0,0,0,0,0,1,0,1,1,0,1,1,0,1,0,1,1,1,0,1,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,1,1,0,1,1,0,0,1,1,0,1,0,1,0,1,0,1,0,0,1,1,0,0,0,1,0,0,0,1,0,0,0,0,0,1,1,0,0,1,0,1,0,0,0,0,1,0,0,1,1,1,1,0,0,0,0,0,1,0,0,1,0,0,1,0,0,1,1,0,0,0,1,1,1,1,1,0,1,0,0,1,1,1,0,1,1,1,0,1,1,0,0,0,1,0,0,1,0,1,0,1,1,1,1,1,0,0,0,0,0,0,1,0,1,0,0,1,1,1,1,0,0,0,0,1,0,1,1,0,1,0,0,0,0,1,0,0,0,1,1,1,1,1,0,0,0,1,1,0,1,0,0,0,0,0,1,0,0,1,1,0,0,1,0,0,0,0,1,1,0,1,1,1,0,0,0,1,1,0,0,0,0,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,1,1,0,1,1,0,1,1,0,0,1,1,0,0,0,1,1,1,0,0,0,1,0,1,1,1,0,0,0,1,1,0,0,1,0,0,0,0,1,1,1,0,1,1,0,0,1,1,1,1,1,1,0,0,0,1,1,1,1,0,1,1,0,1,1,0,1,0,0,1,0,1,1,1,0,1,1,1,0,0,0,0,0,0,1,0,1,1,1,1,1,1,1,1,1,1,0,1,0,1,0,1,1,1,1,0,1,0,0,1,0,0,0,0,0,0,1,1,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,1,0,0,0,0,1,0,1,1,1,0,0,1,1,1,1,1,1,1,1,0,1,1,1,0,0,1,1,1,1,0,1,1,1,0,0,1,1,0,1,1,1,0,1,0,0,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,1,0,1,0,1,1,1,1,0,1,0,0,1,0,1,1,1,0,0,1,0,0,1,0,1,0,0,0,1,0,1,0,1,1,0,0,1,0,0,1,1,0,0,0,1,0,0,0,0,0,0,1,1,0,1,0,1,1,0,1,0,1,1,1,1,0,0,0,1,0,0,0,0,1,0,0,1,1,1,0,0,0,0,1,0,1,0,1,1,1,1,0,0,0,0,1,1,1,1,1,0,1,0,1,1,0,0,0,1,1,1,0,0,1,0,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,1,1,1,0,0,1,0,0,1,1,1,0,0,1,1,0,0,1,1,0,0,0,0,0,0,1,1,1,0,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,1,1,0,0,1,1,1,1,1,0,1,1,1,1,1,1,0,0,1,1,1,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,1,1,0,1,0,0,1,1,0,1,0,1,0,1,0,1,1,0,0,1,1,1,0,0,0,1,0,1,1,0,0,0,1,0,1,0,0,0,0,0,1,1,0,1,0,1,0,0,1,0,1,1,1,1,1,1,1,0,1,1,1,0,1,1,0,0,0,1,1,0,0,0,1,1,1,1,1,0,0,1,0,0,1,1,0,0,1,0,1,1,0,1,0,0,0,0,1,0,1,1,0,1,1,1,0,1,0,1,1,1,1,0,0,1,1,1,1,1,1,1,0,1,0,0,1,1,1,1,0,0,1,0,1,1,1,0,1,0,1,1,1,1,1,1,0,0,0,1,1,0,0,1,1,0,1,1,0,1,1,0,0,1,0,1,1,1,0,1,1,1,0,0,1,1,1,0,1,0,0,0,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,0,1,1,0,1,0,1,1,0,1,1,0,1,1,1,0,0,0,1,1,1,1,0,1,1,0,0,0,0,1,0,1,1,0,1,0,1,0,0,1,1,0,0,1,0,1,0,1,1,1,0,0,0,1,1,0,0,0,0,0,1,0,1,1,0,0,1,0,0,0,0,0,1,0,1,1,0,0,1,1,1,0,0,0,0,1,1,1,0,0,0,1,1,1,1,0,1,1,1,0,0,0,0,1,1,0,0,0,0,1,0,0,0,1,1,0,0,1,0,1,0,1,1,0,0,1,1,0,1,0,1,1,1,1,0,0,0,0,0,0,1,0,0,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,0,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,1,1,1,1,0,0,0,0,1,1,0,0,1,0,1,1,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,1,0,0,1,0,0,1,1,1,0,0,1,1,0,1,1,1,1,1,0,0,0,1,1,0,1,0,1,0,1,0,1,1,1,0,0,0,0,1,1,0,0,1,0,0,0,1,1,];
var gg_b = "1761580802/";

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
