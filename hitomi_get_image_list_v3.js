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
case 977:
case 1137:
case 496:
case 2183:
case 3589:
case 3409:
case 3683:
case 1869:
case 1190:
case 183:
case 1979:
case 816:
case 556:
case 1499:
case 1229:
case 1704:
case 1256:
case 1317:
case 1056:
case 2516:
case 1955:
case 862:
case 85:
case 1958:
case 487:
case 2512:
case 3439:
case 99:
case 2591:
case 3310:
case 1989:
case 1815:
case 1734:
case 3725:
case 229:
case 242:
case 180:
case 8:
case 2697:
case 3776:
case 1162:
case 2768:
case 1659:
case 2013:
case 209:
case 1723:
case 3130:
case 2740:
case 3579:
case 2765:
case 2173:
case 3772:
case 3728:
case 1678:
case 978:
case 825:
case 995:
case 582:
case 3309:
case 2012:
case 2941:
case 1552:
case 2212:
case 2797:
case 1726:
case 2918:
case 3168:
case 2665:
case 526:
case 2016:
case 1623:
case 1556:
case 3165:
case 1722:
case 3672:
case 1778:
case 1788:
case 719:
case 1147:
case 2091:
case 2855:
case 2879:
case 2421:
case 293:
case 3410:
case 2194:
case 2186:
case 1604:
case 184:
case 3055:
case 3279:
case 3079:
case 3258:
case 2969:
case 2619:
case 3058:
case 3667:
case 1692:
case 1850:
case 3917:
case 306:
case 326:
case 171:
case 3379:
case 202:
case 963:
case 1696:
case 3358:
case 222:
case 249:
case 297:
case 2839:
case 2391:
case 2521:
case 2102:
case 3602:
case 484:
case 3239:
case 382:
case 1705:
case 2106:
case 1954:
case 3606:
case 2312:
case 1452:
case 27:
case 1814:
case 1099:
case 1517:
case 2057:
case 315:
case 631:
case 2257:
case 1456:
case 1871:
case 1429:
case 298:
case 3549:
case 3733:
case 1120:
case 3554:
case 776:
case 3742:
case 1648:
case 1645:
case 3009:
case 2136:
case 3746:
case 239:
case 2313:
case 2861:
case 26:
case 252:
case 3455:
case 3821:
case 3999:
case 2133:
case 2670:
case 791:
case 3642:
case 1748:
case 480:
case 3732:
case 2142:
case 766:
case 1745:
case 2124:
case 3210:
case 1635:
case 3624:
case 2491:
case 2221:
case 3646:
case 2146:
case 614:
case 3010:
case 1792:
case 641:
case 3698:
case 1784:
case 2981:
case 2557:
case 2412:
case 1796:
case 2854:
case 84:
case 1352:
case 4029:
case 2103:
case 3509:
case 3702:
case 483:
case 3249:
case 3054:
case 1939:
case 187:
case 3254:
case 3151:
case 2493:
case 3930:
case 1065:
case 135:
case 888:
case 1713:
case 703:
case 1500:
case 1268:
case 2034:
case 2588:
case 2408:
case 1828:
case 1872:
case 2345:
case 1189:
case 2360:
case 4:
case 1907:
case 1876:
case 3320:
case 2311:
case 1825:
case 3834:
case 3900:
case 1219:
case 3769:
case 14:
case 1886:
case 2559:
case 2396:
case 3562:
case 639:
case 1019:
case 754:
case 2653:
case 66:
case 652:
case 1530:
case 2384:
case 2729:
case 1894:
case 1179:
case 896:
case 2204:
case 3601:
case 675:
case 700:
case 3566:
case 2578:
case 2847:
case 462:
case 3507:
case 578:
case 887:
case 416:
case 1937:
case 3804:
case 2983:
case 373:
case 1380:
case 3563:
case 1200:
case 3152:
case 2753:
case 67:
case 753:
case 3377:
case 2656:
case 2523:
case 1565:
case 231:
case 871:
case 595:
case 2837:
case 3090:
case 472:
case 1351:
case 2448:
case 568:
case 4080:
case 2411:
case 2305:
case 3290:
case 3420:
case 2288:
case 3237:
case 799:
case 2308:
case 747:
case 1947:
case 2460:
case 2994:
case 455:
case 363:
case 213:
case 3037:
case 374:
case 2445:
case 2022:
case 1230:
case 2078:
case 3940:
case 3615:
case 2484:
case 2504:
case 2222:
case 1030:
case 602:
case 1097:
case 1963:
case 3641:
case 1519:
case 3731:
case 2059:
case 3062:
case 567:
case 4070:
case 2141:
case 1613:
case 4064:
case 2259:
case 3968:
case 2118:
case 2807:
case 1297:
case 649:
case 2044:
case 1712:
case 2496:
case 3618:
case 2226:
case 697:
case 724:
case 3878:
case 3547:
case 2335:
case 3207:
case 42:
case 2862:
case 1364:
case 360:
case 3844:
case 563:
case 4030:
case 1621:
case 3771:
case 574:
case 2936:
case 693:
case 3447:
case 2038:
case 1270:
case 2943:
case 1264:
case 1920:
case 3287:
case 469:
case 2932:
case 43:
case 1846:
case 758:
case 1757:
case 2404:
case 1330:
case 2584:
case 2799:
case 3835:
case 1527:
case 1842:
case 632:
case 10:
case 734:
case 3838:
case 2344:
case 2375:
case 1149:
case 2205:
case 4000:
case 560:
case 3390:
case 2005:
case 936:
case 2906:
case 1251:
case 3893:
case 381:
case 2008:
case 2545:
case 2560:
case 2574:
case 445:
case 3337:
case 1898:
case 3750:
case 2208:
case 1468:
case 172:
case 1300:
case 2093:
case 201:
case 3808:
case 2967:
case 2617:
case 155:
case 1465:
case 2423:
case 4019:
case 1570:
case 3587:
case 3951:
case 3884:
case 2150:
case 3650:
case 744:
case 629:
case 642:
case 1497:
case 2296:
case 2459:
case 162:
case 377:
case 3980:
case 2444:
case 2717:
case 2292:
case 2998:
case 3466:
case 728:
case 1802:
case 2284:
case 883:
case 3681:
case 708:
case 2304:
case 4040:
case 2171:
case 435:
case 2924:
case 573:
case 1109:
case 2260:
case 1721:
case 694:
case 2946:
case 2074:
case 2060:
case 3490:
case 3220:
case 3970:
case 2933:
case 2211:
case 2048:
case 378:
case 2248:
case 2011:
case 2942:
case 3020:
case 946:
case 4068:
case 125:
case 3860:
case 3874:
case 1657:
case 251:
case 3199:
case 1400:
case 2820:
case 914:
case 1677:
case 3727:
case 3849:
case 192:
case 529:
case 542:
case 127:
case 111:
case 1193:
case 3557:
case 1105:
case 725:
case 2249:
case 2151:
case 2049:
case 670:
case 3651:
case 2489:
case 2509:
case 3103:
case 2603:
case 1571:
case 7:
case 2702:
case 1401:
case 1957:
case 1315:
case 2479:
case 2821:
case 1318:
case 2458:
case 36:
case 21:
case 3491:
case 2624:
case 3971:
case 4015:
case 2210:
case 3124:
case 673:
case 2736:
case 2010:
case 3146:
case 3021:
case 2646:
case 762:
case 4041:
case 128:
case 2539:
case 130:
case 2743:
case 3664:
case 2261:
case 1720:
case 2061:
case 1138:
case 108:
case 3057:
case 453:
case 910:
case 3809:
case 532:
case 1331:
case 157:
case 559:
case 2857:
case 2209:
case 1174:
case 1160:
case 1921:
case 143:
case 1071:
case 674:
case 3136:
case 2643:
case 755:
case 3764:
case 3770:
case 2733:
case 398:
case 3132:
case 1014:
case 2554:
case 499:
case 2632:
case 447:
case 1418:
case 450:
case 1777:
case 913:
case 2127:
case 302:
case 349:
case 322:
case 206:
case 3167:
case 2798:
case 1192:
case 2379:
case 1281:
case 140:
case 282:
case 660:
case 3106:
case 2703:
case 386:
case 3521:
case 2510:
case 2602:
case 3102:
case 921:
case 1853:
case 3186:
case 2686:
case 2461:
case 2339:
case 3182:
case 1647:
case 1350:
case 917:
case 104:
case 73:
case 1737:
case 2682:
case 4081:
case 3194:
case 124:
case 2783:
case 3421:
case 393:
case 3700:
case 3619:
case 1518:
case 440:
case 1104:
case 2279:
case 1515:
case 236:
case 1201:
case 2956:
case 695:
case 2089:
case 2816:
case 586:
case 2309:
case 153:
case 1371:
case 457:
case 2449:
case 88:
case 1314:
case 2165:
case 3016:
case 1123:
case 3357:
case 4071:
case 3665:
case 3216:
case 2672:
case 1766:
case 1569:
case 147:
case 2625:
case 522:
case 1231:
case 1663:
case 3941:
case 3125:
case 3012:
case 3918:
case 3797:
case 3176:
case 1031:
case 74:
case 885:
case 3321:
case 100:
case 138:
case 289:
case 3630:
case 1501:
case 2673:
case 2130:
case 1215:
case 1666:
case 1178:
case 2728:
case 1241:
case 1175:
case 408:
case 3013:
case 1662:
case 430:
case 1159:
case 1912:
case 2786:
case 1414:
case 1185:
case 1852:
case 1637:
case 2782:
case 1188:
case 779:
case 2683:
case 1471:
case 2409:
case 3183:
case 1856:
case 552:
case 3719:
case 539:
case 3512:
case 3457:
case 891:
case 575:
case 3505:
case 838:
case 3211:
case 2614:
case 2964:
case 3114:
case 1243:
case 1032:
case 1761:
case 2220:
case 800:
case 796:
case 2020:
case 3942:
case 761:
case 3011:
case 1935:
case 3274:
case 1503:
case 3924:
case 854:
case 1036:
case 1236:
case 3060:
case 4028:
case 185:
case 3946:
case 2577:
case 1376:
case 29:
case 2811:
case 3334:
case 1372:
case 2845:
case 2199:
case 1157:
case 3323:
case 3699:
case 1394:
case 3903:
case 2650:
case 1908:
case 803:
case 3150:
case 788:
case 2347:
case 1202:
case 1639:
case 1533:
case 1542:
case 1386:
case 689:
case 2587:
case 2407:
case 1754:
case 3084:
case 3717:
case 3292:
case 166:
case 3304:
case 3092:
case 1067:
case 2681:
case 3284:
case 191:
case 1993:
case 2462:
case 3296:
case 994:
case 837:
case 277:
case 3475:
case 824:
case 1203:
case 3560:
case 1383:
case 3545:
case 3008:
case 804:
case 1003:
case 2337:
case 2390:
case 3511:
case 3205:
case 3385:
case 848:
case 1739:
case 850:
case 3906:
case 1654:
case 3877:
case 3005:
case 1428:
case 1472:
case 2117:
case 3093:
case 301:
case 2808:
case 1984:
case 321:
case 3423:
case 3293:
case 2781:
case 1476:
case 2277:
case 2927:
case 1851:
case 317:
case 2463:
case 3038:
case 3943:
case 1233:
case 268:
case 1033:
case 2307:
case 1610:
case 513:
case 1709:
case 853:
case 1494:
case 3235:
case 1024:
case 2447:
case 3936:
case 2838:
case 3326:
case 3596:
case 3375:
case 899:
case 1870:
case 1864:
case 3344:
case 990:
case 2835:
case 531:
case 3584:
case 3404:
case 3141:
case 2731:
case 857:
case 1113:
case 3244:
case 4042:
case 2618:
case 3496:
case 3807:
case 3118:
case 3259:
case 2262:
case 3504:
case 2066:
case 3484:
case 2940:
case 521:
case 2965:
case 3115:
case 3078:
case 4024:
case 3492:
case 3222:
case 626:
case 1467:
case 998:
case 1406:
case 1342:
case 1586:
case 1897:
case 2826:
case 3338:
case 2007:
case 1402:
case 3866:
case 97:
case 2822:
case 1594:
case 1789:
case 331:
case 3629:
case 615:
case 3656:
case 1904:
case 2701:
case 2129:
case 1572:
case 2919:
case 2152:
case 1395:
case 3890:
case 3652:
case 2669:
case 2377:
case 997:
case 949:
case 3982:
case 2237:
case 3288:
case 834:
case 313:
case 1283:
case 3460:
case 3474:
case 902:
case 3448:
case 3085:
case 1432:
case 2090:
case 3986:
case 2290:
case 2420:
case 840:
case 1443:
case 3285:
case 1679:
case 3101:
case 3847:
case 3392:
case 2566:
case 656:
case 1658:
case 3575:
case 3752:
case 2769:
case 3544:
case 892:
case 827:
case 2900:
case 2562:
case 3559:
case 2153:
case 1282:
case 833:
case 273:
case 314:
case 2804:
case 264:
case 2507:
case 1286:
case 2487:
case 1442:
case 1819:
case 1433:
case 1944:
case 1076:
case 1225:
case 1495:
case 1975:
case 2631:
case 4043:
case 4032:
case 1112:
case 1959:
case 1025:
case 3034:
case 2997:
case 1072:
case 2715:
case 3493:
case 341:
case 4036:
case 1228:
case 1498:
case 1272:
case 1978:
case 828:
case 3311:
case 3585:
case 96:
case 952:
case 3408:
case 2537:
case 2823:
case 3360:
case 1689:
case 1865:
case 844:
case 1403:
case 47:
case 2831:
case 558:
case 818:
case 3371:
case 4057:
case 353:
case 1941:
case 3134:
case 1125:
case 1012:
case 3569:
case 2634:
case 399:
case 2163:
case 3913:
case 3231:
case 1176:
case 3762:
case 3031:
case 1668:
case 2726:
case 1212:
case 672:
case 3123:
case 1016:
case 1730:
case 1357:
case 1665:
case 655:
case 2399:
case 2417:
case 98:
case 2147:
case 304:
case 1855:
case 1091:
case 3647:
case 1291:
case 1421:
case 193:
case 348:
case 2604:
case 821:
case 3104:
case 486:
case 760:
case 159:
case 60:
case 2053:
case 1700:
case 3541:
case 62:
case 303:
case 2137:
case 3188:
case 912:
case 3637:
case 2688:
case 194:
case 3856:
case 323:
case 508:
case 966:
case 3185:
case 2869:
case 3852:
case 3414:
case 2685:
case 2499:
case 1901:
case 770:
case 2317:
case 2955:
case 1600:
case 1719:
case 2958:
case 3269:
case 2252:
case 2052:
case 1512:
case 452:
case 3607:
case 300:
case 2818:
case 439:
case 320:
case 2841:
case 338:
case 3450:
case 475:
case 1321:
case 354:
case 1931:
case 129:
case 592:
case 3763:
case 3241:
case 3018:
case 3175:
case 764:
case 3218:
case 1697:
case 662:
case 109:
case 3662:
case 2659:
case 1768:
case 2723:
case 3215:
case 1173:
case 4021:
case 2678:
case 2622:
case 2166:
case 616:
case 3666:
case 3178:
case 64:
case 288:
case 152:
case 16:
case 3401:
case 3957:
case 1810:
case 1664:
case 1133:
case 409:
case 1670:
case 3720:
case 1914:
case 3138:
case 2748:
case 1142:
case 429:
case 3687:
case 2909:
case 3135:
case 344:
case 2745:
case 1221:
case 2760:
case 523:
case 1971:
case 1021:
case 3550:
case 2217:
case 778:
case 1198:
case 1981:
case 2693:
case 2329:
case 635:
case 296:
case 3193:
case 2796:
case 1727:
case 2177:
case 327:
case 1195:
case 1680:
case 3369:
case 3571:
case 333:
case 3817:
case 1950:
case 3514:
case 2605:
case 520:
case 3105:
case 1651:
case 768:
case 493:
case 2692:
case 2793:
case 831:
case 271:
case 3281:
case 2684:
case 63:
case 102:
case 3196:
case 2696:
case 669:
case 1627:
case 1780:
case 1839:
case 122:
case 149:
case 547:
case 2881:
case 1391:
case 3050:
case 813:
case 186:
case 3250:
case 795:
case 2949:
case 340:
case 432:
case 459:
case 2954:
case 1751:
case 490:
case 357:
case 17:
case 3469:
case 2814:
case 3331:
case 1316:
case 1809:
case 2299:
case 2120:
case 548:
case 1143:
case 2961:
case 3620:
case 3148:
case 3787:
case 1132:
case 2648:
case 2660:
case 3145:
case 3174:
case 3160:
case 2910:
case 504:
case 2380:
case 1534:
case 3758:
case 1652:
case 1169:
case 2200:
case 822:
case 849:
case 3395:
case 2000:
case 1753:
case 934:
case 1656:
case 2540:
case 3779:
case 3572:
case 3528:
case 4008:
case 3398:
case 940:
case 1448:
case 417:
case 2351:
case 1411:
case 3800:
case 58:
case 1305:
case 3443:
case 1982:
case 3436:
case 421:
case 3083:
case 1308:
case 3283:
case 1994:
case 3303:
case 1445:
case 886:
case 113:
case 401:
case 4035:
case 2230:
case 1504:
case 1484:
case 865:
case 1492:
case 1222:
case 671:
case 1928:
case 1026:
case 1244:
case 2097:
case 1275:
case 269:
case 2613:
case 1118:
case 943:
case 2712:
case 1044:
case 3346:
case 1866:
case 3324:
case 1338:
case 3406:
case 3586:
case 3333:
case 898:
case 2364:
case 908:
case 1973:
case 141:
case 2265:
case 566:
case 2065:
case 3978:
case 928:
case 3116:
case 1023:
case 2966:
case 2713:
case 1234:
case 2068:
case 3975:
case 1131:
case 86:
case 2500:
case 2480:
case 3926:
case 4048:
case 3276:
case 944:
case 2612:
case 2962:
case 3112:
case 3959:
case 3025:
case 1034:
case 2268:
case 1408:
case 451:
case 1588:
case 2872:
case 1374:
case 3840:
case 3868:
case 2907:
case 687:
case 1405:
case 1544:
case 2158:
case 2219:
case 24:
case 3658:
case 1752:
case 2327:
case 1396:
case 1559:
case 2597:
case 2019:
case 1729:
case 1101:
case 1384:
case 2530:
case 2882:
case 1392:
case 1004:
case 1847:
case 789:
case 1522:
case 3655:
case 1438:
case 911:
case 746:
case 2470:
case 3433:
case 585:
case 4092:
case 992:
case 3302:
case 3446:
case 927:
case 3094:
case 3988:
case 114:
case 907:
case 3294:
case 3424:
case 2139:
case 3905:
case 3749:
case 3533:
case 2570:
case 3639:
case 1538:
case 3754:
case 3386:
case 3827:
case 1535:
case 3524:
case 4004:
case 3394:
case 3908:
case 2867:
case 937:
case 3202:
case 2977:
case 923:
case 1459:
case 680:
case 1995:
case 262:
case 25:
case 1475:
case 414:
case 1422:
case 1292:
case 3267:
case 3473:
case 3067:
case 391:
case 216:
case 366:
case 1181:
case 1304:
case 2430:
case 1092:
case 3036:
case 4023:
case 3710:
case 3609:
case 1245:
case 1260:
case 3935:
case 2721:
case 1274:
case 3503:
case 1060:
case 1074:
case 385:
case 1045:
case 4034:
case 1114:
case 3761:
case 1933:
case 1248:
case 3938:
case 2551:
case 3372:
case 3328:
case 2836:
case 938:
case 225:
case 3157:
case 205:
case 1323:
case 1593:
case 2365:
case 3376:
case 954:
case 3325:
case 842:
case 1334:
case 2400:
case 2843:
case 3046:
case 3494:
case 3224:
case 2110:
case 1235:
case 3960:
case 3610:
case 3709:
case 3121:
case 3502:
case 3482:
case 1035:
case 4078:
case 4022:
case 2161:
case 3233:
case 4044:
case 3042:
case 2920:
case 2264:
case 118:
case 890:
case 3661:
case 38:
case 4075:
case 2270:
case 1943:
case 726:
case 2070:
case 3506:
case 1238:
case 4026:
case 3948:
case 782:
case 1592:
case 1378:
case 1584:
case 1404:
case 2330:
case 3373:
case 1799:
case 2527:
case 1596:
case 22:
case 3870:
case 2419:
case 2895:
case 2149:
case 3739:
case 3880:
case 3649:
case 1005:
case 1906:
case 3654:
case 3383:
case 1545:
case 893:
case 3203:
case 1574:
case 2898:
case 431:
case 1388:
case 1902:
case 3851:
case 2468:
case 924:
case 3996:
case 904:
case 3425:
case 3295:
case 101:
case 1093:
case 948:
case 3992:
case 255:
case 3428:
case 3298:
case 3098:
case 1293:
case 1423:
case 121:
case 3099:
case 3871:
case 3299:
case 3456:
case 2331:
case 3814:
case 3645:
case 2174:
case 1389:
case 2921:
case 3735:
case 243:
case 3674:
case 2899:
case 2271:
case 717:
case 2620:
case 2111:
case 860:
case 3611:
case 701:
case 3120:
case 1742:
case 3648:
case 721:
case 1632:
case 2148:
case 1127:
case 3353:
case 1795:
case 2441:
case 3692:
case 718:
case 1798:
case 1917:
case 2415:
case 1379:
case 258:
case 945:
case 1561:
case 4058:
case 4079:
case 2050:
case 874:
case 3881:
case 1602:
case 3708:
case 4055:
case 2677:
case 3352:
case 2369:
case 580:
case 227:
case 1180:
case 2431:
case 1767:
case 3792:
case 396:
case 2193:
case 3356:
case 3599:
case 3329:
case 3939:
case 2105:
case 387:
case 3605:
case 1249:
case 1049:
case 751:
case 1254:
case 1706:
case 1489:
case 1603:
case 2108:
case 2817:
case 3608:
case 2401:
case 156:
case 3453:
case 2318:
case 489:
case 2341:
case 388:
case 3774:
case 3760:
case 3909:
case 1010:
case 2550:
case 979:
case 446:
case 3711:
case 1164:
case 1170:
case 935:
case 1633:
case 1261:
case 2720:
case 1061:
case 1732:
case 1642:
case 3748:
case 208:
case 3187:
case 3989:
case 1310:
case 41:
case 200:
case 3107:
case 905:
case 238:
case 878:
case 1361:
case 3841:
case 220:
case 596:
case 1130:
case 4010:
case 2666:
case 3166:
case 1772:
case 3678:
case 1728:
case 1555:
case 89:
case 2175:
case 3734:
case 4061:
case 3675:
case 2662:
case 714:
case 2126:
case 1197:
case 612:
case 1776:
case 2912:
case 3162:
case 1786:
case 916:
case 3685:
case 3190:
case 1349:
case 3869:
case 3688:
case 2637:
case 962:
case 95:
case 2747:
case 2188:
case 2829:
case 2471:
case 223:
case 2991:
case 2856:
case 1409:
case 2269:
case 588:
case 1953:
case 3052:
case 3979:
case 3499:
case 3229:
case 3955:
case 2853:
case 955:
case 2790:
case 1339:
case 250:
case 2647:
case 972:
case 426:
case 3788:
case 2350:
case 1410:
case 224:
case 1694:
case 881:
case 406:
case 1783:
case 2541:
case 3053:
case 1258:
case 1952:
case 4039:
case 482:
case 1058:
case 2518:
case 1055:
case 2104:
case 3604:
case 2201:
case 384:
case 2515:
case 2001:
case 92:
case 90:
case 1289:
case 415:
case 2314:
case 868:
case 3831:
case 1773:
case 3556:
case 3399:
case 3623:
case 3529:
case 2123:
case 3722:
case 1672:
case 1628:
case 895:
case 676:
case 3163:
case 3634:
case 3775:
case 3552:
case 2663:
case 713:
case 2031:
case 3759:
case 2203:
case 1893:
case 2383:
case 653:
case 1337:
case 2880:
case 3051:
case 3895:
case 3251:
case 2532:
case 2472:
case 2428:
case 1117:
case 3440:
case 2984:
case 2098:
case 3803:
case 699:
case 1927:
case 3080:
case 2476:
case 3468:
case 4090:
case 372:
case 3300:
case 1463:
case 1077:
case 3270:
case 2661:
case 3920:
case 2042:
case 1714:
case 2233:
case 2948:
case 648:
case 4062:
case 2709:
case 2974:
case 604:
case 1771:
case 3621:
case 722:
case 749:
case 2024:
case 1447:
case 624:
case 2246:
case 4066:
case 2482:
case 786:
case 1838:
case 460:
case 3527:
case 3842:
case 3833:
case 3419:
case 2864:
case 3846:
case 195:
case 545:
case 2373:
case 3824:
case 3757:
case 1614:
case 889:
case 4063:
case 178:
case 2032:
case 1964:
case 2483:
case 2503:
case 1671:
case 2935:
case 3721:
case 2036:
case 2710:
case 603:
case 2236:
case 1437:
case 470:
case 3368:
case 1577:
case 2376:
case 637:
case 3832:
case 19:
case 1363:
case 3:
case 2595:
case 54:
case 3400:
case 3580:
case 1811:
case 325:
case 3836:
case 2372:
case 3365:
case 1874:
case 3340:
case 2157:
case 2394:
case 2524:
case 654:
case 1892:
case 752:
case 2202:
case 1347:
case 3867:
case 2908:
case 739:
case 3564:
case 600:
case 2533:
case 3139:
case 2827:
case 2206:
case 1466:
case 464:
case 2267:
case 4047:
case 266:
case 316:
case 291:
case 2993:
case 2067:
case 2473:
case 1462:
case 3497:
case 1980:
case 579:
case 505:
case 3530:
case 2679:
case 2367:
case 1566:
case 3882:
case 3155:
case 2658:
case 1900:
case 3219:
case 3158:
case 3597:
case 3886:
case 1153:
case 3327:
case 2282:
case 3937:
case 644:
case 2094:
case 2302:
case 2446:
case 742:
case 729:
case 1047:
case 3691:
case 173:
case 164:
case 477:
case 628:
case 1487:
case 2286:
case 2442:
case 2306:
case 2433:
case 2819:
case 3990:
case 607:
case 2076:
case 2975:
case 379:
case 562:
case 2225:
case 3268:
case 2959:
case 3962:
case 3612:
case 627:
case 478:
case 1718:
case 692:
case 2926:
case 3265:
case 2028:
case 1715:
case 516:
case 3240:
case 3966:
case 611:
case 335:
case 3065:
case 2978:
case 2498:
case 3616:
case 2332:
case 3451:
case 1590:
case 1320:
case 170:
case 633:
case 1537:
case 1823:
case 2403:
case 2583:
case 3189:
case 2865:
case 369:
case 2113:
case 1641:
case 219:
case 33:
case 3297:
case 468:
case 3712:
case 1618:
case 1262:
case 1968:
case 1615:
case 2923:
case 3716:
case 3030:
case 555:
case 2073:
case 2467:
case 2586:
case 1207:
case 640:
case 2342:
case 2406:
case 658:
case 1859:
case 1826:
case 2897:
case 160:
case 1844:
case 2333:
case 732:
case 2402:
case 2346:
case 1878:
case 759:
case 2594:
case 2789:
case 2324:
case 3873:
case 1156:
case 3883:
case 3565:
case 1701:
case 826:
case 2398:
case 806:
case 2528:
case 2395:
case 1669:
case 52:
case 2525:
case 2758:
case 3380:
case 50:
case 3000:
case 2576:
case 3947:
case 1237:
case 1037:
case 2303:
case 3791:
case 163:
case 4077:
case 3351:
case 971:
case 1090:
case 467:
case 2443:
case 1290:
case 1420:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1759888801/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,0,1,1,0,0,1,1,0,1,0,0,0,1,0,1,1,0,1,0,1,1,0,1,1,1,1,0,1,0,0,0,1,0,0,1,0,1,0,0,1,1,1,0,0,0,1,0,0,1,0,1,0,1,0,0,0,1,0,1,0,1,1,1,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,1,1,1,0,1,0,0,1,1,1,1,1,1,1,1,0,1,0,0,0,1,1,0,1,0,1,1,0,0,0,1,0,0,1,1,0,1,1,0,1,1,1,1,0,0,0,0,1,0,0,1,0,1,1,0,1,0,0,0,1,0,1,0,0,1,1,0,1,1,1,0,1,1,0,1,1,1,0,1,0,0,0,1,1,1,1,0,0,0,0,1,0,1,0,0,1,1,1,1,1,0,0,0,1,1,1,1,1,0,0,0,0,1,1,1,0,0,1,1,0,1,1,0,0,0,1,0,0,1,0,0,1,1,0,1,1,1,1,0,1,0,1,0,1,0,0,0,0,1,0,1,1,0,0,1,1,0,0,0,0,0,1,1,1,1,0,0,1,0,0,1,0,0,0,1,0,1,0,1,0,1,1,0,1,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,1,0,1,0,1,0,0,1,1,1,0,1,1,1,1,1,0,1,0,0,0,0,0,0,1,1,1,1,1,0,0,1,1,1,1,0,1,1,1,0,0,0,1,0,1,0,1,0,0,1,0,1,1,0,0,1,0,0,0,1,1,0,0,0,1,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,1,1,0,0,1,1,1,0,1,1,0,1,1,1,1,1,0,0,1,0,1,0,0,1,0,1,1,0,1,0,0,0,0,1,0,1,1,0,0,0,0,1,1,1,1,0,0,0,1,0,0,0,0,1,0,0,1,1,1,1,0,0,1,0,0,0,1,1,0,0,0,0,1,1,1,0,0,1,1,1,1,0,1,0,1,0,1,1,0,1,0,1,0,0,1,1,1,1,0,1,0,0,1,0,1,1,0,1,0,1,1,1,0,1,1,0,1,1,0,0,1,0,0,1,0,0,1,0,0,0,0,1,1,0,0,1,0,0,0,0,1,0,0,1,0,0,0,1,1,1,1,0,0,1,0,0,1,0,1,1,0,0,0,0,0,0,1,0,0,1,0,0,1,0,1,1,0,0,0,1,0,0,1,1,0,1,1,1,0,1,1,0,0,1,1,1,0,0,0,0,1,1,1,0,0,1,1,1,0,1,0,0,1,1,0,1,0,0,0,1,0,0,1,1,0,0,0,1,0,1,1,1,0,0,1,0,0,0,1,1,0,1,1,1,0,0,0,0,0,0,0,1,0,1,1,1,1,0,1,1,1,0,1,0,1,0,1,1,1,1,0,1,0,0,0,1,1,0,0,1,1,1,1,1,0,1,0,1,0,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,1,1,1,1,0,1,0,1,1,1,0,1,0,0,0,0,1,0,0,0,0,1,1,0,0,1,1,1,0,1,1,0,1,1,1,0,1,1,0,0,1,0,1,0,0,0,0,1,0,0,1,0,1,0,1,1,0,1,0,1,1,1,1,1,0,0,1,1,1,1,1,0,1,0,1,0,1,0,1,0,0,0,0,0,1,0,1,1,0,0,1,0,0,0,1,0,1,1,0,1,0,0,0,1,1,0,0,1,1,0,0,1,1,0,1,0,0,0,0,0,0,1,0,0,1,0,1,0,0,1,1,0,1,1,1,1,1,0,0,1,0,1,1,0,0,1,1,0,1,0,1,0,1,0,0,0,1,1,1,0,0,1,1,0,0,1,0,0,1,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,1,0,1,0,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,0,1,0,1,1,0,1,1,0,1,1,1,1,1,0,1,1,0,0,0,1,0,1,1,0,0,1,1,0,0,0,0,0,1,1,1,1,1,0,1,0,0,1,1,1,1,0,1,1,0,0,1,0,1,1,0,0,0,0,0,0,1,1,0,0,1,0,0,0,0,1,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,1,0,1,1,0,0,0,0,1,1,1,0,0,0,0,1,0,1,0,1,0,1,0,0,1,0,1,0,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,1,0,1,0,1,0,0,0,0,0,1,1,0,1,0,1,1,0,0,0,1,0,1,0,0,0,1,1,0,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,1,0,1,0,1,0,0,1,1,0,0,0,1,0,0,1,1,1,0,0,1,1,0,1,0,0,1,0,1,0,1,0,0,1,1,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,0,1,0,0,0,1,0,0,1,1,0,1,1,0,1,0,1,0,0,0,0,1,1,0,0,1,1,1,1,0,1,1,1,1,0,0,0,1,0,0,1,1,1,0,1,1,0,1,0,1,1,0,1,1,1,1,0,0,0,1,0,0,0,0,1,0,0,1,0,0,0,1,0,1,1,0,0,1,0,0,1,1,1,1,0,1,1,1,1,1,1,0,0,1,0,1,1,1,0,0,1,1,0,1,0,0,1,0,1,0,1,0,1,1,1,0,1,0,0,0,1,0,1,0,1,0,1,1,0,0,0,0,0,1,1,1,0,0,1,0,0,1,1,1,1,1,0,0,0,1,0,0,1,0,0,0,1,1,0,0,1,0,1,0,0,0,1,1,1,1,1,0,1,1,0,1,0,0,0,0,0,0,1,1,0,0,1,0,0,1,1,1,0,0,1,0,0,0,0,1,0,1,1,1,1,0,0,0,0,1,0,0,0,1,0,1,1,0,0,0,0,0,0,1,1,0,1,0,1,0,1,1,1,0,0,1,1,0,1,0,1,1,0,1,1,0,1,1,1,0,0,0,1,1,1,1,1,1,1,0,1,1,1,1,0,0,1,0,0,0,1,0,1,1,1,1,0,0,0,0,1,1,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,1,0,1,1,0,0,0,1,0,0,0,1,0,0,1,0,0,1,1,0,1,1,1,1,0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,1,0,1,1,0,1,1,1,1,1,0,1,1,0,0,0,0,0,0,0,1,0,0,1,0,1,1,1,0,0,1,0,0,0,0,1,0,0,1,0,0,1,1,1,0,1,1,0,0,0,1,0,1,1,0,0,0,0,0,0,1,0,0,1,1,0,0,1,0,1,0,0,0,1,1,0,0,1,1,1,1,0,1,0,0,1,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1,1,1,0,1,0,0,0,1,0,1,1,1,0,0,0,0,0,1,0,0,1,1,1,0,0,1,0,0,1,0,1,0,0,0,1,1,0,0,0,1,1,0,1,0,1,0,1,0,1,1,0,0,1,0,1,1,0,0,1,1,0,1,0,1,1,1,1,0,0,1,1,1,1,1,0,1,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,1,1,0,0,1,1,0,0,1,1,1,0,0,1,0,0,1,1,1,1,0,0,1,1,1,1,1,1,0,0,1,1,1,1,1,0,1,0,1,0,0,1,0,1,0,0,1,0,0,1,0,0,1,0,0,1,1,1,1,0,0,1,0,0,0,1,0,0,0,0,1,1,1,0,0,1,1,1,0,0,1,1,1,0,1,0,0,1,1,0,1,0,1,1,0,0,1,0,0,1,1,0,1,1,0,0,1,0,0,0,0,0,0,1,1,1,0,0,1,1,0,0,0,1,0,0,0,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0,1,0,1,0,1,1,0,0,1,1,1,1,0,1,1,0,0,1,0,0,0,0,1,1,1,0,0,1,1,1,1,0,1,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,1,0,0,1,1,0,1,1,1,0,1,0,1,1,1,0,0,0,1,0,1,0,0,1,0,0,1,1,0,0,0,0,0,1,1,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,0,0,1,0,0,1,0,1,1,1,1,0,1,1,1,0,0,0,1,1,0,0,0,1,0,0,1,0,1,0,1,0,0,1,1,1,1,1,0,1,0,0,0,0,1,0,0,0,1,1,1,0,0,0,0,1,1,0,0,0,1,0,1,1,0,1,1,1,1,0,0,1,0,0,1,1,0,1,0,1,0,0,0,1,0,0,1,1,0,1,0,1,0,1,0,0,0,1,0,1,0,0,0,1,1,1,0,1,1,0,0,0,1,0,1,1,1,0,0,0,1,1,1,1,0,1,0,0,1,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,0,1,1,0,0,1,1,0,0,0,1,1,1,1,1,0,1,0,1,1,0,1,0,0,0,1,1,0,1,0,0,1,1,0,1,1,0,1,1,0,0,1,0,0,1,1,0,1,0,1,1,0,0,0,1,1,1,1,1,1,1,1,0,0,0,1,1,0,0,1,0,1,0,1,1,0,0,0,0,1,0,1,1,1,0,1,0,0,0,0,0,1,0,0,1,0,1,0,0,0,0,1,1,0,0,0,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,0,0,0,0,1,0,1,1,1,1,0,0,1,1,0,0,0,1,0,0,1,0,0,1,1,0,0,0,0,0,0,0,0,1,0,1,1,0,0,1,0,0,0,0,1,0,1,1,1,1,0,1,1,0,1,1,1,1,1,0,0,0,0,0,1,0,1,0,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,1,0,0,1,0,0,1,1,1,1,1,1,1,1,0,1,1,1,1,0,0,1,1,0,0,0,0,0,1,0,0,1,0,1,1,1,1,1,0,1,0,1,0,1,0,1,1,0,1,1,1,1,0,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,1,1,0,1,0,1,0,0,1,1,0,1,1,1,0,1,1,0,0,1,1,0,0,0,0,0,1,1,0,0,1,1,1,0,1,1,1,1,1,1,1,0,1,1,1,1,0,1,1,0,0,1,0,1,0,1,1,1,0,1,0,0,0,0,1,0,1,1,0,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,1,1,0,1,1,1,1,0,0,1,0,0,1,1,0,1,1,1,0,0,1,0,1,0,1,0,1,0,0,1,0,1,1,1,0,0,1,1,0,0,1,0,1,1,0,1,0,0,1,1,0,1,0,0,1,0,1,1,1,0,1,1,0,1,0,1,1,0,0,0,1,0,1,1,1,0,0,0,1,0,0,0,0,1,1,0,0,1,0,0,1,0,1,1,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,1,1,1,0,0,0,0,1,1,0,1,1,1,0,0,1,0,0,1,1,0,1,0,0,0,0,1,1,1,1,0,0,0,0,0,0,1,1,1,0,0,1,1,1,1,0,1,0,1,1,0,0,0,0,0,1,1,0,1,0,0,1,0,0,0,0,0,1,0,0,1,1,1,0,1,0,0,1,0,0,1,0,1,1,1,1,1,1,0,1,1,0,0,1,1,0,1,1,0,0,0,1,1,1,0,1,1,1,1,1,1,0,1,0,0,0,1,1,0,0,1,1,0,0,0,1,1,1,0,0,0,0,0,1,1,0,1,1,0,1,0,1,0,0,1,1,0,1,0,0,1,0,1,1,0,1,0,1,0,0,1,0,0,0,1,0,0,1,0,1,0,1,1,0,0,0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,0,1,1,0,0,1,0,0,1,1,1,1,0,0,0,0,1,0,0,1,1,0,0,1,0,0,1,0,1,1,1,1,1,1,1,1,0,0,1,1,0,1,0,1,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0,1,0,0,0,0,0,1,1,1,1,1,0,0,0,1,1,0,1,1,0,1,0,1,0,0,1,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,1,0,0,0,0,0,1,1,1,1,1,0,1,0,0,0,0,0,1,1,1,1,0,1,1,0,1,1,0,0,0,0,1,1,0,1,1,0,0,0,1,1,1,1,0,0,1,0,1,1,0,0,0,0,1,1,1,0,1,1,0,1,1,0,1,1,1,1,0,1,0,0,0,0,1,1,0,1,1,0,0,1,0,1,1,0,0,0,0,0,0,1,0,1,1,0,0,1,1,0,1,0,0,0,0,1,0,0,1,1,1,1,1,1,0,0,1,0,1,0,1,1,0,0,0,1,0,0,0,0,1,1,0,0,1,0,1,1,1,0,0,0,1,0,0,0,1,0,0,0,1,1,1,1,1,1,0,1,1,0,1,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,1,1,0,0,0,0,1,0,1,1,1,0,0,0,1,1,0,1,1,1,1,1,1,1,0,0,0,0,1,0,1,1,1,0,1,0,1,1,0,1,1,1,0,0,0,0,1,0,1,0,1,1,1,0,1,1,0,1,0,0,0,1,1,0,1,0,1,1,1,0,0,1,0,1,1,0,1,0,1,1,0,1,1,1,1,0,0,0,0,0,1,1,1,0,1,0,0,0,1,1,0,1,1,1,1,1,1,0,0,1,1,0,1,0,0,1,0,0,1,1,0,1,0,1,0,0,1,1,0,0,0,1,1,0,1,1,1,0,1,0,1,0,0,0,0,1,0,1,0,1,0,1,0,1,0,1,1,1,0,0,1,0,0,0,0,1,1,1,0,0,1,0,0,0,1,1,0,0,0,0,0,1,0,1,1,1,1,0,0,0,1,0,1,0,0,1,0,1,0,1,1,1,0,1,1,0,1,0,1,1,1,1,1,1,1,1,1,0,1,1,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1,1,0,1,1,1,1,1,1,1,0,1,0,1,1,0,0,1,1,0,1,0,0,0,1,0,1,0,0,0,0,1,1,1,0,0,1,1,1,0,1,0,0,0,0,1,0,0,1,1,0,1,1,1,0,1,1,1,0,1,1,0,0,1,0,1,1,0,0,0,1,0,1,0,1,1,0,0,1,1,1,1,0,0,1,0,1,0,1,1,1,0,0,0,1,0,0,0,0,1,1,1,0,1,1,1,0,0,1,0,0,0,0,1,0,0,1,0,0,1,1,0,0,1,0,0,1,1,1,0,1,1,0,1,0,1,1,1,0,0,1,0,0,0,0,0,1,0,1,1,0,0,0,1,1,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,1,1,1,1,0,1,1,0,1,0,0,1,1,1,1,1,1,0,1,0,1,1,0,1,0,0,0,0,0,0,1,0,0,1,0,0,1,1,1,1,0,0,1,0,0,0,0,0,0,0,1,0,0,1,1,0,1,0,1,1,0,1,0,1,0,1,1,0,1,1,0,1,1,1,1,1,0,0,1,0,1,1,0,0,1,0,0,0,1,1,0,0,0,1,1,1,1,0,1,0,0,0,0,0,0,1,1,0,1,0,1,1,0,1,1,1,1,1,1,1,1,1,0,0,1,1,0,1,1,1,1,0,1,1,0,0,0,0,1,1,0,0,0,1,0,0,1,0,1,0,1,1,0,0,1,1,1,1,1,1,1,1,0,1,1,1,0,1,0,0,1,1,0,1,1,1,1,0,0,0,0,1,0,1,1,0,0,1,0,0,1,0,1,0,1,0,1,1,0,0,1,1,0,0,0,0,0,1,1,1,0,1,0,0,0,0,0,1,1,1,1,1,0,0,0,1,1,0,1,1,1,1,0,0,1,0,1,1,0,0,1,1,1,1,1,0,0,0,1,0,0,1,0,0,0,1,0,1,1,1,0,1,0,1,0,0,1,1,1,1,1,1,1,1,0,0,0,0,1,1,1,1,0,1,1,1,0,0,1,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,0,1,0,0,1,0,0,1,1,0,0,1,1,1,0,0,0,0,1,0,0,1,0,0,0,1,0,0,1,0,0,1,0,0,0,1,1,1,1,1,1,0,1,0,1,1,1,0,1,0,1,1,0,1,0,1,1,0,0,0,1,0,0,0,1,0,0,0,0,0,1,1,1,1,1,1,0,1,1,0,0,1,1,0,1,1,1,1,1,0,1,0,0,0,1,0,0,1,0,1,0,0,0,0,1,0,0,1,0,1,1,0,1,1,0,0,0,1,0,0,0,1,1,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,1,1,1,0,0,1,0,0,0,1,0,1,0,1,1,0,1,0,0,0,1,0,1,0,1,1,0,0,0,1,0,0,1,1,1,0,1,0,0,0,1,0,1,1,1,0,1,0,0,0,1,0,0,1,1,0,0,0,1,0,0,0,1,0,1,0,0,0,0,1,0,0,0,1,0,1,1,1,1,0,1,0,1,1,1,0,1,0,1,1,1,0,0,1,1,1,1,1,1,0,0,1,1,0,0,0,0,0,0,1,0,1,1,0,0,1,1,1,1,0,1,0,1,0,1,1,0,0,0,1,0,1,1,1,1,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,];
var gg_b = "1759888801/";

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
