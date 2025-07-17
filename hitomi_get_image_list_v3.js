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
case 819:
case 2967:
case 1748:
case 2500:
case 2691:
case 3754:
case 1532:
case 458:
case 658:
case 1008:
case 3340:
case 827:
case 3682:
case 259:
case 3652:
case 3603:
case 667:
case 1410:
case 2695:
case 1923:
case 1494:
case 644:
case 2120:
case 3156:
case 924:
case 1453:
case 3777:
case 1483:
case 2701:
case 3356:
case 128:
case 3231:
case 3936:
case 2430:
case 1391:
case 1402:
case 1516:
case 125:
case 1620:
case 1871:
case 1395:
case 3567:
case 2998:
case 1809:
case 1074:
case 3021:
case 3831:
case 4022:
case 2972:
case 1543:
case 35:
case 2506:
case 541:
case 2081:
case 2854:
case 3467:
case 1122:
case 2884:
case 2051:
case 3633:
case 2368:
case 1443:
case 207:
case 3146:
case 692:
case 925:
case 34:
case 1673:
case 1965:
case 3217:
case 2168:
case 1583:
case 1715:
case 1266:
case 1697:
case 184:
case 1553:
case 1961:
case 2326:
case 2085:
case 3113:
case 2819:
case 336:
case 586:
case 3817:
case 3313:
case 2055:
case 2530:
case 2126:
case 794:
case 1970:
case 2735:
case 3380:
case 249:
case 1668:
case 0:
case 3801:
case 2018:
case 972:
case 730:
case 1594:
case 3744:
case 562:
case 1839:
case 654:
case 454:
case 2293:
case 1788:
case 1510:
case 301:
case 1626:
case 648:
case 3279:
case 448:
case 3906:
case 3498:
case 1239:
case 1047:
case 50:
case 896:
case 2724:
case 752:
case 2893:
case 3642:
case 3255:
case 517:
case 3497:
case 2540:
case 537:
case 3285:
case 2499:
case 735:
case 3300:
case 2623:
case 3851:
case 4065:
case 3054:
case 3100:
case 738:
case 715:
case 102:
case 3062:
case 3520:
case 3136:
case 2878:
case 4061:
case 3855:
case 3885:
case 1667:
case 327:
case 3019:
case 1991:
case 1176:
case 319:
case 2892:
case 339:
case 2480:
case 589:
case 3986:
case 3281:
case 1037:
case 1698:
case 85:
case 4070:
case 2920:
case 2586:
case 1564:
case 3077:
case 1442:
case 2079:
case 2263:
case 2804:
case 3725:
case 2556:
case 1672:
case 653:
case 2446:
case 453:
case 1582:
case 1503:
case 2745:
case 3112:
case 281:
case 2204:
case 3568:
case 816:
case 1452:
case 277:
case 443:
case 643:
case 2546:
case 1890:
case 3999:
case 3306:
case 3694:
case 1259:
case 2781:
case 3610:
case 2755:
case 3526:
case 3130:
case 3778:
case 1214:
case 256:
case 2973:
case 1859:
case 1170:
case 1370:
case 1464:
case 3980:
case 3792:
case 396:
case 734:
case 2234:
case 2926:
case 1058:
case 714:
case 3044:
case 1729:
case 1361:
case 3704:
case 450:
case 2550:
case 2035:
case 2834:
case 3683:
case 2599:
case 1365:
case 2821:
case 2968:
case 1747:
case 2670:
case 3653:
case 3845:
case 96:
case 3763:
case 1007:
case 1922:
case 3844:
case 1739:
case 1523:
case 1888:
case 3041:
case 83:
case 2835:
case 1364:
case 661:
case 2156:
case 1207:
case 982:
case 2186:
case 3701:
case 1164:
case 881:
case 1640:
case 633:
case 2021:
case 433:
case 3244:
case 3705:
case 25:
case 2793:
case 1182:
case 1352:
case 1807:
case 698:
case 1303:
case 821:
case 695:
case 922:
case 3045:
case 642:
case 2140:
case 1090:
case 1811:
case 1465:
case 2572:
case 2340:
case 3691:
case 755:
case 591:
case 2598:
case 1215:
case 2969:
case 1766:
case 2603:
case 3320:
case 2719:
case 100:
case 3717:
case 3120:
case 576:
case 744:
case 966:
case 1089:
case 4033:
case 1461:
case 1576:
case 359:
case 754:
case 1775:
case 2744:
case 1133:
case 1902:
case 2205:
case 1837:
case 1953:
case 2004:
case 2150:
case 2350:
case 3018:
case 3373:
case 900:
case 3197:
case 547:
case 1565:
case 2642:
case 175:
case 1237:
case 452:
case 748:
case 1771:
case 2279:
case 1613:
case 166:
case 3277:
case 3400:
case 2906:
case 24:
case 2146:
case 3219:
case 3168:
case 1650:
case 3262:
case 2346:
case 4082:
case 103:
case 3506:
case 3412:
case 2633:
case 3469:
case 216:
case 1910:
case 494:
case 877:
case 2313:
case 3055:
case 2817:
case 1423:
case 1699:
case 3254:
case 1142:
case 1248:
case 4002:
case 2077:
case 3586:
case 3001:
case 3556:
case 321:
case 1591:
case 1116:
case 4083:
case 1600:
case 1039:
case 1316:
case 4053:
case 1829:
case 52:
case 1247:
case 2632:
case 2369:
case 3745:
case 2112:
case 1422:
case 531:
case 2312:
case 3367:
case 2093:
case 1143:
case 2734:
case 3005:
case 1847:
case 58:
case 1343:
case 2468:
case 2851:
case 1066:
case 1132:
case 618:
case 635:
case 3623:
case 3398:
case 859:
case 3198:
case 438:
case 415:
case 615:
case 1332:
case 1714:
case 2255:
case 2497:
case 3172:
case 1952:
case 3499:
case 287:
case 3372:
case 2285:
case 493:
case 693:
case 2956:
case 740:
case 3450:
case 219:
case 104:
case 4094:
case 2281:
case 4010:
case 3892:
case 2643:
case 5:
case 1669:
case 3878:
case 89:
case 3017:
case 506:
case 2885:
case 905:
case 1942:
case 2573:
case 3825:
case 2704:
case 634:
case 3234:
case 2913:
case 1394:
case 1606:
case 414:
case 614:
case 2420:
case 1075:
case 849:
case 1630:
case 2763:
case 3599:
case 3024:
case 1749:
case 2683:
case 3440:
case 108:
case 3031:
case 732:
case 2653:
case 3670:
case 4032:
case 1060:
case 3751:
case 1287:
case 2694:
case 1495:
case 1257:
case 2106:
case 3661:
case 2568:
case 3997:
case 1808:
case 1796:
case 3546:
case 743:
case 3665:
case 1887:
case 3456:
case 490:
case 2950:
case 1383:
case 1153:
case 1353:
case 2980:
case 1857:
case 969:
case 3513:
case 1491:
case 1102:
case 3086:
case 864:
case 1091:
case 847:
case 3962:
case 4038:
case 484:
case 2145:
case 192:
case 3712:
case 2345:
case 3769:
case 3984:
case 1460:
case 703:
case 624:
case 3121:
case 2806:
case 1409:
case 1641:
case 2798:
case 1283:
case 809:
case 577:
case 148:
case 3431:
case 1108:
case 1202:
case 3993:
case 3424:
case 1187:
case 1357:
case 4029:
case 3435:
case 1528:
case 1853:
case 1475:
case 3517:
case 2444:
case 1645:
case 1937:
case 2519:
case 3696:
case 2212:
case 3304:
case 2118:
case 3104:
case 2073:
case 2269:
case 1761:
case 3050:
case 1428:
case 700:
case 144:
case 363:
case 945:
case 4057:
case 2419:
case 1243:
case 3417:
case 774:
case 546:
case 2462:
case 1651:
case 948:
case 2544:
case 3867:
case 331:
case 2812:
case 1509:
case 4008:
case 3363:
case 155:
case 1347:
case 3524:
case 53:
case 2638:
case 2151:
case 2629:
case 1832:
case 865:
case 1560:
case 1907:
case 1022:
case 3898:
case 685:
case 2800:
case 3627:
case 2351:
case 2068:
case 3405:
case 4074:
case 3479:
case 1770:
case 2935:
case 891:
case 625:
case 992:
case 3192:
case 2026:
case 1958:
case 2155:
case 3272:
case 1439:
case 2836:
case 306:
case 3013:
case 3378:
case 1988:
case 1337:
case 1833:
case 2478:
case 3485:
case 3541:
case 1791:
case 262:
case 2648:
case 3756:
case 680:
case 1987:
case 2880:
case 549:
case 2492:
case 2101:
case 2521:
case 2305:
case 2534:
case 3193:
case 2899:
case 20:
case 2105:
case 1908:
case 420:
case 3069:
case 3273:
case 3451:
case 143:
case 3545:
case 3481:
case 3934:
case 1601:
case 2846:
case 1590:
case 226:
case 3868:
case 1679:
case 4007:
case 2072:
case 940:
case 3226:
case 2098:
case 112:
case 2637:
case 879:
case 705:
case 3000:
case 1242:
case 3154:
case 1974:
case 241:
case 3184:
case 3354:
case 1348:
case 2463:
case 132:
case 286:
case 2317:
case 2941:
case 2246:
case 2813:
case 1427:
case 3826:
case 2117:
case 3036:
case 3162:
case 150:
case 3268:
case 1842:
case 3925:
case 1076:
case 1559:
case 2404:
case 3144:
case 88:
case 140:
case 2955:
case 1388:
case 1158:
case 3660:
case 1188:
case 1358:
case 66:
case 3344:
case 423:
case 770:
case 3992:
case 1864:
case 811:
case 3518:
case 3780:
case 1203:
case 1414:
case 2131:
case 82:
case 2797:
case 1065:
case 950:
case 863:
case 1549:
case 483:
case 2124:
case 602:
case 297:
case 251:
case 2563:
case 2951:
case 2981:
case 1264:
case 2840:
case 2434:
case 357:
case 1596:
case 1635:
case 3220:
case 1947:
case 2768:
case 3445:
case 2688:
case 769:
case 3551:
case 3963:
case 3713:
case 3585:
case 376:
case 2578:
case 2607:
case 1115:
case 365:
case 1624:
case 3904:
case 1631:
case 886:
case 2431:
case 1114:
case 1390:
case 3230:
case 2993:
case 2424:
case 3905:
case 1407:
case 3584:
case 478:
case 475:
case 3554:
case 1939:
case 2517:
case 826:
case 110:
case 279:
case 1870:
case 3206:
case 1359:
case 3901:
case 422:
case 995:
case 784:
case 998:
case 3341:
case 1265:
case 2962:
case 596:
case 2690:
case 1415:
case 3608:
case 1064:
case 2325:
case 2086:
case 1861:
case 194:
case 2579:
case 2134:
case 482:
case 2505:
case 3657:
case 2321:
case 2689:
case 403:
case 2121:
case 3687:
case 1865:
case 1052:
case 571:
case 2712:
case 3767:
case 1003:
case 2984:
case 260:
case 1261:
case 1604:
case 587:
case 337:
case 3236:
case 3068:
case 1511:
case 3924:
case 317:
case 1196:
case 195:
case 788:
case 133:
case 3151:
case 3629:
case 3381:
case 2627:
case 785:
case 3836:
case 2178:
case 527:
case 1975:
case 3026:
case 2:
case 2013:
case 3185:
case 3355:
case 206:
case 1437:
case 728:
case 1876:
case 2479:
case 2392:
case 389:
case 539:
case 2192:
case 1515:
case 2298:
case 1783:
case 1042:
case 2401:
case 22:
case 263:
case 3544:
case 1327:
case 4059:
case 1794:
case 674:
case 1558:
case 2417:
case 2267:
case 952:
case 2696:
case 2304:
case 851:
case 3118:
case 2535:
case 400:
case 930:
case 1149:
case 2524:
case 1692:
case 772:
case 3097:
case 1349:
case 910:
case 231:
case 2867:
case 3484:
case 1678:
case 3869:
case 211:
case 4014:
case 2154:
case 605:
case 2000:
case 405:
case 608:
case 3463:
case 2639:
case 1032:
case 2184:
case 1166:
case 1508:
case 2740:
case 4009:
case 2934:
case 1447:
case 2921:
case 4071:
case 1328:
case 134:
case 993:
case 1557:
case 2418:
case 4075:
case 2925:
case 114:
case 209:
case 938:
case 3246:
case 3813:
case 2362:
case 386:
case 2119:
case 516:
case 3720:
case 1429:
case 3179:
case 1959:
case 2756:
case 3525:
case 3101:
case 1764:
case 2786:
case 2177:
case 3379:
case 3478:
case 2297:
case 3648:
case 2541:
case 3299:
case 2485:
case 2451:
case 720:
case 1574:
case 3280:
case 1619:
case 3067:
case 2393:
case 4060:
case 2628:
case 3305:
case 1914:
case 3899:
case 673:
case 1043:
case 3534:
case 889:
case 3688:
case 1474:
case 2551:
case 2963:
case 291:
case 3434:
case 1949:
case 990:
case 2220:
case 3421:
case 829:
case 1083:
case 1053:
case 1538:
case 1002:
case 1927:
case 3240:
case 276:
case 2585:
case 837:
case 2441:
case 2030:
case 3726:
case 3607:
case 3578:
case 2555:
case 2671:
case 3856:
case 3773:
case 3135:
case 470:
case 3335:
case 1295:
case 3886:
case 2992:
case 1175:
case 3955:
case 4028:
case 1094:
case 1733:
case 2144:
case 2344:
case 1010:
case 3563:
case 914:
case 1309:
case 3256:
case 3286:
case 1109:
case 934:
case 1895:
case 193:
case 3324:
case 55:
case 118:
case 1996:
case 115:
case 138:
case 3331:
case 3124:
case 834:
case 3732:
case 3270:
case 2641:
case 2409:
case 3548:
case 352:
case 1772:
case 701:
case 248:
case 2308:
case 2108:
case 2202:
case 3314:
case 3870:
case 3389:
case 3621:
case 254:
case 2776:
case 2853:
case 1901:
case 3634:
case 3189:
case 1206:
case 2157:
case 1562:
case 449:
case 310:
case 1020:
case 2937:
case 3064:
case 1608:
case 394:
case 3861:
case 929:
case 3716:
case 917:
case 1141:
case 2091:
case 1917:
case 2894:
case 3265:
case 1341:
case 2723:
case 937:
case 2174:
case 1767:
case 2948:
case 407:
case 1145:
case 607:
case 989:
case 2374:
case 3966:
case 890:
case 17:
case 1657:
case 3082:
case 3743:
case 3865:
case 4051:
case 1687:
case 2832:
case 2560:
case 129:
case 2022:
case 1800:
case 313:
case 1351:
case 75:
case 1236:
case 1931:
case 3396:
case 395:
case 1924:
case 189:
case 3876:
case 3753:
case 2138:
case 56:
case 1647:
case 1200:
case 1477:
case 2958:
case 3975:
case 799:
case 1836:
case 2439:
case 3437:
case 97:
case 3702:
case 1185:
case 1212:
case 1118:
case 267:
case 1269:
case 1318:
case 1073:
case 2428:
case 3127:
case 3710:
case 2329:
case 2816:
case 1419:
case 2243:
case 818:
case 835:
case 3823:
case 459:
case 659:
case 2651:
case 3033:
case 3794:
case 1544:
case 3327:
case 1454:
case 2685:
case 1812:
case 2571:
case 2466:
case 3507:
case 3678:
case 2655:
case 1484:
case 2216:
case 2911:
case 2347:
case 3349:
case 1097:
case 2147:
case 258:
case 2590:
case 126:
case 3677:
case 830:
case 2679:
case 1072:
case 1637:
case 1098:
case 1945:
case 524:
case 2148:
case 4024:
case 3366:
case 141:
case 3032:
case 2348:
case 232:
case 3822:
case 2427:
case 1246:
case 1813:
case 1117:
case 250:
case 796:
case 334:
case 3222:
case 3128:
case 314:
case 951:
case 2559:
case 3587:
case 2023:
case 2337:
case 390:
case 1299:
case 2791:
case 3016:
case 2137:
case 3438:
case 1525:
case 1179:
case 2987:
case 456:
case 3989:
case 3764:
case 1101:
case 1305:
case 3782:
case 3990:
case 10:
case 2908:
case 2617:
case 1250:
case 243:
case 2795:
case 894:
case 477:
case 3619:
case 1280:
case 3574:
case 1840:
case 1768:
case 2311:
case 61:
case 41:
case 253:
case 3474:
case 572:
case 3160:
case 2722:
case 3644:
case 90:
case 1240:
case 2929:
case 1726:
case 1578:
case 1607:
case 621:
case 895:
case 3742:
case 3083:
case 646:
case 1592:
case 2624:
case 1425:
case 813:
case 2631:
case 3094:
case 2388:
case 2158:
case 2188:
case 2358:
case 1985:
case 739:
case 2527:
case 4017:
case 1135:
case 1773:
case 2061:
case 1886:
case 1611:
case 2414:
case 1131:
case 2065:
case 3547:
case 3291:
case 1124:
case 3408:
case 315:
case 588:
case 2490:
case 151:
case 1951:
case 393:
case 3109:
case 1286:
case 787:
case 3091:
case 4078:
case 2928:
case 2861:
case 1614:
case 636:
case 1134:
case 2082:
case 508:
case 9:
case 1505:
case 1321:
case 1121:
case 1659:
case 2865:
case 1334:
case 505:
case 2052:
case 392:
case 3095:
case 1954:
case 2966:
case 3374:
case 1769:
case 3308:
case 1431:
case 4063:
case 348:
case 1424:
case 92:
case 1040:
case 963:
case 2314:
case 2270:
case 573:
case 2407:
case 3471:
case 1700:
case 2548:
case 3641:
case 4004:
case 2458:
case 3475:
case 2488:
case 3937:
case 3776:
case 179:
case 911:
case 1435:
case 354:
case 2389:
case 2621:
case 3187:
case 2870:
case 3157:
case 1977:
case 931:
case 3883:
case 832:
case 12:
case 3681:
case 2127:
case 2327:
case 3651:
case 759:
case 1417:
case 3575:
case 367:
case 3915:
case 1304:
case 1696:
case 1080:
case 3761:
case 1104:
case 2149:
case 3911:
case 1099:
case 3347:
case 1524:
case 569:
case 840:
case 2692:
case 3216:
case 358:
case 3765:
case 1363:
case 131:
case 3685:
case 1867:
case 2678:
case 2507:
case 3655:
case 2960:
case 3466:
case 3571:
case 1163:
case 298:
case 1872:
case 1046:
case 3618:
case 1405:
case 2971:
case 4021:
case 233:
case 45:
case 2663:
case 3439:
case 1730:
case 499:
case 3958:
case 4025:
case 1:
case 3988:
case 570:
case 106:
case 3770:
case 960:
case 2753:
case 1392:
case 2515:
case 2783:
case 2042:
case 504:
case 2959:
case 1377:
case 2438:
case 892:
case 2764:
case 1177:
case 756:
case 2989:
case 3957:
case 1297:
case 2684:
case 3023:
case 2339:
case 3137:
case 957:
case 1541:
case 1485:
case 968:
case 1069:
case 2662:
case 2574:
case 2619:
case 965:
case 1481:
case 164:
case 1393:
case 3233:
case 2914:
case 1897:
case 2782:
case 2043:
case 578:
case 1193:
case 3974:
case 1384:
case 1154:
case 854:
case 3148:
case 3242:
case 332:
case 2822:
case 2032:
case 503:
case 3601:
case 2447:
case 1226:
case 3679:
case 3514:
case 2693:
case 3842:
case 234:
case 696:
case 3589:
case 2557:
case 3559:
case 3076:
case 214:
case 1925:
case 2222:
case 522:
case 2128:
case 3427:
case 848:
case 1119:
case 1362:
case 1319:
case 2429:
case 3459:
case 2487:
case 4062:
case 3203:
case 2295:
case 1992:
case 3489:
case 3252:
case 855:
case 1660:
case 2094:
case 2529:
case 1144:
case 639:
case 2375:
case 3188:
case 3358:
case 3282:
case 2171:
case 2309:
case 909:
case 3107:
case 2895:
case 3264:
case 293:
case 2371:
case 844:
case 4084:
case 3414:
case 235:
case 218:
case 215:
case 238:
case 3490:
case 2996:
case 2408:
case 1799:
case 4054:
case 3549:
case 2474:
case 4093:
case 2360:
case 353:
case 1445:
case 1581:
case 1963:
case 73:
case 1551:
case 2160:
case 3596:
case 1746:
case 3111:
case 2949:
case 1220:
case 3311:
case 3635:
case 3624:
case 2083:
case 574:
case 3631:
case 3315:
case 2053:
case 3070:
case 4077:
case 500:
case 2927:
case 176:
case 1585:
case 1441:
case 1713:
case 1609:
case 1671:
case 3207:
case 3364:
case 2976:
case 2453:
case 2271:
case 706:
case 2483:
case 7:
case 3164:
case 1701:
case 3858:
case 3739:
case 689:
case 2391:
case 2402:
case 869:
case 2737:
case 225:
case 3303:
case 4068:
case 2395:
case 3807:
case 637:
case 1998:
case 1406:
case 2809:
case 2195:
case 3103:
case 1244:
case 629:
case 1972:
case 429:
case 3382:
case 3152:
case 288:
case 2543:
case 2748:
case 804:
case 1500:
case 78:
case 2532:
case 949:
case 553:
case 3766:
case 2860:
case 3943:
case 2008:
case 3014:
case 3089:
case 3815:
case 374:
case 2260:
case 3728:
case 3461:
case 3059:
case 3211:
case 1695:
case 2494:
case 1120:
case 1717:
case 2970:
case 3476:
case 149:
case 2668:
case 3953:
case 3561:
case 3983:
case 1018:
case 3133:
case 1622:
case 779:
case 805:
case 2788:
case 3333:
case 3902:
case 543:
case 2707:
case 2626:
case 3771:
case 1400:
case 1277:
case 3709:
case 3565:
case 2047:
case 1724:
case 1397:
case 3049:
case 375:
case 3237:
case 1893:
case 1854:
case 303:
case 3848:
case 532:
case 512:
case 2228:
case 3760:
case 2122:
case 224:
case 1884:
case 1469:
case 2866:
case 2711:
case 3680:
case 2673:
case 2965:
case 1168:
case 1262:
case 760:
case 3142:
case 3248:
case 1254:
case 3699:
case 2266:
case 2697:
case 2038:
case 1284:
case 2828:
case 2553:
case 1326:
case 1085:
case 2502:
case 3910:
case 550:
case 1862:
case 3423:
case 3994:
case 765:
case 2323:
case 977:
case 3600:
case 146:
case 2037:
case 3116:
case 1413:
case 2249:
case 3591:
case 3829:
case 2123:
case 1001:
case 2564:
case 1079:
case 1804:
case 121:
case 1556:
case 567:
case 2227:
case 956:
case 2582:
case 791:
case 2552:
case 1676:
case 3343:
case 3229:
case 3847:
case 3595:
case 757:
case 1863:
case 3636:
case 1172:
case 2708:
case 1372:
case 3982:
case 1398:
case 1623:
case 3238:
case 3066:
case 3903:
case 283:
case 2048:
case 2995:
case 1198:
case 1292:
case 497:
case 2433:
case 3612:
case 2667:
case 2991:
case 3759:
case 2787:
case 3838:
case 3028:
case 1480:
case 3964:
case 2376:
case 26:
case 3110:
case 3606:
case 3727:
case 2088:
case 3075:
case 2729:
case 3310:
case 486:
case 1718:
case 2161:
case 1024:
case 1968:
case 1821:
case 441:
case 308:
case 3009:
case 426:
case 1225:
case 4072:
case 2922:
case 2452:
case 177:
case 2482:
case 2259:
case 1751:
case 764:
case 921:
case 822:
case 2403:
case 3257:
case 1755:
case 93:
case 3302:
case 280:
case 3102:
case 3491:
case 1513:
case 1785:
case 882:
case 981:
case 803:
case 3887:
case 2738:
case 1665:
case 3857:
case 2370:
case 554:
case 662:
case 2015:
case 3353:
case 3008:
case 2811:
case 2090:
case 2686:
case 631:
case 411:
case 2656:
case 1572:
case 48:
case 372:
case 2215:
case 1598:
case 3532:
case 2766:
case 2916:
case 2211:
case 4050:
case 1762:
case 3923:
case 2815:
case 663:
case 42:
case 3057:
case 2461:
case 2576:
case 1652:
case 274:
case 802:
case 3391:
case 1231:
case 789:
case 3875:
case 328:
case 2858:
case 2523:
case 2888:
case 3516:
case 1224:
case 3191:
case 2470:
case 1025:
case 2364:
case 1156:
case 6:
case 4:
case 406:
case 2640:
case 606:
case 515:
case 2382:
case 2258:
case 388:
case 538:
case 3275:
case 729:
case 1831:
case 936:
case 916:
case 15:
case 1793:
case 3543:
case 2182:
case 535:
case 1034:
case 385:
case 2288:
case 2807:
case 737:
case 2103:
case 3195:
case 717:
case 14:
case 3711:
case 2650:
case 1217:
case 1346:
case 3673:
case 2848:
case 77:
case 203:
case 324:
case 3228:
case 999:
case 3416:
case 95:
case 4086:
case 4056:
case 1313:
case 2423:
case 2699:
case 2142:
case 514:
case 3715:
case 1092:
case 534:
case 3038:
case 1930:
case 3839:
case 2775:
case 1744:
case 2902:
case 590:
case 1205:
case 2837:
case 2953:
case 2561:
case 1004:
case 3668:
case 1150:
case 1879:
case 2476:
case 1180:
case 1350:
case 1472:
case 2565:
case 1642:
case 1199:
case 1805:
case 2049:
case 1279:
case 2771:
case 1063:
case 3707:
case 3626:
case 3432:
case 2613:
case 1498:
case 2066:
case 1084:
case 2238:
case 513:
case 1300:
case 302:
case 1100:
case 1054:
case 533:
case 1881:
case 2714:
case 595:
case 3896:
case 2982:
case 598:
case 1956:
case 2838:
case 3787:
case 1473:
case 1251:
case 36:
case 2789:
case 1281:
case 323:
case 3757:
case 3376:
case 139:
case 3433:
case 2669:
case 1062:
case 3991:
case 3667:
case 2612:
case 561:
case 676:
case 3442:
case 476:
case 1818:
case 4030:
case 3037:
case 665:
case 465:
case 2600:
case 3123:
case 2039:
case 668:
case 1632:
case 457:
case 657:
case 1112:
case 1369:
case 2422:
case 1169:
case 1312:
case 828:
case 1093:
case 1734:
case 4006:
case 1940:
case 3849:
case 2343:
case 825:
case 2522:
case 464:
case 3259:
case 1694:
case 2287:
case 1306:
case 273:
case 2495:
case 647:
case 1610:
case 447:
case 3403:
case 4069:
case 3452:
case 1568:
case 2808:
case 3890:
case 3011:
case 3482:
case 2796:
case 4012:
case 3738:
case 3859:
case 2383:
case 2353:
case 3542:
case 824:
case 3464:
case 3370:
case 3214:
case 1130:
case 2102:
case 3361:
case 1245:
case 2942:
case 594:
case 786:
case 3161:
case 1704:
case 2727:
case 2394:
case 196:
case 2110:
case 2310:
case 2194:
case 3533:
case 409:
case 609:
case 1420:
case 2075:
case 3058:
case 2874:
case 726:
case 1602:
case 2009:
case 939:
case 171:
case 3007:
case 3922:
case 1763:
case 2071:
case 2749:
case 927:
case 1683:
case 205:
case 4000:
case 208:
case 1653:
case 741:
case 3165:
case 1597:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1752757201/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,1,0,1,1,1,1,0,1,1,0,1,0,1,1,0,1,0,0,1,0,1,0,1,1,1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,1,0,0,1,0,0,1,0,1,0,1,1,0,1,1,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,1,1,0,0,0,1,1,0,1,0,0,1,1,1,0,1,1,0,1,1,1,0,0,1,0,1,1,1,0,1,0,1,0,1,0,1,0,1,1,0,0,1,0,0,1,0,0,0,1,1,0,1,1,0,1,1,1,1,0,0,0,1,1,1,1,0,1,1,0,1,0,1,1,1,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,1,0,0,0,1,1,1,0,1,0,0,0,0,1,0,0,0,0,1,0,0,1,1,1,1,1,0,0,0,0,0,0,1,0,1,1,1,1,1,0,1,0,0,1,1,1,0,1,1,0,0,0,0,1,1,1,0,0,0,0,1,1,1,1,1,0,0,1,0,0,1,0,1,0,0,0,0,1,1,1,1,0,1,1,0,1,0,1,1,1,0,1,1,0,0,0,1,0,0,0,0,0,1,1,0,1,1,0,1,1,1,0,1,0,0,1,1,1,0,0,1,0,1,0,0,0,1,1,0,0,1,1,1,0,0,1,0,1,0,1,0,0,1,1,1,0,1,0,1,0,1,0,1,1,0,0,1,1,0,0,1,1,0,1,0,1,1,0,1,0,0,0,0,0,0,0,0,1,0,0,0,1,1,1,0,0,1,1,1,0,0,0,1,0,1,0,1,0,0,0,0,1,0,1,1,1,0,0,0,0,0,0,0,0,1,1,0,1,1,1,0,1,1,1,1,1,0,0,0,1,0,0,1,0,1,1,1,0,1,0,1,0,0,1,1,0,0,0,0,1,0,1,1,0,0,1,0,0,1,0,0,0,1,0,0,0,0,1,0,0,1,0,1,0,0,0,1,1,1,1,0,1,1,1,0,1,1,1,1,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,1,1,1,1,0,0,0,1,1,1,0,1,0,0,0,1,0,0,1,1,0,0,1,0,1,1,0,0,1,1,1,1,0,1,0,0,0,1,1,1,1,1,1,0,0,0,0,1,0,1,0,0,1,0,0,0,1,1,1,1,1,0,1,1,1,0,1,0,1,0,0,1,1,0,1,1,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,1,0,1,1,1,1,1,1,0,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,1,1,1,0,1,0,0,0,1,0,0,1,1,1,1,1,0,0,0,0,1,1,0,0,1,0,0,1,0,0,1,1,0,0,0,1,0,1,0,1,1,1,1,1,0,1,0,0,1,1,1,0,1,1,1,0,0,0,0,1,1,0,0,1,1,1,0,1,1,1,0,1,0,1,1,0,0,0,0,1,1,0,1,0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,1,1,0,1,1,0,1,0,1,1,0,1,0,1,1,0,0,0,0,0,0,0,1,1,0,1,0,0,1,0,0,0,0,0,1,0,1,1,1,0,1,0,1,1,0,1,1,1,1,1,0,1,1,0,0,0,1,0,0,0,1,0,1,1,1,1,0,1,1,0,0,0,1,1,0,0,0,1,1,0,1,0,1,0,0,0,0,1,0,0,0,0,1,1,1,1,1,1,0,1,0,0,1,0,1,0,0,1,0,0,1,1,1,1,0,0,0,1,0,1,0,1,0,0,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,0,1,0,1,1,0,1,0,0,1,0,0,0,1,0,0,1,1,1,0,1,0,0,1,1,0,0,0,1,0,0,0,1,1,1,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,1,1,0,0,0,1,0,0,1,1,1,1,0,1,1,1,0,0,0,1,0,0,0,0,1,0,0,0,1,1,1,0,0,1,0,1,1,0,0,0,1,1,0,1,1,0,1,0,1,1,1,0,0,1,0,1,1,1,1,1,0,0,0,0,1,0,0,1,1,1,1,1,0,0,0,1,1,0,0,1,0,0,1,0,1,1,0,1,1,0,0,1,0,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,1,1,0,1,1,0,1,0,0,1,1,0,1,1,1,1,0,0,1,1,0,1,0,0,0,0,0,0,0,1,0,1,0,1,0,1,1,0,0,0,0,0,0,1,0,1,0,0,1,0,1,1,0,1,1,0,0,1,1,0,0,0,0,1,1,1,0,0,0,1,0,1,0,1,1,1,1,1,0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,0,1,1,1,0,0,0,1,1,1,1,1,1,0,0,1,1,1,1,1,1,0,1,0,0,0,1,1,0,0,1,0,1,1,1,1,1,1,1,1,1,0,1,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,0,0,0,1,1,0,0,1,1,0,1,0,1,0,0,0,0,1,1,0,1,0,1,1,1,0,1,0,0,1,1,1,0,1,1,0,1,0,0,1,0,1,1,0,0,0,0,1,0,0,1,0,1,1,1,0,1,1,0,1,1,1,0,0,0,0,1,0,1,1,0,1,0,0,1,0,0,0,1,1,1,0,0,0,0,1,0,0,0,0,1,1,0,1,1,0,1,1,1,1,1,1,1,0,1,1,0,0,1,0,0,1,0,1,0,1,1,0,1,1,1,0,0,1,0,0,0,0,0,0,0,1,0,1,1,1,0,1,1,0,1,1,0,0,0,0,1,0,0,1,0,1,0,1,1,0,0,1,1,1,1,0,0,1,0,0,1,1,0,0,1,0,1,1,0,1,0,0,0,0,1,1,1,0,0,0,1,0,1,0,0,1,0,0,0,1,0,1,0,0,1,1,1,1,1,1,1,1,0,0,0,1,1,1,0,1,1,1,1,1,0,0,0,1,1,0,1,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,1,0,1,1,1,1,1,1,0,1,1,0,1,0,1,0,0,1,1,1,0,1,1,0,0,1,1,1,0,1,0,1,1,0,1,1,1,1,0,1,1,1,0,1,0,0,0,1,0,1,0,1,0,1,1,1,0,1,0,1,0,0,0,0,1,1,1,0,0,0,0,0,1,1,0,0,1,1,0,0,0,1,0,0,1,1,1,1,0,1,0,0,1,1,0,1,1,1,0,0,0,0,0,1,0,0,1,1,0,0,1,0,1,0,0,1,0,1,0,0,1,1,1,1,0,1,0,1,1,0,0,0,0,0,0,1,1,1,0,0,1,0,0,0,1,0,0,0,0,0,1,0,0,1,0,1,1,0,0,0,0,1,0,1,0,1,0,0,1,1,1,1,1,0,1,0,1,1,0,0,1,0,0,0,1,0,1,0,1,0,1,0,0,1,1,1,0,1,0,0,0,0,1,1,1,0,1,0,1,1,1,0,1,1,1,0,1,0,1,1,1,1,1,1,0,1,1,0,0,0,0,1,1,0,1,1,1,0,1,0,0,0,1,1,1,0,0,1,0,1,0,0,1,1,1,0,0,1,0,1,0,0,1,1,1,1,0,0,0,1,0,1,1,0,0,0,0,1,0,1,1,1,0,1,1,1,0,0,1,0,1,1,0,0,0,1,0,0,0,1,0,0,0,0,1,0,1,1,1,1,1,1,1,1,0,0,1,0,0,0,0,0,0,0,0,1,1,1,0,1,1,0,0,0,0,0,1,0,1,0,0,1,1,0,0,1,1,0,0,0,0,1,0,0,0,0,1,0,1,1,1,1,0,1,0,0,0,1,0,0,0,0,0,1,1,1,1,0,1,1,1,1,1,1,1,1,0,1,0,0,0,0,0,0,0,1,0,1,0,0,1,0,0,1,0,1,1,0,1,0,0,1,1,0,0,0,1,1,0,1,1,1,0,1,1,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,1,1,1,0,0,1,1,0,1,1,0,1,0,0,0,0,1,0,0,0,0,0,1,1,0,0,1,0,1,0,1,1,1,1,1,0,1,0,0,1,1,1,0,0,0,1,0,0,1,0,1,0,0,1,0,1,1,1,0,1,0,0,1,0,1,0,1,0,0,0,1,1,0,0,0,0,1,1,0,1,0,0,0,1,0,0,1,0,0,0,0,1,1,1,1,0,1,0,0,1,1,0,0,0,0,0,1,0,1,1,0,1,0,0,1,0,1,0,1,0,1,1,1,1,0,1,0,1,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,1,1,0,1,0,0,0,0,0,0,0,1,0,1,1,0,0,1,1,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,1,0,0,0,1,0,1,0,0,1,0,0,1,1,1,0,0,1,0,0,0,1,0,1,0,0,1,0,1,1,1,0,0,1,1,0,0,0,1,1,1,0,1,1,1,0,1,0,0,0,0,0,1,0,0,0,1,1,0,1,0,0,1,1,1,0,1,0,1,0,1,0,1,1,1,0,1,1,0,1,0,1,1,0,1,1,0,0,0,1,0,0,1,1,1,0,1,1,0,1,0,1,0,1,0,0,0,0,1,1,1,1,1,1,1,1,0,1,1,1,0,0,1,0,0,1,0,0,1,1,0,1,0,1,0,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,0,1,1,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,1,1,0,0,0,1,0,1,0,1,0,1,0,0,0,1,0,1,1,0,0,0,0,0,0,1,0,1,1,0,0,0,0,0,1,1,0,0,1,1,0,0,0,1,0,1,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,1,0,0,1,1,1,0,0,1,0,0,1,1,0,1,1,1,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,1,1,0,0,0,0,1,0,1,0,1,1,0,0,0,0,0,1,1,0,0,1,1,1,1,1,1,1,0,0,1,0,0,0,1,0,1,0,1,1,1,0,1,0,0,0,0,0,0,0,1,0,1,1,0,0,1,1,1,1,1,1,0,1,1,0,1,0,0,0,0,1,0,1,0,1,0,1,0,0,0,1,1,1,1,0,0,1,1,1,0,0,0,0,0,1,1,0,0,0,0,1,1,0,1,1,1,1,1,0,0,0,0,0,1,1,1,1,0,0,1,1,1,0,0,0,0,1,0,0,1,1,1,1,0,1,1,1,0,0,1,1,1,1,1,0,1,1,0,0,0,1,1,0,1,0,0,1,0,1,1,0,0,0,1,1,1,0,0,0,0,1,0,0,1,1,1,0,0,1,0,1,0,1,0,0,0,1,0,1,0,1,1,1,0,1,1,0,1,0,1,1,0,1,0,1,0,1,1,0,1,0,1,1,0,1,0,0,1,1,1,0,0,0,0,0,0,0,1,0,1,0,1,0,1,1,1,1,0,0,1,0,1,1,0,1,0,1,1,0,0,0,0,1,1,0,1,1,0,1,0,1,0,1,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,0,1,0,0,1,1,1,1,0,1,0,1,1,0,0,1,0,0,1,1,0,0,0,1,0,0,0,0,0,0,0,1,1,1,0,0,1,0,0,0,1,0,0,0,0,1,1,0,0,0,1,0,1,0,1,0,1,1,0,1,1,1,1,0,1,1,1,0,0,0,1,1,1,1,1,1,1,0,0,0,0,1,0,1,1,0,1,0,1,1,0,0,0,0,0,1,1,0,0,0,1,1,1,1,1,0,1,0,0,0,0,1,1,0,0,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,0,1,0,0,1,0,0,1,1,0,0,1,1,0,1,0,0,0,0,1,0,0,1,1,1,0,0,1,0,1,0,0,0,0,1,1,0,1,1,0,1,0,0,0,1,1,0,0,1,1,0,0,0,1,0,1,1,0,0,0,0,0,0,1,1,0,1,0,1,0,0,1,0,0,0,1,1,0,0,0,0,1,1,1,0,0,1,1,1,1,0,1,0,1,0,1,1,1,1,0,1,0,0,0,1,0,1,1,1,1,0,1,1,1,0,1,1,1,0,1,0,1,1,0,0,0,0,0,1,0,0,0,1,0,1,1,1,1,1,0,1,0,0,0,0,0,1,0,1,0,0,1,0,1,1,0,0,0,1,0,1,1,0,0,0,1,1,1,0,0,1,0,0,0,1,0,0,0,1,0,1,0,0,0,1,1,0,0,1,0,0,0,1,1,1,1,0,0,0,1,0,0,1,0,0,0,1,0,1,0,0,1,0,1,1,0,1,0,0,0,1,1,1,0,0,1,1,1,1,1,0,0,0,0,1,1,0,1,0,0,0,1,1,0,0,0,0,0,1,1,1,1,0,1,0,1,1,0,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,0,0,1,0,0,0,1,1,1,0,1,0,0,1,0,1,0,1,1,1,0,1,1,0,1,0,1,1,0,0,0,1,0,1,1,1,0,1,0,1,1,0,1,1,1,1,0,1,0,1,1,0,1,0,1,0,0,1,1,1,0,0,1,1,1,0,0,1,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,1,1,1,0,0,1,0,1,0,1,1,1,1,1,0,0,0,0,1,1,1,0,0,0,0,1,1,0,0,1,0,0,1,0,1,0,0,1,1,0,1,0,0,1,1,1,1,1,0,0,1,0,1,1,1,1,1,0,0,1,0,1,0,1,1,0,1,1,0,0,1,1,0,1,0,0,1,0,1,1,1,0,0,0,0,1,0,1,0,1,0,1,0,0,1,1,0,1,0,1,1,0,0,1,1,1,0,1,1,0,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,1,1,0,0,0,0,1,0,0,1,1,0,0,0,1,0,0,1,0,1,1,0,1,1,0,1,0,0,0,1,0,1,1,1,1,0,1,1,0,1,1,1,0,1,0,1,0,1,0,1,0,1,0,0,0,1,0,1,1,1,1,0,1,0,0,1,0,1,1,0,0,1,0,1,0,1,1,0,1,0,1,0,1,1,1,1,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,1,1,0,1,1,1,1,1,0,1,0,1,1,0,1,1,1,0,0,0,0,1,0,0,0,1,0,0,1,0,0,0,1,0,1,0,1,0,0,0,0,1,1,0,1,1,0,0,1,0,1,0,0,0,1,1,1,1,0,1,0,0,1,0,1,1,0,1,1,0,0,1,0,1,1,1,0,1,0,1,1,1,1,1,0,0,0,0,0,0,1,0,1,0,0,0,0,1,0,1,0,1,0,0,1,0,1,0,0,1,0,0,0,1,0,1,0,1,1,0,0,0,1,0,1,1,0,0,1,0,0,0,1,1,1,1,1,0,1,1,1,1,0,1,0,0,1,0,0,0,0,1,1,1,0,0,0,1,0,0,1,0,1,0,1,1,0,1,1,0,1,0,1,0,0,1,1,1,0,1,1,0,1,1,0,1,1,0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,0,1,1,1,0,1,0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,1,0,1,1,0,0,1,0,0,1,1,0,0,1,0,0,0,0,0,1,1,1,1,0,1,0,1,0,0,0,1,1,0,0,1,1,1,0,1,0,0,1,1,1,0,1,0,1,0,0,0,0,0,1,1,0,1,0,1,1,0,1,1,0,1,0,1,0,1,1,1,1,0,0,0,0,1,1,0,1,0,0,0,1,0,0,1,1,1,0,1,0,1,0,0,1,1,0,0,0,1,0,1,1,0,1,0,0,1,0,0,0,1,1,1,1,1,1,1,0,1,0,1,1,0,0,1,0,0,1,0,1,0,0,1,0,1,1,0,1,1,0,1,0,1,1,1,1,1,0,1,1,1,0,0,1,0,0,0,0,1,1,1,1,0,0,0,1,0,0,0,0,0,1,1,0,0,1,1,1,1,0,0,0,0,0,1,0,1,1,0,1,1,0,1,1,1,0,1,1,1,1,1,0,1,1,1,0,1,0,0,1,1,1,0,1,0,1,0,0,0,0,1,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,1,0,1,0,0,0,0,1,1,0,1,1,0,0,1,0,1,0,0,0,0,1,0,1,1,0,0,1,0,1,1,0,1,1,1,0,1,0,0,0,1,1,1,1,1,0,1,0,0,0,1,0,1,1,1,1,0,0,0,0,1,1,0,1,0,0,0,0,1,0,1,1,1,0,0,1,0,1,0,0,0,1,0,1,1,0,1,1,1,1,1,1,0,0,0,1,1,0,0,0,1,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,1,1,0,0,0,1,1,1,0,1,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,1,1,1,0,1,0,1,1,1,1,1,1,1,0,0,1,0,1,1,0,1,0,1,0,1,1,1,1,1,0,1,0,1,0,0,1,0,0,0,1,1,0,1,1,0,0,1,1,1,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,0,1,1,0,1,1,1,1,1,0,1,0,0,1,1,1,1,1,0,1,1,0,1,1,0,0,0,1,1,1,0,1,0,0,0,0,0,0,1,1,0,];
var gg_b = "1752757201/";

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
