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
case 2617:
case 3144:
case 3346:
case 1659:
case 2139:
case 2470:
case 1875:
case 416:
case 1522:
case 1596:
case 1968:
case 1245:
case 2543:
case 3687:
case 1799:
case 618:
case 607:
case 1117:
case 282:
case 1963:
case 5:
case 2159:
case 2548:
case 3527:
case 2920:
case 2611:
case 212:
case 1104:
case 837:
case 2882:
case 688:
case 1380:
case 1994:
case 1499:
case 795:
case 3229:
case 162:
case 3844:
case 1085:
case 1811:
case 3315:
case 2482:
case 1670:
case 1899:
case 1216:
case 404:
case 3412:
case 2385:
case 2439:
case 2170:
case 2080:
case 3064:
case 272:
case 2782:
case 3358:
case 626:
case 2759:
case 297:
case 1199:
case 2536:
case 2870:
case 557:
case 3371:
case 3093:
case 3712:
case 1711:
case 1372:
case 242:
case 1404:
case 3333:
case 1100:
case 2526:
case 2592:
case 481:
case 2341:
case 659:
case 1861:
case 243:
case 2347:
case 2729:
case 2705:
case 3840:
case 1076:
case 1918:
case 1913:
case 1167:
case 1886:
case 2302:
case 1161:
case 3162:
case 853:
case 1800:
case 411:
case 1281:
case 471:
case 3001:
case 1761:
case 954:
case 2874:
case 1486:
case 179:
case 621:
case 3007:
case 747:
case 3740:
case 2212:
case 3645:
case 215:
case 2805:
case 1532:
case 285:
case 441:
case 3573:
case 3557:
case 3462:
case 1461:
case 1674:
case 3014:
case 1047:
case 3537:
case 2930:
case 149:
case 1552:
case 283:
case 1467:
case 2376:
case 2174:
case 3551:
case 777:
case 1605:
case 1629:
case 1700:
case 1590:
case 26:
case 1535:
case 3045:
case 2476:
case 103:
case 354:
case 3828:
case 431:
case 2992:
case 1555:
case 2841:
case 2253:
case 3362:
case 3601:
case 1602:
case 1361:
case 699:
case 3660:
case 1005:
case 2776:
case 2684:
case 2524:
case 150:
case 1647:
case 575:
case 1518:
case 3614:
case 3128:
case 2802:
case 65:
case 2579:
case 3642:
case 3123:
case 895:
case 569:
case 860:
case 3723:
case 1784:
case 513:
case 2000:
case 3728:
case 515:
case 768:
case 2086:
case 640:
case 994:
case 2374:
case 1210:
case 2402:
case 1293:
case 3423:
case 1484:
case 2876:
case 420:
case 1989:
case 1952:
case 209:
case 1298:
case 670:
case 2441:
case 2550:
case 2246:
case 583:
case 2702:
case 3664:
case 1568:
case 3438:
case 3471:
case 2680:
case 3276:
case 817:
case 2520:
case 2265:
case 1304:
case 2948:
case 1070:
case 3846:
case 3715:
case 3610:
case 3921:
case 700:
case 3477:
case 3453:
case 436:
case 3698:
case 3312:
case 1880:
case 2339:
case 2485:
case 3738:
case 4051:
case 1311:
case 3415:
case 753:
case 3758:
case 4078:
case 887:
case 4057:
case 638:
case 3753:
case 0:
case 2885:
case 2534:
case 2011:
case 1399:
case 667:
case 3087:
case 3549:
case 1039:
case 3202:
case 3815:
case 1172:
case 3081:
case 3746:
case 2554:
case 3138:
case 2017:
case 1201:
case 3838:
case 1685:
case 3247:
case 2228:
case 2004:
case 2956:
case 1509:
case 1872:
case 877:
case 1242:
case 2075:
case 2370:
case 257:
case 3877:
case 2936:
case 3155:
case 3900:
case 2507:
case 380:
case 2888:
case 516:
case 3190:
case 729:
case 3986:
case 4:
case 184:
case 1940:
case 3624:
case 236:
case 2225:
case 3113:
case 2560:
case 3890:
case 3967:
case 1688:
case 2397:
case 3584:
case 3835:
case 2391:
case 2073:
case 1019:
case 3961:
case 3679:
case 2542:
case 2188:
case 2031:
case 127:
case 1962:
case 310:
case 654:
case 2783:
case 106:
case 370:
case 2268:
case 1351:
case 1097:
case 4011:
case 751:
case 3389:
case 2788:
case 3352:
case 3435:
case 1565:
case 1337:
case 3490:
case 1378:
case 1331:
case 3092:
case 4017:
case 1091:
case 1373:
case 1357:
case 2319:
case 3455:
case 3332:
case 99:
case 896:
case 2483:
case 2488:
case 3790:
case 1449:
case 1944:
case 3725:
case 581:
case 1069:
case 3620:
case 2564:
case 3894:
case 2303:
case 3580:
case 2987:
case 46:
case 3168:
case 926:
case 2510:
case 3163:
case 231:
case 1327:
case 2593:
case 3863:
case 1295:
case 3409:
case 3868:
case 3396:
case 3975:
case 2966:
case 1546:
case 571:
case 3572:
case 3463:
case 2027:
case 4000:
case 3794:
case 3468:
case 2255:
case 2021:
case 988:
case 4086:
case 1149:
case 918:
case 541:
case 1849:
case 1003:
case 3763:
case 1008:
case 3768:
case 220:
case 2369:
case 3283:
case 101:
case 2213:
case 4061:
case 3109:
case 1279:
case 435:
case 3054:
case 2581:
case 2910:
case 3517:
case 445:
case 281:
case 1121:
case 3511:
case 3648:
case 2803:
case 1512:
case 3196:
case 2469:
case 3394:
case 3219:
case 3575:
case 318:
case 3822:
case 3896:
case 623:
case 1946:
case 1821:
case 475:
case 161:
case 2993:
case 1827:
case 211:
case 2252:
case 1603:
case 2998:
case 3368:
case 2769:
case 625:
case 3422:
case 851:
case 1953:
case 271:
case 1958:
case 938:
case 3291:
case 3297:
case 415:
case 1933:
case 3325:
case 3309:
case 326:
case 1971:
case 378:
case 3796:
case 3722:
case 1721:
case 1349:
case 1727:
case 4084:
case 3599:
case 2869:
case 483:
case 3586:
case 1778:
case 970:
case 1773:
case 1757:
case 2719:
case 2907:
case 2383:
case 3269:
case 2516:
case 3789:
case 2388:
case 3752:
case 166:
case 1431:
case 3050:
case 2942:
case 2891:
case 1457:
case 2914:
case 1473:
case 2419:
case 1236:
case 3432:
case 3095:
case 134:
case 2960:
case 3567:
case 1923:
case 359:
case 1437:
case 4006:
case 2296:
case 1873:
case 1851:
case 2545:
case 472:
case 791:
case 3889:
case 3852:
case 2791:
case 2631:
case 3152:
case 2657:
case 856:
case 228:
case 1157:
case 3024:
case 276:
case 3208:
case 2637:
case 1178:
case 1131:
case 2562:
case 3892:
case 2457:
case 1914:
case 1942:
case 2431:
case 2478:
case 186:
case 2923:
case 1897:
case 1960:
case 2540:
case 4085:
case 234:
case 2928:
case 527:
case 462:
case 1719:
case 993:
case 116:
case 2778:
case 1197:
case 1191:
case 266:
case 2697:
case 1388:
case 995:
case 822:
case 1907:
case 514:
case 1383:
case 3192:
case 3013:
case 574:
case 1657:
case 1673:
case 3792:
case 2151:
case 960:
case 1791:
case 894:
case 3652:
case 2131:
case 3689:
case 300:
case 2157:
case 3529:
case 128:
case 2088:
case 1119:
case 3492:
case 1222:
case 544:
case 2857:
case 2873:
case 1819:
case 506:
case 355:
case 2878:
case 2831:
case 1491:
case 3330:
case 1497:
case 3227:
case 2965:
case 146:
case 3395:
case 3976:
case 2243:
case 3090:
case 261:
case 1108:
case 2946:
case 2821:
case 3273:
case 908:
case 3436:
case 1103:
case 1232:
case 3843:
case 3025:
case 368:
case 2603:
case 43:
case 1998:
case 2827:
case 3848:
case 3456:
case 352:
case 1993:
case 3320:
case 3237:
case 2608:
case 3582:
case 3148:
case 181:
case 1621:
case 1910:
case 1581:
case 1469:
case 3539:
case 1803:
case 1964:
case 3756:
case 2544:
case 1808:
case 2915:
case 2721:
case 3156:
case 3354:
case 754:
case 992:
case 3136:
case 449:
case 823:
case 4047:
case 501:
case 1408:
case 2349:
case 2727:
case 2958:
case 171:
case 465:
case 337:
case 2953:
case 2292:
case 463:
case 2938:
case 479:
case 977:
case 3448:
case 2933:
case 3856:
case 48:
case 2295:
case 3820:
case 450:
case 2327:
case 2230:
case 2749:
case 3348:
case 3754:
case 347:
case 3434:
case 1303:
case 2912:
case 3668:
case 2944:
case 2069:
case 403:
case 691:
case 3120:
case 722:
case 3959:
case 3454:
case 1510:
case 131:
case 405:
case 1981:
case 2224:
case 1369:
case 120:
case 3834:
case 3585:
case 2849:
case 2003:
case 3609:
case 3625:
case 62:
case 1213:
case 952:
case 1027:
case 2571:
case 324:
case 2538:
case 1649:
case 3356:
case 3154:
case 2533:
case 3420:
case 2149:
case 2558:
case 3096:
case 3970:
case 2553:
case 387:
case 1051:
case 3430:
case 1397:
case 2523:
case 1225:
case 2528:
case 3547:
case 2683:
case 284:
case 3124:
case 1183:
case 1078:
case 1514:
case 1031:
case 3618:
case 2019:
case 3032:
case 3613:
case 1391:
case 1073:
case 3249:
case 3635:
case 955:
case 1916:
case 1501:
case 4070:
case 3879:
case 1488:
case 725:
case 3929:
case 1294:
case 1483:
case 723:
case 3479:
case 393:
case 2565:
case 2220:
case 3830:
case 3576:
case 1263:
case 244:
case 1945:
case 206:
case 1268:
case 1319:
case 3850:
case 2091:
case 3779:
case 3908:
case 2880:
case 1485:
case 3903:
case 298:
case 677:
case 3387:
case 4019:
case 558:
case 1382:
case 562:
case 1359:
case 3193:
case 2106:
case 2304:
case 1948:
case 2563:
case 2472:
case 1785:
case 1680:
case 647:
case 2996:
case 2922:
case 2180:
case 3366:
case 3164:
case 1:
case 692:
case 867:
case 3493:
case 3284:
case 2260:
case 2525:
case 1956:
case 2509:
case 687:
case 202:
case 1004:
case 3764:
case 3498:
case 2780:
case 624:
case 1936:
case 1185:
case 1370:
case 157:
case 2214:
case 1075:
case 2706:
case 32:
case 444:
case 2039:
case 1672:
case 3793:
case 3633:
case 3464:
case 2399:
case 3638:
case 2207:
case 3671:
case 3044:
case 1885:
case 1011:
case 1017:
case 617:
case 2059:
case 3658:
case 2172:
case 3410:
case 2406:
case 759:
case 1524:
case 3583:
case 3628:
case 3114:
case 3807:
case 1776:
case 519:
case 28:
case 3623:
case 3142:
case 3588:
case 2029:
case 2005:
case 1579:
case 2184:
case 53:
case 1802:
case 2513:
case 590:
case 3801:
case 778:
case 1847:
case 3101:
case 1238:
case 2535:
case 3272:
case 1476:
case 3860:
case 1102:
case 589:
case 3991:
case 1253:
case 748:
case 1926:
case 3814:
case 3107:
case 1841:
case 3345:
case 3707:
case 1447:
case 85:
case 109:
case 2298:
case 3460:
case 4008:
case 1595:
case 2952:
case 133:
case 1530:
case 3040:
case 3062:
case 1246:
case 1441:
case 3414:
case 1061:
case 3919:
case 3280:
case 718:
case 899:
case 2264:
case 565:
case 24:
case 707:
case 2784:
case 2676:
case 579:
case 1176:
case 810:
case 2210:
case 3714:
case 1741:
case 1086:
case 3401:
case 1661:
case 1302:
case 1979:
case 1474:
case 461:
case 175:
case 2918:
case 1924:
case 3983:
case 3299:
case 1405:
case 1429:
case 2800:
case 1667:
case 173:
case 3591:
case 2861:
case 1686:
case 1774:
case 145:
case 3314:
case 1341:
case 3116:
case 821:
case 2100:
case 1526:
case 1592:
case 767:
case 2076:
case 1347:
case 3065:
case 505:
case 143:
case 2186:
case 2867:
case 3597:
case 2786:
case 2461:
case 1950:
case 738:
case 185:
case 3519:
case 2605:
case 2629:
case 2700:
case 89:
case 3716:
case 1174:
case 2047:
case 1874:
case 3217:
case 2281:
case 1829:
case 10:
case 859:
case 115:
case 3211:
case 279:
case 351:
case 3310:
case 1859:
case 2104:
case 2085:
case 2811:
case 3508:
case 878:
case 3166:
case 3364:
case 3887:
case 2380:
case 3187:
case 3866:
case 740:
case 92:
case 2659:
case 2682:
case 3077:
case 1182:
case 3393:
case 1159:
case 1920:
case 1611:
case 3644:
case 2117:
case 182:
case 3398:
case 3033:
case 1543:
case 2799:
case 2639:
case 1072:
case 3181:
case 1870:
case 3046:
case 2475:
case 3781:
case 502:
case 197:
case 1262:
case 2199:
case 3261:
case 2717:
case 1782:
case 142:
case 2404:
case 888:
case 2925:
case 2711:
case 3267:
case 991:
case 1739:
case 1699:
case 637:
case 3787:
case 4083:
case 2670:
case 3481:
case 2775:
case 3766:
case 807:
case 1954:
case 818:
case 1482:
case 1080:
case 2411:
case 1385:
case 1170:
case 1439:
case 1934:
case 3487:
case 3546:
case 1036:
case 2754:
case 1975:
case 1396:
case 1322:
case 715:
case 3250:
case 2694:
case 1868:
case 2343:
case 1904:
case 3230:
case 1409:
case 1917:
case 783:
case 1163:
case 1506:
case 698:
case 3912:
case 1580:
case 496:
case 785:
case 2663:
case 1725:
case 3944:
case 3069:
case 1125:
case 3279:
case 743:
case 8:
case 4062:
case 1999:
case 4040:
case 1494:
case 3008:
case 1283:
case 2720:
case 3849:
case 769:
case 2096:
case 2022:
case 3149:
case 3558:
case 1654:
case 602:
case 2336:
case 287:
case 2970:
case 3553:
case 1048:
case 1634:
case 537:
case 1468:
case 1043:
case 3533:
case 1809:
case 2356:
case 1572:
case 2618:
case 3962:
case 327:
case 2541:
case 110:
case 2124:
case 491:
case 2392:
case 2326:
case 2613:
case 1679:
case 1961:
case 1967:
case 1890:
case 2495:
case 3523:
case 2430:
case 2179:
case 2089:
case 2052:
case 1118:
case 2547:
case 3940:
case 260:
case 1624:
case 3528:
case 2655:
case 1818:
case 2750:
case 650:
case 314:
case 2502:
case 1813:
case 68:
case 1135:
case 2795:
case 15:
case 1155:
case 180:
case 2130:
case 2479:
case 782:
case 64:
case 1735:
case 2150:
case 2929:
case 2905:
case 374:
case 3091:
case 3373:
case 2850:
case 1718:
case 3378:
case 2779:
case 1092:
case 1026:
case 1389:
case 1435:
case 2576:
case 712:
case 2895:
case 293:
case 3565:
case 170:
case 2724:
case 306:
case 42:
case 1335:
case 1452:
case 3256:
case 815:
case 3923:
case 334:
case 3928:
case 3540:
case 1030:
case 3473:
case 3457:
case 3562:
case 2892:
case 1432:
case 1355:
case 4015:
case 3478:
case 1050:
case 974:
case 3697:
case 619:
case 1789:
case 3737:
case 19:
case 1269:
case 883:
case 2192:
case 2126:
case 1500:
case 4038:
case 4071:
case 690:
case 1692:
case 3773:
case 3778:
case 2379:
case 4058:
case 1586:
case 885:
case 944:
case 927:
case 1024:
case 3083:
case 3131:
case 2529:
case 665:
case 3157:
case 3173:
case 2632:
case 3619:
case 2726:
case 2792:
case 2013:
case 732:
case 984:
case 663:
case 3137:
case 121:
case 2018:
case 679:
case 1152:
case 3837:
case 2395:
case 3248:
case 2227:
case 595:
case 2090:
case 873:
case 2350:
case 3873:
case 2492:
case 2426:
case 875:
case 649:
case 3878:
case 3831:
case 593:
case 872:
case 3603:
case 268:
case 2251:
case 1368:
case 2320:
case 2237:
case 1504:
case 252:
case 2848:
case 2456:
case 1363:
case 3827:
case 3821:
case 3946:
case 361:
case 2231:
case 118:
case 1219:
case 2273:
case 1896:
case 3512:
case 2539:
case 1122:
case 1196:
case 1394:
case 1980:
case 1643:
case 4065:
case 1648:
case 2756:
case 1517:
case 897:
case 662:
case 733:
case 2582:
case 2148:
case 2559:
case 2736:
case 1054:
case 2696:
case 2622:
case 2743:
case 2985:
case 148:
case 2136:
case 3727:
case 1656:
case 4023:
case 3349:
case 2748:
case 2354:
case 76:
case 3915:
case 508:
case 517:
case 1796:
case 1722:
case 1020:
case 3669:
case 587:
case 3971:
case 3938:
case 2063:
case 3427:
case 1309:
case 1291:
case 3292:
case 3226:
case 1422:
case 2570:
case 3953:
case 2836:
case 237:
case 452:
case 2299:
case 804:
case 2745:
case 2640:
case 846:
case 2307:
case 33:
case 3161:
case 319:
case 2301:
case 2662:
case 3918:
case 97:
case 2065:
case 194:
case 3076:
case 3990:
case 3867:
case 3384:
case 3935:
case 2591:
case 3861:
case 596:
case 1862:
case 94:
case 3955:
case 1270:
case 2716:
case 2845:
case 3605:
case 1060:
case 3629:
case 2204:
case 1365:
case 349:
case 3047:
case 1537:
case 3467:
case 731:
case 3461:
case 3041:
case 950:
case 2519:
case 2275:
case 3532:
case 816:
case 98:
case 3266:
case 1557:
case 1740:
case 1645:
case 3400:
case 4068:
case 3287:
case 379:
case 4063:
case 363:
case 3761:
case 3281:
case 362:
case 2508:
case 3085:
case 1844:
case 3811:
case 591:
case 2503:
case 3994:
case 3380:
case 3175:
case 2887:
case 1205:
case 2166:
case 2364:
case 2881:
case 871:
case 1666:
case 3817:
case 3306:
case 2310:
case 251:
case 3963:
case 1527:
case 2644:
case 2393:
case 2181:
case 3968:
case 3245:
case 2033:
case 2398:
case 1112:
case 2058:
case 3596:
case 3659:
case 3682:
case 1144:
case 2267:
case 3372:
case 3925:
case 3711:
case 1098:
case 400:
case 1712:
case 1371:
case 1093:
case 1377:
case 764:
case 4018:
case 1358:
case 3717:
case 4013:
case 3411:
case 3704:
case 1064:
case 2569:
case 3899:
case 453:
case 3216:
case 1412:
case 3670:
case 2481:
case 3775:
case 2286:
case 1315:
case 455:
case 3417:
case 1777:
case 1753:
case 2381:
case 704:
case 291:
case 746:
case 3806:
case 3317:
case 2908:
case 1146:
case 3311:
case 4052:
case 3772:
case 4089:
case 1698:
case 3594:
case 1771:
case 1312:
case 3880:
case 2366:
case 1453:
case 2164:
case 3180:
case 3996:
case 3922:
case 728:
case 1921:
case 3472:
case 1276:
case 3563:
case 1433:
case 3568:
case 1438:
case 1241:
case 1853:
case 831:
case 3706:
case 958:
case 529:
case 1446:
case 2710:
case 2615:
case 3242:
case 3525:
case 1833:
case 716:
case 3872:
case 2284:
case 3780:
case 3685:
case 1871:
case 2498:
case 1171:
case 3082:
case 1138:
case 2677:
case 3201:
case 495:
case 786:
case 1746:
case 2410:
case 1081:
case 3172:
case 3039:
case 2012:
case 22:
case 2044:
case 2638:
case 3207:
case 2671:
case 3480:
case 601:
case 2798:
case 2464:
case 1153:
case 3513:
case 3184:
case 3386:
case 949:
case 1128:
case 1285:
case 2114:
case 2807:
case 2316:
case 3300:
case 350:
case 2583:
case 614:
case 3647:
case 3029:
case 1660:
case 1765:
case 2142:
case 2588:
case 771:
case 2623:
case 3361:
case 3602:
case 31:
case 2842:
case 2814:
case 979:
case 963:
case 1362:
case 154:
case 1828:
case 2101:
case 965:
case 3590:
case 2997:
case 2272:
case 741:
case 3367:
case 296:
case 1978:
case 1931:
case 990:
case 93:
case 2919:
case 2701:
case 2414:
case 1957:
case 1973:
case 1428:
case 3298:
case 1951:
case 408:
case 919:
case 2707:
case 2345:
case 781:
case 1937:
case 3293:
case 417:
case 3952:
case 1865:
case 864:
case 2460:
case 1165:
case 4022:
case 2401:
case 674:
case 1728:
case 836:
case 2280:
case 1723:
case 424:
case 2760:
case 3277:
case 2601:
case 1814:
case 594:
case 1107:
case 3992:
case 3926:
case 636:
case 1842:
case 3258:
case 90:
case 438:
case 3476:
case 196:
case 3233:
case 874:
case 3102:
case 1860:
case 1997:
case 2828:
case 913:
case 1101:
case 3271:
case 1801:
case 2614:
case 4036:
case 3215:
case 1160:
case 806:
case 3776:
case 4056:
case 3684:
case 985:
case 2285:
case 1114:
case 1807:
case 1714:
case 1401:
case 943:
case 3402:
case 1742:
case 945:
case 1665:
case 2723:
case 2016:
case 1407:
case 1280:
case 3747:
case 4043:
case 3329:
case 2728:
case 3305:
case 2973:
case 2957:
case 1414:
case 335:
case 3702:
case 1062:
case 814:
case 2978:
case 2931:
case 1460:
case 975:
case 3530:
case 2423:
case 333:
case 1345:
case 2428:
case 309:
case 523:
case 3:
case 3606:
case 801:
case 2921:
case 2610:
case 972:
case 2477:
case 1366:
case 2453:
case 2438:
case 3943:
case 3680:
case 2471:
case 2664:
case 3265:
case 2433:
case 3948:
case 480:
case 2276:
case 1893:
case 191:
case 1810:
case 3382:
case 2758:
case 3359:
case 1646:
case 1381:
case 1198:
case 2777:
case 2753:
case 2771:
case 3339:
case 499:
case 1387:
case 2698:
case 1864:
case 1903:
case 631:
case 1908:
case 2344:
case 997:
case 2693:
case 1410:
case 2746:
case 3554:
case 1658:
case 4026:
case 1653:
case 2138:
case 3885:
case 1044:
case 3011:
case 1638:
case 2158:
case 2549:
case 3672:
case 12:
case 1012:
case 2087:
case 470:
case 2066:
case 766:
case 2877:
case 2853:
case 3936:
case 357:
case 2241:
case 3185:
case 3370:
case 1498:
case 3004:
case 1764:
case 912:
case 2871:
case 1493:
case 1284:
case 440:
case 49:
case 3543:
case 1033:
case 2687:
case 1181:
case 3920:
case 1644:
case 223:
case 3548:
case 1077:
case 3617:
case 1866:
case 3139:
case 774:
case 1058:
case 1887:
case 459:
case 2205:
case 1364:
case 3839:
case 4030:
case 3604:
case 1508:
case 3882:
case 3859:
case 2274:
case 312:
case 2666:
case 706:
case 3675:
case 4050:
case 3439:
case 3170:
case 9:
case 1487:
case 3934:
case 641:
case 2064:
case 3954:
case 3459:
case 2712:
case 3739:
case 714:
case 2338:
case 1787:
case 342:
case 2098:
case 2333:
case 129:
case 671:
case 1267:
case 2744:
case 1261:
case 3782:
case 4079:
case 3870:
case 2353:
case 2377:
case 156:
case 1360:
case 343:
case 4034:
case 2616:
case 3705:
case 1065:
case 3347:
case 3341:
case 1116:
case 2270:
case 3526:
case 3592:
case 3686:
case 4054:
case 3774:
case 1342:
case 686:
case 935:
case 1988:
case 3667:
case 616:
case 3924:
case 1983:
case 1307:
case 1299:
case 3429:
case 375:
case 3661:
case 418:
case 3474:
case 1211:
case 3244:
case 2007:
case 3829:
case 315:
case 2239:
case 96:
case 628:
case 2762:
case 2259:
case 2282:
case 1217:
case 448:
case 3174:
case 3995:
case 222:
case 2365:
case 2537:
case 3930:
case 2060:
case 2551:
case 2440:
case 1716:
case 866:
case 3084:
case 1023:
case 3129:
case 2573:
case 2578:
case 2014:
case 646:
case 2648:
case 2034:
case 1756:
case 612:
case 2511:
case 3627:
case 2122:
case 3049:
case 3964:
case 288:
case 3803:
case 1143:
case 538:
case 3581:
case 1582:
case 2906:
case 3252:
case 1456:
case 3289:
case 1237:
case 152:
case 3993:
case 1025:
case 2368:
case 1843:
case 3998:
case 168:
case 1251:
case 1273:
case 1257:
case 2822:
case 2896:
case 3566:
case 3103:
case 218:
case 2219:
case 2575:
case 920:
case 1231:
case 74:
case 1278:
case 3108:
case 1068:
case 858:
case 226:
case 2309:
case 1856:
case 1448:
case 2297:
case 278:
case 3703:
case 1063:
case 862:
case 697:
case 931:
case 1443:
case 1836:
case 1570:
case 4001:
case 2422:
case 78:
case 4060:
case 1094:
case 3408:
case 2656:
case 1334:
case 3403:
case 1743:
case 3869:
case 567:
case 2796:
case 739:
case 341:
case 4042:
case 3516:
case 675:
case 2500:
case 3907:
case 3191:
case 29:
case 2789:
case 3388:
case 55:
case 425:
case 580:
case 3901:
case 2318:
case 2732:
case 702:
case 2626:
case 1947:
case 863:
case 2984:
case 259:
case 2335:
case 2452:
case 2489:
case 2567:
case 3891:
case 643:
case 3942:
case 2050:
case 2432:
case 2355:
case 3914:
case 1941:
case 1892:
case 4064:
case 3545:
case 1035:
case 2889:
case 304:
case 2852:
case 1330:
case 3497:
case 890:
case 1395:
case 346:
case 1055:
case 3491:
case 964:
case 683:
case 1426:
case 3296:
case 3222:
case 2832:
case 819:
case 3119:
case 328:
case 4093:
case 1689:
case 3797:
case 100:
case 2208:
case 3637:
case 221:
case 1018:
case 1574:
case 3678:
case 1726:
case 1792:
case 1013:
case 540:
case 936:
case 2079:
case 1632:
case 2135:
case 1502:
case 2986:
case 3501:
case 904:
case 1750:
case 280:
case 3883:
case 1824:
case 3916:
case 87:
case 2900:
case 2155:
case 3888:
case 1690:
case 1795:
case 1032:
case 2679:
case 3542:
case 3188:
case 2961:
case 559:
case 3057:
case 1613:
case 3183:
case 2855:
case 3078:
case 1450:
case 976:
case 84:
case 160:
case 1052:
case 3051:
case 3397:
case 2113:
case 2967:
case 2890:
case 336:
case 1495:
case 2713:
case 762:
case 2092:
case 4081:
case 758:
case 2455:
case 1850:
case 916:
case 3783:
case 3945:
case 270:
case 1724:
case 2490:
case 193:
case 1895:
case 2352:
case 2435:
case 1576:
case 2413:
case 1479:
case 1130:
case 2418:
case 2650:
case 2755:
case 805:
case 81:
case 4066:
case 839:
case 1905:
case 3294:
case 3483:
case 240:
case 521:
case 2790:
case 3488:
case 177:
case 588:
case 749:
case 2506:
case 1982:
case 1959:
case 1120:
case 331:
case 2917:
case 1454:
case 3308:
case 2709:
case 2620:
case 454:
case 2580:
case 3987:
case 1434:
case 971:
case 3564:
case 1668:
case 2322:
case 2194:
case 779:
case 1754:
case 632:
case 2425:
case 2904:
case 1348:
case 2863:
case 1734:
case 2056:
case 1694:
case 1343:
case 2868:
case 1970:
case 3255:
case 790:
case 187:
case 526:
case 1096:
case 1022:
case 1356:
case 898:
case 3649:
case 2572:
case 3290:
case 1420:
case 2825:
case 657:
case 2794:
case 4016:
case 2048:
case 3027:
case 2634:
case 911:
case 548:
case 267:
case 1854:
case 2109:
case 3213:
case 108:
case 1720:
case 1609:
case 1625:
case 2768:
case 2494:
case 3369:
case 2283:
case 1585:
case 2999:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1747940401/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,1,0,0,0,1,1,0,0,0,1,0,1,1,0,1,1,1,0,1,1,0,1,0,1,0,1,0,0,1,0,0,0,1,1,1,1,1,1,1,1,0,0,1,1,0,1,0,0,1,1,1,0,1,0,1,1,1,1,1,1,0,1,0,0,1,1,0,1,1,1,1,1,0,1,0,1,0,1,1,0,1,1,0,0,1,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,1,0,1,1,0,1,0,0,0,1,1,1,1,0,0,1,0,1,0,0,1,1,1,1,1,0,0,0,1,0,1,0,0,1,1,1,1,1,1,1,0,0,1,0,0,1,0,0,0,1,0,1,0,1,0,0,1,1,0,0,0,1,1,1,0,1,0,1,0,0,1,0,1,0,1,0,1,0,0,0,0,1,0,0,0,0,1,1,1,0,1,0,0,1,0,0,1,1,1,1,0,1,1,1,0,1,1,0,1,0,0,1,1,0,1,1,0,1,0,0,0,0,1,1,0,1,0,1,1,0,1,1,0,1,0,0,1,1,0,1,0,0,0,1,1,1,1,1,1,0,0,1,1,1,1,0,1,0,0,0,1,1,1,1,0,0,0,1,0,0,0,1,1,1,0,1,0,0,0,0,0,0,0,0,1,0,0,1,1,0,1,0,1,1,0,0,0,1,0,1,1,1,0,1,0,1,1,0,0,1,0,1,0,0,1,1,0,0,1,1,1,1,0,1,0,0,0,1,1,0,1,0,0,0,0,0,1,1,1,0,0,0,1,1,0,0,1,0,0,0,0,1,0,0,1,0,1,0,1,0,0,0,1,1,1,1,0,1,0,1,1,1,0,0,1,1,0,0,0,1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,0,1,1,0,0,0,1,1,0,1,1,0,1,1,1,0,0,0,0,1,0,1,1,1,0,0,1,1,1,1,1,0,1,1,1,0,0,1,0,1,0,0,1,1,0,0,1,1,0,0,0,1,0,0,0,0,1,1,1,0,1,0,0,0,1,0,1,1,1,1,0,0,0,1,1,0,1,1,1,0,0,0,1,0,1,1,1,1,1,1,1,0,1,1,1,0,0,1,1,0,1,0,0,1,1,0,0,1,0,1,1,1,1,0,0,0,0,0,1,0,1,0,1,0,1,1,0,0,1,0,1,1,1,1,1,1,1,0,0,1,0,0,1,1,0,1,1,1,0,1,1,1,1,1,1,1,1,0,0,0,1,1,0,1,1,0,1,0,1,0,1,0,1,1,0,0,1,1,1,0,0,0,1,0,1,1,1,0,0,0,0,0,1,0,0,0,0,1,1,1,1,0,0,1,1,1,1,0,1,1,1,1,0,1,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,1,1,0,0,1,1,1,0,0,0,1,0,0,1,0,1,1,0,0,1,0,0,1,1,1,0,1,1,0,1,0,1,1,0,0,1,0,1,0,1,1,0,0,1,1,0,0,1,0,1,0,1,1,1,0,1,1,0,0,0,1,0,0,0,1,1,1,1,0,0,0,0,1,0,1,0,1,0,0,1,1,1,1,0,1,0,0,0,1,0,1,1,1,0,0,1,0,1,1,0,0,1,0,0,0,1,1,1,1,0,0,0,0,1,0,1,1,0,0,0,0,1,0,1,0,0,1,1,1,0,0,1,1,0,1,0,1,0,0,0,0,1,0,1,1,0,1,1,0,0,0,1,0,0,0,1,0,0,1,1,1,0,0,1,1,1,0,1,1,1,1,1,0,1,1,0,0,0,0,1,1,0,1,1,1,0,0,0,0,0,0,1,0,0,0,1,1,1,1,1,1,1,0,1,1,1,1,0,0,1,0,1,1,1,1,1,1,0,1,1,1,1,0,1,0,1,1,0,1,0,0,0,1,0,0,0,1,0,0,1,1,1,0,0,0,0,0,1,0,0,1,1,1,1,0,1,0,1,0,0,1,0,1,1,1,0,0,0,0,0,0,1,1,1,1,0,1,1,1,0,1,1,0,0,0,1,1,0,1,0,0,0,1,1,1,1,1,0,0,1,1,1,0,1,1,1,0,0,1,0,1,1,1,1,0,0,0,1,1,1,0,0,1,0,1,0,0,1,1,0,1,0,1,1,0,0,0,1,1,1,1,0,0,0,1,0,0,0,0,1,0,1,1,1,1,0,0,1,1,0,1,0,0,0,0,0,0,1,0,1,1,1,1,1,0,0,0,1,1,0,1,1,0,0,0,1,1,1,0,0,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,1,1,0,1,1,1,0,0,1,1,0,0,1,0,0,0,1,0,0,1,1,0,1,0,0,0,0,0,0,1,1,0,0,0,1,0,0,1,0,0,0,0,1,0,0,1,1,1,0,0,1,1,1,1,0,0,0,0,1,0,0,0,1,0,0,0,0,0,1,1,0,0,1,1,1,0,1,0,1,0,0,0,0,0,0,0,1,1,0,1,1,0,1,0,0,1,1,1,0,1,1,0,1,1,1,1,0,0,1,0,1,1,0,1,1,0,0,1,0,1,0,1,0,0,0,1,0,1,0,1,0,1,1,0,0,0,1,0,1,0,1,0,1,1,0,0,0,1,0,1,1,1,1,1,0,1,1,1,1,0,0,0,0,1,0,1,1,1,0,1,1,1,1,0,0,1,0,1,1,0,0,1,0,1,1,0,1,1,0,1,1,1,1,1,0,0,1,1,1,0,0,0,1,1,0,0,1,1,0,0,1,1,1,1,0,1,0,1,1,1,0,1,1,1,0,0,0,1,1,1,0,0,0,0,1,1,0,1,1,0,1,0,0,0,0,1,0,0,0,1,1,1,1,1,0,1,0,0,0,1,1,0,0,1,1,0,0,0,1,1,0,1,0,1,0,0,1,1,0,1,1,1,0,1,1,0,1,1,1,1,0,1,1,0,0,1,1,0,0,1,0,1,1,1,0,0,0,1,0,1,0,0,0,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,0,0,1,0,0,0,0,1,0,1,0,0,0,1,0,1,1,0,0,0,0,1,0,1,0,1,1,0,0,1,0,0,0,0,1,0,1,0,1,1,1,1,1,0,1,0,1,1,1,0,1,0,0,1,0,0,0,0,0,1,0,0,0,1,0,1,0,1,1,0,0,0,0,0,1,0,0,0,1,0,0,1,1,0,0,1,1,1,1,1,0,0,0,1,1,1,0,0,1,0,1,1,0,1,1,0,0,0,0,0,0,0,1,1,0,1,0,0,0,1,0,0,0,0,0,0,1,0,1,0,1,0,0,0,1,0,1,0,1,1,0,0,1,1,1,0,1,0,1,0,0,1,1,0,1,0,1,1,0,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,0,1,0,1,1,1,1,1,1,1,0,1,1,0,1,0,1,0,1,0,1,0,1,1,0,0,0,0,1,1,0,0,1,1,1,0,1,0,1,1,0,0,1,1,1,1,1,0,0,1,0,1,1,1,0,1,0,1,0,1,1,1,1,1,1,1,0,1,1,0,0,1,1,1,0,1,1,0,1,0,1,1,1,0,1,1,1,1,0,0,0,0,0,0,0,1,1,1,0,0,1,0,0,0,0,0,0,1,1,1,0,0,0,0,1,0,1,0,0,0,1,1,1,1,0,0,1,1,1,1,0,0,1,0,0,0,1,0,1,0,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,1,1,1,0,0,0,0,0,1,1,0,1,1,1,0,1,1,0,0,1,0,0,1,1,1,0,1,1,0,0,1,1,1,1,1,0,1,0,0,1,0,0,0,1,1,1,0,1,0,0,1,0,1,0,1,0,0,1,1,0,0,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,1,0,0,1,1,1,0,0,1,0,1,1,0,1,1,0,0,0,1,1,1,0,1,1,0,1,1,1,1,0,0,0,0,1,1,0,1,0,0,0,1,0,0,1,0,1,1,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,1,1,1,1,0,1,1,1,1,0,0,0,1,1,0,1,0,0,1,0,0,0,1,0,1,1,1,0,0,0,1,0,0,1,0,1,1,0,0,1,0,0,0,1,0,0,1,0,0,1,0,1,1,1,1,0,1,0,0,1,0,0,1,1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0,1,0,0,1,0,1,0,1,1,0,0,0,0,0,0,1,1,1,1,0,0,1,1,1,0,0,1,1,0,0,0,0,1,1,0,0,0,1,0,1,1,1,0,0,0,0,1,0,0,0,0,1,0,0,1,1,1,1,0,1,0,1,0,1,0,0,1,1,1,1,0,1,1,1,1,0,1,1,0,0,1,0,1,0,1,1,1,0,1,0,0,0,1,1,0,0,0,0,1,1,0,1,1,1,0,1,0,0,1,1,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,0,1,0,1,0,0,1,1,0,1,0,1,1,0,1,1,1,0,0,1,1,0,1,1,1,1,0,1,0,1,0,1,1,1,0,0,1,1,1,0,0,1,0,0,1,1,0,1,1,1,1,1,0,0,0,0,1,1,1,0,1,0,0,0,1,1,1,1,0,1,0,1,1,1,0,1,0,1,0,1,1,1,1,0,0,0,1,1,0,1,0,1,0,1,1,1,0,1,0,1,1,1,1,0,1,1,1,1,0,0,1,0,0,1,0,1,0,0,0,1,1,1,1,0,0,1,1,1,0,0,1,0,0,1,0,0,1,1,1,1,1,0,1,0,1,0,1,0,1,1,0,1,1,1,1,0,0,0,1,0,1,1,1,0,0,1,1,1,0,0,1,0,0,1,0,1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,0,1,1,0,0,0,0,0,1,0,0,0,0,1,1,0,1,0,0,1,1,1,1,1,0,1,0,0,0,1,0,1,1,1,0,0,1,1,1,1,1,0,1,0,0,1,0,0,1,0,1,0,0,0,1,0,1,0,0,1,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,1,0,0,0,1,1,1,0,1,0,0,1,0,0,0,1,0,1,0,1,1,0,1,1,0,0,0,1,0,1,0,0,0,1,0,0,1,0,1,0,1,1,1,0,0,1,0,0,1,1,1,0,0,1,1,0,0,1,0,0,1,0,1,0,0,0,0,1,0,1,1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,1,0,0,0,1,1,0,0,1,1,0,1,1,1,1,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,1,0,1,1,0,0,0,1,0,1,0,0,1,1,0,1,0,1,0,0,1,1,0,0,0,0,0,0,1,0,1,1,0,1,1,0,0,1,1,0,0,0,0,1,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,1,1,1,0,0,0,1,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,1,1,1,1,0,1,1,0,0,0,1,1,1,1,1,1,1,0,1,0,1,0,1,1,0,1,0,0,1,0,0,0,0,0,0,1,0,1,0,0,1,1,0,1,1,0,1,0,0,1,0,1,1,0,0,0,0,1,1,1,0,1,1,1,0,1,0,1,1,1,1,0,0,0,1,0,1,1,0,0,0,1,0,1,1,1,0,0,1,1,1,1,0,0,1,0,0,1,0,0,0,1,1,0,1,1,1,1,1,0,0,1,0,0,0,1,0,0,0,1,1,0,0,0,1,0,0,0,0,0,1,1,0,0,1,0,0,0,1,0,0,1,0,0,0,0,1,1,0,1,1,1,0,1,1,1,1,1,1,0,0,0,0,1,0,0,0,1,1,0,0,0,0,1,0,0,0,1,0,1,1,1,1,1,0,0,1,0,1,1,1,0,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,1,0,1,0,1,1,1,0,1,1,0,1,1,1,1,1,1,0,0,1,1,0,1,0,0,1,1,0,0,1,1,1,0,1,1,1,1,0,0,1,1,0,1,1,0,0,0,1,0,0,1,0,1,0,1,1,1,0,1,0,1,1,1,0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,1,1,0,1,0,0,0,0,0,0,1,1,0,0,1,1,1,0,1,1,1,0,0,0,0,0,1,0,1,0,1,0,0,1,0,0,0,0,0,0,0,1,0,1,1,0,0,0,0,1,0,1,1,0,1,0,1,1,1,0,1,0,1,0,1,0,1,1,1,0,0,1,1,0,0,0,1,0,0,1,1,1,0,0,0,1,1,0,1,1,0,1,1,1,1,0,1,1,1,1,1,0,0,0,0,1,1,1,1,0,0,1,1,0,0,0,0,1,0,1,1,0,1,1,0,0,1,1,0,1,0,0,1,1,1,1,1,1,1,1,1,0,0,1,0,1,0,1,1,0,0,1,1,1,1,1,0,0,0,1,1,0,0,0,0,1,0,0,0,1,1,0,1,1,0,1,1,1,1,0,1,0,0,1,1,1,0,1,1,1,1,1,1,0,0,0,1,1,0,0,0,0,0,1,0,1,1,0,0,0,0,1,0,0,1,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,1,0,1,1,0,0,1,1,0,0,1,1,1,0,0,1,0,1,1,1,1,0,0,0,0,1,1,0,1,0,1,1,1,0,0,1,1,0,1,0,0,0,0,1,1,1,0,0,0,0,1,0,1,0,1,0,1,0,0,0,0,1,1,1,1,0,0,1,0,0,0,1,0,0,1,0,0,0,0,1,1,0,1,1,1,1,0,0,1,1,1,1,0,0,1,1,0,1,0,1,0,0,0,1,0,1,1,0,1,1,1,0,0,1,0,0,1,1,0,1,1,1,0,1,1,1,1,0,1,0,0,1,0,0,0,0,1,0,1,1,0,0,1,0,1,1,0,1,1,1,0,0,0,1,0,1,0,0,0,1,1,0,0,1,0,0,0,1,0,0,1,1,0,1,0,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,0,0,1,0,0,0,0,0,1,0,0,1,0,1,1,0,1,1,1,1,0,1,1,1,0,0,1,0,0,1,1,1,1,1,0,1,0,1,1,1,0,0,0,0,0,1,1,0,1,0,1,0,1,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,1,1,1,1,0,1,0,1,0,1,0,1,0,0,0,0,1,1,1,0,0,0,0,0,0,1,0,0,0,0,1,1,1,1,0,0,0,0,0,1,0,0,1,0,1,1,0,1,0,0,1,1,1,0,1,0,0,1,0,1,0,0,0,1,0,0,1,1,1,1,1,1,1,1,0,1,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,1,0,1,1,1,0,0,1,0,0,0,0,1,1,1,0,0,1,1,0,1,1,1,1,1,1,0,1,1,0,0,0,1,1,0,0,1,0,1,1,1,0,1,0,0,0,0,0,0,1,0,0,1,1,1,0,1,0,0,1,0,0,1,0,0,0,0,0,1,0,1,0,0,1,1,0,0,1,1,1,0,0,0,0,0,0,0,1,1,1,0,0,1,0,0,1,1,1,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,1,0,0,1,0,1,0,0,0,0,0,0,1,1,0,0,1,1,0,0,1,1,0,0,0,0,1,1,0,0,0,1,0,0,0,1,1,1,0,1,0,1,0,0,1,1,1,0,1,0,0,1,0,0,0,1,1,0,1,1,1,1,1,0,0,0,0,1,1,0,1,1,0,0,0,0,0,0,1,1,0,1,1,0,0,0,1,0,1,0,0,0,0,1,0,1,1,1,1,1,1,1,0,0,1,1,1,0,0,0,0,0,0,1,1,1,0,0,1,0,0,0,0,1,1,1,1,0,0,1,0,1,0,0,1,1,1,1,1,1,1,1,0,0,0,0,1,1,1,1,1,0,0,1,1,1,1,0,0,0,1,0,1,0,1,1,0,1,0,0,1,0,1,0,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,0,1,0,0,1,0,0,0,1,0,0,1,1,1,0,1,0,1,1,0,0,1,1,1,0,1,1,0,0,1,0,1,1,0,0,0,1,1,1,1,0,0,0,0,0,1,1,0,0,1,0,0,0,0,1,1,0,0,1,0,1,0,0,0,1,0,1,1,1,0,1,1,0,0,0,1,0,1,1,0,0,0,0,0,1,0,0,1,1,1,0,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,1,0,1,0,1,1,0,0,0,1,0,1,1,1,0,0,1,1,1,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,1,0,0,0,1,0,1,0,1,0,0,0,0,0,1,0,1,1,1,0,0,0,0,1,1,1,0,1,0,0,0,0,1,1,0,0,1,0,0,1,1,1,0,0,1,1,1,1,1,1,0,1,1,0,0,1,1,0,0,0,0,0,0,0,1,0,1,0,0,1,1,1,1,0,1,0,1,1,0,1,0,1,0,0,0,0,0,1,1,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1,0,0,1,1,1,0,1,1,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,0,1,1,1,1,1,1,0,0,1,0,1,0,0,0,0,1,1,0,1,1,1,0,1,1,];
var gg_b = "1747940401/";

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
