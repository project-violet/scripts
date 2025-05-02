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
case 1861:
case 1725:
case 2799:
case 2900:
case 545:
case 3794:
case 1298:
case 3190:
case 1257:
case 3165:
case 457:
case 2210:
case 2513:
case 3709:
case 3859:
case 2702:
case 1127:
case 4061:
case 3872:
case 2879:
case 220:
case 3656:
case 3911:
case 2783:
case 4015:
case 1323:
case 2100:
case 363:
case 2787:
case 152:
case 1327:
case 3841:
case 1060:
case 2300:
case 3470:
case 728:
case 2029:
case 1417:
case 1439:
case 284:
case 408:
case 3022:
case 14:
case 1253:
case 1747:
case 510:
case 1550:
case 829:
case 3534:
case 3486:
case 3311:
case 2517:
case 2539:
case 1622:
case 25:
case 103:
case 3888:
case 1945:
case 188:
case 3390:
case 3202:
case 1708:
case 2735:
case 287:
case 4064:
case 2209:
case 2851:
case 3871:
case 370:
case 505:
case 3914:
case 3283:
case 3580:
case 2937:
case 1456:
case 1175:
case 3613:
case 2066:
case 465:
case 1897:
case 3112:
case 279:
case 2119:
case 3576:
case 4058:
case 2294:
case 2556:
case 1013:
case 3820:
case 3299:
case 3791:
case 624:
case 556:
case 3710:
case 1906:
case 253:
case 1773:
case 3505:
case 2319:
case 2337:
case 2628:
case 988:
case 454:
case 1495:
case 10:
case 3424:
case 3070:
case 680:
case 1686:
case 675:
case 2933:
case 2263:
case 3836:
case 3617:
case 94:
case 3639:
case 1529:
case 1893:
case 2634:
case 3842:
case 202:
case 48:
case 3438:
case 3780:
case 149:
case 1002:
case 1004:
case 3457:
case 994:
case 1508:
case 3896:
case 1083:
case 2189:
case 412:
case 3182:
case 350:
case 1833:
case 2694:
case 756:
case 2477:
case 914:
case 2667:
case 137:
case 1401:
case 1435:
case 2025:
case 2408:
case 2358:
case 2989:
case 3510:
case 3982:
case 3213:
case 3984:
case 576:
case 1577:
case 3776:
case 2609:
case 909:
case 3604:
case 259:
case 3602:
case 4033:
case 2397:
case 3591:
case 1149:
case 82:
case 2047:
case 3178:
case 4037:
case 655:
case 3907:
case 934:
case 3016:
case 1349:
case 1270:
case 2964:
case 2962:
case 3855:
case 3239:
case 3969:
case 3303:
case 1616:
case 972:
case 441:
case 2997:
case 2164:
case 1819:
case 2473:
case 3382:
case 432:
case 981:
case 2795:
case 3978:
case 2958:
case 606:
case 1951:
case 109:
case 1404:
case 1402:
case 4085:
case 1483:
case 3601:
case 3635:
case 2276:
case 896:
case 823:
case 3592:
case 2077:
case 3926:
case 2599:
case 2823:
case 2008:
case 194:
case 1001:
case 1035:
case 336:
case 730:
case 3126:
case 1885:
case 218:
case 369:
case 3181:
case 667:
case 710:
case 2447:
case 997:
case 836:
case 3818:
case 1168:
case 3260:
case 172:
case 3381:
case 2587:
case 4000:
case 1979:
case 3416:
case 3563:
case 3728:
case 721:
case 1179:
case 2915:
case 2073:
case 2827:
case 768:
case 1154:
case 1750:
case 790:
case 561:
case 396:
case 1547:
case 27:
case 2717:
case 2739:
case 134:
case 528:
case 3732:
case 646:
case 1238:
case 1968:
case 3734:
case 562:
case 2642:
case 2644:
case 3003:
case 669:
case 3846:
case 999:
case 722:
case 2089:
case 1700:
case 3448:
case 1850:
case 3084:
case 2636:
case 2817:
case 144:
case 2925:
case 636:
case 3834:
case 1183:
case 453:
case 715:
case 1684:
case 254:
case 846:
case 2125:
case 3718:
case 1212:
case 3481:
case 4050:
case 2143:
case 919:
case 1904:
case 2058:
case 623:
case 2461:
case 1051:
case 740:
case 2147:
case 1785:
case 3078:
case 1399:
case 2554:
case 3559:
case 2620:
case 3572:
case 3574:
case 2062:
case 1304:
case 1454:
case 1452:
case 1515:
case 2813:
case 1479:
case 2745:
case 3916:
case 3430:
case 1187:
case 1383:
case 616:
case 2568:
case 3007:
case 1561:
case 3651:
case 265:
case 3206:
case 2947:
case 1678:
case 2549:
case 3198:
case 431:
case 982:
case 1681:
case 119:
case 1737:
case 3484:
case 971:
case 3536:
case 2177:
case 1626:
case 3048:
case 2908:
case 1829:
case 3157:
case 1935:
case 1901:
case 2641:
case 2977:
case 1648:
case 1589:
case 2108:
case 806:
case 1135:
case 1449:
case 958:
case 208:
case 4029:
case 1335:
case 1301:
case 1451:
case 2458:
case 2308:
case 1068:
case 420:
case 3478:
case 586:
case 306:
case 700:
case 3245:
case 2015:
case 3876:
case 3654:
case 3652:
case 1564:
case 3223:
case 491:
case 2497:
case 2672:
case 3953:
case 3679:
case 2173:
case 1052:
case 1054:
case 3030:
case 411:
case 62:
case 1597:
case 1079:
case 257:
case 907:
case 2551:
case 3357:
case 3668:
case 3796:
case 2377:
case 951:
case 201:
case 93:
case 875:
case 1793:
case 3140:
case 4073:
case 1248:
case 133:
case 3090:
case 1226:
case 1956:
case 2575:
case 1665:
case 2437:
case 1690:
case 2419:
case 1873:
case 3412:
case 978:
case 3322:
case 438:
case 3324:
case 2329:
case 670:
case 289:
case 1764:
case 3938:
case 2129:
case 3124:
case 99:
case 2433:
case 1877:
case 1023:
case 1160:
case 1195:
case 2929:
case 2751:
case 2259:
case 498:
case 3771:
case 500:
case 1960:
case 2085:
case 3623:
case 1995:
case 3138:
case 1406:
case 3645:
case 824:
case 1797:
case 4077:
case 460:
case 1203:
case 515:
case 1847:
case 1500:
case 3386:
case 1284:
case 3788:
case 1282:
case 2166:
case 1075:
case 3321:
case 2527:
case 1614:
case 178:
case 3675:
case 933:
case 762:
case 3014:
case 3012:
case 2037:
case 2019:
case 3249:
case 629:
case 3741:
case 595:
case 151:
case 2244:
case 2350:
case 473:
case 3518:
case 3370:
case 13:
case 274:
case 1339:
case 1317:
case 327:
case 3759:
case 3251:
case 4025:
case 2754:
case 2752:
case 3921:
case 1278:
case 3774:
case 292:
case 3772:
case 2271:
case 913:
case 1313:
case 1445:
case 2779:
case 1117:
case 11:
case 2883:
case 3986:
case 2033:
case 1939:
case 1269:
case 19:
case 1825:
case 2696:
case 2768:
case 2485:
case 535:
case 2220:
case 540:
case 1207:
case 1843:
case 1715:
case 663:
case 3121:
case 2545:
case 1658:
case 2651:
case 1367:
case 945:
case 2206:
case 749:
case 3064:
case 1459:
case 1163:
case 3745:
case 3813:
case 1472:
case 485:
case 1662:
case 3296:
case 3552:
case 1233:
case 1963:
case 2116:
case 3097:
case 2574:
case 3325:
case 3058:
case 737:
case 1392:
case 105:
case 1071:
case 2078:
case 1042:
case 698:
case 1488:
case 2316:
case 543:
case 2828:
case 1765:
case 968:
case 1548:
case 1036:
case 1194:
case 2541:
case 1192:
case 1237:
case 1711:
case 3093:
case 1886:
case 660:
case 2718:
case 3125:
case 1526:
case 1994:
case 3636:
case 2084:
case 1441:
case 865:
case 50:
case 38:
case 797:
case 4021:
case 3255:
case 3839:
case 3817:
case 2834:
case 3925:
case 1693:
case 3644:
case 1581:
case 618:
case 2649:
case 2003:
case 2846:
case 1109:
case 3943:
case 4086:
case 46:
case 1661:
case 2357:
case 357:
case 2796:
case 1310:
case 905:
case 255:
case 3377:
case 2571:
case 1615:
case 3173:
case 429:
case 1059:
case 709:
case 673:
case 1391:
case 2153:
case 883:
case 1569:
case 2652:
case 2654:
case 3672:
case 3497:
case 2679:
case 2520:
case 3706:
case 3856:
case 794:
case 3061:
case 1507:
case 3458:
case 1840:
case 2478:
case 145:
case 206:
case 503:
case 1503:
case 1200:
case 2081:
case 588:
case 4022:
case 5:
case 2755:
case 2831:
case 1436:
case 110:
case 3641:
case 781:
case 1584:
case 1910:
case 463:
case 2026:
case 3493:
case 3108:
case 2227:
case 264:
case 190:
case 2484:
case 2048:
case 1110:
case 3489:
case 3908:
case 1822:
case 1824:
case 2157:
case 4038:
case 734:
case 2198:
case 659:
case 2353:
case 3549:
case 3688:
case 552:
case 2542:
case 2544:
case 1714:
case 4057:
case 2138:
case 653:
case 1131:
case 2645:
case 2254:
case 3835:
case 2924:
case 3751:
case 594:
case 280:
case 2771:
case 2279:
case 3085:
case 3274:
case 1778:
case 1707:
case 2124:
case 514:
case 469:
case 1215:
case 976:
case 3433:
case 1685:
case 2938:
case 2268:
case 1769:
case 602:
case 1905:
case 1261:
case 1898:
case 2720:
case 3506:
case 436:
case 1784:
case 3288:
case 1782:
case 2324:
case 2322:
case 3618:
case 128:
case 889:
case 3575:
case 1853:
case 3419:
case 1976:
case 3437:
case 2555:
case 1180:
case 2414:
case 2412:
case 2744:
case 3749:
case 679:
case 3241:
case 1305:
case 224:
case 1455:
case 1980:
case 2627:
case 1512:
case 1514:
case 4053:
case 301:
case 877:
case 2736:
case 2140:
case 1946:
case 2121:
case 312:
case 3366:
case 1264:
case 1934:
case 3696:
case 2970:
case 3899:
case 3523:
case 3220:
case 2894:
case 2867:
case 2986:
case 631:
case 1096:
case 2170:
case 1132:
case 1297:
case 3033:
case 874:
case 2809:
case 1146:
case 2759:
case 1928:
case 227:
case 549:
case 2772:
case 392:
case 1730:
case 3779:
case 3271:
case 2741:
case 2249:
case 3400:
case 3242:
case 1748:
case 1334:
case 2370:
case 611:
case 597:
case 2863:
case 3966:
case 3887:
case 1293:
case 2012:
case 3019:
case 3655:
case 1590:
case 825:
case 3166:
case 1289:
case 332:
case 620:
case 2321:
case 2465:
case 1055:
case 928:
case 1418:
case 517:
case 1716:
case 2888:
case 733:
case 342:
case 2038:
case 2365:
case 1005:
case 331:
case 3185:
case 2695:
case 1826:
case 1318:
case 2486:
case 2534:
case 35:
case 3539:
case 3517:
case 811:
case 3985:
case 1848:
case 3300:
case 1586:
case 1432:
case 2024:
case 891:
case 4026:
case 263:
case 1521:
case 519:
case 464:
case 3631:
case 3605:
case 2528:
case 820:
case 2767:
case 1918:
case 3783:
case 884:
case 632:
case 2235:
case 2965:
case 2709:
case 3676:
case 3852:
case 406:
case 2874:
case 726:
case 1076:
case 3680:
case 2165:
case 455:
case 1277:
case 3513:
case 831:
case 2111:
case 547:
case 3900:
case 674:
case 3385:
case 2794:
case 85:
case 4084:
case 302:
case 582:
case 4082:
case 2844:
case 2842:
case 689:
case 3849:
case 1355:
case 1405:
case 778:
case 4003:
case 2287:
case 3595:
case 1650:
case 3560:
case 2836:
case 3263:
case 3933:
case 2617:
case 1996:
case 2086:
case 3050:
case 3133:
case 1884:
case 544:
case 1196:
case 3429:
case 879:
case 1247:
case 3628:
case 2505:
case 3319:
case 1538:
case 558:
case 2314:
case 1540:
case 1396:
case 601:
case 1243:
case 1757:
case 1807:
case 986:
case 379:
case 1225:
case 2576:
case 3119:
case 3137:
case 1480:
case 3556:
case 3292:
case 4078:
case 1666:
case 446:
case 2791:
case 2299:
case 2283:
case 2912:
case 802:
case 1476:
case 2580:
case 1155:
case 3066:
case 2613:
case 2440:
case 3851:
case 3735:
case 507:
case 387:
case 79:
case 285:
case 270:
case 2871:
case 1878:
case 195:
case 2382:
case 551:
case 1647:
case 3389:
case 3760:
case 2978:
case 3958:
case 53:
case 1722:
case 1120:
case 3997:
case 758:
case 1812:
case 3162:
case 3164:
case 2169:
case 373:
case 3875:
case 1553:
case 2016:
case 859:
case 1342:
case 3197:
case 1250:
case 1344:
case 782:
case 3962:
case 3964:
case 1738:
case 2731:
case 2705:
case 2217:
case 2969:
case 3047:
case 771:
case 1171:
case 1336:
case 2178:
case 4012:
case 3043:
case 873:
case 359:
case 2604:
case 2591:
case 3397:
case 3756:
case 2903:
case 3806:
case 707:
case 59:
case 3667:
case 3025:
case 3989:
case 2378:
case 140:
case 1136:
case 1371:
case 135:
case 2982:
case 2307:
case 3501:
case 2457:
case 3189:
case 3477:
case 900:
case 3694:
case 1936:
case 1266:
case 3692:
case 2780:
case 1009:
case 1944:
case 1942:
case 1491:
case 608:
case 2103:
case 2348:
case 704:
case 3739:
case 3961:
case 1770:
case 2734:
case 1463:
case 2053:
case 1516:
case 3073:
case 719:
case 3827:
case 2381:
case 2930:
case 2260:
case 1974:
case 533:
case 2563:
case 1388:
case 2728:
case 1959:
case 1865:
case 1890:
case 338:
case 1229:
case 1721:
case 2326:
case 216:
case 1786:
case 3504:
case 318:
case 2509:
case 3315:
case 3443:
case 1188:
case 838:
case 2181:
case 3008:
case 3361:
case 3280:
case 100:
case 1677:
case 1492:
case 2948:
case 2126:
case 3610:
case 2601:
case 2057:
case 360:
case 935:
case 2256:
case 1010:
case 654:
case 3823:
case 739:
case 1359:
case 1988:
case 526:
case 1374:
case 475:
case 2981:
case 480:
case 3226:
case 3027:
case 3690:
case 826:
case 3873:
case 3665:
case 2180:
case 2782:
case 261:
case 3789:
case 1940:
case 1322:
case 1324:
case 1736:
case 3793:
case 3475:
case 333:
case 3248:
case 2305:
case 2331:
case 3537:
case 1596:
case 1340:
case 1254:
case 3230:
case 2778:
case 3960:
case 60:
case 3533:
case 180:
case 175:
case 711:
case 927:
case 4010:
case 2380:
case 2931:
case 2261:
case 1938:
case 1268:
case 3764:
case 598:
case 1891:
case 400:
case 2898:
case 1720:
case 720:
case 1124:
case 2496:
case 3195:
case 3023:
case 3160:
case 791:
case 753:
case 1863:
case 3113:
case 2565:
case 2346:
case 2590:
case 1012:
case 1741:
case 351:
case 1249:
case 81:
case 2511:
case 2332:
case 1518:
case 3500:
case 2726:
case 3847:
case 3203:
case 89:
case 1411:
case 2418:
case 702:
case 573:
case 3284:
case 1788:
case 3913:
case 2816:
case 3282:
case 1465:
case 2328:
case 1490:
case 2619:
case 2637:
case 2055:
case 378:
case 3612:
case 2932:
case 4009:
case 787:
case 3917:
case 3939:
case 3269:
case 4067:
case 3843:
case 3715:
case 3207:
case 2128:
case 652:
case 3006:
case 878:
case 2258:
case 779:
case 1251:
case 2146:
case 127:
case 2928:
case 688:
case 3445:
case 3313:
case 4092:
case 1774:
case 2730:
case 1772:
case 435:
case 1986:
case 2132:
case 1867:
case 3139:
case 3117:
case 975:
case 3585:
case 2297:
case 2036:
case 462:
case 1541:
case 2689:
case 2548:
case 1426:
case 3983:
case 1718:
case 3212:
case 4046:
case 2237:
case 2967:
case 773:
case 502:
case 1481:
case 2042:
case 3902:
case 4032:
case 4034:
case 2765:
case 1828:
case 1588:
case 553:
case 2363:
case 3387:
case 2581:
case 3104:
case 1846:
case 2109:
case 1275:
case 1084:
case 1082:
case 694:
case 2526:
case 3183:
case 1834:
case 2870:
case 964:
case 672:
case 2309:
case 579:
case 3304:
case 3187:
case 858:
case 2697:
case 2020:
case 2163:
case 1916:
case 167:
case 1651:
case 2658:
case 3383:
case 681:
case 256:
case 906:
case 871:
case 3607:
case 587:
case 1078:
case 3399:
case 2394:
case 955:
case 2392:
case 2664:
case 2662:
case 882:
case 2530:
case 1574:
case 2233:
case 2963:
case 3648:
case 1026:
case 847:
case 2584:
case 2582:
case 164:
case 3101:
case 2200:
case 1081:
case 1998:
case 1831:
case 1805:
case 399:
case 3681:
case 2191:
case 1544:
case 1542:
case 839:
case 1198:
case 1403:
case 3211:
case 3719:
case 3737:
case 268:
case 319:
case 2712:
case 2714:
case 2110:
case 3626:
case 1536:
case 290:
case 1484:
case 77:
case 2822:
case 304:
case 866:
case 1157:
case 3290:
case 3593:
case 3829:
case 3052:
case 3054:
case 2059:
case 2615:
case 1880:
case 1153:
case 2285:
case 819:
case 2391:
case 2074:
case 1030:
case 1357:
case 2661:
case 760:
case 155:
case 591:
case 3733:
case 946:
case 2578:
case 617:
case 2840:
case 3301:
case 2507:
case 347:
case 230:
case 106:
case 697:
case 1478:
case 718:
case 1654:
case 3562:
case 1652:
case 2569:
case 1679:
case 3630:
case 337:
case 3435:
case 3401:
case 3351:
case 2557:
case 3577:
case 2136:
case 817:
case 240:
case 1982:
case 2094:
case 2092:
case 1213:
case 1776:
case 512:
case 2142:
case 2144:
case 3002:
case 3004:
case 349:
case 2643:
case 525:
case 699:
case 3949:
case 592:
case 476:
case 2942:
case 2625:
case 1896:
case 3083:
case 3508:
case 2067:
case 1307:
case 765:
case 2266:
case 2936:
case 1182:
case 3087:
case 2063:
case 1303:
case 3819:
case 3837:
case 3286:
case 2812:
case 647:
case 1382:
case 2647:
case 2971:
case 2724:
case 78:
case 3221:
case 4055:
case 1178:
case 541:
case 923:
case 996:
case 3151:
case 317:
case 1907:
case 532:
case 2920:
case 2553:
case 1016:
case 639:
case 12:
case 3573:
case 1217:
case 1239:
case 2738:
case 3270:
case 3035:
case 577:
case 3001:
case 3368:
case 644:
case 3499:
case 136:
case 200:
case 2492:
case 2677:
case 169:
case 2188:
case 3698:
case 2409:
case 3543:
case 2359:
case 3404:
case 3402:
case 3354:
case 1981:
case 2091:
case 2988:
case 757:
case 2467:
case 314:
case 1057:
case 1601:
case 3483:
case 2608:
case 2010:
case 1926:
case 1594:
case 1592:
case 1256:
case 834:
case 2463:
case 3179:
case 3487:
case 2174:
case 2172:
case 3152:
case 92:
case 1746:
case 2341:
case 196:
case 3800:
case 1348:
case 3750:
case 2770:
case 1734:
case 3168:
case 1818:
case 2786:
case 2811:
case 1563:
case 3653:
case 783:
case 3979:
case 1416:
case 2388:
case 372:
case 2229:
case 708:
case 3954:
case 3952:
case 2865:
case 3222:
case 2959:
case 2890:
case 852:
case 1235:
case 1965:
case 1990:
case 1656:
case 3566:
case 678:
case 430:
case 445:
case 2830:
case 1872:
case 3640:
case 985:
case 970:
case 84:
case 3323:
case 3725:
case 1040:
case 1111:
case 777:
case 3861:
case 1792:
case 4074:
case 1794:
case 3927:
case 2076:
case 3257:
case 3815:
case 2277:
case 888:
case 8:
case 3550:
case 1660:
case 421:
case 61:
case 3923:
case 1695:
case 2273:
case 3624:
case 3622:
case 468:
case 2570:
case 1534:
case 1532:
case 2629:
case 4041:
case 490:
case 2716:
case 583:
case 303:
case 1390:
case 2428:
case 1038:
case 388:
case 352:
case 1763:
case 2446:
case 1528:
case 3638:
case 2848:
case 3095:
case 3060:
case 4088:
case 3123:
case 1841:
case 1022:
case 34:
case 1024:
case 3417:
case 2586:
case 2432:
case 1576:
case 1114:
case 3862:
case 1791:
case 1299:
case 405:
case 3975:
case 1820:
case 2666:
case 3013:
case 725:
case 2243:
case 2757:
case 2807:
case 2396:
case 565:
case 3777:
case 1202:
case 3708:
case 1440:
case 3858:
case 2878:
case 4020:
case 185:
case 170:
case 843:
case 2155:
case 1580:
case 3897:
case 1613:
case 3306:
case 3456:
case 1836:
case 741:
case 1287:
case 2650:
case 3893:
case 3529:
case 2522:
case 1617:
case 554:
case 3106:
case 3375:
case 732:
case 1842:
case 1021:
case 1438:
case 626:
case 693:
case 548:
case 2355:
case 2028:
case 2753:
case 2247:
case 262:
case 4036:
case 3621:
case 1531:
case 1505:
case 4042:
case 4044:
case 2882:
case 2196:
case 1070:
case 2034:
case 2032:
case 58:
case 774:
case 451:
case 3342:
case 1197:
case 3344:
case 1663:
case 3553:
case 1875:
case 2573:
case 1232:
case 1234:
case 1964:
case 3738:
case 2270:
case 3336:
case 315:
case 840:
case 97:
case 835:
case 1393:
case 1760:
case 3971:
case 395:
case 297:
case 3722:
case 2951:
case 1958:
case 645:
case 630:
case 2221:
case 1997:
case 2616:
case 2819:
case 1162:
case 3812:
case 610:
case 2083:
case 3625:
case 1993:
case 767:
case 3067:
case 1501:
case 1535:
case 3936:
case 1477:
case 2833:
case 3410:
case 4006:
case 49:
case 249:
case 1364:
case 2004:
case 1362:
case 3009:
case 3320:
case 2949:
case 3491:
case 998:
case 621:
case 41:
case 1609:
case 668:
case 1806:
case 1397:
case 3144:
case 690:
case 3740:
case 1667:
case 2351:
case 237:
case 335:
case 340:
case 3371:
case 2577:
case 2099:
case 1989:
case 2979:
case 3972:
case 1587:
case 138:
case 2952:
case 3673:
case 3890:
case 2224:
case 2222:
case 3865:
case 3786:
case 656:
case 2168:
case 764:
case 1161:
case 800:
case 433:
case 3770:
case 1717:
case 2179:
case 3516:
case 3463:
case 2487:
case 1827:
case 2154:
case 3159:
case 1073:
case 214:
case 1276:
case 2483:
case 413:
case 3141:
case 1077:
case 2543:
case 3409:
case 2240:
case 2352:
case 3374:
case 3372:
case 1845:
case 3988:
case 1504:
case 2698:
case 3188:
case 1280:
case 1425:
case 1008:
case 2499:
case 493:
case 426:
case 3941:
case 3492:
case 300:
case 2123:
case 1300:
case 2060:
case 1450:
case 1985:
case 2095:
case 3848:
case 184:
case 499:
case 3432:
case 3586:
case 252:
case 2145:
case 3446:
case 1631:
case 2638:
case 2327:
case 3521:
case 3881:
case 142:
case 3005:
case 3428:
case 2:
case 131:
case 2253:
case 1539:
case 2624:
case 15:
case 3570:
case 3318:
case 2815:
case 1680:
case 3277:
case 1466:
case 466:
case 1210:
case 3118:
case 2725:
case 4052:
case 2861:
case 4054:
case 439:
case 386:
case 780:
case 775:
case 111:
case 1385:
case 4079:
case 1799:
case 1783:
case 2640:
case 987:
case 555:
case 191:
case 1702:
case 3208:
case 1704:
case 447:
case 4068:
case 3080:
case 1676:
case 2413:
case 120:
case 931:
case 482:
case 3882:
case 1133:
case 2889:
case 2495:
case 3032:
case 2686:
case 3034:
case 3196:
case 95:
case 153:
case 2906:
case 471:
case 942:
case 2621:
case 3538:
case 2773:
case 1337:
case 2375:
case 2106:
case 243:
case 3405:
case 1263:
case 1933:
case 3650:
case 1560:
case 1595:
case 2670:
case 1634:
case 984:
case 3524:
case 458:
case 3476:
case 1267:
case 1937:
case 1066:
case 2175:
case 1701:
case 3878:
case 628:
case 3243:
case 567:
case 3540:
case 3396:
case 1333:
case 2777:
case 3869:
case 3955:
case 4051:
case 2862:
case 407:
case 862:
case 1292:
case 1556:
case 3666:
case 3798:
case 3707:
case 3496:
case 3685:
case 2160:
case 2023:
case 2195:
case 3905:
case 4035:
case 494:
case 912:
case 226:
case 3898:
case 662:
case 569:
case 992:
case 2406:
case 2356:
case 1751:
case 1835:
case 2808:
case 2758:
case 1274:
case 3778:
case 2960:
case 1272:
case 2995:
case 1085:
case 2533:
case 1241:
case 2156:
case 2475:
case 3512:
case 3455:
case 2537:
case 3305:
case 516:
case 101:
case 2793:
case 974:
case 3784:
case 941:
case 472:
case 3782:
case 2281:
case 2395:
case 2789:
case 1000:
case 2360:
case 328:
case 1618:
case 2611:
case 763:
case 3853:
case 2027:
case 1437:
case 3976:
case 1419:
case 2690:
case 3132:
case 1883:
case 2117:
case 2139:
case 21:
case 1033:
case 550:
case 2423:
case 3297:
case 437:
case 1754:
case 3258:
case 1804:
case 3928:
case 3146:
case 192:
case 3730:
case 989:
case 3128:
case 2207:
case 4083:
case 2715:
case 2006:
case 1366:
case 1545:
case 3934:
case 1696:
case 3262:
case 4002:
case 2269:
case 2917:
case 449:
case 785:
case 3633:
case 376:
case 1220:
case 770:
case 1523:
case 1899:
case 1950:
case 3289:
case 3781:
case 3816:
case 2913:
case 2284:
case 2075:
case 3619:
case 52:
case 278:
case 3726:
case 2500:
case 2203:
case 141:
case 876:
case 1244:
case 1350:
case 251:
case 901:
case 23:
case 2339:
case 2317:
case 174:
case 1655:
case 417:
case 2669:
case 3662:
case 1552:
case 1296:
case 3664:
case 1097:
case 1579:
case 3963:
case 2607:
case 1058:
case 1325:
case 2785:
case 4013:
case 3071:
case 305:
case 585:
case 2383:
case 2678:
case 750:
case 1671:
case 2515:
case 3309:
case 3459:
case 2304:
case 2302:
case 2454:
case 3472:
case 2187:
case 1745:
case 3994:
case 3992:
case 2700:
case 3693:
case 1925:
case 2183:
case 1255:
case 3167:
case 18:
case 1642:
case 908:
case 2102:
case 2104:
case 2603:
case 3488:
case 3042:
case 282:
case 40:
case 148:
case 4039:
case 4017:
case 72:
case 3909:
case 1143:
case 3790:
case 2214:
case 154:
case 805:
case 56:
case 3711:
case 3237:
case 3967:
case 769:
case 2562:
case 1659:
case 1973:
case 2630:
case 2068:
case 1308:
case 622:
case 3507:
case 3471:
case 736:
case 330:
case 965:
case 2558:
case 3661:
case 1464:
case 239:
case 2054:
case 1173:
case 3615:
case 3074:
case 3391:
case 3285:
case 1860:
case 1489:
case 3110:
case 403:
case 1177:
case 796:
case 723:
case 204:
case 954:
case 488:
case 3822:
case 1908:
case 640:
case 635:
case 3191:
case 2681:
case 1688:
case 321:
case 2719:
case 219:
case 368:
case 3444:
case 3991:
case 3200:
case 4095:
case 3503:
case 183:
case 3088:
case 108:
case 299:
case 3838:
case 2589:
case 2648:
case 3910:
case 452:
case 3582:
case 1977:
case 845:
case 2135:
case 830:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1746219602/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,0,1,1,0,1,1,0,1,0,0,0,0,0,0,1,1,0,0,1,0,1,0,1,0,1,0,1,1,1,1,1,1,0,0,1,1,0,1,0,0,1,1,1,1,0,1,0,0,0,1,0,0,1,1,0,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,0,0,1,0,0,1,0,0,1,1,1,0,1,1,0,0,0,0,1,0,1,0,0,0,1,0,1,0,0,1,0,0,0,0,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,0,0,1,1,0,1,0,0,0,0,0,0,1,0,0,0,1,0,0,1,1,0,0,1,0,0,0,0,0,1,1,1,1,1,1,1,1,0,1,1,0,1,0,0,1,0,1,0,0,1,1,0,1,0,1,1,0,0,0,1,1,0,1,0,0,0,1,0,0,0,1,1,1,0,0,0,1,0,1,0,1,0,1,1,1,1,1,0,1,0,1,0,0,0,1,1,1,0,1,0,0,1,1,0,1,1,1,1,1,1,0,1,0,0,1,1,0,1,1,1,1,1,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,1,0,1,0,1,1,1,0,1,1,1,0,0,0,1,0,1,0,0,1,0,1,0,0,1,0,1,1,1,1,0,1,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,0,1,0,0,0,1,0,1,1,1,1,1,0,0,1,0,0,0,0,1,0,0,0,0,1,0,1,0,1,1,1,1,0,1,0,0,0,0,1,1,1,1,0,1,0,0,1,1,0,1,1,1,1,0,0,0,1,0,0,1,1,0,1,0,0,1,1,1,1,1,1,0,0,0,1,1,1,0,1,1,0,0,1,1,0,0,1,1,0,1,0,0,0,0,1,1,0,0,0,1,1,1,0,1,1,0,0,1,1,1,1,0,1,1,0,0,0,0,0,1,0,0,0,0,0,1,0,1,1,1,0,0,0,1,0,1,0,0,0,0,0,1,0,0,1,0,1,0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,1,1,1,0,1,0,1,1,0,1,1,0,1,0,0,1,0,0,1,1,1,0,0,0,1,0,0,1,0,1,0,1,1,0,1,0,1,0,0,0,0,1,0,1,1,1,1,1,0,0,1,0,1,1,1,0,0,1,0,1,1,1,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,1,1,0,1,0,1,0,1,1,1,0,1,1,0,0,1,0,1,1,0,0,1,0,0,0,0,1,1,0,0,1,0,0,1,0,0,1,1,0,0,1,1,1,0,1,0,1,0,0,1,1,1,1,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,1,0,0,1,1,0,0,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,0,1,1,0,0,1,0,0,1,1,1,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,1,1,1,1,1,1,0,0,0,1,1,0,0,1,1,0,0,0,0,1,0,1,0,1,1,0,0,0,0,0,1,1,1,0,1,1,0,0,0,0,0,0,1,0,0,1,0,1,0,1,0,0,0,1,0,0,1,0,0,0,1,1,1,1,1,1,1,0,0,1,1,0,1,1,0,0,0,1,0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,1,1,0,0,1,1,0,1,0,0,1,1,0,1,0,1,1,0,0,1,1,1,1,0,1,1,1,1,1,0,1,0,0,1,1,0,0,0,0,1,1,0,0,0,1,1,0,0,0,1,0,0,0,1,1,0,1,0,0,0,1,1,1,1,0,1,1,1,1,1,0,0,1,1,0,1,1,0,0,1,1,1,1,0,1,0,0,0,0,0,0,0,1,1,0,0,0,1,1,1,0,0,1,0,1,1,1,1,0,1,1,1,0,0,1,1,1,0,0,0,0,0,1,1,0,0,0,1,1,1,1,0,1,1,1,0,1,1,1,0,0,1,1,0,1,0,0,0,1,1,1,1,1,0,0,1,1,0,0,1,1,1,1,0,1,1,0,0,1,1,0,1,1,1,1,1,0,0,1,1,0,1,0,0,0,1,0,0,0,1,0,1,1,0,0,1,0,0,0,0,0,0,1,1,0,1,0,1,0,0,0,0,0,0,0,1,0,0,1,1,0,0,0,1,0,0,1,1,0,1,1,1,1,0,0,0,0,1,0,1,1,1,0,1,1,0,1,0,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,0,0,1,0,0,1,0,0,0,0,1,1,1,1,1,0,1,0,1,0,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,0,1,1,0,1,1,0,1,1,1,0,1,1,0,1,1,1,0,0,0,1,0,0,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,0,0,0,1,0,1,1,0,0,0,0,1,1,1,1,0,1,1,0,1,0,1,0,1,0,0,0,0,1,0,0,1,1,1,0,0,1,1,1,0,1,0,0,0,0,0,1,0,1,0,0,1,1,1,0,1,1,0,1,0,0,1,0,1,0,1,1,0,1,1,1,1,0,0,1,1,0,1,1,0,0,0,0,1,0,0,0,1,0,1,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0,1,1,1,0,1,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,1,0,1,1,0,1,0,1,1,0,0,1,1,0,0,0,0,0,0,1,0,0,0,1,0,0,1,0,1,1,0,1,1,1,0,0,1,1,1,0,0,0,0,1,0,1,1,1,1,1,0,0,0,0,0,1,0,0,1,0,1,0,1,1,1,0,0,0,1,1,1,1,0,1,0,1,0,1,1,0,1,0,1,0,0,1,1,1,0,1,1,0,1,1,1,1,1,1,1,0,0,1,0,1,1,0,1,0,0,0,0,1,1,0,0,1,0,1,0,0,0,0,0,0,1,1,1,1,0,1,1,1,1,0,0,0,0,1,1,1,1,1,0,0,1,1,1,1,1,0,1,1,0,0,0,0,0,0,0,1,1,1,0,1,1,1,0,0,0,0,1,0,0,0,1,1,0,1,1,1,0,0,0,0,1,1,1,1,1,0,1,1,1,0,0,0,0,0,0,1,0,0,1,1,1,0,0,0,0,0,1,1,0,1,1,1,1,0,0,1,0,0,0,1,0,0,1,1,1,0,1,0,0,0,1,0,1,1,0,1,0,1,1,0,1,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,1,0,1,0,0,1,1,0,1,1,1,0,0,1,0,0,1,1,1,1,0,1,1,1,1,0,1,0,0,1,0,0,0,1,1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,1,1,1,0,1,1,1,1,1,1,1,0,1,1,1,0,0,0,0,0,0,1,1,1,0,1,1,1,0,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,0,1,1,1,1,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1,1,1,0,1,1,1,1,0,0,0,0,0,0,1,1,0,0,0,1,0,1,0,1,1,0,1,0,0,1,1,1,0,0,0,1,0,1,1,0,0,1,1,0,1,1,0,0,0,0,0,1,0,0,0,1,1,0,1,1,1,1,0,1,1,1,0,1,0,0,0,1,1,0,1,1,1,0,0,0,0,1,0,0,1,1,0,1,1,0,1,1,0,1,1,0,0,0,1,1,1,0,0,1,0,0,0,1,0,1,0,1,1,1,0,0,0,0,0,1,0,1,1,0,0,0,0,1,1,0,1,0,1,1,1,1,0,0,0,0,1,1,1,1,0,1,1,1,1,1,0,0,0,1,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,1,1,1,0,0,0,0,1,0,0,0,0,1,0,1,1,0,1,1,1,1,1,1,0,0,1,0,1,0,1,0,1,1,1,1,0,0,1,0,1,0,0,1,0,1,1,0,0,0,0,1,1,1,0,0,1,0,1,1,0,0,0,0,1,0,1,1,0,0,0,0,0,1,0,1,1,1,1,1,0,1,0,1,1,1,1,1,1,0,0,1,0,1,1,1,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,1,1,0,0,1,1,1,1,0,1,0,0,0,1,1,0,0,0,1,1,0,1,1,1,1,0,0,1,0,0,1,0,0,0,0,1,1,0,0,1,0,0,0,1,1,0,0,0,0,0,0,1,1,1,1,0,0,1,0,1,0,1,0,1,0,1,1,0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,1,0,0,0,1,1,1,0,1,1,1,1,0,0,1,1,1,1,0,0,0,1,0,0,0,0,1,0,0,1,1,0,0,0,1,1,1,1,0,0,0,0,0,0,1,1,0,1,0,0,0,0,1,1,0,1,0,0,1,0,0,1,1,1,0,0,1,0,0,0,1,0,1,0,0,0,0,1,1,1,1,0,0,1,0,1,0,1,0,0,0,0,1,0,0,1,1,0,1,1,0,0,1,0,0,0,1,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,0,1,1,0,0,0,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,1,1,1,0,0,0,1,0,1,1,1,0,0,1,0,1,0,1,1,0,1,1,0,0,1,0,0,1,1,1,0,1,1,0,1,1,0,0,0,1,0,1,1,0,1,0,1,1,1,0,1,0,1,0,1,1,0,1,1,0,0,1,1,0,1,0,1,1,1,0,0,1,0,1,0,0,0,0,1,0,1,1,0,1,0,0,0,0,1,0,1,1,0,0,1,0,1,0,1,0,0,0,1,0,1,1,1,1,1,1,0,1,1,0,1,0,0,1,0,1,0,0,1,0,0,0,1,1,1,1,0,1,0,0,1,0,1,0,0,1,0,1,0,0,0,0,1,0,0,1,1,1,1,0,1,0,1,0,1,1,1,1,0,1,0,1,0,0,0,0,1,0,0,0,0,0,0,1,1,0,1,0,1,1,1,1,0,1,1,1,1,0,1,0,0,1,0,0,0,0,1,1,1,1,0,1,1,0,0,1,0,0,0,0,1,1,1,1,1,1,1,1,0,1,0,0,1,1,0,0,0,1,1,1,0,0,1,1,1,0,1,1,1,1,0,1,1,1,0,0,1,1,1,0,1,1,0,1,1,1,1,1,0,0,1,1,1,1,1,1,0,1,1,0,0,1,1,0,1,0,1,0,1,0,1,1,1,1,1,0,1,0,1,0,0,1,1,1,1,0,0,0,0,0,1,1,1,1,0,1,1,0,0,0,1,0,0,1,1,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,0,1,0,1,1,1,0,0,0,1,0,1,1,0,0,1,1,0,1,0,1,0,0,0,0,0,1,1,0,0,1,0,1,0,0,0,0,0,0,1,1,1,0,0,1,0,1,1,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1,0,1,0,0,1,0,0,0,1,1,1,1,1,1,1,0,1,0,1,0,0,1,1,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,1,0,0,1,0,0,0,0,1,1,1,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,1,1,0,1,1,0,0,1,0,1,0,0,1,0,0,1,0,1,1,1,1,0,0,0,1,0,1,1,1,1,0,1,1,0,0,1,1,1,0,0,0,0,0,1,0,1,0,1,1,0,1,1,1,0,1,1,0,1,0,0,0,0,0,0,0,1,1,1,0,0,0,1,0,1,0,0,1,1,0,0,0,1,0,0,1,0,1,1,0,0,1,1,1,1,1,0,0,0,0,0,1,0,0,0,1,1,1,1,1,0,1,0,0,1,0,0,0,0,1,1,1,0,0,0,0,1,0,0,1,0,0,0,1,0,1,0,1,0,0,0,0,1,1,0,1,1,1,1,1,1,1,0,0,0,1,0,0,0,1,0,0,0,1,0,1,1,0,0,1,1,1,0,0,1,0,0,1,0,0,1,0,1,1,1,0,1,0,1,0,1,0,1,0,1,1,0,1,1,1,1,1,1,1,1,1,0,0,0,1,0,1,0,1,1,0,0,1,1,0,1,1,1,0,0,1,1,0,0,1,1,1,1,0,0,0,1,1,1,0,1,1,1,0,1,0,1,1,0,1,1,0,1,0,1,1,1,0,0,1,0,1,0,1,1,0,1,1,1,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,1,1,1,0,1,1,1,1,0,0,0,1,0,0,1,1,1,1,1,0,0,0,1,0,0,0,0,1,0,1,0,0,0,1,1,1,1,1,0,0,0,1,0,0,1,1,1,0,1,0,0,1,1,1,1,1,0,1,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,0,1,1,0,1,1,0,0,1,0,1,0,1,1,0,1,0,0,0,0,1,1,1,1,1,1,0,0,1,1,1,0,0,1,0,1,0,1,0,1,1,1,0,1,0,0,1,1,0,1,0,0,1,1,0,0,1,0,0,1,1,1,0,1,0,1,1,0,0,0,1,0,0,1,0,1,1,0,1,0,1,0,1,1,1,0,1,1,0,1,0,1,0,1,0,1,0,0,1,1,1,0,0,0,1,0,1,0,0,0,0,1,0,1,1,1,0,0,1,1,1,0,0,0,0,0,1,1,0,1,0,1,1,1,1,0,0,1,1,1,1,0,1,0,0,1,0,1,0,0,0,0,0,1,1,1,1,0,1,1,1,1,0,0,1,0,0,0,1,0,1,0,0,0,0,0,1,1,1,0,0,0,0,1,0,1,0,0,1,1,0,0,0,1,1,0,0,0,1,1,1,1,1,1,0,0,0,0,1,1,0,1,1,1,0,1,1,1,1,1,1,0,1,0,1,0,0,0,1,0,1,1,0,0,1,0,1,1,1,0,1,0,0,1,0,1,0,0,1,1,1,1,1,0,0,0,1,1,0,1,1,0,1,1,0,1,0,0,0,0,0,1,0,0,0,1,0,1,1,1,0,0,1,0,0,0,1,0,0,0,0,1,1,0,1,0,1,0,1,0,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,0,1,0,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,0,1,1,1,1,0,1,0,1,0,0,0,1,0,0,1,0,1,1,1,0,0,0,1,0,0,0,1,0,0,0,1,1,1,1,0,0,1,0,0,0,0,1,0,0,1,1,1,0,0,1,0,1,1,1,0,0,1,0,1,1,1,1,0,1,1,1,0,0,0,1,0,0,1,0,1,0,0,1,1,1,1,0,0,0,0,1,0,1,1,1,1,1,1,0,0,0,0,0,1,1,1,0,1,1,1,1,1,1,0,0,0,1,1,0,0,0,0,1,1,0,1,0,0,1,0,0,0,0,1,0,0,0,1,1,0,0,1,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,1,1,0,0,0,1,1,0,1,0,0,1,1,1,1,0,1,1,1,0,0,1,0,0,0,0,0,1,1,0,1,1,1,1,1,0,0,1,0,0,1,1,0,1,1,0,0,1,0,0,1,1,0,1,1,1,0,1,0,0,0,0,0,0,1,1,0,1,0,1,1,0,0,1,1,1,1,0,0,0,1,0,1,1,1,1,1,0,0,1,0,0,1,0,1,1,0,1,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,1,0,1,0,0,1,0,0,0,0,1,1,0,0,1,1,0,1,0,0,0,0,0,0,0,1,1,1,1,0,0,1,0,0,0,0,0,1,1,1,0,0,1,0,0,1,1,0,0,0,1,1,1,0,1,1,0,1,0,1,0,0,0,1,0,1,0,1,1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,0,1,1,0,0,1,1,0,1,1,0,0,1,0,1,0,1,0,0,0,0,1,0,0,0,0,0,1,1,1,0,1,1,1,0,0,0,1,1,1,1,0,1,1,0,0,1,1,1,0,1,1,1,1,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,1,0,0,1,0,1,0,1,0,1,1,1,1,1,0,1,1,1,1,1,0,0,1,0,0,0,0,0,0,1,0,0,1,1,1,0,1,0,1,1,1,1,0,0,0,0,0,0,1,0,0,0,1,1,0,0,0,0,1,0,0,0,1,0,0,1,0,0,1,0,0,1,1,0,1,1,1,0,1,0,0,0,1,0,0,1,0,1,1,0,0,1,1,1,1,0,0,1,0,1,1,0,1,1,0,0,0,0,0,1,0,1,1,0,1,0,0,0,0,0,1,0,0,1,0,0,1,1,1,0,1,0,1,0,0,0,0,1,1,1,1,0,0,1,0,1,0,0,1,0,1,0,1,1,1,1,1,0,1,1,0,0,0,0,1,1,0,1,0,0,0,0,0,1,0,0,1,0,1,0,0,1,1,0,0,1,0,0,1,1,0,0,0,0,0,1,0,0,1,0,0,1,0,1,1,0,1,1,0,1,0,0,1,1,0,1,1,0,0,1,0,0,1,0,1,0,1,1,0,0,0,1,1,0,0,1,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,1,1,1,0,0,0,0,0,0,1,0,0,1,1,0,1,1,0,1,1,0,0,1,1,1,1,0,0,1,1,0,0,0,1,1,0,0,0,0,0,1,0,1,1,1,0,1,1,0,];
var gg_b = "1746219602/";

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
