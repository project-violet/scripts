// This source code is a part of Project Violet.
// Copyright (C) 2021. violet-team. Licensed under the Apache-2.0 License.
//
// Script Name: hitomi_get_image_list.js
// Input:  $id     [int] - Hitomi.la Article Id
// Output: $result [Map] - Image List, Thumbnail List

function create_download_url(id) {
  return "https://ltn.hitomi.la/galleries/" + id + ".js";
}

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
case 1384:
case 649:
case 192:
case 2409:
case 1308:
case 273:
case 3893:
case 2874:
case 300:
case 1262:
case 3421:
case 453:
case 650:
case 742:
case 2944:
case 3963:
case 1828:
case 195:
case 1742:
case 1239:
case 3728:
case 3753:
case 609:
case 1109:
case 732:
case 132:
case 3086:
case 4082:
case 5:
case 2536:
case 3662:
case 2519:
case 1652:
case 2601:
case 839:
case 1151:
case 3377:
case 855:
case 2207:
case 2078:
case 2689:
case 826:
case 3656:
case 452:
case 926:
case 1676:
case 1094:
case 3152:
case 3121:
case 3258:
case 1138:
case 2268:
case 1230:
case 1590:
case 571:
case 2778:
case 1896:
case 1101:
case 3647:
case 1796:
case 2908:
case 2800:
case 4036:
case 3292:
case 1409:
case 3896:
case 888:
case 2990:
case 2198:
case 1454:
case 928:
case 1241:
case 2737:
case 3074:
case 3192:
case 2578:
case 1721:
case 3995:
case 3708:
case 3555:
case 110:
case 3673:
case 3019:
case 2521:
case 744:
case 1536:
case 2458:
case 2882:
case 1039:
case 1732:
case 2628:
case 2226:
case 2498:
case 2478:
case 30:
case 1922:
case 539:
case 2444:
case 2555:
case 1438:
case 1982:
case 1808:
case 867:
case 1997:
case 1949:
case 1073:
case 2682:
case 1270:
case 563:
case 639:
case 4033:
case 250:
case 3243:
case 2905:
case 4034:
case 3413:
case 278:
case 2388:
case 3608:
case 1373:
case 3776:
case 727:
case 3835:
case 336:
case 1693:
case 2862:
case 2199:
case 3774:
case 952:
case 219:
case 1475:
case 306:
case 3987:
case 1774:
case 69:
case 970:
case 3695:
case 1014:
case 3567:
case 2160:
case 913:
case 561:
case 990:
case 2528:
case 4087:
case 3810:
case 2139:
case 3178:
case 574:
case 945:
case 2783:
case 3355:
case 239:
case 1444:
case 490:
case 588:
case 2236:
case 3894:
case 1449:
case 1015:
case 1994:
case 3613:
case 3445:
case 1004:
case 2038:
case 2847:
case 1197:
case 2428:
case 1697:
case 2652:
case 393:
case 2188:
case 1775:
case 440:
case 2938:
case 3742:
case 1272:
case 1919:
case 3059:
case 912:
case 3164:
case 735:
case 1450:
case 2264:
case 2427:
case 2587:
case 942:
case 2048:
case 2273:
case 4060:
case 576:
case 654:
case 412:
case 256:
case 1432:
case 1691:
case 72:
case 3851:
case 1344:
case 2977:
case 3590:
case 450:
case 1784:
case 4089:
case 1905:
case 2037:
case 3296:
case 65:
case 1642:
case 1723:
case 3830:
case 895:
case 2596:
case 492:
case 3644:
case 2052:
case 1818:
case 532:
case 3645:
case 3435:
case 2371:
case 3974:
case 2980:
case 690:
case 230:
case 1379:
case 4054:
case 1945:
case 648:
case 3113:
case 2468:
case 1080:
case 569:
case 3332:
case 2256:
case 3322:
case 1597:
case 3507:
case 3785:
case 724:
case 4026:
case 2318:
case 2942:
case 2866:
case 3911:
case 1324:
case 243:
case 2304:
case 3002:
case 4072:
case 1522:
case 97:
case 3412:
case 2969:
case 3879:
case 63:
case 378:
case 36:
case 1861:
case 2154:
case 3176:
case 2957:
case 3740:
case 854:
case 3887:
case 534:
case 1031:
case 2617:
case 1233:
case 950:
case 3165:
case 1150:
case 3319:
case 2768:
case 3083:
case 543:
case 2878:
case 261:
case 3186:
case 3393:
case 2910:
case 1160:
case 2668:
case 745:
case 4010:
case 2931:
case 3528:
case 1102:
case 308:
case 281:
case 3502:
case 81:
case 116:
case 1729:
case 3891:
case 2993:
case 1078:
case 1488:
case 1417:
case 2816:
case 4016:
case 2187:
case 2486:
case 2279:
case 1037:
case 1006:
case 614:
case 3408:
case 1244:
case 3394:
case 3101:
case 2691:
case 504:
case 4020:
case 1530:
case 2376:
case 846:
case 805:
case 1716:
case 3276:
case 897:
case 4032:
case 2812:
case 2657:
case 3467:
case 2067:
case 3358:
case 1627:
case 1890:
case 1806:
case 1240:
case 3429:
case 841:
case 580:
case 1198:
case 1581:
case 3040:
case 3908:
case 3861:
case 1277:
case 1322:
case 3386:
case 2416:
case 2912:
case 694:
case 998:
case 2109:
case 948:
case 1009:
case 678:
case 431:
case 3747:
case 3817:
case 581:
case 1249:
case 2480:
case 2:
case 1668:
case 914:
case 2028:
case 3602:
case 1900:
case 3109:
case 500:
case 2146:
case 2445:
case 3111:
case 246:
case 3650:
case 4004:
case 2479:
case 1835:
case 2385:
case 3128:
case 373:
case 1364:
case 2324:
case 3261:
case 2638:
case 168:
case 1663:
case 3900:
case 1866:
case 3142:
case 3441:
case 1557:
case 799:
case 1315:
case 803:
case 2710:
case 403:
case 169:
case 3279:
case 301:
case 386:
case 3687:
case 967:
case 1883:
case 1385:
case 3639:
case 1046:
case 2906:
case 3910:
case 4062:
case 1182:
case 1210:
case 3548:
case 319:
case 2057:
case 3897:
case 99:
case 1773:
case 643:
case 1854:
case 767:
case 2195:
case 2827:
case 204:
case 1413:
case 1632:
case 641:
case 2649:
case 3323:
case 3735:
case 2381:
case 2050:
case 1311:
case 2641:
case 902:
case 1713:
case 642:
case 3108:
case 3374:
case 3538:
case 1540:
case 242:
case 3463:
case 1848:
case 46:
case 3405:
case 2351:
case 2961:
case 2019:
case 3315:
case 590:
case 2597:
case 2618:
case 949:
case 2979:
case 1093:
case 2973:
case 748:
case 1456:
case 1252:
case 1504:
case 3737:
case 658:
case 3559:
case 845:
case 3273:
case 374:
case 2538:
case 2118:
case 2475:
case 3869:
case 3168:
case 3898:
case 3739:
case 85:
case 1751:
case 1647:
case 3055:
case 284:
case 3373:
case 1559:
case 2841:
case 3487:
case 252:
case 121:
case 1268:
case 4052:
case 3707:
case 2424:
case 2708:
case 507:
case 3932:
case 1213:
case 734:
case 3964:
case 1427:
case 3573:
case 488:
case 1694:
case 3333:
case 3670:
case 4091:
case 2107:
case 1380:
case 264:
case 2397:
case 381:
case 1131:
case 1469:
case 2595:
case 2951:
case 652:
case 586:
case 1931:
case 154:
case 3488:
case 1927:
case 3534:
case 2246:
case 3468:
case 3878:
case 3072:
case 933:
case 3680:
case 2934:
case 3154:
case 2991:
case 316:
case 2642:
case 1002:
case 753:
case 1564:
case 1227:
case 2197:
case 2550:
case 1821:
case 1791:
case 1947:
case 2039:
case 215:
case 3517:
case 772:
case 1321:
case 541:
case 3506:
case 4013:
case 1205:
case 3825:
case 2227:
case 2606:
case 3655:
case 3313:
case 3948:
case 3022:
case 3203:
case 1761:
case 759:
case 100:
case 257:
case 3814:
case 1043:
case 1119:
case 1243:
case 1141:
case 2046:
case 1511:
case 3700:
case 285:
case 2588:
case 2542:
case 2066:
case 3202:
case 289:
case 479:
case 1884:
case 3065:
case 3360:
case 1709:
case 1282:
case 3454:
case 1653:
case 747:
case 2155:
case 851:
case 3888:
case 2490:
case 2379:
case 1724:
case 3993:
case 2817:
case 2367:
case 1704:
case 2814:
case 309:
case 1804:
case 1914:
case 2715:
case 1018:
case 526:
case 585:
case 806:
case 1986:
case 1370:
case 755:
case 1285:
case 1588:
case 829:
case 1369:
case 498:
case 1472:
case 3712:
case 3016:
case 3242:
case 1377:
case 274:
case 3949:
case 720:
case 656:
case 3213:
case 3985:
case 3031:
case 836:
case 3354:
case 2326:
case 1099:
case 2849:
case 162:
case 2417:
case 680:
case 241:
case 1719:
case 1944:
case 1503:
case 2209:
case 270:
case 4006:
case 1392:
case 244:
case 2179:
case 4029:
case 3150:
case 985:
case 653:
case 2773:
case 2260:
case 717:
case 3287:
case 1036:
case 24:
case 2718:
case 1520:
case 1512:
case 628:
case 2593:
case 2569:
case 1342:
case 939:
case 2204:
case 122:
case 3583:
case 404:
case 2214:
case 657:
case 1028:
case 537:
case 26:
case 3147:
case 372:
case 3629:
case 536:
case 3476:
case 2296:
case 3066:
case 935:
case 2509:
case 2327:
case 644:
case 793:
case 2788:
case 1217:
case 726:
case 323:
case 2352:
case 1622:
case 2947:
case 3626:
case 3638:
case 304:
case 467:
case 682:
case 1783:
case 3598:
case 3453:
case 2205:
case 1371:
case 1412:
case 1637:
case 1074:
case 2608:
case 3819:
case 549:
case 2755:
case 3895:
case 633:
case 1320:
case 1276:
case 3230:
case 193:
case 3922:
case 2225:
case 3097:
case 1978:
case 4030:
case 2896:
case 1029:
case 2964:
case 3751:
case 3970:
case 3485:
case 2203:
case 3269:
case 1677:
case 3510:
case 651:
case 3343:
case 334:
case 3529:
case 3478:
case 1926:
case 8:
case 3334:
case 830:
case 1201:
case 1059:
case 1313:
case 1110:
case 3812:
case 3442:
case 3431:
case 3551:
case 640:
case 3430:
case 207:
case 1933:
case 4048:
case 3671:
case 248:
case 1877:
case 2899:
case 4025:
case 2526:
case 1357:
case 3905:
case 1737:
case 3703:
case 4083:
case 1490:
case 2338:
case 2579:
case 3141:
case 638:
case 3480:
case 3080:
case 955:
case 1664:
case 857:
case 599:
case 214:
case 439:
case 1388:
case 740:
case 3509:
case 3977:
case 1238:
case 197:
case 4067:
case 2168:
case 2360:
case 1911:
case 432:
case 333:
case 2683:
case 2320:
case 3028:
case 2247:
case 112:
case 828:
case 3416:
case 3865:
case 662:
case 954:
case 2380:
case 2953:
case 365:
case 1555:
case 2589:
case 31:
case 3125:
case 340:
case 64:
case 2289:
case 1992:
case 1743:
case 2704:
case 2936:
case 2007:
case 465:
case 2515:
case 906:
case 1242:
case 2310:
case 458:
case 3398:
case 3625:
case 1570:
case 3736:
case 863:
case 1115:
case 1065:
case 3350:
case 3249:
case 2133:
case 3962:
case 2092:
case 3389:
case 156:
case 1788:
case 3678:
case 3997:
case 840:
case 2732:
case 3791:
case 3209:
case 2894:
case 924:
case 294:
case 1550:
case 3000:
case 2865:
case 76:
case 3967:
case 3953:
case 1794:
case 401:
case 2309:
case 3271:
case 3624:
case 827:
case 2252:
case 918:
case 911:
case 2483:
case 2893:
case 2147:
case 3827:
case 2530:
case 2422:
case 3223:
case 3843:
case 900:
case 1764:
case 1232:
case 1541:
case 1779:
case 3009:
case 1618:
case 3232:
case 1495:
case 1612:
case 1910:
case 982:
case 1351:
case 2889:
case 1349:
case 868:
case 1990:
case 53:
case 2759:
case 751:
case 1941:
case 3364:
case 3187:
case 838:
case 2088:
case 786:
case 3591:
case 1430:
case 4070:
case 111:
case 2784:
case 293:
case 583:
case 1005:
case 3916:
case 573:
case 4002:
case 700:
case 1128:
case 1660:
case 1088:
case 2340:
case 2918:
case 2644:
case 394:
case 1177:
case 482:
case 602:
case 1068:
case 1010:
case 1295:
case 869:
case 2313:
case 1996:
case 1904:
case 1641:
case 3969:
case 865:
case 1044:
case 67:
case 413:
case 417:
case 2328:
case 787:
case 3832:
case 3397:
case 2049:
case 56:
case 173:
case 850:
case 2169:
case 1667:
case 3451:
case 3844:
case 379:
case 2103:
case 3:
case 1935:
case 290:
case 1462:
case 1319:
case 2880:
case 2767:
case 833:
case 780:
case 2622:
case 3259:
case 2741:
case 2020:
case 1853:
case 1625:
case 1686:
case 3523:
case 1575:
case 1893:
case 548:
case 1326:
case 899:
case 1220:
case 428:
case 3586:
case 1103:
case 2972:
case 604:
case 1844:
case 2358:
case 2142:
case 2514:
case 1481:
case 1636:
case 1509:
case 2131:
case 937:
case 3359:
case 917:
case 93:
case 425:
case 2466:
case 276:
case 2747:
case 3617:
case 297:
case 1617:
case 2053:
case 875:
case 280:
case 1391:
case 2598:
case 3850:
case 4039:
case 1267:
case 2010:
case 1393:
case 3448:
case 2911:
case 2995:
case 2503:
case 797:
case 1374:
case 2724:
case 2935:
case 3087:
case 3705:
case 2434:
case 3262:
case 2746:
case 3867:
case 525:
case 3077:
case 2885:
case 328:
case 2582:
case 191:
case 3289:
case 1882:
case 2114:
case 2400:
case 2017:
case 2633:
case 1202:
case 198:
case 2591:
case 2245:
case 3194:
case 1510:
case 1070:
case 1551:
case 1785:
case 1513:
case 1265:
case 1345:
case 1923:
case 125:
case 2433:
case 683:
case 3563:
case 1863:
case 4035:
case 2529:
case 2413:
case 2779:
case 2325:
case 3433:
case 1812:
case 3446:
case 1531:
case 1275:
case 3047:
case 3631:
case 1234:
case 3996:
case 2505:
case 1061:
case 291:
case 487:
case 2838:
case 3769:
case 1747:
case 3035:
case 3255:
case 2922:
case 2166:
case 2948:
case 620:
case 2456:
case 2034:
case 1483:
case 965:
case 3146:
case 2750:
case 2553:
case 2185:
case 1452:
case 2347:
case 3131:
case 1264:
case 3329:
case 3304:
case 1881:
case 2045:
case 3627:
case 2835:
case 1508:
case 1279:
case 2106:
case 978:
case 575:
case 40:
case 757:
case 2345:
case 1993:
case 3331:
case 1421:
case 2210:
case 3318:
case 733:
case 418:
case 1127:
case 3306:
case 3420:
case 3482:
case 3107:
case 3061:
case 2009:
case 2743:
case 860:
case 3901:
case 511:
case 2925:
case 2026:
case 3116:
case 2897:
case 2462:
case 1251:
case 4022:
case 82:
case 3092:
case 473:
case 3401:
case 1645:
case 3902:
case 3581:
case 3909:
case 565:
case 824:
case 3170:
case 2902:
case 3636:
case 523:
case 2452:
case 1402:
case 3342:
case 635:
case 2669:
case 2027:
case 1146:
case 2656:
case 1266:
case 1041:
case 3196:
case 3999:
case 920:
case 2557:
case 3110:
case 2136:
case 1845:
case 3301:
case 45:
case 233:
case 2314:
case 3233:
case 2394:
case 220:
case 3767:
case 1060:
case 3499:
case 3056:
case 1841:
case 377:
case 2831:
case 2757:
case 2570:
case 1339:
case 3260:
case 792:
case 842:
case 2423:
case 3546:
case 2405:
case 1256:
case 636:
case 351:
case 688:
case 2011:
case 446:
case 471:
case 1643:
case 2474:
case 1247:
case 3981:
case 3701:
case 2178:
case 3552:
case 3180:
case 629:
case 92:
case 2463:
case 3144:
case 4063:
case 2072:
case 3197:
case 4040:
case 3805:
case 1155:
case 1097:
case 601:
case 554:
case 2319:
case 1168:
case 685:
case 327:
case 3789:
case 3890:
case 3288:
case 2278:
case 1734:
case 1920:
case 1889:
case 2276:
case 1836:
case 1013:
case 3119:
case 3928:
case 147:
case 3754:
case 2096:
case 1158:
case 3461:
case 2807:
case 3640:
case 1684:
case 1610:
case 808:
case 3201:
case 1293:
case 1659:
case 2777:
case 556:
case 3126:
case 3330:
case 3321:
case 2707:
case 3727:
case 669:
case 2006:
case 2837:
case 986:
case 90:
case 3764:
case 1461:
case 502:
case 981:
case 3632:
case 3533:
case 2467:
case 1104:
case 2322:
case 282:
case 3763:
case 2194:
case 689:
case 1813:
case 506:
case 3721:
case 3730:
case 984:
case 2576:
case 882:
case 2666:
case 3058:
case 738:
case 1855:
case 3060:
case 342:
case 3787:
case 2141:
case 3008:
case 2181:
case 3341:
case 802:
case 531:
case 1166:
case 1534:
case 3411:
case 2124:
case 3579:
case 3576:
case 2794:
case 3849:
case 2137:
case 185:
case 3618:
case 196:
case 406:
case 2556:
case 3597:
case 3654:
case 228:
case 2051:
case 3923:
case 2507:
case 1278:
case 958:
case 155:
case 2277:
case 1979:
case 434:
case 2660:
case 3335:
case 3803:
case 2846:
case 1690:
case 1226:
case 1870:
case 259:
case 1286:
case 1187:
case 2629:
case 4078:
case 3676:
case 84:
case 2631:
case 2253:
case 3240:
case 3148:
case 3587:
case 2437:
case 3562:
case 3838:
case 3211:
case 3017:
case 4047:
case 1440:
case 3595:
case 3191:
case 1633:
case 1390:
case 1171:
case 2173:
case 3611:
case 1190:
case 1376:
case 1502:
case 3415:
case 760:
case 2581:
case 3387:
case 2771:
case 1142:
case 135:
case 1195:
case 2548:
case 1116:
case 1172:
case 927:
case 3574:
case 1355:
case 2421:
case 23:
case 3193:
case 3345:
case 1204:
case 2881:
case 862:
case 801:
case 1086:
case 1124:
case 2121:
case 2108:
case 804:
case 1770:
case 1478:
case 3943:
case 883:
case 2126:
case 2808:
case 95:
case 1245:
case 555:
case 2716:
case 1134:
case 2775:
case 210:
case 4068:
case 2966:
case 2568:
case 2851:
case 266:
case 341:
case 2992:
case 2492:
case 2627:
case 968:
case 3940:
case 3084:
case 3540:
case 1584:
case 1735:
case 444:
case 858:
case 194:
case 931:
case 29:
case 1170:
case 4088:
case 3029:
case 2218:
case 70:
case 1024:
case 3584:
case 941:
case 89:
case 3722:
case 2219:
case 354:
case 3172:
case 1193:
case 1017:
case 4066:
case 758:
case 2073:
case 663:
case 963:
case 2470:
case 2063:
case 3876:
case 1961:
case 2271:
case 2674:
case 2859:
case 3933:
case 375:
case 3307:
case 2307:
case 3972:
case 1681:
case 1346:
case 655:
case 2211:
case 2700:
case 2731:
case 3277:
case 754:
case 124:
case 1789:
case 1674:
case 3033:
case 1695:
case 3842:
case 2100:
case 415:
case 472:
case 1501:
case 3104:
case 1629:
case 2647:
case 3123:
case 330:
case 2439:
case 2748:
case 3558:
case 1479:
case 1067:
case 1366:
case 3014:
case 519:
case 852:
case 2390:
case 2184:
case 1012:
case 509:
case 130:
case 659:
case 3114:
case 224:
case 1196:
case 1185:
case 3659:
case 3081:
case 1362:
case 1436:
case 1165:
case 1566:
case 2954:
case 2450:
case 901:
case 2907:
case 722:
case 358:
case 713:
case 884:
case 923:
case 2820:
case 2664:
case 2887:
case 1688:
case 1868:
case 2858:
case 129:
case 3369:
case 2523:
case 874:
case 10:
case 2232:
case 2676:
case 781:
case 3399:
case 1117:
case 54:
case 1980:
case 831:
case 3672:
case 667:
case 2317:
case 22:
case 1231:
case 445:
case 1930:
case 55:
case 798:
case 2789:
case 126:
case 2739:
case 268:
case 908:
case 4090:
case 98:
case 437:
case 3988:
case 3518:
case 4077:
case 1145:
case 956:
case 960:
case 3532:
case 2999:
case 3926:
case 1917:
case 3524:
case 1708:
case 73:
case 3357:
case 2923:
case 397:
case 326:
case 1255:
case 3714:
case 718:
case 2535:
case 1589:
case 1199:
case 610:
case 249:
case 1176:
case 3856:
case 3465:
case 3278:
case 3244:
case 3241:
case 3690:
case 2760:
case 979:
case 1126:
case 1840:
case 298:
case 1908:
case 4095:
case 108:
case 1162:
case 4053:
case 3419:
case 1416:
case 621:
case 2222:
case 1902:
case 625:
case 3745:
case 3921:
case 1448:
case 4074:
case 3224:
case 2655:
case 794:
case 2294:
case 2998:
case 820:
case 989:
case 368:
case 943:
case 631:
case 3508:
case 1768:
case 3370:
case 3381:
case 145:
case 3816:
case 2175:
case 1777:
case 2461:
case 1159:
case 2717:
case 1528:
case 3018:
case 3648:
case 4056:
case 3884:
case 2083:
case 2022:
case 2577:
case 1325:
case 411:
case 597:
case 512:
case 2412:
case 1595:
case 166:
case 3783:
case 1606:
case 1823:
case 2396:
case 2223:
case 3782:
case 1802:
case 15:
case 2149:
case 484:
case 568:
case 1576:
case 774:
case 2776:
case 1077:
case 699:
case 2723:
case 1754:
case 160:
case 2735:
case 3235:
case 1811:
case 880:
case 3615:
case 3305:
case 2234:
case 1219:
case 3635:
case 3885:
case 1714:
case 3163:
case 2375:
case 1003:
case 3607:
case 1263:
case 2418:
case 1654:
case 3757:
case 42:
case 161:
case 1781:
case 1149:
case 1050:
case 3522:
case 1132:
case 2518:
case 3694:
case 1556:
case 665:
case 1368:
case 3353:
case 2774:
case 3395:
case 2196:
case 371:
case 3046:
case 217:
case 2525:
case 1347:
case 3496:
case 400:
case 1281:
case 4019:
case 1333:
case 3291:
case 664:
case 3129:
case 3483:
case 3425:
case 1261:
case 1228:
case 1547:
case 596:
case 4085:
case 716:
case 3535:
case 2389:
case 1107:
case 3064:
case 2334:
case 3372:
case 2441:
case 3809:
case 2749:
case 823:
case 1670:
case 109:
case 3752:
case 4075:
case 1963:
case 2165:
case 3363:
case 2594:
case 422:
case 623:
case 672:
case 2920:
case 2244:
case 1702:
case 1626:
case 3250:
case 2015:
case 894:
case 3841:
case 2772:
case 1797:
case 893:
case 1033:
case 3167:
case 2551:
case 1183:
case 2033:
case 1431:
case 2457:
case 2861:
case 2275:
case 3347:
case 527:
case 1543:
case 3486:
case 2420:
case 3266:
case 2765:
case 1527:
case 410:
case 3379:
case 2138:
case 2170:
case 77:
case 2295:
case 1692:
case 1741:
case 137:
case 1365:
case 353:
case 3376:
case 383:
case 975:
case 3069:
case 3802:
case 3668:
case 1470:
case 953:
case 788:
case 25:
case 3254:
case 1860:
case 3501:
case 3765:
case 1739:
case 66:
case 3099:
case 591:
case 818:
case 3492:
case 819:
case 2781:
case 481:
case 1746:
case 60:
case 2047:
case 2599:
case 1200:
case 2064:
case 80:
case 464:
case 3773:
case 3417:
case 1834:
case 3699:
case 1738:
case 800:
case 3500:
case 750:
case 2982:
case 3328:
case 3117:
case 2637:
case 3325:
case 550:
case 1467:
case 3004:
case 925:
case 859:
case 3320:
case 2172:
case 709:
case 4001:
case 1055:
case 1148:
case 2099:
case 530:
case 438:
case 3588:
case 102:
case 1480:
case 2558:
case 3601:
case 1406:
case 48:
case 222:
case 466:
case 3622:
case 2158:
case 671:
case 1932:
case 3236:
case 2787:
case 3161:
case 936:
case 3067:
case 2677:
case 2189:
case 3781:
case 459:
case 1749:
case 331:
case 1181:
case 2395:
case 1726:
case 1587:
case 959:
case 2806:
case 2580:
case 2040:
case 2634:
case 2632:
case 3344:
case 58:
case 3469:
case 3149:
case 3048:
case 3543:
case 932:
case 3217:
case 2705:
case 2240:
case 1446:
case 3096:
case 3956:
case 3941:
case 674:
case 1:
case 1878:
case 2119:
case 343:
case 265:
case 3227:
case 1314:
case 150:
case 3525:
case 1284:
case 1895:
case 3275:
case 3871:
case 254:
case 3991:
case 2985:
case 3382:
case 647:
case 1396:
case 1538:
case 1822:
case 2068:
case 731:
case 1157:
case 785:
case 2414:
case 2117:
case 299:
case 4043:
case 4031:
case 1515:
case 1782:
case 3284:
case 1310:
case 2370:
case 3760:
case 2104:
case 106:
case 1318:
case 1798:
case 634:
case 2646:
case 3231:
case 2329:
case 3643:
case 2527:
case 4071:
case 1316:
case 3750:
case 513:
case 3185:
case 2060:
case 1563:
case 2867:
case 3795:
case 1913:
case 2745:
case 1999:
case 3473:
case 2128:
case 2482:
case 607:
case 3808:
case 2575:
case 3718:
case 405:
case 344:
case 2815:
case 1336:
case 201:
case 120:
case 1673:
case 3938:
case 988:
case 3780:
case 2102:
case 148:
case 3181:
case 1725:
case 2836:
case 1924:
case 743:
case 190:
case 2996:
case 2077:
case 2513:
case 2738:
case 3880:
case 2152:
case 3741:
case 2350:
case 1957:
case 2625:
case 3293:
case 2182:
case 1948:
case 3078:
case 218:
case 1707:
case 1306:
case 57:
case 1382:
case 2761:
case 2853:
case 630:
case 2291:
case 3504:
case 2323:
case 2549:
case 2306:
case 2200:
case 2248:
case 1363:
case 814:
case 1759:
case 187:
case 2544:
case 2419:
case 2159:
case 2315:
case 873:
case 364:
case 2680:
case 457:
case 3030:
case 3691:
case 317:
case 1426:
case 1819:
case 909:
case 345:
case 3339:
case 1857:
case 679:
case 1330:
case 3775:
case 3215:
case 870:
case 1891:
case 1722:
case 2857:
case 3226:
case 255:
case 3406:
case 2156:
case 2769:
case 3043:
case 878:
case 3883:
case 3138:
case 1839:
case 3427:
case 311:
case 3630:
case 3338:
case 2504:
case 1852:
case 3106:
case 3882:
case 3068:
case 4009:
case 1661:
case 1846:
case 2955:
case 3978:
case 2500:
case 44:
case 3935:
case 3904:
case 765:
case 3184:
case 1473:
case 3957:
case 2122:
case 3366:
case 3137:
case 2286:
case 1638:
case 1337:
case 2129:
case 773:
case 183:
case 2635:
case 922:
case 3571:
case 181:
case 1418:
case 178:
case 3380:
case 3484:
case 4003:
case 681:
case 2111:
case 703:
case 1129:
case 2393:
case 1274:
case 1301:
case 1971:
case 2270:
case 603:
case 1720:
case 2213:
case 2574:
case 2368:
case 1047:
case 2785:
case 547:
case 3384:
case 1283:
case 321:
case 3169:
case 2740:
case 2726:
case 2684:
case 1831:
case 3309:
case 1493:
case 3761:
case 1906:
case 2454:
case 2559:
case 1793:
case 3927:
case 4058:
case 3062:
case 783:
case 3667:
case 3173:
case 421:
case 1062:
case 1579:
case 533:
case 1640:
case 2699:
case 37:
case 994:
case 2023:
case 2378:
case 1601:
case 3005:
case 2719:
case 934:
case 3189:
case 646:
case 1988:
case 2630:
case 1650:
case 2374:
case 485:
case 2190:
case 1728:
case 3337:
case 3020:
case 879:
case 2994:
case 3726:
case 347:
case 2354:
case 153:
case 3285:
case 4076:
case 3375:
case 964:
case 2472:
case 3541:
case 1771:
case 424:
case 2941:
case 1586:
case 3811:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1665266401/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,0,0,1,0,1,1,0,1,0,1,1,1,1,0,1,1,1,1,1,1,0,0,0,0,0,1,1,0,0,0,1,1,1,1,0,0,1,1,0,1,0,1,0,0,0,1,0,1,1,1,1,0,0,0,0,0,0,1,0,1,1,0,0,0,0,0,1,0,0,1,0,0,1,1,0,0,1,1,0,0,0,1,0,0,1,1,1,0,0,1,0,0,1,0,1,0,0,0,0,1,0,1,1,1,0,1,0,0,0,0,0,1,1,1,0,1,1,1,0,0,0,1,0,0,0,1,1,0,0,1,0,1,1,0,1,0,1,1,1,1,1,1,1,0,1,0,0,1,0,1,1,0,0,0,0,1,1,1,0,0,0,1,1,1,0,1,0,0,1,1,1,0,1,1,1,1,0,1,1,0,1,0,1,0,1,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,1,0,0,1,0,0,0,0,1,0,1,0,1,1,1,0,1,0,1,1,0,1,1,1,1,1,0,1,0,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,0,1,0,1,0,1,1,0,0,0,1,0,1,0,1,1,0,0,1,0,1,0,1,0,0,0,1,0,0,1,1,1,0,0,0,1,0,0,1,1,0,0,0,0,0,1,1,0,1,0,1,0,0,1,0,1,1,1,1,0,0,1,0,1,0,1,0,1,1,0,0,0,1,0,0,1,0,0,1,0,1,1,1,0,0,0,0,0,0,1,0,1,1,1,0,1,0,0,1,1,1,0,1,1,1,1,1,0,0,1,1,0,1,1,0,0,0,0,0,1,0,0,0,1,0,1,0,1,1,0,1,1,1,1,1,1,0,0,1,1,0,1,1,0,0,1,0,0,0,0,1,1,1,0,0,0,0,1,0,1,0,0,1,1,0,0,1,0,0,1,1,0,1,1,0,0,1,0,1,1,0,0,0,0,1,1,1,0,0,0,1,1,1,0,1,0,0,1,1,1,0,0,0,1,1,1,1,0,0,0,0,1,1,1,0,0,0,1,1,1,1,1,0,1,0,0,1,0,0,1,0,0,1,0,1,0,1,1,1,1,1,0,1,0,1,0,1,0,1,0,0,1,0,1,0,0,0,1,1,1,1,1,0,1,1,1,0,1,0,0,0,1,1,0,0,0,0,0,1,0,0,1,0,1,0,1,0,1,1,1,0,0,0,0,1,1,1,0,0,0,1,1,1,1,0,1,0,1,0,1,1,0,0,1,0,1,0,0,0,0,1,1,1,0,0,1,0,1,0,0,1,0,1,0,0,1,1,1,1,0,0,1,0,1,0,0,0,0,1,1,0,1,0,0,1,1,1,0,1,1,1,1,1,0,0,1,0,1,0,1,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,1,0,1,0,0,1,0,1,1,1,0,0,0,0,0,0,1,0,1,1,0,0,0,1,1,1,0,1,1,1,1,0,0,1,1,0,1,1,1,1,1,0,1,1,1,0,1,1,0,0,0,1,0,1,0,1,0,1,0,0,1,1,1,0,0,0,0,0,1,1,0,1,0,1,0,0,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,0,0,1,1,1,1,0,1,0,1,1,1,1,0,0,0,1,1,1,1,1,0,0,1,0,1,0,0,0,0,1,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,1,1,0,1,1,1,0,0,0,1,1,0,0,1,0,0,0,0,0,0,1,0,1,1,0,1,0,0,0,0,0,1,1,0,0,1,1,1,0,0,0,1,0,0,1,0,0,0,0,1,0,0,1,0,1,0,0,0,0,1,1,0,0,0,1,1,0,0,0,1,0,0,0,1,1,1,0,1,1,1,1,0,0,0,1,0,1,0,0,0,0,1,1,1,0,1,0,0,1,0,0,0,0,1,1,0,0,1,0,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,1,1,0,0,0,1,0,0,0,0,0,1,0,0,0,1,1,0,0,0,1,0,0,1,0,1,1,1,1,0,1,1,0,0,1,0,0,1,0,0,0,1,0,0,0,1,1,1,0,1,1,1,0,1,1,1,0,0,0,0,0,1,1,0,0,1,0,0,0,0,1,0,0,1,1,1,1,1,0,1,1,1,0,0,1,0,1,0,1,1,0,0,1,0,1,0,1,0,0,1,0,0,1,1,0,1,1,1,1,0,1,1,1,0,0,0,0,1,1,0,1,0,0,1,0,1,1,0,0,1,1,0,0,1,0,1,1,1,1,1,0,1,0,1,1,1,1,0,0,1,1,0,1,0,1,0,0,0,0,1,1,0,1,0,0,1,1,1,1,0,0,0,1,0,1,1,1,1,0,1,0,0,0,0,1,0,0,1,0,1,1,1,0,1,1,0,0,1,1,0,0,1,0,0,0,0,1,1,1,0,1,0,0,0,0,1,0,1,1,0,0,1,0,1,0,0,0,1,1,1,0,0,1,1,1,0,0,0,1,0,1,0,1,1,0,1,1,0,1,0,0,0,0,0,0,0,0,1,0,0,1,1,1,1,0,1,1,0,1,1,1,0,1,0,0,1,1,1,1,1,0,0,0,1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,1,1,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,1,1,1,0,1,0,1,1,1,1,1,0,1,1,1,1,0,1,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,1,1,0,1,1,0,1,1,0,0,1,0,1,1,0,1,0,0,0,0,1,0,1,0,1,1,1,0,1,0,1,1,1,1,0,0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,1,0,0,1,0,1,0,0,1,1,0,1,0,0,0,0,1,1,0,1,1,1,1,1,0,1,1,1,0,1,1,0,1,1,0,0,1,1,0,0,0,1,1,0,1,1,1,1,0,0,1,1,0,0,0,1,1,1,0,1,0,1,0,1,1,1,0,1,0,1,0,0,0,1,0,1,0,1,0,1,1,1,1,0,0,1,1,1,1,0,1,0,0,1,0,0,1,0,1,1,0,0,0,0,1,0,1,1,1,1,0,1,0,1,1,0,1,0,1,1,1,1,1,0,0,0,0,1,1,1,0,0,0,0,0,0,1,0,1,1,1,1,0,1,0,1,1,1,1,0,0,1,0,0,1,1,0,1,0,1,0,1,0,0,1,0,1,1,1,0,1,1,0,0,1,1,1,0,0,0,1,0,1,1,1,0,0,1,0,1,1,1,0,1,1,1,1,0,0,1,1,0,1,0,1,1,0,1,0,0,0,0,0,1,1,1,1,0,1,0,1,1,1,0,1,1,1,1,0,1,1,1,0,1,0,1,1,1,1,0,0,1,1,1,0,1,1,0,0,0,1,0,1,1,0,0,1,1,0,0,0,1,0,0,0,0,1,0,1,0,1,1,0,1,0,0,0,1,1,1,1,0,0,0,1,0,0,1,1,0,0,1,0,1,1,0,0,1,0,0,1,1,1,0,1,1,0,1,0,1,0,1,0,0,0,0,0,0,1,0,1,1,1,1,0,1,0,1,1,0,0,0,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,1,1,0,1,0,0,1,0,0,0,1,0,0,0,1,1,0,0,1,0,1,0,1,1,0,1,1,1,1,0,1,0,1,1,0,1,1,1,0,1,0,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0,1,1,0,0,1,0,1,0,0,1,0,0,0,1,1,1,0,1,0,1,0,1,0,1,1,0,0,0,1,1,1,1,0,0,1,0,0,0,1,1,1,1,0,1,1,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,0,1,1,1,0,0,0,0,1,0,1,1,0,0,1,0,1,1,0,1,0,1,0,1,1,1,1,1,1,0,0,1,1,0,0,0,0,1,1,1,1,0,0,0,1,0,1,0,0,1,1,1,0,1,0,1,0,0,0,1,0,1,0,0,1,0,0,1,1,0,1,0,0,1,0,0,0,1,0,0,1,1,0,0,0,0,1,0,1,1,1,1,1,0,1,1,0,0,1,0,0,0,1,1,1,1,1,1,1,0,1,1,1,0,1,0,1,1,1,1,1,1,1,0,1,1,1,1,1,1,0,0,0,1,0,1,1,1,0,1,0,1,0,1,0,0,0,1,0,0,1,0,1,1,1,1,1,1,0,0,1,0,0,0,1,1,1,0,1,0,1,0,0,1,0,0,1,1,0,0,0,1,1,1,1,0,0,1,1,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,1,1,0,1,1,0,0,1,0,0,0,1,1,1,0,0,1,1,1,0,0,1,1,1,1,0,1,1,1,1,0,1,1,1,0,1,1,1,0,1,1,0,0,1,0,0,0,1,0,0,0,0,1,0,1,1,0,1,1,0,0,0,1,0,0,1,0,1,0,1,0,0,1,0,1,0,1,1,0,0,0,0,1,0,0,1,1,1,0,0,1,0,1,1,0,1,0,0,0,1,0,0,0,1,1,1,1,0,0,1,0,0,0,1,0,0,1,0,1,1,0,0,1,0,0,1,0,0,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,1,0,0,0,1,0,1,0,0,0,1,0,0,1,1,1,0,0,1,1,0,0,1,0,0,0,1,1,1,1,0,1,0,1,0,1,1,1,0,1,1,1,0,0,0,0,0,1,1,1,0,0,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,0,0,1,0,1,0,0,0,0,0,1,1,1,1,1,1,0,1,1,0,1,0,1,1,0,0,0,1,1,1,1,1,1,1,0,1,0,0,1,0,0,1,1,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,1,0,1,1,1,0,1,0,1,1,1,1,0,1,0,1,1,0,0,0,1,0,1,1,1,0,1,0,1,1,1,1,1,1,0,0,1,0,0,1,1,0,0,0,1,0,0,0,0,1,1,1,0,1,1,0,0,0,1,1,0,0,0,0,0,1,1,0,1,1,1,1,0,1,1,1,0,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,1,1,0,0,1,1,0,1,0,1,0,1,1,0,0,1,1,1,1,0,1,0,1,0,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,0,1,0,1,0,0,1,1,0,0,0,1,0,0,1,1,0,1,1,1,0,1,0,1,1,1,1,1,0,1,0,1,1,0,0,0,1,0,1,0,1,1,1,0,0,0,1,1,0,0,1,0,1,0,1,0,0,0,0,0,0,1,1,1,1,0,0,1,0,1,1,1,0,1,0,1,1,1,0,0,0,0,1,0,1,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,1,1,1,1,0,1,0,1,1,1,1,1,1,1,1,0,0,1,1,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,0,1,0,1,0,0,1,0,1,1,0,1,1,0,0,0,1,1,0,1,1,1,0,1,0,1,0,0,1,1,1,1,0,1,0,0,1,1,0,1,0,0,0,1,1,1,1,0,1,0,1,1,1,1,1,1,1,0,0,1,1,1,0,0,1,0,0,1,0,1,1,1,1,0,0,0,0,0,1,1,1,0,0,1,0,1,1,1,1,0,0,1,1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,1,1,1,0,1,0,1,0,0,0,1,1,1,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,1,1,1,1,0,1,1,1,1,1,0,1,1,1,1,1,0,0,0,1,1,1,0,1,0,0,0,0,1,1,0,1,1,1,1,1,1,0,1,1,1,0,1,1,1,0,0,0,0,1,1,0,1,1,1,1,0,0,1,0,1,0,1,0,1,1,1,0,0,0,1,0,0,1,1,0,0,0,1,1,1,1,1,1,0,1,1,1,0,1,0,0,0,1,1,0,1,0,1,0,1,1,1,0,0,1,0,0,1,0,1,1,0,1,1,0,0,0,0,1,0,0,0,1,1,1,1,1,0,1,0,1,0,0,1,0,1,1,1,1,1,0,1,1,0,0,0,1,0,1,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,0,1,0,1,1,1,0,1,1,0,1,0,1,1,0,1,1,0,0,1,1,1,0,1,0,0,1,0,1,1,0,1,1,1,1,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,0,1,1,0,0,1,1,1,1,0,1,0,0,0,0,0,1,0,1,1,1,1,1,0,0,0,0,1,0,1,0,1,1,1,1,0,1,1,0,1,1,0,0,0,1,1,1,1,1,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,1,0,1,1,0,0,1,0,0,1,0,0,1,0,0,1,1,1,1,0,1,1,1,0,0,1,0,1,0,1,1,0,1,0,0,0,0,0,0,1,0,0,1,0,0,1,0,1,0,1,0,1,0,0,1,0,0,1,0,1,1,1,1,1,0,0,1,1,0,0,1,0,1,0,0,0,0,0,1,0,1,0,1,1,1,1,1,1,0,1,0,0,0,1,0,0,0,0,1,0,0,1,1,0,1,0,1,0,0,1,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0,1,1,1,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,0,0,1,0,0,1,1,0,0,0,0,1,0,0,1,1,1,0,0,0,0,0,1,1,1,1,0,0,1,1,1,0,0,1,1,0,0,0,0,0,1,1,1,0,1,1,0,1,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,1,0,0,0,1,0,0,0,1,1,0,1,1,1,1,0,1,1,0,0,0,0,1,0,1,1,1,0,1,0,1,1,0,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,1,1,0,1,1,0,0,0,1,0,0,0,0,1,1,0,0,1,0,1,1,0,0,1,0,0,0,0,0,0,1,0,0,0,0,1,0,1,0,0,1,0,1,1,1,0,0,0,1,0,0,0,1,0,1,1,1,0,0,1,0,1,1,0,0,0,1,0,0,0,1,0,0,0,1,1,1,0,1,0,1,0,0,0,1,0,1,0,1,1,1,1,1,0,0,1,1,0,0,1,0,1,1,0,1,0,0,1,1,1,1,1,1,0,1,0,1,0,1,0,0,0,1,1,1,0,1,1,0,1,0,1,0,1,0,0,0,0,0,0,0,1,1,1,0,1,1,1,0,1,1,0,0,0,0,1,0,1,0,0,0,0,0,1,1,1,1,1,1,0,0,1,1,1,0,0,0,0,1,1,0,0,1,1,0,0,0,0,1,1,0,1,0,0,1,0,1,1,0,1,0,1,1,0,0,1,1,0,1,1,0,0,1,1,0,0,1,1,1,0,1,1,1,0,1,0,0,1,0,1,1,0,1,0,1,0,0,1,0,0,0,1,0,0,1,1,1,0,1,0,0,1,1,0,0,1,1,1,1,0,0,1,1,0,1,0,1,0,1,0,0,1,1,1,0,1,0,0,0,0,1,0,0,0,0,1,1,0,0,1,0,0,0,1,1,0,0,0,1,0,0,1,0,1,1,1,0,0,0,1,1,0,1,1,0,1,1,1,1,0,0,1,0,0,0,0,1,1,0,1,0,1,0,1,1,1,1,1,1,0,1,1,0,0,1,1,0,0,1,1,1,0,0,0,1,0,1,0,1,0,0,1,1,1,0,1,0,1,1,1,0,1,1,0,0,1,1,1,0,0,0,1,0,1,1,1,1,0,0,0,1,0,0,0,0,1,1,0,1,0,1,1,0,0,0,0,0,1,1,0,1,1,0,0,1,0,0,0,1,0,1,0,1,1,1,0,0,0,0,1,1,1,0,0,0,0,1,0,1,0,1,0,1,0,1,1,1,0,1,1,1,1,1,1,0,0,1,0,1,1,0,0,0,0,0,1,0,1,0,0,1,0,1,1,1,1,1,0,1,0,1,1,0,1,0,1,1,0,1,1,0,1,1,0,0,0,0,1,1,1,1,0,0,0,1,1,1,1,0,1,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1,1,1,1,0,1,0,0,0,1,0,0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,1,0,0,1,1,0,0,0,0,1,1,1,1,0,1,1,1,1,0,0,0,1,1,0,0,0,1,1,1,0,0,1,0,1,1,0,1,0,0,1,0,1,1,1,1,0,0,1,1,1,0,1,1,0,0,1,1,1,1,0,0,0,1,1,0,1,0,0,1,0,1,0,1,1,0,0,1,1,0,1,1,1,0,1,0,0,1,1,0,1,0,1,0,0,0,1,0,1,0,0,0,0,1,0,1,1,0,0,1,1,0,1,1,0,1,1,0,0,1,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,1,1,1,0,0,1,1,1,0,0,0,1,0,1,0,1,0,1,0,0,1,1,0,0,0,1,0,0,0,1,0,0,0,0,0,1,1,1,0,0,1,0,1,0,0,0,0,0,1,1,1,0,];
var gg_b = "1665266401/";

