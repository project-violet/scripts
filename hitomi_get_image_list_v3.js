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
case 2338:
case 709:
case 2133:
case 1964:
case 1446:
case 66:
case 3813:
case 1527:
case 189:
case 1109:
case 3171:
case 2626:
case 1054:
case 2546:
case 3562:
case 2336:
case 2217:
case 2530:
case 2142:
case 2427:
case 3349:
case 2261:
case 1004:
case 697:
case 3919:
case 1566:
case 2358:
case 3012:
case 3497:
case 8:
case 2468:
case 1187:
case 1571:
case 1162:
case 2103:
case 3433:
case 2505:
case 3696:
case 1400:
case 2611:
case 2356:
case 1034:
case 2550:
case 1455:
case 2314:
case 1021:
case 4061:
case 1719:
case 3509:
case 1815:
case 2500:
case 1405:
case 4017:
case 3698:
case 576:
case 2471:
case 4076:
case 2551:
case 1020:
case 1798:
case 771:
case 3085:
case 2610:
case 3822:
case 685:
case 641:
case 680:
case 3252:
case 1575:
case 3619:
case 559:
case 2184:
case 1361:
case 2093:
case 362:
case 877:
case 1025:
case 2928:
case 4065:
case 1451:
case 333:
case 1376:
case 3594:
case 1236:
case 2722:
case 1317:
case 839:
case 216:
case 69:
case 3269:
case 2531:
case 1194:
case 2911:
case 2524:
case 3170:
case 2644:
case 3886:
case 2967:
case 114:
case 3023:
case 2788:
case 346:
case 1099:
case 3243:
case 3888:
case 2007:
case 1431:
case 1206:
case 335:
case 1256:
case 2074:
case 2265:
case 330:
case 3996:
case 710:
case 1195:
case 170:
case 601:
case 1841:
case 3485:
case 1961:
case 2638:
case 2123:
case 2645:
case 2328:
case 1347:
case 175:
case 899:
case 3663:
case 3174:
case 3157:
case 1051:
case 417:
case 2326:
case 1190:
case 1392:
case 2075:
case 1978:
case 2437:
case 938:
case 3649:
case 1215:
case 3776:
case 408:
case 395:
case 3717:
case 129:
case 1129:
case 1244:
case 1574:
case 390:
case 3761:
case 2608:
case 2878:
case 2185:
case 2941:
case 3137:
case 3778:
case 1031:
case 2407:
case 2861:
case 3189:
case 2656:
case 1499:
case 306:
case 656:
case 2876:
case 1483:
case 111:
case 2457:
case 38:
case 1046:
case 2554:
case 2936:
case 2516:
case 51:
case 3869:
case 637:
case 1228:
case 3319:
case 623:
case 2865:
case 1856:
case 1035:
case 1364:
case 363:
case 2945:
case 1048:
case 1416:
case 712:
case 2315:
case 1454:
case 1617:
case 2732:
case 3963:
case 2027:
case 970:
case 2956:
case 2068:
case 620:
case 682:
case 3481:
case 3412:
case 1845:
case 1749:
case 2914:
case 2521:
case 1050:
case 4047:
case 816:
case 973:
case 3042:
case 1434:
case 2702:
case 1840:
case 2071:
case 1211:
case 4092:
case 387:
case 2908:
case 3059:
case 3736:
case 2000:
case 139:
case 3740:
case 1906:
case 510:
case 2749:
case 2191:
case 4028:
case 1956:
case 2965:
case 1521:
case 177:
case 1641:
case 2050:
case 415:
case 3745:
case 3969:
case 3738:
case 3154:
case 97:
case 2282:
case 2836:
case 1066:
case 2055:
case 4026:
case 1958:
case 3932:
case 868:
case 2840:
case 2228:
case 471:
case 3087:
case 2678:
case 1181:
case 1504:
case 397:
case 513:
case 1936:
case 2858:
case 3062:
case 1247:
case 1577:
case 1310:
case 2418:
case 62:
case 1860:
case 1940:
case 571:
case 36:
case 2617:
case 1027:
case 4067:
case 2226:
case 3121:
case 2364:
case 2416:
case 759:
case 1865:
case 2856:
case 3952:
case 692:
case 1769:
case 3708:
case 1315:
case 2661:
case 1878:
case 1608:
case 3120:
case 3495:
case 1583:
case 1599:
case 17:
case 2129:
case 1658:
case 3632:
case 2507:
case 1180:
case 1367:
case 2483:
case 1457:
case 3125:
case 1474:
case 889:
case 1407:
case 2031:
case 1941:
case 4015:
case 2499:
case 3094:
case 2537:
case 3429:
case 3602:
case 2976:
case 39:
case 1070:
case 2917:
case 2589:
case 2593:
case 2195:
case 2841:
case 2420:
case 4044:
case 1328:
case 3219:
case 1489:
case 2392:
case 1075:
case 1264:
case 3199:
case 367:
case 380:
case 2215:
case 1437:
case 2425:
case 1640:
case 1636:
case 3183:
case 1:
case 385:
case 3388:
case 1326:
case 3585:
case 1967:
case 2258:
case 1179:
case 3613:
case 68:
case 1260:
case 214:
case 3726:
case 1531:
case 2194:
case 999:
case 2828:
case 2208:
case 1644:
case 1892:
case 2256:
case 1265:
case 690:
case 3151:
case 2083:
case 3090:
case 1786:
case 2214:
case 988:
case 4040:
case 2424:
case 2099:
case 2826:
case 2206:
case 458:
case 2575:
case 2378:
case 512:
case 2992:
case 2173:
case 3782:
case 1501:
case 3767:
case 1551:
case 2798:
case 268:
case 1926:
case 2236:
case 1037:
case 4006:
case 3131:
case 71:
case 3898:
case 412:
case 116:
case 3124:
case 3579:
case 2361:
case 2796:
case 4056:
case 3986:
case 693:
case 2882:
case 2811:
case 708:
case 1505:
case 3715:
case 2400:
case 3130:
case 687:
case 3459:
case 3332:
case 1555:
case 2450:
case 3272:
case 2810:
case 2139:
case 3542:
case 3409:
case 3622:
case 2360:
case 1500:
case 2405:
case 1306:
case 325:
case 2034:
case 1864:
case 1682:
case 1611:
case 1550:
case 2455:
case 1466:
case 1314:
case 1197:
case 3091:
case 3487:
case 574:
case 289:
case 3150:
case 1628:
case 2159:
case 3686:
case 2964:
case 3352:
case 2844:
case 1338:
case 4041:
case 2018:
case 1915:
case 474:
case 3744:
case 717:
case 873:
case 323:
case 298:
case 1336:
case 2077:
case 2435:
case 3105:
case 1217:
case 2016:
case 1167:
case 1380:
case 1979:
case 231:
case 286:
case 3325:
case 1586:
case 294:
case 2994:
case 919:
case 3784:
case 1182:
case 4012:
case 3630:
case 1291:
case 610:
case 2486:
case 1603:
case 4081:
case 3951:
case 921:
case 2884:
case 2687:
case 3078:
case 942:
case 3447:
case 376:
case 1724:
case 615:
case 2973:
case 3399:
case 105:
case 767:
case 1642:
case 3779:
case 741:
case 785:
case 100:
case 671:
case 3383:
case 1498:
case 2390:
case 3188:
case 2879:
case 79:
case 2147:
case 3650:
case 1697:
case 1701:
case 3924:
case 3511:
case 3567:
case 2598:
case 2395:
case 2659:
case 1128:
case 2281:
case 613:
case 3870:
case 3600:
case 1496:
case 1323:
case 966:
case 3866:
case 3237:
case 435:
case 3377:
case 3354:
case 1700:
case 446:
case 3464:
case 3651:
case 1049:
case 3293:
case 2939:
case 3601:
case 3871:
case 121:
case 850:
case 1750:
case 207:
case 3304:
case 2897:
case 3948:
case 546:
case 3935:
case 2771:
case 1705:
case 1229:
case 119:
case 3515:
case 1859:
case 2833:
case 530:
case 4023:
case 427:
case 3544:
case 3257:
case 3274:
case 853:
case 2909:
case 834:
case 3321:
case 3950:
case 4080:
case 2959:
case 2164:
case 984:
case 3900:
case 1746:
case 2043:
case 1730:
case 1115:
case 359:
case 609:
case 3207:
case 3955:
case 4085:
case 2032:
case 900:
case 1312:
case 218:
case 1839:
case 1110:
case 2069:
case 1887:
case 3064:
case 1552:
case 406:
case 3143:
case 3335:
case 3538:
case 3918:
case 1680:
case 261:
case 1106:
case 2563:
case 247:
case 2991:
case 1156:
case 1114:
case 1502:
case 2362:
case 658:
case 3536:
case 1294:
case 1685:
case 3169:
case 3954:
case 3346:
case 3977:
case 2452:
case 3540:
case 1303:
case 3620:
case 1158:
case 2629:
case 3132:
case 1353:
case 1019:
case 490:
case 943:
case 2160:
case 58:
case 157:
case 3904:
case 723:
case 3355:
case 3558:
case 551:
case 737:
case 1981:
case 3699:
case 593:
case 1136:
case 779:
case 649:
case 1718:
case 2443:
case 1140:
case 493:
case 3102:
case 1704:
case 3921:
case 1333:
case 2359:
case 1138:
case 1273:
case 1777:
case 936:
case 3300:
case 612:
case 981:
case 2469:
case 2013:
case 3506:
case 1716:
case 2695:
case 957:
case 924:
case 3351:
case 3616:
case 4042:
case 3227:
case 3723:
case 2088:
case 1985:
case 3461:
case 3807:
case 3654:
case 818:
case 3604:
case 1890:
case 1379:
case 3618:
case 1980:
case 1239:
case 2774:
case 2253:
case 2757:
case 1783:
case 2086:
case 2394:
case 1262:
case 756:
case 3047:
case 1799:
case 1141:
case 587:
case 15:
case 2707:
case 3478:
case 4033:
case 2823:
case 73:
case 145:
case 2880:
case 864:
case 2176:
case 136:
case 2117:
case 3266:
case 3837:
case 2995:
case 3785:
case 4003:
case 532:
case 2233:
case 2737:
case 1681:
case 3999:
case 1384:
case 2789:
case 2022:
case 1096:
case 2297:
case 744:
case 4053:
case 3983:
case 807:
case 674:
case 2098:
case 1995:
case 727:
case 754:
case 1242:
case 3067:
case 1161:
case 2923:
case 597:
case 1176:
case 245:
case 3011:
case 3082:
case 3205:
case 821:
case 56:
case 371:
case 3957:
case 150:
case 3974:
case 2096:
case 1297:
case 1793:
case 3250:
case 4039:
case 2472:
case 2829:
case 2725:
case 2209:
case 1990:
case 2612:
case 926:
case 1373:
case 1233:
case 1789:
case 3907:
case 842:
case 3235:
case 735:
case 3248:
case 3375:
case 315:
case 676:
case 3883:
case 2890:
case 3899:
case 3576:
case 1394:
case 3937:
case 2262:
case 1707:
case 4059:
case 1823:
case 1691:
case 3230:
case 1774:
case 4009:
case 2980:
case 947:
case 134:
case 3790:
case 1086:
case 2569:
case 3231:
case 1690:
case 59:
case 3674:
case 3224:
case 1443:
case 2342:
case 3877:
case 3607:
case 3854:
case 3149:
case 485:
case 3791:
case 2912:
case 3816:
case 3456:
case 504:
case 2981:
case 950:
case 2754:
case 2543:
case 49:
case 3408:
case 567:
case 2145:
case 2891:
case 522:
case 1013:
case 309:
case 1284:
case 3044:
case 2397:
case 541:
case 2704:
case 1309:
case 3818:
case 585:
case 803:
case 2156:
case 3251:
case 934:
case 2449:
case 2502:
case 991:
case 483:
case 2552:
case 3436:
case 648:
case 778:
case 3693:
case 896:
case 1629:
case 1549:
case 2721:
case 2463:
case 2019:
case 1387:
case 1160:
case 3010:
case 2685:
case 1362:
case 2294:
case 3445:
case 805:
case 3438:
case 94:
case 1881:
case 1452:
case 312:
case 1959:
case 2513:
case 3006:
case 763:
case 2730:
case 85:
case 3835:
case 3968:
case 3056:
case 544:
case 3739:
case 3848:
case 2997:
case 266:
case 401:
case 2839:
case 349:
case 4029:
case 1853:
case 118:
case 2748:
case 53:
case 2887:
case 2295:
case 2942:
case 501:
case 2684:
case 617:
case 1803:
case 444:
case 1673:
case 2312:
case 2381:
case 3119:
case 221:
case 2953:
case 2049:
case 1280:
case 2750:
case 107:
case 3225:
case 3709:
case 3675:
case 3415:
case 2700:
case 358:
case 556:
case 3040:
case 242:
case 986:
case 3220:
case 2859:
case 994:
case 2755:
case 3927:
case 1285:
case 1002:
case 840:
case 4095:
case 931:
case 3038:
case 164:
case 90:
case 456:
case 152:
case 3564:
case 845:
case 3850:
case 3410:
case 2679:
case 437:
case 3234:
case 1596:
case 3467:
case 3801:
case 857:
case 374:
case 3482:
case 3851:
case 3794:
case 1192:
case 3307:
case 2642:
case 2751:
case 2072:
case 1598:
case 793:
case 2496:
case 2323:
case 523:
case 4091:
case 2128:
case 1281:
case 537:
case 1147:
case 3041:
case 579:
case 3668:
case 2701:
case 2697:
case 3547:
case 706:
case 964:
case 131:
case 3198:
case 3393:
case 2979:
case 3831:
case 3204:
case 482:
case 186:
case 420:
case 3975:
case 1639:
case 2653:
case 525:
case 3218:
case 3428:
case 2291:
case 582:
case 2385:
case 399:
case 3306:
case 2559:
case 1343:
case 1135:
case 956:
case 40:
case 1710:
case 3500:
case 2442:
case 3314:
case 494:
case 1597:
case 486:
case 3611:
case 182:
case 120:
case 3944:
case 2696:
case 3308:
case 1715:
case 1130:
case 50:
case 2433:
case 2081:
case 2497:
case 586:
case 388:
case 3358:
case 531:
case 1272:
case 1622:
case 2919:
case 2587:
case 137:
case 944:
case 2166:
case 2539:
case 3142:
case 3530:
case 22:
case 179:
case 3340:
case 3713:
case 3217:
case 1503:
case 3336:
case 3626:
case 3910:
case 1688:
case 2171:
case 1439:
case 901:
case 2453:
case 1150:
case 1302:
case 1091:
case 3915:
case 1462:
case 3628:
case 3278:
case 292:
case 3535:
case 1728:
case 1090:
case 3786:
case 2996:
case 407:
case 230:
case 3074:
case 3057:
case 1151:
case 1584:
case 2888:
case 235:
case 1922:
case 552:
case 246:
case 2243:
case 2747:
case 507:
case 3260:
case 1726:
case 2023:
case 4002:
case 3847:
case 2886:
case 3982:
case 452:
case 156:
case 3531:
case 2792:
case 863:
case 925:
case 3341:
case 4043:
case 3089:
case 3722:
case 1124:
case 3475:
case 1131:
case 1986:
case 262:
case 227:
case 254:
case 1249:
case 3093:
case 101:
case 1782:
case 860:
case 887:
case 3501:
case 1988:
case 2085:
case 2822:
case 2479:
case 4032:
case 144:
case 1767:
case 865:
case 923:
case 1125:
case 3457:
case 3474:
case 614:
case 2193:
case 2972:
case 1490:
case 3876:
case 2398:
case 206:
case 2189:
case 3311:
case 3614:
case 3941:
case 3583:
case 3185:
case 3608:
case 547:
case 1120:
case 3658:
case 561:
case 37:
case 2084:
case 295:
case 2213:
case 2776:
case 1073:
case 2649:
case 3437:
case 2107:
case 3489:
case 3075:
case 3264:
case 122:
case 1199:
case 180:
case 167:
case 3:
case 3326:
case 1585:
case 700:
case 2480:
case 997:
case 2174:
case 2157:
case 3640:
case 19:
case 3070:
case 526:
case 784:
case 1872:
case 1429:
case 293:
case 3525:
case 1219:
case 3328:
case 96:
case 1652:
case 1580:
case 44:
case 3908:
case 260:
case 672:
case 3752:
case 1969:
case 3071:
case 1738:
case 1581:
case 553:
case 3702:
case 721:
case 3066:
case 591:
case 3958:
case 4088:
case 265:
case 2042:
case 1118:
case 339:
case 2672:
case 2802:
case 2222:
case 2033:
case 1736:
case 983:
case 491:
case 1009:
case 3521:
case 3914:
case 862:
case 3641:
case 2097:
case 3534:
case 434:
case 4086:
case 3956:
case 3344:
case 3068:
case 766:
case 689:
case 1902:
case 2288:
case 2591:
case 16:
case 550:
case 904:
case 2843:
case 3518:
case 263:
case 3945:
case 3292:
case 3938:
case 2286:
case 1087:
case 3112:
case 3504:
case 1714:
case 1491:
case 1039:
case 2053:
case 980:
case 3860:
case 1706:
case 3516:
case 835:
case 3936:
case 1062:
case 455:
case 3577:
case 2708:
case 481:
case 3454:
case 3035:
case 2952:
case 436:
case 132:
case 163:
case 3048:
case 3416:
case 3226:
case 2902:
case 3676:
case 3806:
case 951:
case 440:
case 1843:
case 993:
case 3617:
case 1591:
case 26:
case 2134:
case 536:
case 718:
case 3030:
case 3858:
case 338:
case 1832:
case 540:
case 297:
case 1286:
case 1319:
case 2087:
case 3678:
case 2039:
case 1053:
case 2756:
case 2104:
case 2512:
case 443:
case 990:
case 2581:
case 2298:
case 1042:
case 3763:
case 3055:
case 3836:
case 3421:
case 187:
case 3005:
case 2738:
case 2849:
case 3050:
case 2009:
case 3838:
case 801:
case 98:
case 1481:
case 3845:
case 543:
case 764:
case 2740:
case 752:
case 1222:
case 2118:
case 699:
case 3000:
case 45:
case 2943:
case 906:
case 1033:
case 2736:
case 285:
case 1480:
case 241:
case 1174:
case 1157:
case 3425:
case 3772:
case 3051:
case 3001:
case 1107:
case 1649:
case 3215:
case 222:
case 2199:
case 267:
case 193:
case 2386:
case 2219:
case 3420:
case 820:
case 3195:
case 370:
case 3841:
case 1079:
case 825:
case 375:
case 3917:
case 616:
case 1663:
case 2602:
case 2872:
case 3537:
case 1189:
case 3024:
case 283:
case 3499:
case 402:
case 106:
case 1778:
case 2523:
case 2643:
case 2125:
case 18:
case 557:
case 311:
case 2490:
case 669:
case 1193:
case 3507:
case 1717:
case 879:
case 3129:
case 1084:
case 2073:
case 3660:
case 2669:
case 837:
case 965:
case 373:
case 4019:
case 3557:
case 3244:
case 424:
case 1396:
case 466:
case 162:
case 3811:
case 127:
case 3025:
case 3664:
case 3451:
case 2249:
case 3796:
case 3317:
case 992:
case 3376:
case 3867:
case 750:
case 6:
case 368:
case 3798:
case 3020:
case 244:
case 2494:
case 2711:
case 1252:
case 755:
case 2896:
case 3575:
case 3826:
case 74:
case 3431:
case 2584:
case 3099:
case 1573:
case 897:
case 3214:
case 2728:
case 3256:
case 2151:
case 1996:
case 978:
case 1886:
case 3828:
case 256:
case 1269:
case 1484:
case 1792:
case 4063:
case 1372:
case 753:
case 1232:
case 596:
case 3016:
case 3435:
case 584:
case 12:
case 2688:
case 3077:
case 398:
case 3004:
case 3692:
case 400:
case 1919:
case 2744:
case 2553:
case 1539:
case 2155:
case 1349:
case 505:
case 192:
case 3844:
case 3159:
case 484:
case 3964:
case 1813:
case 2150:
case 2439:
case 4072:
case 3109:
case 2487:
case 933:
case 1168:
case 954:
case 927:
case 1127:
case 804:
case 3719:
case 1509:
case 1442:
case 282:
case 220:
case 3568:
case 3034:
case 2913:
case 225:
case 2135:
case 761:
case 3405:
case 2710:
case 2148:
case 1559:
case 1497:
case 503:
case 1081:
case 3810:
case 3139:
case 2272:
case 3450:
case 3566:
case 2459:
case 2130:
case 880:
case 2369:
case 822:
case 935:
case 3162:
case 3212:
case 770:
case 2600:
case 2870:
case 2186:
case 640:
case 3395:
case 1668:
case 636:
case 2582:
case 3147:
case 681:
case 1041:
case 3775:
case 2931:
case 3879:
case 3422:
case 1801:
case 1671:
case 1467:
case 3390:
case 1374:
case 1234:
case 3596:
case 2605:
case 2875:
case 3770:
case 1666:
case 949:
case 3973:
case 1482:
case 1794:
case 808:
case 3192:
case 958:
case 599:
case 2447:
case 3329:
case 1592:
case 729:
case 3687:
case 488:
case 817:
case 2320:
case 3486:
case 643:
case 773:
case 2630:
case 1970:
case 1216:
case 1389:
case 2784:
case 30:
case 3994:
case 2635:
case 711:
case 2528:
case 3488:
case 1426:
case 2061:
case 516:
case 149:
case 1971:
case 3069:
case 3413:
case 1119:
case 1846:
case 2955:
case 1966:
case 3032:
case 4037:
case 2827:
case 1006:
case 2703:
case 259:
case 1299:
case 2900:
case 1762:
case 3959:
case 3164:
case 1014:
case 2257:
case 1056:
case 1835:
case 1739:
case 2624:
case 1848:
case 3694:
case 1670:
case 1220:
case 3766:
case 248:
case 1850:
case 2515:
case 2318:
case 2868:
case 2935:
case 3052:
case 352:
case 2304:
case 624:
case 3519:
case 4057:
case 1709:
case 2871:
case 3939:
case 569:
case 3768:
case 2293:
case 2289:
case 2651:
case 2464:
case 2377:
case 2354:
case 3842:
case 1415:
case 1855:
case 4007:
case 3962:
case 428:
case 3469:
case 109:
case 3284:
case 2102:
case 3432:
case 2921:
case 5:
case 1818:
case 1044:
case 1368:
case 2556:
case 2934:
case 666:
case 1163:
case 1804:
case 1657:
case 1224:
case 4075:
case 326:
case 528:
case 2683:
case 3690:
case 2699:
case 217:
case 1456:
case 2465:
case 1560:
case 1877:
case 4:
case 1414:
case 1791:
case 1149:
case 2355:
case 3160:
case 3387:
case 621:
case 3339:
case 2132:
case 3549:
case 2916:
case 1438:
case 642:
case 3881:
case 2169:
case 1010:
case 3362:
case 915:
case 1327:
case 1637:
case 2781:
case 3165:
case 1689:
case 1251:
case 3991:
case 1436:
case 1201:
case 57:
case 1821:
case 619:
case 1693:
case 1015:
case 2335:
case 2064:
case 1250:
case 3990:
case 171:
case 350:
case 768:
case 3793:
case 3885:
case 1907:
case 3022:
case 2999:
case 1200:
case 1820:
case 3373:
case 3178:
case 2785:
case 113:
case 3242:
case 3572:
case 2837:
case 1067:
case 2266:
case 1011:
case 3117:
case 684:
case 1825:
case 696:
case 2271:
case 2541:
case 3176:
case 2893:
case 1989:
case 3707:
case 1517:
case 2478:
case 859:
case 3691:
case 1230:
case 2047:
case 439:
case 1937:
case 3394:
case 4068:
case 714:
case 3774:
case 391:
case 1561:
case 1993:
case 539:
case 2301:
case 3929:
case 1883:
case 2476:
case 2604:
case 1026:
case 2723:
case 2227:
case 4066:
case 2677:
case 2461:
case 577:
case 2351:
case 1795:
case 769:
case 1925:
case 686:
case 694:
case 1618:
case 4050:
case 2172:
case 631:
case 4000:
case 60:
case 2989:
case 3262:
case 1047:
case 2246:
case 2576:
case 812:
case 3799:
case 2026:
case 4055:
case 1723:
case 1227:
case 1807:
case 1654:
case 2899:
case 1920:
case 1616:
case 1476:
case 3890:
case 1301:
case 908:
case 2578:
case 1417:
case 1857:
case 2235:
case 849:
case 4005:
case 4046:
case 3384:
case 438:
case 858:
case 3681:
case 3612:
case 2200:
case 2820:
case 1983:
case 3209:
case 2250:
case 271:
case 1268:
case 2957:
case 2974:
case 4035:
case 11:
case 2082:
case 2011:
case 1331:
case 716:
case 538:
case 1271:
case 1541:
case 381:
case 213:
case 2067:
case 3720:
case 1330:
case 2438:
case 1540:
case 2445:
case 1620:
case 3303:
case 3294:
case 1169:
case 2010:
case 1346:
case 1954:
case 1977:
case 788:
case 3019:
case 874:
case 607:
case 324:
case 3680:
case 3106:
case 529:
case 1545:
case 2834:
case 1348:
case 664:
case 1143:
case 3449:
case 2327:
case 3156:
case 470:
case 2818:
case 1102:
case 1350:
case 2458:
case 1514:
case 1934:
case 2044:
case 1460:
case 2368:
case 2565:
case 1556:
case 209:
case 475:
case 3891:
case 91:
case 3543:
case 3273:
case 3754:
case 3623:
case 2408:
case 1300:
case 2456:
case 4051:
case 3981:
case 3912:
case 1699:
case 2816:
case 117:
case 2414:
case 2791:
case 2366:
case 1355:
case 3342:
case 2607:
case 575:
case 1508:
case 2674:
case 2224:
case 3229:
case 1515:
case 319:
case 2410:
case 148:
case 1113:
case 2850:
case 1948:
case 2045:
case 739:
case 1868:
case 1935:
case 813:
case 2927:
case 3859:
case 647:
case 3063:
case 3755:
case 777:
case 1742:
case 2670:
case 3419:
case 342:
case 1316:
case 1289:
case 1464:
case 1733:
case 2855:
case 258:
case 1377:
case 1946:
case 1510:
case 3700:
case 2415:
case 2675:
case 4083:
case 871:
case 321:
case 3381:
case 4020:
case 2444:
case 2119:
case 2058:
case 1955:
case 2966:
case 3862:
case 2846:
case 815:
case 249:
case 3839:
case 3110:
case 3290:
case 2014:
case 1321:
case 568:
case 1334:
case 366:
case 3997:
case 2968:
case 1065:
case 1753:
case 4025:
case 2056:
case 3730:
case 159:
case 3513:
case 1207:
case 3933:
case 212:
case 1900:
case 3746:
case 1526:
case 2196:
case 3291:
case 2428:
case 3603:
case 1447:
case 3724:
case 1901:
case 1122:
case 2592:
case 77:
case 2975:
case 64:
case 303:
case 1648:
case 3586:
case 1528:
case 4034:
case 3380:
case 3167:
case 2426:
case 2831:
case 1061:
case 2198:
case 691:
case 1784:
case 809:
case 3182:
case 3111:
case 2970:
case 1492:
case 572:
case 2337:
case 948:
case 2627:
case 2254:
case 2773:
case 728:
case 1582:
case 384:
case 1924:
case 1511:
case 2041:
case 1650:
case 4018:
case 3633:
case 1600:
case 1655:
case 4054:
case 4016:
case 2851:
case 2482:
case 3498:
case 2801:
case 1188:
case 3126:
case 2467:
case 274:
case 2221:
case 4004:
case 1779:
case 2234:
case 2374:
case 300:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1757012402/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,0,1,1,1,1,0,1,0,0,1,1,0,0,1,1,1,1,1,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,1,1,1,1,1,0,0,0,1,1,0,0,0,1,1,1,0,1,0,0,1,1,1,1,1,0,1,0,1,0,1,0,1,1,0,1,0,1,1,0,0,1,0,1,0,0,0,0,0,1,0,0,0,0,1,1,0,0,1,0,1,1,1,0,1,1,0,0,0,1,1,1,0,1,0,1,0,1,1,0,1,1,1,1,1,1,1,0,0,0,0,1,0,1,0,1,1,0,1,0,1,1,0,1,0,0,0,0,1,1,0,0,1,1,1,0,1,0,0,0,1,1,0,1,0,0,1,1,1,0,0,1,0,0,1,1,0,0,0,1,0,1,0,1,1,0,1,0,0,0,1,1,0,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,1,1,1,0,1,1,1,0,1,1,1,0,0,1,0,1,0,0,1,1,0,0,0,1,0,0,0,0,0,1,1,0,1,1,1,1,1,1,0,0,0,0,1,0,1,0,1,1,1,1,1,1,0,1,1,1,1,0,0,1,0,0,1,0,0,0,0,0,0,0,1,1,0,1,1,0,0,1,0,0,1,1,1,1,0,1,1,0,1,0,0,1,0,0,1,0,0,1,0,1,1,0,0,1,0,0,0,1,0,1,0,1,1,1,1,0,0,0,1,0,0,1,0,1,0,0,1,1,0,0,1,0,0,0,1,0,0,1,1,0,1,0,0,0,0,0,1,1,0,0,1,1,0,0,1,1,1,0,1,1,0,1,1,1,1,0,0,0,1,1,0,0,1,1,0,1,1,0,1,1,0,0,0,1,0,1,1,1,1,1,1,0,0,0,1,1,1,0,0,0,1,0,0,1,0,1,0,0,1,0,0,0,1,0,0,1,1,0,0,0,0,0,1,1,1,1,1,1,1,0,0,1,1,0,1,0,0,0,0,0,1,0,0,1,1,0,1,0,0,0,0,0,0,0,1,0,0,0,1,1,0,0,1,1,0,0,0,0,0,1,1,1,1,1,1,0,1,0,1,1,0,1,1,0,0,0,0,0,0,1,0,1,1,1,0,1,0,0,1,0,1,1,0,0,1,0,0,0,0,0,1,1,0,1,1,0,1,1,1,1,1,0,0,0,1,1,1,1,1,1,0,1,1,0,1,1,0,0,1,1,1,1,0,0,1,1,0,1,0,1,0,0,0,0,0,1,1,1,0,1,1,0,1,1,1,1,0,1,0,0,1,0,1,1,1,1,0,0,0,1,0,1,0,0,1,1,0,1,0,1,0,0,0,0,0,1,0,1,1,0,1,1,1,1,1,1,0,1,1,1,0,1,1,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,1,1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,1,0,1,1,0,1,0,1,0,0,0,1,1,1,0,1,1,1,1,0,1,1,1,1,1,1,0,1,1,0,1,1,0,0,0,0,0,1,0,1,1,1,1,1,0,1,0,1,1,1,0,0,1,0,1,0,0,0,1,1,1,0,0,0,0,0,1,0,1,0,1,0,1,0,0,1,0,0,0,0,0,1,0,1,1,1,1,1,0,0,1,0,1,0,1,1,0,1,1,1,1,1,1,0,1,0,0,0,1,1,1,0,0,0,0,1,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,1,1,0,1,1,1,0,0,1,1,0,1,1,1,1,0,1,1,1,0,0,1,0,0,0,0,0,0,0,0,1,1,0,1,0,1,1,0,1,0,0,1,0,0,0,1,1,0,0,1,0,0,0,1,1,1,1,0,1,1,1,1,0,0,1,0,0,1,0,1,1,0,0,1,0,1,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,1,0,1,1,1,0,0,1,0,1,0,1,0,0,0,0,0,0,1,0,0,0,1,0,1,0,1,1,1,1,1,0,0,0,1,0,1,1,1,1,0,1,0,0,0,1,1,1,0,0,1,1,1,1,1,0,0,1,0,1,1,1,0,0,0,0,0,1,1,1,0,0,0,1,0,0,1,0,0,0,0,1,0,1,1,0,1,1,0,1,0,1,0,1,1,1,1,1,0,0,1,0,1,0,0,1,0,1,0,1,0,0,1,1,1,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,0,1,1,1,0,1,0,1,0,1,1,0,1,0,1,1,1,1,1,1,0,1,1,0,1,0,0,0,0,1,1,0,0,1,1,1,0,0,1,0,0,1,0,1,0,0,0,1,0,1,0,0,1,0,1,1,0,0,1,1,0,0,0,0,1,0,0,1,0,0,1,0,0,0,1,1,0,1,1,0,0,1,1,1,0,0,1,1,1,0,1,0,1,1,0,1,1,1,1,1,0,0,0,1,1,0,1,0,1,1,0,1,0,0,0,1,0,1,1,1,0,0,0,0,1,1,1,0,1,1,1,1,0,0,0,1,1,1,0,0,0,0,1,0,1,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,1,1,1,1,0,1,0,1,1,1,0,0,0,0,1,1,0,0,0,1,0,0,0,1,1,1,0,1,1,0,1,0,1,0,0,1,1,1,1,0,1,1,1,0,1,0,0,1,0,0,1,0,1,0,0,1,0,1,1,1,1,0,0,0,1,0,0,0,1,0,1,0,1,1,0,0,1,1,0,1,1,1,0,0,0,0,0,0,1,1,0,0,1,1,1,0,0,1,0,1,0,0,1,0,0,1,0,1,1,1,1,1,0,0,1,0,0,1,1,0,1,0,1,1,1,1,0,1,0,1,0,1,0,0,1,1,1,0,1,1,0,1,1,0,1,0,1,0,0,0,0,1,0,0,1,1,1,1,1,0,0,1,0,1,0,0,0,0,0,1,1,0,1,0,0,1,1,0,0,0,1,1,1,0,1,1,0,1,1,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,0,0,1,0,0,0,0,1,0,1,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,1,0,1,1,1,1,0,0,1,1,0,0,1,1,0,0,0,1,1,0,1,1,1,1,0,0,1,0,1,0,1,0,1,1,0,0,0,0,0,0,1,0,1,0,0,0,1,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,0,0,1,1,0,1,0,0,0,1,0,0,0,0,1,1,1,0,0,1,0,0,0,0,0,0,0,1,1,1,0,0,0,1,0,0,0,1,1,1,1,0,0,1,1,0,0,1,1,1,0,0,0,0,1,0,0,0,0,1,0,1,1,1,0,1,0,0,1,1,1,1,1,1,1,0,0,0,0,1,1,0,0,0,1,1,1,1,1,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,1,1,1,0,1,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,1,1,1,1,0,1,0,0,0,1,1,1,0,1,0,1,1,0,1,1,0,0,0,0,1,0,0,1,0,1,0,1,1,0,1,0,0,0,0,0,0,1,1,1,0,0,1,0,0,1,1,1,1,0,1,0,0,0,1,0,1,1,1,0,0,1,1,1,1,0,1,1,0,0,0,1,1,1,1,1,1,0,0,0,1,1,0,1,0,1,0,1,0,0,1,0,0,1,0,1,1,0,0,1,0,0,0,1,0,0,1,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0,1,1,1,0,0,1,1,1,0,1,0,0,1,0,1,1,1,1,1,0,0,1,1,0,1,0,1,1,0,0,1,0,0,0,0,0,1,0,1,0,0,1,0,1,1,0,1,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,1,1,1,0,1,0,1,1,0,1,0,1,0,0,1,0,1,1,1,0,1,1,0,0,0,1,1,0,0,1,0,0,0,1,0,0,0,0,1,1,0,0,1,0,1,0,0,1,1,0,0,1,0,1,0,0,0,0,0,0,0,1,1,1,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0,0,1,1,0,1,0,1,1,1,0,0,0,0,0,0,0,1,1,1,1,0,0,1,1,0,0,0,0,1,0,1,0,0,0,0,0,1,1,1,0,1,1,0,1,0,0,1,0,1,1,0,1,1,1,0,0,0,0,0,1,1,1,1,1,0,1,0,1,1,0,1,1,1,0,0,1,0,1,1,0,0,0,1,0,0,0,0,0,0,1,0,1,1,1,0,1,1,0,1,0,1,1,0,0,1,1,0,0,1,1,0,0,0,1,1,1,1,0,0,0,0,1,0,1,1,1,1,1,0,1,0,1,1,0,0,1,0,1,1,0,1,0,0,1,0,0,1,0,0,1,1,1,0,1,1,1,1,1,0,1,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,1,0,0,1,1,1,1,0,0,1,1,1,0,0,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,0,1,0,0,1,1,1,0,1,1,1,1,0,0,0,1,0,0,1,0,0,1,0,1,1,0,1,1,0,0,0,1,1,1,0,1,1,0,0,0,1,0,1,0,0,1,0,1,1,1,1,0,1,0,0,0,0,0,0,0,1,1,1,0,0,1,0,1,0,1,1,1,1,0,1,1,1,0,0,0,0,0,1,0,1,1,0,0,0,1,1,1,0,1,0,1,0,1,1,0,1,0,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,0,0,1,0,0,1,0,0,1,1,0,0,1,1,0,1,1,1,0,0,1,1,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,1,0,1,1,0,1,0,1,1,1,0,1,1,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,1,1,0,0,1,0,1,0,0,1,0,0,1,1,1,0,0,0,0,0,0,1,1,1,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,1,1,0,1,1,1,1,1,0,1,0,1,0,1,1,0,0,0,0,1,0,0,1,1,0,0,1,0,0,0,1,1,0,0,0,1,0,1,0,1,1,0,1,1,0,1,0,0,0,0,1,0,1,1,0,1,0,0,0,1,1,1,0,1,0,1,0,0,0,1,1,1,1,1,0,0,0,0,1,0,1,0,1,1,1,0,0,1,1,1,1,0,1,0,1,1,0,1,1,0,1,1,1,1,1,0,1,0,1,1,1,0,1,1,1,0,1,1,0,0,0,1,0,1,1,1,0,1,1,0,0,1,1,0,0,1,0,0,0,1,0,1,1,0,1,1,0,1,0,0,1,0,1,0,0,0,0,1,1,0,1,1,0,0,0,0,1,0,1,1,0,0,0,1,0,1,1,0,0,0,0,0,1,0,1,0,1,0,1,0,0,1,0,0,0,1,1,1,1,1,0,1,0,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,1,1,0,1,0,0,1,1,0,1,0,0,1,0,1,0,1,1,1,0,0,0,0,1,0,1,0,1,0,1,1,0,1,1,0,1,1,1,0,0,0,0,1,0,0,0,0,0,0,1,0,1,1,0,1,1,0,0,0,0,1,0,0,1,0,0,0,1,1,1,1,0,0,0,1,0,1,0,1,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,1,1,0,1,0,1,1,0,1,1,1,0,0,0,1,1,1,0,1,1,0,0,0,0,0,0,1,1,1,0,1,1,1,1,1,1,0,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,1,0,0,1,0,1,0,1,0,0,0,1,1,1,0,1,0,0,0,1,0,0,1,1,1,1,1,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,1,0,0,0,0,1,0,0,1,1,0,0,1,1,0,1,1,0,0,0,1,0,1,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,1,0,1,0,1,1,0,0,1,1,1,1,0,1,0,1,1,0,1,1,0,1,1,1,0,1,1,0,1,0,0,1,1,1,0,0,0,1,1,0,1,1,0,1,0,0,0,1,0,0,1,0,1,1,1,0,0,1,1,0,1,1,1,0,1,0,1,0,1,1,1,0,1,1,0,1,0,0,1,1,0,1,1,0,1,0,0,0,0,0,1,1,0,1,1,1,1,0,1,1,0,1,0,1,0,1,0,0,0,1,1,0,0,1,0,0,1,1,1,0,0,1,0,1,1,1,0,1,0,0,0,0,0,0,1,1,0,1,1,1,0,1,0,0,0,0,1,1,1,1,1,0,1,0,1,1,1,1,1,0,0,1,1,1,0,0,0,0,0,0,0,1,0,1,1,0,1,1,1,1,0,1,1,1,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,0,0,1,1,0,1,1,1,1,0,0,0,0,1,0,1,0,1,1,0,0,1,0,1,1,1,0,1,0,0,1,1,0,1,1,1,0,0,1,1,1,0,1,0,0,1,1,1,0,1,1,1,1,1,1,0,0,1,1,0,1,1,0,0,0,1,0,0,1,0,1,0,1,1,1,0,1,1,0,0,0,0,1,0,0,1,0,0,1,1,0,0,1,1,1,1,0,0,0,0,1,0,1,1,1,0,0,1,1,1,0,0,1,1,1,1,0,0,0,0,1,0,1,0,0,1,1,0,0,0,1,0,1,1,1,0,0,1,0,1,1,0,1,1,0,1,0,1,1,0,1,0,1,1,1,0,0,1,0,1,0,1,0,0,0,1,1,0,1,0,0,1,1,0,0,1,0,0,1,0,0,1,1,0,0,0,0,1,1,0,1,0,1,0,0,1,0,1,1,0,1,1,1,1,0,0,0,1,1,1,1,0,1,1,1,0,0,1,1,0,1,0,0,0,0,1,1,1,0,0,0,1,0,1,1,1,0,0,0,1,1,0,0,1,0,1,0,1,0,1,0,0,1,0,0,1,1,1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,0,0,1,1,0,1,1,1,0,0,1,0,0,1,0,0,1,0,1,0,1,0,0,0,1,1,0,1,1,0,0,1,0,0,1,1,0,0,1,1,1,1,0,1,0,1,0,0,1,0,1,1,0,1,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,0,0,1,1,0,1,1,0,0,1,1,0,1,0,0,1,1,1,0,0,0,1,0,0,0,0,0,1,0,0,1,1,1,0,1,1,0,1,1,0,0,1,1,1,1,0,0,1,0,0,1,1,0,1,1,1,0,1,1,1,1,0,0,0,0,0,0,1,0,1,0,1,1,1,0,0,1,0,1,1,0,1,0,1,0,0,1,0,0,1,0,1,0,0,0,0,1,1,0,0,1,0,0,1,1,0,0,1,1,1,1,1,0,0,0,0,0,1,0,1,1,1,1,1,0,0,1,0,1,1,0,1,0,1,0,1,0,1,1,0,1,1,0,1,0,0,0,1,0,0,0,0,1,1,0,0,1,1,1,1,1,0,1,0,1,1,1,0,0,1,0,1,0,0,0,0,0,0,0,1,1,0,0,0,1,0,1,0,1,1,1,0,0,0,1,0,0,1,1,1,0,1,0,0,0,1,0,1,1,0,0,0,0,0,0,0,1,0,1,0,0,0,1,1,1,1,1,0,0,1,1,0,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,0,1,0,1,0,1,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,1,0,0,1,0,0,0,1,0,1,0,0,1,1,0,0,0,1,0,0,0,0,0,1,1,1,0,1,0,1,1,0,0,0,0,1,1,0,0,1,1,1,1,1,0,1,0,1,1,1,0,1,0,0,0,0,1,1,1,0,0,0,1,0,1,0,1,0,1,1,0,1,1,1,0,1,0,0,0,1,0,0,0,0,0,1,0,1,1,1,0,0,0,1,1,1,0,0,0,0,0,1,0,1,1,0,0,0,0,0,1,0,1,0,0,1,1,1,0,1,0,1,0,1,1,1,0,1,1,0,0,1,0,1,1,1,0,0,0,1,1,0,1,1,0,1,0,1,1,0,1,0,0,0,0,1,1,0,0,1,1,0,1,0,0,1,0,1,0,0,0,1,0,0,0,1,0,1,0,0,1,0,0,0,1,1,1,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,0,1,0,0,0,1,1,1,0,1,0,0,0,1,1,0,1,1,1,0,0,0,0,1,1,0,1,0,1,0,1,0,1,1,0,1,0,1,1,0,0,0,0,0,0,1,1,1,0,0,0,1,0,0,1,1,0,1,0,1,0,1,1,0,1,1,1,0,1,0,0,1,0,0,1,0,1,0,0,1,1,0,1,1,1,1,1,0,1,0,0,1,1,0,0,1,0,1,1,1,0,1,1,1,1,1,1,0,0,1,1,1,0,0,0,1,1,0,0,0,1,1,1,0,1,0,0,0,1,1,1,0,0,1,0,0,0,1,1,0,0,1,0,1,1,0,1,1,0,1,1,1,1,1,1,0,1,0,0,1,0,0,1,1,1,1,1,1,0,0,1,0,1,1,0,1,1,0,0,1,1,1,1,0,1,0,1,1,1,1,1,1,0,1,1,0,0,1,1,0,1,1,1,1,1,0,1,0,1,0,1,0,1,1,1,1,0,0,0,1,0,0,1,1,0,0,0,1,1,0,1,0,1,1,0,1,0,0,1,1,0,0,1,];
var gg_b = "1757012402/";

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
