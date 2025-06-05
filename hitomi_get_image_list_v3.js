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
case 1183:
case 1347:
case 3261:
case 3243:
case 3723:
case 3563:
case 1057:
case 1333:
case 505:
case 46:
case 3702:
case 3899:
case 2045:
case 2256:
case 2355:
case 2478:
case 1823:
case 3839:
case 446:
case 1421:
case 4066:
case 3615:
case 3665:
case 669:
case 2810:
case 1634:
case 792:
case 2266:
case 2365:
case 2244:
case 2787:
case 1303:
case 2098:
case 506:
case 35:
case 2679:
case 2994:
case 779:
case 3773:
case 1031:
case 905:
case 2149:
case 2934:
case 116:
case 1067:
case 3457:
case 2374:
case 3116:
case 3939:
case 1902:
case 3401:
case 62:
case 2755:
case 2026:
case 2950:
case 1399:
case 3249:
case 574:
case 2623:
case 420:
case 3071:
case 1772:
case 3519:
case 2496:
case 1793:
case 2602:
case 2500:
case 2436:
case 1339:
case 200:
case 867:
case 1552:
case 1747:
case 1158:
case 1650:
case 730:
case 2632:
case 3588:
case 1610:
case 3182:
case 2530:
case 203:
case 2137:
case 1562:
case 1660:
case 429:
case 3687:
case 1242:
case 3021:
case 1168:
case 209:
case 2197:
case 3332:
case 423:
case 922:
case 2387:
case 2692:
case 974:
case 2161:
case 1703:
case 718:
case 2590:
case 2525:
case 1932:
case 2324:
case 782:
case 494:
case 3491:
case 3156:
case 2076:
case 3351:
case 1658:
case 1150:
case 3279:
case 577:
case 3041:
case 1557:
case 2102:
case 479:
case 951:
case 555:
case 473:
case 1203:
case 924:
case 2123:
case 956:
case 864:
case 2958:
case 285:
case 244:
case 2265:
case 2883:
case 1469:
case 3174:
case 2215:
case 3644:
case 3666:
case 993:
case 2989:
case 1951:
case 3842:
case 492:
case 590:
case 3827:
case 1784:
case 3462:
case 1961:
case 4055:
case 3412:
case 1488:
case 2014:
case 888:
case 2064:
case 2481:
case 1849:
case 281:
case 746:
case 3229:
case 524:
case 3749:
case 572:
case 30:
case 556:
case 2192:
case 2643:
case 2661:
case 1233:
case 2697:
case 551:
case 1160:
case 3187:
case 3361:
case 3343:
case 76:
case 1591:
case 1247:
case 3397:
case 3311:
case 1618:
case 1727:
case 1567:
case 3884:
case 2173:
case 3053:
case 977:
case 1441:
case 983:
case 1463:
case 1086:
case 2075:
case 3155:
case 2470:
case 295:
case 794:
case 989:
case 2744:
case 1104:
case 2766:
case 3069:
case 1377:
case 3707:
case 41:
case 3019:
case 729:
case 2129:
case 3292:
case 1342:
case 2000:
case 3751:
case 250:
case 2405:
case 537:
case 1012:
case 1327:
case 3711:
case 2030:
case 937:
case 1062:
case 3223:
case 3743:
case 3521:
case 2782:
case 2495:
case 2179:
case 3737:
case 532:
case 3349:
case 430:
case 3202:
case 2090:
case 589:
case 1837:
case 2025:
case 296:
case 4074:
case 898:
case 2868:
case 63:
case 487:
case 2420:
case 291:
case 1949:
case 1134:
case 2818:
case 1843:
case 1453:
case 980:
case 583:
case 1897:
case 1811:
case 148:
case 3115:
case 638:
case 1384:
case 2892:
case 882:
case 3006:
case 2694:
case 672:
case 1724:
case 349:
case 1546:
case 3595:
case 2873:
case 3184:
case 1315:
case 2634:
case 651:
case 1810:
case 2031:
case 57:
case 81:
case 699:
case 3965:
case 302:
case 3520:
case 2303:
case 3915:
case 1098:
case 1787:
case 762:
case 1038:
case 578:
case 818:
case 2091:
case 2322:
case 211:
case 1149:
case 1934:
case 839:
case 1629:
case 307:
case 215:
case 3177:
case 2393:
case 1008:
case 2347:
case 3570:
case 978:
case 690:
case 3693:
case 830:
case 3955:
case 1282:
case 3750:
case 2372:
case 887:
case 1554:
case 1850:
case 3096:
case 2604:
case 1045:
case 677:
case 340:
case 49:
case 2823:
case 1478:
case 2660:
case 2309:
case 103:
case 519:
case 2118:
case 2610:
case 1530:
case 1673:
case 417:
case 2512:
case 1894:
case 1143:
case 2703:
case 464:
case 3028:
case 3360:
case 1692:
case 3815:
case 109:
case 3310:
case 1960:
case 142:
case 1324:
case 3794:
case 1525:
case 2973:
case 2879:
case 892:
case 3734:
case 2480:
case 3704:
case 1575:
case 2923:
case 637:
case 1950:
case 4084:
case 2829:
case 1026:
case 1755:
case 2902:
case 326:
case 3445:
case 1496:
case 3350:
case 2189:
case 2733:
case 412:
case 870:
case 2650:
case 3078:
case 100:
case 1107:
case 2747:
case 2227:
case 680:
case 1500:
case 1436:
case 3974:
case 919:
case 2997:
case 3204:
case 3430:
case 2784:
case 2943:
case 798:
case 3982:
case 2849:
case 606:
case 1918:
case 1064:
case 1046:
case 79:
case 1356:
case 1255:
case 1968:
case 3425:
case 2531:
case 1697:
case 563:
case 376:
case 352:
case 4047:
case 1192:
case 1598:
case 3956:
case 2567:
case 467:
case 1132:
case 1538:
case 2727:
case 2110:
case 2247:
case 4033:
case 2517:
case 569:
case 2160:
case 2742:
case 969:
case 829:
case 3199:
case 1607:
case 3070:
case 2658:
case 560:
case 375:
case 3048:
case 2203:
case 3916:
case 2689:
case 3358:
case 3783:
case 3966:
case 1316:
case 605:
case 1054:
case 1883:
case 3294:
case 185:
case 144:
case 1344:
case 3234:
case 894:
case 3400:
case 1649:
case 153:
case 261:
case 1030:
case 928:
case 2239:
case 2012:
case 4039:
case 3122:
case 3768:
case 331:
case 1090:
case 2299:
case 1179:
case 92:
case 3627:
case 1782:
case 336:
case 159:
case 196:
case 2811:
case 2585:
case 2897:
case 846:
case 2843:
case 2453:
case 1470:
case 884:
case 2851:
case 2441:
case 1889:
case 622:
case 1526:
case 1858:
case 1448:
case 2807:
case 52:
case 3758:
case 4009:
case 304:
case 3147:
case 335:
case 3540:
case 3454:
case 1287:
case 3193:
case 3578:
case 764:
case 2052:
case 3172:
case 528:
case 150:
case 3789:
case 1000:
case 265:
case 2209:
case 2558:
case 2152:
case 3072:
case 3033:
case 2220:
case 2657:
case 2778:
case 3047:
case 953:
case 452:
case 476:
case 550:
case 1645:
case 2004:
case 2235:
case 2336:
case 1957:
case 4035:
case 3636:
case 996:
case 2186:
case 3402:
case 1901:
case 2998:
case 4005:
case 2487:
case 596:
case 2094:
case 3606:
case 3473:
case 591:
case 1931:
case 749:
case 3432:
case 1409:
case 1917:
case 3492:
case 1125:
case 2306:
case 283:
case 1263:
case 3391:
case 3317:
case 1561:
case 362:
case 4048:
case 1079:
case 2876:
case 1511:
case 1597:
case 553:
case 2568:
case 4070:
case 2248:
case 2617:
case 3331:
case 2518:
case 702:
case 1130:
case 232:
case 2667:
case 3971:
case 1472:
case 1801:
case 3105:
case 2736:
case 1154:
case 1857:
case 1626:
case 3757:
case 436:
case 3262:
case 1023:
case 4081:
case 2378:
case 3212:
case 431:
case 2340:
case 3701:
case 3099:
case 2926:
case 160:
case 1259:
case 2050:
case 1371:
case 1219:
case 3731:
case 1073:
case 272:
case 224:
case 2010:
case 163:
case 251:
case 3767:
case 1780:
case 3252:
case 3717:
case 3628:
case 404:
case 1321:
case 2976:
case 1891:
case 3195:
case 293:
case 3880:
case 1867:
case 2838:
case 1114:
case 3385:
case 586:
case 2898:
case 1831:
case 944:
case 985:
case 2685:
case 581:
case 3670:
case 3178:
case 1719:
case 274:
case 1007:
case 2954:
case 1769:
case 1529:
case 909:
case 1280:
case 2875:
case 3267:
case 3752:
case 3547:
case 1886:
case 903:
case 2089:
case 3217:
case 1363:
case 3291:
case 1341:
case 757:
case 2800:
case 2305:
case 547:
case 1654:
case 1442:
case 3786:
case 3941:
case 3963:
case 3605:
case 3869:
case 4006:
case 3819:
case 1477:
case 3859:
case 3449:
case 542:
case 3635:
case 2185:
case 2830:
case 1614:
case 1812:
case 1427:
case 1862:
case 3522:
case 227:
case 3257:
case 900:
case 648:
case 3762:
case 138:
case 3128:
case 1011:
case 503:
case 119:
case 1097:
case 2320:
case 3201:
case 2068:
case 64:
case 2825:
case 113:
case 752:
case 2946:
case 2964:
case 776:
case 407:
case 2686:
case 3969:
case 3407:
case 3285:
case 2900:
case 3863:
case 3451:
case 1145:
case 3196:
case 1986:
case 2101:
case 364:
case 2157:
case 2416:
case 3599:
case 704:
case 2854:
case 234:
case 2466:
case 2083:
case 1573:
case 2381:
case 206:
case 2925:
case 2612:
case 1532:
case 1271:
case 2191:
case 2240:
case 2864:
case 2846:
case 2278:
case 80:
case 312:
case 3681:
case 4040:
case 3312:
case 421:
case 454:
case 1592:
case 3509:
case 1690:
case 426:
case 1625:
case 1912:
case 3411:
case 3497:
case 3988:
case 2930:
case 3461:
case 2735:
case 2795:
case 3437:
case 3828:
case 54:
case 3410:
case 1094:
case 392:
case 3065:
case 3254:
case 1998:
case 3460:
case 3015:
case 548:
case 2917:
case 3776:
case 2597:
case 2885:
case 965:
case 3159:
case 2079:
case 373:
case 566:
case 2543:
case 2561:
case 758:
case 2241:
case 379:
case 642:
case 4063:
case 1424:
case 4041:
case 132:
case 2638:
case 1518:
case 1617:
case 1728:
case 1248:
case 4013:
case 3398:
case 1826:
case 2029:
case 1220:
case 2507:
case 1945:
case 966:
case 3308:
case 854:
case 3936:
case 3169:
case 647:
case 826:
case 1589:
case 2551:
case 40:
case 565:
case 370:
case 1778:
case 3119:
case 397:
case 1235:
case 1908:
case 948:
case 600:
case 2645:
case 1004:
case 3214:
case 2175:
case 3726:
case 1295:
case 3450:
case 3566:
case 318:
case 3087:
case 2549:
case 339:
case 124:
case 1465:
case 172:
case 2219:
case 333:
case 802:
case 2092:
case 2321:
case 3738:
case 4069:
case 3275:
case 2867:
case 849:
case 193:
case 2146:
case 1706:
case 2817:
case 382:
case 3928:
case 843:
case 3024:
case 2801:
case 2433:
case 840:
case 1808:
case 3978:
case 190:
case 2447:
case 2857:
case 2154:
case 330:
case 3230:
case 4059:
case 3708:
case 177:
case 2371:
case 1050:
case 2259:
case 3113:
case 1926:
case 1455:
case 3141:
case 3163:
case 3290:
case 155:
case 1296:
case 3346:
case 3920:
case 3056:
case 3881:
case 2862:
case 2646:
case 2812:
case 1830:
case 219:
case 2011:
case 831:
case 2353:
case 2579:
case 2484:
case 3208:
case 836:
case 3935:
case 3653:
case 3082:
case 1946:
case 1964:
case 3995:
case 2759:
case 213:
case 2037:
case 368:
case 1320:
case 3641:
case 3298:
case 3663:
case 4080:
case 695:
case 3613:
case 174:
case 2007:
case 210:
case 1089:
case 3238:
case 1370:
case 2886:
case 45:
case 835:
case 1875:
case 2852:
case 2126:
case 1305:
case 3970:
case 1504:
case 650:
case 1800:
case 3354:
case 384:
case 2477:
case 345:
case 3555:
case 3066:
case 3895:
case 1560:
case 1864:
case 3587:
case 1456:
case 101:
case 1117:
case 1662:
case 1191:
case 1720:
case 106:
case 1925:
case 2532:
case 2573:
case 3688:
case 278:
case 876:
case 2592:
case 4071:
case 320:
case 3835:
case 3659:
case 871:
case 3330:
case 511:
case 915:
case 1131:
case 1735:
case 2962:
case 2625:
case 3714:
case 1990:
case 1482:
case 3981:
case 3746:
case 3764:
case 1795:
case 3226:
case 3458:
case 394:
case 2675:
case 3754:
case 1686:
case 2145:
case 1705:
case 3489:
case 1900:
case 3574:
case 3375:
case 3276:
case 3619:
case 911:
case 875:
case 2523:
case 2741:
case 2763:
case 1101:
case 3300:
case 4021:
case 134:
case 1466:
case 857:
case 1748:
case 2600:
case 1228:
case 1416:
case 2369:
case 1157:
case 1544:
case 654:
case 626:
case 847:
case 1264:
case 1345:
case 1726:
case 1055:
case 2636:
case 2402:
case 3004:
case 2696:
case 3908:
case 1878:
case 380:
case 214:
case 3474:
case 337:
case 1308:
case 1996:
case 2072:
case 3152:
case 2033:
case 3740:
case 267:
case 800:
case 3826:
case 2003:
case 3248:
case 3518:
case 2331:
case 3424:
case 332:
case 179:
case 1680:
case 2391:
case 2317:
case 809:
case 2181:
case 1906:
case 2367:
case 3631:
case 1338:
case 3270:
case 716:
case 3034:
case 3938:
case 3205:
case 383:
case 3998:
case 3487:
case 1556:
case 3094:
case 1065:
case 2473:
case 2432:
case 4012:
case 1290:
case 2577:
case 355:
case 1163:
case 3845:
case 90:
case 3281:
case 2757:
case 377:
case 2640:
case 1708:
case 2148:
case 9:
case 130:
case 1836:
case 2212:
case 2039:
case 187:
case 3808:
case 2971:
case 1745:
case 2105:
case 3796:
case 399:
case 1024:
case 4086:
case 3898:
case 182:
case 3706:
case 2195:
case 393:
case 2584:
case 2880:
case 1376:
case 2286:
case 2385:
case 2767:
case 1738:
case 5:
case 2527:
case 508:
case 2717:
case 11:
case 3976:
case 1806:
case 133:
case 1434:
case 356:
case 3465:
case 1494:
case 118:
case 3060:
case 1066:
case 2605:
case 1044:
case 2869:
case 1555:
case 1948:
case 2819:
case 1354:
case 184:
case 145:
case 3504:
case 3800:
case 3206:
case 2913:
case 1775:
case 3875:
case 2267:
case 1905:
case 2752:
case 3089:
case 1238:
case 2140:
case 2217:
case 2291:
case 2648:
case 2670:
case 374:
case 2572:
case 4091:
case 3954:
case 4067:
case 1641:
case 1298:
case 1663:
case 3068:
case 3914:
case 1121:
case 168:
case 1790:
case 2503:
case 3946:
case 1082:
case 4057:
case 1935:
case 327:
case 2620:
case 859:
case 2712:
case 3534:
case 2888:
case 896:
case 3335:
case 891:
case 2859:
case 2449:
case 1056:
case 1515:
case 3185:
case 631:
case 1314:
case 1725:
case 1364:
case 1346:
case 305:
case 3228:
case 3416:
case 3748:
case 3444:
case 3466:
case 3083:
case 2042:
case 1300:
case 1805:
case 123:
case 3975:
case 2352:
case 958:
case 844:
case 1276:
case 657:
case 1870:
case 2386:
case 2863:
case 2451:
case 2196:
case 2969:
case 194:
case 2919:
case 1524:
case 28:
case 1418:
case 1325:
case 2959:
case 3795:
case 74:
case 671:
case 2988:
case 3930:
case 288:
case 2853:
case 2443:
case 2461:
case 1330:
case 2027:
case 1659:
case 120:
case 1835:
case 2312:
case 761:
case 2509:
case 2362:
case 3381:
case 1688:
case 1180:
case 3510:
case 3814:
case 3191:
case 301:
case 3240:
case 3560:
case 3864:
case 3846:
case 279:
case 2680:
case 2188:
case 3638:
case 1331:
case 935:
case 2398:
case 3597:
case 3380:
case 1367:
case 162:
case 1181:
case 3079:
case 3543:
case 3561:
case 3190:
case 1391:
case 3241:
case 3125:
case 4054:
case 1821:
case 1785:
case 485:
case 1492:
case 2776:
case 3409:
case 2828:
case 3931:
case 1606:
case 2214:
case 1402:
case 3499:
case 3175:
case 1636:
case 2246:
case 2450:
case 2544:
case 2840:
case 297:
case 3957:
case 481:
case 4064:
case 486:
case 3645:
case 328:
case 3551:
case 1047:
case 114:
case 270:
case 2119:
case 504:
case 3029:
case 1301:
case 3100:
case 32:
case 3771:
case 1033:
case 3507:
case 1072:
case 931:
case 3676:
case 65:
case 3831:
case 2928:
case 3403:
case 742:
case 1286:
case 1921:
case 2275:
case 3867:
case 2376:
case 3146:
case 1479:
case 495:
case 233:
case 703:
case 3092:
case 1717:
case 1628:
case 21:
case 3321:
case 1791:
case 369:
case 3780:
case 2621:
case 2798:
case 552:
case 576:
case 3269:
case 709:
case 3032:
case 571:
case 3219:
case 975:
case 1731:
case 1678:
case 3371:
case 1170:
case 971:
case 575:
case 815:
case 360:
case 4030:
case 2163:
case 2290:
case 1577:
case 3288:
case 1039:
case 1212:
case 2836:
case 4090:
case 2671:
case 557:
case 2230:
case 2708:
case 1148:
case 1640:
case 1757:
case 459:
case 3626:
case 491:
case 3447:
case 496:
case 3493:
case 4025:
case 1105:
case 3801:
case 2940:
case 525:
case 2082:
case 4008:
case 866:
case 954:
case 2790:
case 268:
case 33:
case 1201:
case 3788:
case 3353:
case 3061:
case 2208:
case 3043:
case 1257:
case 1522:
case 1953:
case 3664:
case 3812:
case 4045:
case 3614:
case 198:
case 2364:
case 848:
case 2314:
case 786:
case 3176:
case 2515:
case 1859:
case 1449:
case 3477:
case 1819:
case 2948:
case 785:
case 1869:
case 2483:
case 2066:
case 1605:
case 2775:
case 3654:
case 1913:
case 1593:
case 1291:
case 3341:
case 1648:
case 2700:
case 1140:
case 3051:
case 2171:
case 3313:
case 1267:
case 2298:
case 2663:
case 3529:
case 1572:
case 865:
case 310:
case 3007:
case 1231:
case 1178:
case 521:
case 2714:
case 1437:
case 549:
case 791:
case 2746:
case 2764:
case 2418:
case 2226:
case 18:
case 2524:
case 796:
case 1084:
case 1853:
case 940:
case 1443:
case 3962:
case 4026:
case 1461:
case 188:
case 3625:
case 3912:
case 3690:
case 1362:
case 3198:
case 3592:
case 2835:
case 220:
case 1312:
case 112:
case 1681:
case 2330:
case 907:
case 2895:
case 2587:
case 3049:
case 37:
case 3630:
case 3138:
case 3271:
case 2180:
case 3532:
case 2688:
case 229:
case 3108:
case 1539:
case 1352:
case 164:
case 507:
case 750:
case 2669:
case 3523:
case 223:
case 3741:
case 409:
case 1042:
case 3145:
case 1863:
case 2489:
case 1841:
case 442:
case 1285:
case 1813:
case 540:
case 2375:
case 2458:
case 1919:
case 294:
case 1407:
case 2754:
case 1136:
case 1505:
case 630:
case 1304:
case 988:
case 1036:
case 2655:
case 2899:
case 1096:
case 2933:
case 3440:
case 890:
case 98:
case 1750:
case 517:
case 438:
case 1955:
case 72:
case 2237:
case 2329:
case 4011:
case 1268:
case 1693:
case 2211:
case 43:
case 2297:
case 687:
case 1633:
case 413:
case 4037:
case 2723:
case 2541:
case 728:
case 1177:
case 258:
case 3149:
case 872:
case 3934:
case 2485:
case 410:
case 964:
case 1603:
case 1289:
case 3038:
case 2080:
case 2553:
case 2379:
case 1622:
case 1915:
case 3098:
case 4051:
case 1520:
case 682:
case 1710:
case 2207:
case 3679:
case 917:
case 3315:
case 2903:
case 1887:
case 3564:
case 1595:
case 1394:
case 639:
case 2922:
case 61:
case 1535:
case 588:
case 143:
case 2809:
case 697:
case 1974:
case 3500:
case 3804:
case 3436:
case 3107:
case 47:
case 4049:
case 2249:
case 2729:
case 2569:
case 2302:
case 3151:
case 154:
case 1639:
case 478:
case 1855:
case 3496:
case 2833:
case 880:
case 99:
case 2847:
case 3374:
case 3575:
case 2116:
case 2144:
case 2939:
case 1704:
case 998:
case 670:
case 2624:
case 598:
case 2417:
case 2491:
case 2909:
case 2803:
case 3910:
case 3715:
case 1987:
case 692:
case 1924:
case 309:
case 3197:
case 1310:
case 1283:
case 3111:
case 2332:
case 1815:
case 3387:
case 1028:
case 1360:
case 3692:
case 3143:
case 3161:
case 3894:
case 1609:
case 3632:
case 3834:
case 3530:
case 3406:
case 2779:
case 3137:
case 2687:
case 2666:
case 2452:
case 2842:
case 1400:
case 2616:
case 623:
case 3366:
case 2877:
case 3265:
case 629:
case 3344:
case 2174:
case 3316:
case 3215:
case 1944:
case 1783:
case 1966:
case 2307:
case 3651:
case 710:
case 1048:
case 1916:
case 3123:
case 175:
case 2351:
case 2013:
case 3607:
case 834:
case 2041:
case 157:
case 2187:
case 208:
case 2343:
case 806:
case 738:
case 42:
case 2682:
case 3538:
case 801:
case 4029:
case 719:
case 3173:
case 2053:
case 73:
case 2229:
case 3598:
case 2749:
case 171:
case 713:
case 3192:
case 1020:
case 3643:
case 152:
case 3697:
case 428:
case 3382:
case 1318:
case 3611:
case 3014:
case 3968:
case 1490:
case 3356:
case 3255:
case 3918:
case 3046:
case 1982:
case 381:
case 1035:
case 2656:
case 2827:
case 2412:
case 822:
case 4073:
case 514:
case 874:
case 3129:
case 1677:
case 2292:
case 3000:
case 962:
case 1133:
case 350:
case 1578:
case 1193:
case 1642:
case 3287:
case 1260:
case 469:
case 1866:
case 135:
case 684:
case 1454:
case 645:
case 2571:
case 1758:
case 1816:
case 3858:
case 3716:
case 3224:
case 3744:
case 3983:
case 3766:
case 2927:
case 3025:
case 396:
case 3868:
case 3420:
case 391:
case 1882:
case 3782:
case 827:
case 646:
case 3179:
case 2737:
case 1528:
case 1414:
case 2797:
case 3030:
case 2223:
case 2743:
case 1103:
case 778:
case 2521:
case 863:
case 3067:
case 316:
case 1251:
case 923:
case 2289:
case 3091:
case 422:
case 3322:
case 2603:
case 1485:
case 1792:
case 311:
case 3709:
case 2476:
case 158:
case 3031:
case 732:
case 2127:
case 202:
case 2710:
case 1207:
case 2824:
case 2520:
case 3303:
case 2622:
case 929:
case 2915:
case 2760:
case 2887:
case 3832:
case 789:
case 994:
case 3634:
case 783:
case 1809:
case 3979:
case 2006:
case 3694:
case 2334:
case 3421:
case 1922:
case 1655:
case 2304:
case 240:
case 1947:
case 2505:
case 3823:
case 3471:
case 1972:
case 2096:
case 1899:
case 2142:
case 1702:
case 3001:
case 2693:
case 529:
case 1329:
case 3799:
case 2647:
case 2426:
case 3333:
case 3057:
case 1563:
case 3393:
case 1243:
case 4018:
case 2672:
case 2633:
case 1513:
case 523:
case 1211:
case 4068:
case 3879:
case 2734:
case 1156:
case 1491:
case 1417:
case 3085:
case 2438:
case 1467:
case 3480:
case 2498:
case 2987:
case 546:
case 945:
case 984:
case 799:
case 2609:
case 225:
case 3703:
case 772:
case 2581:
case 1373:
case 1332:
case 568:
case 2815:
case 2283:
case 1687:
case 3118:
case 1182:
case 405:
case 82:
case 401:
case 3747:
case 3552:
case 3339:
case 96:
case 2974:
case 406:
case 777:
case 2445:
case 226:
case 2855:
case 2639:
case 2350:
case 3733:
case 1071:
case 221:
case 2040:
case 755:
case 3399:
case 545:
case 584:
case 667:
case 1674:
case 1872:
case 3902:
case 1144:
case 2704:
case 1939:
case 1166:
case 1893:
case 790:
case 3284:
case 1847:
case 1580:
case 688:
case 51:
case 87:
case 1884:
case 1682:
case 533:
case 3247:
case 1397:
case 1361:
case 3668:
case 1343:
case 1187:
case 2425:
case 2318:
case 252:
case 518:
case 68:
case 437:
case 2020:
case 1749:
case 1337:
case 3849:
case 582:
case 2490:
case 1124:
case 3488:
case 2204:
case 2430:
case 987:
case 3784:
case 3943:
case 1462:
case 3961:
case 2035:
case 587:
case 2400:
case 2536:
case 489:
case 1452:
case 1644:
case 2005:
case 664:
case 1666:
case 483:
case 982:
case 4034:
case 3777:
case 2048:
case 939:
case 2916:
case 774:
case 3689:
case 2783:
case 2139:
case 3557:
case 1063:
case 1041:
case 2475:
case 1279:
case 2389:
case 3811:
case 3585:
case 3861:
case 3843:
case 3453:
case 592:
case 2882:
case 3134:
case 2684:
case 3837:
case 2122:
case 69:
case 3299:
case 1349:
case 701:
case 579:
case 819:
case 2718:
case 2081:
case 2446:
case 2464:
case 477:
case 706:
case 2250:
case 4050:
case 1984:
case 970:
case 1761:
case 2103:
case 3062:
case 83:
case 1088:
case 3239:
case 1711:
case 1797:
case 3012:
case 366:
case 2172:
case 973:
case 2789:
case 2133:
case 1751:
case 424:
case 3342:
case 472:
case 456:
case 810:
case 570:
case 2677:
case 3209:
case 2816:
case 1232:
case 1019:
case 204:
case 2147:
case 3377:
case 2866:
case 2540:
case 2454:
case 2260:
case 992:
case 3413:
case 3086:
case 3851:
case 1942:
case 3441:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1749157202/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,1,0,1,1,0,1,0,1,0,0,1,1,1,1,0,1,1,1,0,1,0,1,1,0,1,0,0,1,0,0,0,1,1,1,1,1,0,0,1,1,0,0,1,1,1,0,1,0,0,1,1,1,1,1,0,0,0,1,0,0,1,0,1,0,0,0,1,0,1,1,1,1,0,1,0,0,1,0,0,1,0,0,1,1,1,0,1,0,1,1,1,0,0,1,1,0,0,0,0,0,1,0,1,1,1,1,0,0,1,0,0,0,1,1,1,1,0,0,1,0,1,0,1,1,1,1,0,1,1,1,1,0,1,1,1,0,0,0,1,0,0,1,1,0,1,1,0,1,0,1,0,0,1,0,1,1,0,1,1,0,1,0,0,1,1,0,1,0,1,0,1,0,1,1,1,0,1,0,1,1,1,1,0,1,1,1,0,0,0,1,1,1,0,1,1,1,1,1,0,1,0,0,1,1,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,1,1,1,0,0,0,0,0,1,0,0,1,0,0,0,1,0,1,1,0,1,0,1,0,1,0,0,0,1,1,0,1,0,1,0,1,0,0,1,0,0,1,0,1,1,1,1,1,0,0,0,1,1,0,1,1,0,1,0,1,1,1,1,0,0,0,1,0,1,0,1,0,0,0,0,0,1,1,1,0,1,1,1,1,0,1,1,1,0,1,1,0,0,0,0,1,0,0,0,1,1,0,1,0,0,1,1,0,0,0,1,0,1,0,1,0,1,0,1,1,1,0,0,1,1,1,1,1,0,1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,0,1,1,0,1,0,1,0,0,1,1,1,1,0,1,1,0,1,1,0,0,0,1,0,0,1,1,1,1,1,0,1,0,1,1,1,1,0,0,0,0,1,1,1,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,1,0,1,0,0,1,0,0,0,0,1,0,0,1,0,1,0,0,1,1,0,0,1,1,1,1,0,1,0,1,0,1,1,1,0,1,0,1,1,0,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,0,0,1,0,0,1,0,0,1,1,1,0,1,0,1,1,1,0,0,1,1,0,0,1,1,0,0,0,1,0,0,1,0,1,0,0,1,1,1,1,1,1,1,1,1,0,1,1,1,0,0,1,0,0,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,0,1,1,1,1,0,1,1,1,1,1,1,1,0,0,0,1,0,1,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,0,0,1,1,1,0,0,0,0,0,1,1,1,0,0,1,0,0,1,1,1,1,0,1,1,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,1,0,1,1,1,1,0,0,0,0,1,0,0,1,0,1,0,1,0,0,1,1,0,1,0,1,0,0,1,0,1,0,1,0,1,1,1,1,0,1,0,0,1,1,0,0,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,1,1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,1,1,0,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,0,0,0,0,0,1,0,1,0,1,1,1,1,0,0,1,1,0,1,1,0,0,1,1,1,1,0,1,0,1,0,1,1,1,1,1,0,0,0,1,0,0,1,1,0,0,0,0,1,0,0,1,1,0,0,1,0,0,0,1,1,0,1,1,1,0,0,1,1,1,0,0,1,1,0,0,1,1,0,1,1,1,1,0,0,0,0,1,0,0,1,0,1,0,0,0,1,1,1,1,1,0,0,1,1,1,0,1,1,1,0,0,0,1,0,1,0,1,0,0,1,1,0,1,1,1,0,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,1,0,1,0,0,0,1,0,1,0,1,0,0,1,1,1,0,0,0,1,1,0,1,0,0,0,1,0,1,0,1,1,0,0,0,1,1,0,0,1,0,0,1,0,1,1,0,1,0,1,0,0,0,1,0,1,1,1,0,0,1,1,1,0,1,1,1,0,1,1,0,1,0,1,1,1,1,0,1,1,1,0,0,1,1,1,0,1,0,1,0,1,0,0,0,1,0,0,1,1,0,0,1,1,0,0,0,0,0,0,1,1,0,0,1,1,0,1,0,1,0,1,1,0,1,0,1,1,0,1,1,0,1,1,0,1,1,1,1,1,0,1,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,1,1,0,0,0,1,1,1,0,0,0,0,0,1,0,0,1,0,1,0,1,0,1,1,1,0,0,0,1,0,1,1,1,0,0,1,0,1,1,1,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,1,1,0,0,0,0,1,1,1,1,1,0,1,0,0,0,1,0,0,1,1,1,0,0,1,1,1,0,0,0,1,0,1,1,1,0,1,0,0,1,0,0,1,0,1,0,1,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,1,0,0,0,1,1,1,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0,1,1,1,0,1,0,0,1,0,0,0,1,1,0,0,0,1,1,0,0,1,0,0,0,1,0,1,0,1,1,0,0,1,1,0,0,1,1,0,0,1,0,0,0,0,1,0,0,1,1,0,1,1,0,1,1,1,0,1,1,1,0,0,0,1,1,0,1,0,1,1,0,1,1,1,0,0,1,0,1,0,1,0,1,1,1,0,1,0,1,1,0,0,1,1,0,1,0,1,1,1,1,1,0,0,0,1,1,1,0,1,1,1,1,1,1,1,0,1,0,0,1,0,1,0,1,0,0,0,1,1,1,1,1,0,0,1,0,0,1,1,0,1,0,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,1,0,1,1,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,1,1,1,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,1,0,1,1,0,0,0,1,1,1,0,0,0,0,1,1,0,0,1,1,1,1,1,0,0,0,0,1,1,1,0,1,1,1,0,1,1,0,1,0,0,0,0,1,1,1,0,0,1,0,0,1,0,0,1,0,1,1,1,0,1,0,1,0,0,0,1,0,0,0,1,1,0,0,0,0,0,1,0,1,0,1,0,0,1,0,1,0,1,0,1,1,1,0,1,1,1,0,1,0,0,1,0,0,1,1,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,1,1,1,0,0,1,1,1,1,0,0,0,1,0,0,0,0,1,1,0,1,0,1,1,0,1,0,0,0,0,0,0,0,0,1,0,1,1,1,0,1,0,1,1,0,0,0,0,1,0,1,1,1,0,1,1,0,0,0,1,0,0,1,1,0,0,0,1,0,0,1,1,0,1,1,0,0,0,1,1,0,1,0,0,1,1,1,1,0,1,1,0,0,1,1,1,0,0,0,1,1,0,0,1,1,1,0,1,1,0,0,1,0,0,0,0,0,0,1,1,0,0,1,1,0,1,1,1,0,0,0,1,1,1,0,1,0,1,1,0,0,0,1,0,0,0,0,1,1,1,1,1,0,1,0,1,1,0,0,0,0,0,1,0,1,1,0,0,0,1,1,1,1,1,0,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,1,1,1,1,1,0,0,0,1,0,1,1,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,1,0,1,0,1,1,1,1,0,1,0,0,1,1,1,1,0,1,0,1,0,0,1,1,0,0,0,1,1,0,1,1,1,1,1,1,0,1,1,0,0,1,0,1,0,1,0,0,1,0,0,0,1,1,0,0,0,1,1,1,0,0,0,1,0,1,0,0,0,1,0,1,1,0,0,1,0,1,0,1,1,1,0,0,1,1,1,0,1,1,0,1,1,0,1,0,0,1,0,0,1,0,0,0,1,1,1,0,1,1,0,1,0,1,0,1,1,0,0,1,0,1,1,1,1,0,0,1,1,0,1,0,0,0,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,0,0,0,0,1,1,0,1,1,0,0,0,1,0,0,1,0,1,1,1,1,1,1,1,1,0,1,0,1,0,1,0,0,1,1,0,0,1,0,1,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,1,0,1,1,0,0,1,0,0,0,0,0,1,0,1,0,1,0,0,1,1,1,1,1,0,0,1,1,1,1,1,0,0,0,0,0,1,0,0,0,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1,1,1,1,0,0,1,0,0,1,0,1,0,1,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,1,0,0,1,1,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,1,0,1,0,1,0,1,0,0,1,1,1,0,1,0,0,0,0,1,0,0,0,0,0,1,0,1,1,0,0,1,1,0,0,1,1,0,1,0,0,0,1,0,0,0,1,0,1,1,0,1,0,1,1,1,1,1,1,0,0,1,0,1,0,0,1,0,0,1,1,0,1,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,1,1,0,1,1,0,0,1,1,1,0,0,0,0,0,1,1,0,0,1,1,1,0,1,1,0,1,1,0,1,0,1,1,0,0,1,0,0,1,1,0,1,1,0,0,0,0,1,0,1,0,1,1,1,0,0,1,0,1,1,1,1,1,0,0,0,0,0,1,0,0,1,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,1,0,0,1,1,1,1,0,0,0,0,1,1,1,0,0,1,1,1,1,1,1,0,1,0,0,1,0,1,0,0,1,1,0,1,1,1,0,1,0,0,0,0,1,1,1,1,0,1,0,1,0,0,0,1,0,0,1,0,0,0,1,0,0,1,1,1,1,0,1,0,0,0,0,0,0,1,0,1,1,0,1,0,1,0,1,1,0,1,1,1,0,1,1,0,1,0,0,0,1,1,1,0,1,0,1,0,1,0,0,0,0,1,0,1,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,1,1,1,0,1,0,0,0,0,1,1,0,0,0,1,0,1,1,0,0,1,0,1,0,0,1,0,1,0,1,1,1,0,1,1,1,1,1,1,0,0,0,1,0,0,1,0,0,1,0,1,0,0,0,1,0,0,1,0,1,1,1,1,0,1,1,0,1,1,1,0,1,0,1,1,1,0,0,0,1,1,0,1,0,1,0,0,1,0,1,0,1,0,1,0,0,1,0,0,1,0,1,1,0,1,1,0,1,1,1,0,1,0,0,1,1,1,0,0,0,1,0,0,0,1,1,0,1,1,0,0,0,0,1,0,1,0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,1,1,1,0,1,1,1,0,0,0,1,0,1,0,1,0,0,1,1,0,1,0,0,1,0,1,0,0,0,0,1,0,0,1,0,1,1,1,1,0,0,0,1,1,0,1,0,0,0,1,1,0,0,1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,0,1,0,1,1,1,0,0,1,0,1,1,1,1,0,1,0,0,0,0,1,1,1,1,0,1,1,0,1,0,0,1,1,0,1,1,1,1,0,0,1,0,1,0,1,1,0,1,0,1,1,1,1,1,1,0,0,1,1,1,0,1,1,0,0,1,0,0,1,1,0,0,0,1,0,1,0,1,0,1,0,0,1,1,0,0,0,0,1,0,0,0,1,0,1,0,0,0,1,1,1,1,1,0,0,0,1,1,1,1,0,1,1,0,1,0,0,1,0,1,1,0,1,0,1,1,0,0,1,1,0,1,1,0,0,0,0,0,0,0,1,1,0,1,1,0,0,1,1,1,0,0,1,0,1,1,0,0,0,0,1,0,1,1,0,1,1,0,1,0,0,0,1,0,1,1,1,1,0,0,1,1,1,1,1,0,0,0,1,1,1,0,1,1,1,1,0,0,1,0,1,1,0,1,0,1,0,1,1,0,0,1,1,0,1,0,1,1,1,1,1,0,1,0,1,0,0,1,1,1,0,1,1,1,1,0,0,0,1,0,1,1,1,0,1,1,0,1,1,0,1,1,1,1,0,0,0,1,0,0,1,0,1,1,1,1,0,1,1,0,0,0,0,0,1,0,0,0,1,0,1,1,1,0,1,0,0,1,1,0,1,1,1,1,0,1,0,0,1,1,0,0,0,0,1,1,0,0,1,0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,1,0,0,1,0,1,0,0,0,0,1,0,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,0,0,1,1,0,1,1,0,0,1,0,1,1,0,0,0,0,1,0,1,1,0,0,0,1,0,1,0,0,1,1,0,0,1,1,1,1,1,1,1,0,0,0,1,0,0,1,0,1,0,0,1,1,1,1,0,1,0,1,0,0,1,1,0,0,1,1,1,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,0,0,1,1,0,1,1,1,0,1,0,1,1,0,1,0,1,0,1,1,1,0,0,0,0,1,0,1,1,0,0,1,0,1,0,1,1,0,1,1,0,0,1,1,0,1,0,0,1,1,0,0,0,0,1,0,0,1,1,0,0,1,0,1,0,1,1,1,0,1,0,1,1,0,0,1,1,0,0,1,0,1,0,1,0,0,0,0,0,1,0,0,1,1,1,1,1,1,1,1,0,0,1,0,1,1,0,1,0,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,0,1,1,0,0,1,0,1,1,0,1,0,1,0,0,0,1,1,0,1,0,1,1,1,0,0,0,1,0,0,0,1,1,1,1,0,1,0,0,0,1,1,1,0,0,1,0,1,1,0,1,0,0,0,1,1,0,0,1,0,1,0,1,1,1,0,0,0,1,1,0,0,1,0,1,0,0,1,1,0,1,1,0,1,1,1,0,1,0,0,0,1,1,1,0,0,1,0,0,0,0,1,0,1,1,1,1,0,1,1,1,0,0,0,1,1,0,0,0,0,0,0,0,1,1,1,1,0,1,0,0,0,1,0,1,1,1,1,0,1,0,0,1,1,1,0,1,1,0,1,0,1,0,1,1,0,0,0,0,1,0,0,0,0,1,0,0,1,1,0,1,0,0,1,1,1,0,0,1,0,1,0,0,0,1,0,1,0,0,0,1,1,1,1,1,1,1,0,0,1,1,0,1,1,1,1,1,0,0,1,0,0,0,1,1,0,0,1,1,0,0,0,0,1,0,1,0,0,0,1,1,0,0,1,1,0,0,1,1,0,1,0,1,1,1,0,1,1,0,0,1,1,0,1,1,1,0,0,1,1,0,0,0,0,1,0,1,1,0,0,1,0,0,1,0,0,0,0,0,0,1,1,1,0,1,1,1,0,0,1,1,0,1,1,0,0,0,1,0,0,1,0,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,1,1,0,1,0,1,0,0,0,1,0,1,0,0,1,0,0,0,1,0,0,0,1,1,0,0,1,0,1,0,0,1,1,0,1,1,0,1,0,0,0,1,0,0,0,1,1,0,0,1,0,0,0,0,0,0,1,0,1,1,0,0,0,1,0,0,1,0,1,1,1,0,0,0,0,0,1,1,1,0,0,0,1,0,1,1,1,0,0,0,1,0,0,0,0,0,1,1,1,1,0,1,1,1,0,1,1,1,0,1,0,0,1,0,1,1,1,0,0,0,0,0,1,0,1,1,0,0,0,0,1,0,0,0,1,1,1,1,0,1,0,1,0,0,0,0,0,1,0,0,1,0,1,0,0,0,0,0,1,1,1,1,0,1,1,1,0,0,1,0,0,0,1,1,1,1,0,1,1,1,1,0,1,0,0,1,1,1,1,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,1,1,0,0,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,0,1,0,0,1,1,0,0,0,1,0,1,0,1,1,1,0,0,1,0,1,0,0,1,1,0,0,1,0,1,1,1,0,1,0,1,1,0,0,0,0,1,1,1,0,0,1,1,1,0,0,1,0,0,0,1,0,0,1,1,0,1,1,0,0,0,1,0,0,0,1,0,0,1,1,1,0,0,1,1,0,1,1,0,1,0,1,0,0,1,1,0,1,1,0,0,1,0,1,0,0,0,0,0,0,1,1,0,1,0,1,1,0,0,1,1,1,0,0,0,0,0,1,0,0,0,1,1,1,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0,1,0,0,0,0,0,1,0,1,0,1,0,1,1,1,0,1,0,1,0,0,0,0,0,0,0,1,0,1,1,0,0,1,1,1,0,1,1,0,1,0,1,0,0,1,0,0,0,0,0,0,0,1,1,1,1,0,0,0,1,1,1,0,1,1,0,1,1,1,1,0,0,1,1,1,0,1,1,0,1,1,1,0,0,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,1,1,0,1,1,0,1,1,1,0,0,0,0,1,0,0,1,0,0,0,1,1,0,0,1,1,0,0,1,1,1,0,1,0,1,1,1,0,0,0,1,0,1,1,1,1,1,0,0,1,1,0,1,0,1,0,0,0,1,1,0,1,1,1,1,1,1,0,1,1,0,0,0,0,0,1,1,0,0,1,0,1,0,0,0,1,1,0,0,0,0,];
var gg_b = "1749157202/";

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
