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
case 1341:
case 1442:
case 3176:
case 3231:
case 1613:
case 1148:
case 2665:
case 540:
case 1939:
case 3424:
case 3062:
case 1670:
case 2532:
case 1602:
case 4056:
case 1080:
case 3546:
case 2344:
case 3559:
case 1825:
case 3571:
case 4049:
case 1913:
case 3127:
case 1725:
case 450:
case 1657:
case 2509:
case 594:
case 1970:
case 1786:
case 2067:
case 3348:
case 2515:
case 1902:
case 204:
case 3141:
case 1886:
case 3648:
case 1086:
case 1339:
case 3540:
case 4085:
case 2458:
case 1676:
case 3113:
case 910:
case 2867:
case 644:
case 1941:
case 2644:
case 1025:
case 3170:
case 3408:
case 3454:
case 1370:
case 4031:
case 1627:
case 534:
case 1401:
case 1855:
case 14:
case 1780:
case 2206:
case 1313:
case 986:
case 3139:
case 121:
case 3256:
case 4077:
case 2653:
case 3071:
case 3059:
case 3443:
case 1264:
case 2917:
case 3681:
case 400:
case 2009:
case 3740:
case 2015:
case 726:
case 3037:
case 1988:
case 3840:
case 3829:
case 1390:
case 3562:
case 991:
case 3729:
case 2323:
case 3046:
case 1996:
case 1112:
case 1598:
case 1690:
case 3297:
case 3746:
case 2623:
case 1388:
case 3335:
case 2317:
case 948:
case 3837:
case 3303:
case 1863:
case 2715:
case 2184:
case 2292:
case 2809:
case 2815:
case 2923:
case 1135:
case 3188:
case 3591:
case 480:
case 2353:
case 3411:
case 3482:
case 3859:
case 470:
case 3312:
case 1746:
case 3388:
case 3878:
case 1297:
case 1029:
case 3690:
case 1846:
case 3181:
case 208:
case 911:
case 2384:
case 1196:
case 2774:
case 3245:
case 3135:
case 3763:
case 2369:
case 568:
case 1737:
case 120:
case 3586:
case 3990:
case 1303:
case 1837:
case 656:
case 3863:
case 1859:
case 1482:
case 2216:
case 691:
case 1381:
case 1411:
case 436:
case 3460:
case 1771:
case 1188:
case 1681:
case 1190:
case 52:
case 1612:
case 343:
case 1071:
case 3696:
case 2268:
case 845:
case 587:
case 559:
case 577:
case 2684:
case 1981:
case 2499:
case 648:
case 631:
case 1912:
case 1635:
case 2210:
case 496:
case 451:
case 2969:
case 1046:
case 237:
case 2273:
case 1562:
case 3555:
case 3078:
case 2307:
case 1113:
case 3676:
case 2833:
case 589:
case 2733:
case 3339:
case 3927:
case 1648:
case 2622:
case 1454:
case 1170:
case 514:
case 3357:
case 3941:
case 1102:
case 3302:
case 3976:
case 1220:
case 1862:
case 1529:
case 1157:
case 1762:
case 2293:
case 3880:
case 3098:
case 258:
case 3370:
case 2479:
case 2805:
case 2451:
case 2819:
case 2094:
case 2705:
case 3483:
case 2719:
case 3442:
case 960:
case 3613:
case 2794:
case 2005:
case 1176:
case 2144:
case 944:
case 2907:
case 1062:
case 3327:
case 3798:
case 3578:
case 3725:
case 1285:
case 3657:
case 1127:
case 2447:
case 1791:
case 2234:
case 3913:
case 1571:
case 1250:
case 1141:
case 1537:
case 299:
case 3902:
case 3563:
case 686:
case 3786:
case 3970:
case 2033:
case 1348:
case 3238:
case 509:
case 3639:
case 1674:
case 1201:
case 12:
case 2406:
case 3017:
case 138:
case 3915:
case 869:
case 3723:
case 2646:
case 1283:
case 159:
case 3632:
case 2937:
case 767:
case 4024:
case 993:
case 2671:
case 2204:
case 846:
case 2081:
case 2012:
case 3609:
case 2340:
case 899:
case 1507:
case 2637:
case 465:
case 1869:
case 2640:
case 3309:
case 198:
case 3485:
case 2548:
case 2337:
case 3544:
case 492:
case 4054:
case 2472:
case 2295:
case 2359:
case 2812:
case 2712:
case 3853:
case 655:
case 2940:
case 3332:
case 737:
case 2629:
case 788:
case 3431:
case 2346:
case 1242:
case 462:
case 3477:
case 2735:
case 2163:
case 1374:
case 2835:
case 1115:
case 3224:
case 3717:
case 2275:
case 1919:
case 2391:
case 685:
case 3553:
case 3844:
case 675:
case 2198:
case 3667:
case 1722:
case 245:
case 1569:
case 364:
case 2848:
case 1605:
case 2535:
case 1394:
case 1218:
case 1584:
case 837:
case 602:
case 3967:
case 758:
case 888:
case 2287:
case 1445:
case 394:
case 189:
case 2362:
case 2991:
case 1489:
case 1852:
case 114:
case 1752:
case 242:
case 3765:
case 1464:
case 1022:
case 2048:
case 1807:
case 1333:
case 96:
case 3119:
case 1994:
case 2180:
case 2691:
case 4011:
case 2155:
case 2380:
case 2870:
case 2802:
case 2027:
case 975:
case 2299:
case 2698:
case 3266:
case 2590:
case 2770:
case 2473:
case 429:
case 3752:
case 3305:
case 314:
case 1865:
case 3694:
case 3319:
case 3852:
case 2041:
case 3707:
case 1119:
case 323:
case 134:
case 2739:
case 3022:
case 1367:
case 2686:
case 2757:
case 473:
case 4060:
case 521:
case 2857:
case 1044:
case 1844:
case 2057:
case 972:
case 3905:
case 982:
case 774:
case 1194:
case 2776:
case 784:
case 2039:
case 2955:
case 2876:
case 3633:
case 1667:
case 2841:
case 3584:
case 3052:
case 3394:
case 3619:
case 3218:
case 2013:
case 3605:
case 66:
case 4066:
case 2741:
case 194:
case 3445:
case 2588:
case 309:
case 2191:
case 2680:
case 905:
case 2655:
case 2214:
case 2398:
case 2070:
case 754:
case 2796:
case 1450:
case 663:
case 2576:
case 1315:
case 3869:
case 1309:
case 2896:
case 1426:
case 1853:
case 2221:
case 3438:
case 1753:
case 3132:
case 2146:
case 1544:
case 307:
case 1023:
case 693:
case 2159:
case 722:
case 4001:
case 368:
case 2888:
case 2378:
case 1224:
case 3115:
case 2137:
case 1817:
case 2541:
case 924:
case 1477:
case 1017:
case 2493:
case 1565:
case 4042:
case 427:
case 32:
case 2513:
case 3201:
case 377:
case 2088:
case 2502:
case 359:
case 1723:
case 2890:
case 955:
case 47:
case 341:
case 118:
case 725:
case 1449:
case 3974:
case 2663:
case 2096:
case 412:
case 3069:
case 1208:
case 1254:
case 804:
case 2978:
case 1609:
case 2539:
case 2230:
case 1615:
case 1918:
case 907:
case 2199:
case 618:
case 2749:
case 3343:
case 3611:
case 419:
case 3000:
case 3072:
case 1568:
case 133:
case 313:
case 1618:
case 2856:
case 1490:
case 3561:
case 80:
case 1143:
case 2687:
case 1793:
case 3806:
case 1573:
case 1366:
case 2820:
case 1960:
case 1893:
case 827:
case 1093:
case 3943:
case 2597:
case 3435:
case 2020:
case 3006:
case 3160:
case 88:
case 2731:
case 2056:
case 2831:
case 3311:
case 783:
case 3412:
case 3382:
case 3118:
case 3772:
case 163:
case 2453:
case 3800:
case 4067:
case 1734:
case 959:
case 941:
case 938:
case 987:
case 2114:
case 404:
case 77:
case 2147:
case 2904:
case 85:
case 3061:
case 3954:
case 3908:
case 302:
case 2897:
case 530:
case 2121:
case 1073:
case 3232:
case 727:
case 1342:
case 2328:
case 3142:
case 2395:
case 1476:
case 2259:
case 979:
case 1816:
case 2271:
case 3448:
case 989:
case 3608:
case 3654:
case 3892:
case 3209:
case 425:
case 2237:
case 3792:
case 270:
case 753:
case 2444:
case 914:
case 1068:
case 1983:
case 664:
case 2549:
case 1457:
case 803:
case 3354:
case 417:
case 1868:
case 31:
case 2928:
case 3101:
case 1768:
case 2304:
case 2358:
case 4009:
case 909:
case 2695:
case 2151:
case 454:
case 305:
case 560:
case 128:
case 372:
case 2465:
case 1593:
case 382:
case 2097:
case 1413:
case 1383:
case 2628:
case 2520:
case 1710:
case 2995:
case 13:
case 3761:
case 2556:
case 1470:
case 4032:
case 1810:
case 3768:
case 11:
case 1354:
case 3868:
case 792:
case 3457:
case 735:
case 1183:
case 2407:
case 657:
case 2158:
case 1506:
case 506:
case 3413:
case 182:
case 940:
case 3642:
case 3383:
case 689:
case 3593:
case 2452:
case 328:
case 2889:
case 762:
case 172:
case 488:
case 2921:
case 1624:
case 3810:
case 251:
case 3470:
case 3108:
case 1761:
case 2045:
case 249:
case 33:
case 795:
case 467:
case 1324:
case 1061:
case 3010:
case 3601:
case 36:
case 2195:
case 3683:
case 2336:
case 732:
case 586:
case 1954:
case 2679:
case 1448:
case 2422:
case 765:
case 497:
case 3816:
case 3901:
case 3534:
case 2128:
case 1142:
case 3476:
case 2347:
case 3983:
case 1572:
case 2263:
case 2630:
case 1215:
case 236:
case 1654:
case 2951:
case 1209:
case 2979:
case 607:
case 2175:
case 556:
case 832:
case 393:
case 1435:
case 3093:
case 4019:
case 2699:
case 2314:
case 3666:
case 469:
case 3111:
case 3182:
case 3488:
case 895:
case 446:
case 1118:
case 1592:
case 1412:
case 1382:
case 698:
case 2999:
case 1311:
case 3834:
case 2187:
case 561:
case 2564:
case 548:
case 531:
case 835:
case 333:
case 3568:
case 892:
case 1072:
case 1267:
case 1000:
case 1682:
case 3143:
case 1561:
case 3490:
case 271:
case 62:
case 3205:
case 247:
case 281:
case 1706:
case 862:
case 3960:
case 1911:
case 2614:
case 3793:
case 3366:
case 3795:
case 3058:
case 3575:
case 1197:
case 3895:
case 1664:
case 235:
case 766:
case 2008:
case 1847:
case 186:
case 330:
case 502:
case 1989:
case 1747:
case 2491:
case 575:
case 1345:
case 847:
case 2661:
case 1514:
case 1079:
case 262:
case 1736:
case 3397:
case 1288:
case 1494:
case 232:
case 1290:
case 1779:
case 1599:
case 51:
case 1751:
case 4035:
case 1389:
case 3028:
case 1851:
case 1405:
case 3697:
case 390:
case 1879:
case 2168:
case 1645:
case 295:
case 2462:
case 1730:
case 2543:
case 736:
case 582:
case 2110:
case 4012:
case 1830:
case 2808:
case 3997:
case 360:
case 4081:
case 3758:
case 3095:
case 1945:
case 4003:
case 3189:
case 1364:
case 1021:
case 3804:
case 1433:
case 1213:
case 3950:
case 131:
case 3356:
case 148:
case 701:
case 1149:
case 1270:
case 1014:
case 1938:
case 3087:
case 1579:
case 524:
case 2306:
case 2972:
case 3320:
case 442:
case 4048:
case 3075:
case 2600:
case 1530:
case 2011:
case 2554:
case 2508:
case 2843:
case 3977:
case 836:
case 3649:
case 2782:
case 3326:
case 3248:
case 1131:
case 620:
case 2906:
case 2811:
case 1276:
case 866:
case 3920:
case 2471:
case 1547:
case 2459:
case 3595:
case 3875:
case 3409:
case 3385:
case 3956:
case 3949:
case 3787:
case 2134:
case 896:
case 1150:
case 1474:
case 851:
case 849:
case 161:
case 771:
case 3138:
case 203:
case 2760:
case 3276:
case 1920:
case 1649:
case 2860:
case 1248:
case 3338:
case 391:
case 1415:
case 1385:
case 1956:
case 3521:
case 2334:
case 2463:
case 1595:
case 3474:
case 1528:
case 1377:
case 3814:
case 3536:
case 2066:
case 1949:
case 361:
case 2818:
case 2478:
case 4002:
case 2718:
case 4070:
case 2172:
case 3241:
case 1432:
case 3149:
case 331:
case 1985:
case 1356:
case 1950:
case 920:
case 1631:
case 3213:
case 2501:
case 1320:
case 3938:
case 3551:
case 4041:
case 2393:
case 3270:
case 533:
case 3257:
case 1650:
case 2634:
case 1558:
case 2106:
case 273:
case 750:
case 3156:
case 1349:
case 1626:
case 3851:
case 2042:
case 190:
case 227:
case 1697:
case 3036:
case 2373:
case 3779:
case 2566:
case 4088:
case 2801:
case 2916:
case 2480:
case 2310:
case 2701:
case 3645:
case 770:
case 160:
case 1997:
case 306:
case 53:
case 1858:
case 3021:
case 1095:
case 3945:
case 56:
case 2486:
case 3664:
case 1281:
case 3721:
case 3197:
case 3821:
case 1004:
case 1795:
case 2910:
case 3747:
case 700:
case 2560:
case 2269:
case 1145:
case 386:
case 2668:
case 3296:
case 3847:
case 2973:
case 376:
case 59:
case 2284:
case 2498:
case 3345:
case 3689:
case 3494:
case 2083:
case 3736:
case 3079:
case 1828:
case 3051:
case 2673:
case 2553:
case 240:
case 2744:
case 3198:
case 1325:
case 3512:
case 996:
case 1416:
case 3748:
case 1039:
case 1955:
case 1876:
case 2211:
case 951:
case 2194:
case 1776:
case 3535:
case 2497:
case 1013:
case 2065:
case 1841:
case 3186:
case 3287:
case 1655:
case 3125:
case 2967:
case 1070:
case 74:
case 1680:
case 1027:
case 3461:
case 1590:
case 1770:
case 1380:
case 3991:
case 1041:
case 519:
case 2765:
case 936:
case 1998:
case 1686:
case 2243:
case 1839:
case 2119:
case 234:
case 600:
case 3180:
case 3691:
case 2420:
case 3035:
case 1513:
case 3971:
case 1140:
case 1251:
case 554:
case 2909:
case 1570:
case 2915:
case 2823:
case 1088:
case 3937:
case 2632:
case 1890:
case 3204:
case 3258:
case 3012:
case 2449:
case 3081:
case 1978:
case 444:
case 1230:
case 901:
case 3003:
case 2932:
case 522:
case 2485:
case 4058:
case 4004:
case 2315:
case 1896:
case 3929:
case 947:
case 1796:
case 1576:
case 3803:
case 1363:
case 3812:
case 743:
case 2544:
case 1146:
case 3472:
case 2426:
case 3400:
case 3178:
case 1221:
case 1888:
case 1378:
case 84:
case 1788:
case 3629:
case 3228:
case 2023:
case 2332:
case 1159:
case 2817:
case 2224:
case 1803:
case 3796:
case 1337:
case 3363:
case 3434:
case 3247:
case 326:
case 2869:
case 298:
case 567:
case 2522:
case 1548:
case 3221:
case 1781:
case 486:
case 1178:
case 3146:
case 1371:
case 2132:
case 1812:
case 476:
case 3159:
case 1629:
case 207:
case 1346:
case 1228:
case 3378:
case 1940:
case 268:
case 597:
case 601:
case 1735:
case 3137:
case 2084:
case 4036:
case 950:
case 3513:
case 1035:
case 2201:
case 647:
case 1406:
case 1329:
case 1646:
case 3890:
case 2283:
case 277:
case 3963:
case 238:
case 3790:
case 241:
case 287:
case 3279:
case 4047:
case 1659:
case 1671:
case 1204:
case 3096:
case 3230:
case 1003:
case 431:
case 3410:
case 279:
case 3770:
case 3355:
case 3986:
case 1461:
case 3299:
case 3802:
case 2752:
case 980:
case 3813:
case 142:
case 2319:
case 3713:
case 1991:
case 2489:
case 970:
case 3041:
case 2852:
case 649:
case 214:
case 3076:
case 2707:
case 558:
case 539:
case 3686:
case 2464:
case 2807:
case 916:
case 820:
case 1691:
case 1180:
case 3057:
case 1581:
case 1512:
case 1492:
case 1275:
case 2905:
case 456:
case 1391:
case 491:
case 3980:
case 3596:
case 2007:
case 1848:
case 2260:
case 1503:
case 3876:
case 2633:
case 3039:
case 145:
case 569:
case 2584:
case 3013:
case 2218:
case 461:
case 2445:
case 3588:
case 2933:
case 1125:
case 3070:
case 3727:
case 1123:
case 2059:
case 317:
case 3653:
case 2190:
case 2443:
case 3015:
case 3567:
case 798:
case 1669:
case 1268:
case 354:
case 405:
case 2037:
case 1505:
case 1210:
case 903:
case 1519:
case 1684:
case 482:
case 1499:
case 2562:
case 2046:
case 1969:
case 137:
case 707:
case 2729:
case 738:
case 741:
case 857:
case 2746:
case 3623:
case 4061:
case 759:
case 1153:
case 167:
case 2297:
case 2029:
case 3732:
case 72:
case 983:
case 1874:
case 1384:
case 1414:
case 3715:
case 2040:
case 1117:
case 3709:
case 2837:
case 3923:
case 1369:
case 197:
case 475:
case 3475:
case 2591:
case 2771:
case 2759:
case 2188:
case 2859:
case 325:
case 2871:
case 1216:
case 2381:
case 3428:
case 2231:
case 1794:
case 2176:
case 714:
case 1894:
case 82:
case 4006:
case 662:
case 789:
case 859:
case 1144:
case 2546:
case 1907:
case 3532:
case 169:
case 2277:
case 927:
case 1447:
case 1234:
case 2791:
case 2571:
case 3344:
case 635:
case 1952:
case 146:
case 3200:
case 3515:
case 3509:
case 2141:
case 3272:
case 723:
case 3152:
case 1733:
case 2249:
case 1165:
case 384:
case 1307:
case 1833:
case 90:
case 3404:
case 898:
case 374:
case 542:
case 3644:
case 2091:
case 319:
case 2454:
case 4072:
case 915:
case 665:
case 1430:
case 2157:
case 1293:
case 2948:
case 2862:
case 2529:
case 709:
case 452:
case 3944:
case 1705:
case 1094:
case 3107:
case 1719:
case 1805:
case 1451:
case 1819:
case 2139:
case 2256:
case 1352:
case 764:
case 1458:
case 3833:
case 3307:
case 4034:
case 3622:
case 2357:
case 433:
case 2025:
case 1644:
case 2941:
case 740:
case 2855:
case 24:
case 339:
case 1206:
case 2627:
case 221:
case 3819:
case 3479:
case 2483:
case 3719:
case 2313:
case 2641:
case 3094:
case 3705:
case 67:
case 2148:
case 1665:
case 3894:
case 3652:
case 3436:
case 1428:
case 3574:
case 60:
case 3005:
case 2602:
case 1532:
case 3907:
case 2898:
case 3144:
case 615:
case 965:
case 2939:
case 2670:
case 2327:
case 346:
case 3952:
case 1:
case 2913:
case 3607:
case 1272:
case 104:
case 2563:
case 734:
case 2886:
case 2238:
case 995:
case 1067:
case 3322:
case 3033:
case 1732:
case 2418:
case 526:
case 4010:
case 1832:
case 308:
case 2598:
case 46:
case 1487:
case 2103:
case 3874:
case 4073:
case 3594:
case 2245:
case 2763:
case 397:
case 2396:
case 1815:
case 1923:
case 603:
case 1709:
case 3117:
case 834:
case 1184:
case 4068:
case 718:
case 125:
case 3216:
case 2460:
case 1353:
case 2264:
case 1917:
case 3984:
case 117:
case 3123:
case 4016:
case 154:
case 2988:
case 3669:
case 3268:
case 2696:
case 673:
case 1009:
case 864:
case 683:
case 1261:
case 1617:
case 2466:
case 3684:
case 1953:
case 2289:
case 388:
case 1032:
case 1323:
case 2688:
case 3969:
case 2580:
case 629:
case 337:
case 2078:
case 378:
case 1018:
case 15:
case 997:
case 3429:
case 1501:
case 3265:
case 1252:
case 2356:
case 2087:
case 1393:
case 3900:
case 622:
case 129:
case 2677:
case 1583:
case 967:
case 617:
case 2075:
case 2931:
case 2504:
case 1106:
case 2558:
case 3440:
case 908:
case 2685:
case 3508:
case 211:
case 183:
case 2349:
case 2626:
case 763:
case 654:
case 1860:
case 3043:
case 1760:
case 937:
case 1334:
case 1463:
case 2775:
case 2595:
case 2415:
case 464:
case 978:
case 2875:
case 550:
case 2787:
case 1693:
case 2887:
case 4065:
case 3134:
case 3606:
case 2620:
case 3446:
case 2331:
case 1172:
case 2432:
case 1818:
case 2656:
case 2138:
case 494:
case 939:
case 2058:
case 2795:
case 2004:
case 1910:
case 2212:
case 2281:
case 958:
case 392:
case 3582:
case 3511:
case 1560:
case 1668:
case 10:
case 1518:
case 1001:
case 73:
case 4023:
case 3661:
case 1284:
case 362:
case 728:
case 2828:
case 570:
case 115:
case 580:
case 1742:
case 1566:
case 2164:
case 500:
case 2028:
case 3992:
case 2697:
case 127:
case 4017:
case 1783:
case 76:
case 3168:
case 1701:
case 3462:
case 18:
case 3361:
case 1916:
case 3708:
case 1161:
case 4053:
case 684:
case 260:
case 2997:
case 1368:
case 2189:
case 79:
case 2758:
case 2095:
case 2704:
case 112:
case 2804:
case 1616:
case 2036:
case 3042:
case 639:
case 327:
case 2290:
case 42:
case 3883:
case 2779:
case 3373:
case 2751:
case 3566:
case 1361:
case 3455:
case 477:
case 1024:
case 487:
case 438:
case 3310:
case 2830:
case 596:
case 2047:
case 1808:
case 353:
case 549:
case 2364:
case 165:
case 1173:
case 4069:
case 312:
case 785:
case 2945:
case 2721:
case 3316:
case 2821:
case 3910:
case 3269:
case 699:
case 3668:
case 2296:
case 1392:
case 1491:
case 3560:
case 276:
case 3425:
case 1008:
case 3284:
case 3498:
case 407:
case 1724:
case 2964:
case 813:
case 974:
case 3001:
case 468:
case 1824:
case 3192:
case 3518:
case 669:
case 3742:
case 2689:
case 782:
case 536:
case 852:
case 2288:
case 1116:
case 2079:
case 2051:
case 1811:
case 697:
case 1471:
case 2547:
case 1043:
case 1300:
case 3860:
case 2521:
case 4007:
case 291:
case 3463:
case 805:
case 1244:
case 501:
case 3334:
case 1134:
case 667:
case 2814:
case 917:
case 2474:
case 2185:
case 608:
case 2714:
case 752:
case 2099:
case 882:
case 2126:
case 3100:
case 3818:
case 2241:
case 3718:
case 713:
case 1446:
case 3172:
case 231:
case 248:
case 1265:
case 489:
case 3934:
case 3018:
case 688:
case 2899:
case 1306:
case 329:
case 637:
case 3866:
case 1900:
case 2270:
case 2014:
case 414:
case 2551:
case 1193:
case 885:
case 547:
case 581:
case 875:
case 4022:
case 3634:
case 3106:
case 1843:
case 3207:
case 1600:
case 1743:
case 2156:
case 1508:
case 1554:
case 2638:
case 1082:
case 2239:
case 1745:
case 848:
case 3904:
case 3531:
case 316:
case 4029:
case 2324:
case 3121:
case 2908:
case 3897:
case 1679:
case 3246:
case 3328:
case 3577:
case 3797:
case 1336:
case 3604:
case 4040:
case 2142:
case 3395:
case 3550:
case 275:
case 1321:
case 1064:
case 645:
case 2500:
case 3526:
case 136:
case 2654:
case 2892:
case 1263:
case 2308:
case 776:
case 786:
case 2101:
case 1936:
case 21:
case 2092:
case 1647:
case 3928:
case 2183:
case 3695:
case 1407:
case 1864:
case 3304:
case 1621:
case 2924:
case 205:
case 3179:
case 1764:
case 3151:
case 1351:
case 3465:
case 1452:
case 272:
case 1636:
case 1104:
case 1158:
case 3520:
case 3229:
case 1947:
case 710:
case 2624:
case 1921:
case 3130:
case 2761:
case 3675:
case 3050:
case 2166:
case 1564:
case 791:
case 3199:
case 2611:
case 2000:
case 2343:
case 2682:
case 1038:
case 3987:
case 876:
case 147:
case 2561:
case 171:
case 926:
case 810:
case 2806:
case 1399:
case 252:
case 2982:
case 1255:
case 2706:
case 1589:
case 3077:
case 2943:
case 3387:
case 3877:
case 1484:
case 1298:
case 2006:
case 3777:
case 3597:
case 2435:
case 2160:
case 4062:
case 3056:
case 3726:
case 2382:
case 2643:
case 1286:
case 2872:
case 2311:
case 2800:
case 806:
case 2118:
case 2592:
case 3885:
case 3114:
case 1187:
case 3850:
case 2403:
case 1597:
case 293:
case 1777:
case 3175:
case 3699:
case 3484:
case 1417:
case 1056:
case 4080:
case 2182:
case 2111:
case 1731:
case 2294:
case 2318:
case 3545:
case 263:
case 1453:
case 2360:
case 1826:
case 3999:
case 1049:
case 711:
case 2966:
case 626:
case 1726:
case 1785:
case 844:
case 3564:
case 1199:
case 1050:
case 2918:
case 2034:
case 1675:
case 1849:
case 4025:
case 1749:
case 3038:
case 3914:
case 44:
case 2490:
case 381:
case 2618:
case 1856:
case 2205:
case 347:
case 2510:
case 421:
case 3280:
case 2893:
case 3255:
case 1687:
case 2573:
case 3399:
case 2366:
case 1820:
case 2942:
case 1928:
case 3647:
case 2768:
case 730:
case 3330:
case 443:
case 1240:
case 57:
case 1151:
case 3764:
case 2016:
case 3621:
case 2439:
case 4063:
case 1358:
case 3407:
case 1695:
case 2413:
case 1229:
case 2383:
case 2642:
case 3789:
case 3947:
case 2873:
case 1520:
case 3889:
case 553:
case 1465:
case 3351:
case 2593:
case 351:
case 1556:
case 1130:
case 2810:
case 512:
case 3045:
case 1995:
case 4078:
case 349:
case 2427:
case 3845:
case 1147:
case 2010:
case 3745:
case 2601:
case 1904:
case 2274:
case 790:
case 3089:
case 1328:
case 1246:
case 3651:
case 3278:
case 1897:
case 2716:
case 3422:
case 1585:
case 3128:
case 2476:
case 29:
case 1259:
case 1604:
case 1658:
case 2534:
case 744:
case 170:
case 760:
case 1444:
case 3347:
case 3538:
case 942:
case 3979:
case 1526:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1751623202/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,1,0,0,1,0,0,1,0,0,0,0,1,0,1,1,1,0,0,1,0,0,0,0,0,1,0,1,0,1,1,0,0,0,1,1,1,0,0,1,1,0,1,1,0,1,0,0,0,1,1,0,0,0,0,1,1,1,0,1,1,0,1,1,0,1,0,1,1,0,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,1,0,1,1,0,1,1,0,0,0,1,0,1,1,1,0,1,0,1,1,0,1,1,1,0,0,0,1,0,0,1,1,1,1,0,0,0,0,0,1,0,0,0,0,1,1,1,0,1,0,1,0,1,0,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,1,0,0,1,1,0,0,0,1,0,0,1,1,0,0,0,0,1,1,1,0,1,1,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,1,0,1,1,1,1,1,0,1,1,1,0,0,1,0,1,1,1,0,1,1,0,0,0,0,0,1,0,1,0,1,1,0,0,0,0,1,0,1,1,1,1,0,1,1,1,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,1,0,1,0,0,1,1,0,0,1,0,0,1,1,1,1,1,0,0,1,1,1,0,1,1,0,1,0,0,0,1,0,1,1,1,1,1,1,1,0,1,0,0,0,1,0,1,0,1,0,1,0,0,1,1,0,1,0,1,0,1,1,0,0,0,0,1,1,1,1,0,1,0,0,0,1,0,0,0,1,0,1,0,1,1,1,0,0,1,1,0,1,0,1,0,1,0,1,1,1,1,1,0,0,1,0,0,1,0,0,0,1,1,0,1,0,0,0,0,1,0,1,0,0,1,0,1,0,1,0,0,0,1,0,1,0,1,0,1,0,1,0,0,1,0,1,0,0,0,1,1,1,0,1,0,0,0,1,1,1,0,1,0,1,0,0,0,0,1,1,0,1,1,0,1,1,1,1,0,0,1,0,1,1,1,0,0,1,0,1,0,0,0,1,1,1,1,0,1,1,0,1,0,1,1,0,0,1,1,1,0,0,0,1,0,0,1,0,0,1,0,1,0,0,0,0,1,0,1,1,0,1,0,1,0,0,0,1,1,0,1,1,0,1,0,0,1,1,0,1,0,0,0,0,1,1,1,1,0,0,1,1,0,1,0,1,1,1,1,0,0,0,0,0,1,1,1,1,0,0,0,0,1,0,1,0,0,1,1,1,0,0,0,1,1,0,1,0,0,0,0,1,0,1,1,0,0,1,1,1,1,0,0,0,1,1,0,0,0,0,0,0,1,0,1,1,0,1,0,1,0,0,0,1,0,0,1,0,1,0,0,0,1,0,1,0,1,0,0,0,0,1,1,0,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,1,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,1,1,1,1,0,1,1,0,1,0,1,0,0,0,1,1,1,1,1,0,0,0,0,0,1,0,1,1,1,0,1,1,0,0,0,1,0,0,0,1,1,0,1,1,1,1,0,1,0,1,0,1,1,1,1,1,0,1,1,0,1,1,0,0,0,0,0,1,0,1,1,1,0,0,0,1,1,1,0,1,1,1,1,1,1,0,0,1,1,0,0,1,0,1,0,0,0,0,0,1,1,1,1,1,0,1,1,1,1,1,0,0,1,0,0,1,0,0,0,0,1,1,1,1,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,1,0,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,0,1,1,0,0,0,0,1,0,1,0,0,1,0,1,0,1,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,1,1,0,1,1,0,1,0,1,0,1,0,1,1,1,1,1,0,0,1,1,1,1,0,0,1,0,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,1,0,0,1,1,0,1,1,0,0,0,1,0,0,1,1,1,0,0,0,0,1,0,1,0,0,1,0,1,0,1,1,0,0,1,1,1,0,1,1,0,0,1,1,0,1,0,1,0,1,0,1,1,1,0,0,1,1,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,1,1,0,0,1,1,1,1,1,0,1,0,1,0,0,1,0,0,1,0,0,1,1,0,1,0,1,1,0,1,0,0,1,1,0,0,0,0,0,1,0,0,0,0,1,1,0,1,0,0,1,1,0,1,1,1,1,0,0,0,0,0,1,1,0,1,0,0,0,1,0,1,0,0,0,0,1,1,1,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,1,1,0,1,1,1,1,1,0,0,0,1,0,1,0,1,0,0,1,1,0,0,1,1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,0,0,1,1,1,0,1,0,0,0,1,0,0,0,0,1,0,1,1,0,0,1,0,1,0,1,0,0,1,1,0,0,1,1,0,1,0,0,1,1,0,1,1,0,1,0,1,0,0,1,0,1,0,1,1,1,0,0,1,0,1,1,0,1,0,1,1,0,0,1,0,0,0,1,1,1,0,0,0,1,0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,1,1,1,0,1,1,0,0,0,1,0,1,0,1,1,1,0,1,1,0,1,0,1,0,0,1,1,0,0,0,0,1,0,1,1,1,1,0,1,0,1,0,0,1,0,0,0,1,1,0,1,0,0,1,0,0,1,1,0,1,0,1,0,1,0,1,0,0,0,0,1,1,0,1,1,1,0,0,1,1,0,0,0,1,1,0,1,1,0,1,0,1,1,0,0,1,1,0,1,1,0,1,1,1,1,0,1,0,1,0,0,1,0,1,1,0,1,1,1,1,1,1,0,0,1,0,0,1,1,0,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,0,0,0,0,1,0,1,0,0,0,1,1,1,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,1,0,1,0,0,0,0,0,0,1,0,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,0,0,1,0,1,1,1,0,0,0,0,1,1,0,0,1,0,1,1,0,0,0,0,1,0,1,0,0,1,0,1,1,1,1,0,1,0,0,0,0,1,0,1,0,1,0,1,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0,0,1,0,1,1,1,0,1,0,0,0,0,1,0,0,0,0,0,0,1,0,0,1,1,0,0,0,0,0,1,0,1,0,1,0,1,1,1,0,1,1,1,0,1,1,1,1,1,1,0,0,1,0,0,1,0,1,0,1,1,1,0,0,0,1,1,0,1,1,0,1,0,1,1,1,1,0,1,0,1,1,0,0,0,1,0,0,1,1,0,1,1,1,1,0,0,1,0,0,1,0,1,1,0,1,0,1,0,0,0,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,1,1,0,1,1,1,0,0,0,0,1,1,0,1,1,1,1,1,0,0,1,1,1,0,0,1,1,1,1,0,1,0,1,1,0,0,1,1,0,1,0,1,0,1,0,0,0,1,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,1,0,0,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,1,1,0,1,1,1,0,1,0,1,1,1,0,0,0,0,0,0,1,1,1,0,1,0,0,0,1,0,1,1,0,0,0,0,1,1,0,1,1,1,0,1,0,1,1,0,1,0,0,1,0,1,1,1,1,0,0,0,0,0,0,1,0,1,0,1,1,0,1,1,1,0,0,1,1,1,1,1,1,0,0,0,1,1,1,0,1,0,1,0,1,1,0,0,0,1,0,1,0,1,0,1,1,0,1,1,1,1,0,1,1,1,0,1,1,0,1,1,1,0,1,1,1,1,0,0,1,1,0,0,0,0,1,0,1,0,0,1,0,0,0,0,0,0,1,0,1,0,1,0,0,1,1,0,1,1,0,0,1,0,1,0,1,0,0,1,0,0,1,1,1,1,0,0,1,1,1,1,1,1,0,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,1,1,1,0,0,0,1,0,1,0,1,1,0,1,1,1,1,1,0,0,0,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0,1,0,1,0,1,0,0,1,1,0,1,0,0,1,1,1,1,1,0,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,0,0,1,0,1,0,1,1,1,0,0,0,1,1,0,1,1,0,1,1,1,1,0,0,1,1,1,1,0,0,1,0,0,0,0,1,1,1,1,0,0,0,0,0,1,1,1,0,0,1,0,0,0,0,1,0,0,1,1,0,1,0,1,1,0,0,1,1,0,0,1,1,0,1,1,1,1,0,1,0,1,0,1,0,0,1,0,0,0,1,1,0,0,1,0,0,0,1,1,0,1,0,0,0,0,1,0,1,0,0,0,1,0,1,0,0,1,1,1,0,1,1,0,1,0,1,1,1,0,0,1,0,0,0,1,1,1,1,1,1,0,0,1,1,0,1,0,1,0,0,0,1,0,0,1,1,0,0,0,1,0,1,1,1,1,0,1,1,1,1,1,0,0,1,1,0,0,1,1,0,1,0,0,1,1,1,0,0,0,1,1,1,0,1,0,1,0,1,0,0,1,0,0,1,0,0,0,0,0,1,1,0,0,1,0,0,1,1,1,0,1,0,1,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0,1,1,0,0,1,1,0,0,0,1,1,1,1,0,1,1,1,0,1,0,0,0,1,0,1,1,0,0,1,1,1,1,0,1,1,1,1,1,1,0,1,0,0,0,0,1,0,1,1,1,0,1,1,0,1,1,1,0,1,1,1,0,0,0,1,1,0,0,1,1,0,0,1,1,0,1,0,1,1,0,0,1,0,0,1,1,0,1,1,0,1,0,0,0,1,0,0,1,1,1,1,1,0,1,0,1,0,1,0,0,1,0,0,0,1,0,0,0,0,1,0,1,1,1,1,1,0,0,0,0,0,0,1,0,1,0,1,1,0,1,0,0,0,0,1,0,0,1,1,0,0,0,0,0,1,0,1,0,0,1,0,1,0,1,0,0,0,1,1,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,1,1,1,0,1,0,1,0,1,1,1,1,0,0,0,1,1,1,0,1,1,1,1,1,0,0,0,0,1,1,1,1,0,1,0,1,1,1,0,0,1,0,1,1,0,0,1,1,1,0,1,0,0,0,1,1,1,1,1,1,0,1,0,0,0,1,1,1,0,0,1,0,1,0,0,0,0,1,1,1,0,0,0,0,0,0,1,0,0,1,0,1,1,0,0,0,1,0,1,0,1,1,0,1,1,1,1,0,1,0,1,1,0,1,0,1,0,1,1,1,1,1,0,1,0,0,0,0,1,0,1,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,1,1,1,1,0,1,0,1,1,0,1,1,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,1,0,1,0,1,1,1,0,1,1,1,1,1,0,1,1,1,0,0,1,1,0,1,1,1,1,1,0,1,0,0,0,0,0,0,1,1,1,1,0,0,0,0,1,0,1,0,1,0,0,1,0,1,1,0,1,0,0,0,1,0,1,1,0,1,0,1,1,1,1,1,1,0,1,0,0,0,1,1,1,1,1,0,1,0,0,1,1,1,1,0,0,0,0,1,0,1,1,1,0,1,1,0,1,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,0,0,1,0,1,0,0,1,0,1,0,0,1,0,1,1,0,0,0,0,1,1,1,1,1,0,1,0,1,0,0,1,0,1,1,0,0,1,1,1,0,0,1,0,0,1,0,0,0,0,1,0,0,0,1,0,0,1,1,1,0,0,0,1,1,1,0,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,0,0,0,0,1,0,1,1,0,1,0,1,0,1,0,0,0,1,0,1,0,0,0,0,1,0,0,0,1,0,0,1,1,1,0,1,1,0,1,0,0,0,0,1,0,1,1,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,1,0,0,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,0,0,1,0,1,1,1,1,0,0,1,0,1,1,0,0,0,1,0,0,1,1,1,0,0,0,1,0,1,1,1,1,1,0,1,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,1,1,0,1,0,0,1,1,0,0,0,0,1,1,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,1,0,1,0,1,1,1,0,1,0,1,1,0,0,0,1,0,1,1,0,1,0,1,1,0,0,1,1,0,0,0,0,0,1,0,0,0,0,1,0,1,1,1,1,1,0,1,1,1,0,1,1,0,0,0,1,1,1,0,0,0,1,1,1,1,0,1,1,0,0,0,0,0,0,1,1,1,1,0,0,1,1,1,1,1,0,1,0,0,0,0,0,1,0,1,0,0,0,1,1,1,1,0,1,0,1,1,0,0,0,0,1,1,1,0,0,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1,1,0,1,0,1,0,1,1,0,1,1,1,0,1,1,1,1,0,1,0,0,1,0,1,1,0,0,0,1,0,0,1,1,0,0,0,0,0,0,0,1,0,1,0,1,0,0,1,1,0,1,1,1,1,1,0,0,0,1,0,1,1,0,0,1,0,0,0,0,1,1,1,1,1,0,0,1,1,0,1,0,1,0,0,0,1,0,0,1,0,1,0,0,1,0,0,1,0,0,0,1,1,1,1,1,0,0,0,0,0,1,0,0,1,0,0,0,1,1,1,1,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,1,1,0,1,1,1,0,1,0,0,0,1,0,1,1,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,1,0,1,0,0,1,1,1,1,0,1,0,1,1,1,1,0,0,0,1,0,0,1,1,0,1,0,0,0,1,1,1,0,1,0,1,0,1,1,0,0,1,1,0,0,0,1,1,1,0,1,1,0,0,1,0,0,1,1,1,1,0,0,0,1,0,1,0,0,1,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,1,1,0,1,0,1,1,0,0,0,0,0,1,1,0,1,0,1,1,0,0,0,1,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,1,1,0,1,0,1,0,1,1,0,1,1,0,1,0,0,0,0,0,1,1,0,1,0,0,1,1,1,1,0,1,0,0,0,0,1,0,1,0,1,1,1,1,0,1,0,0,1,1,1,1,0,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,1,1,1,0,1,0,0,1,0,1,1,0,0,0,0,1,0,0,0,0,1,1,0,1,1,1,0,1,0,1,0,0,0,1,1,1,0,0,0,1,1,0,1,0,1,0,0,0,1,1,1,1,1,1,0,1,1,1,0,0,1,0,0,1,1,0,1,1,0,0,0,1,0,1,0,1,0,1,0,0,1,0,1,1,1,1,1,0,0,0,1,0,0,1,1,1,1,1,1,0,1,0,1,0,0,0,0,0,1,0,1,1,1,0,0,0,0,0,1,0,0,1,1,1,0,0,0,0,1,0,0,1,0,1,1,0,1,1,1,0,1,1,1,1,0,0,1,0,0,0,1,0,0,1,0,1,1,1,1,0,0,0,0,0,1,1,0,0,0,0,1,0,1,1,0,1,0,0,1,1,1,0,0,1,1,1,1,0,1,0,0,0,0,0,1,0,1,1,1,0,0,0,1,0,1,0,1,1,1,0,1,0,1,0,1,1,1,0,1,0,0,1,0,0,0,1,0,0,0,1,0,1,0,0,1,1,1,1,0,0,0,1,0,0,0,0,0,1,0,0,1,0,1,1,1,0,0,1,0,1,0,1,0,0,0,0,1,0,1,0,0,0,0,0,0,1,1,0,1,1,0,1,1,0,1,1,1,1,0,1,0,1,1,1,0,1,0,0,0,1,0,1,1,1,0,1,0,1,1,0,1,0,0,0,0,0,0,0,1,0,0,0,1,1,0,0,1,0,0,1,0,0,0,1,1,0,1,0,0,1,1,1,1,0,0,0,0,0,1,1,0,0,1,0,0,1,0,1,1,0,0,0,0,1,1,1,1,1,0,1,0,0,1,0,1,0,0,0,1,1,0,1,0,1,1,0,1,0,0,1,1,1,0,1,1,0,1,1,0,1,0,0,1,1,1,0,0,0,0,1,0,0,1,0,0,0,1,1,1,0,0,0,0,1,0,0,1,1,0,0,1,0,1,1,1,0,1,0,1,1,0,1,0,1,0,1,0,0,0,1,0,0,1,0,0,0,1,0,1,1,1,0,0,1,0,1,1,0,1,1,0,0,1,1,0,1,1,0,0,1,1,1,0,0,0,0,1,0,1,0,1,1,1,1,0,1,1,0,1,1,1,1,0,0,0,1,1,0,1,0,0,1,1,1,1,0,0,0,1,0,1,1,0,1,1,1,0,0,0,1,1,1,0,0,0,0,1,1,1,0,0,0,1,1,0,1,0,1,0,1,1,1,1,0,1,1,1,1,1,1,0,1,1,0,0,0,1,1,0,1,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,];
var gg_b = "1751623202/";

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
