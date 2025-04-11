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
case 3895:
case 2492:
case 4000:
case 2604:
case 3330:
case 2754:
case 3096:
case 1506:
case 3191:
case 1456:
case 648:
case 2971:
case 231:
case 1923:
case 2887:
case 3918:
case 3621:
case 552:
case 275:
case 1983:
case 1107:
case 1135:
case 3681:
case 449:
case 4055:
case 313:
case 2083:
case 136:
case 1268:
case 1277:
case 1627:
case 4090:
case 2147:
case 180:
case 3645:
case 3365:
case 3837:
case 2552:
case 3805:
case 4078:
case 1071:
case 1119:
case 1176:
case 218:
case 2246:
case 4067:
case 3006:
case 2694:
case 1711:
case 3873:
case 2124:
case 1644:
case 830:
case 2413:
case 2546:
case 886:
case 84:
case 96:
case 1160:
case 2320:
case 1296:
case 593:
case 1568:
case 3952:
case 861:
case 2184:
case 43:
case 1325:
case 1213:
case 2165:
case 1794:
case 1139:
case 2611:
case 2928:
case 1731:
case 748:
case 3347:
case 2988:
case 1385:
case 3092:
case 285:
case 687:
case 2727:
case 3690:
case 274:
case 1452:
case 179:
case 943:
case 3588:
case 1513:
case 2433:
case 506:
case 3899:
case 2854:
case 796:
case 2744:
case 1418:
case 2538:
case 3310:
case 2406:
case 3423:
case 876:
case 1172:
case 3750:
case 897:
case 2130:
case 1592:
case 3942:
case 2391:
case 2263:
case 1661:
case 3705:
case 311:
case 170:
case 926:
case 1811:
case 4021:
case 1028:
case 3773:
case 3956:
case 3938:
case 3013:
case 3809:
case 3334:
case 2600:
case 2840:
case 3563:
case 2483:
case 862:
case 827:
case 3130:
case 942:
case 2310:
case 868:
case 948:
case 80:
case 2773:
case 333:
case 1721:
case 1335:
case 1878:
case 996:
case 2013:
case 1307:
case 1129:
case 2938:
case 2649:
case 2369:
case 2705:
case 743:
case 2737:
case 3263:
case 819:
case 901:
case 1189:
case 2963:
case 400:
case 857:
case 2092:
case 3301:
case 3861:
case 3988:
case 2288:
case 1376:
case 238:
case 1319:
case 551:
case 3928:
case 608:
case 3165:
case 3787:
case 1849:
case 1913:
case 57:
case 116:
case 1609:
case 1759:
case 1038:
case 232:
case 41:
case 3433:
case 726:
case 2384:
case 3744:
case 3477:
case 2120:
case 1360:
case 1640:
case 409:
case 1800:
case 2795:
case 810:
case 1164:
case 2324:
case 1778:
case 318:
case 3023:
case 3631:
case 2873:
case 2101:
case 1018:
case 4011:
case 2946:
case 1821:
case 2006:
case 495:
case 312:
case 1968:
case 1339:
case 3552:
case 2837:
case 987:
case 2365:
case 1695:
case 2952:
case 3380:
case 369:
case 2740:
case 3413:
case 3320:
case 1428:
case 708:
case 3604:
case 2571:
case 1372:
case 702:
case 592:
case 3110:
case 1700:
case 3492:
case 1650:
case 384:
case 2717:
case 3827:
case 741:
case 3169:
case 375:
case 213:
case 1755:
case 1605:
case 2077:
case 903:
case 626:
case 3887:
case 1859:
case 3971:
case 1141:
case 2271:
case 76:
case 546:
case 1906:
case 3187:
case 3619:
case 176:
case 3676:
case 3043:
case 1841:
case 1751:
case 2685:
case 1601:
case 3765:
case 314:
case 3127:
case 3975:
case 283:
case 2275:
case 799:
case 1432:
case 1311:
case 2195:
case 870:
case 3912:
case 2720:
case 2575:
case 2466:
case 3526:
case 47:
case 1974:
case 3340:
case 3660:
case 2780:
case 2293:
case 2714:
case 2408:
case 1262:
case 2074:
case 39:
case 3993:
case 2354:
case 790:
case 3730:
case 3399:
case 4072:
case 594:
case 500:
case 3757:
case 271:
case 4015:
case 1086:
case 879:
case 1825:
case 388:
case 25:
case 637:
case 3317:
case 235:
case 2258:
case 2173:
case 2801:
case 2236:
case 1885:
case 2641:
case 2361:
case 2820:
case 3222:
case 3710:
case 699:
case 944:
case 3070:
case 1864:
case 880:
case 3350:
case 48:
case 3282:
case 2579:
case 2982:
case 446:
case 3098:
case 3154:
case 1493:
case 3337:
case 1851:
case 3582:
case 3979:
case 130:
case 1149:
case 1208:
case 3053:
case 186:
case 3615:
case 1155:
case 161:
case 2117:
case 4007:
case 4035:
case 2689:
case 315:
case 690:
case 1394:
case 604:
case 1570:
case 1725:
case 3747:
case 2387:
case 423:
case 1331:
case 2532:
case 281:
case 1266:
case 1598:
case 2701:
case 2651:
case 3474:
case 3639:
case 3948:
case 1253:
case 2109:
case 266:
case 234:
case 378:
case 4076:
case 1829:
case 2327:
case 737:
case 139:
case 1298:
case 1680:
case 4060:
case 1553:
case 1082:
case 1403:
case 3395:
case 2814:
case 3724:
case 2140:
case 2664:
case 1475:
case 2232:
case 2008:
case 4085:
case 2639:
case 3701:
case 2474:
case 1016:
case 3327:
case 278:
case 1953:
case 1815:
case 4025:
case 540:
case 555:
case 3532:
case 620:
case 2:
case 53:
case 744:
case 3387:
case 2747:
case 3140:
case 2932:
case 645:
case 650:
case 2830:
case 3344:
case 3664:
case 1970:
case 1426:
case 2724:
case 1998:
case 2395:
case 3880:
case 3734:
case 3199:
case 2350:
case 3791:
case 3443:
case 452:
case 2222:
case 2672:
case 3820:
case 3922:
case 1630:
case 422:
case 659:
case 1321:
case 2522:
case 2066:
case 2615:
case 215:
case 2769:
case 617:
case 1707:
case 1657:
case 1735:
case 1048:
case 2865:
case 1839:
case 428:
case 1381:
case 2305:
case 3216:
case 3629:
case 3462:
case 2730:
case 1012:
case 2884:
case 1610:
case 1772:
case 644:
case 2399:
case 3714:
case 1962:
case 3558:
case 3293:
case 1104:
case 816:
case 32:
case 1300:
case 1860:
case 3408:
case 3536:
case 1482:
case 2936:
case 1943:
case 335:
case 1003:
case 1819:
case 1876:
case 35:
case 3593:
case 3641:
case 3361:
case 3801:
case 2958:
case 3173:
case 2635:
case 371:
case 282:
case 1422:
case 554:
case 2847:
case 3137:
case 3105:
case 990:
case 1367:
case 2869:
case 2975:
case 3470:
case 2127:
case 1807:
case 162:
case 2286:
case 127:
case 3625:
case 2043:
case 2676:
case 168:
case 2903:
case 2187:
case 2765:
case 3685:
case 1194:
case 1058:
case 4051:
case 3926:
case 3203:
case 2144:
case 1274:
case 1093:
case 3780:
case 10:
case 3503:
case 2912:
case 2586:
case 157:
case 2697:
case 3466:
case 119:
case 3720:
case 3212:
case 2810:
case 984:
case 2069:
case 1947:
case 975:
case 1464:
case 2313:
case 1007:
case 855:
case 611:
case 3177:
case 2420:
case 83:
case 3168:
case 303:
case 2766:
case 2919:
case 430:
case 1201:
case 2285:
case 931:
case 2603:
case 2753:
case 198:
case 3133:
case 1748:
case 3626:
case 3276:
case 3219:
case 1858:
case 3196:
case 2585:
case 3260:
case 2862:
case 3091:
case 3576:
case 1893:
case 3034:
case 1451:
case 2612:
case 1984:
case 2997:
case 2010:
case 1812:
case 3457:
case 2084:
case 3507:
case 713:
case 1097:
case 969:
case 4082:
case 1662:
case 1342:
case 1429:
case 1291:
case 439:
case 1060:
case 2241:
case 1019:
case 918:
case 1803:
case 1643:
case 1363:
case 2636:
case 1076:
case 208:
case 3106:
case 632:
case 3941:
case 1716:
case 3001:
case 1875:
case 202:
case 912:
case 2047:
case 2907:
case 387:
case 3207:
case 3080:
case 1441:
case 2529:
case 516:
case 2762:
case 3682:
case 2589:
case 151:
case 824:
case 3515:
case 3622:
case 2306:
case 3192:
case 854:
case 497:
case 2866:
case 1318:
case 121:
case 1957:
case 3989:
case 3323:
case 2434:
case 2616:
case 1514:
case 1608:
case 1039:
case 3929:
case 2743:
case 1736:
case 476:
case 3951:
case 2377:
case 1879:
case 2648:
case 1816:
case 396:
case 1703:
case 3239:
case 377:
case 1346:
case 1666:
case 1015:
case 2564:
case 3484:
case 1775:
case 2057:
case 301:
case 1520:
case 2264:
case 1220:
case 3447:
case 2030:
case 3102:
case 1485:
case 3539:
case 1352:
case 348:
case 3014:
case 1698:
case 732:
case 1497:
case 660:
case 277:
case 3333:
case 4075:
case 201:
case 2484:
case 3057:
case 3939:
case 1726:
case 3368:
case 3648:
case 3377:
case 2951:
case 4003:
case 2113:
case 2424:
case 1265:
case 3251:
case 1029:
case 2774:
case 1565:
case 1419:
case 248:
case 1476:
case 2539:
case 3264:
case 570:
case 565:
case 785:
case 2447:
case 3396:
case 774:
case 2020:
case 3972:
case 343:
case 2622:
case 2515:
case 894:
case 800:
case 669:
case 40:
case 4093:
case 2080:
case 2682:
case 618:
case 3434:
case 3616:
case 4058:
case 1051:
case 468:
case 3853:
case 4036:
case 2383:
case 2929:
case 3866:
case 2410:
case 3306:
case 612:
case 3915:
case 2215:
case 1163:
case 2989:
case 191:
case 462:
case 427:
case 579:
case 1782:
case 731:
case 1991:
case 3541:
case 3024:
case 1934:
case 2457:
case 341:
case 1722:
case 1415:
case 1569:
case 3935:
case 1510:
case 3183:
case 302:
case 1472:
case 1025:
case 685:
case 1886:
case 3123:
case 2001:
case 1826:
case 2941:
case 4016:
case 2106:
case 3658:
case 3708:
case 3603:
case 633:
case 3843:
case 3919:
case 3480:
case 2985:
case 1524:
case 128:
case 2276:
case 2626:
case 3313:
case 3675:
case 2597:
case 589:
case 122:
case 2686:
case 2168:
case 203:
case 3420:
case 913:
case 1584:
case 3770:
case 2297:
case 152:
case 1284:
case 1547:
case 4032:
case 3302:
case 3862:
case 2260:
case 2196:
case 718:
case 2465:
case 1224:
case 2519:
case 1674:
case 3960:
case 2034:
case 3521:
case 788:
case 2896:
case 2204:
case 647:
case 2095:
case 3417:
case 782:
case 1742:
case 3581:
case 1852:
case 1950:
case 479:
case 304:
case 390:
case 1763:
case 3281:
case 2792:
case 2981:
case 2868:
case 1379:
case 50:
case 3087:
case 3221:
case 1738:
case 79:
case 1606:
case 1756:
case 3499:
case 1846:
case 2833:
case 2618:
case 2921:
case 2713:
case 1633:
case 2366:
case 2073:
case 1126:
case 2231:
case 4028:
case 1287:
case 1544:
case 2353:
case 971:
case 3883:
case 470:
case 3245:
case 259:
case 3440:
case 2037:
case 1081:
case 4088:
case 1677:
case 1227:
case 1348:
case 124:
case 1186:
case 2652:
case 399:
case 2050:
case 821:
case 510:
case 154:
case 2370:
case 3559:
case 1411:
case 2174:
case 2531:
case 3290:
case 2892:
case 3688:
case 2777:
case 682:
case 149:
case 1863:
case 305:
case 3495:
case 1856:
case 337:
case 2733:
case 3278:
case 1746:
case 3911:
case 1049:
case 2978:
case 2444:
case 1613:
case 1375:
case 2099:
case 1494:
case 3054:
case 2487:
case 1312:
case 69:
case 2796:
case 3590:
case 1000:
case 3170:
case 2427:
case 823:
case 1602:
case 1752:
case 7:
case 1393:
case 2900:
case 892:
case 3555:
case 1561:
case 715:
case 2642:
case 3549:
case 1182:
case 898:
case 1554:
case 3108:
case 3249:
case 2009:
case 2638:
case 1078:
case 4071:
case 846:
case 966:
case 436:
case 981:
case 2343:
case 1336:
case 1917:
case 2473:
case 2549:
case 1954:
case 822:
case 1481:
case 3362:
case 3642:
case 2555:
case 3955:
case 2450:
case 1217:
case 9:
case 2783:
case 3663:
case 2255:
case 2249:
case 3706:
case 1179:
case 1116:
case 858:
case 1828:
case 539:
case 1771:
case 1599:
case 3949:
case 3009:
case 3813:
case 3638:
case 2628:
case 237:
case 1386:
case 2278:
case 1148:
case 2267:
case 3967:
case 3211:
case 3892:
case 2290:
case 2166:
case 3990:
case 205:
case 915:
case 1540:
case 2374:
case 893:
case 1132:
case 781:
case 2170:
case 1509:
case 2578:
case 530:
case 3099:
case 3796:
case 734:
case 766:
case 2054:
case 2198:
case 3487:
case 359:
case 2245:
case 2883:
case 982:
case 100:
case 1788:
case 3037:
case 2440:
case 988:
case 1103:
case 3294:
case 2823:
case 3806:
case 3073:
case 2259:
case 3646:
case 1728:
case 3366:
case 2994:
case 3594:
case 1004:
case 806:
case 1467:
case 1944:
case 99:
case 2559:
case 2545:
case 1112:
case 563:
case 3652:
case 783:
case 3050:
case 299:
case 4042:
case 1505:
case 1382:
case 2417:
case 3095:
case 597:
case 1322:
case 75:
case 1449:
case 2044:
case 2521:
case 1193:
case 576:
case 1623:
case 1273:
case 2143:
case 1031:
case 3921:
case 2499:
case 4056:
case 1158:
case 2027:
case 914:
case 1683:
case 204:
case 3308:
case 681:
case 3868:
case 1400:
case 3792:
case 1454:
case 3031:
case 3273:
case 2738:
case 3136:
case 2606:
case 3094:
case 1833:
case 1618:
case 2846:
case 1504:
case 2763:
case 3205:
case 474:
case 1981:
case 2316:
case 2379:
case 1877:
case 2742:
case 1095:
case 3505:
case 1461:
case 3322:
case 3573:
case 3449:
case 826:
case 1204:
case 31:
case 3193:
case 768:
case 3944:
case 1594:
case 3478:
case 1174:
case 588:
case 2244:
case 1702:
case 3112:
case 727:
case 129:
case 1398:
case 1050:
case 582:
case 254:
case 300:
case 394:
case 1353:
case 3175:
case 2227:
case 963:
case 1037:
case 3595:
case 3788:
case 224:
case 2668:
case 1713:
case 1959:
case 2126:
case 1073:
case 1646:
case 3728:
case 2818:
case 2633:
case 2544:
case 433:
case 515:
case 3132:
case 3445:
case 2940:
case 2000:
case 3240:
case 1427:
case 802:
case 2752:
case 144:
case 2602:
case 3509:
case 1511:
case 2312:
case 2431:
case 1487:
case 2856:
case 2746:
case 94:
case 1733:
case 1978:
case 2049:
case 2909:
case 986:
case 2613:
case 2838:
case 930:
case 610:
case 1892:
case 1768:
case 249:
case 2055:
case 841:
case 484:
case 2303:
case 1955:
case 2692:
case 3888:
case 4083:
case 412:
case 2261:
case 2917:
case 547:
case 395:
case 2554:
case 3116:
case 3011:
case 1656:
case 2078:
case 1638:
case 418:
case 3599:
case 2999:
case 2254:
case 578:
case 939:
case 3299:
case 60:
case 255:
case 657:
case 3517:
case 1040:
case 23:
case 3481:
case 1802:
case 2122:
case 1642:
case 2011:
case 676:
case 1249:
case 1108:
case 4006:
case 3554:
case 2116:
case 2599:
case 1723:
case 2961:
case 1450:
case 3692:
case 325:
case 3358:
case 2217:
case 295:
case 3336:
case 1783:
case 697:
case 3917:
case 3261:
case 33:
case 581:
case 355:
case 761:
case 3122:
case 1555:
case 3561:
case 1549:
case 1473:
case 566:
case 2954:
case 2299:
case 786:
case 3182:
case 1578:
case 2509:
case 3494:
case 1567:
case 1198:
case 3431:
case 2459:
case 2445:
case 1590:
case 2240:
case 3842:
case 413:
case 1290:
case 1688:
case 4077:
case 3303:
case 1495:
case 2540:
case 3863:
case 2209:
case 2386:
case 137:
case 1911:
case 1628:
case 4033:
case 3375:
case 3838:
case 1153:
case 3909:
case 4002:
case 2490:
case 3995:
case 2295:
case 354:
case 797:
case 1409:
case 776:
case 3587:
case 3244:
case 55:
case 2871:
case 4013:
case 2103:
case 64:
case 2987:
case 3021:
case 3633:
case 1994:
case 630:
case 3126:
case 1883:
case 1245:
case 2175:
case 2927:
case 294:
case 411:
case 200:
case 324:
case 2788:
case 1440:
case 3227:
case 2237:
case 927:
case 1027:
case 438:
case 2205:
case 3763:
case 3045:
case 3316:
case 2136:
case 1143:
case 2273:
case 3059:
case 1671:
case 432:
case 848:
case 2094:
case 2158:
case 3973:
case 3606:
case 2573:
case 896:
case 21:
case 90:
case 1581:
case 3852:
case 801:
case 2382:
case 919:
case 209:
case 2455:
case 1770:
case 1525:
case 3284:
case 3547:
case 1997:
case 352:
case 1798:
case 1585:
case 2501:
case 1302:
case 2893:
case 3439:
case 358:
case 3224:
case 1960:
case 1285:
case 2201:
case 1919:
case 1976:
case 1753:
case 1603:
case 3388:
case 3146:
case 2858:
case 3041:
case 1069:
case 2007:
case 1313:
case 1225:
case 2947:
case 2035:
case 1420:
case 473:
case 3247:
case 3328:
case 322:
case 1183:
case 980:
case 3510:
case 2338:
case 2875:
case 964:
case 1047:
case 844:
case 3025:
case 2356:
case 393:
case 2171:
case 2534:
case 434:
case 108:
case 1123:
case 2076:
case 1636:
case 2643:
case 2779:
case 2591:
case 1658:
case 3085:
case 3826:
case 2716:
case 1541:
case 1024:
case 2234:
case 3991:
case 2662:
case 2060:
case 16:
case 1693:
case 253:
case 2489:
case 3722:
case 2812:
case 1084:
case 141:
case 2910:
case 3569:
case 3415:
case 2848:
case 1434:
case 1065:
case 2039:
case 1679:
case 2514:
case 1229:
case 2736:
case 306:
case 1853:
case 483:
case 1915:
case 221:
case 3530:
case 143:
case 1972:
case 979:
case 538:
case 2832:
case 3557:
case 3230:
case 251:
case 2930:
case 3064:
case 3407:
case 2793:
case 2441:
case 2214:
case 3914:
case 1762:
case 1401:
case 156:
case 4074:
case 1551:
case 716:
case 2280:
case 3882:
case 2698:
case 820:
case 511:
case 1030:
case 2712:
case 2015:
case 3497:
case 2346:
case 2666:
case 850:
case 970:
case 2775:
case 845:
case 2879:
case 2965:
case 3460:
case 2816:
case 126:
case 1368:
case 1648:
case 3726:
case 3029:
case 435:
case 3072:
case 142:
case 3670:
case 1964:
case 890:
case 49:
case 3485:
case 2882:
case 3698:
case 3280:
case 3352:
case 533:
case 1014:
case 3816:
case 2460:
case 3965:
case 1424:
case 1113:
case 196:
case 1239:
case 779:
case 2786:
case 3346:
case 3188:
case 482:
case 1484:
case 3520:
case 2257:
case 1192:
case 3318:
case 664:
case 636:
case 1410:
case 1572:
case 1323:
case 3957:
case 414:
case 2371:
case 291:
case 2156:
case 3608:
case 2051:
case 916:
case 1929:
case 1383:
case 3736:
case 3441:
case 4062:
case 351:
case 2230:
case 1469:
case 1272:
case 2407:
case 770:
case 765:
case 478:
case 3019:
case 3171:
case 3716:
case 1941:
case 1001:
case 1106:
case 3591:
case 1430:
case 3338:
case 3875:
case 2510:
case 3969:
case 2269:
case 187:
case 1207:
case 2025:
case 679:
case 3489:
case 2415:
case 1507:
case 1535:
case 3662:
case 2782:
case 3429:
case 2934:
case 3060:
case 3291:
case 1874:
case 346:
case 1196:
case 1260:
case 531:
case 1034:
case 3451:
case 1519:
case 1465:
case 2224:
case 1576:
case 2439:
case 3893:
case 764:
case 1297:
case 780:
case 252:
case 584:
case 2547:
case 3947:
case 3007:
case 392:
case 670:
case 103:
case 2328:
case 222:
case 1560:
case 3836:
case 2041:
case 2146:
case 1133:
case 3748:
case 2388:
case 1276:
case 2448:
case 3093:
case 1780:
case 833:
case 2974:
case 357:
case 3684:
case 794:
case 319:
case 1212:
case 1466:
case 504:
case 3807:
case 3835:
case 327:
case 3378:
case 3367:
case 3647:
case 1470:
case 1275:
case 695:
case 2311:
case 2432:
case 3131:
case 1498:
case 3036:
case 368:
case 3390:
case 2159:
case 3058:
case 3194:
case 2841:
case 1203:
case 0:
case 1685:
case 2751:
case 3876:
case 15:
case 1593:
case 3482:
case 1258:
case 3943:
case 3819:
case 2729:
case 2885:
case 1236:
case 1801:
case 2562:
case 2026:
case 3355:
case 426:
case 2121:
case 3669:
case 310:
case 2789:
case 1137:
case 924:
case 1105:
case 2181:
case 263:
case 709:
case 107:
case 1354:
case 954:
case 3772:
case 1293:
case 2691:
case 3962:
case 3860:
case 2262:
case 2543:
case 2479:
case 1536:
case 3300:
case 2634:
case 1074:
case 869:
case 2155:
case 3321:
case 3657:
case 3707:
case 261:
case 4069:
case 1117:
case 24:
case 3839:
case 2493:
case 2741:
case 1279:
case 2208:
case 2149:
case 286:
case 1734:
case 1880:
case 537:
case 2436:
case 1579:
case 818:
case 505:
case 2100:
case 4010:
case 812:
case 3630:
case 2304:
case 2864:
case 3486:
case 3872:
case 2620:
case 875:
case 860:
case 1232:
case 2566:
case 2680:
case 2298:
case 239:
case 3760:
case 2553:
case 46:
case 2403:
case 1548:
case 4024:
case 3998:
case 61:
case 3665:
case 1701:
case 2598:
case 3016:
case 2253:
case 3111:
case 1248:
case 3953:
case 166:
case 134:
case 1109:
case 1327:
case 3719:
case 3966:
case 3815:
case 925:
case 2412:
case 4047:
case 2266:
case 1532:
case 3553:
case 2426:
case 3298:
case 2760:
case 2998:
case 1395:
case 3270:
case 2872:
case 2797:
case 749:
case 1932:
case 147:
case 2486:
case 3566:
case 3022:
case 1830:
case 2970:
case 1784:
case 3570:
case 3725:
case 2815:
case 2966:
case 3190:
case 2359:
case 3266:
case 1747:
case 3412:
case 2111:
case 1639:
case 1008:
case 2079:
case 3598:
case 2016:
case 1474:
case 3785:
case 2665:
case 2345:
case 3829:
case 3167:
case 3178:
case 2776:
case 178:
case 2908:
case 1865:
case 3851:
case 1979:
case 1916:
case 3741:
case 2839:
case 1337:
case 34:
case 386:
case 330:
case 1053:
case 403:
case 755:
case 1615:
case 1373:
case 1066:
case 544:
case 1769:
case 740:
case 2735:
case 361:
case 725:
case 3100:
case 2032:
case 654:
case 3304:
case 2630:
case 3458:
case 4034:
case 1154:
case 1098:
case 1607:
case 1757:
case 649:
case 182:
case 1635:
case 2669:
case 1847:
case 2715:
case 3825:
case 3181:
case 529:
case 3729:
case 2819:
case 1317:
case 2003:
case 2943:
case 1936:
case 2482:
case 496:
case 3026:
case 1958:
case 4014:
case 2104:
case 448:
case 3634:
case 2300:
case 3479:
case 3543:
case 2860:
case 2012:
case 838:
case 442:
case 2772:
case 2610:
case 559:
case 3764:
case 63:
case 2684:
case 1912:
case 520:
case 257:
case 1697:
case 4020:
case 724:
case 1810:
case 219:
case 2624:
case 1660:
case 3448:
case 376:
case 1226:
case 1903:
case 1676:
case 1187:
case 1619:
case 3601:
case 3751:
case 1765:
case 3841:
case 2194:
case 2647:
case 2367:
case 2835:
case 262:
case 1309:
case 2807:
case 3432:
case 3311:
case 545:
case 2329:
case 2983:
case 992:
case 2107:
case 184:
case 3605:
case 3755:
case 1761:
case 3283:
case 998:
case 131:
case 1971:
case 3749:
case 2389:
case 1887:
case 2206:
case 2831:
case 3673:
case 2894:
case 946:
case 1518:
case 1754:
case 834:
case 1604:
case 1844:
case 2456:
case 503:
case 1314:
case 881:
case 444:
case 3650:
case 1110:
case 3583:
case 3695:
case 2568:
case 767:
case 2197:
case 3488:
case 1252:
case 4040:
case 1413:
case 3996:
case 2644:
case 1124:
case 2804:
case 2533:
case 1546:
case 2296:
case 1320:
case 2160:
case 2119:
case 2687:
case 2233:
case 118:
case 1023:
case 2176:
case 1694:
case 2596:
case 758:
case 1402:
case 2268:
case 3790:
case 264:
case 1083:
case 280:
case 1147:
case 2627:
case 2351:
case 691:
case 3125:
case 3977:
case 3881:
case 3968:
case 1552:
case 3339:
case 1433:
case 85:
case 1744:
case 835:
case 951:
case 3800:
case 2202:
case 807:
case 1477:
case 3640:
case 279:
case 3360:
case 3164:
case 4095:
case 445:
case 3902:
case 1988:
case 3745:
case 420:
case 2385:
case 3319:
case 185:
case 3063:
case 2452:
case 3151:
case 1165:
case 3056:
case 1611:
case 2139:
case 3038:
case 1496:
case 2731:
case 3721:
case 4073:
case 133:
case 1256:
case 3129:
case 628:
case 3878:
case 542:
case 1542:
case 2088:
case 3781:
case 2661:
case 2341:
case 3992:
case 1157:
case 2292:
case 265:
case 459:
case 883:
case 1242:
case 1563:
case 2172:
case 1130:
case 1391:
case 652:
case 577:
case 596:
case 1556:
case 2704:
case 3471:
case 1737:
case 3341:
case 3661:
case 2992:
case 1655:
case 1705:
case 3088:
case 751:
case 692:
case 370:
case 1963:
case 3292:
case 2890:
case 77:
case 1773:
case 1956:
case 3811:
case 2721:
case 2307:
case 1809:
case 1013:
case 2335:
case 1649:
case 2867:
case 2129:
case 2699:
case 3654:
case 2471:
case 526:
case 1114:
case 68:
case 1600:
case 3172:
case 721:
case 1840:
case 1002:
case 1942:
case 1483:
case 2360:
case 3202:
case 2902:
case 882:
case 1324:
case 1899:
case 1180:
case 1384:
case 888:
case 4044:
case 3139:
case 3794:
case 2151:
case 906:
case 2849:
case 1667:
case 1678:
case 132:
case 2038:
case 2759:
case 2745:
case 3452:
case 1690:
case 2376:
case 1288:
case 2063:
case 2319:
case 404:
case 3533:
case 3804:
case 3644:
case 798:
case 67:
case 3160:
case 3296:
case 508:
case 2428:
case 792:
case 3577:
case 3568:
case 1952:
case 2695:
case 502:
case 3197:
case 1850:
case 621:
case 3268:
case 364:
case 336:
case 2339:
case 2977:
case 1365:
case 3176:
case 1659:
case 2778:
case 3233:
case 2767:
case 3071:
case 3687:
case 2185:
case 1006:
case 3206:
case 2141:
case 2673:
case 1033:
case 3107:
case 3135:
case 753:
case 3442:
case 1717:
case 847:
case 2605:
case 1681:
case 2637:
case 723:
case 1895:
case 872:
case 389:
case 2583:
case 2650:
case 952:
case 3438:
case 3506:
case 1191:
case 1330:
case 878:
case 958:
case 1799:
case 1134:
case 2372:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1744394401/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,0,0,1,0,1,0,0,1,1,0,1,1,1,0,1,0,1,0,1,0,0,1,0,0,1,0,0,1,1,1,1,1,0,1,1,1,1,1,1,0,1,0,0,0,1,1,1,0,1,1,1,0,0,1,0,1,0,1,0,0,0,0,0,0,1,1,0,1,1,1,0,0,0,1,0,0,0,0,0,0,1,1,1,1,0,1,0,0,0,0,0,0,1,1,1,1,1,0,1,0,0,1,1,1,0,0,0,1,1,1,1,0,0,0,1,1,0,0,1,0,0,0,1,1,0,1,1,1,0,1,0,1,1,1,1,0,1,1,1,1,0,0,0,0,1,0,0,1,0,0,1,0,1,0,0,0,0,0,0,1,1,0,0,1,0,1,0,0,0,1,0,0,1,1,0,0,0,0,1,1,1,0,1,0,0,0,0,1,1,0,0,1,1,0,1,1,0,1,1,1,1,0,1,1,0,1,1,1,0,1,0,1,0,0,1,1,0,0,0,1,1,1,0,0,0,1,1,0,0,0,1,1,1,0,1,0,0,0,1,1,1,1,0,1,0,1,1,1,0,1,1,0,0,1,0,0,1,1,1,0,1,1,0,0,0,0,0,1,1,1,1,1,0,0,1,0,1,1,0,1,1,0,1,0,0,1,0,0,0,1,0,0,1,1,0,1,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,1,0,1,1,0,1,1,0,0,0,1,1,0,0,1,1,1,1,1,0,1,0,1,1,1,0,1,0,1,1,1,0,1,0,1,1,0,0,0,0,0,1,1,0,1,1,1,1,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1,1,0,1,1,1,0,0,0,0,1,1,0,1,0,1,1,0,1,1,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0,1,1,0,1,1,1,1,1,1,1,0,0,0,0,1,1,0,0,1,0,0,1,0,1,0,1,0,0,0,1,0,0,1,0,0,1,0,0,0,1,1,0,1,0,1,1,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,1,1,1,1,1,0,0,1,0,0,0,0,0,1,1,1,0,1,0,0,0,0,0,1,1,0,0,1,1,1,1,1,1,1,1,0,1,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,1,0,1,1,1,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,1,0,0,1,0,0,0,1,0,0,1,0,0,1,1,1,1,0,0,1,0,0,0,0,0,1,0,1,0,1,0,1,1,1,1,0,1,0,1,0,1,1,0,1,1,0,0,1,0,0,0,1,0,1,0,0,0,1,1,0,0,0,1,0,0,1,0,1,0,1,0,1,1,1,0,0,1,1,0,0,1,1,1,0,1,1,1,0,1,0,1,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,1,1,0,0,0,1,0,0,1,1,1,0,1,0,1,0,0,1,1,1,1,0,0,1,1,1,0,0,0,1,0,1,0,0,1,1,0,0,1,0,0,0,0,0,0,0,0,0,1,1,1,1,0,1,0,1,1,0,1,0,0,1,1,1,1,1,0,1,0,1,1,1,1,1,0,1,0,0,0,1,1,1,0,1,0,1,1,0,0,1,1,1,1,1,0,0,1,1,0,0,1,1,1,0,0,1,0,1,1,1,0,1,0,0,0,1,1,1,0,1,1,1,1,0,0,1,1,0,1,1,0,1,1,0,0,0,1,1,1,0,1,0,0,1,1,1,1,1,1,1,1,0,0,1,1,1,0,0,0,1,0,0,0,0,1,0,0,1,1,1,1,0,1,1,1,1,0,1,1,0,0,1,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,0,1,0,0,1,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,1,1,0,0,0,0,1,0,0,0,1,1,0,1,0,0,1,1,1,1,0,0,0,0,1,0,1,0,1,1,0,1,1,1,0,1,0,0,1,0,0,1,1,0,1,0,1,0,1,0,1,1,1,0,1,0,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,0,1,1,1,0,1,1,1,1,1,1,0,0,0,0,1,1,0,1,1,1,1,1,1,1,1,1,1,1,0,0,1,0,0,1,0,1,1,0,0,0,1,1,1,0,1,0,0,1,1,0,1,0,0,0,0,0,1,1,0,1,1,0,0,1,1,1,0,1,0,0,0,1,0,0,0,1,1,0,1,0,1,1,0,0,1,0,0,0,1,1,0,1,0,0,0,0,1,0,1,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,1,0,1,1,0,0,1,1,0,0,1,1,1,0,0,1,0,1,0,0,0,0,0,1,1,0,1,0,0,1,0,0,0,0,0,1,0,1,1,0,0,1,1,1,0,1,0,0,1,0,0,0,0,0,0,1,0,1,1,0,1,1,0,1,1,1,1,0,0,1,1,0,1,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1,0,1,1,0,1,1,1,0,1,1,0,0,1,1,1,0,0,1,0,0,1,1,1,1,0,0,0,1,0,1,1,0,0,1,0,1,0,0,0,0,1,0,1,0,1,0,1,0,0,0,1,0,1,0,1,0,1,1,1,0,1,0,0,1,0,1,0,1,0,1,0,1,0,0,1,0,1,0,0,0,0,1,1,0,1,0,0,0,0,1,1,0,1,1,0,1,1,1,1,1,0,0,1,0,0,1,0,0,1,1,1,0,0,1,1,0,0,0,1,1,1,1,1,1,0,0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,1,1,1,1,0,0,1,1,0,0,0,1,0,0,0,1,1,0,0,0,1,0,0,1,1,0,1,0,0,1,0,1,0,1,0,1,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,1,1,1,1,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,1,0,0,0,0,1,1,0,1,1,0,0,0,1,0,1,1,0,1,0,1,0,1,1,0,1,0,1,0,0,0,1,0,0,1,0,0,0,1,1,1,0,1,1,0,0,1,1,0,1,1,0,1,0,0,0,1,0,1,1,1,1,0,1,0,0,1,0,0,1,1,1,0,0,1,1,0,0,1,0,0,0,1,0,1,1,1,1,1,1,0,1,1,1,1,1,1,0,1,0,1,0,1,1,1,0,1,1,1,1,1,0,1,0,0,1,0,0,1,1,0,1,0,0,0,1,1,0,0,0,0,0,0,0,1,0,1,0,1,1,0,0,1,1,1,1,1,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0,1,1,0,1,1,1,0,0,0,1,1,1,1,1,0,0,0,1,0,0,1,1,0,1,1,0,1,0,1,1,1,0,0,0,0,0,1,1,0,1,0,1,1,0,0,1,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,1,0,0,1,0,0,0,1,0,1,1,0,1,1,1,0,0,0,1,1,0,1,0,1,1,1,1,1,1,0,1,1,1,0,0,0,0,1,0,1,1,1,0,0,1,0,1,0,1,0,1,0,0,1,0,0,0,1,0,1,0,1,0,1,1,0,1,0,1,1,1,0,1,1,0,0,0,1,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,1,1,0,1,1,1,0,0,1,1,0,1,1,0,1,0,0,0,0,1,0,1,0,1,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,1,0,0,1,0,1,1,1,1,1,1,0,0,0,1,0,1,0,1,1,1,1,0,1,0,0,0,0,0,1,1,0,0,1,1,1,1,1,0,0,1,1,1,0,1,0,0,1,1,0,0,0,0,1,0,1,1,1,0,1,1,1,1,0,0,1,1,0,1,1,0,0,1,1,1,1,0,0,1,0,0,1,0,1,0,0,0,1,1,0,0,0,0,1,0,1,1,1,1,0,0,1,0,1,0,0,0,1,1,1,0,1,1,1,0,0,1,0,1,0,0,1,0,0,1,0,0,0,0,1,1,1,1,1,0,1,0,1,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,0,1,0,0,1,1,0,0,1,0,0,1,1,0,0,1,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,0,1,1,0,0,0,1,0,0,1,1,1,1,0,1,1,0,1,0,0,1,1,1,1,1,0,0,0,0,1,1,0,1,1,1,1,1,0,0,1,1,0,1,0,1,1,1,1,0,1,0,1,0,1,0,1,1,0,1,0,0,0,1,1,1,0,1,1,1,1,1,0,0,0,1,1,1,1,1,0,1,1,0,1,0,1,0,1,0,1,0,0,1,0,0,1,0,0,0,1,1,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,1,0,1,0,0,1,0,0,0,0,1,0,1,0,1,0,0,0,0,0,1,1,0,1,1,0,0,0,1,0,0,0,1,0,1,0,1,0,1,0,0,0,0,1,0,0,0,1,1,1,1,0,1,0,0,1,0,1,0,0,0,1,1,0,1,1,1,1,1,1,1,0,0,1,1,1,1,1,0,0,0,1,1,0,1,1,0,1,0,1,1,0,0,0,1,1,1,0,0,1,1,1,1,1,1,1,0,0,1,0,0,0,1,0,0,0,1,0,0,1,0,0,0,0,0,1,1,1,1,0,1,1,0,0,1,0,0,1,0,1,1,0,0,1,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,1,1,1,0,0,0,0,1,0,0,0,0,1,1,0,1,1,1,0,1,0,1,1,0,0,0,0,0,1,0,0,1,0,1,1,0,1,1,0,1,1,1,1,0,1,1,1,0,1,1,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,0,1,0,1,1,1,1,1,1,0,1,0,1,0,0,1,1,0,0,1,0,0,1,1,1,1,0,0,1,1,1,0,1,0,0,1,0,1,1,0,0,0,1,1,1,0,1,0,0,0,0,0,0,0,1,0,1,0,1,1,1,1,1,0,1,1,0,1,0,0,0,0,1,1,1,1,0,1,0,1,0,1,0,1,0,1,1,0,0,0,0,1,1,1,0,0,1,1,0,1,0,1,1,0,0,0,1,0,1,1,1,1,0,1,0,1,0,0,0,1,1,1,1,0,0,0,0,1,0,0,0,0,0,1,0,1,1,1,0,1,0,1,0,0,0,1,0,0,1,1,1,1,0,0,0,0,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,0,0,1,0,1,1,1,1,1,1,0,0,0,0,1,0,0,0,0,1,0,1,0,0,1,0,1,1,1,1,0,1,0,1,0,0,1,0,1,1,1,1,0,0,1,1,0,1,0,0,1,1,0,0,1,1,0,1,0,0,1,1,0,1,1,0,1,1,1,1,1,1,0,1,1,1,0,0,1,1,0,1,1,1,0,1,0,1,0,1,0,1,0,0,1,1,1,0,0,1,1,1,0,0,1,0,1,0,0,1,1,1,0,0,1,0,0,1,1,1,0,1,0,0,0,0,0,1,1,0,1,1,0,0,1,0,0,1,0,1,1,1,1,0,1,1,0,0,0,1,0,0,0,0,0,1,0,0,1,1,0,1,0,0,0,0,1,1,0,0,0,1,0,0,1,1,1,0,0,1,0,1,0,0,1,0,1,1,1,1,0,0,0,1,0,1,0,1,0,1,0,1,1,0,0,1,1,0,1,1,1,0,0,0,1,0,0,0,0,0,1,1,0,0,1,1,0,1,1,1,1,1,0,1,0,1,1,0,1,1,1,0,0,0,0,1,0,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,1,0,1,0,0,1,0,0,1,1,0,1,1,0,0,0,1,0,1,0,1,1,0,0,1,0,1,1,1,0,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,1,0,0,1,1,0,1,1,0,0,0,0,1,1,0,1,0,0,1,0,1,1,0,1,0,0,0,0,1,0,1,1,0,1,0,1,0,0,0,1,1,0,1,0,1,0,1,1,1,1,1,0,0,0,1,0,1,0,1,0,0,0,1,0,1,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,1,0,1,1,0,1,0,1,0,1,0,0,0,1,0,0,0,1,1,1,1,1,0,0,1,0,1,1,1,0,0,1,0,0,1,1,1,0,0,1,1,1,0,0,1,0,1,0,0,0,0,1,0,0,1,1,0,1,1,1,0,0,1,1,1,0,1,0,0,1,0,1,1,0,0,0,1,1,0,1,0,0,1,1,0,0,0,1,0,0,0,1,1,0,0,1,1,1,1,0,0,0,0,1,1,0,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,0,1,1,1,1,0,1,0,1,1,1,1,1,0,0,0,0,1,0,1,0,1,0,0,1,1,1,0,0,0,0,1,0,0,1,1,0,0,1,1,0,0,1,0,0,1,1,1,1,1,0,0,1,0,1,0,1,0,0,1,1,0,1,1,1,0,1,1,0,0,1,1,0,1,0,1,0,1,0,1,1,0,1,1,0,0,0,0,1,1,1,0,1,1,1,0,1,1,1,0,0,0,1,0,1,0,0,1,1,0,0,1,1,0,1,0,0,1,1,0,1,1,1,1,0,1,1,0,0,1,0,1,0,1,0,0,1,1,1,0,0,1,0,1,1,1,0,0,1,1,0,0,1,0,0,1,1,1,1,0,0,1,0,0,1,0,0,0,1,1,1,0,0,0,0,1,1,1,0,0,1,1,1,0,0,1,0,1,1,1,0,0,1,0,1,1,0,1,1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,1,0,1,1,0,0,1,1,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,1,0,0,0,0,1,1,0,0,1,1,0,1,0,1,1,0,0,0,0,1,0,0,0,1,1,0,1,0,0,0,0,0,0,1,0,1,1,1,1,1,0,0,1,1,1,0,1,1,1,0,1,1,1,1,0,1,0,0,0,1,1,0,0,0,0,0,1,1,0,1,0,0,0,0,1,1,0,0,1,0,0,1,0,0,1,1,0,1,0,1,1,0,0,0,1,0,0,0,1,0,1,1,0,0,0,0,1,0,0,0,1,0,1,0,1,1,0,1,0,0,0,0,1,1,1,1,1,1,0,1,1,1,1,1,0,0,1,0,1,0,0,0,0,1,0,1,1,0,1,0,0,0,0,1,1,0,0,0,0,1,1,1,0,1,1,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,1,0,0,0,1,1,1,1,1,1,1,0,0,1,1,1,1,1,0,0,1,0,1,0,0,1,1,1,0,1,0,0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,1,0,0,1,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1,0,1,1,1,1,0,1,0,1,1,0,1,0,0,0,1,0,1,1,1,0,0,0,0,0,0,1,0,0,0,0,1,0,1,0,1,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0,1,1,1,0,0,0,0,0,0,0,1,1,1,0,1,1,0,0,1,1,0,0,1,0,0,0,1,0,0,1,1,0,1,0,1,1,1,1,0,0,1,0,1,1,0,0,1,0,1,0,0,0,1,0,0,1,1,0,0,0,0,1,1,1,0,1,0,1,1,1,0,1,0,0,0,1,0,1,0,1,0,0,1,0,1,0,0,0,1,0,1,1,1,0,0,0,1,1,1,1,1,0,1,1,1,1,0,0,1,0,0,0,1,1,1,0,0,1,1,0,1,1,0,1,1,0,0,0,0,1,0,0,0,1,1,0,0,0,0,1,1,1,0,1,1,1,1,1,0,0,1,0,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,0,0,0,0,1,0,1,1,1,0,1,1,1,1,1,0,1,1,1,1,0,0,0,0,0,1,1,1,1,0,0,1,0,1,1,0,0,0,1,0,0,1,1,1,1,0,1,0,0,1,0,0,0,1,0,0,1,0,1,0,1,0,1,0,1,0,1,1,0,1,0,1,0,0,1,0,0,0,1,1,1,0,0,0,1,0,0,1,1,1,1,1,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,1,1,1,1,0,0,1,0,0,0,1,1,1,1,1,0,0,0,0,1,1,1,0,0,1,0,0,0,1,0,0,1,0,0,1,1,1,0,1,0,1,0,0,0,0,0,1,0,1,0,1,1,0,1,1,0,0,1,0,1,1,0,1,0,1,1,1,1,1,0,1,1,0,1,0,0,0,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,1,1,1,0,1,0,1,1,1,1,1,0,1,1,0,0,0,1,0,0,1,0,1,1,1,0,0,1,1,0,1,1,0,0,0,1,0,1,1,1,0,1,0,0,0,0,0,1,1,1,1,1,1,0,0,1,1,0,0,1,1,1,0,0,0,0,0,0,0,1,0,1,1,0,0,0,1,0,0,1,1,0,0,0,0,0,1,0,0,1,1,0,1,0,1,1,0,1,0,0,0,1,1,0,0,1,0,0,0,1,1,0,1,1,0,1,1,0,0,0,1,1,0,0,1,0,0,1,1,1,0,0,1,1,1,1,0,];
var gg_b = "1744390802/";

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
