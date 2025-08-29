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
case 3984:
case 913:
case 1007:
case 209:
case 3757:
case 3147:
case 2159:
case 3601:
case 413:
case 2796:
case 3821:
case 287:
case 650:
case 3201:
case 2522:
case 381:
case 1675:
case 76:
case 103:
case 72:
case 390:
case 137:
case 428:
case 3341:
case 2069:
case 1736:
case 504:
case 468:
case 883:
case 3576:
case 2516:
case 2948:
case 1586:
case 1652:
case 772:
case 3432:
case 1473:
case 1928:
case 3317:
case 2037:
case 1252:
case 3362:
case 399:
case 2171:
case 3691:
case 3291:
case 2688:
case 2706:
case 1561:
case 3554:
case 69:
case 3394:
case 824:
case 200:
case 1694:
case 2935:
case 3564:
case 1163:
case 1927:
case 1391:
case 1551:
case 3959:
case 2486:
case 2378:
case 1125:
case 2038:
case 643:
case 1053:
case 3592:
case 2634:
case 3703:
case 1217:
case 1995:
case 3888:
case 2234:
case 1878:
case 2687:
case 302:
case 2071:
case 4014:
case 757:
case 2461:
case 4063:
case 2059:
case 3148:
case 403:
case 1422:
case 1008:
case 221:
case 903:
case 3375:
case 3793:
case 2442:
case 128:
case 856:
case 2801:
case 1385:
case 1107:
case 3047:
case 1815:
case 3971:
case 292:
case 575:
case 514:
case 593:
case 3767:
case 2772:
case 3712:
case 113:
case 194:
case 1824:
case 3438:
case 763:
case 1658:
case 952:
case 2209:
case 3368:
case 4092:
case 1258:
case 10:
case 723:
case 3840:
case 1466:
case 3151:
case 3563:
case 1896:
case 378:
case 88:
case 1693:
case 2574:
case 452:
case 3514:
case 2:
case 3320:
case 718:
case 91:
case 2396:
case 2349:
case 2411:
case 4013:
case 1329:
case 1212:
case 2836:
case 688:
case 1667:
case 1054:
case 1192:
case 1612:
case 41:
case 3507:
case 2447:
case 784:
case 3230:
case 3630:
case 2435:
case 266:
case 3794:
case 3042:
case 4089:
case 2986:
case 675:
case 2323:
case 693:
case 1806:
case 1226:
case 353:
case 1203:
case 1823:
case 1170:
case 1626:
case 385:
case 2646:
case 4002:
case 2119:
case 1189:
case 2448:
case 3508:
case 604:
case 2951:
case 2830:
case 2527:
case 2731:
case 1855:
case 1547:
case 349:
case 1002:
case 3983:
case 3752:
case 1973:
case 1428:
case 3142:
case 1535:
case 2390:
case 550:
case 3469:
case 2019:
case 3339:
case 1089:
case 3243:
case 3846:
case 3899:
case 1070:
case 3080:
case 1330:
case 2595:
case 1064:
case 59:
case 3229:
case 3484:
case 3809:
case 3445:
case 2640:
case 1257:
case 2505:
case 3367:
case 1013:
case 535:
case 4054:
case 1220:
case 11:
case 254:
case 1910:
case 1154:
case 40:
case 3393:
case 1268:
case 477:
case 708:
case 3598:
case 2724:
case 1511:
case 3833:
case 1872:
case 3919:
case 2979:
case 2529:
case 330:
case 197:
case 982:
case 4088:
case 3205:
case 398:
case 3825:
case 3493:
case 2742:
case 3540:
case 2094:
case 3266:
case 1356:
case 3863:
case 517:
case 460:
case 3941:
case 3131:
case 3814:
case 725:
case 85:
case 3337:
case 2017:
case 1087:
case 2062:
case 2856:
case 3904:
case 934:
case 1034:
case 324:
case 658:
case 3281:
case 2536:
case 2118:
case 1671:
case 1259:
case 754:
case 1716:
case 2608:
case 673:
case 3807:
case 3627:
case 1659:
case 2041:
case 208:
case 101:
case 3250:
case 1848:
case 1021:
case 2455:
case 3650:
case 2761:
case 2348:
case 2860:
case 1506:
case 429:
case 3962:
case 838:
case 339:
case 890:
case 3295:
case 3917:
case 2175:
case 218:
case 867:
case 2607:
case 1121:
case 7:
case 2827:
case 3952:
case 1555:
case 2207:
case 3628:
case 3732:
case 591:
case 2141:
case 2465:
case 3660:
case 562:
case 2075:
case 1350:
case 901:
case 1443:
case 2104:
case 3015:
case 1590:
case 2335:
case 2406:
case 401:
case 3546:
case 3359:
case 1269:
case 3599:
case 4087:
case 3420:
case 2805:
case 1381:
case 546:
case 2225:
case 1901:
case 3371:
case 1284:
case 2663:
case 1637:
case 1429:
case 2263:
case 1684:
case 3674:
case 1500:
case 1645:
case 2194:
case 726:
case 1436:
case 497:
case 3078:
case 641:
case 2779:
case 3468:
case 3853:
case 1187:
case 3898:
case 3177:
case 2162:
case 160:
case 120:
case 997:
case 2915:
case 2297:
case 1985:
case 1710:
case 1944:
case 3975:
case 596:
case 2949:
case 3920:
case 3155:
case 3784:
case 2602:
case 2822:
case 4046:
case 3521:
case 622:
case 3737:
case 2689:
case 406:
case 1146:
case 447:
case 1322:
case 1219:
case 691:
case 947:
case 2342:
case 2103:
case 2670:
case 2270:
case 3065:
case 1040:
case 38:
case 1683:
case 2613:
case 3673:
case 3100:
case 3273:
case 2816:
case 2213:
case 379:
case 878:
case 1283:
case 4082:
case 4033:
case 1109:
case 2158:
case 2748:
case 67:
case 1182:
case 4009:
case 1861:
case 1760:
case 646:
case 2068:
case 607:
case 2386:
case 2923:
case 2478:
case 1531:
case 3813:
case 3149:
case 3759:
case 2058:
case 3616:
case 558:
case 645:
case 22:
case 2676:
case 3864:
case 2735:
case 1140:
case 1750:
case 3000:
case 2747:
case 4040:
case 3588:
case 1082:
case 2654:
case 2477:
case 3462:
case 3417:
case 840:
case 3055:
case 2900:
case 1705:
case 2380:
case 147:
case 849:
case 348:
case 3441:
case 2501:
case 3802:
case 3622:
case 405:
case 700:
case 3958:
case 3404:
case 2026:
case 2544:
case 3967:
case 53:
case 3090:
case 3912:
case 174:
case 3165:
case 272:
case 3771:
case 3870:
case 2711:
case 1099:
case 416:
case 1046:
case 3123:
case 595:
case 619:
case 1636:
case 3268:
case 733:
case 1161:
case 478:
case 3872:
case 1833:
case 3511:
case 2989:
case 3668:
case 352:
case 1882:
case 1775:
case 3744:
case 77:
case 2249:
case 3620:
case 566:
case 3220:
case 2893:
case 2296:
case 1051:
case 3064:
case 2463:
case 4061:
case 1484:
case 2414:
case 3474:
case 3257:
case 5:
case 2665:
case 243:
case 815:
case 3070:
case 2265:
case 542:
case 2010:
case 3330:
case 236:
case 1080:
case 2623:
case 3890:
case 2826:
case 3791:
case 1339:
case 847:
case 780:
case 2407:
case 149:
case 3547:
case 1752:
case 953:
case 2913:
case 3002:
case 3535:
case 762:
case 3973:
case 453:
case 2346:
case 2122:
case 1508:
case 2559:
case 3865:
case 1179:
case 3226:
case 153:
case 3823:
case 2787:
case 3203:
case 2734:
case 3603:
case 3495:
case 2110:
case 1180:
case 2954:
case 949:
case 3626:
case 3916:
case 600:
case 2022:
case 3239:
case 3427:
case 29:
case 1507:
case 2255:
case 235:
case 3343:
case 4079:
case 1042:
case 2655:
case 3450:
case 687:
case 1597:
case 250:
case 3329:
case 344:
case 2272:
case 3192:
case 3054:
case 4051:
case 2868:
case 2453:
case 609:
case 1320:
case 2498:
case 1061:
case 1471:
case 525:
case 3481:
case 3896:
case 2721:
case 1563:
case 271:
case 178:
case 2173:
case 2600:
case 3693:
case 3849:
case 3076:
case 2857:
case 3336:
case 440:
case 1086:
case 745:
case 3258:
case 1368:
case 1151:
case 3466:
case 3604:
case 2953:
case 3580:
case 2782:
case 1712:
case 2095:
case 2160:
case 4048:
case 3204:
case 481:
case 1971:
case 3301:
case 981:
case 3981:
case 2998:
case 500:
case 328:
case 1502:
case 938:
case 1793:
case 2050:
case 2128:
case 1375:
case 3344:
case 3905:
case 3385:
case 127:
case 811:
case 3107:
case 1047:
case 368:
case 869:
case 3641:
case 3422:
case 438:
case 1148:
case 3008:
case 1758:
case 3241:
case 490:
case 2799:
case 1011:
case 102:
case 2156:
case 499:
case 3217:
case 1703:
case 882:
case 3053:
case 2454:
case 1726:
case 3197:
case 3662:
case 860:
case 3878:
case 204:
case 1739:
case 2066:
case 3391:
case 1959:
case 625:
case 3125:
case 509:
case 2388:
case 1318:
case 2532:
case 3730:
case 2005:
case 1513:
case 1564:
case 834:
case 3294:
case 592:
case 3153:
case 1554:
case 2492:
case 1394:
case 275:
case 293:
case 2181:
case 666:
case 1834:
case 2278:
case 1691:
case 112:
case 3218:
case 2862:
case 741:
case 3877:
case 2056:
case 1291:
case 626:
case 1969:
case 2678:
case 2817:
case 3561:
case 1887:
case 3652:
case 2074:
case 1432:
case 3473:
case 402:
case 3063:
case 2387:
case 199:
case 1362:
case 2894:
case 15:
case 2231:
case 519:
case 902:
case 1419:
case 796:
case 1341:
case 510:
case 467:
case 3956:
case 4047:
case 2615:
case 3410:
case 967:
case 1644:
case 2470:
case 3675:
case 231:
case 1244:
case 3275:
case 303:
case 1285:
case 2321:
case 337:
case 2997:
case 2127:
case 1601:
case 1201:
case 1821:
case 3108:
case 2028:
case 2841:
case 3974:
case 1945:
case 1304:
case 2402:
case 801:
case 6:
case 1937:
case 3781:
case 3099:
case 2798:
case 1106:
case 1967:
case 1404:
case 951:
case 2143:
case 1912:
case 3879:
case 2753:
case 632:
case 2982:
case 3515:
case 1441:
case 2909:
case 3766:
case 1802:
case 1222:
case 793:
case 470:
case 2030:
case 2421:
case 4023:
case 148:
case 2434:
case 3373:
case 1383:
case 2313:
case 979:
case 3033:
case 1072:
case 788:
case 2364:
case 1462:
case 2487:
case 1892:
case 2661:
case 1588:
case 2136:
case 479:
case 2518:
case 3140:
case 3851:
case 2392:
case 1000:
case 2552:
case 2129:
case 3727:
case 2883:
case 623:
case 3531:
case 3009:
case 1216:
case 1616:
case 663:
case 1864:
case 1196:
case 4000:
case 1418:
case 608:
case 2376:
case 1769:
case 2036:
case 3182:
case 572:
case 3133:
case 295:
case 1587:
case 3577:
case 1049:
case 2651:
case 1096:
case 3683:
case 2354:
case 1100:
case 3632:
case 1673:
case 877:
case 2029:
case 3886:
case 3283:
case 179:
case 2043:
case 2680:
case 3485:
case 3444:
case 1065:
case 2280:
case 2797:
case 1210:
case 776:
case 3936:
case 2279:
case 1023:
case 1006:
case 3219:
case 3322:
case 1155:
case 2130:
case 1745:
case 258:
case 1737:
case 52:
case 3842:
case 4090:
case 3401:
case 704:
case 1898:
case 3187:
case 382:
case 3985:
case 3710:
case 2512:
case 930:
case 1533:
case 998:
case 1975:
case 79:
case 1078:
case 3436:
case 430:
case 2789:
case 3366:
case 1853:
case 1468:
case 334:
case 3684:
case 672:
case 3237:
case 964:
case 2702:
case 1674:
case 2558:
case 2398:
case 3381:
case 1509:
case 3901:
case 1546:
case 1918:
case 2308:
case 3669:
case 3991:
case 1599:
case 813:
case 2044:
case 66:
case 1260:
case 3590:
case 2648:
case 3835:
case 983:
case 2539:
case 311:
case 1228:
case 1808:
case 483:
case 3121:
case 2764:
case 369:
case 828:
case 329:
case 3555:
case 1952:
case 1783:
case 3773:
case 3395:
case 156:
case 2307:
case 803:
case 2869:
case 2987:
case 956:
case 1403:
case 2144:
case 1695:
case 1426:
case 2185:
case 1124:
case 3523:
case 3506:
case 2446:
case 233:
case 2235:
case 3848:
case 246:
case 3430:
case 532:
case 2247:
case 3716:
case 1369:
case 3259:
case 289:
case 1807:
case 2776:
case 1439:
case 1627:
case 27:
case 3659:
case 4015:
case 2325:
case 657:
case 2191:
case 523:
case 3671:
case 1681:
case 2611:
case 1337:
case 3374:
case 2433:
case 2314:
case 124:
case 2482:
case 3034:
case 3356:
case 518:
case 1458:
case 2837:
case 1814:
case 736:
case 1941:
case 1666:
case 3238:
case 4078:
case 397:
case 130:
case 1825:
case 2557:
case 1605:
case 1540:
case 1493:
case 3606:
case 3788:
case 797:
case 466:
case 3803:
case 3206:
case 3665:
case 2070:
case 1595:
case 125:
case 3010:
case 926:
case 3992:
case 336:
case 3346:
case 1448:
case 3559:
case 1951:
case 1731:
case 2855:
case 3399:
case 3839:
case 1390:
case 2428:
case 154:
case 1980:
case 2154:
case 2785:
case 3970:
case 1300:
case 2268:
case 1724:
case 3989:
case 1581:
case 252:
case 3309:
case 2668:
case 2064:
case 3463:
case 3902:
case 2013:
case 1372:
case 1640:
case 1083:
case 1505:
case 3116:
case 2620:
case 3425:
case 9:
case 2220:
case 2800:
case 3296:
case 3649:
case 2701:
case 1:
case 83:
case 1411:
case 895:
case 1282:
case 2329:
case 1233:
case 2267:
case 2054:
case 1682:
case 3453:
case 2922:
case 3016:
case 1209:
case 1609:
case 20:
case 2466:
case 3721:
case 277:
case 3537:
case 3820:
case 3600:
case 1574:
case 1132:
case 2693:
case 586:
case 1942:
case 954:
case 2849:
case 3584:
case 2226:
case 1777:
case 1560:
case 2823:
case 3290:
case 3787:
case 2170:
case 3734:
case 734:
case 1646:
case 1843:
case 359:
case 858:
case 1365:
case 925:
case 166:
case 2343:
case 2102:
case 1435:
case 3408:
case 760:
case 1323:
case 2548:
case 3022:
case 1306:
case 2239:
case 3976:
case 2427:
case 425:
case 782:
case 1634:
case 686:
case 2995:
case 2217:
case 1287:
case 3277:
case 2662:
case 3818:
case 304:
case 2617:
case 2878:
case 3799:
case 538:
case 4037:
case 1461:
case 3156:
case 649:
case 3746:
case 376:
case 1935:
case 1145:
case 3174:
case 1184:
case 2950:
case 3583:
case 2114:
case 2831:
case 1137:
case 581:
case 2927:
case 3852:
case 400:
case 2416:
case 705:
case 2125:
case 1378:
case 1885:
case 2579:
case 987:
case 3998:
case 1772:
case 3782:
case 2580:
case 3160:
case 294:
case 2204:
case 2641:
case 3709:
case 2422:
case 1324:
case 640:
case 1700:
case 228:
case 3128:
case 3050:
case 2385:
case 1221:
case 55:
case 1621:
case 4069:
case 2107:
case 4059:
case 3615:
case 2410:
case 1480:
case 3470:
case 3195:
case 502:
case 3060:
case 203:
case 331:
case 3804:
case 3224:
case 421:
case 1479:
case 1069:
case 419:
case 3624:
case 2956:
case 678:
case 846:
case 492:
case 3914:
case 3028:
case 0:
case 2974:
case 3402:
case 2542:
case 2007:
case 807:
case 2729:
case 87:
case 1159:
case 3127:
case 992:
case 1796:
case 187:
case 388:
case 3925:
case 2218:
case 1171:
case 1706:
case 2618:
case 3056:
case 1688:
case 747:
case 3817:
case 3678:
case 880:
case 1723:
case 2153:
case 3492:
case 2743:
case 100:
case 393:
case 4038:
case 314:
case 527:
case 410:
case 1948:
case 2586:
case 1516:
case 1138:
case 774:
case 2652:
case 1045:
case 3105:
case 1084:
case 4071:
case 1037:
case 3387:
case 3464:
case 1168:
case 656:
case 2578:
case 3661:
case 3946:
case 4057:
case 3136:
case 2082:
case 3434:
case 1012:
case 2373:
case 1654:
case 2033:
case 1067:
case 3313:
case 3364:
case 1254:
case 4020:
case 3487:
case 16:
case 3883:
case 2531:
case 3286:
case 3832:
case 1873:
case 2009:
case 1120:
case 737:
case 551:
case 1676:
case 12:
case 4068:
case 2930:
case 2851:
case 3392:
case 2140:
case 1955:
case 3552:
case 1093:
case 2750:
case 3129:
case 3302:
case 1972:
case 3819:
case 1026:
case 1544:
case 2879:
case 836:
case 3753:
case 1810:
case 172:
case 1711:
case 2524:
case 2705:
case 3642:
case 3370:
case 1900:
case 1380:
case 3030:
case 247:
case 3421:
case 341:
case 2766:
case 2199:
case 3279:
case 630:
case 2146:
case 2219:
case 1424:
case 2322:
case 2756:
case 1415:
case 3680:
case 3043:
case 4039:
case 1103:
case 1270:
case 3280:
case 205:
case 89:
case 2842:
case 1139:
case 1949:
case 3541:
case 972:
case 3714:
case 472:
case 3940:
case 1602:
case 2774:
case 1202:
case 1822:
case 46:
case 2943:
case 3517:
case 395:
case 850:
case 1292:
case 3562:
case 2577:
case 42:
case 373:
case 1965:
case 728:
case 92:
case 96:
case 768:
case 3488:
case 3376:
case 2316:
case 1264:
case 2886:
case 3029:
case 1664:
case 683:
case 3651:
case 4012:
case 1431:
case 2109:
case 639:
case 1158:
case 713:
case 3251:
case 163:
case 1347:
case 3526:
case 123:
case 70:
case 3044:
case 2590:
case 1335:
case 4041:
case 3792:
case 2443:
case 1104:
case 3085:
case 3988:
case 564:
case 408:
case 777:
case 3308:
case 1978:
case 1423:
case 2269:
case 1895:
case 211:
case 317:
case 2121:
case 1607:
case 2555:
case 1207:
case 3713:
case 1827:
case 2395:
case 1530:
case 3859:
case 744:
case 2835:
case 3248:
case 1141:
case 184:
case 2436:
case 555:
case 1924:
case 1779:
case 2187:
case 583:
case 1697:
case 260:
case 804:
case 2985:
case 2710:
case 282:
case 3871:
case 220:
case 1297:
case 1780:
case 1915:
case 2572:
case 2811:
case 2134:
case 2305:
case 1881:
case 1496:
case 3398:
case 4062:
case 1625:
case 84:
case 1311:
case 1449:
case 2901:
case 132:
case 2245:
case 3838:
case 1663:
case 2429:
case 876:
case 2684:
case 1263:
case 3593:
case 1194:
case 3702:
case 2645:
case 3440:
case 1253:
case 1017:
case 893:
case 1856:
case 2374:
case 3433:
case 2034:
case 3325:
case 1698:
case 1536:
case 322:
case 2271:
case 932:
case 1118:
case 2188:
case 2671:
case 1298:
case 3611:
case 3557:
case 2722:
case 2596:
case 670:
case 3409:
case 2549:
case 2238:
case 3845:
case 1348:
case 2523:
case 418:
case 1860:
case 3446:
case 68:
case 3499:
case 1977:
case 2565:
case 3987:
case 3144:
case 71:
case 3934:
case 1004:
case 2259:
case 1786:
case 3776:
case 888:
case 389:
case 463:
case 423:
case 4075:
case 37:
case 1041:
case 1828:
case 923:
case 3647:
case 108:
case 2021:
case 3235:
case 307:
case 346:
case 752:
case 963:
case 1455:
case 4081:
case 1334:
case 2432:
case 1105:
case 3037:
case 2317:
case 1907:
case 1894:
case 1166:
case 528:
case 1631:
case 2576:
case 3516:
case 568:
case 44:
case 4066:
case 976:
case 114:
case 3765:
case 2111:
case 1278:
case 212:
case 4005:
case 1056:
case 2291:
case 513:
case 3706:
case 2969:
case 1817:
case 3159:
case 2601:
case 3749:
case 2821:
case 387:
case 644:
case 3522:
case 188:
case 2984:
case 1028:
case 1150:
case 808:
case 1963:
case 2147:
case 2419:
case 1224:
case 1489:
case 3479:
case 2768:
case 3069:
case 2644:
case 4027:
case 131:
case 1060:
case 238:
case 290:
case 2285:
case 2793:
case 2375:
case 1050:
case 931:
case 2502:
case 3700:
case 3315:
case 2035:
case 227:
case 2047:
case 361:
case 1709:
case 3059:
case 3324:
case 2148:
case 2938:
case 4060:
case 2758:
case 823:
case 4028:
case 2971:
case 392:
case 3885:
case 2589:
case 3844:
case 3911:
case 779:
case 1852:
case 14:
case 2959:
case 832:
case 475:
case 1908:
case 770:
case 2318:
case 1476:
case 1174:
case 1532:
case 3145:
case 176:
case 3935:
case 914:
case 2513:
case 993:
case 1005:
case 3184:
case 3947:
case 3137:
case 3331:
case 1799:
case 3071:
case 202:
case 1156:
case 3461:
case 751:
case 537:
case 3634:
case 2352:
case 3891:
case 2726:
case 1677:
case 310:
case 2888:
case 3323:
case 1408:
case 1976:
case 1022:
case 19:
case 436:
case 2459:
case 4010:
case 3447:
case 159:
case 857:
case 326:
case 135:
case 2794:
case 366:
case 1655:
case 2042:
case 3961:
case 285:
case 3646:
case 3246:
case 3699:
case 3843:
case 2762:
case 3560:
case 2717:
case 1690:
case 2180:
case 1110:
case 1537:
case 1200:
case 1173:
case 1545:
case 3574:
case 1584:
case 2514:
case 2438:
case 1857:
case 637:
case 3609:
case 2741:
case 2840:
case 1340:
case 1498:
case 2471:
case 3349:
case 450:
case 1249:
case 1696:
case 613:
case 82:
case 2186:
case 1116:
case 739:
case 1538:
case 3566:
case 1893:
case 86:
case 1649:
case 1296:
case 3240:
case 1463:
case 2437:
case 2312:
case 2484:
case 1073:
case 3640:
case 1902:
case 2636:
case 3724:
case 471:
case 3581:
case 1989:
case 1867:
case 1571:
case 2236:
case 354:
case 4016:
case 3715:
case 2553:
case 1970:
case 2775:
case 2393:
case 1407:
case 249:
case 1913:
case 2983:
case 50:
case 3390:
case 2142:
case 1346:
case 2508:
case 724:
case 3830:
case 1399:
case 3731:
case 365:
case 4022:
case 2846:
case 1265:
case 136:
case 1010:
case 99:
case 2718:
case 459:
case 2469:
case 730:
case 3778:
case 872:
case 1826:
case 308:
case 133:
case 2250:
case 1647:
case 1235:
case 107:
case 1635:
case 146:
case 2650:
case 1247:
case 2369:
case 740:
case 2227:
case 189:
case 2807:
case 1776:
case 4044:
case 2439:
case 17:
case 3041:
case 1987:
case 1869:
case 255:
case 2295:
case 4001:
case 1934:
case 3175:
case 3543:
case 1144:
case 3004:
case 917:
case 2124:
case 3860:
case 1446:
case 560:
case 1499:
case 2266:
case 1520:
case 2458:
case 569:
case 1837:
case 605:
case 2131:
case 3874:
case 1845:
case 3529:
case 2205:
case 191:
case 1557:
case 2825:
case 298:
case 2605:
case 2540:
case 4091:
case 3742:
case 3152:
case 2281:
case 749:
case 1325:
case 122:
case 162:
case 1568:
case 1191:
case 2681:
case 3298:
case 264:
case 2337:
case 800:
case 3062:
case 3856:
case 2412:
case 2384:
case 2274:
case 2457:
case 480:
case 3663:
case 462:
case 3866:
case 1702:
case 2674:
case 3194:
case 1593:
case 3496:
case 501:
case 753:
case 615:
case 3805:
case 3311:
case 3225:
case 332:
case 922:
case 810:
case 3915:
case 2582:
case 1871:
case 1512:
case 3881:
case 1567:
case 2533:
case 3924:
case 2656:
case 2719:
case 3779:
case 2468:
case 3931:
case 1539:
case 3141:
case 3850:
case 819:
case 2808:
case 318:
case 2228:
case 1764:
case 821:
case 3827:
case 1713:
case 2918:
case 433:
case 1988:
case 3978:
case 892:
case 2599:
case 145:
case 946:
case 1044:
case 933:
case 323:
case 3075:
case 1085:
case 1792:
case 3335:
case 2015:
case 907:
case 2049:
case 3158:
case 2096:
case 3748:
case 3361:
case 3264:
case 3193:
case 3816:
case 2273:
case 1029:
case 2876:
case 1707:
case 3664:
case 3057:
case 496:
case 727:
case 1376:
case 601:
case 3906:
case 2418:
case 8:
case 767:
case 3386:
case 3692:
case 3292:
case 2587:
case 195:
case 3965:
case 1562:
case 866:
case 2784:
case 3602:
case 2745:
case 3822:
case 251:
case 2957:
case 3202:
case 158:
case 357:
case 1763:
case 1725:
case 2920:
case 3126:
case 1680:
case 2610:
case 2190:
case 941:
case 3670:
case 2475:
case 3270:
case 1280:
case 4030:
case 2023:
case 1279:
case 3289:
case 2006:
case 682:
case 3501:
case 3379:
case 2441:
case 1909:
case 1389:
case 2802:
case 2622:
case 3900:
case 712:
case 2993:
case 1030:
case 3711:
case 2870:
case 458:
case 634:
case 2106:
case 75:
case 2404:
case 1575:
case 2889:
case 1143:
case 1302:
case 2090:
case 1753:
case 1982:
case 2912:
case 3003:
case 825:
case 865:
case 3735:
case 196:
case 2494:
case 995:
case 43:
case 973:
case 1552:
case 3955:
case 2000:
case 3747:
case 4036:
case 2813:
case 2939:
case 36:
case 2149:
case 1832:
case 2216:
case 516:
case 790:
case 3120:
case 495:
case 1708:
case 93:
case 473:
case 738:
case 3676:
case 2332:
case 2903:
case 1434:
case 3990:
case 1313:
case 2383:
case 3254:
case 629:
case 1999:
case 3168:
case 611:
case 505:
case 1136:
case 1518:
case 669:
case 2588:
case 1946:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1756429201/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,1,0,0,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,1,0,1,0,0,0,0,1,0,1,0,0,0,0,0,0,1,1,1,0,1,1,1,1,1,0,1,0,0,0,1,0,1,1,0,1,0,0,0,1,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,1,1,1,0,1,0,0,1,1,1,1,1,1,1,1,0,1,1,1,0,0,1,0,0,1,1,1,1,1,0,0,0,1,1,0,0,0,1,1,1,0,0,0,0,0,1,0,1,1,1,1,0,1,1,0,1,1,1,1,0,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,1,1,0,1,0,1,1,1,0,1,1,0,0,1,0,0,0,0,0,1,0,1,0,1,0,1,1,0,0,0,0,1,0,0,1,1,1,0,1,0,0,1,1,1,1,0,1,1,0,1,1,1,1,0,0,1,1,0,1,1,0,0,0,0,0,1,0,1,1,0,0,0,0,0,1,1,0,0,1,0,1,0,1,1,0,1,0,0,0,0,1,0,0,1,1,0,1,1,1,1,0,1,1,0,0,1,0,1,0,0,0,1,0,1,0,0,0,0,1,1,0,0,1,0,1,0,0,0,0,1,0,0,1,0,1,0,1,1,0,1,1,1,1,0,0,1,0,0,0,1,1,1,0,0,1,1,0,1,1,0,0,1,0,0,1,1,0,0,0,1,1,1,0,1,0,1,1,1,1,1,0,1,0,1,1,0,1,0,1,0,0,1,0,1,0,1,1,0,0,1,1,1,0,0,1,0,1,0,1,0,0,0,1,1,0,1,1,0,0,0,1,0,0,1,0,1,1,0,1,1,0,0,1,0,1,1,1,1,0,1,1,0,1,0,1,1,1,1,1,1,1,0,1,1,0,1,0,1,0,0,1,0,0,1,0,1,1,0,1,0,1,0,1,0,0,1,1,1,0,0,1,0,0,1,0,1,0,1,0,0,0,0,0,0,1,0,0,1,0,1,1,0,0,0,0,1,1,1,0,1,1,0,0,1,1,1,0,1,1,1,1,0,1,0,1,1,1,1,1,0,1,0,0,0,0,0,0,1,0,1,0,0,1,1,1,0,1,1,1,1,0,1,1,0,0,0,1,1,0,0,1,1,0,1,1,1,1,0,0,0,1,0,1,0,1,1,0,0,0,1,0,0,1,0,1,1,0,0,0,1,0,0,0,1,0,0,0,1,1,0,0,0,1,0,0,1,0,1,0,1,0,1,0,1,0,1,1,0,0,1,0,0,1,0,0,0,0,0,1,0,1,0,0,1,0,0,0,0,1,1,1,0,1,1,0,0,0,1,1,0,0,1,1,0,1,1,1,0,1,0,1,0,1,0,0,0,1,0,0,1,1,0,1,1,0,0,1,1,0,1,0,1,0,0,1,0,1,1,1,0,1,1,1,1,0,0,1,1,0,0,0,0,0,1,1,1,0,0,0,0,1,0,0,1,0,0,1,1,0,1,1,0,1,0,0,1,0,0,0,1,1,0,0,1,1,1,0,0,1,0,1,0,0,0,0,0,0,1,0,0,0,1,1,0,0,1,0,0,0,1,1,0,0,0,0,1,0,0,0,0,1,1,1,1,1,1,0,1,0,0,1,1,0,1,1,1,1,1,1,0,0,1,1,0,1,0,1,0,1,1,1,1,0,0,1,0,0,1,0,1,1,0,0,0,1,1,0,1,0,1,0,1,0,1,1,0,1,1,0,1,0,1,0,0,0,1,0,1,0,0,1,0,0,1,1,0,0,1,1,0,1,1,0,0,1,1,0,1,1,0,1,0,1,0,0,0,1,0,1,0,1,1,1,0,0,1,0,0,0,1,0,1,0,1,0,1,0,1,0,0,0,0,0,1,1,0,1,1,0,0,0,0,0,1,1,1,0,1,0,0,0,0,1,1,1,0,1,0,0,1,0,0,0,1,1,1,0,1,0,1,1,0,0,0,0,1,0,1,0,1,1,0,1,0,0,0,0,0,1,1,1,0,0,0,1,0,0,0,0,0,1,1,0,0,1,0,0,0,0,1,1,0,1,1,0,0,0,1,1,1,1,1,0,0,0,1,0,0,1,0,0,0,0,1,1,0,1,0,1,1,1,1,0,1,0,0,0,0,0,0,1,1,0,0,1,0,0,0,0,1,1,0,0,1,0,0,1,0,1,1,1,0,0,0,1,0,0,0,0,1,1,0,1,0,1,1,0,1,0,1,0,1,1,1,1,1,0,1,1,1,1,0,0,0,1,0,0,0,1,1,1,0,0,1,0,1,1,1,0,0,0,1,0,0,1,0,0,1,1,1,0,1,1,1,1,0,1,1,1,0,1,1,0,1,0,0,0,1,1,0,0,1,1,0,1,0,1,1,0,1,1,0,0,0,0,1,0,1,0,1,1,1,1,1,1,0,1,0,0,0,1,0,0,1,0,0,1,1,0,0,1,1,1,1,1,0,1,1,0,0,0,0,0,1,0,1,0,1,1,0,0,1,1,0,0,0,0,0,0,1,0,0,0,1,1,1,1,1,1,0,1,1,1,1,0,1,0,1,1,0,0,1,1,1,0,1,1,0,1,0,1,0,0,1,0,1,0,1,1,0,1,1,0,0,0,0,1,1,0,1,0,1,0,0,1,0,1,0,1,1,0,1,0,1,0,0,0,1,1,1,1,0,0,0,1,0,1,1,0,1,0,0,0,1,1,0,1,1,1,1,0,1,0,1,0,1,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,1,1,1,0,0,1,1,1,1,0,0,1,1,1,0,0,1,1,1,0,0,0,0,0,0,0,1,1,1,0,1,1,1,1,0,1,0,0,0,1,1,0,0,0,1,1,1,0,1,0,1,0,1,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,1,0,1,1,1,1,0,0,0,1,1,0,0,0,1,1,0,1,0,1,1,1,0,0,0,0,1,1,1,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,1,1,0,0,1,0,0,1,1,0,1,0,1,1,0,1,0,1,0,0,0,1,1,1,0,0,1,0,0,0,0,1,0,0,0,1,1,0,0,1,1,0,0,1,0,0,0,1,0,0,1,1,0,0,1,1,1,0,1,0,1,1,0,1,1,0,1,1,1,0,0,1,0,1,0,1,0,0,1,0,1,1,0,0,0,0,0,1,0,0,1,0,0,1,1,1,0,0,1,0,1,0,0,1,0,1,0,0,1,0,0,1,1,0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,1,0,1,1,1,0,1,0,0,1,1,1,1,1,0,1,1,1,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,1,1,1,1,0,1,1,1,1,1,1,0,0,0,1,1,1,1,0,0,0,1,1,0,1,1,0,1,0,0,1,1,1,1,1,0,0,1,1,0,0,1,0,0,1,1,0,0,0,0,0,1,0,0,1,0,1,1,1,0,1,0,0,1,0,1,0,1,0,1,0,1,1,0,0,1,0,1,0,1,0,0,1,0,0,0,1,0,0,0,0,1,0,0,0,1,1,1,0,0,0,1,0,0,1,1,1,1,0,0,1,0,0,0,1,1,1,1,0,1,0,0,1,0,1,1,0,0,1,1,0,0,0,1,1,0,1,1,0,0,0,1,0,1,1,1,1,1,0,0,1,1,1,1,1,0,0,0,1,0,1,1,0,1,1,1,1,1,1,0,1,0,1,1,0,1,1,1,1,1,1,1,1,1,0,0,1,0,0,0,0,0,0,1,1,1,1,0,0,0,0,1,0,0,0,0,1,1,0,1,0,0,0,0,0,1,0,0,0,0,1,0,1,1,0,0,0,0,1,0,1,0,0,1,1,0,0,0,0,1,0,0,1,0,0,1,1,1,0,1,1,0,0,1,0,0,1,0,0,0,0,0,1,1,0,0,1,0,0,1,0,0,1,0,0,0,1,1,1,0,1,0,0,0,1,1,0,1,0,0,0,1,1,1,1,1,1,1,1,0,0,0,1,1,1,0,0,1,0,0,0,0,0,1,0,1,0,0,1,0,0,0,1,1,0,1,1,1,0,0,1,1,0,0,1,0,0,1,0,1,0,1,1,1,0,0,0,0,1,0,0,1,1,0,0,1,0,1,0,0,0,0,1,1,1,1,1,0,1,0,1,1,1,0,0,0,0,1,1,1,1,0,1,1,0,1,0,0,1,0,0,0,0,0,1,0,0,1,1,0,0,0,0,0,1,1,0,1,0,0,0,1,1,0,1,1,1,0,1,1,0,1,1,0,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,1,1,1,1,1,0,1,1,1,1,0,1,0,1,0,0,1,0,1,1,1,0,0,0,0,0,1,0,0,0,1,1,0,0,0,0,1,1,1,0,1,1,0,0,1,0,1,0,1,0,1,0,1,1,1,0,0,1,0,1,1,1,0,0,1,1,1,1,1,1,0,0,1,1,1,1,0,0,1,0,1,1,0,0,0,1,0,1,0,1,1,0,0,1,0,1,0,1,0,1,1,1,1,0,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,1,1,0,1,1,1,0,0,1,0,0,0,1,1,0,1,1,0,1,1,0,1,1,1,1,1,0,0,1,0,1,0,0,0,1,1,1,1,1,0,1,1,1,1,0,0,0,1,1,0,1,0,1,1,1,0,1,0,0,0,0,0,0,0,1,1,0,1,0,1,0,0,0,0,1,1,0,0,0,1,1,1,1,0,1,1,0,0,1,0,0,0,0,1,0,0,0,0,1,1,0,1,0,1,0,0,0,1,0,0,1,1,1,1,1,0,0,0,0,1,1,1,1,0,0,1,0,0,1,1,1,0,1,1,0,0,0,0,0,1,0,1,0,1,1,0,0,0,0,1,0,0,0,1,0,0,0,1,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,0,0,0,1,0,0,0,0,0,1,0,0,0,1,1,1,0,0,0,0,0,0,0,1,0,1,1,0,0,0,1,1,1,0,1,1,1,0,0,1,1,1,0,1,0,0,0,1,0,0,1,0,0,1,0,1,0,0,0,0,1,1,0,0,1,0,1,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,1,1,1,1,0,1,0,1,0,0,1,1,1,1,1,1,0,1,0,1,1,0,1,1,0,1,0,0,0,1,0,1,0,1,1,0,0,1,1,1,0,1,0,1,0,1,1,0,1,1,0,0,0,0,1,1,1,0,0,1,1,1,1,1,1,1,1,0,1,1,1,0,0,1,1,1,0,0,0,0,1,1,1,0,1,1,1,0,1,0,1,0,1,1,0,1,1,1,1,0,0,0,1,0,1,1,0,0,0,1,0,1,0,1,1,0,0,0,0,1,0,1,0,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,0,1,1,1,0,1,0,1,0,0,0,1,1,1,0,0,1,0,1,0,1,1,1,0,0,1,0,0,1,1,0,1,0,1,0,0,0,1,1,0,0,1,1,0,1,0,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,1,1,1,1,1,0,1,0,0,0,1,1,1,1,1,0,0,0,0,1,1,0,0,1,1,1,1,0,0,1,0,1,1,0,1,1,0,1,0,1,0,1,1,0,1,0,1,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,1,0,0,1,1,1,0,1,0,1,1,1,0,1,1,1,0,0,0,0,1,1,1,0,1,0,0,1,0,1,1,0,0,1,0,1,0,1,0,1,1,0,0,1,0,0,1,1,1,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,1,1,0,0,0,0,0,1,1,1,0,1,1,0,1,0,1,0,0,1,0,1,0,0,1,1,0,0,0,0,0,1,1,1,0,1,0,1,1,0,1,0,0,1,0,0,1,0,1,0,0,1,1,0,1,0,1,0,1,0,0,0,1,0,1,1,1,0,0,1,0,0,1,0,1,1,0,1,0,1,0,0,0,1,1,0,1,1,1,1,1,1,1,0,0,1,0,1,1,0,0,1,0,1,0,0,1,1,0,0,0,1,1,1,0,1,1,1,0,0,1,1,0,0,0,1,1,1,0,0,1,1,1,0,0,0,1,0,0,1,0,1,0,0,0,1,1,1,0,0,1,0,1,0,0,0,0,0,1,1,1,0,0,0,0,0,1,0,1,1,0,0,0,1,0,0,1,0,1,1,0,0,0,1,1,0,0,0,0,0,1,1,0,1,0,0,0,0,0,1,0,0,1,1,0,1,0,0,1,0,1,0,1,1,0,0,0,1,0,0,1,0,0,0,0,1,0,0,1,1,0,0,0,1,0,0,0,0,1,1,1,1,0,1,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,0,0,0,1,0,0,1,1,1,1,1,1,0,1,0,0,0,1,0,1,0,1,1,0,1,0,1,1,1,0,0,0,1,1,1,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0,1,1,1,0,0,1,1,0,0,1,0,0,0,1,1,1,1,0,0,1,0,0,1,0,0,1,1,1,1,1,0,1,1,0,1,1,1,1,0,0,0,1,1,1,0,0,0,1,1,0,1,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,1,0,0,0,1,1,0,1,0,1,1,1,1,1,0,1,0,1,0,0,1,1,0,0,1,1,1,0,1,1,0,1,1,1,0,1,1,1,0,1,1,0,1,1,1,0,0,0,0,1,0,0,1,0,0,0,0,0,1,1,0,1,0,0,0,0,1,0,1,0,0,1,0,0,0,0,1,1,1,1,0,1,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,1,1,1,0,0,1,1,0,0,0,0,1,0,1,1,1,1,1,0,1,0,0,1,0,1,0,1,1,0,0,1,0,0,1,1,1,0,0,0,0,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,1,1,1,0,1,0,0,1,0,0,1,1,1,1,0,1,1,1,0,1,0,0,1,1,0,0,0,0,0,1,1,0,1,0,1,0,1,0,1,0,0,1,0,1,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,1,0,1,0,1,1,0,1,0,0,1,0,0,0,0,0,0,1,0,0,1,0,1,1,0,1,0,1,1,1,0,1,1,0,1,1,1,1,0,0,1,0,1,0,0,0,1,1,1,0,0,1,1,1,1,1,1,0,0,1,1,0,1,1,0,1,0,0,0,1,1,1,0,0,0,0,0,0,1,0,0,1,1,1,0,0,1,0,1,0,0,1,0,1,1,1,0,1,0,1,0,1,1,0,0,1,1,1,1,0,0,1,0,0,1,0,0,0,0,0,0,0,1,1,1,1,0,1,0,1,1,1,0,0,1,1,0,0,0,0,1,0,1,0,0,1,1,0,1,1,0,0,0,1,1,0,1,1,0,0,1,0,1,0,0,0,0,1,1,1,0,0,1,0,0,1,1,1,1,0,0,0,1,1,1,0,0,1,0,0,1,0,1,0,0,0,1,0,1,0,0,1,1,0,1,0,0,1,1,0,0,0,0,1,0,1,1,0,1,0,1,1,1,1,1,1,0,1,0,0,0,0,0,0,0,1,0,1,1,0,0,1,1,0,1,1,0,0,0,1,0,1,0,1,1,0,0,0,0,1,1,1,1,1,1,1,0,1,0,0,1,0,1,0,0,0,1,1,0,0,0,1,0,1,0,1,0,1,1,1,0,1,0,1,0,1,0,0,0,0,0,1,1,1,0,0,0,1,1,0,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,1,1,1,1,0,1,1,1,1,0,1,0,1,0,0,1,1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,0,1,1,0,0,1,0,0,1,1,1,1,1,1,1,1,0,0,0,0,1,0,0,1,0,0,1,0,0,1,1,1,0,1,1,0,1,0,0,0,0,1,0,1,0,1,1,1,1,0,0,1,1,0,0,0,1,0,1,0,0,0,0,0,1,1,1,0,0,0,1,0,1,0,0,1,0,1,1,0,1,1,0,1,0,0,1,1,0,0,1,1,1,1,0,0,0,0,1,0,0,1,1,1,1,0,1,0,1,0,0,0,1,1,0,1,1,1,1,1,1,1,1,0,1,0,1,0,0,1,0,1,1,0,1,0,0,1,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,0,0,1,0,0,1,1,0,0,1,1,1,1,0,0,0,1,1,1,0,1,0,0,1,1,1,0,1,0,1,0,1,1,0,1,0,1,1,0,0,0,0,1,0,1,1,1,1,1,0,1,1,1,0,0,0,0,1,1,0,1,1,1,1,0,1,1,0,0,0,1,1,0,0,0,0,0,1,0,0,1,1,1,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,0,0,1,1,0,1,1,0,1,1,0,0,1,0,1,0,0,1,1,0,1,1,1,1,0,1,0,0,1,0,1,1,1,0,1,1,1,1,1,1,0,0,0,0,0,1,0,1,1,1,0,0,1,0,0,0,1,1,0,1,1,1,1,1,0,0,0,1,0,1,1,0,0,0,1,1,0,1,0,0,1,0,0,1,1,1,1,1,1,0,0,1,0,1,1,1,0,0,1,0,0,1,0,0,1,0,1,1,1,1,1,0,0,1,0,1,1,0,1,0,0,0,1,0,0,1,1,0,1,1,0,0,0,0,1,1,1,1,1,1,0,0,0,];
var gg_b = "1756429201/";

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
