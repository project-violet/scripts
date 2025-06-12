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
case 134:
case 3429:
case 3498:
case 1538:
case 738:
case 3503:
case 3194:
case 2279:
case 3165:
case 2066:
case 2576:
case 248:
case 1168:
case 1070:
case 1870:
case 2707:
case 926:
case 1177:
case 267:
case 2136:
case 1316:
case 1838:
case 641:
case 3644:
case 3156:
case 3803:
case 2981:
case 1189:
case 2269:
case 9:
case 2566:
case 2111:
case 1919:
case 1178:
case 1037:
case 2876:
case 79:
case 2329:
case 932:
case 496:
case 1570:
case 2612:
case 3627:
case 3514:
case 1060:
case 1474:
case 823:
case 1680:
case 620:
case 3190:
case 2314:
case 1134:
case 1924:
case 96:
case 1551:
case 1948:
case 1438:
case 3598:
case 3366:
case 59:
case 2183:
case 1263:
case 1874:
case 2913:
case 3010:
case 1595:
case 3435:
case 3342:
case 3226:
case 1292:
case 1564:
case 1947:
case 2476:
case 678:
case 1437:
case 258:
case 3945:
case 529:
case 3969:
case 4043:
case 3281:
case 3739:
case 1740:
case 1639:
case 1115:
case 3640:
case 22:
case 1851:
case 2122:
case 1273:
case 3898:
case 3355:
case 3029:
case 1095:
case 1382:
case 1895:
case 1470:
case 834:
case 299:
case 3414:
case 1358:
case 288:
case 538:
case 664:
case 3979:
case 208:
case 3097:
case 3118:
case 2466:
case 1985:
case 1282:
case 145:
case 1585:
case 2813:
case 1974:
case 3910:
case 2661:
case 1341:
case 1047:
case 1847:
case 570:
case 691:
case 3101:
case 23:
case 58:
case 2426:
case 3552:
case 2654:
case 1702:
case 2481:
case 3276:
case 3588:
case 1848:
case 2400:
case 1048:
case 1024:
case 468:
case 3326:
case 298:
case 3242:
case 3879:
case 3079:
case 2172:
case 1085:
case 1392:
case 3569:
case 34:
case 3545:
case 2513:
case 1964:
case 3887:
case 2832:
case 55:
case 1406:
case 2032:
case 3929:
case 3139:
case 1140:
case 1715:
case 2643:
case 3266:
case 2696:
case 1420:
case 133:
case 2804:
case 211:
case 1548:
case 1951:
case 1524:
case 2159:
case 474:
case 1363:
case 3888:
case 3914:
case 663:
case 3487:
case 1768:
case 249:
case 2229:
case 1485:
case 155:
case 160:
case 38:
case 1519:
case 2966:
case 30:
case 75:
case 3479:
case 3488:
case 936:
case 2297:
case 2942:
case 3313:
case 2650:
case 3667:
case 1020:
case 3452:
case 2581:
case 2526:
case 2108:
case 1665:
case 1649:
case 3630:
case 3765:
case 3184:
case 3794:
case 4012:
case 1006:
case 2432:
case 2388:
case 2711:
case 2413:
case 105:
case 3445:
case 185:
case 1127:
case 770:
case 70:
case 262:
case 124:
case 845:
case 2800:
case 4005:
case 1424:
case 3903:
case 2000:
case 1520:
case 728:
case 2881:
case 2387:
case 3677:
case 2081:
case 2991:
case 2379:
case 2826:
case 54:
case 1144:
case 1506:
case 1938:
case 1656:
case 1129:
case 1939:
case 2921:
case 3502:
case 2131:
case 2096:
case 2843:
case 800:
case 3:
case 458:
case 1311:
case 3205:
case 575:
case 3151:
case 2632:
case 3015:
case 1465:
case 3430:
case 2986:
case 2116:
case 727:
case 1787:
case 938:
case 643:
case 326:
case 269:
case 1818:
case 2071:
case 1779:
case 694:
case 3679:
case 2368:
case 2543:
case 1980:
case 3477:
case 3724:
case 865:
case 3748:
case 1901:
case 1624:
case 1648:
case 99:
case 56:
case 1475:
case 732:
case 910:
case 3212:
case 2227:
case 3034:
case 1090:
case 1890:
case 929:
case 2367:
case 327:
case 2061:
case 2571:
case 2244:
case 2228:
case 3174:
case 1769:
case 1110:
case 2299:
case 1549:
case 297:
case 3889:
case 3089:
case 2182:
case 1856:
case 1262:
case 1875:
case 2550:
case 3138:
case 2600:
case 448:
case 4066:
case 3371:
case 2157:
case 3160:
case 1925:
case 375:
case 1619:
case 1135:
case 532:
case 76:
case 282:
case 3568:
case 2912:
case 3927:
case 273:
case 2763:
case 3078:
case 1246:
case 1293:
case 3878:
case 3415:
case 1049:
case 3830:
case 3706:
case 1556:
case 1984:
case 527:
case 4055:
case 3067:
case 3953:
case 2050:
case 2443:
case 2496:
case 617:
case 3577:
case 3720:
case 2741:
case 100:
case 3221:
case 180:
case 36:
case 672:
case 2905:
case 252:
case 2302:
case 3354:
case 683:
case 603:
case 121:
case 1383:
case 2471:
case 467:
case 3827:
case 2812:
case 3027:
case 2012:
case 1660:
case 3119:
case 1735:
case 1025:
case 1359:
case 131:
case 3737:
case 2655:
case 3028:
case 2192:
case 94:
case 3844:
case 1372:
case 1584:
case 2758:
case 3977:
case 287:
case 537:
case 207:
case 2691:
case 3261:
case 676:
case 1975:
case 3738:
case 256:
case 612:
case 693:
case 3770:
case 3614:
case 2512:
case 4026:
case 1525:
case 3296:
case 4081:
case 2173:
case 644:
case 2805:
case 2642:
case 3528:
case 3106:
case 3053:
case 3544:
case 3967:
case 462:
case 1084:
case 2723:
case 1439:
case 3599:
case 2486:
case 2833:
case 2141:
case 1994:
case 206:
case 3271:
case 939:
case 1797:
case 736:
case 3697:
case 337:
case 684:
case 2344:
case 2230:
case 2971:
case 1664:
case 43:
case 1918:
case 2399:
case 2268:
case 246:
case 3915:
case 3629:
case 2886:
case 2433:
case 2821:
case 1580:
case 3040:
case 1039:
case 2943:
case 2996:
case 2327:
case 95:
case 1651:
case 3453:
case 1917:
case 3751:
case 654:
case 3333:
case 737:
case 2277:
case 2353:
case 3774:
case 1674:
case 2289:
case 2412:
case 4032:
case 661:
case 2586:
case 3305:
case 1990:
case 1080:
case 1880:
case 3902:
case 2521:
case 1539:
case 2954:
case 3428:
case 1001:
case 1801:
case 98:
case 433:
case 719:
case 541:
case 2425:
case 174:
case 364:
case 2308:
case 3256:
case 807:
case 1412:
case 887:
case 3862:
case 3572:
case 2674:
case 1353:
case 147:
case 3893:
case 1709:
case 3559:
case 3609:
case 2801:
case 2307:
case 1521:
case 2539:
case 1954:
case 892:
case 4085:
case 3983:
case 3616:
case 1405:
case 1267:
case 917:
case 4024:
case 2187:
case 378:
case 857:
case 2179:
case 806:
case 1328:
case 1230:
case 3546:
case 983:
case 2152:
case 3593:
case 1886:
case 751:
case 2798:
case 146:
case 3859:
case 1268:
case 4047:
case 381:
case 3325:
case 2484:
case 2651:
case 1996:
case 2039:
case 1943:
case 320:
case 846:
case 1215:
case 3007:
case 3380:
case 2670:
case 2714:
case 3217:
case 551:
case 2362:
case 485:
case 2439:
case 4019:
case 1421:
case 405:
case 994:
case 3742:
case 2884:
case 1642:
case 106:
case 341:
case 3218:
case 2994:
case 3459:
case 564:
case 1141:
case 2965:
case 943:
case 1486:
case 3290:
case 3507:
case 2660:
case 1234:
case 4006:
case 847:
case 520:
case 3776:
case 2637:
case 1505:
case 192:
case 3755:
case 2825:
case 231:
case 2283:
case 501:
case 1202:
case 2025:
case 2359:
case 4020:
case 3936:
case 3126:
case 3658:
case 455:
case 2480:
case 3682:
case 1192:
case 1782:
case 2975:
case 107:
case 1691:
case 187:
case 3791:
case 741:
case 3142:
case 2894:
case 196:
case 2865:
case 4060:
case 2049:
case 2065:
case 639:
case 904:
case 984:
case 3536:
case 1050:
case 1850:
case 925:
case 152:
case 65:
case 1334:
case 1240:
case 200:
case 3907:
case 3166:
case 763:
case 1471:
case 4038:
case 1773:
case 2259:
case 3692:
case 2103:
case 2594:
case 2875:
case 2262:
case 2856:
case 4070:
case 1182:
case 3726:
case 2490:
case 1626:
case 197:
case 954:
case 3483:
case 3036:
case 3191:
case 1600:
case 3700:
case 102:
case 182:
case 2925:
case 1157:
case 670:
case 60:
case 265:
case 250:
case 3280:
case 3663:
case 2246:
case 3811:
case 434:
case 961:
case 1763:
case 363:
case 3176:
case 173:
case 1912:
case 2901:
case 2517:
case 1854:
case 2980:
case 3083:
case 882:
case 3436:
case 1596:
case 3883:
case 791:
case 4095:
case 2456:
case 1227:
case 2475:
case 330:
case 114:
case 2647:
case 2518:
case 897:
case 3411:
case 1061:
case 1613:
case 1367:
case 718:
case 64:
case 2110:
case 2745:
case 142:
case 4051:
case 1244:
case 1228:
case 1330:
case 3022:
case 2017:
case 2198:
case 3822:
case 2817:
case 2752:
case 3583:
case 1843:
case 1604:
case 1096:
case 1554:
case 2129:
case 563:
case 1921:
case 1131:
case 4074:
case 912:
case 2590:
case 2465:
case 3959:
case 391:
case 2818:
case 169:
case 1071:
case 1377:
case 423:
case 2018:
case 1871:
case 1561:
case 1116:
case 3972:
case 2208:
case 240:
case 1253:
case 2778:
case 3611:
case 83:
case 3063:
case 981:
case 2960:
case 1711:
case 1388:
case 901:
case 3573:
case 303:
case 2447:
case 1352:
case 162:
case 920:
case 4084:
case 1955:
case 3112:
case 535:
case 66:
case 2819:
case 919:
case 1081:
case 1736:
case 716:
case 1387:
case 2777:
case 3541:
case 1000:
case 2448:
case 3982:
case 224:
case 2144:
case 2506:
case 2938:
case 2128:
case 3385:
case 2675:
case 1210:
case 41:
case 783:
case 1229:
case 2231:
case 951:
case 703:
case 2768:
case 149:
case 1298:
case 772:
case 1107:
case 1966:
case 255:
case 811:
case 2820:
case 3841:
case 431:
case 2020:
case 3041:
case 3133:
case 3923:
case 4025:
case 2216:
case 1297:
case 717:
case 1942:
case 2767:
case 2694:
case 2006:
case 1345:
case 3264:
case 3592:
case 2806:
case 2730:
case 3295:
case 1526:
case 1108:
case 2665:
case 2223:
case 2392:
case 3916:
case 2885:
case 794:
case 1172:
case 2085:
case 4001:
case 109:
case 1671:
case 3473:
case 3771:
case 2547:
case 2995:
case 1513:
case 627:
case 743:
case 2715:
case 3931:
case 2406:
case 1214:
case 3319:
case 1832:
case 3270:
case 2617:
case 2363:
case 2548:
case 1722:
case 111:
case 1804:
case 3186:
case 2420:
case 3441:
case 1643:
case 2419:
case 2258:
case 2585:
case 2282:
case 1203:
case 1162:
case 626:
case 3238:
case 3320:
case 1661:
case 1013:
case 3761:
case 1813:
case 2974:
case 3260:
case 3492:
case 13:
case 1532:
case 1400:
case 2048:
case 2024:
case 3237:
case 2848:
case 2824:
case 2702:
case 862:
case 1654:
case 622:
case 1442:
case 12:
case 1904:
case 2639:
case 593:
case 512:
case 1621:
case 3196:
case 3337:
case 3031:
case 3786:
case 3831:
case 1932:
case 2574:
case 2382:
case 2095:
case 1772:
case 1303:
case 3816:
case 3220:
case 3016:
case 1466:
case 577:
case 3171:
case 188:
case 2134:
case 2924:
case 2948:
case 2601:
case 325:
case 2680:
case 3154:
case 1793:
case 1746:
case 761:
case 3809:
case 3009:
case 2438:
case 2564:
case 1762:
case 3457:
case 2460:
case 2595:
case 576:
case 754:
case 3161:
case 158:
case 1455:
case 4017:
case 384:
case 637:
case 2437:
case 1476:
case 421:
case 2838:
case 3247:
case 1926:
case 918:
case 554:
case 1891:
case 3364:
case 3523:
case 2189:
case 3858:
case 2799:
case 2744:
case 3082:
case 1900:
case 3882:
case 3224:
case 3248:
case 1076:
case 295:
case 1566:
case 1398:
case 2625:
case 2860:
case 991:
case 2474:
case 4065:
case 3351:
case 1287:
case 777:
case 3150:
case 2167:
case 376:
case 504:
case 1633:
case 1591:
case 3431:
case 584:
case 899:
case 3558:
case 2130:
case 2920:
case 3608:
case 808:
case 3823:
case 450:
case 1708:
case 888:
case 2753:
case 3582:
case 1310:
case 2451:
case 82:
case 2168:
case 1555:
case 3705:
case 2309:
case 1066:
case 793:
case 930:
case 1707:
case 615:
case 2560:
case 3557:
case 2464:
case 2870:
case 525:
case 3973:
case 3621:
case 2952:
case 2739:
case 902:
case 1031:
case 1196:
case 427:
case 1337:
case 3686:
case 1831:
case 2829:
case 2376:
case 3759:
case 2898:
case 1659:
case 2117:
case 3932:
case 997:
case 2414:
case 1206:
case 2987:
case 399:
case 1672:
case 3303:
case 1816:
case 1016:
case 1220:
case 1338:
case 2391:
case 388:
case 2897:
case 1171:
case 154:
case 2701:
case 2403:
case 72:
case 1458:
case 1219:
case 952:
case 125:
case 1693:
case 1154:
case 3183:
case 812:
case 3793:
case 548:
case 1809:
case 426:
case 2598:
case 2366:
case 877:
case 432:
case 3913:
case 2010:
case 2435:
case 788:
case 2281:
case 708:
case 2945:
case 2969:
case 2200:
case 2597:
case 3476:
case 104:
case 4068:
case 2213:
case 3091:
case 3397:
case 238:
case 969:
case 46:
case 1523:
case 3245:
case 3269:
case 804:
case 2644:
case 3900:
case 4067:
case 3876:
case 1224:
case 3055:
case 144:
case 3076:
case 825:
case 690:
case 571:
case 748:
case 3566:
case 1857:
case 2835:
case 4030:
case 61:
case 1963:
case 1351:
case 52:
case 112:
case 193:
case 3287:
case 176:
case 767:
case 2429:
case 3633:
case 3591:
case 558:
case 1733:
case 1608:
case 1023:
case 1558:
case 1941:
case 3708:
case 1823:
case 942:
case 3842:
case 1582:
case 2784:
case 3555:
case 3288:
case 3866:
case 631:
case 4077:
case 3066:
case 1416:
case 4089:
case 861:
case 2535:
case 1557:
case 2232:
case 2814:
case 1957:
case 3413:
case 1611:
case 2935:
case 3388:
case 1863:
case 946:
case 3711:
case 621:
case 1573:
case 3352:
case 2304:
case 183:
case 3976:
case 362:
case 2332:
case 25:
case 2469:
case 67:
case 2677:
case 3736:
case 3081:
case 1541:
case 1958:
case 509:
case 117:
case 1636:
case 3881:
case 3000:
case 1092:
case 1385:
case 2756:
case 3379:
case 843:
case 3826:
case 598:
case 3991:
case 3026:
case 3229:
case 835:
case 1073:
case 3298:
case 2914:
case 1873:
case 2668:
case 2479:
case 1251:
case 4028:
case 20:
case 53:
case 1347:
case 2452:
case 3404:
case 1133:
case 3297:
case 3942:
case 228:
case 2313:
case 3650:
case 2667:
case 1264:
case 1592:
case 3432:
case 3345:
case 2184:
case 415:
case 3108:
case 2630:
case 1916:
case 2545:
case 24:
case 3172:
case 2326:
case 1473:
case 309:
case 2087:
case 389:
case 2887:
case 2300:
case 759:
case 2139:
case 73:
case 562:
case 1121:
case 1319:
case 1270:
case 135:
case 3832:
case 311:
case 2717:
case 2088:
case 3722:
case 1186:
case 1796:
case 992:
case 913:
case 2266:
case 3643:
case 3004:
case 4040:
case 194:
case 3203:
case 1238:
case 957:
case 2291:
case 1463:
case 3013:
case 3661:
case 709:
case 2790:
case 803:
case 1260:
case 3235:
case 3426:
case 3532:
case 33:
case 1909:
case 2634:
case 1237:
case 2276:
case 3783:
case 3504:
case 2552:
case 549:
case 3193:
case 872:
case 3654:
case 1142:
case 2415:
case 4035:
case 2030:
case 3123:
case 2577:
case 2720:
case 1536:
case 3443:
case 514:
case 3496:
case 1641:
case 2170:
case 1390:
case 1239:
case 685:
case 3334:
case 26:
case 605:
case 1511:
case 773:
case 2286:
case 2578:
case 3302:
case 2434:
case 3182:
case 410:
case 999:
case 3158:
case 397:
case 3626:
case 1483:
case 3681:
case 2077:
case 49:
case 1318:
case 1191:
case 2999:
case 2402:
case 1781:
case 3454:
case 2567:
case 3550:
case 1700:
case 2160:
case 275:
case 660:
case 752:
case 1317:
case 1663:
case 3461:
case 2878:
case 830:
case 3763:
case 1811:
case 1176:
case 429:
case 163:
case 3912:
case 2568:
case 2927:
case 2137:
case 1155:
case 2343:
case 3109:
case 2748:
case 2477:
case 633:
case 1883:
case 3368:
case 3596:
case 3054:
case 1436:
case 1225:
case 1946:
case 1993:
case 2515:
case 552:
case 3227:
case 2034:
case 314:
case 3571:
case 2747:
case 1962:
case 2350:
case 227:
case 3061:
case 4029:
case 1713:
case 966:
case 3861:
case 2478:
case 769:
case 2645:
case 3299:
case 2669:
case 596:
case 2174:
case 1349:
case 1365:
case 3450:
case 1022:
case 2467:
case 1822:
case 573:
case 1583:
case 1704:
case 3896:
case 2940:
case 3131:
case 2652:
case 3604:
case 3986:
case 2815:
case 502:
case 4010:
case 2534:
case 1959:
case 3632:
case 191:
case 3377:
case 3071:
case 967:
case 2468:
case 3116:
case 1972:
case 714:
case 2195:
case 645:
case 1375:
case 742:
case 3389:
case 2164:
case 3253:
case 3277:
case 236:
case 4052:
case 768:
case 506:
case 557:
case 1862:
case 1275:
case 1384:
case 3289:
case 1572:
case 2774:
case 1046:
case 1846:
case 3278:
case 1893:
case 151:
case 2124:
case 1559:
case 2148:
case 222:
case 2444:
case 2428:
case 2499:
case 3521:
case 2540:
case 3954:
case 774:
case 2250:
case 178:
case 1562:
case 2764:
case 3971:
case 2185:
case 1072:
case 1265:
case 1249:
case 3344:
case 3230:
case 592:
case 1593:
case 1104:
case 3433:
case 3086:
case 1859:
case 1059:
case 181:
case 2698:
case 747:
case 2751:
case 1132:
case 1408:
case 3996:
case 3327:
case 3821:
case 2840:
case 962:
case 801:
case 3215:
case 93:
case 1007:
case 2527:
case 1380:
case 1217:
case 820:
case 1766:
case 695:
case 2243:
case 3666:
case 2296:
case 3421:
case 1008:
case 2440:
case 1623:
case 1808:
case 3950:
case 2106:
case 2544:
case 787:
case 306:
case 141:
case 2271:
case 1459:
case 386:
case 2120:
case 2930:
case 3486:
case 756:
case 215:
case 1911:
case 2027:
case 3012:
case 3234:
case 1339:
case 2321:
case 3340:
case 2827:
case 3812:
case 1776:
case 3505:
case 3676:
case 2737:
case 1755:
case 2386:
case 911:
case 3163:
case 3202:
case 2099:
case 1658:
case 40:
case 1936:
case 1508:
case 2899:
case 3758:
case 864:
case 2977:
case 2828:
case 3782:
case 2028:
case 2044:
case 3192:
case 2603:
case 2738:
case 356:
case 3533:
case 989:
case 2261:
case 634:
case 1791:
case 387:
case 568:
case 2989:
case 1827:
case 2339:
case 71:
case 1321:
case 1027:
case 2462:
case 2290:
case 1635:
case 2507:
case 2657:
case 3660:
case 1978:
case 1760:
case 3025:
case 3359:
case 1254:
case 4041:
case 822:
case 3825:
case 331:
case 2755:
case 648:
case 2776:
case 1603:
case 1028:
case 1044:
case 3584:
case 3372:
case 836:
case 3703:
case 2682:
case 1828:
case 1844:
case 3480:
case 1899:
case 2126:
case 1099:
case 2658:
case 2181:
case 1989:
case 2791:
case 2100:
case 1738:
case 2380:
case 3670:
case 3714:
case 1527:
case 1614:
case 4092:
case 31:
case 2301:
case 3525:
case 390:
case 2217:
case 1967:
case 1544:
case 945:
case 2808:
case 1599:
case 837:
case 4063:
case 3949:
case 1120:
case 3965:
case 2218:
case 3994:
case 219:
case 1250:
case 137:
case 1697:
case 924:
case 3695:
case 2249:
case 2407:
case 2872:
case 2265:
case 1795:
case 2072:
case 3664:
case 2059:
case 1698:
case 2325:
case 3188:
case 443:
case 2859:
case 201:
case 3798:
case 220:
case 3839:
case 2408:
case 3917:
case 3651:
case 905:
case 3484:
case 264:
case 1147:
case 1333:
case 2113:
case 3169:
case 1610:
case 3145:
case 2572:
case 3674:
case 435:
case 699:
case 1427:
case 1124:
case 1934:
case 671:
case 2609:
case 590:
case 2846:
case 3211:
case 2046:
case 1540:
case 3539:
case 62:
case 1499:
case 3880:
case 1444:
case 122:
case 960:
case 51:
case 1652:
case 2583:
case 2704:
case 1688:
case 2822:
case 3788:
case 2022:
case 484:
case 3311:
case 2732:
case 63:
case 3494:
case 1151:
case 2959:
case 3449:
case 1015:
case 132:
case 1233:
case 4009:
case 218:
case 1687:
case 3818:
case 3779:
case 1679:
case 2284:
case 2375:
case 340:
case 3685:
case 2356:
case 521:
case 4016:
case 2225:
case 1802:
case 2083:
case 3648:
case 875:
case 3901:
case 2946:
case 1489:
case 3890:
case 127:
case 689:
case 1747:
case 609:
case 698:
case 3769:
case 1174:
case 2394:
case 3565:
case 2726:
case 3856:
case 3075:
case 2692:
case 3056:
case 3594:
case 3875:
case 827:
case 1944:
case 1928:
case 1138:
case 1402:
case 1999:
case 3925:
case 700:
case 77:
case 2155:
case 1343:
case 1568:
case 1396:
case 1137:
case 2176:
case 2811:
case 1078:
case 1878:
case 3246:
case 2663:
case 1030:
case 3049:
case 1830:
case 3849:
case 3865:
case 2142:
case 1867:
case 3984:
case 1067:
case 2422:
case 2641:
case 3620:
case 2908:
case 1720:
case 4058:
case 2239:
case 1221:
case 3114:
case 1170:
case 750:
case 3259:
case 1354:
case 3383:
case 1868:
case 321:
case 1286:
case 1578:
case 839:
case 1869:
case 345:
case 3585:
case 1845:
case 420:
case 1069:
case 1045:
case 3974:
case 1291:
case 4059:
case 3341:
case 2238:
case 3847:
case 401:
case 669:
case 3734:
case 555:
case 2909:
case 3690:
case 3257:
case 2260:
case 1790:
case 3373:
case 2754:
case 990:
case 478:
case 1276:
case 733:
case 419:
case 3048:
case 2237:
case 1879:
case 1997:
case 1079:
case 642:
case 1545:
case 14:
case 3223:
case 3392:
case 828:
case 524:
case 3995:
case 4046:
case 1300:
case 4093:
case 2771:
case 3964:
case 3547:
case 1718:
case 1087:
case 451:
case 1381:
case 4062:
case 505:
case 1615:
case 1139:
case 1929:
case 2441:
case 1052:
case 1852:
case 333:
case 2186:
case 1088:
case 1888:
case 3363:
case 2622:
case 80:
case 870:
case 3951:
case 3524:
case 673:
case 1914:
case 2073:
case 2324:
case 2348:
case 360:
case 170:
case 3519:
case 785:
case 1479:
case 1488:
case 2750:
case 3767:
case 1313:
case 1667:
case 2041:
case 1452:
case 2923:
case 2133:
case 3216:
case 2841:
case 724:
case 1630:
case 697:
case 1749:
case 1765:
case 1184:
case 3006:
case 545:
case 283:
case 1304:
case 441:
case 1678:
case 2863:
case 3019:
case 1469:
case 4008:
case 1445:
case 272:
case 2112:
case 3937:
case 2982:
case 1903:
case 3448:
case 2636:
case 2958:
case 3520:
case 217:
case 1677:
case 139:
case 3789:
case 3199:
case 2274:
case 696:
case 2892:
case 3675:
case 3656:
case 1775:
case 3128:
case 3506:
case 3938:
case 334:
case 607:
case 1429:
case 4011:
case 3906:
case 276:
case 656:
case 1653:
case 1194:
case 3451:
case 1784:
case 2023:
case 3920:
case 3130:
case 1165:
case 19:
case 1204:
case 2416:
case 2705:
case 795:
case 1497:
case 3870:
case 2557:
case 2607:
case 3177:
case 138:
case 1213:
case 3316:
case 2247:
case 686:
case 734:
case 606:
case 1156:
case 2395:
case 2882:
case 1628:
case 1803:
case 1175:
case 3728:
case 3189:
case 2858:
case 2523:
case 1699:
case 3178:
case 1725:
case 3837:
case 244:
case 2248:
case 212:
case 293:
case 2712:
case 1035:
case 3060:
case 2057:
case 3860:
case 225:
case 3680:
case 1780:
case 3924:
case 3551:
case 3948:
case 980:
case 97:
case 1366:
case 418:
case 2009:
case 479:
case 323:
case 2646:
case 2457:
case 3595:
case 1010:
case 3074:
case 491:
case 3292:
case 3947:
case 3564:
case 2662:
case 204:
case 1200:
case 668:
case 1597:
case 4022:
case 2161:
case 2721:
case 3740:
case 1640:
case 3357:
case 3051:
case 965:
case 1988:
case 3851:
case 2659:
case 1098:
case 810:
case 723:
case 1376:
case 1829:
case 2196:
case 2337:
case 1355:
case 2786:
case 2031:
case 3095:
case 3382:
case 3895:
case 2672:
case 1987:
case 2206:
case 3358:
case 1118:
case 1097:
case 3241:
case 2016:
case 4083:
case 2816:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1749722401/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,0,1,0,0,0,0,0,1,0,0,1,1,1,0,0,0,0,1,1,0,1,1,1,1,1,0,0,0,1,1,0,1,1,0,1,0,1,0,1,1,0,1,0,0,1,0,0,1,0,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,0,1,1,1,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,1,0,1,1,1,1,0,1,0,1,1,0,1,0,0,1,0,0,0,1,1,0,1,1,0,1,0,0,0,1,1,1,1,1,0,1,1,1,0,1,1,0,1,1,1,1,0,1,0,1,1,0,1,1,0,0,1,0,1,0,1,1,0,0,0,0,0,1,1,0,0,1,1,0,1,0,1,0,1,1,1,1,0,1,0,1,1,0,0,1,1,1,1,0,1,1,0,0,1,1,0,0,1,0,1,1,1,0,0,1,1,0,0,1,0,1,1,1,1,0,1,0,1,1,0,1,1,0,0,1,0,0,0,0,1,0,1,0,1,0,0,0,1,0,1,0,1,1,1,0,1,0,0,1,1,0,1,0,0,0,1,0,1,1,0,1,0,1,0,0,1,1,0,1,1,0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,0,1,0,1,0,1,1,1,0,0,0,1,0,0,1,0,0,1,0,1,0,0,1,0,0,0,0,0,1,1,0,1,0,1,1,1,0,0,1,1,0,1,1,0,0,1,0,0,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,1,0,0,1,0,1,1,1,1,1,1,0,0,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,1,1,1,1,0,1,0,0,1,1,0,1,0,1,1,1,1,1,0,0,0,0,0,1,0,1,0,0,0,0,1,0,1,1,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,1,0,1,1,1,0,0,1,0,0,1,0,1,0,0,0,0,0,1,1,0,0,1,1,0,1,0,1,0,0,1,0,0,1,0,1,1,0,0,1,0,0,0,1,0,0,1,1,0,1,1,0,1,1,0,1,1,0,0,0,1,1,1,0,0,0,1,0,1,1,0,1,0,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,1,0,1,1,0,0,1,0,1,0,0,0,0,1,0,1,1,1,0,1,0,0,1,0,0,1,0,1,0,0,1,1,1,0,0,0,1,1,0,0,0,1,0,1,1,0,0,1,0,1,0,1,1,1,1,1,0,0,1,0,0,0,0,0,1,0,1,0,0,0,1,1,0,1,1,0,0,0,1,1,1,1,1,1,0,0,1,0,1,0,0,0,0,1,1,1,1,0,0,1,1,1,0,1,1,1,1,1,1,1,1,0,0,1,0,0,0,0,1,1,0,0,0,0,1,0,1,1,1,1,0,0,0,1,1,0,0,1,1,0,0,0,1,1,1,0,1,1,1,0,0,1,1,1,0,0,0,1,1,0,1,1,1,0,1,0,1,0,0,1,0,1,0,1,0,0,0,1,1,1,1,0,1,1,1,0,0,1,0,0,0,0,0,1,0,1,0,1,1,0,0,1,0,1,1,1,0,0,0,0,1,1,0,1,1,0,1,1,1,0,1,1,1,0,0,0,0,0,0,0,1,0,1,1,0,1,0,1,1,0,1,0,0,0,1,1,1,1,0,1,0,0,0,1,0,1,1,1,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,0,1,1,0,0,0,0,1,0,1,0,0,1,0,1,0,0,0,0,1,0,0,0,0,1,1,0,0,0,1,0,0,0,0,1,0,1,0,1,1,0,1,1,0,0,0,0,1,1,1,1,0,0,0,1,1,1,1,0,0,0,1,1,1,0,0,1,1,0,1,0,0,0,1,0,1,1,0,0,1,1,0,1,1,0,0,0,0,1,1,0,1,0,0,1,0,0,1,1,1,0,0,1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,0,1,1,1,1,0,1,0,0,1,0,1,1,1,0,0,0,0,1,1,1,0,1,0,0,1,0,1,1,0,0,0,1,0,1,1,1,1,0,1,1,0,1,1,0,0,0,1,0,1,0,1,0,0,0,0,1,1,1,1,1,1,1,0,1,0,0,0,0,0,0,1,1,1,0,0,0,0,1,1,0,1,1,1,1,1,0,0,1,0,1,1,1,1,0,0,1,1,0,1,1,0,1,0,1,0,0,1,1,1,1,1,0,0,0,0,1,0,0,1,1,0,1,0,0,0,0,1,1,0,1,0,1,1,0,0,1,0,0,1,0,1,0,1,1,1,1,1,0,1,1,1,1,1,1,0,1,0,0,1,0,0,0,1,0,0,1,1,1,1,0,0,0,0,1,0,0,1,0,0,1,0,1,1,1,0,1,1,1,1,1,0,0,0,1,0,1,0,1,0,0,1,0,1,1,0,1,0,1,0,0,0,1,0,1,1,1,0,1,0,0,0,1,0,0,1,1,1,0,1,0,1,1,1,0,0,1,1,0,1,1,1,1,0,0,1,1,0,0,1,1,1,1,0,0,0,1,0,1,0,0,1,1,1,0,1,1,0,0,0,0,0,1,0,1,1,1,1,0,1,1,0,1,0,0,1,0,1,1,0,0,0,0,0,1,0,0,0,1,1,0,0,0,1,1,1,0,0,0,1,1,0,1,0,0,1,1,0,0,0,0,0,1,1,0,1,0,0,1,1,1,1,0,1,0,0,0,0,0,0,1,0,1,0,0,1,1,0,0,1,1,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,0,0,1,1,0,0,0,1,0,1,1,1,0,0,0,0,1,0,0,1,1,1,0,0,1,1,1,1,1,1,0,1,1,0,1,0,1,0,0,0,1,0,1,0,1,0,1,0,0,1,1,0,1,0,0,0,1,0,0,0,1,0,0,0,1,1,0,0,1,0,0,1,0,1,0,0,0,0,0,0,1,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,1,0,0,1,0,0,1,1,0,0,0,1,0,1,1,0,0,1,1,1,0,1,1,1,1,0,0,1,0,0,0,1,0,1,1,0,1,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,1,0,1,0,0,1,0,1,0,0,0,0,0,1,1,1,0,1,1,1,1,1,0,0,0,0,1,0,0,0,1,0,1,1,1,1,0,0,1,1,0,0,1,1,0,1,0,0,1,1,1,1,1,1,0,1,1,0,1,0,1,0,1,0,1,0,1,1,0,0,0,0,1,0,1,0,1,1,1,1,0,0,0,0,0,1,1,1,0,1,1,1,0,1,1,0,0,1,1,0,0,0,1,0,1,1,0,1,1,1,0,0,0,1,0,1,0,1,1,0,1,0,1,0,1,0,0,1,0,1,1,0,0,1,1,1,1,1,0,0,0,0,1,1,0,1,1,1,1,0,1,0,1,1,1,1,0,1,1,1,0,1,0,0,0,1,1,0,1,0,0,1,1,1,1,0,0,0,0,0,0,1,1,0,0,1,0,1,0,0,0,1,1,1,1,0,1,0,1,0,0,1,1,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,0,1,0,0,0,0,0,0,0,1,0,1,1,0,1,0,1,0,0,0,0,0,1,1,0,1,0,0,0,0,0,1,0,0,0,0,1,0,1,1,0,1,1,0,1,1,0,0,1,1,0,1,1,0,0,1,1,1,1,0,1,0,0,1,0,0,1,1,0,1,0,1,1,1,0,0,0,1,1,1,1,0,0,0,1,1,0,1,0,1,0,0,1,0,1,0,0,0,1,1,0,0,0,1,1,1,1,1,1,0,0,0,0,0,1,0,0,0,0,1,1,1,1,1,1,0,1,1,1,0,1,0,1,1,0,1,0,0,1,1,0,0,0,1,1,1,1,1,0,1,1,1,0,0,1,1,1,0,0,1,0,0,1,0,1,0,1,1,0,1,0,1,0,0,0,1,1,1,0,1,1,0,0,0,0,1,0,1,1,0,1,0,1,1,1,1,0,1,0,0,1,1,1,0,1,1,0,0,1,0,1,0,1,0,1,1,0,1,1,1,1,0,1,1,1,0,0,1,0,0,1,1,0,1,1,1,0,0,1,1,1,0,1,1,0,0,0,0,1,0,1,1,0,0,1,0,1,0,0,0,1,1,0,1,1,1,1,0,0,1,1,0,1,1,0,1,1,0,0,0,0,0,1,0,0,1,1,0,1,0,0,0,1,1,1,0,1,0,1,1,1,1,0,1,1,0,1,1,1,0,1,0,0,0,0,1,0,1,0,0,1,0,1,0,1,1,1,0,0,0,0,0,0,1,0,1,0,1,0,0,0,1,1,0,0,0,0,1,1,1,0,0,0,1,0,0,0,1,0,1,0,1,0,1,1,0,0,0,0,0,0,1,1,0,0,1,1,0,0,1,0,0,1,0,1,0,1,1,1,1,0,0,1,1,0,0,1,0,1,0,1,0,1,0,1,1,1,1,0,1,1,0,1,1,0,1,0,1,1,0,1,0,0,0,1,0,0,0,1,0,0,1,0,1,0,1,1,1,0,0,1,0,0,1,1,0,1,0,1,1,1,0,1,0,0,1,0,1,1,1,1,1,1,1,0,1,0,0,1,0,0,1,1,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,1,0,0,1,1,1,0,0,0,0,1,0,1,0,1,1,1,1,1,1,0,0,0,0,1,1,1,0,0,0,1,1,0,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,0,0,1,1,0,1,1,0,1,0,0,1,0,1,1,0,1,0,1,1,1,1,0,1,0,0,1,1,1,0,0,0,0,1,1,0,1,1,1,1,0,1,0,0,1,1,1,0,0,0,1,1,0,0,0,0,0,0,1,0,0,1,1,1,1,0,1,0,0,1,0,0,0,0,1,0,1,0,0,0,1,1,0,0,0,1,0,1,0,0,1,0,0,1,0,0,1,0,0,1,1,0,0,1,1,1,0,0,0,0,0,0,1,1,0,0,1,1,0,1,0,0,0,1,1,1,0,0,1,1,0,1,1,0,0,0,1,1,0,1,1,0,0,1,1,1,0,0,0,1,1,1,1,1,0,0,1,1,0,1,0,0,1,1,0,1,1,0,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,0,1,1,0,0,1,1,0,0,0,1,1,0,0,1,0,1,0,1,1,1,1,1,1,0,1,0,0,1,1,1,1,1,1,1,1,0,0,1,0,1,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,1,0,1,1,0,0,1,0,1,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,1,1,1,0,1,1,0,1,0,1,0,0,0,0,1,0,0,1,0,0,0,1,0,1,1,1,0,0,1,1,0,1,0,1,1,1,0,0,1,0,1,0,1,1,0,0,0,1,0,0,0,1,1,0,1,1,0,1,1,0,1,0,0,0,1,0,1,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,1,0,1,0,1,0,1,1,0,1,0,1,1,1,1,1,1,1,0,0,1,1,1,0,1,1,0,1,1,1,1,1,1,1,0,1,0,1,1,1,1,0,1,0,1,1,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,1,1,0,1,0,1,0,1,0,0,1,1,0,1,1,0,1,0,0,0,1,1,0,1,1,0,1,0,0,1,1,0,1,0,0,1,0,0,0,1,0,1,0,0,0,0,1,1,1,0,1,0,0,1,1,0,1,1,0,1,1,1,1,1,1,1,0,1,0,0,0,0,1,1,0,0,1,1,0,0,1,0,0,1,0,1,1,1,0,0,0,0,0,1,0,1,0,0,0,1,1,0,0,0,0,0,0,1,1,1,1,0,0,1,1,1,0,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,0,0,1,1,0,1,0,0,1,0,1,1,0,1,0,0,1,0,1,0,0,0,0,0,0,0,1,0,1,1,1,0,0,1,0,1,0,0,0,0,1,0,1,0,0,1,1,0,1,0,0,1,1,0,1,1,1,1,0,0,0,0,1,0,1,0,0,1,1,1,0,1,0,0,0,1,0,0,1,1,0,0,1,1,1,0,0,0,0,0,1,1,0,1,1,1,0,1,0,0,1,0,0,0,0,1,0,0,1,0,1,0,1,1,0,1,1,0,1,0,0,0,1,0,1,0,0,0,1,1,1,0,0,0,0,1,1,0,0,1,0,1,0,0,1,1,0,1,0,0,1,1,1,0,0,0,1,1,0,1,0,1,0,0,1,1,1,0,0,1,1,0,0,0,1,0,1,1,0,1,1,0,1,1,0,1,1,0,0,1,0,0,1,0,0,1,1,1,1,1,0,1,0,0,1,0,1,0,0,0,1,1,0,0,0,0,0,0,1,1,0,1,0,1,1,1,1,0,0,0,1,1,0,1,0,0,1,1,0,0,0,1,0,0,1,1,1,0,1,1,0,1,1,1,0,0,1,0,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,0,1,0,1,1,0,0,1,0,1,0,1,0,1,1,0,0,0,1,0,0,1,0,1,0,1,1,0,1,0,0,0,0,1,1,0,0,1,0,0,1,0,0,0,0,1,1,0,0,1,0,1,0,1,0,1,1,0,1,0,1,1,0,0,1,0,1,1,0,1,0,1,1,1,0,0,0,1,1,1,0,1,0,1,1,1,1,1,1,1,0,1,0,0,1,0,0,1,1,0,1,0,0,0,0,0,1,1,0,0,1,1,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,0,0,1,1,0,1,1,0,0,1,1,0,0,1,1,1,1,0,0,0,0,1,0,0,1,1,0,1,1,1,0,0,1,0,1,0,0,1,1,1,0,0,0,0,1,1,1,0,1,1,0,0,0,0,0,1,1,1,1,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,0,0,0,0,0,1,0,1,0,0,1,0,0,1,1,0,0,0,0,1,1,1,0,0,0,0,0,1,1,0,0,1,0,0,1,1,1,0,1,1,0,0,0,0,0,1,1,0,1,1,0,1,1,1,0,0,0,1,1,0,1,0,1,0,0,1,1,1,0,0,0,1,0,1,1,0,1,1,0,1,0,0,1,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,1,1,0,0,0,0,0,1,0,0,0,0,1,0,1,1,1,1,1,1,0,1,1,0,0,0,0,1,0,1,0,1,0,0,1,1,1,1,1,1,1,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,1,1,0,0,1,1,0,1,1,1,0,0,0,1,0,1,0,1,0,1,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,1,0,0,0,0,1,1,1,0,1,1,1,0,0,1,0,0,0,1,1,0,0,1,0,0,1,0,1,0,0,1,1,1,1,0,0,1,1,1,0,0,1,0,1,1,1,0,0,0,0,1,1,1,0,1,1,0,1,1,1,0,0,0,1,0,0,0,0,1,1,1,1,0,0,1,0,0,1,1,1,1,1,1,0,1,1,0,0,0,0,1,0,0,0,1,1,0,1,0,0,1,0,1,0,0,0,1,1,0,0,0,0,1,1,0,1,1,0,1,1,0,0,0,0,0,0,1,0,0,1,1,0,0,0,1,0,1,1,0,0,1,0,1,0,1,0,1,1,0,1,1,0,1,1,0,0,1,0,0,0,1,1,1,1,0,1,1,1,1,0,0,1,1,0,0,0,1,0,1,0,0,1,0,1,0,0,1,0,0,1,0,1,1,0,1,0,0,1,0,0,1,0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,0,0,0,0,1,0,1,1,1,1,1,0,1,0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,1,1,0,1,0,1,0,1,0,1,0,1,1,1,0,0,1,0,1,0,0,1,0,0,1,1,0,0,1,0,1,1,0,1,0,1,1,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,1,1,0,0,0,1,0,1,0,0,1,1,1,0,1,1,1,0,0,1,1,1,0,0,0,0,1,0,1,0,1,1,0,1,0,0,1,0,1,0,1,0,0,0,0,1,0,1,1,1,1,1,0,0,1,1,0,0,0,1,0,0,0,0,1,1,0,1,1,1,1,1,1,0,0,0,1,1,1,1,0,0,1,0,1,1,0,1,0,1,1,1,1,0,0,1,1,0,0,1,0,1,1,1,1,1,1,0,0,1,0,0,1,1,1,0,1,0,1,0,1,1,0,0,0,1,1,1,0,0,0,1,0,0,1,0,1,1,1,1,1,0,1,1,0,0,0,0,1,0,0,0,0,1,1,0,1,0,1,0,1,1,1,1,0,1,1,0,1,0,0,1,1,1,0,1,0,0,0,0,1,0,0,1,1,1,0,0,0,0,1,0,0,0,1,1,0,1,1,1,1,1,0,0,0,1,1,0,1,1,0,1,0,1,1,1,0,1,1,1,0,1,0,0,1,0,0,1,0,1,1,0,1,0,0,1,1,0,0,0,1,1,0,0,1,0,0,1,1,1,0,1,1,0,1,1,1,1,0,1,0,0,0,1,0,0,1,0,0,0,1,0,1,1,1,0,0,0,1,0,0,1,1,0,1,];
var gg_b = "1749722401/";

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
