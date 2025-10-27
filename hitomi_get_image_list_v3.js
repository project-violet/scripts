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
case 2271:
case 2361:
case 1392:
case 3713:
case 1988:
case 1898:
case 55:
case 3472:
case 3188:
case 3661:
case 2019:
case 2912:
case 1237:
case 3833:
case 1747:
case 2892:
case 1861:
case 3584:
case 964:
case 19:
case 209:
case 3514:
case 1105:
case 3787:
case 2959:
case 3717:
case 63:
case 356:
case 1544:
case 143:
case 999:
case 2462:
case 272:
case 1073:
case 2604:
case 988:
case 2710:
case 2671:
case 490:
case 516:
case 285:
case 2076:
case 973:
case 2835:
case 135:
case 500:
case 2830:
case 1637:
case 3134:
case 1794:
case 2142:
case 3371:
case 2921:
case 1743:
case 2236:
case 3837:
case 78:
case 544:
case 1065:
case 2746:
case 3157:
case 2564:
case 3459:
case 2639:
case 912:
case 1442:
case 2155:
case 2086:
case 3724:
case 360:
case 623:
case 3854:
case 3069:
case 2775:
case 674:
case 1083:
case 3109:
case 3047:
case 2008:
case 3523:
case 1162:
case 3381:
case 2448:
case 3311:
case 2040:
case 814:
case 3407:
case 2045:
case 663:
case 2281:
case 476:
case 1341:
case 790:
case 2749:
case 1087:
case 2622:
case 3527:
case 3482:
case 3758:
case 3760:
case 3043:
case 2599:
case 3828:
case 539:
case 48:
case 3765:
case 1953:
case 3403:
case 2767:
case 2956:
case 258:
case 898:
case 2520:
case 3574:
case 3094:
case 955:
case 251:
case 870:
case 1015:
case 3749:
case 1080:
case 1822:
case 2773:
case 102:
case 1010:
case 3281:
case 1156:
case 645:
case 220:
case 351:
case 2501:
case 2094:
case 2574:
case 3520:
case 358:
case 3525:
case 3767:
case 3972:
case 2322:
case 2765:
case 1046:
case 3599:
case 2828:
case 847:
case 518:
case 14:
case 2760:
case 771:
case 2527:
case 2178:
case 3611:
case 3086:
case 193:
case 3770:
case 3155:
case 404:
case 154:
case 1434:
case 1881:
case 440:
case 2777:
case 2962:
case 1839:
case 1719:
case 2339:
case 415:
case 1789:
case 3763:
case 330:
case 477:
case 4026:
case 2381:
case 2523:
case 3008:
case 179:
case 313:
case 1950:
case 2421:
case 3780:
case 1049:
case 3715:
case 3052:
case 3671:
case 3604:
case 1107:
case 1532:
case 4032:
case 165:
case 896:
case 1871:
case 1121:
case 2717:
case 1337:
case 1942:
case 3746:
case 2837:
case 3236:
case 1630:
case 471:
case 1159:
case 3921:
case 2371:
case 2261:
case 1635:
case 3907:
case 1457:
case 3830:
case 1067:
case 66:
case 2948:
case 2702:
case 1529:
case 4090:
case 1595:
case 1716:
case 1075:
case 2698:
case 2713:
case 704:
case 1182:
case 3361:
case 1478:
case 3271:
case 1112:
case 832:
case 3892:
case 2833:
case 4051:
case 1230:
case 841:
case 715:
case 1745:
case 2661:
case 517:
case 1551:
case 1692:
case 1063:
case 3031:
case 2188:
case 582:
case 1453:
case 777:
case 2456:
case 1798:
case 1613:
case 300:
case 2686:
case 1683:
case 2081:
case 2616:
case 692:
case 3813:
case 1287:
case 1869:
case 1464:
case 3993:
case 3308:
case 2792:
case 2640:
case 749:
case 4005:
case 3243:
case 1193:
case 2369:
case 3733:
case 2279:
case 3386:
case 1847:
case 1938:
case 2608:
case 4048:
case 6:
case 3294:
case 1144:
case 2885:
case 978:
case 2810:
case 2815:
case 971:
case 2880:
case 2022:
case 3184:
case 2394:
case 1687:
case 2990:
case 217:
case 786:
case 825:
case 3518:
case 3997:
case 3588:
case 603:
case 2929:
case 3887:
case 3506:
case 3737:
case 1197:
case 77:
case 3694:
case 51:
case 2951:
case 1420:
case 141:
case 2208:
case 1425:
case 3643:
case 1499:
case 983:
case 2735:
case 1380:
case 1315:
case 1914:
case 2870:
case 684:
case 2875:
case 2125:
case 3174:
case 3429:
case 2120:
case 1677:
case 211:
case 802:
case 915:
case 3127:
case 170:
case 3331:
case 2252:
case 2366:
case 1273:
case 3389:
case 1363:
case 1927:
case 904:
case 520:
case 84:
case 734:
case 3553:
case 3666:
case 2619:
case 1260:
case 2036:
case 1901:
case 2631:
case 1033:
case 3451:
case 1974:
case 621:
case 1562:
case 2652:
case 2071:
case 1673:
case 2004:
case 2676:
case 854:
case 619:
case 2493:
case 1367:
case 253:
case 4062:
case 486:
case 3123:
case 2568:
case 2741:
case 1660:
case 2550:
case 1665:
case 879:
case 2926:
case 2289:
case 2867:
case 3352:
case 2219:
case 3858:
case 1037:
case 3860:
case 3728:
case 3865:
case 560:
case 2123:
case 98:
case 3444:
case 3849:
case 2509:
case 1358:
case 513:
case 880:
case 631:
case 3676:
case 3071:
case 114:
case 781:
case 329:
case 2728:
case 2858:
case 2352:
case 3219:
case 1030:
case 2266:
case 3289:
case 2376:
case 1035:
case 1263:
case 1438:
case 3550:
case 2490:
case 3199:
case 2389:
case 2877:
case 1739:
case 551:
case 2319:
case 1781:
case 2578:
case 2127:
case 2101:
case 3120:
case 2174:
case 318:
case 3497:
case 3870:
case 1920:
case 2451:
case 3631:
case 198:
case 1925:
case 1556:
case 1092:
case 3689:
case 1572:
case 4056:
case 1999:
case 369:
case 3863:
case 755:
case 3216:
case 1151:
case 3929:
case 2379:
case 424:
case 2997:
case 1610:
case 473:
case 1685:
case 162:
case 1704:
case 3995:
case 3022:
case 3885:
case 3730:
case 1195:
case 3735:
case 1190:
case 89:
case 1427:
case 3679:
case 1512:
case 481:
case 4082:
case 1474:
case 990:
case 2247:
case 3846:
case 1503:
case 1879:
case 1387:
case 2694:
case 2506:
case 1317:
case 1996:
case 2534:
case 244:
case 1816:
case 3932:
case 2944:
case 1215:
case 637:
case 1210:
case 3039:
case 122:
case 1285:
case 3081:
case 3686:
case 3011:
case 3542:
case 787:
case 2647:
case 216:
case 2294:
case 585:
case 1521:
case 1845:
case 3608:
case 1840:
case 712:
case 4007:
case 1246:
case 1313:
case 2386:
case 3279:
case 3196:
case 1736:
case 2316:
case 1132:
case 1808:
case 3645:
case 3663:
case 3572:
case 728:
case 3556:
case 721:
case 634:
case 1036:
case 2974:
case 3324:
case 3920:
case 2033:
case 467:
case 391:
case 2901:
case 1863:
case 3819:
case 169:
case 3414:
case 3484:
case 502:
case 3831:
case 3670:
case 3781:
case 92:
case 3739:
case 1252:
case 1199:
case 1497:
case 1875:
case 820:
case 118:
case 2677:
case 1120:
case 2037:
case 4068:
case 4050:
case 314:
case 593:
case 129:
case 3667:
case 3438:
case 436:
case 2658:
case 1568:
case 1555:
case 1231:
case 3035:
case 1926:
case 1289:
case 3030:
case 761:
case 2923:
case 2367:
case 305:
case 1849:
case 153:
case 4091:
case 346:
case 860:
case 2673:
case 1071:
case 1652:
case 2562:
case 719:
case 1676:
case 2224:
case 3365:
case 3964:
case 3360:
case 2505:
case 3521:
case 1608:
case 2500:
case 2938:
case 3423:
case 2761:
case 428:
case 2548:
case 1792:
case 421:
case 1645:
case 1369:
case 2193:
case 649:
case 3246:
case 767:
case 1279:
case 2287:
case 1347:
case 2054:
case 2217:
case 2602:
case 2464:
case 3996:
case 792:
case 1616:
case 3559:
case 1039:
case 322:
case 3280:
case 3215:
case 525:
case 736:
case 3582:
case 727:
case 3427:
case 1679:
case 2315:
case 468:
case 2984:
case 1735:
case 232:
case 397:
case 461:
case 3195:
case 2914:
case 3317:
case 2843:
case 1846:
case 3503:
case 906:
case 241:
case 945:
case 3474:
case 2420:
case 2425:
case 3771:
case 3610:
case 2213:
case 1343:
case 1216:
case 1810:
case 1880:
case 2687:
case 1990:
case 1995:
case 2129:
case 3197:
case 2387:
case 1694:
case 3028:
case 2503:
case 2317:
case 1737:
case 3914:
case 297:
case 332:
case 15:
case 3385:
case 2190:
case 3984:
case 809:
case 3315:
case 2582:
case 3202:
case 1184:
case 3687:
case 442:
case 1269:
case 3213:
case 59:
case 2151:
case 2615:
case 438:
case 2680:
case 1588:
case 2685:
case 262:
case 2610:
case 2313:
case 543:
case 2507:
case 3193:
case 2736:
case 2808:
case 3761:
case 116:
case 1426:
case 3144:
case 612:
case 2302:
case 3938:
case 2845:
case 2521:
case 3505:
case 1340:
case 2280:
case 2285:
case 222:
case 2210:
case 1345:
case 1802:
case 535:
case 726:
case 737:
case 872:
case 3464:
case 450:
case 1308:
case 907:
case 1883:
case 2816:
case 3287:
case 2030:
case 1266:
case 813:
case 3349:
case 2263:
case 2035:
case 4057:
case 3660:
case 3658:
case 1728:
case 70:
case 681:
case 1858:
case 3037:
case 830:
case 2964:
case 2365:
case 2270:
case 2649:
case 3562:
case 1432:
case 3673:
case 731:
case 1123:
case 2876:
case 3277:
case 1509:
case 908:
case 2831:
case 2999:
case 2484:
case 347:
case 2414:
case 3866:
case 2267:
case 3927:
case 2889:
case 291:
case 3033:
case 2920:
case 2324:
case 3258:
case 298:
case 2925:
case 3375:
case 1666:
case 289:
case 2572:
case 1429:
case 1174:
case 3677:
case 1101:
case 750:
case 1824:
case 3363:
case 1319:
case 1495:
case 3273:
case 2781:
case 2675:
case 664:
case 1127:
case 1578:
case 1331:
case 437:
case 3241:
case 130:
case 1448:
case 707:
case 3789:
case 1045:
case 2957:
case 3719:
case 3950:
case 1400:
case 3955:
case 3526:
case 1008:
case 379:
case 2909:
case 1168:
case 1150:
case 2442:
case 774:
case 2013:
case 1770:
case 1611:
case 2083:
case 1775:
case 1681:
case 1016:
case 3991:
case 1222:
case 3811:
case 280:
case 354:
case 1972:
case 1956:
case 1767:
case 158:
case 151:
case 1520:
case 4020:
case 401:
case 3641:
case 1079:
case 3046:
case 2978:
case 589:
case 2087:
case 2254:
case 591:
case 3418:
case 302:
case 3752:
case 3010:
case 763:
case 1749:
case 839:
case 3015:
case 3776:
case 3822:
case 2237:
case 562:
case 2747:
case 1982:
case 2861:
case 157:
case 29:
case 3708:
case 1031:
case 1903:
case 3740:
case 3235:
case 3692:
case 3063:
case 3230:
case 1019:
case 2918:
case 2988:
case 325:
case 1271:
case 1361:
case 3590:
case 3595:
case 3716:
case 3075:
case 2455:
case 708:
case 3635:
case 68:
case 2468:
case 1236:
case 2060:
case 2743:
case 235:
case 931:
case 3067:
case 2637:
case 522:
case 2794:
case 90:
case 3532:
case 1710:
case 172:
case 2934:
case 676:
case 3049:
case 73:
case 800:
case 3337:
case 2100:
case 2544:
case 365:
case 3794:
case 4038:
case 76:
case 596:
case 2457:
case 1134:
case 919:
case 2067:
case 3058:
case 1371:
case 433:
case 3450:
case 1304:
case 2635:
case 156:
case 265:
case 3544:
case 2409:
case 2337:
case 3100:
case 2121:
case 2942:
case 3335:
case 2107:
case 3934:
case 445:
case 3593:
case 2532:
case 1298:
case 3148:
case 984:
case 2745:
case 677:
case 1066:
case 2551:
case 1472:
case 3633:
case 1188:
case 4084:
case 1118:
case 3861:
case 1584:
case 72:
case 1833:
case 3747:
case 1336:
case 2075:
case 3769:
case 541:
case 11:
case 2716:
case 817:
case 1713:
case 1698:
case 882:
case 3392:
case 875:
case 2112:
case 2529:
case 225:
case 3597:
case 671:
case 1043:
case 678:
case 1178:
case 1574:
case 1094:
case 4027:
case 710:
case 2406:
case 570:
case 903:
case 2015:
case 2085:
case 202:
case 745:
case 2156:
case 120:
case 2172:
case 1153:
case 3017:
case 683:
case 1523:
case 2526:
case 2955:
case 992:
case 1109:
case 1421:
case 2968:
case 2950:
case 2354:
case 1339:
case 2719:
case 829:
case 1311:
case 1381:
case 1157:
case 3654:
case 967:
case 3002:
case 1777:
case 2991:
case 2839:
case 3083:
case 853:
case 3013:
case 3442:
case 9:
case 1756:
case 2753:
case 1772:
case 1826:
case 3149:
case 769:
case 1299:
case 3007:
case 2173:
case 647:
case 2000:
case 810:
case 3447:
case 3626:
case 1225:
case 128:
case 184:
case 2778:
case 718:
case 1042:
case 2486:
case 1413:
case 806:
case 2416:
case 1539:
case 1483:
case 3469:
case 364:
case 1664:
case 3167:
case 2554:
case 4039:
case 670:
case 3976:
case 4081:
case 3952:
case 4011:
case 1402:
case 956:
case 161:
case 2177:
case 3003:
case 2966:
case 3919:
case 3226:
case 2827:
case 381:
case 2801:
case 3768:
case 794:
case 1417:
case 2709:
case 324:
case 119:
case 1975:
case 1264:
case 373:
case 1301:
case 1131:
case 417:
case 753:
case 4022:
case 1119:
case 475:
case 482:
case 2117:
case 86:
case 2187:
case 4036:
case 552:
case 1946:
case 2943:
case 249:
case 387:
case 960:
case 2884:
case 3072:
case 3592:
case 2994:
case 2390:
case 2533:
case 2419:
case 1536:
case 3110:
case 1707:
case 3185:
case 312:
case 1895:
case 3629:
case 1477:
case 2244:
case 2734:
case 192:
case 411:
case 3695:
case 1296:
case 2351:
case 1179:
case 2293:
case 429:
case 1055:
case 2947:
case 1050:
case 2332:
case 1116:
case 3908:
case 3393:
case 1458:
case 1186:
case 641:
case 3535:
case 2113:
case 2537:
case 2706:
case 2838:
case 136:
case 82:
case 2788:
case 717:
case 286:
case 2718:
case 515:
case 2693:
case 453:
case 1571:
case 1504:
case 3295:
case 1473:
case 3632:
case 3290:
case 2476:
case 2644:
case 3896:
case 2297:
case 355:
case 1108:
case 4004:
case 4071:
case 103:
case 3229:
case 2344:
case 1284:
case 3838:
case 1057:
case 1467:
case 3113:
case 2251:
case 3183:
case 2393:
case 1169:
case 2908:
case 37:
case 3332:
case 3947:
case 2229:
case 2986:
case 1913:
case 1983:
case 1009:
case 2896:
case 3297:
case 951:
case 3644:
case 3476:
case 1449:
case 3452:
case 3062:
case 3693:
case 1844:
case 3788:
case 801:
case 2185:
case 3419:
case 808:
case 2180:
case 3489:
case 3431:
case 1748:
case 1561:
case 2651:
case 1238:
case 3814:
case 349:
case 4061:
case 2979:
case 3329:
case 1684:
case 2397:
case 3187:
case 1143:
case 3293:
case 1475:
case 1470:
case 3351:
case 930:
case 1598:
case 744:
case 2742:
case 2695:
case 2232:
case 700:
case 137:
case 83:
case 1194:
case 2170:
case 3479:
case 859:
case 807:
case 2443:
case 10:
case 299:
case 2175:
case 614:
case 2768:
case 2750:
case 288:
case 2825:
case 2082:
case 2820:
case 3874:
case 3801:
case 2989:
case 2919:
case 2899:
case 3528:
case 3177:
case 2931:
case 1601:
case 1415:
case 646:
case 1480:
case 874:
case 2163:
case 1410:
case 823:
case 1762:
case 1088:
case 605:
case 1977:
case 131:
case 1320:
case 1325:
case 138:
case 3408:
case 698:
case 334:
case 1958:
case 1960:
case 1364:
case 1965:
case 1201:
case 2447:
case 689:
case 2021:
case 1623:
case 3445:
case 3048:
case 590:
case 2952:
case 400:
case 2976:
case 909:
case 957:
case 2469:
case 3416:
case 3165:
case 3486:
case 2864:
case 863:
case 1531:
case 1250:
case 1268:
case 713:
case 1519:
case 2436:
case 3656:
case 573:
case 1589:
case 900:
case 3672:
case 1122:
case 4019:
case 1941:
case 944:
case 107:
case 2723:
case 1726:
case 80:
case 1353:
case 3498:
case 2356:
case 3141:
case 2262:
case 3575:
case 831:
case 3095:
case 838:
case 680:
case 3570:
case 2097:
case 916:
case 588:
case 2128:
case 581:
case 174:
case 3029:
case 123:
case 2154:
case 3720:
case 3725:
case 3850:
case 3362:
case 3256:
case 1181:
case 2727:
case 2565:
case 1139:
case 1668:
case 2558:
case 1650:
case 3981:
case 850:
case 3911:
case 4052:
case 290:
case 472:
case 3891:
case 3939:
case 95:
case 2404:
case 3032:
case 3549:
case 1691:
case 2093:
case 2809:
case 315:
case 1807:
case 4040:
case 2714:
case 377:
case 1334:
case 1930:
case 1508:
case 1935:
case 4008:
case 757:
case 3212:
case 1171:
case 1104:
case 1821:
case 1545:
case 4016:
case 3971:
case 1454:
case 1859:
case 2502:
case 1729:
case 195:
case 2481:
case 2439:
case 3130:
case 2307:
case 3659:
case 2583:
case 1586:
case 635:
case 1388:
case 3546:
case 1099:
case 3207:
case 2806:
case 4079:
case 2205:
case 1992:
case 2961:
case 1428:
case 1020:
case 3603:
case 101:
case 108:
case 3936:
case 3192:
case 2133:
case 3796:
case 1136:
case 3585:
case 785:
case 2517:
case 587:
case 2998:
case 2303:
case 512:
case 2818:
case 1606:
case 1594:
case 953:
case 3200:
case 2221:
case 3806:
case 867:
case 1198:
case 3248:
case 994:
case 3738:
case 16:
case 4094:
case 420:
case 3818:
case 376:
case 3422:
case 3517:
case 1618:
case 1793:
case 2515:
case 3133:
case 1688:
case 892:
case 3382:
case 1161:
case 3312:
case 2259:
case 756:
case 836:
case 2607:
case 3359:
case 3600:
case 2621:
case 918:
case 1206:
case 215:
case 1547:
case 2135:
case 3439:
case 3834:
case 240:
case 3411:
case 2348:
case 3502:
case 204:
case 460:
case 3321:
case 2300:
case 71:
case 2799:
case 828:
case 3727:
case 110:
case 1253:
case 1038:
case 1391:
case 3857:
case 2850:
case 278:
case 133:
case 2720:
case 3701:
case 975:
case 2855:
case 1657:
case 3154:
case 3662:
case 3573:
case 2549:
case 534:
case 283:
case 1350:
case 1954:
case 1368:
case 1862:
case 2939:
case 1609:
case 2891:
case 602:
case 3044:
case 106:
case 145:
case 390:
case 2911:
case 3853:
case 1257:
case 2672:
case 2051:
case 2563:
case 2656:
case 1566:
case 1492:
case 2461:
case 1928:
case 693:
case 760:
case 3128:
case 41:
case 819:
case 2090:
case 654:
case 2575:
case 3356:
case 2922:
case 295:
case 3288:
case 991:
case 855:
case 1481:
case 998:
case 3569:
case 2516:
case 1439:
case 1307:
case 2795:
case 2586:
case 4083:
case 2454:
case 1321:
case 4013:
case 3634:
case 2859:
case 1502:
case 2064:
case 2729:
case 2104:
case 657:
case 2821:
case 2751:
case 2334:
case 1605:
case 3848:
case 2935:
case 914:
case 2306:
case 1422:
case 1303:
case 1587:
case 685:
case 672:
case 1818:
case 743:
case 2732:
case 3161:
case 1133:
case 23:
case 1200:
case 18:
case 887:
case 946:
case 1205:
case 201:
case 3933:
case 2882:
case 2020:
case 2025:
case 2812:
case 3441:
case 1248:
case 3027:
case 537:
case 3543:
case 526:
case 1128:
case 1097:
case 3209:
case 1372:
case 1262:
case 780:
case 3678:
case 1524:
case 630:
case 3257:
case 2856:
case 1723:
case 2872:
case 542:
case 2250:
case 922:
case 3566:
case 1436:
case 538:
case 3653:
case 2589:
case 3954:
case 3368:
case 443:
case 864:
case 2576:
case 2552:
case 1573:
case 345:
case 306:
case 2181:
case 1857:
case 3391:
case 310:
case 3253:
case 651:
case 2650:
case 1560:
case 2668:
case 1154:
case 550:
case 2437:
case 2309:
case 4058:
case 1774:
case 2862:
case 1939:
case 363:
case 702:
case 620:
case 1981:
case 3691:
case 521:
case 3552:
case 528:
case 3576:
case 2278:
case 2368:
case 178:
case 1725:
case 1850:
case 1868:
case 171:
case 74:
case 2657:
case 2430:
case 3139:
case 3668:
case 3650:
case 1799:
case 834:
case 2253:
case 210:
case 3111:
case 2391:
case 1256:
case 2038:
case 1090:
case 2678:
case 1570:
case 1575:
case 1095:
case 561:
case 754:
case 3353:
case 1498:
case 1029:
case 660:
case 793:
case 4070:
case 2209:
case 4075:
case 2653:
case 1563:
case 1672:
case 3433:
case 1656:
case 3250:
case 3268:
case 779:
case 3378:
case 996:
case 3872:
case 3856:
case 2014:
case 3122:
case 2793:
case 2618:
case 3136:
case 1510:
case 656:
case 1515:
case 2161:
case 1192:
case 765:
case 3732:
case 2234:
case 2744:
case 4010:
case 4080:
case 1612:
case 1682:
case 3803:
case 3099:
case 849:
case 592:
case 26:
case 3318:
case 3882:
case 3020:
case 2594:
case 2001:
case 3428:
case 1221:
case 1842:
case 3729:
case 3064:
case 61:
case 3859:
case 947:
case 1300:
case 3454:
case 1305:
case 3642:
case 3795:
case 1130:
case 3516:
case 1659:
case 2569:
case 2218:
case 395:
case 1026:
case 3935:
case 1621:
case 177:
case 3807:
case 1203:
case 115:
case 2805:
case 22:
case 3821:
case 3545:
case 3171:
case 1282:
case 2342:
case 479:
case 3917:
case 2759:
case 3078:
case 2424:
case 2179:
case 3470:
case 3897:
case 2296:
case 3143:
case 1293:
case 796:
case 2895:
case 56:
case 2890:
case 326:
case 1697:
case 1734:
case 1814:
case 3053:
case 3561:
case 3748:
case 3463:
case 1489:
case 2:
case 2536:
case 954:
case 267:
case 3705:
case 2946:
case 1329:
case 149:
case 3147:
case 3893:
case 3009:
case 1969:
case 2832:
case 3983:
case 203:
case 52:
case 3913:
case 675:
case 2696:
case 3844:
case 2091:
case 2338:
case 2571:
case 1693:
case 2473:
case 1476:
case 3467:
case 1706:
case 3284:
case 748:
case 2055:
case 2782:
case 741:
case 1332:
case 2068:
case 2050:
case 1183:
case 2458:
case 3169:
case 2460:
case 2116:
case 3638:
case 877:
case 2664:
case 510:
case 2949:
case 1326:
case 3034:
case 2402:
case 770:
case 2581:
case 284:
case 2042:
case 350:
case 2413:
case 1486:
case 611:
case 4054:
case 1160:
case 618:
case 1416:
case 533:
case 1000:
case 2220:
case 3965:
case 3274:
case 925:
case 134:
case 3958:
case 3364:
case 2225:
case 2756:
case 545:
case 1753:
case 747:
case 2299:
case 878:
case 2152:
case 2131:
case 2327:
case 342:
case 3166:
case 3410:
case 2189:
case 653:
case 3480:
case 3399:
case 2487:
case 694:
case 2264:
case 338:
case 219:
case 3924:
case 2970:
case 2699:
case 1801:
case 448:
case 629:
case 4028:
case 1124:
case 1479:
case 3446:
case 3674:
case 2620:
case 1177:
case 3601:
case 2625:
case 2963:
case 1827:
case 2320:
case 2924:
case 173:
case 935:
case 3301:
case 231:
case 2325:
case 3975:
case 238:
case 3487:
case 3522:
case 1163:
case 559:
case 3189:
case 705:
case 242:
case 746:
case 3131:
case 2088:
case 1226:
case 1989:
case 3963:
case 1494:
case 2223:
case 3625:
case 368:
case 2601:
case 361:
case 497:
case 943:
case 2674:
case 2446:
case 2627:
case 574:
case 199:
case 1443:
case 1825:
case 188:
case 1012:
case 181:
case 714:
case 3483:
case 3413:
case 3511:
case 3042:
case 1059:
case 1864:
case 1952:
case 2973:
case 3402:
case 2034:
case 422:
case 3664:
case 1167:
case 1007:
case 3176:
case 3299:
case 2227:
case 3772:
case 2960:
case 3225:
case 328:
case 2958:
case 789:
case 3220:
case 798:
case 1626:
case 1021:
case 2449:
case 3140:
case 1295:
case 2902:
case 3145:
case 3571:
case 3338:
case 446:
case 3091:
case 2844:
case 3696:
case 762:
case 1229:
case 1916:
case 2009:
case 2893:
case 1896:
case 266:
case 155:
case 3186:
case 1251:
case 2638:
case 1908:
case 2169:
case 1393:
case 3050:
case 3068:
case 3782:
case 414:
case 3055:
case 2284:
case 336:
case 2214:
case 65:
case 1945:
case 2057:
case 797:
case 237:
case 3384:
case 226:
case 600:
case 3890:
case 1629:
case 3477:
case 3895:
case 501:
case 2143:
case 1146:
case 2897:
case 3296:
case 2470:
case 3179:
case 3424:
case 2078:
case 1742:
case 3829:
case 2917:
case 53:
case 3946:
case 2684:
case 3721:
case 1110:
case 3536:
case 1185:
case 1466:
case 1180:
case 2463:
case 1115:
case 2053:
case 2238:
case 187:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1761555601/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,1,0,0,0,1,0,0,1,1,1,0,0,1,1,1,0,1,1,0,0,1,1,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0,1,1,1,0,1,1,0,0,1,0,1,0,1,0,1,1,0,1,0,1,1,1,1,1,0,1,1,1,0,1,0,1,1,1,0,1,0,0,1,1,0,1,0,0,1,0,0,1,0,0,1,1,1,0,0,1,1,1,0,1,0,0,0,1,1,1,0,1,1,1,0,1,1,0,0,0,0,1,1,1,1,0,1,1,1,1,1,1,0,0,1,0,1,0,1,0,0,0,1,0,1,0,1,1,1,1,1,1,0,0,1,1,0,0,1,0,0,0,1,1,1,1,1,1,0,0,1,1,1,0,1,0,0,1,0,0,1,1,0,0,0,1,1,0,1,0,0,1,1,0,1,1,1,1,0,0,0,0,1,1,1,0,0,0,1,1,1,0,1,1,0,1,0,0,1,1,0,0,0,0,1,1,0,0,1,0,1,1,0,1,1,1,0,1,0,0,0,0,1,0,1,0,1,0,0,0,0,1,0,0,0,1,0,0,1,1,1,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,1,1,1,1,0,1,1,1,1,0,0,0,1,0,1,1,1,1,0,1,0,0,1,1,0,0,0,1,0,1,1,1,1,0,0,1,0,0,0,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1,0,0,0,1,0,0,1,1,1,0,1,1,1,0,0,1,1,1,0,1,0,1,1,0,1,1,1,0,0,1,1,0,0,0,1,0,0,1,1,0,1,0,1,0,0,0,0,0,1,0,0,1,1,0,0,0,1,0,1,0,0,1,1,0,0,1,0,0,0,0,0,0,1,0,0,1,1,0,1,0,0,1,1,1,0,1,0,0,0,1,1,0,0,0,1,0,0,1,1,1,0,1,0,1,1,0,1,1,0,1,0,1,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,1,1,1,0,1,1,1,0,1,0,1,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0,1,1,1,0,0,0,0,0,0,0,1,0,1,1,0,1,1,1,1,0,1,1,1,0,0,1,1,0,1,0,0,0,0,1,1,1,0,1,1,1,0,1,1,1,1,1,0,0,0,0,1,1,1,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,1,0,0,1,1,0,0,0,0,0,0,1,1,0,0,1,0,1,1,1,1,1,1,1,0,0,1,0,0,0,1,0,1,1,0,1,0,0,0,0,0,1,1,0,1,0,0,0,1,1,1,1,0,1,0,0,0,0,0,1,1,1,0,0,1,1,0,1,0,0,0,1,0,0,0,1,1,1,0,1,0,1,0,1,1,0,1,1,0,0,1,0,0,1,1,0,0,0,0,0,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,0,0,0,1,0,0,1,1,1,0,0,0,1,0,1,0,1,0,1,1,0,1,1,0,1,0,1,1,1,1,0,1,1,1,0,1,0,0,0,0,1,1,1,0,0,1,0,0,1,0,1,1,0,0,0,1,0,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,0,0,1,1,1,1,0,1,0,1,0,1,1,1,0,0,1,0,0,1,0,1,1,1,0,0,0,1,1,1,0,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,0,0,1,1,1,1,1,0,0,1,1,0,0,1,0,1,1,0,0,1,0,1,0,0,1,1,1,1,1,0,1,0,1,0,1,1,0,1,0,0,0,0,0,1,0,1,1,0,0,1,1,1,0,0,0,1,1,0,0,1,1,0,0,1,0,0,1,0,1,0,1,1,0,1,1,1,1,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,1,0,1,0,1,0,0,1,1,0,1,1,1,1,0,0,1,0,1,1,1,0,1,1,0,0,1,0,0,1,0,0,0,0,1,1,0,0,0,1,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,1,0,1,1,1,1,1,0,0,1,0,0,0,1,0,0,1,0,0,0,1,0,1,0,1,0,0,1,0,0,0,0,1,1,0,0,0,1,0,1,1,1,0,1,0,1,0,1,1,1,0,0,0,0,0,0,1,1,1,1,0,1,0,0,1,1,0,0,1,1,1,0,0,0,0,1,0,0,1,1,1,0,1,0,1,1,1,1,1,0,0,1,1,0,1,1,0,0,1,1,0,0,0,0,1,0,1,0,1,0,0,0,1,0,1,1,1,0,0,0,1,0,1,0,1,0,0,0,1,1,0,0,1,0,0,0,1,1,0,1,0,1,0,1,1,0,1,0,1,0,1,0,0,1,1,0,1,1,1,1,0,1,0,0,1,1,0,1,1,1,1,1,1,1,0,0,1,1,0,1,1,1,1,1,0,1,0,0,1,0,0,0,1,1,0,1,0,0,0,1,1,0,1,1,0,1,1,0,1,1,1,1,1,0,0,0,1,1,1,0,1,0,0,1,0,0,1,1,1,1,1,1,1,1,1,1,0,1,0,1,0,1,1,1,1,0,1,1,1,1,1,0,1,0,1,1,0,0,0,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,1,1,0,0,1,1,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,0,1,0,1,1,1,1,0,0,1,1,0,0,1,0,1,1,1,0,1,0,1,1,0,1,0,1,0,0,0,0,0,1,0,0,1,0,1,1,0,1,0,1,0,0,0,1,0,1,1,0,1,1,1,1,0,1,1,1,0,1,1,0,0,1,0,1,0,1,0,1,0,1,1,1,0,0,0,1,1,0,0,1,0,1,1,0,1,0,1,1,0,1,1,1,0,1,0,1,0,1,0,0,1,0,0,1,0,0,0,0,1,0,0,1,0,1,1,0,0,1,1,1,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,1,1,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,1,0,1,1,1,0,0,1,1,1,0,0,1,1,1,1,1,0,0,1,0,1,0,1,0,1,1,0,0,1,1,0,0,0,0,1,1,0,0,0,1,1,0,0,1,1,0,0,0,0,0,1,0,1,1,0,0,1,0,1,1,1,1,1,1,1,1,1,1,0,1,0,0,1,0,0,1,0,0,1,0,1,1,0,1,1,1,0,0,1,1,1,0,0,0,1,1,1,0,1,0,0,1,0,0,0,1,1,1,0,1,1,0,0,0,0,1,0,1,1,0,0,0,1,0,0,1,0,0,0,0,1,1,0,1,0,0,0,1,0,0,0,1,1,0,0,0,1,1,1,1,0,0,1,0,1,0,1,1,1,1,1,1,0,0,1,0,0,0,0,0,1,0,1,1,1,1,0,0,0,0,1,1,0,0,1,0,0,1,0,0,0,1,1,0,1,1,1,1,1,1,0,0,1,0,1,0,0,1,0,1,0,0,1,0,0,1,1,0,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1,0,1,0,0,0,1,1,0,1,1,0,0,0,1,1,1,0,1,0,0,0,1,1,0,0,1,1,0,1,0,1,1,1,1,1,0,1,1,0,0,1,1,1,1,0,0,1,1,0,0,0,0,0,1,0,1,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,0,1,1,0,1,1,0,0,0,0,1,1,1,1,0,1,0,0,1,1,0,1,0,1,1,1,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0,0,1,0,1,0,1,1,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,1,1,0,0,0,1,1,0,1,1,0,0,0,0,1,1,0,1,0,0,0,1,0,1,0,1,0,0,1,1,0,1,1,1,1,0,0,0,0,0,1,0,0,0,0,0,1,1,0,1,0,1,1,1,1,0,1,1,0,0,0,0,0,0,1,1,1,0,1,1,1,1,0,0,0,1,1,0,1,0,0,0,1,0,0,0,1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,1,0,1,0,0,0,0,1,0,0,0,0,1,1,0,1,0,0,0,1,0,0,0,0,1,1,1,1,0,1,0,0,0,0,1,0,0,1,1,0,1,1,0,0,1,1,0,0,0,1,0,1,1,1,0,1,0,1,0,1,0,0,0,0,1,0,0,0,1,0,0,1,0,1,1,0,1,0,0,0,1,1,1,0,0,0,0,1,1,1,0,1,0,0,1,1,0,0,1,1,1,0,0,1,0,0,0,1,1,0,0,0,1,1,1,0,0,0,1,1,1,1,0,0,1,0,0,0,0,1,0,0,1,1,1,1,1,1,0,1,0,1,0,0,1,0,0,0,0,1,1,0,1,1,1,0,1,0,0,1,0,0,0,1,0,0,1,1,0,0,1,0,0,0,1,1,0,1,0,0,1,1,1,0,1,1,1,1,0,1,1,0,1,1,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,0,0,1,1,0,0,1,1,0,0,1,1,0,1,0,1,0,1,1,1,0,1,0,1,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,1,1,1,0,0,0,0,1,0,1,0,0,0,0,0,1,1,0,1,1,1,1,0,1,1,1,1,1,0,0,0,1,0,1,1,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,0,0,1,1,0,0,1,1,1,1,1,0,1,1,1,0,1,0,1,0,0,1,0,1,0,1,1,1,0,0,0,0,0,1,0,0,1,0,0,1,1,1,1,1,0,0,0,0,1,0,1,1,1,1,0,1,1,0,0,1,1,0,0,0,0,0,0,1,1,1,1,0,0,1,1,0,1,0,1,0,0,0,1,1,0,1,1,0,1,1,0,1,1,0,0,1,1,0,1,0,0,0,1,0,1,1,1,0,1,1,0,1,0,1,1,0,1,0,0,0,0,1,0,1,0,0,1,1,1,0,0,1,0,1,0,0,0,1,0,0,1,1,0,1,0,1,0,0,0,0,1,0,0,0,1,1,1,1,1,0,1,0,0,0,0,1,0,0,1,0,1,0,0,0,0,1,1,0,1,1,1,0,1,1,0,0,1,0,0,0,0,1,0,1,0,1,0,0,1,0,0,0,1,1,0,1,0,0,1,1,1,0,0,1,1,0,0,0,0,1,0,0,0,0,0,1,1,0,1,0,0,1,1,0,0,1,1,1,1,0,1,0,0,1,1,1,1,1,0,1,1,1,1,1,0,0,0,1,1,1,0,0,1,0,0,1,0,0,0,0,1,0,0,1,0,1,1,0,0,1,0,0,1,0,0,0,0,0,0,1,1,1,1,0,1,1,1,0,1,0,0,0,0,0,1,1,1,0,0,1,1,0,1,0,0,1,1,0,1,0,0,1,1,1,0,1,1,0,0,0,0,0,0,1,0,0,0,1,1,1,1,1,0,1,0,0,0,1,0,0,0,1,1,1,1,0,0,1,1,0,1,1,0,1,1,1,0,1,0,0,1,1,1,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,1,0,1,1,0,1,0,0,1,1,0,1,0,0,0,0,1,1,0,1,1,1,1,1,0,0,1,0,1,0,0,0,1,0,0,0,1,0,1,1,1,1,0,0,0,1,0,0,1,0,1,1,1,1,1,0,0,1,1,1,0,0,1,0,0,1,0,0,0,1,0,0,1,1,1,1,1,1,1,1,0,1,0,0,0,1,1,1,1,0,0,0,0,0,1,1,1,1,0,1,1,0,0,1,0,0,0,1,0,0,1,1,0,0,1,1,0,1,1,1,1,1,0,0,1,0,0,0,1,1,1,0,0,1,0,1,1,1,0,0,0,0,1,1,1,1,1,1,1,0,1,1,1,0,1,0,0,1,0,0,1,1,1,0,0,0,1,0,1,1,0,0,0,0,1,0,1,0,1,1,0,0,1,1,0,0,0,0,0,1,0,0,0,1,1,1,1,0,0,0,1,0,1,0,0,0,1,1,0,1,1,1,0,1,0,0,1,1,0,1,0,1,1,0,0,0,1,0,1,1,0,1,1,1,1,0,1,0,1,1,1,0,0,0,1,1,1,0,0,0,0,1,0,0,0,0,1,1,0,1,1,0,1,1,0,1,0,0,1,0,0,1,0,1,0,0,1,1,1,0,0,1,0,1,0,1,1,0,0,0,1,1,1,1,1,0,1,1,1,0,1,0,1,1,0,0,0,0,0,1,1,0,1,1,0,1,0,0,1,1,1,1,1,1,1,1,1,1,0,0,1,0,1,0,0,1,1,0,0,1,1,0,0,1,1,1,0,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,0,1,0,1,0,1,0,0,1,1,0,1,0,1,1,0,0,0,0,1,0,1,0,1,1,1,1,0,0,1,0,0,1,1,1,0,0,1,1,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0,0,1,0,1,0,0,0,0,1,1,1,1,1,1,1,1,1,0,1,0,1,0,0,1,1,1,0,1,1,1,1,1,0,1,1,0,1,0,0,1,0,0,0,1,1,1,0,0,1,1,1,0,1,1,0,0,1,0,0,1,0,0,1,0,1,0,0,1,0,0,0,0,1,0,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,1,0,1,0,0,0,0,0,0,1,0,1,1,0,0,0,1,1,0,1,1,0,1,1,0,1,0,0,1,1,1,0,1,1,1,0,1,1,1,0,0,0,0,1,1,0,1,0,0,0,1,0,0,0,1,1,1,0,1,0,1,0,0,1,0,1,1,0,1,0,0,0,1,1,1,1,1,1,1,0,0,1,1,0,1,1,1,0,1,1,0,1,0,0,0,0,1,0,1,0,0,1,1,0,1,1,0,0,1,1,0,0,0,0,1,1,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,0,1,0,0,1,0,1,0,1,0,0,1,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,1,0,0,1,0,1,1,1,0,0,1,0,0,1,1,1,1,0,0,1,1,1,1,1,0,1,0,1,0,0,0,0,0,0,1,0,0,1,1,0,0,1,0,1,1,0,0,1,0,0,1,0,0,0,0,1,0,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,0,0,1,0,0,1,1,1,1,1,1,1,0,0,1,0,0,1,0,0,0,1,0,0,1,0,0,1,1,0,1,1,1,0,0,1,0,1,1,1,0,0,0,0,0,1,0,0,1,1,0,0,0,1,1,0,1,1,0,1,1,0,1,0,1,1,0,0,1,1,1,0,0,1,1,1,0,1,0,1,0,0,0,0,1,1,0,1,1,0,1,1,1,1,0,0,1,1,1,0,1,0,0,0,0,1,0,0,0,1,1,0,0,1,0,1,1,0,1,0,1,0,1,1,0,1,1,0,1,1,1,0,1,1,0,1,0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,1,1,0,0,0,0,1,0,0,1,0,1,1,1,0,1,1,1,1,0,1,1,1,1,0,0,0,1,0,0,1,1,0,0,0,0,0,1,1,1,1,1,0,0,1,1,0,1,1,0,0,1,0,0,1,0,1,1,0,0,0,1,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,1,0,1,1,0,0,1,0,1,0,1,1,0,1,0,1,0,1,1,1,0,1,1,0,0,0,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,0,1,1,1,1,1,0,0,1,0,0,1,1,1,1,1,0,0,0,0,1,0,0,1,1,0,1,0,1,1,1,1,1,1,1,0,1,1,1,0,1,1,1,1,1,0,1,1,1,1,0,0,0,0,0,0,1,1,0,1,0,1,1,1,1,1,1,0,0,0,0,1,0,0,0,1,0,0,1,0,0,0,0,1,0,1,1,1,0,1,1,1,0,0,1,1,0,1,1,1,1,0,1,1,0,1,0,1,1,1,1,0,0,0,0,0,1,1,1,1,0,0,1,0,0,0,0,0,1,0,1,1,0,1,0,1,0,1,1,1,1,1,1,0,0,0,1,0,0,0,1,1,1,0,0,0,0,1,1,1,0,0,0,0,1,1,1,0,0,0,0,1,0,1,0,0,1,1,0,0,0,1,0,1,1,0,0,0,1,1,0,1,1,0,0,0,0,0,1,1,1,1,0,1,1,0,0,1,1,0,0,0,0,0,1,0,1,0,1,1,1,0,0,1,1,0,1,1,1,1,1,1,0,1,0,1,1,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,1,1,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,1,0,1,1,0,0,1,0,1,1,1,0,0,1,0,0,1,0,1,0,0,1,1,1,1,1,0,1,1,0,0,0,0,0,0,1,1,0,0,1,0,1,0,1,1,0,0,1,0,0,0,0,1,1,1,0,0,0,0,0,1,1,0,0,1,1,0,0,0,0,1,0,1,1,0,0,0,0,0,0,1,0,1,0,1,1,1,0,0,0,0,0,0,1,1,0,1,1,0,1,1,0,1,0,0,1,0,0,1,1,0,1,0,0,0,1,1,1,0,0,0,1,0,0,0,1,0,1,1,1,0,0,0,0,0,0,0,1,0,1,1,1,0,1,0,1,1,1,0,0,1,1,0,0,0,0,0,1,0,1,1,0,0,0,1,0,0,0,1,1,1,1,1,1,0,0,0,0,0,1,1,0,0,1,0,];
var gg_b = "1761555601/";

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
