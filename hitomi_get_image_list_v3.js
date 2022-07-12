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
case 4090:
case 1286:
case 3076:
case 3578:
case 434:
case 2804:
case 357:
case 841:
case 196:
case 1454:
case 489:
case 398:
case 3860:
case 824:
case 237:
case 1776:
case 1516:
case 1575:
case 3123:
case 2386:
case 3571:
case 3877:
case 2547:
case 781:
case 1317:
case 3293:
case 3899:
case 1331:
case 1565:
case 500:
case 3382:
case 107:
case 2488:
case 4064:
case 2581:
case 2669:
case 2573:
case 1109:
case 1818:
case 3232:
case 3808:
case 1896:
case 3809:
case 593:
case 3934:
case 3419:
case 1009:
case 1649:
case 2160:
case 2490:
case 3325:
case 1745:
case 2769:
case 2890:
case 1435:
case 890:
case 2472:
case 2745:
case 3219:
case 3304:
case 2436:
case 2934:
case 1333:
case 2108:
case 1130:
case 1511:
case 1073:
case 944:
case 1385:
case 3472:
case 313:
case 1167:
case 3302:
case 2401:
case 743:
case 2008:
case 1253:
case 26:
case 1604:
case 2191:
case 319:
case 2791:
case 2803:
case 426:
case 2410:
case 3864:
case 3311:
case 2148:
case 2733:
case 3329:
case 3153:
case 802:
case 67:
case 1430:
case 61:
case 2487:
case 1741:
case 204:
case 510:
case 200:
case 717:
case 681:
case 1343:
case 4051:
case 21:
case 4033:
case 1777:
case 1850:
case 854:
case 1113:
case 1942:
case 2734:
case 2:
case 3734:
case 3034:
case 3249:
case 1381:
case 2738:
case 3814:
case 2403:
case 1751:
case 2265:
case 922:
case 857:
case 1870:
case 3178:
case 3720:
case 728:
case 1080:
case 2058:
case 2146:
case 2292:
case 1192:
case 1520:
case 3133:
case 1593:
case 3818:
case 1624:
case 256:
case 1671:
case 1901:
case 2714:
case 4010:
case 2466:
case 3642:
case 2026:
case 2888:
case 3559:
case 430:
case 3386:
case 718:
case 1370:
case 1018:
case 744:
case 2790:
case 3204:
case 163:
case 2064:
case 2167:
case 30:
case 1950:
case 504:
case 3509:
case 371:
case 1401:
case 415:
case 1123:
case 391:
case 2492:
case 517:
case 3936:
case 2170:
case 915:
case 906:
case 3688:
case 2242:
case 521:
case 745:
case 837:
case 141:
case 599:
case 2515:
case 1307:
case 3447:
case 2692:
case 1690:
case 3114:
case 705:
case 1266:
case 3701:
case 3445:
case 1153:
case 3377:
case 605:
case 1249:
case 1190:
case 1443:
case 4062:
case 3735:
case 2202:
case 1798:
case 3407:
case 3184:
case 2710:
case 3844:
case 2586:
case 901:
case 2091:
case 245:
case 559:
case 1897:
case 1677:
case 523:
case 3349:
case 311:
case 2589:
case 737:
case 501:
case 1019:
case 2317:
case 2598:
case 2848:
case 2061:
case 1011:
case 2778:
case 310:
case 240:
case 528:
case 2749:
case 2919:
case 907:
case 3255:
case 511:
case 3451:
case 189:
case 639:
case 1305:
case 3209:
case 1984:
case 2445:
case 697:
case 3298:
case 98:
case 296:
case 2942:
case 5:
case 1734:
case 2840:
case 1186:
case 2352:
case 3866:
case 2516:
case 568:
case 2382:
case 1703:
case 1112:
case 1302:
case 1280:
case 3858:
case 3490:
case 1212:
case 606:
case 3470:
case 3567:
case 2350:
case 2687:
case 1889:
case 1067:
case 1988:
case 1208:
case 2761:
case 2074:
case 1895:
case 762:
case 1955:
case 419:
case 530:
case 14:
case 1867:
case 635:
case 165:
case 2298:
case 669:
case 552:
case 4048:
case 414:
case 2234:
case 3679:
case 1915:
case 2938:
case 3826:
case 3069:
case 1975:
case 2816:
case 3025:
case 2460:
case 3233:
case 424:
case 1354:
case 3556:
case 1693:
case 3412:
case 1071:
case 2956:
case 2629:
case 376:
case 2493:
case 2764:
case 254:
case 840:
case 933:
case 1625:
case 3538:
case 295:
case 3924:
case 294:
case 2579:
case 1957:
case 3653:
case 576:
case 3442:
case 2396:
case 879:
case 3140:
case 444:
case 2055:
case 1236:
case 2615:
case 3739:
case 1445:
case 2380:
case 3958:
case 4071:
case 3127:
case 3648:
case 308:
case 1700:
case 1750:
case 1920:
case 4067:
case 539:
case 2961:
case 1461:
case 1978:
case 3372:
case 885:
case 2887:
case 3096:
case 1929:
case 558:
case 3795:
case 3913:
case 2065:
case 2583:
case 3540:
case 2310:
case 3353:
case 176:
case 2335:
case 1510:
case 3457:
case 975:
case 2286:
case 4073:
case 2239:
case 1993:
case 418:
case 404:
case 3062:
case 3446:
case 3618:
case 884:
case 3774:
case 1205:
case 279:
case 3812:
case 1711:
case 1756:
case 2595:
case 1602:
case 1406:
case 464:
case 3054:
case 790:
case 3494:
case 1806:
case 3492:
case 2644:
case 393:
case 903:
case 3543:
case 2556:
case 518:
case 135:
case 2946:
case 2207:
case 2610:
case 908:
case 4016:
case 3987:
case 662:
case 328:
case 1481:
case 239:
case 758:
case 1144:
case 3815:
case 3082:
case 3705:
case 3462:
case 3079:
case 1660:
case 3627:
case 3301:
case 2037:
case 3584:
case 1913:
case 432:
case 3104:
case 2411:
case 1903:
case 1926:
case 192:
case 832:
case 1185:
case 1334:
case 706:
case 2111:
case 742:
case 1423:
case 495:
case 2789:
case 3527:
case 2741:
case 438:
case 2285:
case 3691:
case 1355:
case 2467:
case 3465:
case 2656:
case 1363:
case 3876:
case 2052:
case 1999:
case 1553:
case 2560:
case 1183:
case 1971:
case 544:
case 3131:
case 3676:
case 2355:
case 2839:
case 2217:
case 2204:
case 3932:
case 2718:
case 3791:
case 1486:
case 4038:
case 152:
case 1712:
case 2977:
case 4025:
case 1571:
case 2729:
case 3790:
case 556:
case 3806:
case 333:
case 59:
case 2930:
case 1758:
case 3732:
case 2002:
case 673:
case 2779:
case 2197:
case 2655:
case 1772:
case 3973:
case 83:
case 405:
case 2049:
case 232:
case 146:
case 2405:
case 363:
case 263:
case 1344:
case 129:
case 1219:
case 1541:
case 474:
case 845:
case 1536:
case 3327:
case 209:
case 2661:
case 3393:
case 1742:
case 2193:
case 3250:
case 344:
case 535:
case 3944:
case 2982:
case 4053:
case 1621:
case 3900:
case 22:
case 993:
case 3760:
case 674:
case 2664:
case 1062:
case 275:
case 1325:
case 3616:
case 31:
case 3787:
case 2606:
case 2668:
case 3917:
case 3597:
case 2397:
case 2760:
case 3716:
case 1803:
case 3894:
case 1539:
case 2097:
case 111:
case 1837:
case 2038:
case 1221:
case 3908:
case 3498:
case 3201:
case 3619:
case 3629:
case 1959:
case 666:
case 1198:
case 1569:
case 2043:
case 1702:
case 1374:
case 290:
case 4021:
case 158:
case 951:
case 1472:
case 1137:
case 893:
case 3763:
case 2257:
case 1698:
case 2592:
case 2477:
case 1021:
case 1319:
case 736:
case 856:
case 1272:
case 3976:
case 2305:
case 1356:
case 2552:
case 2751:
case 2568:
case 2427:
case 755:
case 1161:
case 1645:
case 977:
case 3759:
case 2972:
case 1821:
case 1157:
case 1830:
case 1389:
case 4061:
case 2844:
case 2007:
case 3068:
case 1590:
case 3765:
case 2094:
case 191:
case 3157:
case 3228:
case 1444:
case 1768:
case 1668:
case 4019:
case 3350:
case 3268:
case 2762:
case 178:
case 940:
case 999:
case 2201:
case 3476:
case 2666:
case 271:
case 3780:
case 1452:
case 858:
case 132:
case 1107:
case 3545:
case 1580:
case 2799:
case 436:
case 1585:
case 1368:
case 337:
case 2178:
case 1953:
case 1634:
case 2050:
case 1365:
case 3111:
case 109:
case 3014:
case 285:
case 3898:
case 2070:
case 2877:
case 1008:
case 1679:
case 1987:
case 1283:
case 3690:
case 3102:
case 1168:
case 976:
case 2585:
case 1293:
case 4063:
case 2889:
case 848:
case 3979:
case 3576:
case 2856:
case 1888:
case 2195:
case 3234:
case 1111:
case 335:
case 2323:
case 2860:
case 956:
case 194:
case 2351:
case 3016:
case 3364:
case 1587:
case 822:
case 1892:
case 3358:
case 2400:
case 2418:
case 2174:
case 302:
case 633:
case 1802:
case 3270:
case 1003:
case 349:
case 1135:
case 3224:
case 3781:
case 1544:
case 1271:
case 3289:
case 3246:
case 2613:
case 2505:
case 1614:
case 2384:
case 3686:
case 330:
case 3063:
case 1246:
case 3243:
case 2776:
case 29:
case 3530:
case 2314:
case 3400:
case 6:
case 1088:
case 727:
case 860:
case 3291:
case 3712:
case 2143:
case 3585:
case 1000:
case 2957:
case 4082:
case 704:
case 34:
case 386:
case 3505:
case 62:
case 221:
case 1563:
case 2580:
case 1413:
case 1463:
case 3713:
case 3267:
case 1670:
case 1683:
case 4000:
case 648:
case 3009:
case 2219:
case 1589:
case 2806:
case 3423:
case 2691:
case 2288:
case 988:
case 2240:
case 1526:
case 336:
case 37:
case 3429:
case 1421:
case 2248:
case 1318:
case 195:
case 596:
case 2161:
case 2273:
case 1065:
case 1507:
case 3450:
case 1834:
case 201:
case 3129:
case 1033:
case 1518:
case 555:
case 3274:
case 1545:
case 1259:
case 2398:
case 1298:
case 1471:
case 2694:
case 3549:
case 3090:
case 2169:
case 4002:
case 3718:
case 1615:
case 2704:
case 865:
case 3306:
case 1220:
case 1474:
case 394:
case 1176:
case 3520:
case 2035:
case 1291:
case 3217:
case 3161:
case 329:
case 3922:
case 3203:
case 3895:
case 3307:
case 2602:
case 4004:
case 1782:
case 1099:
case 87:
case 3322:
case 69:
case 950:
case 3614:
case 952:
case 3239:
case 989:
case 73:
case 3933:
case 1375:
case 3108:
case 2960:
case 2381:
case 180:
case 3261:
case 515:
case 579:
case 2684:
case 1206:
case 2911:
case 340:
case 1057:
case 3356:
case 3884:
case 142:
case 3580:
case 2218:
case 23:
case 1427:
case 3473:
case 409:
case 3869:
case 2387:
case 264:
case 3668:
case 2249:
case 2742:
case 748:
case 2151:
case 267:
case 3273:
case 179:
case 3615:
case 1378:
case 4081:
case 546:
case 3539:
case 1832:
case 3726:
case 3752:
case 1357:
case 3444:
case 911:
case 1292:
case 2484:
case 2312:
case 3019:
case 2419:
case 2479:
case 896:
case 1492:
case 1814:
case 1917:
case 1976:
case 3942:
case 3630:
case 1961:
case 1084:
case 964:
case 2920:
case 4066:
case 851:
case 2746:
case 3480:
case 3071:
case 1924:
case 2937:
case 402:
case 1007:
case 2775:
case 172:
case 2084:
case 3706:
case 1969:
case 2006:
case 1692:
case 1138:
case 3862:
case 3709:
case 3150:
case 3487:
case 3139:
case 1449:
case 1613:
case 3007:
case 2842:
case 1804:
case 796:
case 450:
case 923:
case 4012:
case 3206:
case 874:
case 3542:
case 2176:
case 2223:
case 2422:
case 1882:
case 610:
case 1578:
case 2480:
case 2189:
case 207:
case 636:
case 49:
case 711:
case 3612:
case 3020:
case 2541:
case 1816:
case 127:
case 1464:
case 1559:
case 1042:
case 1996:
case 2135:
case 938:
case 356:
case 3479:
case 503:
case 3336:
case 238:
case 3182:
case 36:
case 766:
case 2438:
case 3003:
case 657:
case 112:
case 3292:
case 2194:
case 750:
case 1515:
case 2512:
case 3799:
case 128:
case 2128:
case 2172:
case 3736:
case 1944:
case 2748:
case 2834:
case 3503:
case 1795:
case 508:
case 734:
case 2171:
case 943:
case 1732:
case 3352:
case 1058:
case 3665:
case 1465:
case 3855:
case 1982:
case 1233:
case 2125:
case 852:
case 2672:
case 3300:
case 864:
case 1659:
case 1577:
case 1131:
case 3632:
case 2932:
case 2991:
case 1172:
case 1441:
case 3947:
case 1783:
case 3786:
case 361:
case 3805:
case 783:
case 2289:
case 3782:
case 3750:
case 3437:
case 1525:
case 3743:
case 1718:
case 258:
case 280:
case 3847:
case 3674:
case 2681:
case 2119:
case 1609:
case 652:
case 1809:
case 3262:
case 3548:
case 801:
case 3286:
case 632:
case 1945:
case 257:
case 2186:
case 3871:
case 3697:
case 124:
case 1967:
case 3095:
case 1497:
case 1760:
case 3784:
case 2883:
case 2187:
case 1600:
case 1588:
case 2018:
case 831:
case 150:
case 1595:
case 819:
case 242:
case 2527:
case 1025:
case 1405:
case 3762:
case 282:
case 1778:
case 2388:
case 2529:
case 2546:
case 0:
case 2626:
case 3374:
case 2688:
case 3905:
case 137:
case 120:
case 4052:
case 1030:
case 1665:
case 3117:
case 968:
case 880:
case 2758:
case 82:
case 3961:
case 634:
case 3363:
case 277:
case 70:
case 3416:
case 64:
case 3621:
case 2421:
case 1858:
case 3427:
case 1218:
case 543:
case 4011:
case 346:
case 3018:
case 90:
case 3346:
case 3532:
case 2252:
case 1626:
case 1871:
case 2855:
case 2060:
case 1051:
case 2000:
case 509:
case 3914:
case 3983:
case 2157:
case 3802:
case 297:
case 2041:
case 362:
case 2385:
case 3698:
case 2782:
case 3848:
case 972:
case 3504:
case 3565:
case 4040:
case 46:
case 442:
case 2133:
case 1005:
case 1643:
case 3969:
case 2054:
case 3749:
case 3587:
case 3772:
case 3371:
case 2735:
case 3288:
case 3573:
case 2849:
case 1150:
case 2158:
case 382:
case 1049:
case 3599:
case 2835:
case 1447:
case 1630:
case 2153:
case 1928:
case 2482:
case 1767:
case 2244:
case 591:
case 3420:
case 816:
case 3313:
case 3843:
case 1459:
case 3516:
case 2591:
case 126:
case 1763:
case 211:
case 835:
case 1764:
case 3319:
case 119:
case 3968:
case 531:
case 457:
case 3460:
case 3411:
case 1998:
case 3885:
case 379:
case 24:
case 154:
case 2897:
case 3575:
case 779:
case 1838:
case 3878:
case 571:
case 1853:
case 1132:
case 1633:
case 2118:
case 514:
case 1279:
case 1426:
case 226:
case 1894:
case 3928:
case 2700:
case 312:
case 1799:
case 2958:
case 1234:
case 1258:
case 974:
case 798:
case 1412:
case 2295:
case 2992:
case 3055:
case 3854:
case 804:
case 2378:
case 2136:
case 1304:
case 372:
case 1104:
case 471:
case 2281:
case 995:
case 56:
case 1039:
case 2825:
case 276:
case 1919:
case 4017:
case 2927:
case 1608:
case 1396:
case 1347:
case 131:
case 476:
case 12:
case 3220:
case 498:
case 747:
case 2698:
case 3305:
case 713:
case 3789:
case 1201:
case 492:
case 3570:
case 990:
case 670:
case 608:
case 4085:
case 620:
case 1098:
case 488:
case 1171:
case 4008:
case 266:
case 3687:
case 3757:
case 2894:
case 2471:
case 3882:
case 4054:
case 2159:
case 2630:
case 327:
case 291:
case 2368:
case 572:
case 1117:
case 1482:
case 3207:
case 1036:
case 3820:
case 1779:
case 3699:
case 1226:
case 1503:
case 2605:
case 3833:
case 746:
case 3122:
case 1879:
case 3428:
case 3897:
case 4005:
case 1688:
case 2098:
case 4059:
case 784:
case 1948:
case 84:
case 1847:
case 2902:
case 11:
case 1861:
case 1909:
case 810:
case 2447:
case 3338:
case 983:
case 2181:
case 1494:
case 960:
case 162:
case 326:
case 4034:
case 2783:
case 1174:
case 2823:
case 1047:
case 3316:
case 1817:
case 2276:
case 2792:
case 2196:
case 4045:
case 145:
case 3032:
case 1027:
case 3279:
case 2532:
case 3804:
case 2341:
case 2933:
case 1455:
case 942:
case 3160:
case 2020:
case 384:
case 1155:
case 2275:
case 910:
case 431:
case 3191:
case 1031:
case 1854:
case 446:
case 1177:
case 1437:
case 3348:
case 1673:
case 2948:
case 2280:
case 1735:
case 2727:
case 1652:
case 3098:
case 3635:
case 3664:
case 1285:
case 3383:
case 1250:
case 926:
case 3491:
case 680:
case 2534:
case 2950:
case 3195:
case 3891:
case 1508:
case 2979:
case 3948:
case 3417:
case 2944:
case 1306:
case 618:
case 2087:
case 3385:
case 219:
case 3661:
case 3608:
case 1562:
case 2304:
case 3240:
case 1819:
case 381:
case 2753:
case 1477:
case 905:
case 2647:
case 3317:
case 3099:
case 2117:
case 2393:
case 948:
case 2593:
case 749:
case 411:
case 1918:
case 2677:
case 3017:
case 101:
case 2861:
case 1997:
case 547:
case 75:
case 2905:
case 1274:
case 2976:
case 735:
case 541:
case 20:
case 953:
case 763:
case 1248:
case 1547:
case 2308:
case 3658:
case 834:
case 2954:
case 2643:
case 88:
case 1060:
case 114:
case 1055:
case 925:
case 696:
case 3266:
case 2671:
case 3493:
case 3950:
case 1456:
case 1488:
case 2908:
case 2499:
case 3199:
case 806:
case 3001:
case 2360:
case 3840:
case 3811:
case 1826:
case 2336:
case 1156:
case 3970:
case 2481:
case 2707:
case 1989:
case 2059:
case 1606:
case 3768:
case 246:
case 3053:
case 1829:
case 3152:
case 2213:
case 472:
case 3656:
case 100:
case 3396:
case 281:
case 1936:
case 3650:
case 2864:
case 1922:
case 2222:
case 229:
case 3930:
case 2440:
case 2033:
case 3647:
case 225:
case 3205:
case 435:
case 3507:
case 3037:
case 3430:
case 912:
case 3801:
case 3695:
case 3952:
case 894:
case 2985:
case 74:
case 1273:
case 836:
case 3655:
case 1321:
case 3499:
case 1916:
case 2757:
case 1654:
case 1232:
case 1255:
case 2014:
case 2458:
case 2974:
case 3710:
case 2676:
case 2012:
case 828:
case 733:
case 3194:
case 2924:
case 1081:
case 96:
case 787:
case 231:
case 1093:
case 2980:
case 2175:
case 314:
case 849:
case 2099:
case 2353:
case 3959:
case 3920:
case 3295:
case 2983:
case 2635:
case 1540:
case 2780:
case 3733:
case 2875:
case 946:
case 227:
case 28:
case 2290:
case 1985:
case 3175:
case 3171:
case 1209:
case 1170:
case 3028:
case 2520:
case 1202:
case 3093:
case 1747:
case 2759:
case 2739:
case 1022:
case 3125:
case 1353:
case 3260:
case 2575:
case 2555:
case 1083:
case 2819:
case 1429:
case 4013:
case 1611:
case 1820:
case 1726:
case 2923:
case 1470:
case 2874:
case 688:
case 3916:
case 899:
case 3046:
case 1129:
case 1596:
case 4089:
case 1163:
case 2200:
case 2402:
case 168:
case 3067:
case 3015:
case 2291:
case 3977:
case 1268:
case 1303:
case 4014:
case 1335:
case 3513:
case 3769:
case 3783:
case 2025:
case 2863:
case 2253:
case 298:
case 1657:
case 1707:
case 3893:
case 645:
case 2214:
case 3378:
case 1230:
case 3004:
case 1235:
case 590:
case 4079:
case 537:
case 622:
case 2021:
case 3596:
case 388:
case 2511:
case 316:
case 3758:
case 3116:
case 3850:
case 1398:
case 936:
case 1868:
case 369:
case 592:
case 1069:
case 1592:
case 1390:
case 2772:
case 658:
case 3285:
case 997:
case 2001:
case 630:
case 3937:
case 671:
case 441:
case 1045:
case 3146:
case 2315:
case 2327:
case 2338:
case 1214:
case 1383:
case 1898:
case 869:
case 765:
case 1940:
case 843:
case 3187:
case 909:
case 85:
case 2465:
case 1146:
case 2468:
case 3145:
case 1:
case 664:
case 27:
case 1244:
case 3988:
case 4087:
case 1414:
case 1781:
case 1905:
case 2271:
case 719:
case 1584:
case 3190:
case 1433:
case 3907:
case 920:
case 2781:
case 2266:
case 250:
case 1859:
case 1696:
case 1466:
case 2416:
case 184:
case 2857:
case 1543:
case 886:
case 1904:
case 2900:
case 2264:
case 2318:
case 3012:
case 1964:
case 3727:
case 2988:
case 2986:
case 3978:
case 274:
case 3202:
case 3397:
case 2071:
case 2968:
case 2246:
case 1140:
case 1927:
case 1204:
case 1658:
case 2180:
case 536:
case 1074:
case 818:
case 1682:
case 3283:
case 3669:
case 1891:
case 157:
case 679:
case 1512:
case 866:
case 3637:
case 1349:
case 1148:
case 3165:
case 1432:
case 1857:
case 4086:
case 3456:
case 1366:
case 1289:
case 1240:
case 889:
case 3142:
case 1542:
case 3061:
case 2053:
case 548:
case 2081:
case 4015:
case 3126:
case 324:
case 3344:
case 723:
case 1796:
case 3511:
case 756:
case 3717:
case 2101:
case 1017:
case 1006:
case 2722:
case 3105:
case 1475:
case 445:
case 2029:
case 971:
case 2652:
case 469:
case 2179:
case 1572:
case 155:
case 265:
case 4030:
case 3890:
case 2115:
case 3753:
case 392:
case 2489:
case 252:
case 2377:
case 3528:
case 3244:
case 2843:
case 1638:
case 2730:
case 1737:
case 2375:
case 2085:
case 3892:
case 1063:
case 2810:
case 892:
case 1323:
case 4031:
case 32:
case 2632:
case 2451:
case 2408:
case 867:
case 422:
case 1297:
case 2608:
case 2182:
case 2650:
case 3761:
case 4083:
case 945:
case 2268:
case 3926:
case 1828:
case 3109:
case 768:
case 855:
case 2063:
case 497:
case 3566:
case 2788:
case 2841:
case 2818:
case 2774:
case 4022:
case 3441:
case 3013:
case 1072:
case 3881:
case 2183:
case 2439:
case 2724:
case 1179:
case 3529:
case 2500:
case 3113:
case 2569:
case 716:
case 92:
case 1288:
case 304:
case 2476:
case 1890:
case 2832:
case 1616:
case 1469:
case 2203:
case 2407:
case 1686:
case 2067:
case 567:
case 125:
case 1573:
case 1506:
case 400:
case 2940:
case 3208:
case 3151:
case 77:
case 574:
case 3339:
case 2357:
case 3886:
case 1290:
case 1436:
case 564:
case 3631:
case 1983:
case 1963:
case 1419:
case 1376:
case 1923:
case 1002:
case 2628:
case 2766:
case 199:
case 813:
case 1489:
case 4055:
case 3825:
case 3506:
case 4024:
case 374:
case 2045:
case 95:
case 1023:
case 1115:
case 2168:
case 1931:
case 1664:
case 2453:
case 524:
case 358:
case 551:
case 1102:
case 3264:
case 774:
case 2163:
case 1906:
case 2319:
case 2563:
case 3652:
case 1655:
case 3143:
case 3320:
case 1862:
case 2929:
case 3903:
case 967:
case 2793:
case 1749:
case 2470:
case 3376:
case 1316:
case 937:
case 2420:
case 619:
case 1479:
case 3989:
case 3896:
case 1141:
case 2820:
case 3640:
case 3188:
case 694:
case 3777:
case 3714:
case 1026:
case 1393:
case 3048:
case 3662:
case 2798:
case 401:
case 3796:
case 3278:
case 212:
case 3921:
case 182:
case 2641:
case 3431:
case 3646:
case 929:
case 1637:
case 2822:
case 2997:
case 108:
case 1467:
case 3588:
case 987:
case 4084:
case 3477:
case 408:
case 2469:
case 2885:
case 2970:
case 3408:
case 3367:
case 1418:
case 2337:
case 2859:
case 1395:
case 1994:
case 3551:
case 2882:
case 2224:
case 2607:
case 4001:
case 2786:
case 1162:
case 2731:
case 2517:
case 2876:
case 214:
case 2415:
case 2640:
case 2464:
case 1546:
case 2129:
case 2491:
case 2732:
case 1739:
case 2639:
case 428:
case 16:
case 1338:
case 1676:
case 2232:
case 1560:
case 3132:
case 2931:
case 3998:
case 3475:
case 1278:
case 35:
case 2024:
case 493:
case 3793:
case 2359:
case 575:
case 887:
case 3741:
case 4027:
case 406:
case 1786:
case 793:
case 1794:
case 3591:
case 3223:
case 1691:
case 1708:
case 3981:
case 505:
case 466:
case 3863:
case 1954:
case 3241:
case 3281:
case 2903:
case 2270:
case 1399:
case 3359:
case 3980:
case 342:
case 656:
case 2662:
case 3440:
case 3380:
case 3824:
case 38:
case 1116:
case 323:
case 288:
case 2582:
case 1337:
case 2524:
case 3845:
case 1195:
case 1766:
case 3044:
case 1628:
case 830:
case 3060:
case 3779:
case 3906:
case 2623:
case 863:
case 4029:
case 1724:
case 882:
case 2126:
case 1567:
case 3639:
case 1642:
case 687:
case 205:
case 3771:
case 1032:
case 973:
case 1028:
case 2981:
case 1650:
case 33:
case 3849:
case 1245:
case 2836:
case 2939:
case 2567:
case 2412:
case 1090:
case 51:
case 1699:
case 2878:
case 1581:
case 3842:
case 1066:
case 456:
case 888:
case 3685:
case 1193:
case 317:
case 844:
case 1887:
case 1301:
case 986:
case 1529:
case 2624:
case 3938:
case 1191:
case 3943:
case 355:
case 3331:
case 3030:
case 2267:
case 3021:
case 1142:
case 3193:
case 1648:
case 218:
case 795:
case 3280:
case 1089:
case 234:
case 2216:
case 3836:
case 3421:
case 2559:
case 3265:
case 3534:
case 3827:
case 1152:
case 2951:
case 3598:
case 3154:
case 607:
case 2040:
case 871:
case 1501:
case 3468:
case 805:
case 2011:
case 293:
case 1656:
case 2543:
case 3366:
case 1866:
case 1143:
case 1133:
case 527:
case 3666:
case 3121:
case 2413:
case 3764:
case 3039:
case 216:
case 2682:
case 777:
case 829:
case 1054:
case 2260:
case 465:
case 1970:
case 959:
case 3107:
case 587:
case 81:
case 375:
case 2367:
case 3277:
case 2994:
case 299:
case 3130:
case 2531:
case 2259:
case 2777:
case 3110:
case 3510:
case 2261:
case 668:
case 833:
case 1416:
case 1738:
case 2114:
case 1166:
case 917:
case 791:
case 2913:
case 3362:
case 3343:
case 2230:
case 3696:
case 2256:
case 3042:
case 3345:
case 3149:
case 2576:
case 1345:
case 351:
case 1358:
case 615:
case 2728:
case 1211:
case 138:
case 978:
case 1556:
case 2395:
case 2720:
case 2462:
case 253:
case 3673:
case 3984:
case 2112:
case 3402:
case 115:
case 2424:
case 3553:
case 3101:
case 2596:
case 459:
case 3670:
case 883:
case 3729:
case 3974:
case 785:
case 1394:
case 103:
case 1639:
case 2814:
case 186:
case 244:
case 3851:
case 1203:
case 309:
case 1966:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1657616401/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,0,1,1,0,0,1,1,1,1,0,0,1,0,1,0,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,1,1,0,1,0,1,1,1,1,0,1,1,0,1,0,0,1,0,1,1,0,1,0,0,1,1,0,0,0,1,0,1,1,1,0,0,0,0,0,1,0,0,1,0,1,0,1,1,0,0,1,0,1,0,0,1,0,1,1,1,0,0,0,1,0,0,1,0,0,1,1,1,0,0,1,1,1,0,0,0,0,0,0,1,0,0,1,1,0,1,0,0,1,1,0,0,1,1,0,0,1,1,1,0,1,0,1,0,0,1,0,0,1,1,1,0,0,1,0,1,1,0,1,1,1,0,1,1,1,0,1,0,0,0,1,0,1,0,1,0,1,1,0,1,0,0,1,0,0,0,1,1,0,0,0,1,1,0,0,1,0,1,0,1,0,0,1,0,1,0,1,0,0,1,0,1,1,1,0,0,0,1,0,1,0,0,1,0,1,1,0,0,0,0,1,0,1,0,0,0,1,1,1,0,1,0,0,0,1,0,0,0,1,1,1,1,0,0,0,0,0,1,1,1,0,1,1,0,0,0,0,1,0,0,0,0,1,1,0,1,1,0,1,0,0,1,0,0,0,0,0,0,0,1,1,0,1,0,1,1,1,0,0,0,0,0,0,0,1,0,0,1,0,1,1,1,0,0,1,0,0,0,0,0,1,1,0,1,0,0,0,1,1,0,1,0,1,0,1,0,1,1,0,1,0,1,1,1,0,0,0,0,1,1,0,0,0,1,1,1,1,1,0,1,0,0,1,0,0,0,1,1,0,1,0,0,1,0,1,0,1,0,1,1,0,0,0,0,1,1,1,0,1,0,0,0,1,0,0,0,1,0,0,1,0,1,1,0,0,1,1,0,0,1,1,0,1,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,1,1,0,0,1,0,0,0,1,1,1,0,1,1,1,1,1,0,0,1,0,1,1,1,1,0,0,0,1,1,0,1,0,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,0,0,1,0,1,0,0,1,0,0,1,0,0,0,1,1,0,0,0,0,1,1,0,0,1,0,0,1,1,0,1,0,0,1,1,0,0,1,0,0,1,1,1,0,0,0,1,0,1,0,1,0,0,1,0,0,0,1,1,0,0,1,1,0,0,1,0,0,1,1,1,1,0,1,1,0,0,1,1,0,0,1,0,0,0,1,1,0,1,1,1,1,1,1,1,0,1,1,0,0,0,0,1,1,0,1,1,0,1,1,1,1,1,0,0,0,0,1,0,1,1,1,1,0,1,1,0,0,0,1,0,1,1,1,1,1,1,1,0,1,0,0,0,0,0,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,0,1,1,1,0,0,0,1,1,1,0,1,0,1,0,1,0,0,0,0,1,0,0,1,1,1,1,0,0,0,1,1,1,1,1,0,0,1,1,1,1,1,0,1,0,0,1,1,1,1,1,1,0,0,0,1,1,1,1,0,1,0,1,1,0,0,0,0,1,1,1,0,1,1,1,0,0,1,1,1,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1,0,1,1,1,0,0,1,0,0,1,0,1,1,1,1,1,0,1,1,0,1,0,1,0,1,0,0,0,1,0,1,1,0,0,1,0,1,0,0,1,0,1,1,0,0,1,0,0,0,1,1,1,0,1,1,0,1,1,0,1,0,0,1,1,0,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,0,0,0,1,1,0,0,1,0,0,1,0,0,0,0,0,1,0,1,1,0,0,0,0,0,1,0,1,0,1,1,0,1,1,1,1,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,1,1,0,1,0,1,1,0,1,0,0,1,0,0,1,1,0,1,1,1,0,1,1,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,1,1,0,1,1,0,0,1,1,1,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,1,1,1,1,0,1,1,0,0,0,0,0,1,1,0,1,0,1,0,1,0,0,1,0,0,1,0,0,0,0,0,1,0,1,1,1,1,1,0,0,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,1,1,0,1,1,0,1,1,0,1,1,0,1,0,1,0,1,0,1,1,0,0,1,0,0,1,0,1,0,0,1,0,0,0,1,0,1,0,0,0,0,1,1,1,1,1,0,0,1,0,0,1,1,1,0,0,0,1,1,0,1,1,1,1,0,0,1,1,0,1,0,1,1,0,1,0,1,0,0,0,1,0,0,0,1,1,1,1,1,0,1,1,1,1,1,0,0,0,0,0,1,0,1,0,0,1,0,0,0,0,0,1,0,1,0,1,0,1,0,0,1,0,0,0,1,1,1,0,0,0,1,1,0,0,0,1,0,0,0,1,0,1,0,0,1,0,1,1,1,0,1,0,0,1,1,1,0,0,0,0,1,0,1,1,0,1,1,0,0,0,0,0,0,1,0,0,1,0,0,1,0,1,1,1,0,0,0,0,1,1,1,1,0,1,1,1,0,1,0,0,0,0,0,1,1,1,0,1,1,1,0,0,0,1,0,0,0,1,1,0,1,0,1,1,0,0,1,1,1,1,1,1,0,1,0,1,1,0,0,0,0,1,1,1,0,0,0,1,1,0,1,0,0,1,0,0,0,0,0,0,1,1,1,0,0,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,1,0,1,0,1,0,1,1,1,1,1,0,1,0,0,0,1,0,0,1,1,1,1,0,0,0,1,0,1,0,1,1,1,0,0,0,0,0,0,1,1,1,1,0,1,0,0,1,0,1,0,1,1,1,0,0,0,1,0,1,1,0,1,0,1,0,1,1,1,0,0,1,1,0,0,0,0,1,0,0,1,0,1,1,1,0,0,1,1,1,1,1,0,0,0,1,0,1,0,0,1,0,1,0,1,1,0,0,1,0,0,1,0,0,1,0,0,0,1,1,1,0,1,0,0,0,1,0,1,0,1,1,0,1,0,0,0,1,1,0,1,0,1,0,0,0,0,0,1,0,0,0,0,1,0,0,1,0,1,0,1,0,0,1,1,1,0,1,0,0,1,1,0,1,0,1,1,0,1,1,1,0,1,0,1,1,0,0,0,1,0,0,0,1,1,0,0,1,0,1,0,1,1,1,1,0,0,1,1,0,1,1,1,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,1,0,1,1,0,0,1,0,0,1,0,1,0,1,0,1,0,0,0,1,0,1,0,0,1,0,0,1,1,0,0,1,0,0,0,0,1,0,0,1,0,0,1,1,1,0,1,0,1,0,1,0,1,0,0,1,0,1,0,0,0,0,1,1,1,1,0,1,1,0,0,0,1,0,1,0,1,1,0,0,1,1,0,0,0,1,1,0,0,1,0,1,1,0,0,0,1,0,1,0,0,0,0,0,0,0,1,1,1,0,0,1,1,0,1,0,0,1,0,1,1,0,0,1,0,1,1,0,0,1,1,0,1,0,1,0,0,0,0,1,1,0,1,0,0,0,1,0,0,1,1,1,0,0,1,1,0,0,1,1,1,1,1,0,1,1,1,1,1,0,1,0,1,1,1,1,1,0,1,0,0,1,0,0,0,1,0,0,1,1,0,1,0,1,0,0,0,1,1,1,1,0,1,0,1,0,1,1,0,0,1,0,0,0,1,1,1,0,1,1,1,0,0,0,0,1,0,0,0,1,1,0,1,1,1,1,1,1,1,0,0,0,1,0,0,1,1,0,0,0,1,0,1,1,0,1,1,1,1,0,1,0,0,0,0,0,0,1,1,1,1,0,1,0,0,0,1,0,1,0,1,1,0,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,0,1,1,0,0,0,1,0,0,1,1,1,0,0,0,1,0,0,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,1,1,0,1,0,0,0,0,1,1,0,1,1,1,0,1,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1,0,1,1,1,1,0,1,1,1,0,1,0,1,0,0,1,1,0,1,0,1,1,0,0,0,1,0,1,0,1,0,1,0,0,1,0,0,1,0,0,0,1,1,1,0,0,1,0,1,1,1,0,0,0,0,1,0,0,0,1,1,1,0,0,1,0,0,0,0,0,0,0,1,1,1,0,0,0,1,1,0,0,1,0,1,1,1,0,1,0,0,1,1,0,0,0,1,1,0,1,1,1,0,1,0,1,0,0,1,0,0,1,0,1,0,1,1,1,0,0,1,0,0,0,0,1,1,0,0,0,0,1,0,0,0,1,0,1,1,0,0,1,1,0,1,1,1,1,1,1,0,1,1,0,0,1,0,1,1,1,0,1,1,0,1,1,0,0,0,1,0,1,1,1,1,1,1,0,1,1,0,0,1,0,0,1,0,0,0,1,1,1,1,1,0,0,1,0,0,1,1,1,0,1,0,0,1,1,1,1,1,1,0,1,1,0,1,0,1,1,0,1,0,1,1,1,0,0,0,0,0,1,0,1,1,1,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1,1,0,0,1,0,1,0,1,0,0,0,0,0,1,1,0,0,0,0,0,1,1,0,1,1,1,1,1,0,0,1,0,0,0,0,1,1,0,0,0,1,1,1,1,1,0,1,0,1,0,1,1,1,1,0,0,1,0,1,0,1,0,1,0,0,1,1,0,0,1,1,0,0,1,0,0,0,1,1,0,0,0,0,0,1,0,0,1,0,1,0,0,1,1,1,0,0,1,1,1,0,0,1,0,0,0,0,0,1,1,0,1,1,0,1,1,1,1,1,0,0,1,1,0,1,0,1,0,1,0,0,1,0,0,0,1,1,1,0,1,1,1,0,1,1,1,1,1,1,1,0,0,0,0,1,1,0,1,1,1,1,1,1,1,1,0,0,0,0,1,0,1,0,1,0,0,1,1,1,1,1,1,0,0,1,1,1,1,1,1,0,1,0,0,1,0,0,0,1,0,0,0,0,0,1,1,1,1,0,1,0,0,0,0,1,0,0,0,0,1,0,1,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,0,0,0,1,1,1,1,0,1,0,1,1,1,0,1,0,1,1,1,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,1,1,1,1,1,0,0,1,1,1,1,0,1,1,1,1,1,0,0,1,1,0,0,0,1,1,0,1,1,1,0,1,1,0,1,0,1,0,0,1,0,1,1,1,1,1,1,0,1,0,1,1,0,0,1,1,1,1,0,1,1,0,0,1,1,0,0,1,1,0,1,1,1,0,0,0,1,1,1,0,1,0,0,1,1,0,0,0,0,0,1,0,0,1,1,0,1,0,0,0,1,0,0,1,0,1,1,1,0,1,1,0,0,0,0,1,0,1,1,0,1,0,1,1,1,1,1,1,1,0,0,1,0,1,0,0,0,1,0,1,1,0,1,1,1,0,0,0,1,0,0,1,1,0,1,1,0,1,0,1,1,0,0,1,1,1,1,0,0,1,0,1,0,1,0,0,1,0,0,1,1,1,0,0,1,1,1,0,0,1,0,1,1,0,0,1,1,0,0,1,0,1,1,1,0,1,0,1,1,1,0,1,1,0,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,1,0,0,1,1,0,0,1,0,0,1,0,1,0,1,1,1,0,0,0,0,0,0,1,0,1,0,1,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,1,1,1,1,0,0,1,1,1,0,0,1,0,1,1,1,0,1,1,1,0,1,0,1,0,0,0,1,0,0,1,0,1,1,1,1,1,1,0,1,0,0,0,1,1,0,0,0,0,0,0,1,1,1,0,0,1,1,1,1,1,0,0,0,1,0,0,0,1,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,0,0,1,0,1,0,0,0,0,1,1,1,0,1,1,0,1,1,0,1,0,0,1,0,1,1,0,1,1,0,1,0,1,1,1,1,1,0,0,1,1,0,0,1,1,0,1,0,0,0,0,0,0,1,1,0,0,0,0,1,0,1,0,1,0,1,0,1,0,0,1,1,0,1,0,0,0,1,0,0,1,1,1,1,1,1,0,1,0,1,0,1,0,1,0,0,1,0,0,0,0,0,1,0,0,1,0,1,1,0,0,1,0,1,1,0,1,1,1,0,1,0,0,1,1,0,1,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,0,1,1,0,1,0,1,0,1,0,1,1,0,1,0,1,1,0,1,0,1,0,1,0,1,1,1,1,0,0,0,1,1,1,1,0,0,0,0,1,1,1,0,0,0,1,0,1,1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,0,1,1,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,0,0,1,0,0,1,0,0,1,1,1,0,0,0,1,0,0,0,1,0,0,0,0,0,1,1,1,1,1,0,0,1,0,0,1,0,0,1,1,0,0,0,0,0,0,1,1,0,1,1,0,0,1,1,1,0,1,1,1,1,1,0,1,1,1,0,1,1,0,1,1,1,0,1,0,1,1,0,0,1,0,0,1,0,0,0,1,1,1,0,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,1,0,0,1,1,0,0,1,1,1,0,1,1,1,0,0,0,1,1,1,1,0,0,0,1,0,0,1,0,1,1,0,0,1,1,1,1,0,1,1,1,1,0,0,0,1,0,0,0,0,0,1,0,1,1,0,0,1,1,0,0,0,0,0,1,0,1,0,0,1,0,0,1,0,0,0,1,0,1,1,0,1,0,0,0,1,0,0,0,0,1,1,1,0,1,0,1,1,0,0,1,0,0,1,0,1,1,0,1,0,1,0,1,0,1,1,1,1,0,1,0,0,1,1,1,0,0,0,0,1,0,0,0,1,0,0,1,1,0,1,0,0,1,1,0,0,0,1,0,0,1,1,1,0,0,1,0,1,0,0,0,1,0,1,0,0,1,0,0,1,1,1,1,1,1,0,1,1,0,0,1,1,0,1,0,1,1,1,1,0,0,1,1,0,0,1,1,1,0,0,1,0,0,0,1,0,1,1,1,0,0,0,0,0,1,1,1,1,1,0,1,1,0,0,0,1,0,0,0,0,1,1,0,0,1,1,1,1,0,0,1,1,0,1,0,1,1,0,1,1,0,1,0,1,0,0,1,0,0,0,1,0,0,1,1,1,1,1,1,0,1,1,0,0,0,0,0,1,1,1,0,0,1,1,1,0,0,0,0,0,1,0,0,0,1,0,1,1,0,1,1,1,0,1,1,1,1,1,1,0,0,0,0,1,0,1,0,1,1,1,0,0,0,1,0,0,1,0,1,1,0,0,1,0,1,0,1,1,0,1,1,0,1,1,1,1,1,0,0,0,1,1,0,0,1,0,1,0,0,1,0,1,0,1,1,1,0,0,1,0,0,1,1,0,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1,0,1,1,1,0,1,0,0,0,1,0,0,1,0,1,1,1,1,1,0,1,0,0,0,0,1,1,0,1,0,1,0,0,1,0,1,1,1,0,0,0,1,0,1,0,0,1,0,0,1,0,1,1,0,0,1,0,0,0,1,0,0,0,1,1,0,0,1,0,1,1,0,1,1,1,1,1,0,0,0,0,1,0,0,1,1,1,0,0,0,0,0,1,0,1,1,1,0,0,1,1,0,0,1,0,0,0,1,0,0,0,1,0,1,1,1,1,1,0,0,1,0,1,1,0,0,0,0,0,1,1,0,1,0,1,0,1,1,1,1,1,0,0,1,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,1,0,0,1,0,1,1,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,1,0,1,0,0,1,1,0,1,0,0,1,0,0,0,1,0,0,1,0,0,1,0,0,1,1,0,1,0,1,1,1,0,0,0,0,1,1,1,1,1,0,1,1,0,1,1,1,0,1,0,0,0,0,1,0,0,0,0,0,1,1,0,0,1,1,0,1,0,1,0,0,0,1,0,1,1,0,1,0,1,1,1,1,0,0,0,1,1,0,0,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,1,1,1,1,0,0,1,0,0,1,1,0,0,0,1,0,1,0,1,0,1,0,1,0,0,0,1,0,0,0,1,1,1,0,0,0,1,1,0,0,1,0,1,0,1,1,1,1,1,0,0,1,0,1,1,1,1,1,1,0,0,0,1,1,0,0,1,0,0,0,0,0,0,1,0,0,1,1,0,0,0,1,1,1,1,1,1,1,1,0,1,0,0,0,1,0,0,1,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,0,1,0,1,0,0,0,1,0,0,1,1,1,0,1,0,1,1,1,1,0,1,1,0,1,1,0,0,0,0,0,1,1,1,0,1,0,0,0,0,1,0,0,1,1,1,0,1,0,1,1,1,1,1,0,1,0,0,0,0,0,0,0,1,0,0,1,1,1,1,1,];
var gg_b = "1657616401/";

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
