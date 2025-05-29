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
case 2754:
case 223:
case 2611:
case 1856:
case 3825:
case 3482:
case 2084:
case 3980:
case 239:
case 1153:
case 1658:
case 909:
case 2030:
case 635:
case 2447:
case 528:
case 3962:
case 370:
case 38:
case 897:
case 3069:
case 114:
case 3460:
case 2248:
case 3710:
case 312:
case 3508:
case 1894:
case 3934:
case 2265:
case 417:
case 910:
case 19:
case 2413:
case 808:
case 2763:
case 2365:
case 690:
case 2026:
case 875:
case 3488:
case 903:
case 1002:
case 625:
case 1164:
case 3994:
case 1834:
case 1570:
case 567:
case 2351:
case 972:
case 1652:
case 145:
case 4063:
case 79:
case 1693:
case 3956:
case 3070:
case 1925:
case 3479:
case 229:
case 2649:
case 2242:
case 1212:
case 2555:
case 2546:
case 1880:
case 661:
case 20:
case 2659:
case 769:
case 2902:
case 342:
case 853:
case 3955:
case 3830:
case 1926:
case 3946:
case 2568:
case 4035:
case 2009:
case 1492:
case 3205:
case 2139:
case 2358:
case 2025:
case 47:
case 1237:
case 744:
case 169:
case 2594:
case 1453:
case 2366:
case 2219:
case 2333:
case 2735:
case 93:
case 2612:
case 1642:
case 3182:
case 1311:
case 2341:
case 1074:
case 1438:
case 2457:
case 2534:
case 163:
case 2233:
case 92:
case 4044:
case 3329:
case 2266:
case 1349:
case 2562:
case 2258:
case 2393:
case 2795:
case 1337:
case 3703:
case 2816:
case 763:
case 3826:
case 1714:
case 2580:
case 1464:
case 3628:
case 3373:
case 2199:
case 715:
case 1432:
case 4095:
case 1131:
case 940:
case 1665:
case 1861:
case 1293:
case 2237:
case 3808:
case 3056:
case 1025:
case 3970:
case 871:
case 1366:
case 3509:
case 1612:
case 2642:
case 1341:
case 2311:
case 1735:
case 2397:
case 3472:
case 2438:
case 35:
case 621:
case 600:
case 3916:
case 2926:
case 613:
case 176:
case 338:
case 141:
case 2990:
case 686:
case 3094:
case 2492:
case 1009:
case 1147:
case 665:
case 3687:
case 3525:
case 1869:
case 3377:
case 2846:
case 1816:
case 2651:
case 3277:
case 619:
case 3802:
case 568:
case 512:
case 2714:
case 3104:
case 2001:
case 3969:
case 1618:
case 328:
case 2648:
case 58:
case 2131:
case 3478:
case 3034:
case 263:
case 1457:
case 631:
case 1908:
case 1241:
case 4014:
case 1233:
case 2297:
case 1319:
case 3080:
case 1266:
case 3489:
case 2498:
case 1393:
case 2337:
case 1258:
case 215:
case 723:
case 1100:
case 2417:
case 3427:
case 957:
case 1796:
case 3228:
case 3584:
case 1248:
case 3283:
case 2868:
case 1815:
case 2641:
case 4067:
case 2008:
case 2633:
case 2666:
case 988:
case 3874:
case 816:
case 1637:
case 2693:
case 245:
case 1561:
case 3189:
case 3222:
case 1555:
case 3590:
case 2880:
case 1763:
case 3178:
case 3404:
case 1499:
case 1026:
case 2318:
case 542:
case 3061:
case 2570:
case 3545:
case 75:
case 3869:
case 1377:
case 2961:
case 1094:
case 1687:
case 3568:
case 2273:
case 989:
case 2955:
case 1916:
case 2160:
case 3902:
case 138:
case 242:
case 3659:
case 30:
case 15:
case 1472:
case 443:
case 1171:
case 650:
case 1321:
case 2182:
case 3341:
case 3612:
case 3735:
case 1606:
case 1786:
case 2229:
case 738:
case 1045:
case 2884:
case 3358:
case 767:
case 3258:
case 1489:
case 2329:
case 3266:
case 3562:
case 4075:
case 1221:
case 3908:
case 3870:
case 857:
case 2501:
case 3534:
case 4003:
case 3113:
case 1969:
case 86:
case 1104:
case 3618:
case 514:
case 3744:
case 1724:
case 1062:
case 3352:
case 3816:
case 2703:
case 2776:
case 1530:
case 4010:
case 2980:
case 339:
case 1874:
case 2181:
case 2825:
case 3342:
case 2621:
case 2482:
case 3084:
case 3815:
case 907:
case 2306:
case 400:
case 3697:
case 1172:
case 515:
case 2934:
case 1283:
case 237:
case 4076:
case 2809:
case 3796:
case 2508:
case 3248:
case 2460:
case 3720:
case 421:
case 3901:
case 311:
case 2069:
case 212:
case 1740:
case 270:
case 2677:
case 971:
case 3351:
case 1605:
case 3736:
case 1061:
case 1673:
case 1404:
case 3348:
case 431:
case 1055:
case 1046:
case 2016:
case 1328:
case 1785:
case 2423:
case 1178:
case 333:
case 662:
case 3974:
case 1526:
case 3555:
case 3546:
case 2206:
case 2502:
case 1189:
case 3561:
case 1629:
case 2968:
case 419:
case 1915:
case 2945:
case 3637:
case 2479:
case 2956:
case 2070:
case 1809:
case 137:
case 3359:
case 112:
case 2740:
case 1460:
case 168:
case 1069:
case 424:
case 1508:
case 3767:
case 2427:
case 680:
case 959:
case 712:
case 768:
case 1980:
case 4040:
case 3008:
case 1621:
case 3845:
case 770:
case 1482:
case 3312:
case 1181:
case 3856:
case 2471:
case 2172:
case 858:
case 3880:
case 1502:
case 2590:
case 3212:
case 2526:
case 3198:
case 3619:
case 2189:
case 3925:
case 887:
case 3652:
case 974:
case 1994:
case 3909:
case 576:
case 2046:
case 1016:
case 3318:
case 2404:
case 83:
case 1423:
case 2383:
case 3443:
case 810:
case 2171:
case 3438:
case 2472:
case 2606:
case 3397:
case 803:
case 3311:
case 3642:
case 1622:
case 4007:
case 1229:
case 2056:
case 1884:
case 2045:
case 2808:
case 2377:
case 1205:
case 3117:
case 2127:
case 2094:
case 1961:
case 142:
case 2916:
case 2707:
case 1273:
case 3926:
case 1955:
case 267:
case 3432:
case 2034:
case 2478:
case 1683:
case 1188:
case 228:
case 2104:
case 1373:
case 1775:
case 3001:
case 2969:
case 2724:
case 1890:
case 1703:
case 2802:
case 3855:
case 3651:
case 2750:
case 425:
case 3337:
case 1179:
case 2489:
case 2080:
case 617:
case 4024:
case 490:
case 539:
case 997:
case 632:
case 363:
case 384:
case 182:
case 1430:
case 2017:
case 1047:
case 925:
case 579:
case 3027:
case 603:
case 990:
case 822:
case 2350:
case 497:
case 1932:
case 3737:
case 3892:
case 2957:
case 2174:
case 782:
case 3636:
case 961:
case 3853:
case 2324:
case 1484:
case 3314:
case 2560:
case 2872:
case 3539:
case 3145:
case 956:
case 205:
case 794:
case 554:
case 1953:
case 2588:
case 2777:
case 3898:
case 573:
case 2043:
case 2676:
case 3004:
case 817:
case 194:
case 291:
case 1490:
case 1099:
case 408:
case 3446:
case 2878:
case 502:
case 935:
case 3461:
case 2721:
case 2900:
case 3654:
case 2579:
case 3979:
case 2385:
case 2783:
case 1425:
case 74:
case 1882:
case 3445:
case 3468:
case 2728:
case 2053:
case 3718:
case 2675:
case 880:
case 701:
case 252:
case 1184:
case 3644:
case 3267:
case 1624:
case 351:
case 2108:
case 120:
case 536:
case 2038:
case 3072:
case 2827:
case 4083:
case 1650:
case 795:
case 3817:
case 555:
case 3891:
case 453:
case 1943:
case 2913:
case 14:
case 4028:
case 101:
case 204:
case 2581:
case 2999:
case 1409:
case 1000:
case 720:
case 2939:
case 3635:
case 1706:
case 3831:
case 3462:
case 2722:
case 3843:
case 1823:
case 1589:
case 3712:
case 2102:
case 2401:
case 847:
case 1686:
case 1126:
case 3557:
case 658:
case 1376:
case 3434:
case 581:
case 3078:
case 1578:
case 924:
case 4022:
case 1787:
case 3367:
case 3982:
case 526:
case 1879:
case 2340:
case 1310:
case 366:
case 3480:
case 2098:
case 1607:
case 687:
case 3759:
case 2572:
case 3538:
case 1827:
case 1581:
case 104:
case 201:
case 1999:
case 3904:
case 302:
case 3839:
case 498:
case 3553:
case 592:
case 2409:
case 2000:
case 1092:
case 752:
case 373:
case 919:
case 3254:
case 2860:
case 3415:
case 2425:
case 1385:
case 3363:
case 3765:
case 295:
case 3296:
case 1871:
case 704:
case 1675:
case 471:
case 446:
case 1108:
case 2624:
case 3081:
case 354:
case 3614:
case 3751:
case 1603:
case 3336:
case 921:
case 3971:
case 2057:
case 2578:
case 3236:
case 4006:
case 2879:
case 230:
case 2787:
case 2607:
case 3564:
case 1285:
case 3263:
case 277:
case 3170:
case 2888:
case 1939:
case 2991:
case 3742:
case 1064:
case 2706:
case 3927:
case 1947:
case 2917:
case 693:
case 3116:
case 913:
case 2190:
case 1401:
case 379:
case 407:
case 1032:
case 584:
case 2376:
case 964:
case 1174:
case 2705:
case 1957:
case 1408:
case 3989:
case 2773:
case 3591:
case 1207:
case 483:
case 1872:
case 2998:
case 326:
case 416:
case 3517:
case 2685:
case 2125:
case 4005:
case 2430:
case 282:
case 1017:
case 2109:
case 3469:
case 3719:
case 4073:
case 21:
case 850:
case 3395:
case 2571:
case 3800:
case 1676:
case 1031:
case 2013:
case 3023:
case 1250:
case 848:
case 1386:
case 3766:
case 294:
case 191:
case 657:
case 778:
case 1402:
case 1721:
case 3335:
case 8:
case 1579:
case 355:
case 896:
case 3470:
case 2953:
case 1610:
case 688:
case 336:
case 160:
case 2504:
case 66:
case 1224:
case 3972:
case 1523:
case 1889:
case 489:
case 2203:
case 1777:
case 1751:
case 1336:
case 2072:
case 2644:
case 1614:
case 2267:
case 1592:
case 1296:
case 3240:
case 2468:
case 3728:
case 1748:
case 2718:
case 1765:
case 1363:
case 2979:
case 1415:
case 683:
case 173:
case 1553:
case 2494:
case 3092:
case 754:
case 1169:
case 2988:
case 2891:
case 2923:
case 3827:
case 2817:
case 2078:
case 2434:
case 4059:
case 2557:
case 2146:
case 3401:
case 689:
case 2462:
case 2843:
case 3722:
case 2712:
case 1598:
case 2635:
case 1927:
case 1899:
case 3804:
case 488:
case 1354:
case 2759:
case 849:
case 1396:
case 779:
case 266:
case 2480:
case 1320:
case 2089:
case 2737:
case 1793:
case 3350:
case 1978:
case 2749:
case 3582:
case 1469:
case 726:
case 3017:
case 181:
case 284:
case 671:
case 2145:
case 4037:
case 2838:
case 2168:
case 499:
case 1517:
case 4049:
case 126:
case 530:
case 3324:
case 1082:
case 886:
case 2314:
case 2853:
case 577:
case 962:
case 1752:
case 2071:
case 800:
case 781:
case 698:
case 3174:
case 3889:
case 595:
case 493:
case 2513:
case 2599:
case 607:
case 4011:
case 3224:
case 3588:
case 2696:
case 3307:
case 136:
case 2620:
case 3610:
case 2180:
case 305:
case 1470:
case 819:
case 1079:
case 3579:
case 1741:
case 3900:
case 2461:
case 3721:
case 3878:
case 2797:
case 1335:
case 1088:
case 2455:
case 1766:
case 3402:
case 292:
case 3101:
case 2134:
case 3676:
case 3043:
case 2864:
case 1758:
case 4093:
case 1539:
case 1145:
case 3685:
case 3881:
case 1156:
case 1547:
case 4019:
case 3773:
case 2591:
case 2989:
case 1838:
case 2344:
case 1314:
case 653:
case 784:
case 2978:
case 824:
case 31:
case 42:
case 2793:
case 3571:
case 2395:
case 2800:
case 2469:
case 2719:
case 3109:
case 3964:
case 1027:
case 674:
case 281:
case 906:
case 1654:
case 2335:
case 2733:
case 504:
case 394:
case 1004:
case 1455:
case 3013:
case 2758:
case 1134:
case 43:
case 3203:
case 2972:
case 2543:
case 1214:
case 2667:
case 4041:
case 1599:
case 4033:
case 4066:
case 2857:
case 1180:
case 1620:
case 792:
case 1696:
case 273:
case 3000:
case 751:
case 2553:
case 591:
case 2839:
case 2904:
case 202:
case 3650:
case 4065:
case 34:
case 3943:
case 2538:
case 3276:
case 1923:
case 403:
case 2751:
case 1267:
case 3624:
case 697:
case 2614:
case 1644:
case 3184:
case 578:
case 410:
case 835:
case 2220:
case 472:
case 1468:
case 1500:
case 2592:
case 2415:
case 1445:
case 3425:
case 2363:
case 1456:
case 2170:
case 2263:
case 825:
case 2320:
case 2564:
case 4042:
case 3879:
case 1982:
case 2532:
case 3578:
case 890:
case 2971:
case 608:
case 1557:
case 3190:
case 766:
case 1960:
case 2116:
case 1146:
case 1831:
case 2927:
case 3706:
case 2598:
case 3823:
case 1712:
case 3991:
case 2813:
case 1462:
case 1616:
case 2655:
case 2073:
case 32:
case 3476:
case 588:
case 814:
case 197:
case 2454:
case 56:
case 2848:
case 1818:
case 2865:
case 2135:
case 1987:
case 3209:
case 2496:
case 283:
case 2420:
case 3760:
case 2029:
case 3019:
case 3410:
case 1268:
case 1256:
case 1670:
case 2739:
case 3912:
case 2922:
case 1467:
case 3608:
case 358:
case 3041:
case 289:
case 3103:
case 3058:
case 1345:
case 2315:
case 2713:
case 3723:
case 3325:
case 1812:
case 1356:
case 775:
case 1731:
case 3577:
case 3175:
case 3066:
case 1368:
case 1566:
case 1859:
case 3309:
case 1394:
case 2195:
case 3779:
case 2983:
case 4013:
case 89:
case 3521:
case 2511:
case 494:
case 3918:
case 2928:
case 927:
case 2893:
case 2700:
case 420:
case 310:
case 1167:
case 1548:
case 3997:
case 3528:
case 2819:
case 3829:
case 303:
case 753:
case 1551:
case 593:
case 2196:
case 174:
case 271:
case 3110:
case 684:
case 372:
case 3781:
case 1361:
case 2435:
case 4000:
case 1738:
case 3873:
case 3230:
case 3051:
case 153:
case 44:
case 2634:
case 3176:
case 1355:
case 3048:
case 2316:
case 3390:
case 774:
case 298:
case 3601:
case 1973:
case 1246:
case 2216:
case 207:
case 2087:
case 2694:
case 309:
case 815:
case 2645:
case 2163:
case 1732:
case 477:
case 1897:
case 2833:
case 2559:
case 2866:
case 4057:
case 3674:
case 2006:
case 937:
case 863:
case 759:
case 4092:
case 1435:
case 2361:
case 1977:
case 2738:
case 3772:
case 841:
case 1634:
case 253:
case 3302:
case 198:
case 746:
case 771:
case 2346:
case 2753:
case 2355:
case 1269:
case 587:
case 452:
case 1518:
case 2548:
case 2167:
case 2837:
case 1921:
case 1700:
case 2849:
case 1370:
case 3958:
case 3140:
case 146:
case 681:
case 171:
case 1120:
case 3407:
case 558:
case 540:
case 1270:
case 1833:
case 2615:
case 3993:
case 1163:
case 3185:
case 1841:
case 707:
case 1656:
case 357:
case 1866:
case 1559:
case 2022:
case 3424:
case 2764:
case 1858:
case 2414:
case 3308:
case 2798:
case 3877:
case 1216:
case 2246:
case 2542:
case 2255:
case 3059:
case 36:
case 1495:
case 4032:
case 636:
case 1757:
case 388:
case 3609:
case 1087:
case 3049:
case 116:
case 1420:
case 3107:
case 1496:
case 839:
case 2670:
case 2256:
case 1215:
case 928:
case 2906:
case 3727:
case 1922:
case 823:
case 3942:
case 3690:
case 716:
case 3301:
case 1655:
case 783:
case 1851:
case 297:
case 2818:
case 3828:
case 1537:
case 3771:
case 2593:
case 2294:
case 1135:
case 1661:
case 4017:
case 2362:
case 2519:
case 1549:
case 3529:
case 2394:
case 2262:
case 2859:
case 2558:
case 3951:
case 4043:
case 2234:
case 1928:
case 95:
case 1597:
case 491:
case 2533:
case 1511:
case 2541:
case 208:
case 2114:
case 967:
case 460:
case 3097:
case 833:
case 1436:
case 679:
case 189:
case 393:
case 2356:
case 1463:
case 1842:
case 503:
case 2743:
case 1315:
case 478:
case 2280:
case 3704:
case 1799:
case 3120:
case 371:
case 1966:
case 3370:
case 2583:
case 4081:
case 1933:
case 3518:
case 2284:
case 3921:
case 1941:
case 2911:
case 2390:
case 933:
case 1302:
case 398:
case 3269:
case 2065:
case 838:
case 3634:
case 1772:
case 2781:
case 3662:
case 3757:
case 1952:
case 2330:
case 939:
case 1059:
case 660:
case 1877:
case 479:
case 2226:
case 1789:
case 3444:
case 3858:
case 2384:
case 1424:
case 3006:
case 157:
case 2674:
case 911:
case 1778:
case 3270:
case 1625:
case 3656:
case 3163:
case 3645:
case 2475:
case 2949:
case 2209:
case 1529:
case 3549:
case 3454:
case 1771:
case 22:
case 2476:
case 2602:
case 1301:
case 1690:
case 1186:
case 4060:
case 3646:
case 559:
case 1626:
case 4082:
case 3747:
case 2912:
case 1573:
case 240:
case 604:
case 1505:
case 2225:
case 3029:
case 2760:
case 2410:
case 1440:
case 316:
case 1049:
case 2066:
case 436:
case 3799:
case 2175:
case 1704:
case 2577:
case 3315:
case 3713:
case 2058:
case 2723:
case 3842:
case 1485:
case 389:
case 1374:
case 3436:
case 193:
case 941:
case 1684:
case 1124:
case 1011:
case 1097:
case 90:
case 574:
case 2918:
case 3928:
case 2521:
case 2887:
case 1150:
case 23:
case 2779:
case 553:
case 1630:
case 793:
case 1951:
case 140:
case 64:
case 3791:
case 2727:
case 601:
case 2037:
case 2505:
case 1410:
case 3268:
case 1760:
case 3362:
case 1782:
case 740:
case 2883:
case 2529:
case 3294:
case 870:
case 3593:
case 88:
case 484:
case 3818:
case 2828:
case 1959:
case 620:
case 1476:
case 3334:
case 868:
case 397:
case 2626:
case 2186:
case 3616:
case 963:
case 3669:
case 3541:
case 308:
case 3533:
case 2948:
case 1918:
case 827:
case 630:
case 13:
case 2150:
case 3558:
case 3262:
case 187:
case 1309:
case 2704:
case 3368:
case 3280:
case 3356:
case 1723:
case 1325:
case 3345:
case 1058:
case 1806:
case 293:
case 944:
case 1608:
case 2097:
case 1033:
case 2011:
case 158:
case 787:
case 3021:
case 3346:
case 3028:
case 3355:
case 3753:
case 1601:
case 772:
case 2302:
case 1390:
case 1176:
case 1065:
case 842:
case 2772:
case 1781:
case 945:
case 1110:
case 374:
case 682:
case 2958:
case 1583:
case 3849:
case 4072:
case 110:
case 1911:
case 2941:
case 2208:
case 3792:
case 1528:
case 1284:
case 1997:
case 451:
case 2933:
case 2424:
case 1384:
case 3764:
case 583:
case 914:
case 1403:
case 1674:
case 257:
case 694:
case 2821:
case 2625:
case 2778:
case 2919:
case 466:
case 2609:
case 2952:
case 288:
case 26:
case 2059:
case 2450:
case 3246:
case 709:
case 3542:
case 1020:
case 1096:
case 3437:
case 2807:
case 549:
case 2067:
case 1281:
case 3699:
case 250:
case 81:
case 1604:
case 1473:
case 414:
case 2688:
case 3118:
case 2183:
case 2623:
case 2886:
case 1054:
case 564:
case 1784:
case 3364:
case 2510:
case 882:
case 3392:
case 2:
case 1627:
case 1187:
case 2850:
case 3563:
case 3639:
case 3159:
case 49:
case 894:
case 2278:
case 132:
case 2660:
case 334:
case 3411:
case 2682:
case 3112:
case 3761:
case 3497:
case 1106:
case 1036:
case 3338:
case 3085:
case 445:
case 2824:
case 717:
case 3746:
case 3755:
case 3353:
case 296:
case 732:
case 531:
case 3291:
case 1507:
case 3217:
case 356:
case 2227:
case 1105:
case 2774:
case 1323:
case 3756:
case 3343:
case 780:
case 3745:
case 77:
case 3331:
case 84:
case 2428:
case 3768:
case 444:
case 1282:
case 1586:
case 519:
case 637:
case 820:
case 4074:
case 2936:
case 612:
case 3657:
case 2840:
case 1810:
case 668:
case 1379:
case 3137:
case 2963:
case 17:
case 335:
case 3149:
case 106:
case 1689:
case 1129:
case 3910:
case 2701:
case 877:
case 586:
case 747:
case 325:
case 415:
case 1672:
case 2371:
case 3111:
case 390:
case 3762:
case 1044:
case 3412:
case 1524:
case 1360:
case 3544:
case 3459:
case 3050:
case 3976:
case 1095:
case 2503:
case 147:
case 2177:
case 521:
case 3317:
case 1487:
case 1840:
case 3820:
case 3896:
case 1271:
case 280:
case 27:
case 2379:
case 3985:
case 1963:
case 3698:
case 3119:
case 2689:
case 3664:
case 1227:
case 2507:
case 2035:
case 2876:
case 534:
case 1774:
case 3239:
case 3152:
case 936:
case 40:
case 804:
case 3715:
case 2260:
case 476:
case 3514:
case 118:
case 2524:
case 2288:
case 364:
case 3299:
case 1204:
case 247:
case 1503:
case 3213:
case 1177:
case 926:
case 3347:
case 762:
case 3836:
case 3166:
case 981:
case 3653:
case 2279:
case 2550:
case 2672:
case 1371:
case 3133:
case 2967:
case 1885:
case 2044:
case 1014:
case 3442:
case 3141:
case 1688:
case 321:
case 411:
case 3148:
case 1128:
case 2604:
case 3076:
case 1623:
case 3165:
case 1183:
case 2405:
case 1510:
case 3200:
case 1708:
case 3769:
case 2429:
case 3010:
case 386:
case 2730:
case 2914:
case 667:
case 3924:
case 1682:
case 2381:
case 3142:
case 1421:
case 902:
case 3257:
case 860:
case 433:
case 2036:
case 3458:
case 3844:
case 973:
case 196:
case 319:
case 3466:
case 1289:
case 2726:
case 805:
case 1850:
case 2187:
case 3617:
case 3895:
case 1477:
case 2585:
case 217:
case 1278:
case 148:
case 1660:
case 796:
case 556:
case 4090:
case 2768:
case 1854:
case 438:
case 2086:
case 2418:
case 3304:
case 1632:
case 802:
case 1239:
case 517:
case 3227:
case 873:
case 2291:
case 2867:
case 4056:
case 235:
case 4045:
case 2137:
case 3963:
case 3936:
case 1820:
case 3840:
case 991:
case 45:
case 2794:
case 1133:
case 290:
case 2412:
case 1442:
case 3371:
case 1003:
case 225:
case 1158:
case 2734:
case 149:
case 764:
case 1075:
case 3920:
case 1653:
case 4080:
case 3327:
case 2391:
case 3575:
case 3954:
case 879:
case 2231:
case 2050:
case 2243:
case 2780:
case 3204:
case 633:
case 60:
case 676:
case 641:
case 3576:
case 3807:
case 113:
case 2238:
case 2554:
case 3679:
case 2398:
case 721:
case 1010:
case 2040:
case 2253:
case 3389:
case 2364:
case 700:
case 2292:
case 1200:
case 2596:
case 547:
case 1452:
case 1835:
case 765:
case 1076:
case 1950:
case 1631:
case 3378:
case 3623:
case 3128:
case 2118:
case 1148:
case 224:
case 4046:
case 234:
case 4055:
case 1986:
case 2159:
case 3477:
case 2639:
case 2563:
case 2264:
case 1617:
case 3935:
case 855:
case 3850:
case 1691:
case 2392:
case 1895:
case 3:
case 119:
case 396:
case 2298:
case 3702:
case 731:
case 2746:
case 1907:
case 3289:
case 2755:
case 1466:
case 1844:
case 1458:
case 2338:
case 1441:
case 2411:
case 3682:
case 2200:
case 470:
case 562:
case 3784:
case 2452:
case 2151:
case 2165:
case 1332:
case 2950:
case 2076:
case 3473:
case 3604:
case 2567:
case 2148:
case 1118:
case 221:
case 124:
case 4069:
case 3281:
case 2924:
case 1238:
case 286:
case 1903:
case 2493:
case 1437:
case 3020:
case 2769:
case 2419:
case 1449:
case 1398:
case 2907:
case 2466:
case 1755:
case 3803:
case 3790:
case 219:
case 1298:
case 1814:
case 3036:
case 901:
case 2257:
case 3381:
case 1761:
case 1112:
case 2142:
case 1411:
case 2433:
case 1497:
case 2986:
case 231:
case 332:
case 317:
case 1232:
case 427:
case 1639:
case 2895:
case 1392:
case 615:
case 2617:
case 3187:
case 3627:
case 306:
case 1007:
case 1535:
case 380:
case 37:
case 2193:
case 851:
case 2820:
case 3586:
case 3282:
case 1794:
case 756:
case 3173:
case 2399:
case 1086:
case 3260:
case 442:
case 2854:
case 2715:
case 2465:
case 3323:
case 3725:
case 735:
case 2632:
case 3678:
case 1331:
case 2152:
case 3105:
case 3876:
case 3035:
case 2664:
case 2247:
case 1217:
case 1391:
case 1600:
case 1317:
case 2339:
case 2213:
case 1976:
case 1050:
case 347:
case 725:
case 1231:
case 2514:
case 1544:
case 1780:
case 264:
case 69:
case 2442:
case 3044:
case 190:
case 3382:
case 1111:
case 2141:
case 91:
case 3967:
case 1595:
case 2638:
case 2003:
case 885:
case 1734:
case 3279:
case 866:
case 982:
case 2075:
case 249:
case 1910:
case 2940:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1748548801/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,1,1,0,0,0,0,1,0,0,0,0,1,1,1,0,1,0,1,1,1,1,1,0,0,1,1,0,0,1,1,1,0,1,1,1,1,1,0,1,0,1,1,1,1,0,1,0,1,0,0,0,0,0,0,1,0,1,0,1,0,0,0,1,0,1,0,0,1,0,0,0,0,1,1,0,1,0,1,0,1,0,1,1,0,1,0,1,1,1,1,1,1,0,1,0,0,0,0,0,1,0,0,1,0,1,0,0,0,1,0,1,1,1,0,1,0,1,1,1,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,1,1,1,0,1,1,1,0,0,1,1,1,1,1,0,0,0,1,0,0,0,1,1,0,1,0,0,1,0,0,0,0,1,1,0,1,0,1,1,0,1,0,0,0,0,1,1,0,0,0,0,1,0,1,1,1,0,1,1,0,1,1,1,0,0,1,1,0,1,1,0,1,1,0,0,0,1,0,0,1,0,1,0,1,0,1,0,1,1,1,0,0,1,1,1,1,0,0,1,1,0,1,0,1,1,0,1,0,0,1,0,1,0,1,1,0,1,1,0,0,0,1,0,0,0,0,0,1,1,0,1,1,0,0,1,1,0,1,0,0,0,1,0,0,1,1,1,1,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,0,1,1,0,1,1,1,1,1,0,0,0,1,1,0,1,0,1,0,0,0,1,1,0,1,0,0,0,1,1,1,1,1,0,1,1,0,0,1,0,0,0,0,1,0,0,0,1,0,0,1,1,1,1,1,0,0,0,0,1,1,0,1,0,0,0,1,1,1,1,1,0,0,0,0,1,1,0,0,0,1,0,1,0,1,1,1,0,0,1,1,0,1,1,1,0,1,0,0,1,0,0,0,1,1,0,1,1,0,0,1,1,1,1,0,1,1,1,0,0,1,1,0,1,0,0,0,1,0,1,0,0,1,0,1,0,0,0,1,1,1,1,1,0,0,0,0,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,1,1,0,0,0,1,1,1,1,0,0,0,1,1,0,0,0,1,1,1,1,0,1,1,0,0,1,1,1,0,0,1,1,1,0,0,0,0,0,0,0,1,0,1,1,0,1,0,1,0,1,0,0,0,0,1,0,1,0,1,1,0,0,1,0,1,0,0,1,1,0,1,0,0,0,0,1,0,1,0,0,0,1,1,1,1,0,1,1,0,0,1,0,1,0,0,1,1,0,0,0,0,1,1,0,1,1,1,1,0,1,0,1,1,0,1,1,1,0,0,1,1,1,0,1,0,0,0,0,1,1,0,1,1,0,0,1,1,0,0,0,1,1,0,1,0,1,0,1,1,1,0,0,0,1,0,0,0,0,1,1,1,1,0,1,1,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,1,1,0,1,1,1,0,0,1,0,1,1,0,0,1,0,0,1,0,1,0,0,1,1,1,1,1,1,0,1,1,1,1,1,0,0,1,1,0,0,1,1,0,1,1,0,0,1,0,0,1,0,1,0,0,1,0,0,1,1,1,0,0,1,1,0,1,0,1,1,0,0,0,0,1,1,0,0,1,0,0,1,0,1,0,0,0,1,0,1,1,0,0,0,1,1,1,1,0,1,0,0,1,0,0,1,1,1,1,1,1,1,1,1,1,1,0,1,1,0,0,1,1,1,1,1,1,1,0,0,1,0,0,0,0,1,1,1,1,1,0,0,0,1,0,1,1,1,1,0,0,1,0,1,0,0,0,1,1,1,1,0,1,1,0,1,1,1,1,0,1,0,0,0,0,0,1,0,1,0,0,1,1,0,1,1,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,1,0,1,0,0,1,0,0,1,0,1,0,1,1,0,1,0,1,0,1,0,1,1,0,1,0,0,1,1,1,0,0,1,0,0,0,1,0,1,1,0,0,0,1,1,1,0,0,1,1,0,1,1,1,0,1,1,0,0,0,0,1,0,1,0,0,1,1,1,1,1,0,0,0,0,1,0,1,1,1,0,1,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,1,1,1,1,0,0,1,0,0,0,1,1,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,1,0,0,1,0,1,1,1,0,0,1,0,1,1,1,0,0,1,0,1,1,0,0,1,0,0,0,0,1,1,1,0,0,0,1,1,1,0,0,1,0,0,0,0,0,0,0,1,1,1,1,0,1,1,0,0,0,1,1,0,0,1,1,0,1,1,0,1,1,0,0,0,1,0,0,0,0,1,1,1,0,0,1,0,0,1,0,0,0,1,1,1,0,0,0,1,0,1,1,1,1,0,1,1,0,0,0,1,1,1,0,1,0,1,1,1,0,0,0,0,0,1,0,1,0,0,0,1,0,1,0,1,1,0,1,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,0,1,0,0,1,0,0,1,0,1,0,0,0,0,1,1,0,0,1,0,1,0,1,1,0,1,0,1,1,1,1,1,1,0,1,1,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,0,1,0,0,0,0,1,0,1,1,1,1,0,0,0,1,0,0,1,0,0,1,0,1,0,1,1,1,0,0,0,1,1,1,0,1,0,0,0,0,1,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,1,1,1,1,1,1,0,1,0,0,0,0,1,0,0,1,1,1,1,1,0,0,0,1,0,0,0,1,0,0,1,0,1,0,0,1,1,0,0,0,0,0,0,1,1,1,0,0,1,1,0,1,0,1,1,1,0,1,0,1,0,0,1,0,0,1,1,0,0,1,1,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,1,1,1,0,0,0,1,1,0,1,0,0,1,0,1,0,1,1,0,1,1,0,1,1,0,1,0,0,0,0,1,1,1,0,0,0,1,1,1,1,1,0,1,0,1,0,0,1,1,1,1,0,0,0,1,1,1,1,0,0,0,1,0,0,0,0,1,1,0,1,1,1,0,0,0,0,1,0,1,0,0,1,1,1,1,0,1,1,1,0,0,1,0,0,0,1,0,0,1,1,0,1,1,1,1,0,1,0,1,1,1,0,1,1,1,1,1,0,1,1,0,0,1,1,0,0,0,0,1,0,1,1,0,1,0,1,1,0,1,0,0,1,1,1,0,1,1,0,1,1,0,1,0,1,1,0,1,1,0,0,0,0,0,1,1,0,0,0,0,1,1,0,1,0,1,1,1,0,0,0,0,1,0,1,0,1,0,0,0,0,1,0,0,1,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,0,1,0,0,0,1,0,0,1,0,0,0,0,1,1,0,1,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,1,1,1,1,1,0,1,1,1,1,1,1,0,1,0,1,0,1,0,1,1,1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,0,0,1,0,1,0,0,1,0,1,0,0,0,0,0,1,0,1,1,1,1,1,0,1,0,1,1,0,0,0,1,0,0,0,0,1,0,1,1,1,1,1,0,0,0,0,0,1,1,1,0,1,1,1,1,1,1,0,1,0,0,1,0,0,0,1,0,0,1,1,0,1,0,1,0,0,0,1,0,1,0,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,1,1,0,1,1,0,0,1,0,1,1,0,0,0,0,0,0,1,0,0,1,1,0,0,1,0,1,1,0,1,1,0,1,0,1,1,0,0,0,0,1,1,0,1,1,0,1,1,0,1,1,1,0,1,1,1,1,0,1,0,0,0,1,1,0,1,0,0,1,0,0,0,0,0,0,1,0,0,1,1,0,1,0,1,1,1,0,1,0,1,0,0,1,0,0,0,1,0,0,0,1,0,1,1,1,0,0,1,0,1,1,1,0,1,0,0,0,0,0,1,1,0,0,1,0,1,0,1,1,0,1,0,0,0,0,1,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1,0,1,1,0,0,0,1,1,0,0,0,1,1,0,1,0,1,0,0,0,1,0,0,0,1,1,0,1,1,0,0,0,1,1,0,1,0,0,1,1,1,0,1,1,1,1,0,0,0,1,1,0,0,0,0,0,1,0,1,0,1,0,0,0,1,0,0,1,1,1,1,0,1,0,1,0,1,1,1,0,1,0,0,1,0,0,1,0,0,0,1,0,0,1,1,1,0,1,0,1,0,0,0,1,1,0,0,0,0,0,0,1,0,0,1,0,1,1,1,0,1,0,0,1,0,1,1,0,1,0,1,0,0,1,1,0,0,0,0,1,0,0,1,1,0,0,1,1,0,0,0,1,1,1,1,1,0,1,0,0,1,1,1,1,0,0,0,1,0,0,1,0,0,1,1,1,1,0,0,0,0,0,1,1,1,0,1,1,1,1,1,0,1,1,0,1,0,1,0,0,0,1,0,1,1,0,1,0,0,0,0,1,0,0,1,1,0,0,0,1,0,1,0,0,0,1,1,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,1,1,0,1,0,1,0,1,1,0,0,1,1,0,1,0,1,1,1,0,0,0,0,0,0,1,1,0,0,1,0,1,0,1,1,0,1,1,1,0,1,1,0,1,0,0,1,1,1,1,0,0,1,1,0,1,1,0,0,1,0,1,1,0,0,1,1,0,0,1,0,0,1,0,1,1,0,0,0,1,0,0,1,0,0,1,1,0,0,0,0,1,1,1,0,1,0,1,0,1,1,0,0,1,1,0,0,0,1,1,0,0,1,1,1,0,0,0,0,1,0,1,1,1,1,0,1,0,1,1,1,1,1,1,0,0,0,0,0,1,0,0,0,0,1,1,1,0,0,0,1,0,0,0,1,0,0,1,1,0,1,0,0,1,1,0,0,0,1,0,0,0,1,0,0,0,0,1,0,0,1,1,1,0,1,0,1,0,0,0,1,0,0,0,0,1,1,0,0,1,0,1,0,1,1,1,1,1,0,0,1,0,1,0,0,0,1,1,0,0,0,1,1,0,1,0,0,1,1,1,1,1,1,0,0,0,0,1,0,0,0,0,1,1,0,1,0,1,0,1,1,1,0,0,0,0,1,1,1,1,1,1,0,1,1,1,0,1,0,0,1,1,0,0,0,1,1,1,1,1,1,1,0,1,1,1,1,0,0,1,1,1,0,1,1,1,1,0,0,1,1,1,0,0,1,0,0,0,1,0,0,0,0,1,0,0,1,0,1,0,1,1,0,1,0,0,1,1,1,0,0,1,1,0,1,1,0,1,1,0,0,1,1,0,1,1,1,0,1,0,0,0,0,0,0,1,0,0,1,1,1,0,1,0,1,0,0,1,1,1,1,1,0,1,1,0,1,1,0,1,1,0,0,0,0,1,0,1,0,0,1,0,1,0,0,1,0,0,1,1,1,0,0,0,1,0,0,1,1,1,0,0,1,0,1,0,1,0,0,1,1,1,0,1,1,1,1,0,1,1,1,0,0,1,1,0,1,1,1,0,0,0,0,1,1,1,1,1,0,1,0,1,0,0,1,0,1,1,1,1,1,0,1,0,1,1,0,0,1,0,1,0,1,1,0,1,0,1,1,0,1,1,0,1,0,0,1,1,0,1,1,1,1,0,0,0,0,0,1,1,1,1,0,0,1,1,0,1,1,0,1,1,0,0,1,1,0,1,0,0,0,1,0,0,0,1,1,0,0,0,1,0,1,1,0,0,1,0,1,0,1,1,1,1,0,0,0,0,1,0,0,1,0,0,1,1,0,0,0,1,1,0,1,0,0,0,1,1,0,1,1,1,1,1,0,0,0,0,1,1,1,1,0,0,1,1,0,1,1,1,1,0,1,1,1,0,1,0,0,1,1,1,0,1,1,1,1,0,0,1,0,0,1,0,0,1,1,1,0,1,1,1,0,0,1,1,1,0,0,1,1,0,0,0,1,1,0,0,1,1,1,0,1,1,1,1,1,1,0,1,0,0,0,1,0,0,0,0,0,1,1,1,0,1,1,0,1,0,1,0,0,0,0,1,1,1,0,0,0,1,0,0,1,1,1,1,1,1,0,0,1,1,0,1,1,0,0,0,0,1,0,0,0,1,1,1,1,0,0,1,0,0,1,0,1,1,1,0,0,1,1,0,0,1,0,1,1,0,0,0,1,1,1,1,1,0,0,0,1,0,0,0,1,0,1,1,1,0,0,1,1,0,1,1,1,0,0,1,0,1,0,1,0,0,0,0,1,0,1,0,1,0,1,1,0,0,0,1,1,1,1,0,1,1,1,1,0,0,1,1,1,0,1,1,1,0,0,0,0,1,1,0,1,0,0,1,1,1,0,0,0,1,0,0,1,1,1,0,1,1,0,1,1,1,1,0,0,1,0,1,0,0,0,1,1,1,0,1,1,0,0,0,0,0,1,1,1,0,0,1,0,0,1,0,1,1,1,1,0,0,0,0,0,0,1,1,1,1,0,0,1,0,1,0,1,0,1,0,0,1,0,0,0,1,0,1,1,1,0,1,0,0,0,1,1,1,0,0,0,0,1,1,1,0,0,0,0,1,0,1,1,0,0,0,1,1,1,1,0,0,0,0,1,0,1,1,0,1,0,0,0,0,1,0,0,1,1,0,1,0,0,0,1,0,1,0,1,1,0,0,1,1,0,0,0,0,0,0,1,0,1,0,0,1,0,0,0,1,0,1,1,1,0,1,0,1,1,1,1,1,0,0,1,1,1,1,1,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,1,1,1,0,0,1,0,0,1,1,0,0,1,0,0,0,0,0,0,1,0,0,0,1,0,1,1,0,0,0,1,0,0,1,1,1,1,0,1,0,0,0,1,0,1,1,0,1,0,1,1,0,0,0,0,0,0,0,1,0,1,0,0,1,1,1,0,0,0,1,0,0,1,1,0,0,0,1,0,0,0,0,1,0,1,0,0,1,1,0,1,0,0,0,0,0,1,0,0,1,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,1,1,0,1,0,1,1,0,0,1,1,1,1,1,0,0,0,0,0,1,1,0,1,1,1,1,1,0,0,0,0,0,1,0,1,0,0,1,0,1,0,0,1,0,1,1,0,1,0,0,1,1,1,0,1,1,0,1,1,0,1,1,0,0,0,0,1,1,1,0,1,0,1,0,1,0,0,1,1,1,1,1,0,0,1,1,1,0,1,1,1,1,0,1,1,1,1,0,1,1,0,1,1,0,0,1,1,1,0,0,1,1,0,1,1,0,1,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,1,1,0,1,0,0,1,0,1,0,0,0,1,1,0,1,0,0,1,0,0,1,1,1,0,0,1,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,1,0,1,0,1,1,1,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,1,0,0,0,1,1,1,1,1,0,0,0,1,0,1,1,1,0,1,1,0,0,1,1,1,1,1,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,1,1,0,0,1,0,0,0,1,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,1,1,0,1,1,1,0,0,1,0,0,0,1,0,1,0,1,1,0,0,1,1,1,1,0,0,0,1,0,0,1,0,0,0,1,1,1,1,1,0,0,1,0,1,0,1,0,1,0,1,1,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,1,1,1,0,1,0,1,0,1,1,1,1,0,0,0,1,1,0,0,1,1,0,0,0,0,0,1,1,1,1,0,1,0,0,1,0,1,1,1,0,0,0,1,1,1,1,1,0,1,1,0,1,0,0,1,0,1,0,0,0,0,1,0,0,0,0,1,0,1,0,1,1,0,0,1,0,0,1,0,1,0,0,1,0,0,0,0,0,0,1,1,1,0,0,1,1,1,0,1,0,0,0,1,0,1,1,0,1,0,0,1,1,1,1,1,1,0,1,0,1,1,0,0,0,0,0,0,1,1,1,0,0,0,0,1,0,1,1,1,1,0,0,0,1,0,1,0,1,1,1,0,1,1,1,1,0,1,1,1,1,1,1,0,1,1,1,0,0,0,0,0,1,0,1,0,0,1,0,0,0,0,0,1,1,1,0,0,0,1,0,0,1,1,0,1,1,1,0,0,1,1,0,0,0,0,0,0,1,1,1,1,0,1,0,0,1,0,1,1,1,1,1,1,1,0,0,0,0,1,0,0,1,1,0,1,1,1,1,0,0,0,1,1,0,0,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,1,1,1,1,1,1,0,0,0,0,0,0,0,1,0,1,1,0,0,1,1,0,1,0,1,1,1,0,1,0,0,0,1,1,1,0,1,0,0,0,1,0,1,0,1,1,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,0,0,1,0,0,0,0,1,0,0,1,1,1,0,1,0,0,0,1,1,1,0,0,1,0,1,1,1,1,0,1,0,1,0,0,1,1,0,1,0,0,1,0,0,0,1,0,1,0,1,1,0,0,1,0,0,1,0,0,1,0,1,1,1,0,0,1,1,0,1,1,0,0,1,0,1,0,0,1,0,1,0,0,0,1,0,0,0,1,1,0,1,0,1,0,0,1,1,1,1,1,1,1,0,0,1,0,0,0,0,0,1,1,1,0,1,1,0,0,1,0,1,1,1,0,1,0,0,1,1,1,1,1,0,0,0,1,1,1,1,0,0,0,0,0,0,1,0,1,1,0,1,];
var gg_b = "1748548801/";

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
