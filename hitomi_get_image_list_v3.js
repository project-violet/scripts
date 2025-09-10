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
case 3568:
case 295:
case 379:
case 2395:
case 2034:
case 754:
case 55:
case 3997:
case 1452:
case 1530:
case 1720:
case 3812:
case 83:
case 2095:
case 3195:
case 2334:
case 1235:
case 3205:
case 1593:
case 1715:
case 477:
case 570:
case 2894:
case 1367:
case 1377:
case 1845:
case 1669:
case 1679:
case 2653:
case 2702:
case 598:
case 3074:
case 225:
case 2174:
case 1495:
case 445:
case 2164:
case 3064:
case 91:
case 1651:
case 2538:
case 2688:
case 3649:
case 3865:
case 3875:
case 3347:
case 1137:
case 2007:
case 3107:
case 2352:
case 2444:
case 3656:
case 3404:
case 185:
case 2147:
case 3374:
case 4094:
case 2929:
case 2609:
case 2307:
case 3152:
case 3625:
case 1762:
case 2467:
case 1772:
case 2477:
case 1402:
case 278:
case 1372:
case 1362:
case 742:
case 2987:
case 3226:
case 127:
case 126:
case 2661:
case 3128:
case 2603:
case 1072:
case 2420:
case 3085:
case 2821:
case 3817:
case 394:
case 3992:
case 3884:
case 2752:
case 286:
case 3747:
case 1636:
case 1777:
case 1767:
case 2462:
case 3698:
case 2302:
case 514:
case 196:
case 547:
case 1315:
case 2214:
case 2142:
case 2524:
case 642:
case 309:
case 437:
case 530:
case 436:
case 1601:
case 4021:
case 3102:
case 2659:
case 2357:
case 324:
case 1132:
case 87:
case 3342:
case 339:
case 2646:
case 407:
case 1599:
case 1428:
case 1814:
case 737:
case 2614:
case 2070:
case 2971:
case 3170:
case 1201:
case 2537:
case 2687:
case 3231:
case 3298:
case 1138:
case 3206:
case 1574:
case 3440:
case 1236:
case 2096:
case 3196:
case 2873:
case 3841:
case 2148:
case 2623:
case 707:
case 706:
case 2246:
case 2370:
case 2360:
case 2308:
case 613:
case 2468:
case 1263:
case 2836:
case 1547:
case 3567:
case 3577:
case 3786:
case 1489:
case 3243:
case 1901:
case 873:
case 852:
case 2130:
case 988:
case 636:
case 3906:
case 38:
case 251:
case 532:
case 3393:
case 1068:
case 640:
case 1078:
case 1861:
case 3655:
case 3544:
case 1470:
case 2022:
case 4001:
case 1460:
case 3330:
case 2946:
case 1300:
case 2193:
case 3093:
case 1368:
case 3438:
case 977:
case 1408:
case 2203:
case 976:
case 4036:
case 607:
case 1496:
case 1778:
case 159:
case 936:
case 4069:
case 1809:
case 1081:
case 3158:
case 2058:
case 1251:
case 3730:
case 688:
case 3086:
case 3520:
case 803:
case 1700:
case 3099:
case 2199:
case 677:
case 676:
case 553:
case 1381:
case 568:
case 2358:
case 3515:
case 1969:
case 4080:
case 2953:
case 3225:
case 3386:
case 2450:
case 2532:
case 2851:
case 889:
case 2796:
case 2708:
case 1853:
case 1280:
case 2879:
case 645:
case 454:
case 1050:
case 2988:
case 1694:
case 3949:
case 2383:
case 2760:
case 2027:
case 2770:
case 3011:
case 3910:
case 1316:
case 3424:
case 913:
case 1279:
case 2481:
case 2253:
case 776:
case 777:
case 4051:
case 2327:
case 2629:
case 1350:
case 1635:
case 1585:
case 1218:
case 3796:
case 2956:
case 1116:
case 1738:
case 989:
case 3645:
case 47:
case 806:
case 2949:
case 3383:
case 2011:
case 3760:
case 2127:
case 1939:
case 903:
case 3253:
case 557:
case 2925:
case 2183:
case 2605:
case 3629:
case 840:
case 2748:
case 836:
case 2256:
case 2839:
case 1313:
case 1181:
case 3058:
case 2158:
case 2730:
case 2249:
case 2086:
case 813:
case 2210:
case 1239:
case 916:
case 917:
case 691:
case 1013:
case 2793:
case 1719:
case 2515:
case 3953:
case 2225:
case 3682:
case 1665:
case 1675:
case 3450:
case 2386:
case 721:
case 3851:
case 461:
case 773:
case 1502:
case 1411:
case 3722:
case 2567:
case 2577:
case 2243:
case 3271:
case 2931:
case 3130:
case 2030:
case 1290:
case 322:
case 28:
case 1276:
case 1340:
case 2906:
case 1534:
case 3758:
case 351:
case 1617:
case 1168:
case 4041:
case 3504:
case 1724:
case 703:
case 845:
case 2544:
case 3022:
case 644:
case 2655:
case 2890:
case 2491:
case 1233:
case 2093:
case 512:
case 12:
case 2876:
case 2866:
case 991:
case 1595:
case 617:
case 3203:
case 3959:
case 1507:
case 3971:
case 158:
case 3060:
case 3961:
case 2160:
case 3389:
case 3537:
case 3687:
case 1990:
case 877:
case 1038:
case 1976:
case 2206:
case 4033:
case 392:
case 1493:
case 40:
case 2196:
case 2108:
case 633:
case 2440:
case 2841:
case 3863:
case 569:
case 3148:
case 2048:
case 716:
case 1430:
case 1552:
case 4090:
case 3396:
case 3308:
case 603:
case 4076:
case 264:
case 4066:
case 1933:
case 973:
case 1806:
case 1898:
case 744:
case 1241:
case 3468:
case 3903:
case 3478:
case 888:
case 43:
case 1120:
case 3472:
case 1917:
case 70:
case 2606:
case 3057:
case 184:
case 3287:
case 171:
case 2631:
case 1704:
case 319:
case 209:
case 1641:
case 534:
case 3002:
case 3659:
case 224:
case 444:
case 2292:
case 1115:
case 854:
case 417:
case 2454:
case 655:
case 416:
case 239:
case 3795:
case 283:
case 3223:
case 529:
case 2955:
case 3707:
case 2385:
case 2432:
case 1737:
case 1284:
case 1676:
case 1666:
case 2516:
case 3987:
case 3415:
case 390:
case 433:
case 2764:
case 2774:
case 1855:
case 60:
case 489:
case 3914:
case 3028:
case 543:
case 3671:
case 2643:
case 3661:
case 1172:
case 2085:
case 1162:
case 3603:
case 2817:
case 1633:
case 2992:
case 1826:
case 63:
case 3328:
case 950:
case 403:
case 2747:
case 3923:
case 599:
case 2255:
case 149:
case 67:
case 2074:
case 1508:
case 2064:
case 3728:
case 3538:
case 2865:
case 2347:
case 3945:
case 4012:
case 1570:
case 3444:
case 218:
case 3352:
case 650:
case 2404:
case 473:
case 3282:
case 1265:
case 93:
case 2364:
case 3929:
case 241:
case 842:
case 3609:
case 1897:
case 338:
case 2152:
case 1639:
case 395:
case 2578:
case 3835:
case 2742:
case 4065:
case 581:
case 4075:
case 574:
case 77:
case 3757:
case 3245:
case 1618:
case 2500:
case 2195:
case 3540:
case 1474:
case 1464:
case 3334:
case 2205:
case 3519:
case 3982:
case 1975:
case 3229:
case 2437:
case 750:
case 81:
case 3702:
case 661:
case 1728:
case 869:
case 2495:
case 3596:
case 0:
case 932:
case 4029:
case 45:
case 2882:
case 2994:
case 1688:
case 1945:
case 1591:
case 84:
case 3037:
case 1352:
case 108:
case 3570:
case 1007:
case 1147:
case 2935:
case 576:
case 470:
case 668:
case 2434:
case 653:
case 1052:
case 138:
case 3897:
case 2548:
case 498:
case 2772:
case 3337:
case 2762:
case 3912:
case 3589:
case 3639:
case 545:
case 2104:
case 211:
case 3805:
case 435:
case 2829:
case 2294:
case 1245:
case 2452:
case 2530:
case 2680:
case 2720:
case 3618:
case 331:
case 3464:
case 3474:
case 2235:
case 1229:
case 3975:
case 2593:
case 1519:
case 1653:
case 2377:
case 2845:
case 3732:
case 2367:
case 2669:
case 2044:
case 428:
case 3212:
case 1702:
case 2636:
case 3917:
case 3332:
case 1462:
case 2777:
case 2921:
case 3120:
case 1472:
case 3892:
case 384:
case 1057:
case 3984:
case 296:
case 297:
case 371:
case 119:
case 2315:
case 3704:
case 1214:
case 2823:
case 1659:
case 2744:
case 1357:
case 1002:
case 2132:
case 3032:
case 2320:
case 2887:
case 1646:
case 280:
case 3115:
case 513:
case 2814:
case 2428:
case 2599:
case 1795:
case 3527:
case 2511:
case 3:
case 3217:
case 857:
case 856:
case 414:
case 3676:
case 3284:
case 3737:
case 2372:
case 162:
case 446:
case 226:
case 447:
case 227:
case 1415:
case 537:
case 393:
case 1661:
case 430:
case 536:
case 1028:
case 3162:
case 2457:
case 36:
case 3633:
case 3583:
case 400:
case 1328:
case 3826:
case 968:
case 349:
case 602:
case 972:
case 1923:
case 3354:
case 4014:
case 2901:
case 3100:
case 2000:
case 1271:
case 730:
case 2489:
case 1130:
case 266:
case 4046:
case 746:
case 747:
case 151:
case 714:
case 1758:
case 3266:
case 3340:
case 3276:
case 3684:
case 4059:
case 3724:
case 3178:
case 1504:
case 3168:
case 2068:
case 2460:
case 2861:
case 2871:
case 1946:
case 700:
case 928:
case 32:
case 282:
case 3019:
case 2378:
case 3233:
case 2368:
case 874:
case 1959:
case 1203:
case 3040:
case 2496:
case 3713:
case 1961:
case 1971:
case 3990:
case 2191:
case 3091:
case 1687:
case 1537:
case 1389:
case 2846:
case 542:
case 192:
case 2716:
case 3966:
case 647:
case 2236:
case 2564:
case 4003:
case 2574:
case 95:
case 432:
case 1400:
case 4071:
case 775:
case 1623:
case 1801:
case 3552:
case 3430:
case 1246:
case 1370:
case 1783:
case 3831:
case 3806:
case 1308:
case 1396:
case 1836:
case 2263:
case 1478:
case 3338:
case 600:
case 2273:
case 1468:
case 3528:
case 1796:
case 3218:
case 947:
case 1708:
case 1869:
case 1554:
case 3738:
case 4009:
case 930:
case 3116:
case 1988:
case 2050:
case 2951:
case 1027:
case 1770:
case 1760:
case 1111:
case 899:
case 468:
case 3612:
case 3939:
case 1253:
case 2279:
case 2269:
case 1909:
case 1327:
case 1629:
case 698:
case 705:
case 2585:
case 3024:
case 2124:
case 635:
case 834:
case 2778:
case 2081:
case 2809:
case 3313:
case 3825:
case 554:
case 1288:
case 2483:
case 2251:
case 2700:
case 2381:
case 2113:
case 3013:
case 3740:
case 3239:
case 3856:
case 605:
case 1953:
case 2979:
case 1209:
case 1851:
case 628:
case 3675:
case 1532:
case 1722:
case 3810:
case 2024:
case 3542:
case 3778:
case 774:
case 1158:
case 3980:
case 2181:
case 2825:
case 1697:
case 2313:
case 781:
case 800:
case 3483:
case 3251:
case 1210:
case 1520:
case 3381:
case 2740:
case 2239:
case 2013:
case 1225:
case 615:
case 457:
case 2324:
case 1793:
case 3979:
case 3969:
case 1515:
case 847:
case 846:
case 2849:
case 1386:
case 2502:
case 2810:
case 681:
case 1956:
case 1413:
case 2218:
case 2499:
case 2738:
case 2791:
case 3694:
case 3951:
case 1011:
case 1910:
case 904:
case 1127:
case 674:
case 875:
case 4056:
case 1424:
case 3316:
case 910:
case 2939:
case 1925:
case 3269:
case 561:
case 4049:
case 1183:
case 1748:
case 1562:
case 1572:
case 3635:
case 3350:
case 1160:
case 3201:
case 604:
case 3422:
case 1943:
case 974:
case 1711:
case 2507:
case 2091:
case 3191:
case 2990:
case 1348:
case 1231:
case 3750:
case 3846:
case 2966:
case 2038:
case 3138:
case 2493:
case 3716:
case 1419:
case 828:
case 3859:
case 3564:
case 3236:
case 2391:
case 1048:
case 1189:
case 2430:
case 2552:
case 2806:
case 2898:
case 3547:
case 555:
case 610:
case 2100:
case 3000:
case 2448:
case 1243:
case 870:
case 366:
case 1030:
case 367:
case 1626:
case 3781:
case 50:
case 704:
case 18:
case 2266:
case 2534:
case 1906:
case 2276:
case 2340:
case 2724:
case 898:
case 3803:
case 3078:
case 3936:
case 2168:
case 1393:
case 2319:
case 1330:
case 3470:
case 3861:
case 2843:
case 85:
case 1491:
case 4031:
case 710:
case 22:
case 382:
case 44:
case 1866:
case 1876:
case 2233:
case 1438:
case 2019:
case 2713:
case 2941:
case 3408:
case 3973:
case 2:
case 2217:
case 1432:
case 1385:
case 3362:
case 404:
case 3154:
case 327:
case 2054:
case 293:
case 1817:
case 2172:
case 3072:
case 3457:
case 1884:
case 2633:
case 544:
case 2583:
case 2826:
case 2354:
case 1255:
case 612:
case 1747:
case 2442:
case 769:
case 853:
case 2485:
case 2332:
case 2120:
case 3636:
case 3586:
case 1157:
case 2892:
case 1606:
case 872:
case 1926:
case 271:
case 223:
case 3601:
case 443:
case 4055:
case 1042:
case 3823:
case 589:
case 3315:
case 3744:
case 3663:
case 2641:
case 3673:
case 712:
case 3132:
case 2032:
case 669:
case 1292:
case 124:
case 1454:
case 3887:
case 4026:
case 380:
case 2115:
case 3015:
case 3428:
case 499:
case 183:
case 64:
case 3599:
case 179:
case 2004:
case 1578:
case 3104:
case 3294:
case 1134:
case 3452:
case 802:
case 3077:
case 94:
case 657:
case 1195:
case 415:
case 656:
case 2304:
case 3715:
case 552:
case 2975:
case 1205:
case 3679:
case 3669:
case 3377:
case 969:
case 3367:
case 2732:
case 1610:
case 1064:
case 1074:
case 3495:
case 1347:
case 3882:
case 2754:
case 3994:
case 2560:
case 118:
case 1656:
case 1107:
case 912:
case 1404:
case 3935:
case 141:
case 2275:
case 1905:
case 2265:
case 1625:
case 2897:
case 756:
case 757:
case 2912:
case 1785:
case 2337:
case 3762:
case 1838:
case 838:
case 48:
case 2582:
case 2632:
case 1993:
case 3779:
case 1476:
case 1466:
case 3769:
case 3336:
case 3896:
case 1159:
case 3141:
case 3073:
case 3063:
case 2163:
case 1398:
case 563:
case 558:
case 3461:
case 3860:
case 4030:
case 3301:
case 1490:
case 1891:
case 3615:
case 14:
case 794:
case 59:
case 3780:
case 3373:
case 1433:
case 1098:
case 4093:
case 808:
case 255:
case 3968:
case 3403:
case 3978:
case 3036:
case 624:
case 3900:
case 169:
case 825:
case 1930:
case 20:
case 1725:
case 3133:
case 2033:
case 2219:
case 3672:
case 1685:
case 2739:
case 1948:
case 2390:
case 709:
case 1343:
case 918:
case 724:
case 2893:
case 112:
case 1594:
case 2076:
case 2066:
case 3166:
case 23:
case 1756:
case 1441:
case 2333:
case 941:
case 1710:
case 783:
case 1043:
case 4048:
case 694:
case 3822:
case 895:
case 3446:
case 2654:
case 1230:
case 2090:
case 3190:
case 739:
case 1310:
case 354:
case 4011:
case 2886:
case 779:
case 3139:
case 1824:
case 1418:
case 1299:
case 2213:
case 2733:
case 3858:
case 2790:
case 820:
case 1049:
case 3051:
case 2151:
case 1188:
case 994:
case 1743:
case 1010:
case 1286:
case 1664:
case 1813:
case 641:
case 2514:
case 3453:
case 2339:
case 2766:
case 2776:
case 2637:
case 3916:
case 886:
case 3488:
case 2410:
case 4086:
case 3827:
case 2456:
case 3555:
case 718:
case 1999:
case 1153:
case 3079:
case 2179:
case 1731:
case 890:
case 261:
case 3250:
case 741:
case 3701:
case 2924:
case 3369:
case 1439:
case 3736:
case 3379:
case 2018:
case 939:
case 3677:
case 3981:
case 2180:
case 2425:
case 3526:
case 3216:
case 1798:
case 1706:
case 418:
case 1947:
case 3035:
case 2135:
case 4074:
case 4064:
case 1129:
case 1005:
case 181:
case 2312:
case 3267:
case 3277:
case 1974:
case 1964:
case 441:
case 3482:
case 1465:
case 3094:
case 1475:
case 3650:
case 1837:
case 3445:
case 388:
case 1397:
case 1755:
case 2874:
case 2559:
case 2864:
case 1573:
case 3165:
case 2065:
case 1182:
case 3681:
case 3531:
case 1097:
case 3852:
case 2624:
case 3967:
case 1412:
case 1274:
case 1264:
case 2904:
case 291:
case 3915:
case 1569:
case 1579:
case 3487:
case 337:
case 143:
case 1326:
case 68:
case 5:
case 2640:
case 2384:
case 2317:
case 3321:
case 2932:
case 1580:
case 216:
case 1630:
case 1355:
case 3423:
case 199:
case 2885:
case 3668:
case 3678:
case 3021:
case 2121:
case 764:
case 3184:
case 424:
case 2084:
case 233:
case 3525:
case 2426:
case 571:
case 3215:
case 1123:
case 523:
case 2842:
case 289:
case 3735:
case 3962:
case 3857:
case 104:
case 1484:
case 2691:
case 2954:
case 110:
case 3556:
case 313:
case 1242:
case 2455:
case 129:
case 1114:
case 3802:
case 3220:
case 1392:
case 3549:
case 494:
case 2588:
case 3426:
case 1729:
case 596:
case 147:
case 2215:
case 130:
case 1023:
case 1387:
case 389:
case 1689:
case 1820:
case 1421:
case 2962:
case 1202:
case 114:
case 1192:
case 2857:
case 1815:
case 1323:
case 3691:
case 1087:
case 580:
case 487:
case 1928:
case 3455:
case 303:
case 213:
case 1660:
case 2802:
case 2220:
case 1696:
case 2549:
case 1745:
case 1257:
case 3588:
case 3553:
case 526:
case 420:
case 3775:
case 760:
case 419:
case 1155:
case 1622:
case 651:
case 3384:
case 3640:
case 2272:
case 1902:
case 792:
case 965:
case 4057:
case 3619:
case 1126:
case 207:
case 317:
case 2600:
case 2423:
case 1228:
case 1518:
case 175:
case 3885:
case 1862:
case 2117:
case 2668:
case 2678:
case 1957:
case 3084:
case 3492:
case 1252:
case 3546:
case 665:
case 2944:
case 3559:
case 922:
case 1995:
case 495:
case 4034:
case 3065:
case 2165:
case 3075:
case 2175:
case 2531:
case 1658:
case 2852:
case 3237:
case 2721:
case 105:
case 3365:
case 3847:
case 277:
case 391:
case 3405:
case 1934:
case 1952:
case 1345:
case 1877:
case 408:
case 960:
case 1723:
case 425:
case 245:
case 3503:
case 2394:
case 511:
case 15:
case 1105:
case 1683:
case 1045:
case 2616:
case 3571:
case 3561:
case 548:
case 1907:
case 373:
case 2895:
case 1627:
case 3204:
case 321:
case 1566:
case 1234:
case 1787:
case 2482:
case 352:
case 3194:
case 2094:
case 1850:
case 1746:
case 1451:
case 725:
case 465:
case 2827:
case 3811:
case 2555:
case 2644:
case 920:
case 2763:
case 2773:
case 708:
case 695:
case 1816:
case 3318:
case 919:
case 3179:
case 2079:
case 361:
case 1353:
case 3924:
case 3018:
case 2118:
case 2667:
case 2736:
case 2369:
case 2379:
case 2526:
case 2080:
case 2981:
case 1958:
case 2409:
case 738:
case 839:
case 1983:
case 4027:
case 883:
case 3523:
case 3213:
case 1652:
case 625:
case 1125:
case 1881:
case 3790:
case 3151:
case 1088:
case 1110:
case 638:
case 3899:
case 3224:
case 153:
case 987:
case 350:
case 1258:
case 2916:
case 172:
case 3587:
case 3766:
case 3776:
case 30:
case 21:
case 3219:
case 492:
case 1709:
case 2133:
case 3376:
case 3240:
case 4008:
case 3366:
case 132:
case 2662:
case 662:
case 3390:
case 1989:
case 719:
case 1512:
case 460:
case 567:
case 2176:
case 3938:
case 687:
case 1996:
case 1908:
case 2278:
case 1970:
case 1143:
case 1071:
case 1960:
case 879:
case 938:
case 4089:
case 3545:
case 3090:
case 1788:
case 2751:
case 451:
case 762:
case 995:
case 1753:
case 2779:
case 242:
case 619:
case 3582:
case 3919:
case 1575:
case 3632:
case 2808:
case 1059:
case 2073:
case 3173:
case 3940:
case 620:
case 3163:
case 3443:
case 1922:
case 2471:
case 2870:
case 1289:
case 1046:
case 2615:
case 790:
case 1359:
case 2780:
case 3341:
case 2373:
case 2363:
case 1106:
case 818:
case 2968:
case 3136:
case 2978:
case 2620:
case 3718:
case 4022:
case 1270:
case 2900:
case 2001:
case 1260:
case 3848:
case 1131:
case 2597:
case 1406:
case 58:
case 2293:
case 784:
case 1529:
case 10:
case 2725:
case 332:
case 1739:
case 2103:
case 3436:
case 1366:
case 1240:
case 3878:
case 723:
case 3512:
case 2948:
case 458:
case 1830:
case 771:
case 4091:
case 3361:
case 1431:
case 2343:
case 3303:
case 1333:
case 2441:
case 3908:
case 13:
case 2840:
case 3628:
case 2710:
case 2161:
case 3061:
case 3071:
case 2043:
case 3970:
case 2171:
case 2230:
case 2749:
case 1991:
case 1090:
case 811:
case 1632:
case 3575:
case 1919:
case 2466:
case 2476:
case 623:
case 3753:
case 2838:
case 1940:
case 1173:
case 7:
case 1041:
case 671:
case 2398:
case 901:
case 684:
case 3289:
case 2331:
case 885:
case 1443:
case 3922:
case 2891:
case 3046:
case 3106:
case 564:
case 1341:
case 76:
case 3198:
case 931:
case 3657:
case 24:
case 42:
case 1718:
case 155:
case 749:
case 1101:
case 3346:
case 3270:
case 269:
case 2642:
case 1291:
case 2031:
case 3131:
case 2930:
case 3451:
case 3746:
case 1449:
case 984:
case 3695:
case 1741:
case 1456:
case 4024:
case 1179:
case 3816:
case 2153:
case 3053:
case 3634:
case 2731:
case 161:
case 1604:
case 2521:
case 3227:
case 2439:
case 4013:
case 1018:
case 3353:
case 2798:
case 631:
case 2706:
case 1180:
case 257:
case 9:
case 3983:
case 2310:
case 2349:
case 1039:
case 1213:
case 2418:
case 2109:
case 3881:
case 2025:
case 2356:
case 2188:
case 3088:
case 1151:
case 3149:
case 896:
case 2674:
case 3771:
case 3927:
case 2010:
case 3110:
case 1514:
case 3607:
case 3309:
case 353:
case 2325:
case 2056:
case 368:
case 1224:
case 1899:
case 3479:
case 1776:
case 1339:
case 1766:
case 1587:
case 372:
case 949:
case 1637:
case 150:
case 1546:
case 3252:
case 1613:
case 2699:
case 2247:
case 2755:
case 1559:
case 1864:
case 3494:
case 1075:
case 3082:
case 2182:
case 335:
case 401:
case 3658:
case 2412:
case 2501:
case 1624:
case 1904:
case 2264:
case 2536:
case 2686:
case 2274:
case 431:
case 1405:
case 191:
case 541:
case 958:
case 963:
case 2792:
case 4037:
case 1012:
case 3877:
case 3029:
case 1937:
case 1312:
case 3045:
case 3590:
case 3844:
case 398:
case 3714:
case 2611:
case 3627:
case 173:
case 2475:
case 1194:
case 152:
case 370:
case 3314:
case 133:
case 347:
case 1426:
case 3729:
case 3387:
case 1842:
case 3023:
case 2123:
case 330:
case 2648:
case 2417:
case 2985:
case 3820:
case 3192:
case 658:
case 314:
case 663:
case 539:
case 210:
case 300:
case 1954:
case 3014:
case 2114:
case 583:
case 103:
case 1455:
case 229:
case 2242:
case 3696:
case 2392:
case 859:
case 1588:
case 524:
case 1638:
case 72:
case 2832:
case 46:
case 2854:
case 2569:
case 1553:
case 763:
case 423:
case 3155:
case 3902:
case 1317:
case 2693:
case 1619:
case 1254:
case 375:
case 299:
case 2942:
case 1017:
case 1121:
case 3872:
case 4032:
case 594:
case 1492:
case 2797:
case 79:
case 1084:
case 1487:
case 1915:
case 1414:
case 3326:
case 343:
case 137:
case 666:
case 3285:
case 1262:
case 1272:
case 578:
case 1321:
case 586:
case 3580:
case 107:
case 2518:
case 275:
case 1600:
case 399:
case 1423:
case 3942:
case 1117:
case 3797:
case 1184:
case 1215:
case 3705:
case 767:
case 2729:
case 1525:
case 247:
case 1735:
case 2689:
case 3648:
case 230:
case 519:
case 2023:
case 3123:
case 3985:
case 3092:
case 2192:
case 3484:
case 304:
case 2087:
case 3187:
case 200:
case 2815:
case 2323:
case 2014:
case 3242:
case 113:
case 1556:
case 3392:
case 2608:
case 334:
case 4062:
case 2696:
case 1220:
case 3551:
case 1549:
case 2257:
case 374:
case 3792:
case 82:
case 759:
case 595:
case 1394:
case 1035:
case 3947:
case 3804:
case 3005:
case 2683:
case 1834:
case 3129:
case 2029:
case 1616:
case 3145:
case 1267:
case 2907:
case 2844:
case 298:
case 2714:
case 3974:
case 1895:
case 485:
case 3611:
case 2566:
case 1650:
case 2576:
case 3465:
case 2787:
case 1335:
case 1482:
case 270:
case 1445:
case 3837:
case 4077:
case 4067:
case 3699:
case 3397:
case 525:
case 2995:
case 3573:
case 3247:
case 3755:
case 235:
case 2494:
case 1175:
case 1852:
case 538:
case 2658:
case 1681:
case 1977:
case 1967:
case 448:
case 982:
case 2382:
case 2435:
case 1598:
case 2934:
case 177:
case 176:
case 1592:
case 3310:
case 3647:
case 3299:
case 3418:
case 927:
case 2703:
case 926:
case 2009:
case 2881:
case 2652:
case 2125:
case 3356:
case 3188:
case 2088:
case 3049:
case 2149:
case 3664:
case 3286:
case 3911:
case 2110:
case 3010:
case 2927:
case 2771:
case 2761:
case 3813:
case 268:
case 3056:
case 2156:
case 272:
case 685:
case 2469:
case 1488:
case 2451:
case 2283:
case 2746:
case 2850:
case 849:
case 1773:
case 1555:
case 459:
case 1079:
case 3153:
case 86:
case 2634:
case 1250:
case 1883:
case 3731:
case 2517:
case 893:
case 1118:
case 1379:
case 1736:
case 3439:
case 1369:
case 2353:
case 8:
case 3706:
case 3798:
case 1526:
case 2958:
case 1981:
case 1336:
case 1769:
case 3476:
case 2575:
case 3993:
case 2565:
case 2753:
case 3398:
case 4078:
case 1141:
case 2059:
case 1808:
case 2289:
case 1870:
case 1461:
case 4000:
case 3331:
case 1615:
case 3891:
case 3490:
case 560:
case 2046:
case 467:
case 3146:
case 3098:
case 2198:
case 1363:
case 3006:
case 3433:
case 34:
case 1978:
case 2208:
case 1620:
case 369:
case 1889:
case 948:
case 3930:
case 2131:
case 522:
case 3725:
case 551:
case 627:
case 2436:
case 1662:
case 2878:
case 2989:
case 831:
case 2401:
case 3948:
case 797:
case 2361:
case 3343:
case 202:
case 2996:
case 2463:
case 2473:
case 1268:
case 3756:
case 3840:
case 1822:
case 2970:
case 3043:
case 2143:
case 3710:
case 780:
case 1190:
case 3230:
case 3749:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1757476801/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,0,0,1,0,1,0,0,0,0,1,0,0,0,0,1,1,0,1,0,0,0,0,0,1,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,1,0,1,1,1,1,0,1,1,0,0,0,1,1,0,0,1,1,0,0,1,0,1,0,1,1,1,0,0,1,0,1,0,0,0,0,0,0,0,1,1,1,0,1,0,0,0,1,1,1,1,1,1,1,0,0,0,1,0,0,1,0,1,0,0,0,1,1,1,0,0,1,1,1,1,0,1,0,0,1,0,0,1,0,0,1,1,1,0,0,1,1,0,1,0,1,1,1,0,1,0,0,0,0,0,1,0,1,1,0,0,1,0,0,1,1,1,1,1,1,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,1,1,1,1,1,0,0,1,1,1,0,1,1,0,0,1,0,1,1,1,1,0,1,0,0,0,1,0,1,1,0,1,0,1,1,1,1,0,0,0,0,0,1,0,0,1,1,0,1,0,1,1,1,0,1,0,0,1,1,0,1,0,1,1,1,0,1,1,1,0,1,0,1,1,1,0,1,1,0,1,0,1,0,0,0,0,0,1,1,0,1,0,0,1,0,1,0,0,1,1,0,1,1,0,1,0,1,0,1,0,0,0,0,0,0,1,1,0,0,1,1,1,1,0,1,1,1,0,0,1,1,0,1,0,1,0,0,1,0,1,1,0,1,1,0,0,0,1,0,0,1,0,0,0,1,1,1,0,1,1,1,0,1,0,0,0,0,0,0,1,1,1,1,1,1,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,1,0,1,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,1,1,0,0,1,1,1,1,1,0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,1,0,0,0,0,1,0,0,0,1,1,1,0,1,0,0,0,0,0,0,1,1,0,1,1,0,1,1,0,0,0,0,0,1,1,1,0,1,0,0,1,0,1,1,0,1,1,1,0,1,1,1,1,1,1,1,0,1,0,1,0,1,1,0,1,0,0,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,1,1,1,0,1,1,0,0,0,0,0,1,1,0,0,1,0,1,0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,1,1,0,0,0,0,0,1,0,0,1,0,0,1,0,0,1,1,0,0,0,0,0,1,1,0,1,0,1,0,1,0,0,1,0,1,1,0,1,1,0,1,1,1,1,0,0,0,1,0,0,0,1,0,0,0,0,1,0,1,1,0,1,0,0,1,0,1,0,1,0,0,1,1,0,0,0,1,0,0,1,1,0,1,0,1,0,0,1,0,1,0,0,0,1,0,0,1,0,1,1,0,0,1,0,1,0,0,0,0,1,1,0,0,0,1,0,0,1,0,0,1,0,1,1,0,1,0,0,1,1,1,0,1,1,0,0,1,0,0,1,1,0,1,1,0,0,1,1,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,0,1,0,1,0,0,0,1,1,1,1,0,1,1,1,1,1,1,0,0,0,1,0,0,1,0,1,0,0,1,0,0,1,1,1,0,1,0,0,1,0,0,1,0,0,0,1,1,0,1,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,1,1,1,1,1,0,1,0,1,0,1,1,0,1,1,0,1,0,0,1,1,0,1,0,1,1,0,1,0,1,1,1,1,0,1,0,1,1,1,1,0,1,1,0,1,1,0,1,1,0,1,0,1,0,0,0,1,0,1,1,0,0,0,1,0,1,1,0,0,0,1,0,0,1,0,1,1,1,1,1,1,1,1,1,0,0,1,0,0,0,0,1,0,1,0,1,1,1,0,1,0,0,1,0,0,0,1,1,0,1,0,0,1,0,0,1,0,1,0,0,1,1,1,1,1,0,1,0,0,1,1,0,0,0,0,0,1,0,1,1,1,0,0,0,1,0,0,0,1,1,1,0,1,0,0,1,0,1,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,0,1,0,1,1,0,1,0,1,1,0,0,1,1,0,0,0,1,0,0,1,1,1,1,0,1,0,1,1,0,0,0,1,0,1,1,0,0,1,1,1,1,1,1,0,1,1,0,1,0,1,1,0,0,0,0,1,1,1,0,0,1,1,1,1,0,1,1,1,0,0,1,0,1,1,1,1,0,1,1,0,0,1,0,0,0,1,0,0,1,0,0,0,1,0,1,1,1,1,0,1,0,1,1,1,1,0,1,1,1,0,1,1,0,0,1,0,0,1,1,0,0,1,0,1,1,0,1,1,0,0,1,0,1,1,1,1,1,1,0,0,1,1,0,1,1,1,0,0,0,1,1,0,0,1,1,0,0,0,0,0,1,0,0,1,0,1,0,0,0,1,0,0,0,0,1,0,1,1,0,0,1,1,0,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,0,0,0,1,0,1,1,1,1,1,0,1,1,1,0,0,1,0,1,1,1,0,0,0,0,0,0,1,1,1,0,0,0,1,0,1,0,0,1,1,1,1,1,0,0,0,1,0,1,1,1,0,0,1,1,0,0,0,1,1,0,1,0,1,1,1,0,0,1,1,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,1,0,0,1,1,1,0,0,0,0,0,0,1,0,0,1,0,1,0,0,0,0,1,0,0,1,0,0,0,1,0,1,0,1,1,0,0,1,1,1,0,1,0,1,0,0,0,0,0,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,0,1,0,1,0,0,1,0,0,0,1,1,1,0,1,0,1,1,0,0,0,1,0,1,1,0,1,0,0,1,1,0,0,0,1,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,1,1,0,0,1,1,0,0,0,0,0,1,0,1,1,1,1,0,1,0,1,0,1,1,1,0,0,0,1,0,1,1,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,1,1,0,0,0,0,0,1,1,0,0,1,0,1,0,0,1,0,1,0,1,0,0,0,0,1,1,1,1,0,0,1,0,1,0,1,0,1,1,1,0,1,0,0,1,0,0,0,1,1,1,0,0,0,1,0,0,0,1,0,1,0,1,0,1,0,0,0,1,0,1,1,1,0,1,0,1,1,0,0,0,0,0,0,0,1,0,0,1,1,1,1,1,0,1,0,1,1,0,0,1,1,1,0,1,0,0,1,1,0,0,0,1,1,1,1,0,0,1,1,0,0,1,0,1,0,1,1,0,1,1,1,1,1,1,1,1,0,0,1,0,1,1,0,0,0,0,0,1,1,0,1,1,0,1,1,1,0,1,1,0,0,1,0,0,0,0,1,1,0,0,0,1,1,1,1,0,1,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,1,1,0,1,0,1,1,1,0,1,1,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,1,0,1,1,1,1,0,1,1,1,0,0,0,0,1,1,0,1,0,0,0,0,0,1,0,0,0,1,1,0,1,1,1,1,1,0,0,1,1,0,1,0,1,0,1,0,1,0,0,0,1,1,1,1,0,1,0,0,1,1,0,1,0,1,0,1,0,1,0,0,0,0,1,1,1,0,1,1,0,0,0,1,0,0,0,0,1,1,0,0,1,0,1,1,1,0,0,0,0,0,1,0,1,0,1,0,0,0,0,1,1,1,1,0,1,0,0,1,0,1,0,1,0,1,1,1,0,0,1,0,0,1,0,0,1,1,0,0,0,1,1,1,1,0,1,0,1,0,0,1,1,1,1,0,1,0,0,1,0,1,1,0,1,1,1,1,0,1,0,0,1,1,1,0,0,0,0,0,1,1,0,1,0,1,0,1,0,1,1,1,0,1,1,1,0,1,0,0,0,1,1,1,0,1,1,0,1,1,1,1,0,0,0,0,1,0,1,1,1,1,1,0,0,1,0,1,0,1,1,0,0,1,1,1,1,1,0,0,1,1,1,0,1,0,0,1,1,1,1,0,1,0,1,1,1,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,1,1,1,0,1,0,1,0,1,1,0,0,1,0,0,1,0,1,0,1,1,0,0,1,1,0,1,0,0,1,1,0,1,0,0,0,0,1,1,1,0,0,0,1,0,0,0,0,0,0,1,1,0,1,1,0,1,0,0,0,1,1,0,0,0,0,0,1,1,0,1,0,1,1,1,1,0,0,0,0,1,0,1,0,0,1,1,0,0,0,1,1,0,1,1,0,1,0,0,0,1,0,0,1,1,1,0,0,1,1,0,0,0,0,1,0,1,0,0,0,0,0,0,1,1,1,0,1,1,1,1,0,0,1,0,1,0,1,0,1,1,1,0,1,0,1,0,0,1,1,1,1,0,0,0,1,0,1,0,1,1,0,0,1,0,1,1,0,0,0,1,1,0,0,0,0,0,1,0,0,1,0,0,0,0,1,1,1,0,1,1,0,0,1,1,1,0,0,0,1,1,0,0,0,1,0,0,1,0,0,1,0,0,0,1,0,1,1,0,0,0,0,1,0,1,1,1,1,1,1,0,0,1,1,1,0,0,0,1,0,0,0,1,1,0,1,0,1,0,0,1,0,0,0,1,1,0,1,1,0,0,1,0,0,0,1,1,0,0,0,0,0,1,1,1,1,0,1,1,0,0,0,1,0,0,1,0,0,1,1,1,0,1,0,0,1,0,1,0,1,1,0,0,0,1,0,0,0,0,1,1,1,1,0,1,1,1,1,0,1,1,0,1,0,0,1,1,0,1,1,0,0,1,1,0,0,1,0,1,0,1,0,1,0,0,0,1,1,1,1,1,0,0,0,0,1,1,0,1,1,0,0,0,0,0,1,0,0,1,1,1,0,1,1,1,1,1,0,1,1,0,0,0,1,1,1,1,1,1,1,0,1,0,1,1,0,0,1,0,1,0,0,1,0,1,0,1,0,0,1,1,0,0,0,1,0,1,1,1,0,0,0,0,1,1,0,1,0,0,1,1,0,1,1,1,0,1,0,1,1,0,0,0,1,0,0,0,1,0,0,1,0,0,1,1,0,0,0,0,1,0,0,1,1,1,0,0,0,1,0,0,0,0,0,0,1,1,1,0,0,0,1,0,0,1,1,0,1,1,0,1,1,0,1,1,1,1,0,0,1,0,1,1,1,1,0,0,1,0,1,1,0,1,0,0,1,0,1,0,1,0,1,0,0,0,0,1,0,0,0,0,1,0,1,1,1,0,1,0,0,0,1,0,0,0,0,1,1,0,1,0,0,1,1,0,0,0,0,1,0,1,0,1,0,0,0,1,1,1,0,0,0,1,0,1,1,1,0,1,0,1,0,0,0,0,1,1,0,0,0,0,1,1,1,1,0,1,1,1,0,1,1,0,0,0,0,0,1,1,0,1,1,0,1,0,1,1,1,0,0,0,1,0,1,0,0,0,1,1,1,1,1,0,1,1,1,0,0,1,1,0,1,1,0,1,1,1,0,0,1,1,1,0,0,0,0,1,0,1,1,1,1,0,0,0,0,0,1,1,1,0,0,1,0,1,1,0,1,1,1,1,0,1,1,1,0,1,0,0,1,1,0,1,0,0,1,0,0,1,0,1,1,0,0,0,1,1,1,0,1,1,0,0,1,1,1,1,0,1,0,0,0,0,1,0,0,1,1,0,0,0,0,0,1,0,1,0,1,1,1,0,0,0,0,1,1,0,0,1,0,0,1,1,1,1,0,0,0,1,1,1,1,0,1,1,1,0,1,0,1,1,0,1,1,0,0,0,0,1,0,1,0,1,1,0,1,1,0,0,1,0,0,1,1,0,1,0,1,0,1,1,0,0,1,0,1,1,1,0,0,1,1,0,0,1,1,1,0,0,0,0,0,1,1,0,1,0,0,0,1,0,1,0,1,0,0,0,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,1,0,1,1,1,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,1,1,0,1,1,0,0,0,0,1,1,0,0,0,1,1,1,0,1,1,1,0,1,0,0,0,1,1,1,0,0,1,0,1,1,1,0,1,0,1,0,0,0,1,0,1,1,0,1,1,1,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,1,1,0,1,1,1,0,1,1,0,0,0,1,1,1,0,0,1,0,0,1,0,1,0,0,1,0,0,1,1,0,0,0,1,1,0,0,0,0,0,0,1,0,0,1,0,0,1,1,0,1,0,0,1,1,1,1,0,1,1,1,0,1,1,1,1,0,1,1,0,0,1,0,1,0,0,0,0,1,0,0,1,1,1,0,1,0,0,1,0,1,0,1,0,0,1,0,1,0,0,0,0,1,0,1,1,1,0,1,1,1,0,1,0,1,0,0,1,1,1,0,1,1,0,0,1,0,1,1,1,0,1,0,0,0,0,1,0,1,0,0,0,1,1,1,0,1,0,1,1,0,0,1,1,1,0,0,1,0,0,0,1,1,0,0,1,0,0,0,0,1,1,1,0,0,1,1,0,1,1,0,0,0,1,1,0,1,1,0,1,0,0,1,1,0,1,0,1,0,1,1,0,0,0,1,0,0,1,0,0,0,1,1,1,1,1,0,0,0,0,0,1,0,0,0,1,1,0,1,0,0,0,1,0,1,0,0,0,0,0,1,1,1,0,0,0,1,0,1,0,1,0,0,1,1,0,1,1,1,1,0,0,1,1,1,0,1,1,0,1,1,1,1,0,0,0,0,0,0,1,1,0,1,0,0,1,0,1,1,1,0,0,1,0,0,1,0,0,0,0,0,1,1,0,1,1,1,0,0,1,0,0,1,0,1,0,1,1,0,1,1,1,1,0,0,1,1,1,1,0,1,1,0,0,1,0,0,0,1,0,0,0,1,0,1,1,0,1,0,0,0,0,1,1,1,1,1,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,1,0,1,1,0,0,1,0,0,1,0,0,1,0,1,0,1,1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,0,0,0,1,1,1,1,0,0,1,1,1,1,0,1,0,0,0,0,1,0,1,1,1,1,0,1,1,1,0,0,1,0,1,0,1,1,1,1,0,0,0,1,1,0,0,0,0,1,0,1,1,0,1,1,1,1,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,0,1,1,0,0,1,1,0,1,0,0,0,1,0,1,1,1,1,0,0,1,1,0,0,0,1,0,1,1,1,0,0,1,0,0,1,0,1,0,1,0,0,1,0,0,1,0,0,1,0,0,1,1,0,0,0,1,1,1,1,0,0,0,1,1,0,1,1,1,1,1,1,0,1,1,0,1,1,1,0,0,0,1,0,1,0,1,0,1,1,0,1,1,0,1,0,0,0,1,1,0,0,0,0,1,1,1,0,0,0,0,1,0,1,0,1,1,1,0,1,1,0,0,1,1,0,1,0,1,0,1,0,1,0,1,0,0,1,1,0,0,0,1,1,0,0,1,0,1,0,1,0,0,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,0,1,1,0,1,1,1,0,0,1,1,0,1,0,0,0,0,1,1,0,1,1,1,1,1,0,0,1,0,1,0,1,0,0,0,0,1,0,1,0,0,0,1,0,0,1,1,0,1,0,1,1,0,1,1,0,0,1,0,0,1,0,1,0,1,0,1,1,0,1,0,0,1,1,0,0,0,0,0,1,1,1,1,1,0,1,1,0,1,0,1,0,1,1,1,0,1,0,1,0,0,1,1,0,1,1,0,0,1,1,1,1,1,0,1,0,0,0,1,1,0,0,0,0,0,1,1,0,0,1,1,1,1,0,1,0,0,0,0,1,1,1,1,0,0,0,0,0,1,0,1,0,0,1,1,1,0,0,1,0,0,0,1,0,0,0,0,0,1,0,0,1,0,1,1,0,1,1,1,0,1,1,0,0,0,1,0,0,1,0,0,1,0,0,0,0,1,1,0,1,1,0,0,0,0,1,0,1,1,1,0,1,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,1,0,1,1,1,0,1,0,0,1,0,0,1,1,0,1,0,0,0,0,1,0,1,0,1,1,1,0,1,1,0,1,0,1,1,1,0,0,1,0,0,0,0,1,1,1,1,0,1,1,1,0,1,0,1,1,0,0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,0,0,0,1,1,0,0,1,1,0,1,0,0,1,0,0,0,1,1,1,0,1,1,1,0,1,0,1,1,0,0,1,1,0,1,0,0,0,1,1,0,0,1,1,1,0,0,0,0,0,0,1,0,1,0,1,1,1,1,1,1,0,1,1,0,1,0,0,1,1,0,0,1,0,0,1,0,1,1,1,0,0,1,1,1,0,0,1,0,0,1,0,0,1,1,0,1,0,1,0,0,0,1,0,0,0,0,1,0,1,1,0,0,0,1,1,0,1,0,0,1,1,1,1,0,0,1,0,0,0,1,0,1,1,0,1,0,0,0,1,0,1,0,1,1,1,1,1,0,1,0,0,1,1,1,0,0,0,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,1,0,1,1,0,1,0,0,0,1,1,0,1,1,0,0,1,0,1,1,1,1,0,0,1,0,0,0,0,1,1,1,1,1,1,0,0,1,0,1,0,0,1,0,0,0,0,0,0,1,0,0,1,1,1,0,1,1,1,1,0,1,0,0,1,0,1,1,1,0,0,0,1,0,1,1,0,1,0,0,0,0,1,0,1,0,1,1,0,0,0,0,0,1,0,1,1,1,1,1,0,1,1,0,0,0,1,0,0,1,];
var gg_b = "1757476801/";

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
