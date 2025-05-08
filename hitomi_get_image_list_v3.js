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
case 2159:
case 3719:
case 2927:
case 2284:
case 438:
case 2606:
case 3008:
case 4026:
case 49:
case 1716:
case 791:
case 2244:
case 2234:
case 1668:
case 1770:
case 2745:
case 1407:
case 3314:
case 604:
case 1317:
case 3516:
case 3999:
case 1461:
case 3817:
case 3483:
case 3113:
case 2785:
case 608:
case 779:
case 2069:
case 3196:
case 1913:
case 3360:
case 3513:
case 1397:
case 3394:
case 2041:
case 2031:
case 3436:
case 1860:
case 1268:
case 3596:
case 771:
case 1439:
case 2081:
case 1993:
case 3486:
case 3799:
case 2829:
case 1970:
case 208:
case 2935:
case 2854:
case 4023:
case 2603:
case 2524:
case 799:
case 2077:
case 1796:
case 2805:
case 2985:
case 3915:
case 687:
case 1595:
case 1445:
case 1617:
case 1435:
case 3614:
case 2470:
case 3294:
case 3260:
case 1297:
case 3795:
case 3011:
case 2543:
case 2226:
case 2939:
case 981:
case 2949:
case 4084:
case 485:
case 94:
case 2257:
case 468:
case 2344:
case 423:
case 2334:
case 2183:
case 2837:
case 2626:
case 1000:
case 287:
case 2496:
case 2223:
case 2546:
case 989:
case 2384:
case 428:
case 2657:
case 2907:
case 412:
case 2586:
case 1195:
case 2739:
case 3424:
case 3778:
case 3459:
case 1217:
case 3214:
case 676:
case 4038:
case 341:
case 4048:
case 3675:
case 318:
case 1373:
case 966:
case 2070:
case 1045:
case 180:
case 3177:
case 38:
case 1174:
case 314:
case 815:
case 194:
case 1085:
case 3974:
case 2312:
case 90:
case 3232:
case 1941:
case 3569:
case 806:
case 737:
case 555:
case 3963:
case 3141:
case 2:
case 1390:
case 3367:
case 1801:
case 1981:
case 2720:
case 3618:
case 582:
case 3301:
case 3122:
case 1566:
case 178:
case 3632:
case 3581:
case 1166:
case 3698:
case 2096:
case 1400:
case 173:
case 174:
case 3774:
case 1310:
case 3169:
case 3218:
case 3531:
case 3810:
case 3491:
case 1352:
case 3621:
case 353:
case 1574:
case 3763:
case 362:
case 2465:
case 349:
case 3024:
case 926:
case 1027:
case 1376:
case 506:
case 3275:
case 855:
case 358:
case 882:
case 1056:
case 2392:
case 1781:
case 1879:
case 1722:
case 1420:
case 1252:
case 3408:
case 1690:
case 251:
case 106:
case 1151:
case 3601:
case 219:
case 767:
case 917:
case 1965:
case 3502:
case 2469:
case 578:
case 880:
case 16:
case 3279:
case 2880:
case 611:
case 1702:
case 83:
case 574:
case 894:
case 893:
case 1673:
case 115:
case 1061:
case 1007:
case 2830:
case 644:
case 2248:
case 2212:
case 3086:
case 2688:
case 1039:
case 2422:
case 619:
case 3751:
case 2858:
case 3046:
case 2648:
case 1089:
case 651:
case 2441:
case 2431:
case 3201:
case 1882:
case 1902:
case 3398:
case 3565:
case 259:
case 243:
case 1610:
case 1821:
case 1898:
case 580:
case 598:
case 1652:
case 3267:
case 1842:
case 248:
case 375:
case 53:
case 727:
case 3332:
case 3342:
case 1551:
case 2194:
case 2160:
case 2819:
case 993:
case 994:
case 3762:
case 2514:
case 2393:
case 166:
case 557:
case 3067:
case 1090:
case 998:
case 980:
case 2717:
case 3157:
case 1154:
case 1345:
case 1129:
case 2370:
case 3523:
case 817:
case 1957:
case 300:
case 3835:
case 1661:
case 3954:
case 3845:
case 1926:
case 3655:
case 3683:
case 1105:
case 1562:
case 3853:
case 1327:
case 973:
case 3962:
case 3324:
case 536:
case 2797:
case 3359:
case 1076:
case 2038:
case 3646:
case 1207:
case 1162:
case 3526:
case 978:
case 1639:
case 1554:
case 1649:
case 2092:
case 3557:
case 1529:
case 3856:
case 2088:
case 3079:
case 1356:
case 3255:
case 2484:
case 3754:
case 3872:
case 2917:
case 1372:
case 2434:
case 2313:
case 2594:
case 792:
case 4016:
case 3355:
case 1147:
case 1137:
case 3134:
case 3937:
case 1855:
case 1883:
case 1934:
case 1903:
case 1944:
case 3343:
case 1307:
case 1525:
case 3414:
case 1187:
case 3184:
case 1635:
case 3259:
case 3075:
case 1833:
case 1984:
case 1843:
case 80:
case 3506:
case 906:
case 2693:
case 3725:
case 2423:
case 915:
case 136:
case 459:
case 2213:
case 386:
case 443:
case 2616:
case 783:
case 96:
case 411:
case 866:
case 3747:
case 377:
case 3021:
case 75:
case 2815:
case 2293:
case 1571:
case 451:
case 3042:
case 826:
case 50:
case 2457:
case 2968:
case 1349:
case 1339:
case 3584:
case 1587:
case 3386:
case 1285:
case 1656:
case 3460:
case 1846:
case 3494:
case 1836:
case 1627:
case 3659:
case 1109:
case 157:
case 1547:
case 566:
case 2270:
case 3909:
case 3346:
case 1235:
case 2866:
case 3475:
case 361:
case 946:
case 3014:
case 2369:
case 1750:
case 881:
case 1712:
case 4022:
case 27:
case 2910:
case 638:
case 4081:
case 3138:
case 2976:
case 3148:
case 1938:
case 1948:
case 1992:
case 403:
case 2764:
case 3188:
case 4077:
case 2790:
case 3611:
case 1988:
case 3820:
case 2579:
case 238:
case 3432:
case 3592:
case 2057:
case 3150:
case 3628:
case 29:
case 2026:
case 2710:
case 3538:
case 233:
case 3548:
case 3211:
case 3482:
case 1950:
case 2874:
case 369:
case 342:
case 2863:
case 1097:
case 3060:
case 2331:
case 4069:
case 2202:
case 2167:
case 1788:
case 889:
case 2322:
case 2101:
case 2990:
case 1792:
case 1811:
case 1490:
case 1620:
case 1158:
case 1530:
case 3311:
case 223:
case 3958:
case 3401:
case 747:
case 1580:
case 2669:
case 3780:
case 2198:
case 2450:
case 2302:
case 2121:
case 2412:
case 2231:
case 2241:
case 3730:
case 3740:
case 181:
case 664:
case 2132:
case 2488:
case 2851:
case 628:
case 2118:
case 2492:
case 4002:
case 2542:
case 2448:
case 2365:
case 2521:
case 189:
case 2582:
case 252:
case 3328:
case 1891:
case 264:
case 3800:
case 2034:
case 2044:
case 476:
case 2003:
case 3208:
case 1558:
case 1130:
case 1140:
case 2175:
case 268:
case 3940:
case 3229:
case 3254:
case 1989:
case 1809:
case 3419:
case 1555:
case 1583:
case 3936:
case 3309:
case 3946:
case 1186:
case 1416:
case 1949:
case 1306:
case 3325:
case 3507:
case 3139:
case 1543:
case 1504:
case 1226:
case 3806:
case 176:
case 1623:
case 504:
case 503:
case 923:
case 3743:
case 489:
case 2617:
case 2595:
case 356:
case 3783:
case 753:
case 749:
case 1002:
case 3736:
case 3746:
case 2217:
case 78:
case 2515:
case 714:
case 481:
case 2427:
case 196:
case 985:
case 741:
case 1739:
case 1749:
case 2472:
case 1586:
case 3161:
case 3884:
case 3933:
case 1907:
case 1104:
case 1143:
case 3539:
case 1961:
case 803:
case 3387:
case 1536:
case 1546:
case 3803:
case 1496:
case 3983:
case 3834:
case 2000:
case 1837:
case 1847:
case 3589:
case 3337:
case 1303:
case 337:
case 1344:
case 732:
case 2996:
case 2814:
case 2461:
case 3172:
case 2199:
case 2317:
case 950:
case 1745:
case 2770:
case 3066:
case 1203:
case 1234:
case 3247:
case 2020:
case 2716:
case 3823:
case 1956:
case 3495:
case 246:
case 1323:
case 3545:
case 3535:
case 775:
case 1284:
case 3959:
case 876:
case 3924:
case 3362:
case 1862:
case 1159:
case 3553:
case 1805:
case 1953:
case 1985:
case 3074:
case 1077:
case 1326:
case 1524:
case 1206:
case 3527:
case 1559:
case 2713:
case 1603:
case 3153:
case 3185:
case 3826:
case 1945:
case 1935:
case 3857:
case 3209:
case 2970:
case 3556:
case 1357:
case 3354:
case 3145:
case 3687:
case 1756:
case 938:
case 2916:
case 2599:
case 2439:
case 2894:
case 3671:
case 896:
case 3724:
case 1041:
case 3478:
case 576:
case 3759:
case 2119:
case 1248:
case 1511:
case 457:
case 1830:
case 2061:
case 2673:
case 2276:
case 2702:
case 1191:
case 26:
case 1900:
case 1880:
case 1292:
case 1128:
case 1650:
case 3380:
case 62:
case 655:
case 2965:
case 3095:
case 2151:
case 2210:
case 2420:
case 2252:
case 2664:
case 2551:
case 111:
case 148:
case 2264:
case 436:
case 2652:
case 615:
case 3015:
case 2898:
case 1477:
case 143:
case 3474:
case 2882:
case 1441:
case 3078:
case 282:
case 2273:
case 1591:
case 2089:
case 1528:
case 1638:
case 379:
case 417:
case 1692:
case 5:
case 2039:
case 2049:
case 1250:
case 3358:
case 4052:
case 2566:
case 1093:
case 1720:
case 2801:
case 2981:
case 2364:
case 426:
case 2390:
case 851:
case 3019:
case 1:
case 2163:
case 1312:
case 1402:
case 23:
case 2769:
case 1350:
case 2174:
case 298:
case 674:
case 544:
case 1508:
case 3630:
case 2879:
case 3908:
case 1920:
case 3888:
case 1392:
case 3658:
case 3120:
case 1388:
case 3230:
case 3848:
case 2741:
case 2731:
case 551:
case 4073:
case 1348:
case 2574:
case 1013:
case 2310:
case 680:
case 273:
case 2777:
case 1096:
case 844:
case 843:
case 2166:
case 3099:
case 2072:
case 693:
case 63:
case 345:
case 2171:
case 2272:
case 1213:
case 236:
case 3568:
case 1693:
case 2361:
case 2833:
case 2984:
case 2645:
case 2635:
case 951:
case 1768:
case 2187:
case 1670:
case 2525:
case 455:
case 2855:
case 2883:
case 2903:
case 2509:
case 2685:
case 2147:
case 2137:
case 4039:
case 769:
case 2256:
case 742:
case 415:
case 4061:
case 636:
case 2235:
case 1270:
case 2547:
case 2537:
case 944:
case 2109:
case 2627:
case 2836:
case 2389:
case 3058:
case 2656:
case 948:
case 2587:
case 761:
case 2906:
case 617:
case 3219:
case 1968:
case 1457:
case 3454:
case 3699:
case 2571:
case 1426:
case 1815:
case 1696:
case 1050:
case 2239:
case 9:
case 1012:
case 2385:
case 2105:
case 2926:
case 2957:
case 2345:
case 2154:
case 3714:
case 2607:
case 3215:
case 1316:
case 2090:
case 2064:
case 3893:
case 2723:
case 3517:
case 4072:
case 3994:
case 3197:
case 3409:
case 1396:
case 226:
case 3295:
case 1594:
case 1560:
case 1313:
case 3447:
case 3615:
case 3437:
case 3896:
case 1403:
case 2372:
case 3487:
case 1484:
case 3117:
case 2757:
case 1088:
case 731:
case 2529:
case 493:
case 4053:
case 494:
case 1092:
case 2554:
case 2162:
case 2207:
case 3471:
case 1797:
case 498:
case 480:
case 2689:
case 2505:
case 1132:
case 281:
case 2068:
case 534:
case 2473:
case 59:
case 1231:
case 1518:
case 1241:
case 1182:
case 24:
case 1302:
case 1121:
case 538:
case 3921:
case 1198:
case 3802:
case 392:
case 850:
case 2580:
case 112:
case 124:
case 1277:
case 2530:
case 2540:
case 4000:
case 2158:
case 2464:
case 834:
case 996:
case 1084:
case 185:
case 3087:
case 168:
case 2140:
case 2558:
case 64:
case 2452:
case 2220:
case 3782:
case 1034:
case 810:
case 3037:
case 164:
case 1677:
case 2180:
case 3798:
case 681:
case 289:
case 2476:
case 1521:
case 1598:
case 372:
case 1448:
case 1542:
case 3918:
case 1681:
case 700:
case 1118:
case 1488:
case 1851:
case 2200:
case 2988:
case 2808:
case 1023:
case 3767:
case 1790:
case 828:
case 2320:
case 35:
case 3176:
case 2948:
case 823:
case 777:
case 702:
case 2712:
case 1602:
case 568:
case 3480:
case 2750:
case 3110:
case 2017:
case 3366:
case 564:
case 3590:
case 3440:
case 552:
case 2792:
case 908:
case 1990:
case 528:
case 1101:
case 1964:
case 1167:
case 2788:
case 1202:
case 3458:
case 512:
case 1341:
case 903:
case 523:
case 524:
case 2738:
case 1665:
case 3831:
case 3841:
case 384:
case 1874:
case 3877:
case 3576:
case 1377:
case 3374:
case 133:
case 2600:
case 885:
case 1579:
case 312:
case 726:
case 192:
case 328:
case 825:
case 3575:
case 85:
case 2608:
case 1718:
case 2467:
case 2958:
case 1025:
case 324:
case 2311:
case 3277:
case 240:
case 51:
case 583:
case 3132:
case 584:
case 1263:
case 1666:
case 3450:
case 2780:
case 3198:
case 1802:
case 565:
case 588:
case 3182:
case 3302:
case 1266:
case 937:
case 172:
case 3438:
case 1663:
case 1865:
case 2758:
case 3118:
case 3851:
case 525:
case 3681:
case 1351:
case 905:
case 3175:
case 368:
case 81:
case 916:
case 135:
case 1732:
case 3084:
case 1975:
case 385:
case 2930:
case 1087:
case 2940:
case 364:
case 888:
case 3677:
case 890:
case 570:
case 2208:
case 2391:
case 4011:
case 3003:
case 107:
case 1047:
case 2800:
case 865:
case 1251:
case 3952:
case 757:
case 1480:
case 3369:
case 1110:
case 37:
case 1869:
case 3602:
case 1152:
case 3567:
case 1590:
case 1430:
case 927:
case 3501:
case 507:
case 229:
case 3265:
case 2188:
case 3790:
case 621:
case 350:
case 1573:
case 2308:
case 3179:
case 669:
case 2192:
case 1979:
case 2611:
case 3023:
case 2148:
case 1062:
case 125:
case 2512:
case 1374:
case 2538:
case 333:
case 2498:
case 39:
case 3874:
case 184:
case 183:
case 11:
case 1877:
case 2112:
case 2588:
case 165:
case 807:
case 736:
case 1054:
case 3057:
case 1029:
case 2442:
case 2432:
case 3202:
case 1164:
case 592:
case 3990:
case 3665:
case 1831:
case 1841:
case 221:
case 3341:
case 3776:
case 1552:
case 2060:
case 2184:
case 2414:
case 547:
case 2333:
case 677:
case 432:
case 1030:
case 1040:
case 4046:
case 2134:
case 2144:
case 2355:
case 999:
case 2947:
case 4086:
case 2937:
case 1299:
case 1395:
case 3296:
case 971:
case 3616:
case 286:
case 3895:
case 3213:
case 3457:
case 1454:
case 1168:
case 1699:
case 1429:
case 2042:
case 1219:
case 3613:
case 277:
case 2747:
case 1405:
case 2737:
case 2082:
case 3815:
case 3696:
case 2098:
case 2659:
case 2534:
case 2503:
case 2544:
case 2494:
case 2624:
case 495:
case 2460:
case 3878:
case 202:
case 2909:
case 2346:
case 2336:
case 2584:
case 4083:
case 2106:
case 1058:
case 2849:
case 991:
case 2386:
case 2001:
case 3393:
case 3514:
case 1215:
case 3316:
case 3406:
case 3160:
case 1409:
case 3819:
case 1960:
case 2655:
case 2853:
case 2885:
case 3050:
case 2126:
case 2246:
case 2523:
case 2643:
case 2604:
case 1714:
case 2157:
case 200:
case 462:
case 2845:
case 449:
case 2929:
case 2856:
case 3092:
case 2557:
case 2283:
case 2079:
case 781:
case 3088:
case 48:
case 414:
case 3797:
case 2359:
case 1678:
case 2962:
case 2324:
case 422:
case 2233:
case 430:
case 74:
case 3038:
case 1471:
case 2827:
case 441:
case 3048:
case 3594:
case 3434:
case 1896:
case 147:
case 3444:
case 1295:
case 2729:
case 2872:
case 2754:
case 3114:
case 319:
case 199:
case 4042:
case 2318:
case 351:
case 620:
case 2408:
case 2951:
case 632:
case 477:
case 260:
case 402:
case 2375:
case 3238:
case 2004:
case 1466:
case 3292:
case 3650:
case 1100:
case 1380:
case 2083:
case 1928:
case 3880:
case 3638:
case 2036:
case 3648:
case 2046:
case 4075:
case 3431:
case 2679:
case 3688:
case 3212:
case 3481:
case 3858:
case 2751:
case 3692:
case 3250:
case 2332:
case 486:
case 344:
case 1474:
case 4018:
case 2565:
case 2398:
case 359:
case 695:
case 2267:
case 2382:
case 1680:
case 28:
case 1258:
case 591:
case 3508:
case 2675:
case 218:
case 2766:
case 222:
case 1708:
case 3720:
case 2618:
case 2282:
case 2301:
case 654:
case 2411:
case 653:
case 2864:
case 2181:
case 2232:
case 2569:
case 1019:
case 2963:
case 571:
case 4067:
case 891:
case 2698:
case 3096:
case 2621:
case 2491:
case 2541:
case 2531:
case 68:
case 2581:
case 1099:
case 2642:
case 2379:
case 1658:
case 3388:
case 599:
case 1280:
case 1908:
case 3920:
case 3392:
case 400:
case 2763:
case 253:
case 254:
case 2275:
case 1240:
case 2024:
case 1743:
case 3707:
case 156:
case 567:
case 3761:
case 2868:
case 992:
case 1189:
case 773:
case 3555:
case 1936:
case 1309:
case 2978:
case 1229:
case 1254:
case 3257:
case 3989:
case 1325:
case 609:
case 3504:
case 3543:
case 1139:
case 778:
case 3226:
case 1986:
case 1806:
case 3186:
case 3416:
case 1654:
case 3961:
case 3133:
case 1549:
case 1629:
case 1387:
case 3586:
case 1904:
case 1161:
case 105:
case 1933:
case 1884:
case 3887:
case 3907:
case 2091:
case 2715:
case 3183:
case 1605:
case 3413:
case 972:
case 1347:
case 3344:
case 3303:
case 601:
case 3546:
case 1844:
case 387:
case 1983:
case 1834:
case 3837:
case 3626:
case 3847:
case 2459:
case 3871:
case 2694:
case 440:
case 73:
case 527:
case 2214:
case 431:
case 794:
case 907:
case 3739:
case 3749:
case 1495:
case 1625:
case 3323:
case 2570:
case 3244:
case 1237:
case 1156:
case 1823:
case 3159:
case 2719:
case 1585:
case 1287:
case 1924:
case 1362:
case 2483:
case 2455:
case 2593:
case 3972:
case 2314:
case 1271:
case 72:
case 3745:
case 3735:
case 4094:
case 2443:
case 1066:
case 2433:
case 4060:
case 469:
case 2999:
case 2516:
case 3022:
case 3756:
case 1724:
case 1478:
case 3031:
case 429:
case 2394:
case 2360:
case 1759:
case 2596:
case 984:
case 983:
case 2897:
case 2436:
case 1063:
case 2446:
case 3524:
case 1305:
case 1527:
case 3559:
case 1153:
case 3644:
case 1185:
case 805:
case 3805:
case 1074:
case 3953:
case 3985:
case 3077:
case 3326:
case 3357:
case 1354:
case 3684:
case 1135:
case 2170:
case 1329:
case 3935:
case 1209:
case 3772:
case 3938:
case 2176:
case 1550:
case 1138:
case 1611:
case 3200:
case 1228:
case 1192:
case 3320:
case 3992:
case 1291:
case 1188:
case 129:
case 2366:
case 3017:
case 1014:
case 4063:
case 2440:
case 683:
case 2590:
case 3712:
case 2152:
case 2869:
case 840:
case 3750:
case 2110:
case 690:
case 1094:
case 3097:
case 2363:
case 169:
case 839:
case 2822:
case 625:
case 2458:
case 65:
case 2164:
case 2901:
case 3788:
case 1442:
case 1432:
case 288:
case 265:
case 2173:
case 1588:
case 1112:
case 2576:
case 1482:
case 3950:
case 1421:
case 2877:
case 284:
case 1691:
case 2005:
case 3912:
case 1211:
case 1548:
case 861:
case 34:
case 2802:
case 2982:
case 829:
case 1780:
case 2921:
case 3068:
case 381:
case 2942:
case 3473:
case 1730:
case 2775:
case 901:
case 437:
case 2274:
case 2025:
case 521:
case 1958:
case 3158:
case 1608:
case 2718:
case 3464:
case 542:
case 3530:
case 3540:
case 2009:
case 292:
case 405:
case 2047:
case 2721:
case 207:
case 3220:
case 909:
case 561:
case 3300:
case 3410:
case 2087:
case 2975:
case 2742:
case 2732:
case 3558:
case 3130:
case 3140:
case 1758:
case 2865:
case 3476:
case 272:
case 139:
case 2278:
case 2870:
case 3957:
case 3661:
case 3073:
case 100:
case 1845:
case 1157:
case 3154:
case 3468:
case 2714:
case 3345:
case 3129:
case 1523:
case 1885:
case 1853:
case 1905:
case 3926:
case 3105:
case 1655:
case 1683:
case 3385:
case 1286:
case 2994:
case 1762:
case 914:
case 2409:
case 3064:
case 1067:
case 922:
case 3090:
case 768:
case 2517:
case 3723:
case 1001:
case 2816:
case 2425:
case 930:
case 877:
case 2914:
case 3372:
case 2487:
case 4019:
case 326:
case 3010:
case 2813:
case 2896:
case 247:
case 953:
case 2447:
case 2437:
case 1705:
case 949:
case 1636:
case 1646:
case 1233:
case 3162:
case 586:
case 1243:
case 3327:
case 3689:
case 1962:
case 3261:
case 1324:
case 1359:
case 2760:
case 1686:
case 1079:
case 3639:
case 3649:
case 1557:
case 3529:
case 1123:
case 1856:
case 995:
case 186:
case 1725:
case 710:
case 2395:
case 3171:
case 3272:
case 733:
case 734:
case 2619:
case 1947:
case 2080:
case 1937:
case 3934:
case 3855:
case 1383:
case 3137:
case 800:
case 1134:
case 3509:
case 317:
case 1103:
case 3653:
case 1259:
case 3984:
case 3833:
case 1075:
case 3843:
case 1343:
case 4078:
case 3645:
case 1184:
case 1861:
case 3635:
case 3285:
case 3253:
case 1925:
case 2058:
case 3349:
case 3886:
case 1584:
case 975:
case 1909:
case 1889:
case 3235:
case 77:
case 471:
case 1460:
case 3846:
case 3109:
case 2378:
case 1659:
case 1503:
case 357:
case 500:
case 3571:
case 1082:
case 2315:
case 1737:
case 2405:
case 4095:
case 3703:
case 1021:
case 2219:
case 1042:
case 1032:
case 2699:
case 2454:
case 1787:
case 499:
case 750:
case 787:
case 2019:
case 3163:
case 1122:
case 3390:
case 1221:
case 2708:
case 122:
case 398:
case 2630:
case 141:
case 118:
case 1675:
case 33:
case 645:
case 3977:
case 2850:
case 860:
case 3085:
case 394:
case 1177:
case 18:
case 114:
case 3174:
case 2848:
case 3027:
case 2838:
case 3376:
case 2240:
case 2230:
case 1275:
case 153:
case 3574:
case 154:
case 162:
case 1763:
case 2888:
case 832:
case 2280:
case 3722:
case 158:
case 2892:
case 3056:
case 1379:
case 2120:
case 1581:
case 1522:
case 245:
case 1966:
case 378:
case 776:
case 3352:
case 1621:
case 1774:
case 560:
case 3563:
case 36:
case 2928:
case 841:
case 1055:
case 691:
case 2380:
case 2100:
case 2991:
case 814:
case 3007:
case 813:
case 1004:
case 88:
case 1033:
case 3875:
case 986:
case 1375:
case 2330:
case 315:
case 3061:
case 160:
case 271:
case 3210:
case 708:
case 679:
case 2095:
case 2711:
case 1601:
case 3151:
case 3420:
case 3252:
case 549:
case 704:
case 299:
case 1502:
case 3264:
case 671:
case 902:
case 1267:
case 541:
case 1565:
case 1398:
case 291:
case 513:
case 58:
case 3049:
case 849:
case 1751:
case 862:
case 2358:
case 1679:
case 32:
case 3089:
case 858:
case 2078:
case 3765:
case 1046:
case 4040:
case 977:
case 2500:
case 1516:
case 1817:
case 3814:
case 1443:
case 3407:
case 1593:
case 1196:
case 3913:
case 2362:
case 2959:
case 2287:
case 2609:
case 1719:
case 759:
case 4054:
case 2127:
case 2156:
case 1008:
case 929:
case 3716:
case 2237:
case 2247:
case 227:
case 509:
case 711:
case 2545:
case 1570:
case 484:
case 3793:
case 4005:
case 2625:
case 41:
case 2556:
case 2857:
case 2687:
case 2135:
case 2354:
case 2225:
case 2647:
case 2415:
case 2637:
case 3713:
case 2185:
case 2153:
case 2305:
case 942:
case 719:
case 969:
case 1436:
case 2671:
case 1446:
case 3860:
case 1897:
case 3268:
case 1513:
case 2759:
case 3397:
case 3489:
case 627:
case 2478:
case 1486:
case 2572:
case 3449:
case 1193:
case 3599:
case 3916:
case 2561:
case 2205:
case 1795:
case 1011:
case 407:
case 931:
case 2986:
case 2149:
case 940:
case 2325:
case 2662:
case 2254:
case 2229:
case 1978:
case 2936:
case 3178:
case 2309:
case 2946:
case 3485:
case 3453:
case 2783:
case 2755:
case 1868:
case 4071:
case 637:
case 101:
case 1294:
case 1260:
case 3297:
case 3368:
case 3617:
case 3445:
case 1614:
case 3195:
case 216:
case 3217:
case 109:
case 2736:
case 2746:
case 3427:
case 3697:
case 1778:
case 3515:
case 1459:
case 3000:
case 1028:
case 2844:
case 2955:
case 2983:
case 2834:
case 7:
case 237:
case 3578:
case 2337:
case 2347:
case 939:
case 1715:
case 2589:
case 2161:
case 2943:
case 2904:
case 2933:
case 3472:
case 2387:
case 2629:
case 2539:
case 2262:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1746702001/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,1,0,0,1,0,1,0,1,0,1,0,0,0,0,1,0,1,0,0,0,0,1,1,0,1,1,1,1,0,0,1,1,1,1,1,1,1,1,0,1,0,0,0,0,0,0,1,1,1,1,0,1,0,0,0,0,1,1,0,0,1,1,1,1,0,0,1,0,0,0,1,1,1,1,0,1,1,0,1,1,0,1,0,1,0,0,1,0,1,0,0,0,1,0,1,0,0,0,1,1,0,0,0,1,1,1,0,1,0,1,1,0,1,1,0,0,1,0,0,0,1,0,1,1,0,0,0,1,0,0,0,1,0,1,1,0,0,1,0,1,0,1,0,0,0,1,1,0,0,0,0,1,1,0,1,1,1,0,1,0,1,0,1,1,1,0,1,1,0,0,1,1,1,0,1,0,1,0,1,1,0,1,1,1,1,0,0,1,0,0,1,0,1,0,1,0,0,1,1,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,1,1,0,1,1,1,0,0,1,1,0,1,0,0,0,1,0,0,1,1,1,0,1,0,0,1,0,1,1,1,1,0,0,1,1,1,1,0,0,0,0,1,1,0,0,0,1,1,0,0,1,0,0,1,1,1,0,0,0,1,0,0,0,1,1,0,1,0,1,1,1,1,0,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,1,1,1,0,0,0,0,1,0,1,0,1,0,0,0,0,1,0,0,0,1,0,0,0,1,1,0,1,1,0,0,0,1,1,1,0,1,0,0,1,1,1,1,0,1,1,0,1,0,0,0,1,1,0,0,1,0,0,1,0,1,1,1,0,1,0,0,1,1,1,1,0,0,0,0,1,0,1,0,0,0,1,0,1,0,1,1,0,1,0,1,0,0,0,1,1,0,1,1,0,1,0,0,0,0,1,1,0,0,1,0,1,1,1,1,1,0,0,0,1,1,1,0,1,1,0,1,0,0,0,0,0,1,0,1,0,0,0,1,0,1,0,1,0,0,1,0,0,0,0,0,1,1,0,1,0,0,0,0,1,1,0,0,1,1,0,0,1,1,1,0,0,1,0,0,0,1,1,1,0,0,1,1,1,0,0,1,1,0,1,1,0,1,0,0,1,1,0,0,0,0,0,0,0,1,0,1,1,1,0,1,1,0,0,0,0,0,1,0,1,0,1,0,0,1,1,0,1,0,0,1,0,1,0,1,1,0,0,1,0,1,0,0,1,1,0,0,1,1,1,1,1,0,1,1,0,0,1,0,1,0,1,0,1,0,1,1,1,0,1,0,1,0,0,1,1,0,0,0,0,0,1,1,0,1,0,0,1,0,0,0,1,1,0,1,0,0,0,1,0,1,0,1,1,1,0,0,0,1,0,1,1,0,0,0,1,0,0,0,1,1,1,0,0,0,0,0,1,1,0,0,0,0,0,1,0,1,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,1,0,0,1,0,1,1,0,1,1,1,0,1,0,0,0,1,0,0,1,1,0,1,0,1,0,0,0,0,1,0,1,0,1,0,0,0,1,0,1,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,1,1,0,0,0,1,1,1,1,0,1,1,0,0,0,1,1,0,0,0,0,1,0,1,1,0,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0,1,1,1,0,1,0,1,0,1,1,1,1,1,0,1,0,1,0,0,0,1,0,0,0,1,1,0,1,0,0,0,0,1,1,0,0,1,0,1,1,1,0,0,1,0,0,1,1,1,0,1,0,0,0,0,0,1,0,1,1,0,1,1,0,0,1,0,1,0,0,0,0,1,1,1,0,1,1,0,0,0,0,1,1,1,0,0,0,1,0,0,1,0,1,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,1,0,0,1,0,0,1,1,1,1,0,1,1,0,1,0,0,0,0,1,1,1,0,1,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,0,0,1,1,0,1,1,1,0,0,0,0,0,1,1,1,1,0,1,0,1,0,1,0,1,1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,1,1,0,1,0,1,1,0,1,1,0,1,1,1,1,0,0,1,0,1,1,1,1,1,1,0,1,1,1,1,1,0,1,0,0,1,1,0,0,1,1,1,1,0,0,0,0,1,0,1,0,1,0,1,0,1,1,1,1,0,1,1,1,0,0,0,0,1,1,1,1,0,0,1,1,1,0,0,1,0,0,0,1,1,1,0,1,0,0,1,1,1,0,0,1,1,0,0,0,0,0,0,1,1,1,1,0,1,0,0,1,0,1,1,0,1,1,1,1,0,1,1,1,0,1,1,0,1,1,1,0,1,1,1,0,0,0,1,1,0,1,0,0,0,0,0,1,0,0,1,1,1,0,0,0,0,1,1,1,0,1,0,1,1,0,1,1,1,1,0,0,1,0,0,0,1,0,0,0,1,1,1,1,0,1,1,1,1,0,1,1,0,1,0,1,1,1,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,1,1,1,1,1,1,0,1,1,1,0,1,1,0,1,0,0,0,1,1,0,0,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,0,1,0,1,1,0,1,0,1,1,1,0,1,0,0,1,1,0,1,0,0,0,0,1,0,1,1,1,0,1,0,0,0,1,1,1,0,0,1,0,0,1,1,1,0,1,1,0,0,0,1,0,1,0,0,1,0,0,0,1,1,1,1,0,0,0,1,1,0,1,1,0,1,0,1,0,0,1,1,0,1,1,1,0,1,1,0,1,1,0,0,1,1,0,0,0,0,0,1,1,1,1,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,1,1,1,0,1,1,1,1,1,1,0,1,0,1,1,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,1,1,0,0,1,0,0,0,1,1,0,1,0,1,0,0,1,1,1,1,0,1,0,1,1,0,1,0,1,0,1,0,0,0,0,0,0,1,0,0,0,1,1,0,0,0,0,1,0,0,1,1,0,1,0,0,1,1,0,0,1,0,1,1,1,0,1,1,0,1,0,0,0,0,0,1,0,0,1,0,1,1,1,0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,0,1,1,0,0,0,0,0,1,1,1,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0,0,1,1,1,1,1,0,1,1,1,1,0,0,0,0,0,1,0,0,0,0,0,1,1,0,0,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,0,1,0,0,1,1,0,0,0,1,1,0,1,1,0,0,0,0,1,1,1,0,1,1,1,1,1,1,0,1,1,0,1,1,1,0,0,1,0,0,1,1,1,0,1,0,0,1,0,1,1,0,0,1,0,0,1,0,0,1,1,0,1,0,1,0,1,0,1,0,0,0,0,0,1,1,0,1,1,0,0,0,0,0,0,1,0,0,1,1,0,1,0,1,1,1,0,1,1,0,1,0,1,0,1,1,0,1,0,1,0,0,1,0,1,0,1,1,1,1,1,0,1,0,0,1,0,0,0,1,1,1,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,0,1,1,1,0,1,1,1,0,1,0,1,1,0,0,0,0,1,0,1,0,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,1,1,1,0,0,0,0,1,0,1,1,0,0,1,1,0,0,0,0,1,0,1,0,0,0,1,0,0,0,1,0,1,1,0,0,0,0,0,1,1,0,1,0,1,0,0,1,1,1,0,0,0,1,1,0,0,1,1,0,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,0,0,0,1,1,0,1,1,0,1,1,0,0,0,1,1,1,1,1,1,1,0,0,0,1,0,1,0,1,1,0,0,0,1,1,1,0,0,1,0,0,1,1,0,0,0,0,1,0,0,1,0,1,1,0,1,1,1,1,0,0,0,1,0,1,0,0,0,0,1,1,1,0,1,0,1,1,1,1,0,1,1,1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1,1,1,0,1,0,0,0,0,1,1,1,1,1,1,0,0,1,0,0,1,1,0,1,1,1,1,0,0,1,0,0,1,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,0,0,0,1,0,0,1,1,0,1,0,1,1,1,1,0,1,1,1,0,1,1,0,0,0,0,0,0,1,1,0,1,1,1,0,0,0,1,0,0,0,0,0,0,0,1,0,1,1,0,0,0,1,1,1,0,0,0,0,1,0,0,1,0,1,0,1,1,0,1,1,0,1,0,1,1,0,1,0,0,0,0,0,0,0,1,1,0,1,1,0,0,1,0,0,0,1,1,1,0,1,0,0,0,0,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,0,0,1,1,0,1,0,1,1,0,0,0,1,1,0,0,1,1,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,1,1,0,0,0,0,1,0,1,1,0,1,0,0,1,0,0,0,1,0,0,1,1,1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,0,1,1,0,0,1,1,0,1,1,1,1,0,0,0,1,1,0,1,1,1,0,1,1,0,0,0,1,0,1,0,0,0,1,1,1,0,1,0,0,1,0,1,1,0,1,0,1,1,1,0,0,1,0,1,1,0,0,1,0,1,1,0,0,1,1,1,1,1,1,1,0,1,0,1,1,1,0,0,1,0,1,1,1,0,0,0,1,0,1,0,1,1,0,0,0,0,1,0,1,0,0,1,0,0,1,0,1,1,1,1,1,0,1,0,1,0,1,1,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,1,0,0,1,1,1,1,1,1,1,1,0,1,1,0,1,0,1,0,1,1,0,0,0,0,1,1,1,1,1,0,1,1,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,1,1,0,0,1,1,1,1,1,1,1,1,1,0,0,1,1,0,1,0,0,1,0,0,1,1,1,0,1,0,1,1,1,1,0,1,1,1,1,1,1,1,0,0,1,0,0,0,0,0,0,1,0,0,1,1,0,1,1,0,1,1,0,0,0,0,1,0,1,1,0,1,0,1,0,0,0,1,1,1,1,0,1,1,0,1,1,1,1,1,0,0,1,1,1,0,1,0,1,0,1,1,0,1,1,1,1,1,0,0,1,1,0,1,0,1,1,0,1,1,0,0,1,0,1,0,0,0,0,1,1,0,0,1,1,0,0,1,1,0,1,0,1,0,1,0,1,0,0,1,0,1,0,0,0,1,0,0,1,0,1,1,1,1,0,0,0,1,0,1,1,1,0,0,0,1,1,1,0,0,1,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,0,0,1,0,1,1,1,0,0,1,0,0,0,1,1,0,0,1,1,1,1,0,1,0,1,0,0,1,1,1,1,0,1,0,1,1,1,1,1,0,0,1,1,1,1,0,0,1,1,0,0,1,1,0,1,1,1,1,0,1,0,0,0,0,1,1,1,1,0,1,0,0,1,1,1,1,0,1,1,0,0,0,0,1,0,1,0,0,0,0,1,1,0,1,0,1,1,0,0,0,1,0,0,1,1,1,0,1,0,0,1,0,1,0,0,0,0,1,0,1,0,1,0,1,0,0,0,1,0,0,0,0,0,1,0,1,1,1,0,0,0,1,1,0,0,0,1,1,0,0,1,0,0,0,0,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,0,0,0,0,1,0,1,1,0,0,0,1,1,1,1,0,1,1,0,0,1,1,1,0,0,1,1,0,0,1,1,0,1,1,1,1,0,0,1,1,0,1,0,0,1,1,0,0,0,0,1,0,1,0,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,0,0,0,1,0,0,1,1,1,0,0,1,0,0,1,0,0,0,0,1,1,1,1,0,0,1,0,0,1,0,0,0,0,1,0,1,1,0,0,1,1,0,1,1,1,0,0,0,0,0,1,1,0,0,1,1,1,1,0,1,1,1,1,1,1,0,0,0,0,1,1,1,1,0,1,1,1,0,1,0,1,0,0,1,0,1,1,0,1,1,0,1,0,0,1,0,0,0,1,0,1,0,1,1,1,0,0,1,0,1,1,0,1,1,0,1,1,0,0,0,1,0,1,1,0,0,0,1,0,0,0,0,1,1,1,1,1,0,0,1,0,1,1,1,0,1,1,0,1,1,0,0,1,1,1,1,0,1,0,0,0,1,0,1,1,1,0,0,1,1,0,1,0,0,1,0,1,0,0,0,0,1,1,0,1,0,0,1,1,1,1,1,1,0,1,0,1,1,0,0,1,0,1,0,0,1,1,0,0,1,0,0,0,1,1,0,1,1,0,0,1,1,0,1,0,1,0,1,1,1,1,0,0,1,0,0,0,1,0,0,0,0,0,1,1,0,0,0,1,0,0,0,1,0,1,1,1,0,0,0,0,0,1,1,1,0,1,1,0,0,1,0,1,1,1,0,0,0,0,1,1,1,0,1,1,1,0,0,0,0,1,1,1,1,1,1,1,0,1,0,0,1,1,1,0,1,0,0,0,0,0,1,0,0,0,1,1,0,0,1,1,0,0,1,1,0,1,0,1,0,0,0,0,0,0,1,1,0,1,1,1,0,0,1,1,1,1,1,0,0,0,1,0,0,1,0,1,1,0,1,1,0,0,1,1,1,1,1,1,1,0,0,0,0,0,1,0,1,1,0,1,1,1,1,1,1,0,0,1,1,1,1,1,0,1,0,0,0,0,0,0,1,1,1,1,0,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,0,1,1,1,1,0,0,0,0,0,1,0,0,1,1,0,1,0,0,1,0,0,1,0,0,0,0,0,1,0,0,1,0,0,1,0,1,1,1,1,0,1,0,1,1,1,0,0,1,1,0,1,1,0,0,0,1,0,0,1,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,1,1,1,0,0,1,1,1,1,0,0,0,0,0,1,0,1,0,0,1,0,1,0,0,0,1,0,0,1,1,1,1,1,1,0,0,0,1,0,0,0,0,1,0,0,0,1,1,1,1,1,1,0,0,1,0,0,1,0,1,1,0,1,1,1,1,0,1,0,0,0,1,1,1,1,0,0,1,0,1,0,1,0,0,0,1,0,0,0,0,1,1,1,1,0,1,0,1,1,1,0,0,1,1,0,0,1,0,0,0,0,1,1,1,1,1,0,0,1,1,0,1,0,0,1,1,0,0,0,1,0,0,1,0,0,0,1,1,0,1,0,1,1,1,0,1,0,0,0,1,1,0,1,0,1,1,0,0,1,1,0,0,1,1,1,1,0,0,0,1,0,0,0,1,0,0,1,1,1,1,1,1,0,1,0,1,1,1,1,0,1,1,1,0,1,0,1,0,0,1,1,0,0,0,0,0,1,1,0,1,0,1,1,1,1,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,0,1,1,0,1,1,1,0,0,0,1,0,0,1,1,1,0,0,1,0,1,1,0,1,0,0,0,0,1,0,1,1,1,1,1,0,0,0,1,0,1,0,1,1,1,0,1,0,0,1,1,1,0,1,0,0,1,0,0,1,0,1,0,0,1,1,0,1,0,1,0,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,1,1,1,1,1,1,0,0,1,0,0,0,0,1,0,1,0,1,0,1,0,0,1,0,0,1,1,0,0,0,0,1,1,1,0,1,1,1,0,0,1,0,1,0,0,1,1,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,1,0,1,1,0,0,1,1,1,0,0,1,0,0,0,1,1,1,1,0,0,0,1,0,0,0,1,0,0,0,0,1,1,1,0,1,0,0,1,1,0,1,1,1,1,0,0,0,0,1,0,0,0,0,1,1,0,0,1,1,0,0,1,0,1,1,1,0,1,1,1,0,0,1,0,1,0,0,1,0,1,1,1,0,1,0,1,0,0,0,0,1,0,1,0,1,0,1,0,1,0,1,1,0,0,0,0,1,0,1,0,0,1,0,1,0,1,1,1,1,0,1,1,0,1,1,0,0,0,1,0,0,0,1,1,0,1,0,1,1,0,0,1,0,0,1,0,0,0,0,1,0,1,1,1,0,1,0,0,0,1,0,1,0,1,1,1,1,0,0,1,0,1,0,1,1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,0,1,1,0,1,0,0,0,1,0,1,1,1,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,1,0,1,1,0,1,0,1,1,0,0,1,0,1,0,0,0,0,0,0,1,1,1,1,1,1,0,1,0,0,0,0,0,1,0,0,0,1,0,1,1,1,0,0,1,1,1,0,1,1,1,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,0,0,0,0,1,1,1,0,0,0,1,1,0,1,0,1,0,0,0,0,1,1,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0,1,1,0,0,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,1,0,0,0,1,0,1,0,0,0,1,1,1,0,0,0,0,0,1,1,0,1,0,0,0,1,0,1,0,1,1,1,0,1,0,1,1,0,0,1,0,1,1,0,1,0,0,0,0,0,0,0,1,1,];
var gg_b = "1746702001/";

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
