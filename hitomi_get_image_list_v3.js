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
case 2885:
case 3517:
case 2396:
case 448:
case 781:
case 3332:
case 958:
case 1621:
case 3294:
case 2644:
case 1974:
case 2483:
case 567:
case 2724:
case 2128:
case 3317:
case 966:
case 1219:
case 2596:
case 469:
case 3532:
case 938:
case 3912:
case 888:
case 2852:
case 2743:
case 3150:
case 3993:
case 2326:
case 3771:
case 388:
case 2159:
case 603:
case 1020:
case 2198:
case 2042:
case 3944:
case 2526:
case 462:
case 210:
case 2135:
case 3104:
case 3708:
case 1405:
case 864:
case 1988:
case 4070:
case 2061:
case 3960:
case 708:
case 2884:
case 872:
case 2645:
case 2795:
case 3669:
case 301:
case 3181:
case 372:
case 2580:
case 313:
case 229:
case 2660:
case 3589:
case 543:
case 2801:
case 3225:
case 879:
case 2380:
case 65:
case 901:
case 2384:
case 2802:
case 121:
case 1606:
case 2664:
case 913:
case 1454:
case 972:
case 1503:
case 2584:
case 1761:
case 1715:
case 3418:
case 3263:
case 2446:
case 1025:
case 2763:
case 1439:
case 2301:
case 2880:
case 4074:
case 2062:
case 3889:
case 2501:
case 1095:
case 68:
case 99:
case 3817:
case 1118:
case 2378:
case 866:
case 751:
case 988:
case 793:
case 838:
case 1024:
case 296:
case 2352:
case 3220:
case 2896:
case 1853:
case 2578:
case 1692:
case 731:
case 1455:
case 3154:
case 4075:
case 2258:
case 1613:
case 1936:
case 1094:
case 358:
case 3290:
case 2640:
case 1622:
case 366:
case 4088:
case 2826:
case 3331:
case 3729:
case 1043:
case 1332:
case 2210:
case 3353:
case 1517:
case 1937:
case 4064:
case 2827:
case 483:
case 1317:
case 2177:
case 3090:
case 2991:
case 477:
case 2435:
case 2833:
case 2773:
case 1912:
case 19:
case 1993:
case 2956:
case 1771:
case 2719:
case 1831:
case 2241:
case 572:
case 2897:
case 564:
case 3020:
case 343:
case 3481:
case 3710:
case 3405:
case 1104:
case 2428:
case 2166:
case 3803:
case 2183:
case 4065:
case 101:
case 2675:
case 1607:
case 1669:
case 921:
case 2459:
case 113:
case 172:
case 588:
case 641:
case 1181:
case 4040:
case 3450:
case 2688:
case 164:
case 2447:
case 2368:
case 3606:
case 1286:
case 1418:
case 3715:
case 3761:
case 1263:
case 40:
case 2476:
case 728:
case 558:
case 2868:
case 821:
case 1964:
case 202:
case 1100:
case 670:
case 271:
case 4023:
case 3482:
case 2327:
case 2333:
case 3024:
case 453:
case 2527:
case 74:
case 623:
case 1799:
case 4045:
case 2979:
case 1965:
case 158:
case 2548:
case 3742:
case 2597:
case 3622:
case 1290:
case 3316:
case 1657:
case 138:
case 2467:
case 1331:
case 3895:
case 3563:
case 3666:
case 3493:
case 2284:
case 1981:
case 3363:
case 2068:
case 3701:
case 51:
case 151:
case 2983:
case 48:
case 498:
case 3412:
case 3784:
case 3188:
case 1160:
case 676:
case 1904:
case 4039:
case 3843:
case 2252:
case 2278:
case 2731:
case 3445:
case 531:
case 278:
case 4055:
case 3520:
case 1819:
case 2871:
case 4082:
case 1797:
case 721:
case 2285:
case 3320:
case 2156:
case 1488:
case 1112:
case 3785:
case 2977:
case 3053:
case 1032:
case 2399:
case 1698:
case 3778:
case 1475:
case 1873:
case 2558:
case 4000:
case 1733:
case 1216:
case 1123:
case 1939:
case 3751:
case 4004:
case 2097:
case 3646:
case 2296:
case 1253:
case 1519:
case 3594:
case 3343:
case 3136:
case 1165:
case 581:
case 1111:
case 1954:
case 3338:
case 565:
case 1373:
case 2027:
case 2226:
case 3890:
case 2872:
case 1140:
case 674:
case 2732:
case 3796:
case 2122:
case 1573:
case 2858:
case 3918:
case 1900:
case 2106:
case 1436:
case 3465:
case 1768:
case 3411:
case 4005:
case 3886:
case 2202:
case 2789:
case 1470:
case 3525:
case 4050:
case 743:
case 62:
case 3289:
case 45:
case 3702:
case 94:
case 259:
case 3003:
case 239:
case 1386:
case 1895:
case 2456:
case 14:
case 1493:
case 1666:
case 3981:
case 2421:
case 2315:
case 1175:
case 1437:
case 1825:
case 2169:
case 2681:
case 851:
case 766:
case 528:
case 3887:
case 3160:
case 2561:
case 981:
case 2935:
case 831:
case 290:
case 2233:
case 1843:
case 2716:
case 3748:
case 3819:
case 653:
case 860:
case 1520:
case 2542:
case 2227:
case 2026:
case 54:
case 2998:
case 3797:
case 2947:
case 2605:
case 1894:
case 3193:
case 2342:
case 2650:
case 1460:
case 2514:
case 3112:
case 1590:
case 3647:
case 1053:
case 2934:
case 3905:
case 908:
case 1174:
case 3137:
case 2841:
case 128:
case 1824:
case 1838:
case 3123:
case 1390:
case 3733:
case 3216:
case 1752:
case 3017:
case 1543:
case 3519:
case 683:
case 1232:
case 2310:
case 1170:
case 2842:
case 1646:
case 3031:
case 2406:
case 1343:
case 308:
case 1217:
case 2510:
case 3165:
case 2341:
case 2149:
case 808:
case 3954:
case 1338:
case 1890:
case 764:
case 2753:
case 3676:
case 772:
case 2085:
case 2639:
case 701:
case 3573:
case 3436:
case 1595:
case 1411:
case 2562:
case 618:
case 2655:
case 3164:
case 3768:
case 2967:
case 865:
case 2682:
case 1395:
case 2362:
case 3470:
case 381:
case 3387:
case 1440:
case 3667:
case 3609:
case 3587:
case 441:
case 3955:
case 951:
case 2413:
case 2365:
case 1234:
case 2119:
case 2844:
case 3277:
case 1171:
case 1997:
case 1228:
case 2039:
case 1750:
case 856:
case 2565:
case 2511:
case 1462:
case 28:
case 2893:
case 2652:
case 2931:
case 704:
case 986:
case 489:
case 836:
case 298:
case 1592:
case 2678:
case 519:
case 1298:
case 4068:
case 368:
case 120:
case 1322:
case 3952:
case 3549:
case 2173:
case 785:
case 349:
case 417:
case 1705:
case 1046:
case 1247:
case 1781:
case 1410:
case 112:
case 3162:
case 173:
case 884:
case 2000:
case 2364:
case 9:
case 305:
case 444:
case 1235:
case 2845:
case 2443:
case 3266:
case 1306:
case 954:
case 2082:
case 3984:
case 2766:
case 2424:
case 1108:
case 3869:
case 1441:
case 2601:
case 730:
case 2055:
case 2187:
case 2860:
case 3429:
case 2345:
case 2989:
case 137:
case 2420:
case 203:
case 834:
case 3980:
case 706:
case 2081:
case 984:
case 2680:
case 1083:
case 3569:
case 3472:
case 2360:
case 3035:
case 3:
case 3161:
case 1414:
case 1782:
case 727:
case 968:
case 1356:
case 557:
case 3926:
case 2393:
case 3098:
case 300:
case 936:
case 439:
case 886:
case 2050:
case 2218:
case 1321:
case 1879:
case 1556:
case 25:
case 3047:
case 3632:
case 2746:
case 735:
case 1813:
case 3028:
case 2323:
case 3996:
case 1077:
case 2932:
case 2512:
case 1461:
case 2337:
case 3718:
case 1158:
case 2917:
case 525:
case 2523:
case 3857:
case 2312:
case 1230:
case 2840:
case 622:
case 386:
case 452:
case 3228:
case 3234:
case 2205:
case 2570:
case 2747:
case 2336:
case 4002:
case 2633:
case 142:
case 3579:
case 671:
case 2370:
case 2627:
case 3948:
case 2194:
case 602:
case 2759:
case 1030:
case 820:
case 3927:
case 3513:
case 1631:
case 3891:
case 1952:
case 3933:
case 1549:
case 2487:
case 136:
case 1985:
case 2697:
case 1141:
case 3247:
case 584:
case 3522:
case 156:
case 2734:
case 3705:
case 2138:
case 1408:
case 2124:
case 373:
case 1162:
case 387:
case 3410:
case 3506:
case 1901:
case 1283:
case 3235:
case 819:
case 542:
case 3306:
case 1009:
case 1067:
case 1266:
case 319:
case 957:
case 2473:
case 568:
case 1807:
case 2875:
case 536:
case 3704:
case 812:
case 937:
case 873:
case 549:
case 2281:
case 726:
case 2903:
case 184:
case 4026:
case 556:
case 416:
case 2767:
case 2709:
case 1429:
case 4085:
case 275:
case 3806:
case 3700:
case 2255:
case 1980:
case 2186:
case 3968:
case 987:
case 837:
case 77:
case 2200:
case 1902:
case 1035:
case 325:
case 3414:
case 3209:
case 2375:
case 1307:
case 2588:
case 1369:
case 154:
case 586:
case 2730:
case 3356:
case 640:
case 241:
case 3521:
case 799:
case 920:
case 100:
case 3556:
case 1632:
case 4084:
case 2776:
case 3077:
case 3276:
case 1034:
case 1028:
case 1996:
case 792:
case 2239:
case 2374:
case 1849:
case 3415:
case 534:
case 5:
case 3754:
case 3199:
case 2574:
case 554:
case 3822:
case 724:
case 4042:
case 3866:
case 3452:
case 506:
case 2769:
case 3695:
case 2245:
case 1775:
case 2707:
case 3908:
case 824:
case 1184:
case 1788:
case 3485:
case 399:
case 1509:
case 269:
case 324:
case 2608:
case 4014:
case 155:
case 899:
case 1309:
case 580:
case 2995:
case 3745:
case 248:
case 1448:
case 1367:
case 135:
case 1962:
case 2938:
case 3546:
case 2924:
case 106:
case 2671:
case 1619:
case 1256:
case 3712:
case 1185:
case 2293:
case 3643:
case 2518:
case 646:
case 639:
case 3133:
case 3723:
case 3877:
case 3694:
case 1834:
case 2244:
case 757:
case 1774:
case 3013:
case 3127:
case 1221:
case 3092:
case 2237:
case 422:
case 652:
case 3148:
case 3744:
case 555:
case 1376:
case 3079:
case 1910:
case 1673:
case 2943:
case 37:
case 3793:
case 180:
case 2212:
case 1330:
case 494:
case 1898:
case 3638:
case 1859:
case 1291:
case 2074:
case 3972:
case 4062:
case 1292:
case 689:
case 1334:
case 3958:
case 3377:
case 2265:
case 2757:
case 3740:
case 1534:
case 787:
case 3091:
case 3402:
case 326:
case 1222:
case 2489:
case 2240:
case 585:
case 1359:
case 3257:
case 3765:
case 2699:
case 3249:
case 1347:
case 1468:
case 3480:
case 3711:
case 719:
case 1942:
case 1213:
case 1961:
case 104:
case 3496:
case 807:
case 2075:
case 1069:
case 3583:
case 4010:
case 1335:
case 2264:
case 3686:
case 3168:
case 678:
case 2986:
case 185:
case 550:
case 720:
case 999:
case 307:
case 496:
case 2662:
case 3433:
case 2555:
case 3775:
case 1478:
case 2382:
case 3835:
case 985:
case 4029:
case 1883:
case 2355:
case 616:
case 855:
case 199:
case 2582:
case 3788:
case 2288:
case 3567:
case 904:
case 277:
case 3509:
case 355:
case 827:
case 3367:
case 4058:
case 1269:
case 961:
case 3309:
case 1006:
case 4072:
case 3962:
case 3687:
case 2416:
case 2040:
case 306:
case 1022:
case 2354:
case 3185:
case 1643:
case 3256:
case 3057:
case 1484:
case 2403:
case 3152:
case 2554:
case 3049:
case 1127:
case 3221:
case 1737:
case 3178:
case 1013:
case 1877:
case 2805:
case 3834:
case 1694:
case 1148:
case 3530:
case 754:
case 218:
case 3847:
case 2850:
case 3376:
case 2011:
case 1079:
case 3910:
case 7:
case 2756:
case 3330:
case 734:
case 1793:
case 17:
case 695:
case 2539:
case 3673:
case 806:
case 1971:
case 3576:
case 3898:
case 1638:
case 850:
case 663:
case 2642:
case 2236:
case 2023:
case 3328:
case 1999:
case 3279:
case 2305:
case 2117:
case 3914:
case 2854:
case 980:
case 1091:
case 3196:
case 2132:
case 2270:
case 614:
case 1577:
case 1740:
case 784:
case 330:
case 409:
case 3547:
case 3770:
case 3222:
case 126:
case 2614:
case 1257:
case 3151:
case 1929:
case 2779:
case 350:
case 2839:
case 3347:
case 1765:
case 3213:
case 3126:
case 2792:
case 3942:
case 2044:
case 304:
case 445:
case 1566:
case 1383:
case 2855:
case 2060:
case 1496:
case 3102:
case 1663:
case 3535:
case 742:
case 955:
case 361:
case 2882:
case 935:
case 3335:
case 2304:
case 253:
case 861:
case 1168:
case 3809:
case 749:
case 2045:
case 2800:
case 2381:
case 2189:
case 927:
case 2661:
case 3989:
case 541:
case 3345:
case 1282:
case 1255:
case 3081:
case 303:
case 3545:
case 311:
case 3360:
case 1575:
case 2507:
case 2569:
case 1388:
case 803:
case 3680:
case 1668:
case 811:
case 2307:
case 1375:
case 2369:
case 2161:
case 254:
case 3490:
case 2689:
case 601:
case 1254:
case 2617:
case 33:
case 2098:
case 1120:
case 2926:
case 613:
case 2059:
case 672:
case 1730:
case 4003:
case 1870:
case 2632:
case 2047:
case 3696:
case 664:
case 35:
case 3593:
case 3344:
case 3865:
case 2951:
case 3050:
case 2849:
case 3005:
case 2034:
case 2996:
case 3323:
case 3746:
case 1574:
case 286:
case 783:
case 3312:
case 998:
case 83:
case 3917:
case 98:
case 1336:
case 3039:
case 1143:
case 3685:
case 2277:
case 3844:
case 3678:
case 398:
case 1536:
case 1798:
case 2030:
case 1759:
case 3495:
case 3931:
case 3893:
case 242:
case 1916:
case 2549:
case 236:
case 898:
case 2978:
case 1697:
case 2349:
case 523:
case 3777:
case 1138:
case 3540:
case 1734:
case 753:
case 2408:
case 2557:
case 3823:
case 3173:
case 3494:
case 2901:
case 3000:
case 2283:
case 1195:
case 658:
case 2162:
case 428:
case 2009:
case 3684:
case 3443:
case 2067:
case 4053:
case 1204:
case 638:
case 1419:
case 2471:
case 3364:
case 2807:
case 3438:
case 1125:
case 1473:
case 3082:
case 2984:
case 1281:
case 3187:
case 1888:
case 70:
case 911:
case 3601:
case 1989:
case 1602:
case 375:
case 3282:
case 1864:
case 53:
case 1345:
case 2968:
case 103:
case 1081:
case 2442:
case 111:
case 237:
case 2700:
case 1545:
case 3388:
case 3575:
case 1360:
case 2755:
case 3588:
case 2267:
case 2209:
case 1004:
case 3254:
case 1486:
case 3870:
case 2521:
case 2356:
case 774:
case 3776:
case 1696:
case 2892:
case 2739:
case 1218:
case 1050:
case 2556:
case 465:
case 2879:
case 1344:
case 1811:
case 1651:
case 1512:
case 2415:
case 3239:
case 2591:
case 3190:
case 2276:
case 3953:
case 2077:
case 769:
case 2172:
case 1312:
case 2822:
case 1537:
case 3574:
case 970:
case 1523:
case 3143:
case 1685:
case 2750:
case 2392:
case 3747:
case 1365:
case 1311:
case 2171:
case 1119:
case 2997:
case 1495:
case 2948:
case 3536:
case 198:
case 3916:
case 2579:
case 18:
case 451:
case 220:
case 621:
case 2322:
case 1054:
case 2513:
case 941:
case 2927:
case 2298:
case 870:
case 3124:
case 431:
case 1425:
case 1777:
case 2705:
case 3734:
case 1540:
case 3697:
case 3250:
case 1173:
case 4089:
case 3195:
case 1000:
case 4017:
case 1564:
case 776:
case 2410:
case 2781:
case 287:
case 2603:
case 1684:
case 598:
case 2306:
case 2704:
case 3735:
case 1424:
case 975:
case 1438:
case 3875:
case 323:
case 3888:
case 1055:
case 3903:
case 1860:
case 1601:
case 1783:
case 3265:
case 3749:
case 3818:
case 1023:
case 3211:
case 1305:
case 1037:
case 3074:
case 1722:
case 3990:
case 376:
case 1132:
case 2740:
case 1012:
case 3629:
case 1854:
case 92:
case 2056:
case 10:
case 723:
case 3240:
case 3489:
case 226:
case 3920:
case 1044:
case 4087:
case 2480:
case 2711:
case 1839:
case 533:
case 2663:
case 1453:
case 3432:
case 1504:
case 2383:
case 1855:
case 1060:
case 2686:
case 3264:
case 1882:
case 628:
case 3417:
case 191:
case 2168:
case 962:
case 1615:
case 207:
case 974:
case 2451:
case 3963:
case 1800:
case 1381:
case 3707:
case 2478:
case 1804:
case 3769:
case 362:
case 1662:
case 3103:
case 1555:
case 741:
case 1582:
case 299:
case 869:
case 2883:
case 3608:
case 874:
case 1288:
case 1300:
case 183:
case 1881:
case 3260:
case 177:
case 292:
case 1064:
case 1416:
case 2269:
case 862:
case 2745:
case 1500:
case 3431:
case 3995:
case 2006:
case 2207:
case 32:
case 3293:
case 2712:
case 1973:
case 3671:
case 1040:
case 2022:
case 1791:
case 464:
case 2546:
case 3938:
case 2127:
case 3318:
case 2013:
case 472:
case 1805:
case 1403:
case 775:
case 1065:
case 2079:
case 2148:
case 577:
case 1274:
case 3036:
case 3237:
case 3994:
case 479:
case 1919:
case 1641:
case 2638:
case 1756:
case 27:
case 2793:
case 3943:
case 1539:
case 1211:
case 3117:
case 2279:
case 3023:
case 2328:
case 1749:
case 1818:
case 1265:
case 3236:
case 3037:
case 3713:
case 1074:
case 3642:
case 80:
case 3270:
case 1153:
case 2196:
case 3722:
case 1629:
case 3854:
case 2914:
case 3012:
case 30:
case 3093:
case 3614:
case 3550:
case 4025:
case 631:
case 2222:
case 2770:
case 1240:
case 230:
case 2830:
case 1672:
case 2942:
case 3044:
case 693:
case 3350:
case 2213:
case 1658:
case 2347:
case 1699:
case 421:
case 250:
case 3779:
case 78:
case 3504:
case 3060:
case 2961:
case 3855:
case 983:
case 1088:
case 977:
case 833:
case 2335:
case 891:
case 3882:
case 261:
case 1075:
case 2206:
case 2007:
case 2069:
case 391:
case 285:
case 2809:
case 3581:
case 353:
case 1986:
case 2867:
case 3661:
case 3800:
case 1963:
case 3804:
case 3382:
case 52:
case 2427:
case 2775:
case 3555:
case 953:
case 3987:
case 1103:
case 2788:
case 2184:
case 174:
case 3582:
case 1925:
case 877:
case 3355:
case 2497:
case 255:
case 2509:
case 3881:
case 1260:
case 169:
case 3416:
case 235:
case 3064:
case 2101:
case 2309:
case 1431:
case 1995:
case 148:
case 3500:
case 4063:
case 3973:
case 2256:
case 2185:
case 1518:
case 1938:
case 206:
case 562:
case 3791:
case 3040:
case 1671:
case 1244:
case 3805:
case 1318:
case 2774:
case 2221:
case 1223:
case 2910:
case 3011:
case 1116:
case 3065:
case 3850:
case 569:
case 1994:
case 3274:
case 1036:
case 3131:
case 2898:
case 2859:
case 2576:
case 2673:
case 681:
case 3539:
case 1943:
case 1212:
case 668:
case 2286:
case 2087:
case 747:
case 1008:
case 2182:
case 656:
case 3109:
case 2100:
case 642:
case 2889:
case 3062:
case 102:
case 2964:
case 1922:
case 407:
case 3041:
case 2940:
case 1670:
case 3957:
case 3378:
case 3949:
case 3552:
case 910:
case 2832:
case 509:
case 1636:
case 1913:
case 2772:
case 684:
case 2220:
case 258:
case 3130:
case 1397:
case 2911:
case 3258:
case 2965:
case 3851:
case 2657:
case 605:
case 2331:
case 145:
case 1597:
case 266:
case 763:
case 2290:
case 1071:
case 2019:
case 492:
case 1072:
case 3644:
case 1058:
case 1099:
case 2517:
case 3885:
case 36:
case 3466:
case 3852:
case 3014:
case 2532:
case 424:
case 3738:
case 1991:
case 3128:
case 3724:
case 1719:
case 2238:
case 86:
case 2831:
case 29:
case 2150:
case 3637:
case 2944:
case 3198:
case 3159:
case 2960:
case 394:
case 3015:
case 3502:
case 3477:
case 3725:
case 1434:
case 915:
case 2708:
case 2104:
case 2295:
case 3969:
case 1787:
case 686:
case 322:
case 4092:
case 213:
case 4013:
case 140:
case 3580:
case 272:
case 2389:
case 1568:
case 201:
case 2669:
case 600:
case 822:
case 1459:
case 3380:
case 2225:
case 3801:
case 1368:
case 1688:
case 264:
case 596:
case 2454:
case 2503:
case 802:
case 620:
case 1802:
case 1446:
case 2303:
case 3008:
case 2025:
case 2761:
case 997:
case 2439:
case 3868:
case 1301:
case 1763:
case 1501:
case 744:
case 302:
case 1041:
case 3922:
case 196:
case 619:
case 2038:
case 3333:
case 845:
case 1229:
case 3327:
case 2714:
case 1957:
case 2118:
case 1378:
case 2455:
case 1665:
case 1611:
case 485:
case 3533:
case 782:
case 3636:
case 3527:
case 2853:
case 2742:
case 1272:
case 673:
case 1720:
case 3992:
case 1851:
case 461:
case 515:
case 4007:
case 1010:
case 1258:
case 4069:
case 1299:
case 3214:
case 3348:
case 2316:
case 1176:
case 2970:
case 789:
case 1640:
case 345:
case 3597:
case 1826:
case 2621:
case 1483:
case 2974:
case 732:
case 3099:
case 3058:
case 3773:
case 2656:
case 16:
case 1466:
case 3833:
case 1852:
case 2404:
case 3435:
case 1128:
case 1134:
case 1271:
case 1596:
case 3827:
case 1878:
case 2741:
case 3241:
case 3719:
case 3848:
case 427:
case 1743:
case 1612:
case 3956:
case 1326:
case 3029:
case 746:
case 2710:
case 110:
case 243:
case 1159:
case 1351:
case 1794:
case 3921:
case 1526:
case 3897:
case 1015:
case 194:
case 3166:
case 3428:
case 1477:
case 1725:
case 1502:
case 971:
case 840:
case 1645:
case 3183:
case 122:
case 3262:
case 1302:
case 902:
case 1580:
case 2762:
case 4049:
case 3368:
case 2063:
case 4057:
case 1380:
case 1208:
case 129:
case 3688:
case 397:
case 909:
case 2450:
case 1842:
case 2232:
case 1310:
case 3296:
case 3097:
case 2646:
case 4035:
case 2751:
case 2543:
case 2394:
case 3179:
case 2217:
case 2016:
case 1510:
case 1654:
case 595:
case 3829:
case 2136:
case 692:
case 2726:
case 3192:
case 3048:
case 2890:
case 797:
case 3027:
case 1078:
case 3113:
case 1814:
case 3033:
case 3717:
case 3251:
case 3899:
case 3122:
case 116:
case 1753:
case 699:
case 3732:
case 1562:
case 2780:
case 2411:
case 1655:
case 1492:
case 3106:
case 332:
case 67:
case 3202:
case 1682:
case 4028:
case 846:
case 917:
case 359:
case 4047:
case 832:
case 982:
case 346:
case 1422:
case 2440:
case 2525:
case 339:
case 852:
case 400:
case 1413:
case 1815:
case 516:
case 2325:
case 3280:
case 3284:
case 1862:
case 24:
case 2493:
case 959:
case 626:
case 2563:
case 2895:
case 946:
case 2444:
case 2683:
case 436:
case 939:
case 2701:
case 2586:
case 468:
case 1703:
case 2423:
case 1681:
case 745:
case 952:
case 3201:
case 817:
case 1002:
case 1515:
case 4076:
case 2784:
case 2412:
case 2520:
case 378:
case 1959:
case 3731:
case 3278:
case 3329:
case 484:
case 190:
case 3252:
case 1716:
case 1233:
case 1051:
case 3156:
case 2320:
case 1342:
case 3529:
case 1947:
case 844:
case 2677:
case 1297:
case 3399:
case 1928:
case 1934:
case 2053:
case 2460:
case 344:
case 405:
case 2785:
case 3372:
case 3599:
case 3558:
case 514:
case 2231:
case 2174:
case 2824:
case 2838:
case 1248:
case 1296:
case 1097:
case 2253:
case 552:
case 3842:
case 722:
case 2519:
case 2165:
case 3510:
case 4083:
case 1179:
case 1371:
case 208:
case 3406:
case 635:
case 2031:
case 3078:
case 729:
case 2630:
case 990:
case 1033:
case 3052:
case 1717:
case 546:
case 3149:
case 3814:
case 3341:
case 1858:
case 3157:
case 1946:
case 2140:
case 457:
case 3753:
case 3541:
case 316:
case 2164:
case 3655:
case 3479:
case 76:
case 1106:
case 2900:
case 2436:
case 281:
case 1202:
case 2470:
case 3682:
case 914:
case 2609:
case 606:
case 159:
case 2667:
case 710:
case 1508:
case 2387:
case 265:
case 3422:
case 3413:
case 3600:
case 2955:
case 1308:
case 1449:
case 3815:
case 182:
case 3862:
case 4046:
case 1284:
case 3456:
case 630:
case 2635:
case 2089:
case 650:
case 2203:
case 2981:
case 3080:
case 293:
case 1068:
case 363:
case 3703:
case 3169:
case 1808:
case 3107:
case 2160:
case 1966:
case 2887:
case 3998:
case 1329:
case 3959:
case 3542:
case 2144:
case 3716:
case 3233:
case 685:
case 3810:
case 21:
case 1156:
case 2950:
case 916:
case 3605:
case 419:
case 2905:
case 2032:
case 589:
case 1977:
case 1191:
case 3928:
case 1399:
case 1372:
case 3650:
case 661:
case 1558:
case 715:
case 2698:
case 2659:
case 412:
case 2137:
case 890:
case 3314:
case 1407:
case 2475:
case 2727:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1745787601/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,0,1,0,1,0,1,0,1,1,0,0,0,1,0,1,1,1,1,0,1,0,0,1,1,0,1,1,1,1,0,1,1,0,1,1,1,0,0,1,0,0,0,0,1,0,0,1,0,0,1,1,1,1,0,0,0,0,0,0,0,1,0,0,1,0,1,1,0,1,0,0,0,1,0,1,1,1,0,1,0,0,1,0,0,1,0,0,0,0,0,1,0,1,0,0,0,1,1,1,1,1,1,1,0,1,0,0,0,1,1,1,1,0,0,1,0,0,0,1,1,1,0,0,0,1,0,1,1,0,0,0,0,0,1,1,1,1,0,1,0,1,0,0,1,0,0,1,0,0,1,0,0,1,1,1,0,1,1,0,0,0,0,1,0,0,0,0,1,0,0,1,1,1,0,0,1,0,0,1,0,1,1,1,1,0,0,0,0,1,1,0,0,1,0,1,0,1,1,0,1,1,1,0,0,1,1,1,0,1,0,0,1,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,1,1,0,0,0,0,1,1,1,0,1,0,1,1,1,0,0,0,0,1,0,1,0,0,1,1,1,0,0,1,1,0,1,0,0,1,1,1,0,0,1,0,1,1,0,0,1,0,1,1,0,0,1,0,0,0,1,1,1,0,0,1,0,1,1,0,0,1,0,1,1,1,1,1,1,1,1,1,1,1,0,0,1,0,1,0,0,1,0,0,1,0,0,1,1,1,1,1,0,0,0,1,0,1,0,0,0,0,0,0,1,0,0,0,1,1,1,1,0,0,1,1,0,0,1,0,1,0,0,1,1,0,1,1,1,0,0,1,0,1,0,0,0,1,1,0,1,1,0,1,0,0,1,0,0,0,0,1,1,1,0,0,1,0,0,1,0,0,1,1,1,1,0,0,0,0,1,0,1,0,1,0,0,1,0,0,0,1,1,0,1,0,1,1,0,1,0,0,1,1,0,0,1,0,0,0,0,1,0,0,1,0,1,0,0,1,1,0,0,1,0,0,1,1,1,0,0,0,1,0,0,0,1,1,0,1,1,0,0,1,1,0,0,1,0,0,0,0,1,0,1,0,0,0,1,1,1,0,0,0,1,0,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,1,1,0,0,1,0,0,0,1,0,1,0,0,1,0,0,1,0,1,1,0,1,0,0,0,0,1,1,1,0,0,1,0,0,1,1,0,1,0,1,1,1,1,1,0,0,0,1,0,1,1,0,1,1,1,0,0,1,0,0,0,0,1,0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,0,0,1,1,0,1,0,1,1,1,1,0,1,1,0,0,0,0,0,0,1,1,0,1,0,1,1,1,1,1,1,0,0,1,0,1,0,1,1,0,0,0,1,0,0,1,1,1,1,1,0,0,0,1,0,0,0,1,0,1,1,0,0,1,0,1,0,0,1,0,1,1,0,0,0,1,0,1,1,1,1,1,0,1,0,1,0,0,1,0,1,1,1,1,0,0,1,0,0,1,1,0,1,0,0,0,1,0,1,0,0,1,0,1,0,1,0,1,0,0,0,0,1,0,0,0,1,1,1,1,1,1,0,1,1,1,1,1,1,1,0,1,1,0,0,0,0,0,1,1,1,1,1,1,1,0,1,0,1,0,1,1,0,0,1,0,0,0,0,0,1,1,0,1,0,0,1,0,0,1,0,1,1,1,0,0,0,0,1,1,1,1,1,0,1,0,1,0,0,1,1,0,0,0,1,0,1,0,0,1,1,0,0,1,1,1,0,0,1,1,0,0,0,0,1,0,1,1,1,1,0,1,0,0,1,0,0,0,1,1,1,1,0,1,1,1,0,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,1,1,0,0,0,1,1,1,0,1,1,1,0,0,1,1,0,1,1,1,0,0,1,0,1,0,0,0,0,1,0,1,0,1,0,1,1,0,0,0,0,0,0,1,1,0,1,1,0,1,0,0,0,1,1,1,1,0,1,1,1,1,1,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,0,0,0,1,0,0,0,0,1,1,1,1,1,0,1,1,1,0,1,1,0,0,0,1,0,1,0,1,1,1,0,1,1,0,1,0,0,1,1,1,1,1,1,1,1,1,0,1,0,0,0,0,0,0,1,1,1,1,0,1,0,1,0,1,0,1,1,1,0,1,1,0,1,0,0,0,0,1,0,1,1,1,1,0,0,1,0,1,0,1,1,1,1,1,1,0,0,1,1,0,1,1,0,1,0,0,0,1,1,0,1,1,1,0,0,1,0,1,0,0,0,1,1,0,1,1,1,0,1,1,0,1,1,0,1,1,1,0,1,0,1,0,0,0,0,1,0,0,1,0,0,1,1,0,1,0,1,1,0,0,1,1,0,1,0,1,0,0,1,1,0,0,0,1,0,1,1,1,0,0,1,0,1,0,1,1,0,0,0,1,0,1,0,0,0,1,0,1,1,0,1,0,0,0,0,1,0,0,0,0,1,0,0,1,0,1,1,1,0,1,0,0,1,0,0,1,0,1,1,0,1,1,1,1,0,0,1,0,1,0,0,1,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,1,1,1,0,0,1,1,1,1,0,1,1,1,0,0,0,0,1,1,1,0,1,1,1,1,0,0,0,0,1,0,0,0,1,0,0,1,1,0,0,0,0,1,1,1,1,1,1,0,1,0,0,1,0,1,1,0,0,1,0,1,1,0,1,0,0,0,0,0,0,1,1,1,1,0,1,0,1,0,1,1,1,0,0,0,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,0,0,0,0,1,1,0,0,1,1,0,0,0,1,0,0,1,1,1,1,0,1,1,1,0,1,0,0,0,1,1,1,1,0,1,0,0,0,1,0,0,0,0,1,0,0,1,1,0,0,0,0,1,0,1,1,1,0,1,1,1,0,1,1,0,1,0,1,1,0,1,0,0,1,0,1,0,1,0,0,0,0,1,0,1,0,1,0,0,0,1,0,1,0,1,1,0,1,1,0,1,1,0,1,0,1,1,0,0,1,0,1,1,0,0,0,1,0,1,0,0,1,0,1,1,1,1,1,1,0,0,0,0,1,0,1,1,0,0,0,1,1,1,0,0,0,1,1,1,1,0,0,0,1,0,1,0,1,0,0,1,0,1,0,1,1,0,0,0,0,1,1,0,1,0,1,0,0,0,1,1,0,1,1,0,0,0,1,1,1,1,1,0,0,0,1,1,1,0,1,0,0,1,0,1,1,1,1,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,1,1,0,1,1,0,0,1,0,1,0,0,0,1,0,0,0,0,0,1,1,0,1,0,0,0,1,0,1,0,1,0,1,0,0,0,0,1,1,1,0,1,0,0,1,0,1,0,0,0,0,0,0,0,1,0,1,0,0,1,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,1,0,1,0,0,0,1,0,1,1,0,0,0,0,0,0,1,0,1,1,0,0,0,1,0,1,0,1,1,0,1,0,1,1,0,0,0,0,1,0,0,1,1,0,1,1,0,0,0,1,1,0,1,1,0,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,0,1,1,0,0,1,0,0,0,1,0,1,0,1,1,1,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,1,1,0,1,1,0,1,0,0,1,0,0,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,1,0,0,0,0,0,1,1,0,1,1,0,0,1,0,0,1,0,1,0,1,0,1,0,0,1,0,0,1,0,0,1,1,0,1,0,0,0,1,1,1,0,0,0,1,1,0,0,1,0,1,1,0,0,1,1,1,1,0,1,0,1,1,0,1,1,0,0,1,0,1,1,1,0,0,1,1,0,0,0,0,1,1,1,0,0,0,0,1,0,0,1,0,0,0,1,1,0,0,1,1,0,0,0,0,0,1,0,1,1,1,1,1,0,0,1,1,1,0,1,0,1,0,0,0,0,0,1,0,0,1,0,0,0,1,1,1,0,1,1,1,0,0,0,0,1,0,1,0,0,0,1,1,0,0,1,0,1,1,1,0,1,0,0,0,0,0,1,0,1,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,1,0,0,0,0,1,0,1,1,1,1,0,0,1,1,0,0,1,1,0,0,0,0,1,0,1,0,0,1,0,1,0,1,1,1,1,1,1,0,0,0,0,1,0,1,1,0,0,1,0,0,1,1,0,0,0,1,1,0,1,1,0,1,0,1,1,1,1,1,0,1,1,0,0,0,0,0,1,1,0,1,0,1,0,1,0,0,1,0,0,1,0,0,1,1,0,1,1,1,0,0,1,1,1,0,1,0,0,0,1,1,1,0,1,0,1,1,0,1,0,0,1,0,0,1,0,1,1,0,0,1,1,1,1,1,0,0,0,1,1,1,0,0,0,0,1,1,0,1,0,1,0,1,1,0,0,1,0,1,0,1,0,0,0,0,0,0,0,1,1,0,1,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,1,0,0,1,1,0,0,0,1,0,0,1,1,1,1,0,1,0,0,0,1,0,0,0,1,1,1,0,0,0,0,0,1,0,0,1,1,1,1,0,1,1,1,0,1,1,0,1,1,1,1,0,0,1,0,0,0,0,1,1,1,1,1,1,0,1,0,0,0,0,1,0,1,0,1,0,1,0,1,1,0,1,1,1,0,1,1,0,1,1,0,0,0,1,1,0,1,1,1,0,0,1,1,1,0,0,0,1,1,1,0,0,1,1,1,1,1,1,0,0,1,1,0,0,0,0,0,0,1,1,0,1,1,0,1,0,0,0,0,0,1,1,0,1,0,1,1,0,0,0,0,0,1,1,1,1,0,1,0,1,1,1,1,0,1,0,1,0,0,1,0,1,1,0,1,0,0,1,0,1,1,1,1,1,0,1,1,0,1,0,0,1,1,0,0,0,1,0,1,1,0,1,1,1,1,0,0,1,0,1,0,1,1,1,0,0,0,1,1,0,0,1,0,1,0,1,0,0,1,0,1,1,1,0,0,0,1,0,1,0,1,1,0,0,1,1,1,0,0,0,1,1,0,0,1,0,1,1,1,1,1,0,0,1,0,1,0,0,1,1,1,0,1,0,0,1,0,0,0,1,1,0,1,0,1,0,1,1,1,1,0,1,1,0,0,0,1,1,0,1,1,0,0,1,1,0,0,0,0,0,0,1,1,0,0,1,1,0,1,1,1,0,1,1,0,0,1,1,0,0,1,1,1,0,0,1,1,0,0,0,0,0,0,1,0,0,1,1,0,1,0,1,1,0,1,0,1,0,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,1,0,0,0,1,0,1,1,1,1,1,1,0,0,1,1,1,1,1,0,1,0,1,1,1,0,0,0,0,1,0,0,0,0,0,0,1,0,0,1,1,0,0,1,0,1,1,0,0,0,0,1,1,1,1,1,0,0,1,1,1,0,1,0,0,0,1,1,0,0,0,1,0,1,0,1,1,1,0,1,0,1,0,1,0,1,0,0,1,0,0,0,0,1,1,0,0,0,1,0,1,0,1,0,0,1,1,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,1,0,0,1,0,1,1,0,1,0,0,1,1,1,0,1,0,1,1,1,0,0,0,1,0,1,0,0,1,1,1,0,1,1,1,1,1,1,0,0,1,0,1,0,1,0,1,0,1,0,1,1,0,1,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,1,1,1,0,1,0,1,0,0,1,0,0,0,0,1,0,1,1,0,0,1,1,1,0,1,0,0,0,0,1,1,1,1,1,0,1,1,1,0,0,1,1,0,1,0,1,1,1,0,1,0,1,1,1,0,0,1,1,0,1,1,0,1,1,1,1,1,0,0,1,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,1,0,0,0,0,1,1,1,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,1,0,0,1,1,1,1,0,0,0,0,1,1,1,1,1,0,1,1,0,0,0,1,1,0,1,1,1,1,0,0,1,1,1,0,0,0,0,0,0,1,1,0,0,1,1,0,0,1,0,0,0,1,1,0,1,1,1,1,0,1,0,1,1,0,1,1,0,1,1,1,1,0,1,1,0,1,0,1,0,0,0,0,1,1,0,0,1,0,0,1,0,0,0,0,0,0,1,0,1,1,0,0,0,1,1,0,1,1,0,0,1,0,1,0,1,1,1,0,0,1,1,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,1,1,0,1,1,0,1,0,0,0,1,0,0,1,1,1,0,1,0,1,1,0,1,0,0,1,0,1,0,0,0,1,1,1,1,0,1,0,0,1,0,1,0,0,1,0,0,1,1,1,1,1,0,1,0,0,1,0,0,1,1,0,0,1,1,1,0,1,0,1,0,1,1,1,0,1,1,1,0,0,1,0,0,1,1,1,1,0,1,1,0,0,0,1,1,0,1,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,0,0,0,1,1,1,0,0,1,1,1,0,1,1,0,1,0,0,1,1,0,0,0,1,0,0,0,0,1,1,1,0,1,1,1,0,1,1,0,1,0,0,1,1,0,0,0,0,0,1,0,0,0,0,1,1,1,1,1,0,1,0,1,1,0,1,1,1,1,0,1,1,1,0,1,1,0,0,0,1,0,0,0,0,1,1,0,1,0,1,0,1,0,1,1,0,1,0,1,1,0,1,1,0,1,1,0,1,1,0,0,0,0,0,0,1,0,1,0,1,1,0,1,0,0,0,1,1,1,0,0,1,0,0,1,0,0,0,0,1,1,1,1,1,0,1,1,1,0,0,0,0,0,1,0,1,1,1,1,0,1,0,1,1,1,0,1,0,1,1,1,1,1,0,0,0,1,0,0,0,1,0,1,1,1,1,1,0,1,0,1,0,0,0,0,1,1,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,1,0,1,1,1,0,1,0,0,1,0,0,0,1,1,1,1,1,1,1,0,1,0,0,1,0,0,1,0,1,1,1,0,1,1,0,1,0,0,1,0,1,1,0,0,0,1,0,0,1,1,0,0,1,1,0,0,0,1,0,0,0,1,1,1,0,1,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,1,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,1,0,0,0,0,0,1,1,0,1,1,1,0,1,1,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,1,0,0,0,1,0,1,0,0,0,0,1,0,1,1,1,1,0,0,1,0,0,0,1,1,0,0,1,1,1,1,0,0,0,1,0,1,0,1,0,1,0,0,1,1,0,0,1,0,0,0,1,0,1,1,1,1,0,0,1,0,1,0,1,1,0,1,1,0,1,1,0,0,1,1,1,1,0,0,1,1,1,0,1,1,0,1,0,0,1,1,0,1,0,0,0,0,1,0,0,0,1,0,1,0,0,0,1,1,1,1,0,0,1,1,1,1,1,0,0,0,1,1,1,0,0,0,1,1,0,0,1,0,1,1,1,0,0,0,1,1,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,1,1,1,0,0,0,1,1,1,0,1,1,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,1,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,1,0,1,1,1,1,1,0,0,0,0,0,1,1,1,1,0,0,1,1,1,1,1,1,0,1,1,0,1,1,1,1,0,1,1,1,1,1,0,0,1,1,1,1,0,0,0,1,0,1,1,1,1,1,0,0,1,0,1,0,1,0,1,1,1,1,1,1,0,1,0,1,1,0,0,0,0,0,0,1,0,0,0,1,0,0,1,1,1,1,0,1,0,1,1,1,1,1,0,0,0,0,1,1,0,0,1,0,0,1,0,1,0,0,1,1,0,0,1,1,0,1,1,1,1,0,0,1,1,0,0,0,1,1,0,1,1,1,0,0,1,1,0,0,0,1,0,1,0,0,0,1,1,1,0,0,0,0,0,0,1,1,1,0,0,1,1,0,1,1,1,0,1,1,0,1,0,0,0,0,1,0,0,1,1,0,1,1,1,0,0,0,0,1,0,1,0,0,0,1,1,0,0,1,1,1,1,1,1,1,0,1,0,1,0,1,1,1,0,0,0,1,0,1,0,0,1,0,1,0,1,0,1,0,1,1,1,0,1,1,1,0,0,0,1,1,1,0,0,1,0,1,0,0,0,0,1,0,0,0,1,1,1,0,0,0,1,1,0,0,1,1,1,1,1,1,1,1,1,0,1,1,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,1,1,0,0,1,0,0,1,0,1,1,0,1,1,1,1,1,0,1,0,1,0,1,1,1,1,0,1,0,0,1,0,0,1,1,0,0,1,0,0,0,0,0,1,0,1,1,0,1,1,0,0,0,0,0,1,0,0,0,1,1,0,1,0,0,1,1,1,0,1,1,0,0,1,0,1,0,1,1,0,0,0,1,1,1,1,0,0,1,1,1,0,1,0,1,1,1,0,0,0,0,0,1,1,1,1,0,1,1,1,0,0,1,0,0,0,];
var gg_b = "1745787601/";

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