function hitomi_get_image_list() {
  files = galleryinfo["files"];
  // function test(id, files) {
  number_of_frontends = 3;
  subdomain = "a";
  btresult = [];
  stresult = [];
  result = [];
  for (var rr of files) {
    hash = rr["hash"];
    postfix = hash.substr(hash.length - 3);
    subdomainx = subdomain;
    if (rr["haswebp"] == 0 || rr["haswebp"] == null) subdomainx = "b";
    x = parseInt(postfix[2] + postfix[0] + postfix[1], 16);
    if (!isNaN(x)) {
      if (x < 4096) subdomainx = String.fromCharCode(97 + gg_m[x]);
      else subdomainx = String.fromCharCode(97 + 0);
    }
    if (rr["haswebp"] == 0 || rr["haswebp"] == null) {
      result.push(
        `https://${subdomainx}b.hitomi.la/images/${gg_b + gg.s(hash)}/${hash}.${
          rr["name"].split(".").slice(-1)[0]
        }`
      );
    } else if (hash == "")
      result.push(`https://${subdomainx}a.hitomi.la/webp/${rr["name"]}.webp`);
    else if (hash.length < 3)
      result.push(`https://${subdomainx}a.hitomi.la/webp/${hash}.webp`);
    else {
      result.push(
        `https://${subdomainx}a.hitomi.la/webp/${
            gg.b + gg.s(hash)
        }/${hash}.webp`
      );
    }
    if (rr["haswebp"] == 1)
    {
      btresult.push(
        `https://tn.hitomi.la/webpbigtn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.webp`
      );
      stresult.push(
        `https://${subdomainx}tn.hitomi.la/webpsmalltn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.webp`
      );
    }
    // else if (rr["hasavif"] == 1)
    // {
    //   btresult.push(
    //     `https://tn.hitomi.la/avifbigtn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.avif`
    //   );
    //   stresult.push(
    //     `https://${subdomainx}tn.hitomi.la/avifsmallbigtn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.avif`
    //   );
    // }
    else 
    {
      btresult.push(
        `https://tn.hitomi.la/bigtn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.jpg`
      );
      stresult.push(
        `https://${subdomainx}tn.hitomi.la/smalltn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.jpg`
      );
    }
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
