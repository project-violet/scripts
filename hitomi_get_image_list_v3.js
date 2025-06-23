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
case 3409:
case 4018:
case 2506:
case 3963:
case 1192:
case 2925:
case 1022:
case 516:
case 899:
case 1716:
case 1839:
case 664:
case 702:
case 240:
case 1702:
case 918:
case 1866:
case 2182:
case 2512:
case 951:
case 1737:
case 3394:
case 3597:
case 3622:
case 478:
case 4052:
case 4072:
case 1795:
case 3535:
case 3530:
case 1790:
case 3745:
case 2465:
case 595:
case 597:
case 647:
case 645:
case 2460:
case 2376:
case 195:
case 1100:
case 2558:
case 2356:
case 1547:
case 2578:
case 1105:
case 3173:
case 1241:
case 3726:
case 91:
case 1907:
case 3012:
case 1678:
case 2091:
case 1658:
case 2127:
case 2477:
case 534:
case 1932:
case 47:
case 2893:
case 2035:
case 1606:
case 3235:
case 1389:
case 3058:
case 1883:
case 2258:
case 403:
case 2278:
case 1247:
case 2399:
case 1112:
case 3064:
case 437:
case 580:
case 2264:
case 891:
case 2439:
case 1582:
case 2466:
case 863:
case 3569:
case 2786:
case 256:
case 2355:
case 1106:
case 2370:
case 2592:
case 2350:
case 1158:
case 1428:
case 1178:
case 3517:
case 2505:
case 96:
case 2926:
case 1715:
case 1860:
case 450:
case 3985:
case 2036:
case 3980:
case 3653:
case 1605:
case 4023:
case 2564:
case 3236:
case 1779:
case 1282:
case 704:
case 3211:
case 306:
case 3269:
case 494:
case 1851:
case 2069:
case 3472:
case 3122:
case 3452:
case 1857:
case 2200:
case 3642:
case 2017:
case 968:
case 3888:
case 3000:
case 566:
case 331:
case 2483:
case 769:
case 166:
case 1324:
case 420:
case 4009:
case 1692:
case 2361:
case 3418:
case 395:
case 3100:
case 397:
case 3344:
case 3547:
case 2117:
case 1745:
case 2979:
case 2959:
case 1740:
case 1530:
case 3790:
case 762:
case 1394:
case 1597:
case 65:
case 628:
case 3702:
case 2136:
case 669:
case 3731:
case 2111:
case 3839:
case 1409:
case 1963:
case 2222:
case 1498:
case 3247:
case 850:
case 539:
case 3612:
case 2843:
case 3087:
case 2818:
case 736:
case 2996:
case 139:
case 2047:
case 1078:
case 2691:
case 1235:
case 3389:
case 2768:
case 3413:
case 3932:
case 1681:
case 658:
case 3606:
case 3658:
case 1726:
case 2834:
case 3907:
case 2635:
case 1006:
case 491:
case 3241:
case 835:
case 2522:
case 803:
case 2135:
case 332:
case 2707:
case 413:
case 3428:
case 3178:
case 2329:
case 1517:
case 2553:
case 4013:
case 2303:
case 4048:
case 1181:
case 3106:
case 1536:
case 3796:
case 693:
case 3221:
case 2191:
case 2021:
case 143:
case 1064:
case 2542:
case 3324:
case 531:
case 1443:
case 131:
case 2669:
case 2902:
case 3073:
case 2636:
case 3053:
case 1888:
case 1000:
case 619:
case 2931:
case 1642:
case 1217:
case 712:
case 745:
case 506:
case 1472:
case 3804:
case 2995:
case 106:
case 709:
case 3851:
case 1236:
case 3521:
case 3779:
case 3759:
case 3282:
case 2082:
case 924:
case 1985:
case 275:
case 3600:
case 277:
case 2242:
case 908:
case 3605:
case 2617:
case 853:
case 2324:
case 266:
case 1319:
case 3253:
case 1205:
case 3273:
case 1813:
case 2877:
case 1682:
case 768:
case 1017:
case 526:
case 3995:
case 1292:
case 460:
case 3937:
case 377:
case 2600:
case 904:
case 2282:
case 2759:
case 928:
case 2042:
case 1564:
case 1367:
case 1945:
case 3027:
case 687:
case 823:
case 471:
case 3135:
case 3823:
case 2227:
case 3553:
case 1505:
case 3329:
case 2428:
case 1147:
case 486:
case 652:
case 2715:
case 1926:
case 2664:
case 1141:
case 3774:
case 3754:
case 1466:
case 556:
case 1370:
case 2106:
case 1350:
case 3701:
case 1375:
case 1355:
case 2968:
case 3542:
case 911:
case 2112:
case 3809:
case 1439:
case 2796:
case 3047:
case 3691:
case 3287:
case 961:
case 2612:
case 1258:
case 2247:
case 1035:
case 2606:
case 2932:
case 3349:
case 2413:
case 1127:
case 993:
case 2389:
case 654:
case 1097:
case 3488:
case 2974:
case 1121:
case 3915:
case 1471:
case 2907:
case 3910:
case 1404:
case 3852:
case 1212:
case 1647:
case 6:
case 1206:
case 3522:
case 3041:
case 3697:
case 3630:
case 2081:
case 1460:
case 3959:
case 3587:
case 3384:
case 2105:
case 1780:
case 2100:
case 1785:
case 2547:
case 2344:
case 297:
case 410:
case 2790:
case 1182:
case 2731:
case 970:
case 2333:
case 898:
case 751:
case 540:
case 1506:
case 383:
case 216:
case 919:
case 690:
case 1920:
case 140:
case 2022:
case 1925:
case 3111:
case 4060:
case 4065:
case 575:
case 2236:
case 3945:
case 1617:
case 2980:
case 2673:
case 2985:
case 2472:
case 3292:
case 2122:
case 326:
case 1937:
case 909:
case 206:
case 2269:
case 2434:
case 790:
case 2005:
case 2888:
case 3017:
case 1273:
case 3200:
case 810:
case 964:
case 3361:
case 3763:
case 2443:
case 2720:
case 1669:
case 1916:
case 3264:
case 2338:
case 754:
case 1809:
case 3350:
case 49:
case 4077:
case 773:
case 3375:
case 3627:
case 1303:
case 1754:
case 3466:
case 3621:
case 4071:
case 2187:
case 3505:
case 1329:
case 7:
case 621:
case 1135:
case 1281:
case 752:
case 1041:
case 3404:
case 1852:
case 1872:
case 3647:
case 785:
case 3091:
case 3451:
case 901:
case 1910:
case 3097:
case 886:
case 4066:
case 3035:
case 1349:
case 3127:
case 2986:
case 3457:
case 3030:
case 3477:
case 1818:
case 1843:
case 3258:
case 2498:
case 3278:
case 423:
case 2362:
case 936:
case 3920:
case 1169:
case 583:
case 3925:
case 668:
case 3506:
case 3308:
case 2409:
case 2142:
case 860:
case 3182:
case 1136:
case 2530:
case 2535:
case 53:
case 13:
case 962:
case 3828:
case 2423:
case 3780:
case 3785:
case 3578:
case 3356:
case 1959:
case 629:
case 453:
case 1587:
case 3830:
case 617:
case 2165:
case 1405:
case 3453:
case 3473:
case 192:
case 2528:
case 3652:
case 3672:
case 2878:
case 1283:
case 416:
case 3634:
case 1018:
case 1539:
case 1841:
case 2482:
case 497:
case 3799:
case 948:
case 2806:
case 3442:
case 976:
case 1034:
case 578:
case 749:
case 705:
case 2950:
case 696:
case 1072:
case 2955:
case 1566:
case 2975:
case 3028:
case 2639:
case 2593:
case 2228:
case 4081:
case 1113:
case 2157:
case 1148:
case 2961:
case 1583:
case 3708:
case 2919:
case 2421:
case 2151:
case 2171:
case 1239:
case 3380:
case 94:
case 3385:
case 503:
case 1784:
case 2967:
case 434:
case 57:
case 3013:
case 3288:
case 3817:
case 2213:
case 2800:
case 2604:
case 537:
case 1458:
case 1478:
case 1098:
case 3487:
case 137:
case 1944:
case 3761:
case 3363:
case 3719:
case 3836:
case 2320:
case 3481:
case 1613:
case 2677:
case 1648:
case 741:
case 432:
case 2892:
case 286:
case 313:
case 3698:
case 1271:
case 3869:
case 3770:
case 644:
case 1301:
case 3588:
case 3755:
case 3775:
case 3386:
case 1989:
case 3118:
case 3143:
case 2346:
case 1354:
case 1577:
case 1374:
case 194:
case 3962:
case 1260:
case 1023:
case 1265:
case 1009:
case 3134:
case 78:
case 520:
case 3152:
case 4053:
case 3623:
case 1504:
case 2660:
case 2714:
case 1551:
case 1729:
case 1571:
case 1891:
case 3749:
case 3052:
case 3072:
case 1618:
case 2789:
case 2272:
case 3034:
case 274:
case 925:
case 927:
case 1442:
case 633:
case 744:
case 253:
case 3841:
case 866:
case 1799:
case 2436:
case 3043:
case 2218:
case 1652:
case 2243:
case 767:
case 2083:
case 3405:
case 1453:
case 1897:
case 1093:
case 1835:
case 3266:
case 2337:
case 2572:
case 2066:
case 832:
case 957:
case 2395:
case 439:
case 0:
case 4058:
case 1380:
case 2744:
case 3464:
case 1708:
case 591:
case 2188:
case 3924:
case 2518:
case 4006:
case 3113:
case 3148:
case 2331:
case 930:
case 163:
case 2491:
case 1869:
case 513:
case 1811:
case 113:
case 1698:
case 1481:
case 2842:
case 2509:
case 984:
case 3648:
case 1761:
case 350:
case 1363:
case 2688:
case 443:
case 3098:
case 335:
case 2523:
case 2359:
case 2379:
case 2298:
case 3128:
case 3458:
case 1767:
case 1817:
case 2873:
case 2853:
case 2057:
case 1013:
case 1994:
case 2435:
case 3551:
case 3571:
case 3504:
case 1422:
case 717:
case 200:
case 742:
case 3009:
case 3821:
case 895:
case 897:
case 649:
case 3265:
case 2065:
case 2598:
case 607:
case 796:
case 3827:
case 3989:
case 1118:
case 1143:
case 3354:
case 3577:
case 3374:
case 1609:
case 1750:
case 2949:
case 3703:
case 298:
case 1775:
case 3310:
case 372:
case 3315:
case 1665:
case 1714:
case 2729:
case 2571:
case 83:
case 98:
case 220:
case 3209:
case 300:
case 3060:
case 1738:
case 2265:
case 627:
case 883:
case 1999:
case 398:
case 4011:
case 3949:
case 160:
case 1513:
case 1346:
case 2557:
case 1548:
case 560:
case 2989:
case 789:
case 3051:
case 941:
case 3004:
case 586:
case 1139:
case 838:
case 1166:
case 3688:
case 1908:
case 1657:
case 2613:
case 3509:
case 2406:
case 2458:
case 1447:
case 3359:
case 3523:
case 2944:
case 1956:
case 235:
case 2560:
case 657:
case 1671:
case 1651:
case 2098:
case 655:
case 3435:
case 682:
case 456:
case 3077:
case 3430:
case 2257:
case 2277:
case 1800:
case 1213:
case 3873:
case 1805:
case 1088:
case 3853:
case 3390:
case 4035:
case 4030:
case 203:
case 2239:
case 1967:
case 3039:
case 323:
case 1157:
case 1427:
case 1177:
case 2113:
case 3316:
case 3518:
case 1919:
case 2583:
case 1961:
case 4091:
case 1228:
case 3331:
case 246:
case 374:
case 3272:
case 3252:
case 2034:
case 3789:
case 781:
case 278:
case 1955:
case 3411:
case 2072:
case 3469:
case 907:
case 1950:
case 1970:
case 3436:
case 748:
case 2841:
case 1482:
case 353:
case 2693:
case 3881:
case 2847:
case 3083:
case 440:
case 3218:
case 2043:
case 877:
case 2283:
case 3929:
case 1160:
case 1528:
case 2400:
case 292:
case 3417:
case 2609:
case 3513:
case 648:
case 2755:
case 2386:
case 2775:
case 3183:
case 2770:
case 360:
case 681:
case 475:
case 1060:
case 996:
case 1223:
case 2962:
case 915:
case 942:
case 100:
case 1209:
case 500:
case 2134:
case 3864:
case 3665:
case 572:
case 3714:
case 3660:
case 1310:
case 172:
case 2623:
case 1315:
case 1497:
case 59:
case 3248:
case 3213:
case 64:
case 19:
case 2994:
case 1077:
case 2048:
case 1057:
case 3956:
case 3976:
case 4021:
case 3651:
case 1298:
case 1359:
case 1379:
case 1523:
case 784:
case 3325:
case 3657:
case 4027:
case 2481:
case 1842:
case 3320:
case 2719:
case 2836:
case 3166:
case 1724:
case 3908:
case 2761:
case 2811:
case 1071:
case 386:
case 3892:
case 3228:
case 2198:
case 1302:
case 730:
case 1331:
case 856:
case 1188:
case 689:
case 4041:
case 3157:
case 3427:
case 3177:
case 291:
case 1543:
case 3345:
case 782:
case 4047:
case 3340:
case 3104:
case 1744:
case 523:
case 2385:
case 2380:
case 3421:
case 1534:
case 3794:
case 1395:
case 1066:
case 1552:
case 1390:
case 3326:
case 3293:
case 2123:
case 2473:
case 1417:
case 2835:
case 3165:
case 2093:
case 2914:
case 1929:
case 2830:
case 1887:
case 2634:
case 483:
case 3878:
case 1243:
case 1218:
case 153:
case 2938:
case 1881:
case 2799:
case 3482:
case 1903:
case 3955:
case 574:
case 3950:
case 3970:
case 2891:
case 727:
case 725:
case 2109:
case 2643:
case 1272:
case 1252:
case 2618:
case 882:
case 1415:
case 3971:
case 2033:
case 3676:
case 3904:
case 1728:
case 2837:
case 1885:
case 855:
case 857:
case 16:
case 932:
case 2694:
case 2816:
case 830:
case 1496:
case 1076:
case 1562:
case 2284:
case 756:
case 30:
case 980:
case 3608:
case 638:
case 3161:
case 258:
case 3119:
case 1988:
case 1294:
case 3699:
case 1391:
case 2138:
case 269:
case 3718:
case 1649:
case 2783:
case 3150:
case 3420:
case 3170:
case 3155:
case 1103:
case 1129:
case 3544:
case 3347:
case 4045:
case 1262:
case 1099:
case 2387:
case 3772:
case 1330:
case 3289:
case 228:
case 2810:
case 1075:
case 1055:
case 995:
case 1437:
case 2480:
case 3723:
case 1238:
case 677:
case 2614:
case 2760:
case 3445:
case 1149:
case 1416:
case 3670:
case 3983:
case 3650:
case 118:
case 2896:
case 151:
case 3832:
case 916:
case 3029:
case 219:
case 3199:
case 202:
case 1431:
case 3874:
case 884:
case 3108:
case 4046:
case 2503:
case 3966:
case 1369:
case 44:
case 1748:
case 2777:
case 1713:
case 3382:
case 3798:
case 1538:
case 3939:
case 521:
case 2879:
case 11:
case 2194:
case 2024:
case 3667:
case 2353:
case 2751:
case 1317:
case 2771:
case 2529:
case 3176:
case 1608:
case 50:
case 1161:
case 3988:
case 3294:
case 1446:
case 2094:
case 1589:
case 10:
case 2948:
case 1977:
case 2401:
case 3076:
case 3056:
case 173:
case 1244:
case 3496:
case 573:
case 2208:
case 2840:
case 2845:
case 3885:
case 1233:
case 1167:
case 484:
case 1:
case 1656:
case 3594:
case 3397:
case 524:
case 2826:
case 1772:
case 1289:
case 108:
case 124:
case 3262:
case 3099:
case 245:
case 3479:
case 3459:
case 3129:
case 2299:
case 1347:
case 2378:
case 1965:
case 3649:
case 190:
case 1170:
case 1155:
case 1425:
case 368:
case 590:
case 1341:
case 3793:
case 848:
case 1533:
case 3391:
case 1868:
case 1699:
case 4031:
case 876:
case 931:
case 2312:
case 1199:
case 1854:
case 2846:
case 522:
case 2993:
case 3886:
case 122:
case 1029:
case 1801:
case 2014:
case 2189:
case 351:
case 214:
case 3416:
case 1670:
case 1650:
case 2519:
case 1655:
case 1327:
case 2038:
case 425:
case 4059:
case 1440:
case 427:
case 2567:
case 73:
case 3055:
case 2250:
case 4015:
case 3514:
case 3317:
case 552:
case 2300:
case 1667:
case 321:
case 3061:
case 187:
case 31:
case 201:
case 2219:
case 585:
case 430:
case 1939:
case 889:
case 457:
case 3863:
case 1382:
case 2267:
case 3538:
case 3369:
case 3748:
case 2468:
case 3713:
case 2392:
case 1661:
case 1619:
case 2575:
case 3928:
case 3144:
case 4007:
case 1771:
case 1529:
case 3305:
case 301:
case 1194:
case 21:
case 2061:
case 1024:
case 221:
case 193:
case 593:
case 3825:
case 734:
case 2067:
case 3820:
case 643:
case 336:
case 4074:
case 561:
case 3550:
case 3392:
case 3570:
case 2713:
case 3468:
case 2748:
case 3014:
case 2886:
case 519:
case 2402:
case 2214:
case 1229:
case 1896:
case 3519:
case 314:
case 631:
case 570:
case 1918:
case 1943:
case 1485:
case 3364:
case 3567:
case 407:
case 2238:
case 1480:
case 3038:
case 1760:
case 2629:
case 1614:
case 1934:
case 1810:
case 1203:
case 2495:
case 2490:
case 815:
case 817:
case 606:
case 2070:
case 797:
case 2437:
case 2050:
case 2075:
case 2055:
case 1972:
case 528:
case 3826:
case 1089:
case 2397:
case 1249:
case 865:
case 3378:
case 3358:
case 3576:
case 345:
case 229:
case 312:
case 347:
case 1387:
case 1584:
case 926:
case 433:
case 2262:
case 364:
case 3689:
case 1463:
case 3306:
case 1381:
case 2649:
case 569:
case 3312:
case 844:
case 169:
case 2391:
case 3948:
case 52:
case 3094:
case 3474:
case 2988:
case 158:
case 3454:
case 3124:
case 2294:
case 1831:
case 780:
case 2496:
case 3256:
case 3599:
case 1739:
case 1998:
case 259:
case 1284:
case 3633:
case 2056:
case 1044:
case 2008:
case 732:
case 441:
case 3840:
case 1322:
case 3208:
case 1033:
case 1895:
case 2410:
case 2415:
case 1837:
case 2684:
case 536:
case 4086:
case 3757:
case 3777:
case 361:
case 136:
case 1555:
case 1624:
case 1788:
case 1575:
case 2619:
case 2661:
case 1550:
case 2108:
case 1392:
case 841:
case 3342:
case 938:
case 2798:
case 501:
case 287:
case 285:
case 3024:
case 2224:
case 3859:
case 1144:
case 2156:
case 3771:
case 3373:
case 1928:
case 3704:
case 3972:
case 1255:
case 3815:
case 1250:
case 444:
case 562:
case 3765:
case 2445:
case 3760:
case 3485:
case 162:
case 2321:
case 2723:
case 3480:
case 2709:
case 1189:
case 3943:
case 514:
case 2675:
case 2983:
case 2670:
case 370:
case 2650:
case 666:
case 1561:
case 2874:
case 2199:
case 3229:
case 222:
case 2029:
case 1014:
case 983:
case 3638:
case 3162:
case 3138:
case 2533:
case 3662:
case 442:
case 2699:
case 2425:
case 2175:
case 2420:
case 290:
case 3783:
case 2170:
case 616:
case 807:
case 164:
case 805:
case 3909:
case 1689:
case 3463:
case 2743:
case 145:
case 112:
case 4085:
case 512:
case 547:
case 1062:
case 1378:
case 2544:
case 1358:
case 1576:
case 706:
case 2960:
case 109:
case 695:
case 35:
case 2049:
case 975:
case 977:
case 208:
case 3837:
case 2167:
case 1644:
case 2656:
case 3694:
case 3998:
case 3284:
case 2244:
case 1276:
case 2084:
case 3739:
case 3816:
case 2446:
case 3766:
case 3802:
case 32:
case 2608:
case 1401:
case 743:
case 2957:
case 1948:
case 20:
case 1094:
case 2589:
case 2186:
case 3383:
case 3781:
case 46:
case 1862:
case 3419:
case 3146:
case 3461:
case 2741:
case 2343:
case 1196:
case 288:
case 950:
case 384:
case 771:
case 1026:
case 2068:
case 3787:
case 3626:
case 3921:
case 1115:
case 887:
case 1585:
case 1758:
case 3467:
case 2747:
case 1637:
case 3722:
case 3844:
case 1695:
case 1690:
case 2216:
case 3640:
case 2414:
case 1179:
case 920:
case 1159:
case 2973:
case 2680:
case 2237:
case 3090:
case 3833:
case 2295:
case 1403:
case 1911:
case 3475:
case 3120:
case 2290:
case 3450:
case 3037:
case 1969:
case 233:
case 1936:
case 429:
case 653:
case 760:
case 1285:
case 3339:
case 249:
case 327:
case 890:
case 946:
case 181:
case 2462:
case 978:
case 2398:
case 2782:
case 2279:
case 207:
case 205:
case 2259:
case 3499:
case 4075:
case 4055:
case 3377:
case 3357:
case 3625:
case 4070:
case 1586:
case 548:
case 779:
case 3532:
case 698:
case 2663:
case 1792:
case 2185:
case 3371:
case 1705:
case 2180:
case 3304:
case 3140:
case 1659:
case 672:
case 1679:
case 1195:
case 1190:
case 1020:
case 1137:
case 1025:
case 418:
case 2922:
case 4067:
case 3365:
case 1484:
case 357:
case 3096:
case 2987:
case 3456:
case 2296:
case 2721:
case 3274:
case 2494:
case 3254:
case 382:
case 8:
case 54:
case 2054:
case 1046:
case 3232:
case 1696:
case 80:
case 2210:
case 2803:
case 1991:
case 2215:
case 854:
case 3207:
case 2309:
case 3408:
case 2727:
case 2686:
case 1563:
case 4084:
case 3585:
case 3758:
case 1467:
case 3778:
case 81:
case 79:
case 1787:
case 2545:
case 1626:
case 3110:
case 1921:
case 473:
case 40:
case 1268:
case 3712:
case 4:
case 1889:
case 2174:
case 2154:
case 1461:
case 2899:
case 2101:
case 389:
case 3706:
case 3285:
case 3045:
case 3280:
case 1339:
case 2080:
case 3602:
case 851:
case 1982:
case 408:
case 3403:
case 1455:
case 1475:
case 1120:
case 424:
case 1470:
case 3616:
case 1366:
case 1568:
case 1090:
case 2900:
case 217:
case 1031:
case 1002:
case 1645:
case 1640:
case 3179:
case 3429:
case 490:
case 3637:
case 1722:
case 3020:
case 3137:
case 2225:
case 2220:
case 829:
case 422:
case 3659:
case 3679:
case 265:
case 1351:
case 3705:
case 1753:
case 1773:
case 753:
case 3388:
case 376:
case 1501:
case 660:
case 1532:
case 3792:
case 1377:
case 348:
case 1574:
case 2711:
case 1554:
case 3116:
case 525:
case 2819:
case 2736:
case 1499:
case 1059:
case 774:
case 1742:
case 3838:
case 2906:
case 130:
case 2632:
case 1646:
case 671:
case 2674:
case 1941:
case 1408:
case 2520:
case 3696:
case 2875:
case 2850:
case 452:
case 686:
case 1010:
case 3997:
case 3046:
case 1232:
case 2246:
case 3935:
case 34:
case 3814:
case 3615:
case 2607:
case 2958:
case 1365:
case 155:
case 3484:
case 157:
case 1096:
case 3520:
case 1309:
case 3674:
case 2838:
case 3168:
case 1686:
case 3912:
case 613:
case 3850:
case 1215:
case 1803:
case 1210:
case 2930:
case 461:
case 24:
case 3246:
case 1032:
case 1494:
case 1054:
case 1074:
case 2286:
case 3978:
case 493:
case 2610:
case 2764:
case 77:
case 1296:
case 845:
case 847:
case 3225:
case 2137:
case 2020:
case 809:
case 1180:
case 2705:
case 402:
case 365:
case 2659:
case 2679:
case 419:
case 3769:
case 3348:
case 248:
case 3711:
case 3313:
case 2586:
case 2388:
case 344:
case 505:
case 746:
case 149:
case 107:
case 864:
case 105:
case 3861:
case 2131:
case 1782:
case 1596:
case 2102:
case 3736:
case 778:
case 3085:
case 3808:
case 133:
case 2936:
case 1942:
case 2280:
case 2045:
case 794:
case 2040:
case 1438:
case 4089:
case 428:
case 3992:
case 1163:
case 404:
case 1237:
case 396:
case 2969:
case 2616:
case 1290:
case 2403:
case 1295:
case 2911:
case 720:
case 2429:
case 469:
case 1231:
case 1202:
case 1953:
case 58:
case 2637:
case 3856:
case 2110:
case 4044:
case 3964:
case 3545:
case 2580:
case 2758:
case 2585:
case 2778:
case 1747:
case 42:
case 3797:
case 1334:
case 1537:
case 1372:
case 3730:
case 737:
case 3735:
case 1595:
case 663:
case 1531:
case 3393:
case 750:
case 2196:
case 4033:
case 2712:
case 3132:
case 2862:
case 141:
case 986:
case 1186:
case 3668:
case 289:
case 3899:
case 1343:
case 1516:
case 1741:
case 3424:
case 3296:
case 2456:
case 1444:
case 3987:
case 2096:
case 2365:
case 1958:
case 1978:
case 3054:
case 3074:
case 436:
case 3001:
case 1086:
case 2254:
case 3494:
case 1870:
case 1875:
case 1855:
case 3210:
case 1433:
case 2010:
case 2015:
case 3007:
case 3981:
case 1632:
case 401:
case 3727:
case 763:
case 650:
case 1520:
case 2408:
case 3309:
case 1525:
case 2646:
case 1654:
case 307:
case 2499:
case 3596:
case 3398:
case 2824:
case 2742:
case 4038:
case 349:
case 2501:
case 694:
case 2574:
case 1546:
case 1711:
case 2625:
case 2357:
case 544:
case 3515:
case 4014:
case 2145:
case 567:
case 3510:
case 2773:
case 2371:
case 2351:
case 3185:
case 167:
case 165:
case 1867:
case 620:
case 414:
case 1225:
case 1063:
case 1876:
case 2844:
case 2722:
case 1905:
case 3680:
case 2002:
case 2031:
case 115:
case 117:
case 900:
case 3414:
case 2640:
case 1526:
case 38:
case 1328:
case 3202:
case 542:
case 515:
case 517:
case 2450:
case 3290:
case 2470:
case 2455:
case 3295:
case 1992:
case 3163:
case 678:
case 799:
case 3237:
case 2366:
case 2339:
case 3438:
case 409:
case 2982:
case 447:
case 1245:
case 333:
case 1080:
case 1899:
case 3343:
case 3318:
case 3516:
case 3741:
case 1154:
case 341:
case 2383:
case 1668:
case 713:
case 3186:
case 2889:
case 1393:
case 3849:
case 388:
case 861:
case 3502:
case 3352:
case 1730:
case 4094:
case 1735:
case 67:
case 1797:
case 2268:
case 3334:
case 3537:
case 2467:
case 603:
case 1107:
case 1540:
case 2626:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1750640401/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,0,0,1,0,1,1,1,0,1,1,0,1,0,0,1,0,0,1,1,1,0,0,1,0,0,0,0,0,1,1,1,0,1,1,0,0,1,0,1,0,1,0,1,0,1,1,0,1,1,0,1,1,1,0,0,1,1,1,0,0,0,0,1,1,0,1,0,0,0,0,0,1,0,0,0,1,1,1,1,1,0,1,0,0,0,0,0,0,0,1,0,0,1,0,1,0,1,0,1,0,0,0,0,1,1,1,1,1,0,0,1,1,0,1,0,1,1,0,0,0,1,0,1,0,0,0,0,0,1,1,0,1,0,0,1,1,0,1,1,1,0,1,0,1,0,0,0,1,0,1,0,1,0,1,0,1,1,0,1,0,1,1,1,1,1,1,0,1,0,0,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,1,1,1,1,0,0,0,0,1,1,1,1,0,1,1,1,1,0,0,0,0,0,1,0,1,1,0,1,1,1,1,0,0,0,0,0,1,1,0,0,0,1,0,1,0,0,0,0,1,0,0,0,0,1,1,0,1,1,0,0,0,1,0,0,1,0,1,1,0,0,0,0,0,1,1,0,0,1,0,0,0,0,1,1,0,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,1,1,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,1,0,0,0,0,0,0,1,0,1,0,0,1,1,0,0,0,1,1,1,0,1,1,0,0,0,0,1,0,0,1,1,0,1,1,1,1,1,0,1,0,0,0,1,0,0,1,1,0,0,1,1,0,0,1,0,1,0,1,0,1,0,1,1,0,0,0,0,1,1,1,0,1,0,1,1,0,0,0,0,0,1,1,1,1,0,0,1,1,1,1,0,0,1,1,1,1,0,0,1,1,0,1,0,1,1,1,0,1,1,1,1,0,1,1,1,1,0,1,1,1,0,1,1,0,1,1,1,1,1,1,0,0,1,0,0,1,0,1,1,0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,0,1,0,0,0,0,1,1,0,1,0,0,0,1,1,0,1,1,0,0,1,0,0,1,1,0,1,0,1,1,0,0,0,0,0,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,0,1,0,0,1,0,0,1,0,1,1,0,1,1,0,1,0,1,0,0,1,1,0,0,0,1,0,0,0,1,0,0,0,1,1,1,0,0,0,1,1,0,1,1,0,1,1,1,1,0,0,1,0,1,0,0,1,0,1,1,0,0,0,1,1,0,1,0,1,0,1,0,0,0,0,0,1,0,0,1,1,0,0,0,0,0,1,0,0,1,1,0,1,1,1,0,0,0,0,0,1,1,1,0,1,0,1,0,0,0,0,1,0,0,0,0,1,1,1,0,1,1,1,1,0,1,1,1,1,0,1,1,0,1,0,0,1,1,0,1,0,1,1,0,1,1,0,0,0,0,1,1,0,0,1,1,0,0,0,1,1,0,1,1,0,0,1,1,1,1,0,1,0,0,0,1,0,1,1,1,0,0,1,0,0,1,1,0,0,0,1,0,0,1,0,0,0,0,1,0,1,0,0,1,0,1,0,1,0,1,1,0,0,0,1,1,1,1,1,1,0,1,1,1,1,1,1,1,0,1,0,0,0,1,0,1,1,0,0,0,1,1,1,0,1,0,1,1,0,0,0,1,1,1,1,1,0,1,1,0,0,0,1,1,0,0,0,1,0,1,1,0,1,0,0,0,1,0,1,0,1,0,1,1,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1,0,1,0,0,1,0,0,1,0,0,1,0,0,1,1,0,1,1,0,1,1,0,1,1,1,1,1,0,0,1,1,0,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,1,0,1,1,0,1,1,1,0,0,0,1,0,1,1,1,1,1,0,0,1,0,0,1,1,1,0,1,0,0,0,1,1,0,1,1,1,0,0,0,1,1,1,1,1,0,1,1,1,0,0,0,1,0,1,0,0,1,1,0,0,0,1,0,1,0,1,1,0,0,0,0,0,1,0,0,0,1,1,0,1,0,0,0,1,0,1,0,0,0,0,1,1,1,1,0,1,0,0,1,1,0,1,0,0,0,0,0,0,1,0,1,1,0,0,0,1,0,1,0,0,0,1,0,0,1,1,0,0,1,1,0,0,1,1,0,1,0,1,1,1,1,1,0,0,1,0,1,1,1,1,1,0,0,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,1,1,0,1,0,1,1,0,1,1,1,0,1,0,0,0,0,1,1,0,1,1,1,1,1,0,1,0,0,0,0,0,1,0,1,1,1,0,0,1,1,0,1,1,1,1,1,0,0,1,0,1,1,1,0,0,0,0,1,1,0,1,0,0,1,0,1,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,1,1,0,1,0,1,0,1,1,0,0,1,1,1,0,0,0,0,1,1,0,1,1,1,1,1,0,1,0,0,1,1,0,1,1,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,1,0,1,1,1,0,1,0,1,1,1,0,0,1,0,0,1,1,0,1,1,0,0,1,1,0,1,1,0,1,0,1,1,0,0,0,0,1,0,1,0,0,1,1,0,1,1,1,0,1,1,1,1,1,0,1,0,1,1,1,0,1,0,1,1,0,1,0,0,1,0,0,1,0,1,0,1,0,0,1,0,0,1,0,0,1,1,1,0,0,1,0,0,0,0,1,1,1,1,1,0,0,0,1,1,0,1,0,1,1,1,0,1,0,0,1,1,1,0,0,0,0,0,1,1,0,0,0,0,1,0,1,0,1,0,0,1,0,1,0,0,1,1,1,1,1,0,0,1,0,0,0,0,1,0,1,0,1,0,0,1,1,0,1,1,1,0,0,1,1,0,0,1,1,0,0,0,1,0,1,1,1,0,1,1,0,1,0,1,1,0,1,1,1,1,1,1,0,0,0,0,1,0,1,1,1,1,1,1,1,0,0,0,0,0,1,0,1,1,1,0,0,1,1,0,0,0,0,0,1,1,1,0,0,0,0,1,0,0,1,0,1,1,0,0,1,0,1,0,0,0,1,1,1,1,0,1,1,1,0,1,1,0,0,0,0,0,1,0,1,0,0,1,0,1,1,0,1,0,0,1,1,0,0,1,1,1,0,0,1,0,0,1,0,1,1,1,0,1,1,0,0,0,0,0,0,0,0,1,0,1,1,1,1,0,1,0,0,1,1,1,0,0,0,0,0,0,1,0,0,1,1,0,0,1,0,0,1,0,1,1,0,1,1,1,1,1,1,1,0,1,1,1,1,1,0,0,1,0,0,1,1,1,0,1,1,1,0,1,1,0,0,0,0,0,1,1,1,1,0,1,0,1,0,0,1,0,0,1,1,1,1,0,0,0,0,1,1,1,1,1,1,0,1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,1,1,0,0,1,1,1,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,0,1,0,0,1,0,1,0,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,0,1,0,0,0,1,0,1,1,1,1,1,0,0,0,0,0,0,1,1,0,1,1,0,0,0,1,0,0,1,1,0,1,0,0,1,1,0,1,1,0,0,1,0,0,1,0,0,1,0,0,1,0,1,1,1,1,0,0,0,0,0,1,0,1,0,1,0,1,1,1,0,0,0,0,1,0,1,1,1,1,1,1,0,1,1,0,1,1,0,1,0,0,1,1,0,0,0,1,0,1,1,0,0,0,0,0,1,0,0,0,1,1,1,0,1,0,0,0,1,1,0,1,0,1,1,0,1,1,0,1,0,1,0,0,1,0,1,0,1,1,1,0,1,0,1,0,0,0,1,1,1,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,1,0,1,1,1,0,0,0,0,0,0,0,1,1,0,1,1,0,1,0,0,1,0,1,0,0,0,1,1,1,1,1,0,1,0,0,1,1,0,0,0,0,1,0,1,0,1,0,1,1,1,0,1,0,0,0,1,1,1,0,1,0,0,0,1,0,1,0,1,1,0,1,1,0,0,0,0,1,0,1,1,1,1,0,0,0,1,1,0,1,1,0,0,1,0,1,0,1,1,0,1,0,1,1,1,1,1,0,0,1,0,1,0,0,1,0,1,1,0,1,1,0,1,0,1,0,1,0,1,0,1,1,0,1,0,0,0,0,1,1,0,0,0,1,0,0,1,0,0,1,1,0,1,1,0,1,0,0,0,1,1,0,0,1,0,0,1,0,0,1,0,1,0,0,0,1,1,0,1,0,0,1,1,1,0,1,0,0,0,0,1,0,1,0,1,1,1,1,0,1,0,1,0,1,1,0,1,0,1,1,1,1,0,0,0,1,1,1,1,0,0,0,1,0,0,0,1,1,1,1,1,1,0,1,0,0,1,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,1,0,1,1,0,1,0,1,0,1,1,1,0,0,1,1,0,1,1,1,1,1,1,0,0,0,1,0,0,0,0,1,1,0,0,0,1,0,0,0,1,0,0,1,1,1,1,1,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,1,0,1,1,0,0,0,0,0,0,0,1,0,1,0,0,1,1,0,0,1,1,0,0,0,0,1,0,1,0,0,1,1,1,1,1,0,1,0,0,1,0,1,0,1,1,1,0,0,0,0,0,0,0,1,0,1,0,0,1,1,1,1,0,1,1,1,0,1,0,1,1,0,1,1,0,0,0,0,0,0,0,1,1,1,1,0,0,1,1,1,0,1,1,0,0,1,0,0,0,1,0,0,1,1,1,0,0,1,0,1,1,0,1,1,1,0,0,1,0,0,0,0,1,1,1,1,0,1,1,1,0,1,0,0,0,1,0,0,0,1,1,1,0,1,1,1,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,1,0,0,1,0,0,0,0,1,0,1,0,1,0,0,0,1,1,1,0,0,0,1,1,0,1,0,0,0,1,1,0,1,0,1,1,1,0,1,0,1,1,0,0,1,1,0,0,0,1,1,0,0,0,0,1,0,1,1,1,0,0,1,0,1,1,1,1,1,0,1,1,0,0,1,0,1,1,1,1,1,1,1,0,0,1,0,1,1,1,0,0,1,1,1,0,0,0,0,1,1,0,1,0,1,0,0,1,1,0,0,0,0,1,1,1,1,0,1,0,0,0,1,0,1,1,0,0,0,1,0,0,0,0,1,1,0,1,0,1,0,1,0,0,1,1,1,1,0,1,0,1,1,0,0,0,1,0,0,1,1,1,1,0,0,0,0,0,0,1,1,0,0,1,1,1,0,1,1,0,1,0,1,0,1,1,0,0,1,0,0,1,0,0,0,0,0,1,1,1,0,1,1,0,0,0,0,1,1,1,0,0,1,0,1,0,0,0,0,0,0,1,0,1,1,0,1,0,0,0,0,0,1,0,0,0,1,1,0,1,0,0,0,1,0,0,1,0,0,0,1,1,0,1,1,0,0,1,0,1,0,0,1,0,1,1,0,0,1,0,0,1,1,0,0,0,0,1,0,1,0,0,0,1,0,1,1,1,1,1,0,1,1,1,0,1,1,1,1,0,0,0,1,0,1,1,0,0,1,0,0,1,0,1,1,1,1,0,1,1,0,0,1,0,0,1,0,0,1,1,0,0,0,0,0,1,0,0,1,1,1,0,1,1,0,0,0,0,1,1,0,0,1,1,1,0,1,0,1,1,0,0,0,1,0,1,0,1,0,0,1,0,1,1,0,0,0,0,1,0,0,0,0,0,1,0,1,0,1,0,1,1,1,1,1,0,0,0,1,1,1,1,1,0,0,0,1,0,1,0,1,0,0,0,0,1,0,0,0,0,1,1,1,1,0,0,1,1,0,0,1,0,0,0,1,0,0,1,1,1,1,0,0,1,0,0,0,1,0,1,1,0,1,0,1,0,1,1,0,0,0,1,1,0,0,1,0,0,1,1,0,0,0,0,0,1,0,1,1,1,0,0,1,0,0,1,0,0,0,1,1,0,0,0,0,1,0,1,1,0,0,0,0,1,0,1,0,0,0,1,0,0,0,1,1,1,1,1,0,1,1,1,1,1,1,1,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,0,1,1,1,0,0,0,0,0,0,1,0,1,1,0,1,1,1,0,0,1,0,0,1,1,0,1,0,0,0,1,1,0,0,0,1,0,0,1,0,0,0,0,1,0,0,1,0,0,1,1,0,0,0,1,1,1,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,1,1,1,0,0,0,0,1,0,1,1,1,1,1,1,0,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,0,1,1,0,1,1,1,1,1,0,0,0,1,1,1,1,0,0,0,1,1,0,0,1,0,0,1,0,1,0,0,1,1,1,0,0,1,0,0,1,0,0,0,1,0,0,1,1,1,1,0,0,0,1,1,0,1,1,1,0,1,0,1,0,1,1,1,0,0,0,1,1,1,1,1,1,0,1,0,1,1,0,0,1,0,0,0,0,0,0,0,1,1,1,0,1,1,0,0,0,0,0,1,0,1,0,1,0,0,1,1,0,0,1,0,1,1,1,1,1,0,0,0,1,0,1,0,1,0,1,1,0,1,0,0,1,0,1,1,1,0,1,0,1,0,0,1,1,1,0,0,1,0,1,1,0,1,1,0,1,0,0,1,1,0,1,0,1,0,1,0,1,0,0,1,0,1,0,0,0,1,1,1,0,1,1,0,1,0,1,0,0,1,0,0,1,1,1,1,0,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,1,1,1,1,1,0,1,0,0,0,0,1,0,0,1,0,0,0,1,0,0,1,1,0,0,1,0,0,1,1,1,0,0,0,1,0,0,0,0,1,1,1,0,0,0,1,1,1,0,1,0,1,0,0,0,1,0,1,1,1,0,0,1,0,0,1,1,1,0,0,0,1,0,1,0,1,0,1,1,0,1,1,1,1,0,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,0,1,1,1,0,1,1,0,1,1,1,1,0,1,0,0,0,1,1,1,0,0,1,0,1,0,0,1,0,0,0,0,1,1,0,1,1,1,1,0,1,1,1,1,0,1,0,1,0,1,1,1,1,0,1,0,1,1,1,0,0,0,1,0,1,0,1,1,1,0,1,1,0,1,0,1,1,1,1,1,0,1,1,1,1,1,1,1,0,0,1,1,0,0,0,0,1,1,1,0,0,1,1,0,1,0,1,1,0,1,1,1,1,1,1,0,0,1,0,0,1,1,1,1,0,0,0,0,1,1,0,1,0,0,0,1,0,0,1,0,0,0,0,1,1,1,1,1,0,1,1,1,1,0,1,0,1,1,0,1,1,1,1,0,0,1,1,1,1,0,1,0,1,1,1,1,0,1,1,0,1,1,0,0,0,0,0,1,0,1,0,0,1,0,0,1,0,1,1,1,0,0,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,0,1,0,0,1,0,1,1,0,0,0,1,0,1,1,0,1,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,0,0,0,0,1,1,1,0,0,0,0,0,0,1,0,1,1,0,0,0,0,0,1,0,1,1,0,1,1,0,1,0,0,1,1,0,1,0,0,0,1,0,0,1,1,0,0,0,0,1,1,1,0,1,1,1,0,0,1,0,0,1,1,0,0,1,1,0,1,0,1,0,0,0,0,1,1,1,1,1,1,1,0,0,0,1,1,1,1,0,1,0,0,1,0,1,1,0,1,0,1,0,1,0,1,0,0,1,1,0,0,0,0,0,0,0,1,1,0,1,0,0,1,0,1,1,1,1,0,1,1,1,1,1,1,0,1,0,0,1,1,1,1,0,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,0,1,1,0,0,1,0,1,0,0,0,1,0,0,1,1,0,0,0,0,1,1,0,1,1,1,1,1,0,1,0,1,1,0,0,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,0,1,0,1,0,1,1,0,1,1,1,0,1,1,1,1,0,0,1,0,1,0,0,0,1,1,0,0,0,0,1,1,1,1,0,0,1,1,0,1,0,1,1,1,1,0,1,0,1,1,0,0,1,1,1,1,1,1,0,0,1,0,0,0,0,1,1,1,1,1,0,0,1,0,0,1,0,1,0,1,1,0,0,0,0,1,0,0,0,1,1,0,0,0,1,0,0,1,0,0,0,1,1,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,1,1,1,1,0,1,0,0,1,0,0,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,0,0,1,0,1,0,1,0,0,0,1,0,1,0,0,1,1,1,0,0,0,0,1,1,0,0,1,0,0,1,1,1,0,1,0,0,0,1,1,1,0,0,0,1,0,1,0,1,1,0,1,0,1,0,1,1,1,0,0,1,0,0,1,0,1,1,0,0,0,0,0,0,0,1,1,0,1,0,1,0,1,1,1,0,0,1,0,0,1,0,1,0,0,0,1,0,0,1,1,0,1,0,1,0,0,1,0,0,1,0,0,1,1,1,1,1,0,0,0,1,1,0,1,0,0,1,1,1,0,0,0,0,1,1,1,0,0,1,1,1,0,1,1,0,1,0,0,0,1,0,0,1,1,1,0,0,1,0,1,0,0,1,0,];
var gg_b = "1750640401/";

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
