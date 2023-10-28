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
var o = 0;
switch (g) {
case 1296:
case 1687:
case 3711:
case 2709:
case 2789:
case 3757:
case 747:
case 3870:
case 282:
case 3560:
case 570:
case 3111:
case 3765:
case 1069:
case 396:
case 3106:
case 2318:
case 3246:
case 3232:
case 1598:
case 1093:
case 1475:
case 3477:
case 2052:
case 3853:
case 3319:
case 2793:
case 1384:
case 3886:
case 2309:
case 2142:
case 1017:
case 2582:
case 3354:
case 1199:
case 1184:
case 568:
case 141:
case 2958:
case 2686:
case 1951:
case 3258:
case 3349:
case 1993:
case 1661:
case 2676:
case 1110:
case 2308:
case 1713:
case 661:
case 3471:
case 688:
case 2288:
case 289:
case 1700:
case 2945:
case 3243:
case 1274:
case 1488:
case 198:
case 2923:
case 981:
case 996:
case 2526:
case 1230:
case 2102:
case 2953:
case 2178:
case 1733:
case 3943:
case 2838:
case 3533:
case 3101:
case 3037:
case 353:
case 20:
case 2715:
case 2467:
case 2682:
case 3727:
case 1414:
case 2868:
case 1270:
case 585:
case 1511:
case 3805:
case 3443:
case 2992:
case 739:
case 2104:
case 3606:
case 2876:
case 614:
case 2627:
case 637:
case 4019:
case 2331:
case 1228:
case 1943:
case 3618:
case 1075:
case 165:
case 1478:
case 772:
case 2431:
case 17:
case 3065:
case 1838:
case 39:
case 3142:
case 1178:
case 3921:
case 3538:
case 1860:
case 2663:
case 347:
case 126:
case 4080:
case 416:
case 1025:
case 3060:
case 893:
case 1477:
case 3242:
case 4029:
case 2673:
case 268:
case 2397:
case 2532:
case 1609:
case 1481:
case 3372:
case 2228:
case 779:
case 2407:
case 1309:
case 2218:
case 628:
case 792:
case 1136:
case 593:
case 1240:
case 1432:
case 42:
case 2426:
case 2724:
case 2059:
case 1698:
case 1173:
case 1539:
case 392:
case 2481:
case 883:
case 3326:
case 2507:
case 2021:
case 2768:
case 1175:
case 3110:
case 80:
case 4005:
case 3277:
case 2283:
case 1479:
case 2623:
case 1755:
case 276:
case 1869:
case 3238:
case 2380:
case 1102:
case 3580:
case 4079:
case 1176:
case 2429:
case 1560:
case 3217:
case 2031:
case 1117:
case 2852:
case 3681:
case 23:
case 257:
case 1367:
case 595:
case 412:
case 2552:
case 1112:
case 245:
case 3674:
case 4006:
case 750:
case 1667:
case 2370:
case 3526:
case 2018:
case 2631:
case 1884:
case 3630:
case 1983:
case 2841:
case 1440:
case 333:
case 3103:
case 2362:
case 722:
case 2902:
case 3105:
case 1724:
case 1656:
case 1720:
case 1205:
case 270:
case 2666:
case 3992:
case 534:
case 3390:
case 3669:
case 959:
case 2931:
case 1307:
case 2620:
case 2004:
case 965:
case 3401:
case 3113:
case 3745:
case 2197:
case 203:
case 1682:
case 2834:
case 2566:
case 3104:
case 674:
case 2251:
case 336:
case 3655:
case 3215:
case 1040:
case 2095:
case 1164:
case 1785:
case 2881:
case 1013:
case 3099:
case 2179:
case 2904:
case 3335:
case 3629:
case 1857:
case 2070:
case 1711:
case 3861:
case 2689:
case 3788:
case 1665:
case 1133:
case 3300:
case 1268:
case 214:
case 1581:
case 2233:
case 539:
case 3776:
case 3623:
case 1896:
case 2454:
case 748:
case 940:
case 1553:
case 1290:
case 2860:
case 3782:
case 1490:
case 678:
case 3779:
case 3121:
case 3865:
case 2284:
case 3605:
case 964:
case 4012:
case 295:
case 2258:
case 2807:
case 1618:
case 2135:
case 2136:
case 1156:
case 2166:
case 3263:
case 3185:
case 827:
case 2932:
case 3575:
case 1269:
case 332:
case 3440:
case 2137:
case 717:
case 1483:
case 3875:
case 934:
case 3328:
case 2109:
case 974:
case 1201:
case 769:
case 3809:
case 1806:
case 1446:
case 1845:
case 545:
case 1362:
case 2882:
case 1935:
case 1469:
case 825:
case 919:
case 3675:
case 1288:
case 3152:
case 738:
case 2991:
case 1312:
case 566:
case 500:
case 2875:
case 2223:
case 2929:
case 4042:
case 1024:
case 848:
case 3857:
case 1146:
case 3651:
case 315:
case 3502:
case 2444:
case 543:
case 3644:
case 3534:
case 110:
case 3789:
case 993:
case 3040:
case 724:
case 2791:
case 1244:
case 364:
case 721:
case 1699:
case 1963:
case 2880:
case 361:
case 2302:
case 1998:
case 18:
case 3068:
case 673:
case 2090:
case 104:
case 217:
case 659:
case 2082:
case 3990:
case 2215:
case 3654:
case 1548:
case 903:
case 1345:
case 2842:
case 3906:
case 2975:
case 3900:
case 3965:
case 1293:
case 2127:
case 1771:
case 2393:
case 2163:
case 2653:
case 3680:
case 3153:
case 1359:
case 2520:
case 2226:
case 1819:
case 2473:
case 3836:
case 3412:
case 1140:
case 477:
case 3866:
case 727:
case 1394:
case 3282:
case 3656:
case 3362:
case 1827:
case 549:
case 1907:
case 3183:
case 766:
case 3278:
case 2344:
case 2617:
case 1493:
case 2320:
case 3078:
case 2591:
case 1333:
case 707:
case 1165:
case 2:
case 2655:
case 1356:
case 1341:
case 2146:
case 3271:
case 3280:
case 197:
case 360:
case 645:
case 108:
case 3481:
case 3604:
case 3374:
case 1875:
case 1128:
case 2368:
case 1903:
case 2054:
case 762:
case 2536:
case 344:
case 2585:
case 1095:
case 483:
case 1363:
case 2534:
case 784:
case 1010:
case 189:
case 2401:
case 3643:
case 1795:
case 492:
case 3819:
case 3932:
case 2342:
case 1151:
case 3494:
case 2984:
case 154:
case 1231:
case 4026:
case 1835:
case 338:
case 3467:
case 3259:
case 3086:
case 1579:
case 765:
case 2971:
case 3285:
case 1046:
case 2933:
case 579:
case 3229:
case 790:
case 281:
case 1180:
case 2314:
case 22:
case 2563:
case 2211:
case 1789:
case 3252:
case 2773:
case 355:
case 4058:
case 1239:
case 1659:
case 2176:
case 3168:
case 3303:
case 3345:
case 804:
case 823:
case 3373:
case 1086:
case 3736:
case 3337:
case 1953:
case 3151:
case 1563:
case 2521:
case 1597:
case 2352:
case 1109:
case 718:
case 1043:
case 173:
case 2363:
case 2538:
case 1255:
case 3546:
case 2456:
case 1275:
case 3922:
case 869:
case 1905:
case 445:
case 3367:
case 870:
case 831:
case 723:
case 1397:
case 1895:
case 1577:
case 3062:
case 2542:
case 3156:
case 3617:
case 3960:
case 85:
case 2968:
case 694:
case 2978:
case 1740:
case 3405:
case 3045:
case 3454:
case 3518:
case 3545:
case 641:
case 3196:
case 1787:
case 2071:
case 2488:
case 3074:
case 2295:
case 2911:
case 1407:
case 138:
case 3624:
case 317:
case 3439:
case 2565:
case 751:
case 1107:
case 32:
case 3402:
case 3253:
case 1756:
case 93:
case 1727:
case 59:
case 1085:
case 709:
case 969:
case 55:
case 2437:
case 3888:
case 82:
case 2809:
case 2554:
case 1487:
case 2420:
case 1602:
case 345:
case 2767:
case 3535:
case 1332:
case 781:
case 3894:
case 1467:
case 2162:
case 842:
case 2438:
case 1832:
case 3716:
case 2684:
case 3452:
case 2814:
case 905:
case 2658:
case 2642:
case 690:
case 1476:
case 1825:
case 1829:
case 1956:
case 1360:
case 2365:
case 1955:
case 3102:
case 1251:
case 3664:
case 288:
case 179:
case 3348:
case 273:
case 2836:
case 532:
case 1757:
case 2341:
case 796:
case 988:
case 1642:
case 3766:
case 2734:
case 846:
case 410:
case 3774:
case 726:
case 207:
case 3386:
case 697:
case 3998:
case 3275:
case 1710:
case 627:
case 1462:
case 607:
case 575:
case 1214:
case 2096:
case 1879:
case 2296:
case 3214:
case 1558:
case 666:
case 552:
case 1910:
case 1696:
case 3158:
case 1285:
case 362:
case 3165:
case 2247:
case 3958:
case 3459:
case 3883:
case 764:
case 3949:
case 1536:
case 213:
case 2608:
case 2551:
case 882:
case 2632:
case 3868:
case 2377:
case 3671:
case 2489:
case 3325:
case 3399:
case 2959:
case 2862:
case 1060:
case 1038:
case 3603:
case 596:
case 2944:
case 702:
case 381:
case 2912:
case 1415:
case 2577:
case 3833:
case 698:
case 3683:
case 2088:
case 4036:
case 3810:
case 69:
case 1867:
case 1203:
case 2187:
case 2069:
case 890:
case 3021:
case 2718:
case 3554:
case 1257:
case 1970:
case 828:
case 3698:
case 927:
case 1305:
case 520:
case 2232:
case 1499:
case 3323:
case 2996:
case 1568:
case 1233:
case 3465:
case 3860:
case 3054:
case 3378:
case 2083:
case 1408:
case 94:
case 1690:
case 2621:
case 310:
case 3723:
case 3587:
case 1607:
case 2398:
case 3571:
case 1442:
case 3069:
case 2478:
case 1760:
case 3312:
case 3299:
case 3265:
case 3544:
case 2208:
case 3052:
case 4024:
case 1401:
case 3316:
case 921:
case 1573:
case 3370:
case 1743:
case 2175:
case 1078:
case 2562:
case 1662:
case 693:
case 1660:
case 3080:
case 2927:
case 2079:
case 3120:
case 506:
case 1041:
case 88:
case 1053:
case 1941:
case 686:
case 3693:
case 3964:
case 1218:
case 1925:
case 1883:
case 2878:
case 478:
case 1018:
case 2479:
case 4085:
case 472:
case 1709:
case 840:
case 2495:
case 125:
case 3166:
case 142:
case 1937:
case 1631:
case 1352:
case 3682:
case 1850:
case 3204:
case 2712:
case 2891:
case 155:
case 1193:
case 342:
case 2839:
case 475:
case 2124:
case 1670:
case 1791:
case 758:
case 2810:
case 3421:
case 1349:
case 2355:
case 2844:
case 2383:
case 1928:
case 3150:
case 1734:
case 2788:
case 815:
case 2182:
case 209:
case 464:
case 530:
case 139:
case 3305:
case 3804:
case 3842:
case 156:
case 3578:
case 3442:
case 740:
case 4052:
case 1633:
case 4018:
case 2828:
case 2075:
case 3309:
case 1191:
case 297:
case 1604:
case 3226:
case 3646:
case 2498:
case 1217:
case 1549:
case 4092:
case 3198:
case 2396:
case 1377:
case 1431:
case 1817:
case 4035:
case 1601:
case 151:
case 4073:
case 3177:
case 2756:
case 3536:
case 3635:
case 783:
case 3141:
case 2491:
case 752:
case 2196:
case 96:
case 324:
case 2616:
case 1527:
case 38:
case 1839:
case 1030:
case 254:
case 1797:
case 2797:
case 2504:
case 202:
case 835:
case 2939:
case 1135:
case 2150:
case 2979:
case 1586:
case 3073:
case 443:
case 3728:
case 960:
case 1426:
case 3180:
case 1968:
case 53:
case 1424:
case 3730:
case 3220:
case 1784:
case 1004:
case 605:
case 238:
case 1792:
case 3397:
case 3222:
case 2172:
case 995:
case 939:
case 223:
case 2957:
case 2421:
case 2499:
case 1855:
case 2986:
case 3837:
case 1195:
case 2637:
case 3981:
case 2670:
case 761:
case 244:
case 4071:
case 3770:
case 3759:
case 1880:
case 1014:
case 3823:
case 3075:
case 908:
case 2306:
case 2417:
case 1537:
case 606:
case 113:
case 1179:
case 4008:
case 3972:
case 118:
case 2191:
case 2947:
case 2014:
case 3898:
case 710:
case 3030:
case 2335:
case 3281:
case 1987:
case 164:
case 716:
case 3665:
case 616:
case 1351:
case 3864:
case 2527:
case 3333:
case 2155:
case 2529:
case 2831:
case 3449:
case 3505:
case 4046:
case 1648:
case 630:
case 1530:
case 3564:
case 1934:
case 1392:
case 3131:
case 1900:
case 1347:
case 1556:
case 2877:
case 3257:
case 2926:
case 2511:
case 3552:
case 1139:
case 2795:
case 3161:
case 2030:
case 513:
case 683:
case 3540:
case 2657:
case 1541:
case 3286:
case 880:
case 2419:
case 1973:
case 3521:
case 1062:
case 1695:
case 1798:
case 1474:
case 2221:
case 2717:
case 879:
case 1196:
case 2462:
case 87:
case 1059:
case 3734:
case 1433:
case 1302:
case 3632:
case 2435:
case 3369:
case 1523:
case 2345:
case 3648:
case 972:
case 816:
case 422:
case 3429:
case 515:
case 262:
case 2039:
case 471:
case 220:
case 1751:
case 2436:
case 2920:
case 1057:
case 839:
case 2892:
case 3225:
case 1856:
case 2439:
case 991:
case 3379:
case 2008:
case 1222:
case 1395:
case 382:
case 2780:
case 2381:
case 484:
case 4069:
case 734:
case 1691:
case 817:
case 573:
case 3858:
case 3272:
case 140:
case 1284:
case 3530:
case 1049:
case 1350:
case 4020:
case 335:
case 374:
case 1704:
case 1008:
case 3893:
case 2893:
case 895:
case 1542:
case 2386:
case 2210:
case 3747:
case 2545:
case 3781:
case 2442:
case 256:
case 3438:
case 2798:
case 1445:
case 3918:
case 1777:
case 3598:
case 2743:
case 283:
case 851:
case 4017:
case 2086:
case 1219:
case 3813:
case 3310:
case 1406:
case 2915:
case 2580:
case 236:
case 2605:
case 3767:
case 3920:
case 597:
case 2356:
case 3939:
case 997:
case 306:
case 65:
case 2036:
case 58:
case 704:
case 231:
case 3807:
case 2469:
case 84:
case 3573:
case 2264:
case 44:
case 1881:
case 1952:
case 424:
case 3503:
case 2747:
case 1177:
case 3490:
case 625:
case 730:
case 691:
case 1745:
case 753:
case 3592:
case 1202:
case 232:
case 1550:
case 4038:
case 3588:
case 1655:
case 2496:
case 3719:
case 241:
case 2494:
case 872:
case 2672:
case 3171:
case 2385:
case 967:
case 12:
case 788:
case 1849:
case 3926:
case 1974:
case 3195:
case 3352:
case 3149:
case 3556:
case 2290:
case 2440:
case 3591:
case 161:
case 3462:
case 133:
case 3634:
case 2550:
case 192:
case 3566:
case 3508:
case 878:
case 1657:
case 1304:
case 49:
case 1748:
case 537:
case 611:
case 447:
case 1519:
case 394:
case 3825:
case 1259:
case 1186:
case 1076:
case 1716:
case 1834:
case 1697:
case 2060:
case 2650:
case 3585:
case 4055:
case 2376:
case 369:
case 4047:
case 3988:
case 3218:
case 1318:
case 4066:
case 1137:
case 643:
case 2098:
case 2961:
case 36:
case 1930:
case 264:
case 2325:
case 2405:
case 3012:
case 731:
case 191:
case 1456:
case 3700:
case 1685:
case 2906:
case 1545:
case 1167:
case 3307:
case 314:
case 2606:
case 708:
case 977:
case 4054:
case 201:
case 962:
case 2041:
case 1172:
case 1098:
case 4053:
case 4063:
case 1790:
case 2700:
case 3909:
case 600:
case 2845:
case 1846:
case 2660:
case 983:
case 642:
case 2607:
case 1111:
case 3520:
case 3869:
case 326:
case 3980:
case 917:
case 4082:
case 3137:
case 626:
case 2262:
case 3562:
case 1500:
case 793:
case 2422:
case 3139:
case 3093:
case 2425:
case 2016:
case 1036:
case 159:
case 1529:
case 1592:
case 3404:
case 157:
case 987:
case 2818:
case 3419:
case 2382:
case 448:
case 3593:
case 2967:
case 3456:
case 2007:
case 4041:
case 1739:
case 1287:
case 3208:
case 621:
case 2572:
case 3018:
case 2107:
case 3945:
case 2267:
case 2827:
case 1029:
case 2901:
case 2311:
case 1977:
case 1890:
case 1325:
case 3873:
case 591:
case 2319:
case 2351:
case 2122:
case 2654:
case 2161:
case 1712:
case 1917:
case 3441:
case 2510:
case 3903:
case 3897:
case 2313:
case 1464:
case 2578:
case 1820:
case 3485:
case 2260:
case 3524:
case 3705:
case 1130:
case 4091:
case 1336:
case 1143:
case 598:
case 109:
case 1379:
case 956:
case 646:
case 71:
case 3910:
case 2034:
case 1123:
case 2399:
case 147:
case 1074:
case 948:
case 3576:
case 1583:
case 1159:
case 1610:
case 759:
case 3722:
case 2531:
case 2530:
case 2013:
case 1289:
case 1705:
case 246:
case 263:
case 3095:
case 3143:
case 929:
case 1023:
case 1997:
case 400:
case 1496:
case 2348:
case 2635:
case 562:
case 1799:
case 2822:
case 1893:
case 3380:
case 132:
case 1982:
case 1524:
case 3339:
case 1051:
case 2910:
case 514:
case 2415:
case 1599:
case 3453:
case 2675:
case 1405:
case 2732:
case 1672:
case 1564:
case 1096:
case 499:
case 1836:
case 136:
case 1673:
case 2129:
case 2287:
case 3245:
case 3829:
case 1187:
case 402:
case 1317:
case 1521:
case 1638:
case 2156:
case 858:
case 1400:
case 2114:
case 51:
case 2132:
case 844:
case 3205:
case 2329:
case 1885:
case 1403:
case 1692:
case 3269:
case 1131:
case 1534:
case 2279:
case 3255:
case 1190:
case 592:
case 2269:
case 2492:
case 377:
case 2757:
case 3715:
case 624:
case 2976:
case 1528:
case 1127:
case 4084:
case 4039:
case 887:
case 4049:
case 2024:
case 1775:
case 2384:
case 3614:
case 3455:
case 3116:
case 576:
case 1063:
case 0:
case 2905:
case 1158:
case 3602:
case 2261:
case 2229:
case 1950:
case 3803:
case 3942:
case 1722:
case 3744:
case 3933:
case 4028:
case 1585:
case 168:
case 1256:
case 1803:
case 909:
case 1915:
case 196:
case 2056:
case 2487:
case 3586:
case 680:
case 3902:
case 2985:
case 1966:
case 1327:
case 1899:
case 1142:
case 2403:
case 572:
case 3908:
case 1366:
case 1048:
case 26:
case 57:
case 444:
case 951:
case 1569:
case 3523:
case 1429:
case 1430:
case 703:
case 875:
case 868:
case 3213:
case 2192:
case 3308:
case 509:
case 2002:
case 1054:
case 1080:
case 235:
case 1122:
case 1948:
case 3048:
case 577:
case 2138:
case 3206:
case 2255:
case 2321:
case 1958:
case 2340:
case 67:
case 2464:
case 826:
case 1416:
case 2141:
case 1468:
case 341:
case 1067:
case 2502:
case 2909:
case 1413:
case 2259:
case 3097:
case 3026:
case 3167:
case 2339:
case 933:
case 371:
case 3792:
case 957:
case 2015:
case 2231:
case 992:
case 4057:
case 2214:
case 3889:
case 3340:
case 1814:
case 631:
case 574:
case 2449:
case 1266:
case 2596:
case 2706:
case 3036:
case 3621:
case 1588:
case 1939:
case 3600:
case 3775:
case 1701:
case 1162:
case 454:
case 3342:
case 2659:
case 3221:
case 227:
case 795:
case 2245:
case 2589:
case 1582:
case 535:
case 1297:
case 679:
case 1892:
case 2779:
case 1991:
case 1463:
case 1279:
case 3146:
case 1090:
case 975:
case 953:
case 638:
case 423:
case 442:
case 1842:
case 1965:
case 2940:
case 2058:
case 115:
case 3751:
case 1878:
case 1246:
case 899:
case 3610:
case 586:
case 4048:
case 172:
case 3913:
case 949:
case 2922:
case 3356:
case 3522:
case 551:
case 1876:
case 3996:
case 3608:
case 3094:
case 2556:
case 1979:
case 395:
case 782:
case 1605:
case 2149:
case 1765:
case 340:
case 195:
case 3460:
case 428:
case 3795:
case 153:
case 3148:
case 3509:
case 3637:
case 1590:
case 3840:
case 3855:
case 249:
case 1418:
case 837:
case 2100:
case 425:
case 1931:
case 4011:
case 3513:
case 556:
case 913:
case 1640:
case 3147:
case 2874:
case 128:
case 2164:
case 635:
case 1227:
case 958:
case 1554:
case 485:
case 3843:
case 2017:
case 1339:
case 368:
case 2485:
case 3500:
case 4021:
case 2242:
case 2989:
case 4:
case 37:
case 2133:
case 3350:
case 2305:
case 902:
case 2646:
case 2783:
case 2234:
case 1919:
case 2323:
case 1473:
case 2601:
case 75:
case 2236:
case 3007:
case 2225:
case 2338:
case 2198:
case 3690:
case 3641:
case 1761:
case 672:
case 811:
case 2535:
case 754:
case 2291:
case 3946:
case 3561:
case 3937:
case 50:
case 1854:
case 2310:
case 715:
case 2772:
case 3877:
case 3499:
case 1457:
case 3557:
case 2483:
case 2955:
case 313:
case 1294:
case 3507:
case 3251:
case 2292:
case 1052:
case 4076:
case 1439:
case 3298:
case 2028:
case 2966:
case 1520:
case 787:
case 1077:
case 1626:
case 2820:
case 3247:
case 1744:
case 1518:
case 3085:
case 1042:
case 90:
case 2553:
case 291:
case 7:
case 226:
case 92:
case 1615:
case 134:
case 2293:
case 676:
case 3173:
case 3491:
case 1443:
case 3778:
case 4061:
case 239:
case 941:
case 2705:
case 3985:
case 3863:
case 2049:
case 2443:
case 3320:
case 417:
case 2540:
case 3582:
case 2983:
case 1245:
case 670:
case 4016:
case 468:
case 1622:
case 1:
case 3609:
case 3694:
case 2091:
case 3818:
case 1155:
case 2503:
case 1188:
case 1693:
case 2391:
case 3127:
case 3076:
case 1689:
case 3244:
case 889:
case 2698:
case 2872:
case 2427:
case 3203:
case 1703:
case 2928:
case 3565:
case 1242:
case 1009:
case 2409:
case 501:
case 1643:
case 3376:
case 3735:
case 1236:
case 3880:
case 935:
case 1002:
case 1225:
case 1295:
case 41:
case 3673:
case 618:
case 2445:
case 3136:
case 3193:
case 3685:
case 687:
case 3850:
case 3976:
case 3743:
case 2307:
case 4002:
case 3974:
case 1851:
case 531:
case 2501:
case 319:
case 2739:
case 2664:
case 1105:
case 3388:
case 2537:
case 3821:
case 462:
case 373:
case 3738:
case 603:
case 1538:
case 4001:
case 2544:
case 3434:
case 2126:
case 3331:
case 881:
case 2486:
case 2761:
case 1985:
case 3599:
case 3882:
case 1822:
case 285:
case 2105:
case 441:
case 1503:
case 1848:
case 1749:
case 3931:
case 2742:
case 1507:
case 100:
case 3424:
case 3811:
case 3174:
case 654:
case 3631:
case 1664:
case 2216:
case 3528:
case 242:
case 3001:
case 3301:
case 2865:
case 1315:
case 1995:
case 968:
case 3002:
case 2946:
case 3915:
case 421:
case 1382:
case 401:
case 1821:
case 2113:
case 582:
case 2548:
case 387:
case 1614:
case 2167:
case 3160:
case 3315:
case 1940:
case 2125:
case 1412:
case 1079:
case 320:
case 2528:
case 3227:
case 1669:
case 1580:
case 2379:
case 904:
case 557:
case 3512:
case 1645:
case 2110:
case 1491:
case 1421:
case 2581:
case 2987:
case 102:
case 1393:
case 2168:
case 2446:
case 3796:
case 493:
case 2604:
case 3708:
case 4037:
case 3403:
case 3098:
case 3022:
case 2692:
case 3785:
case 689:
case 2630:
case 884:
case 3531:
case 4093:
case 841:
case 3318:
case 2612:
case 2699:
case 152:
case 1706:
case 194:
case 2830:
case 420:
case 3725:
case 437:
case 2569:
case 1181:
case 2897:
case 4014:
case 3409:
case 3382:
case 2737:
case 886:
case 379:
case 3594:
case 4023:
case 4000:
case 1737:
case 3876:
case 3267:
case 1866:
case 3061:
case 2691:
case 2294:
case 1920:
case 2740:
case 1273:
case 2951:
case 2395:
case 910:
case 473:
case 1515:
case 3050:
case 2271:
case 2993:
case 3276:
case 1386:
case 1402:
case 3697:
case 1959:
case 2026:
case 3233:
case 3659:
case 2170:
case 1625:
case 455:
case 1141:
case 1281:
case 2357:
case 496:
case 838:
case 3999:
case 692:
case 1671:
case 186:
case 248:
case 3749:
case 414:
case 465:
case 1902:
case 1322:
case 885:
case 2045:
case 985:
case 2465:
case 2451:
case 2678:
case 3324:
case 2786:
case 1353:
case 856:
case 3266:
case 2193:
case 3718:
case 3447:
case 3616:
case 3010:
case 3891:
case 871:
case 3662:
case 2690:
case 3314:
case 3191:
case 3777:
case 312:
case 3660:
case 162:
case 3769:
case 293:
case 2590:
case 2400:
case 3563:
case 2243:
case 2358:
case 3510:
case 3625:
case 3948:
case 2916:
case 411:
case 2963:
case 1731:
case 2575:
case 744:
case 1169:
case 2539:
case 1964:
case 3041:
case 536:
case 1681:
case 1732:
case 3820:
case 1754:
case 3483:
case 819:
case 1241:
case 522:
case 1160:
case 1562:
case 873:
case 1071:
case 3304:
case 671:
case 3179:
case 2755:
case 1913:
case 1450:
case 966:
case 588:
case 2249:
case 2121:
case 2189:
case 1816:
case 2702:
case 3845:
case 2117:
case 2930:
case 2346:
case 35:
case 1420:
case 4043:
case 3798:
case 2402:
case 571:
case 266:
case 1933:
case 1262:
case 1887:
case 684:
case 2952:
case 1758:
case 2648:
case 3828:
case 432:
case 124:
case 3934:
case 1509:
case 3737:
case 4032:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1698487201/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,1,0,1,0,0,1,0,0,0,0,1,0,0,0,0,1,1,0,1,0,1,1,0,0,1,0,0,0,0,0,1,0,0,1,1,1,1,1,0,1,1,0,1,0,0,0,0,1,1,1,0,1,0,1,0,1,1,1,0,0,0,0,0,1,0,1,0,1,0,1,0,0,0,1,0,0,0,0,1,0,1,0,1,1,0,1,1,0,1,0,1,1,1,0,1,0,0,0,1,0,1,0,1,0,0,0,1,1,1,0,0,1,0,1,0,0,1,0,0,0,0,0,1,1,1,0,1,0,0,0,1,1,1,0,1,0,1,1,1,1,1,0,0,0,0,1,0,0,0,1,1,1,1,1,1,1,0,1,0,1,1,0,1,1,0,0,1,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,1,0,1,1,0,1,1,1,1,1,0,0,1,1,1,0,0,0,1,0,1,0,0,0,1,1,0,0,1,0,0,1,0,0,1,0,0,1,1,0,0,0,1,1,0,0,1,1,0,1,1,0,1,1,0,1,1,1,0,1,1,0,0,0,0,1,0,1,1,0,0,0,0,1,1,1,0,1,0,1,0,1,0,0,1,0,0,1,0,0,0,0,1,1,1,0,1,0,0,1,1,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,1,1,1,0,1,0,1,1,0,0,0,1,0,1,0,0,0,0,0,1,1,0,1,1,0,1,0,1,1,1,0,1,1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,1,1,1,0,1,0,0,0,1,1,0,1,0,1,1,0,0,1,0,1,0,1,1,0,0,0,0,1,0,0,0,0,1,0,1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,1,1,1,0,1,0,1,1,0,0,1,1,1,1,1,1,0,0,1,0,0,0,1,0,0,0,0,1,0,0,0,1,1,1,1,1,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,0,1,0,1,1,0,0,1,0,0,1,1,1,0,1,0,1,1,0,0,0,0,1,1,1,0,0,0,0,0,0,1,1,0,0,1,0,0,1,1,1,0,0,0,0,1,0,0,1,0,0,0,1,1,1,0,0,0,0,1,0,1,0,0,0,0,0,0,0,1,1,1,0,1,1,1,1,0,1,0,0,0,1,0,1,0,0,0,1,0,1,1,0,0,0,1,1,0,0,0,0,1,0,0,0,1,0,1,0,1,1,1,1,1,1,1,1,0,1,0,0,1,0,0,1,1,0,1,0,0,1,1,1,0,1,1,1,1,0,1,0,0,1,0,1,1,1,0,0,0,1,0,0,1,0,1,0,1,0,0,1,0,0,1,1,1,1,1,0,1,1,0,0,0,1,0,1,1,0,0,1,1,1,0,1,1,0,0,0,0,0,0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0,0,1,1,1,1,1,0,1,0,1,1,1,0,0,1,1,0,1,1,1,1,1,1,1,1,1,0,0,1,1,0,0,0,1,1,1,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,1,1,1,1,0,1,1,0,0,1,1,0,0,1,0,0,0,1,1,1,0,0,0,1,0,0,1,1,0,1,1,1,1,1,0,0,0,1,1,0,1,1,0,1,1,1,0,0,1,0,0,1,0,0,0,0,0,0,1,0,1,1,1,1,0,0,1,1,0,1,0,1,1,0,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1,1,1,0,1,0,0,0,1,0,1,1,1,1,0,0,1,0,0,0,1,0,1,1,1,1,1,1,0,1,0,1,0,1,0,0,1,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,1,0,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,0,1,0,1,0,0,0,1,0,0,1,1,1,1,0,0,1,1,1,0,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,1,1,0,1,0,1,0,0,1,1,1,1,1,0,1,0,1,1,1,1,1,1,0,0,1,0,1,1,0,1,0,0,0,1,0,1,0,1,0,1,1,0,0,1,1,1,0,1,1,1,0,0,0,0,1,0,1,0,0,0,1,1,1,0,0,1,1,0,0,1,1,0,0,0,0,1,1,1,0,0,0,1,1,0,0,0,0,0,1,0,1,0,1,1,1,1,0,0,1,0,1,1,0,1,1,1,1,0,0,1,0,1,1,0,1,1,0,0,0,1,0,1,0,1,0,0,1,1,1,1,1,1,1,0,0,0,0,1,1,0,0,0,1,0,0,1,0,1,1,0,1,0,0,0,1,0,0,1,0,1,0,1,1,1,1,0,0,0,0,1,0,0,0,0,1,1,0,0,0,1,1,0,1,1,0,1,0,1,1,1,0,1,1,1,1,1,0,0,1,0,0,0,0,1,0,0,0,1,1,0,1,1,1,0,1,0,1,1,0,1,0,1,0,0,1,1,0,1,1,1,1,1,1,1,0,0,1,0,1,1,1,0,1,1,0,1,0,1,1,0,0,1,0,1,1,1,0,1,0,0,0,0,0,0,0,0,1,0,0,1,1,1,0,0,1,0,0,1,0,1,1,0,1,1,0,1,0,0,1,0,0,1,1,1,1,0,1,1,1,0,0,0,0,1,0,0,0,1,1,1,0,1,0,0,1,0,0,0,1,0,1,1,1,0,0,1,1,1,0,0,0,1,0,1,0,0,1,1,0,1,1,1,1,0,0,1,1,1,1,1,0,0,0,0,1,0,1,1,0,1,0,1,0,0,1,0,0,1,0,1,1,0,0,0,1,0,0,1,0,1,0,0,0,0,1,1,0,0,1,0,0,1,0,1,0,0,0,1,0,1,0,1,1,1,1,1,0,0,1,0,0,1,1,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,1,0,1,0,0,0,0,0,1,1,1,1,0,1,0,0,1,1,1,1,0,1,1,1,1,0,0,0,1,1,1,1,1,0,1,0,1,1,0,0,1,0,1,0,0,1,1,1,1,1,0,0,0,0,0,1,1,0,1,1,0,1,1,0,0,0,1,0,0,0,0,0,1,1,0,0,0,0,1,1,1,0,0,1,1,1,0,0,0,1,1,1,1,1,1,1,0,1,0,1,0,0,0,1,1,0,1,1,0,1,0,0,1,0,0,1,1,0,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,0,1,1,1,1,0,1,1,0,0,1,1,1,1,0,0,0,1,0,1,1,1,1,0,1,1,0,0,1,0,0,1,1,1,0,0,1,1,0,1,0,1,0,1,0,1,1,1,0,0,0,1,1,0,0,0,1,0,0,0,1,0,1,1,1,1,1,0,1,1,0,1,0,1,0,1,0,0,0,0,1,1,1,0,1,1,0,1,1,0,1,0,1,1,0,0,0,1,1,0,0,1,0,0,0,1,0,0,1,1,0,0,0,0,1,0,1,0,0,0,0,1,0,1,0,1,1,0,1,0,0,1,0,0,0,0,0,0,1,1,1,0,1,1,1,1,0,1,1,0,1,0,1,1,1,1,1,0,0,0,0,0,0,0,1,1,0,0,1,0,1,0,1,1,1,1,1,0,1,1,1,1,1,1,1,0,1,1,1,1,0,0,1,1,1,1,1,0,0,1,0,0,0,1,0,1,0,1,0,0,1,0,0,0,1,1,1,1,0,0,1,0,1,1,0,0,1,1,1,0,0,1,1,0,1,0,0,1,1,1,1,1,0,1,1,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,1,1,0,1,0,1,1,1,1,0,0,1,0,1,1,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,1,1,0,1,1,1,1,0,0,1,0,1,0,1,0,0,1,0,1,1,1,0,1,1,0,0,1,0,0,1,1,0,1,1,1,1,0,0,1,1,1,1,0,0,1,0,0,0,0,0,1,1,0,1,0,0,0,0,0,1,1,0,1,1,1,1,0,1,1,1,0,1,0,0,1,0,1,1,0,1,1,0,0,1,1,0,1,1,0,1,0,1,0,0,1,0,0,1,0,1,0,1,0,1,1,0,0,0,0,1,0,0,1,0,1,1,0,1,1,1,0,1,0,1,1,1,0,1,0,0,0,0,1,0,1,1,1,1,0,1,1,0,1,1,0,0,0,1,1,1,1,0,1,0,1,0,0,1,1,0,0,1,0,1,0,0,1,1,0,1,0,1,0,0,0,1,0,1,0,1,0,1,1,0,0,0,1,0,1,0,0,1,1,0,0,0,0,1,1,1,1,1,1,0,0,1,0,0,1,0,1,0,1,0,1,1,0,0,1,0,1,0,0,1,0,1,0,0,0,1,0,0,0,1,0,0,1,0,1,0,1,0,1,1,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,0,0,0,1,0,0,1,1,0,0,1,0,1,0,1,1,0,0,0,1,1,0,1,0,1,0,1,0,1,1,0,1,0,1,1,0,0,1,1,0,0,1,0,0,0,1,1,0,1,1,1,1,0,1,0,0,1,1,0,1,1,1,1,0,0,1,1,0,0,0,1,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,1,1,0,1,1,1,0,1,0,1,0,0,1,1,0,1,1,0,0,1,0,0,0,0,1,0,1,0,1,1,1,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,1,1,1,0,1,0,0,1,0,1,0,1,1,0,1,1,0,1,1,1,1,0,1,0,0,0,0,0,1,1,0,1,0,1,0,1,0,1,0,0,0,1,0,0,1,1,1,1,1,0,1,0,0,1,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,1,1,0,0,1,1,0,1,1,1,1,1,1,1,0,0,0,0,0,1,0,0,1,1,1,1,1,1,1,0,1,1,0,0,0,1,1,1,1,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,0,1,1,1,1,1,0,1,1,1,0,1,0,0,1,1,0,0,1,1,1,1,0,0,0,1,1,0,1,0,0,1,0,1,0,0,0,0,0,1,1,0,1,1,1,1,1,1,1,1,0,0,0,0,1,0,1,0,1,1,1,1,1,1,1,1,1,0,1,0,1,0,1,0,0,0,0,0,1,0,1,0,1,1,1,1,0,0,1,1,1,0,1,0,1,0,0,0,1,1,1,1,1,1,0,1,1,1,1,1,0,0,1,0,1,0,0,1,0,1,0,0,0,0,0,1,0,1,1,0,1,0,1,0,0,0,1,0,0,0,0,1,1,0,1,0,1,0,1,1,1,1,1,0,1,1,0,1,1,1,0,1,1,0,1,1,1,1,0,0,1,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,0,1,0,1,1,0,0,1,0,1,1,1,1,1,0,1,0,0,0,0,0,1,1,0,1,1,0,0,1,0,0,1,0,0,1,0,1,1,0,1,1,1,0,0,1,0,0,0,1,1,1,0,0,0,0,1,0,0,0,0,1,0,0,1,1,1,1,1,0,0,0,1,0,0,0,1,1,0,0,1,1,0,1,0,0,0,1,0,0,1,1,1,0,0,1,0,1,0,0,0,0,1,0,0,0,1,0,1,0,1,0,0,1,1,1,0,1,1,1,1,0,0,1,1,0,1,0,0,0,1,0,1,1,0,1,1,0,1,0,0,0,1,0,1,0,1,0,0,1,1,1,1,0,0,0,0,0,1,1,1,0,1,0,0,1,1,0,0,1,0,0,1,0,0,1,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,0,1,0,1,1,0,1,1,0,0,0,1,0,0,0,0,0,0,0,1,1,1,0,0,0,1,0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0,1,1,0,0,1,0,0,1,0,1,1,0,1,0,1,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,1,1,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,0,1,1,0,1,1,0,0,1,0,1,0,1,1,0,1,1,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,0,1,0,0,1,0,0,0,1,0,1,1,1,1,1,0,1,1,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,0,0,0,1,1,0,1,1,1,0,0,1,1,1,1,0,0,1,1,0,0,0,1,0,1,1,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,0,0,0,1,1,1,1,0,0,0,1,1,1,0,1,0,1,1,1,0,1,0,1,0,0,1,1,1,0,0,1,0,0,0,1,1,0,1,1,0,0,0,1,1,1,1,1,0,1,0,1,1,1,0,0,1,0,0,0,0,1,1,0,0,0,0,1,0,0,1,0,1,0,0,0,0,0,1,0,0,1,1,0,0,0,1,0,0,0,1,0,0,0,0,0,1,1,0,0,1,1,0,0,0,1,0,0,1,0,1,0,1,0,1,0,0,0,0,0,1,1,1,0,0,1,0,0,1,1,0,0,0,1,1,1,1,0,1,0,1,0,0,0,0,1,1,0,0,0,0,0,0,1,1,1,0,1,1,1,0,1,1,1,1,1,1,0,0,0,1,1,0,1,0,0,1,0,0,0,1,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1,1,0,1,0,1,1,1,0,0,1,1,1,1,1,1,1,1,0,0,1,0,1,0,1,1,0,0,0,1,1,1,1,0,0,1,0,1,1,0,0,1,0,1,1,0,0,1,0,1,0,0,0,0,0,1,0,1,0,1,1,0,1,0,0,0,0,1,1,1,1,0,1,0,0,0,0,1,1,1,0,1,1,0,1,1,1,0,0,1,1,1,0,1,0,0,1,1,0,0,0,0,1,0,0,0,1,1,1,1,1,1,0,0,0,1,1,1,0,1,0,1,1,1,0,0,0,1,0,1,1,1,0,1,0,1,1,0,0,1,1,1,1,0,1,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,1,1,1,0,1,1,1,1,0,1,0,1,1,1,0,1,1,1,0,0,1,1,1,1,0,1,0,0,1,0,1,0,1,0,1,0,1,1,0,1,0,0,1,0,0,1,1,1,0,1,0,1,0,1,0,0,0,0,0,1,0,0,0,0,1,0,1,1,0,1,1,1,0,1,0,1,1,1,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0,0,1,0,1,0,1,1,1,1,1,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,1,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,1,1,1,1,1,1,0,0,0,1,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,0,0,1,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,0,1,1,0,0,1,0,0,0,0,1,1,0,1,1,0,1,0,1,1,1,1,0,1,1,0,0,0,0,1,0,1,1,1,1,1,0,1,0,1,0,1,1,0,1,1,1,1,0,1,0,1,0,0,0,1,1,1,0,0,0,0,0,1,0,1,0,1,1,0,0,1,1,1,1,1,1,1,0,0,0,0,1,0,1,0,1,1,0,1,0,1,0,1,0,0,1,1,1,1,0,0,1,1,1,1,0,0,0,1,1,1,0,1,1,1,1,1,0,1,1,1,0,0,0,1,0,1,1,1,0,0,1,0,1,1,1,0,0,0,1,1,1,1,0,1,1,0,1,0,0,0,1,0,1,1,0,1,0,1,0,0,1,0,0,1,1,1,0,0,1,1,0,1,0,1,1,0,0,0,1,0,1,0,1,1,1,0,0,0,0,1,1,1,1,0,1,0,0,0,0,1,0,0,1,1,0,0,1,1,0,1,0,0,0,0,1,0,0,1,0,0,1,0,0,0,1,1,0,1,1,0,0,1,1,0,1,0,1,1,0,1,0,0,0,1,1,1,1,1,0,0,0,0,1,1,1,0,1,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1,1,1,0,1,1,0,0,1,0,0,1,1,0,0,1,0,0,1,1,0,1,0,0,0,0,1,1,1,0,1,0,1,1,1,0,1,0,0,0,0,1,1,1,1,0,1,0,1,0,0,1,1,0,0,0,1,0,0,1,1,0,0,1,0,1,1,0,1,0,0,0,0,1,0,0,1,0,1,0,1,1,0,1,1,0,1,1,1,1,0,1,1,1,0,0,1,0,1,1,1,0,0,1,0,1,1,0,0,1,0,1,1,0,1,0,1,1,0,0,1,1,0,1,0,1,1,0,0,1,0,1,1,1,0,0,1,0,1,0,0,1,0,1,1,1,0,0,0,1,0,0,0,0,1,1,1,1,0,0,1,0,1,0,0,1,1,0,1,1,0,1,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,1,0,0,0,0,0,0,1,0,1,0,1,0,0,0,1,1,0,0,0,1,0,0,1,0,1,0,1,0,0,0,1,0,1,1,1,1,1,0,0,1,1,0,1,0,0,1,1,0,1,0,1,1,1,1,1,1,0,1,1,0,1,0,1,1,0,0,1,0,0,1,1,1,1,1,0,1,1,1,0,0,1,1,1,1,0,0,1,1,1,1,0,1,1,0,0,1,0,1,0,0,1,0,0,1,0,1,0,1,0,0,1,0,0,1,1,0,1,0,1,1,0,0,0,0,0,1,1,1,0,0,];
var gg_b = "1698487201/";

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
      subdomainx = String.fromCharCode(97 + gg_m[x]);
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
