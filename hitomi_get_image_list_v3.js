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
case 146:
case 2524:
case 1718:
case 1506:
case 1482:
case 70:
case 3580:
case 2143:
case 3085:
case 3826:
case 3562:
case 1192:
case 1221:
case 3795:
case 2171:
case 358:
case 3381:
case 829:
case 807:
case 3371:
case 1852:
case 1466:
case 382:
case 2181:
case 3690:
case 1137:
case 150:
case 2491:
case 1333:
case 2884:
case 1472:
case 1721:
case 3570:
case 1928:
case 3075:
case 3820:
case 3343:
case 3402:
case 2865:
case 369:
case 4008:
case 3379:
case 814:
case 2962:
case 1644:
case 3232:
case 1242:
case 2189:
case 983:
case 298:
case 461:
case 4067:
case 2293:
case 1729:
case 3924:
case 1955:
case 2980:
case 555:
case 770:
case 2345:
case 1068:
case 3732:
case 111:
case 3714:
case 2986:
case 3145:
case 1553:
case 2083:
case 1742:
case 2179:
case 41:
case 1110:
case 297:
case 1423:
case 3389:
case 3297:
case 720:
case 3298:
case 3078:
case 1925:
case 1230:
case 1883:
case 3240:
case 1008:
case 726:
case 1215:
case 1736:
case 324:
case 3746:
case 1635:
case 1369:
case 1841:
case 3991:
case 1730:
case 3798:
case 2902:
case 1259:
case 3831:
case 4068:
case 173:
case 2689:
case 1523:
case 1616:
case 1849:
case 319:
case 753:
case 1794:
case 2052:
case 1406:
case 1927:
case 3839:
case 3462:
case 2805:
case 3856:
case 701:
case 2681:
case 3148:
case 2554:
case 1294:
case 450:
case 3196:
case 1958:
case 1692:
case 140:
case 239:
case 385:
case 2643:
case 3470:
case 1717:
case 1049:
case 2638:
case 2137:
case 2218:
case 2852:
case 2466:
case 62:
case 3039:
case 2500:
case 3953:
case 3056:
case 514:
case 439:
case 781:
case 2472:
case 1884:
case 2333:
case 1874:
case 3661:
case 1143:
case 3555:
case 3050:
case 1524:
case 67:
case 246:
case 4052:
case 2911:
case 3804:
case 305:
case 1454:
case 3101:
case 2221:
case 2192:
case 2957:
case 1986:
case 3900:
case 1083:
case 2135:
case 2068:
case 529:
case 1808:
case 3109:
case 1793:
case 2229:
case 3316:
case 2423:
case 197:
case 941:
case 2242:
case 3557:
case 3031:
case 3003:
case 1980:
case 3427:
case 3906:
case 3335:
case 331:
case 600:
case 1073:
case 2729:
case 1293:
case 94:
case 3887:
case 3428:
case 2841:
case 4083:
case 2369:
case 903:
case 2616:
case 3558:
case 2715:
case 2610:
case 33:
case 2759:
case 3609:
case 498:
case 2230:
case 2925:
case 3457:
case 3960:
case 1312:
case 2883:
case 1334:
case 794:
case 2635:
case 3877:
case 3169:
case 1599:
case 223:
case 2215:
case 1348:
case 2751:
case 240:
case 692:
case 3923:
case 3601:
case 2294:
case 3885:
case 2566:
case 2400:
case 910:
case 2717:
case 852:
case 2572:
case 3161:
case 663:
case 3213:
case 887:
case 1052:
case 2251:
case 302:
case 2361:
case 2849:
case 1554:
case 671:
case 4022:
case 3713:
case 2138:
case 3525:
case 3020:
case 1396:
case 2427:
case 1797:
case 2906:
case 1863:
case 2888:
case 424:
case 3729:
case 1634:
case 728:
case 1379:
case 1214:
case 2310:
case 984:
case 3116:
case 3644:
case 1232:
case 2458:
case 1389:
case 290:
case 1297:
case 642:
case 474:
case 709:
case 3423:
case 2316:
case 3110:
case 727:
case 2878:
case 1145:
case 2900:
case 655:
case 3068:
case 82:
case 2528:
case 3135:
case 3919:
case 205:
case 158:
case 1696:
case 1381:
case 2337:
case 2101:
case 1562:
case 3192:
case 3221:
case 3957:
case 3506:
case 975:
case 1580:
case 2050:
case 2661:
case 419:
case 1826:
case 2133:
case 2804:
case 3718:
case 3911:
case 3500:
case 633:
case 485:
case 99:
case 169:
case 1586:
case 1343:
case 2056:
case 2519:
case 3472:
case 3721:
case 1295:
case 1075:
case 3928:
case 3638:
case 182:
case 1690:
case 3137:
case 1147:
case 2039:
case 3466:
case 3217:
case 2875:
case 1647:
case 3065:
case 3560:
case 1190:
case 3927:
case 356:
case 4085:
case 1999:
case 4075:
case 3400:
case 1486:
case 2419:
case 185:
case 1470:
case 2864:
case 457:
case 3692:
case 991:
case 147:
case 1850:
case 1196:
case 2527:
case 1746:
case 871:
case 361:
case 2982:
case 2411:
case 2877:
case 2169:
case 296:
case 3736:
case 323:
case 3215:
case 3610:
case 688:
case 4087:
case 1240:
case 23:
case 3008:
case 580:
case 3230:
case 1088:
case 3616:
case 821:
case 174:
case 1803:
case 3236:
case 373:
case 2966:
case 1112:
case 863:
case 2063:
case 3523:
case 1134:
case 1740:
case 3841:
case 1991:
case 2972:
case 3179:
case 834:
case 1316:
case 712:
case 2297:
case 1109:
case 1528:
case 3970:
case 608:
case 2732:
case 3808:
case 500:
case 3986:
case 3083:
case 1511:
case 1335:
case 3976:
case 3073:
case 2924:
case 496:
case 1427:
case 3980:
case 2863:
case 3345:
case 2797:
case 2214:
case 1557:
case 2087:
case 2379:
case 1310:
case 3962:
case 3189:
case 3041:
case 398:
case 2612:
case 1519:
case 3491:
case 968:
case 2570:
case 2075:
case 1953:
case 2586:
case 2343:
case 2147:
case 1392:
case 257:
case 1039:
case 4026:
case 3049:
case 3171:
case 2795:
case 2562:
case 4020:
case 3454:
case 1337:
case 3524:
case 1133:
case 614:
case 1804:
case 967:
case 2826:
case 402:
case 2085:
case 4056:
case 3591:
case 1161:
case 1213:
case 2470:
case 880:
case 664:
case 2502:
case 247:
case 1885:
case 3390:
case 3348:
case 1864:
case 2004:
case 3671:
case 2462:
case 3396:
case 248:
case 2647:
case 4050:
case 3424:
case 219:
case 2999:
case 521:
case 2476:
case 918:
case 2112:
case 2803:
case 490:
case 274:
case 2246:
case 2798:
case 2991:
case 3902:
case 2740:
case 904:
case 715:
case 2831:
case 1877:
case 1411:
case 3599:
case 793:
case 196:
case 4003:
case 789:
case 3807:
case 1982:
case 1457:
case 3334:
case 1344:
case 13:
case 2954:
case 2240:
case 1848:
case 503:
case 1225:
case 2175:
case 3940:
case 73:
case 2702:
case 1156:
case 3385:
case 1890:
case 3838:
case 162:
case 2047:
case 1915:
case 193:
case 2322:
case 551:
case 189:
case 394:
case 1725:
case 2861:
case 2349:
case 115:
case 2202:
case 1959:
case 604:
case 1936:
case 3946:
case 412:
case 3043:
case 3387:
case 702:
case 3493:
case 1227:
case 2177:
case 1758:
case 2678:
case 1009:
case 2598:
case 6:
case 3183:
case 2540:
case 1368:
case 617:
case 1812:
case 1727:
case 2187:
case 1131:
case 1307:
case 3089:
case 3377:
case 2012:
case 2034:
case 3593:
case 1163:
case 659:
case 2687:
case 883:
case 2532:
case 1603:
case 667:
case 914:
case 2440:
case 705:
case 3683:
case 560:
case 2446:
case 668:
case 1228:
case 2677:
case 1845:
case 516:
case 3388:
case 381:
case 462:
case 2770:
case 1061:
case 3914:
case 929:
case 1719:
case 2801:
case 55:
case 2352:
case 2786:
case 2664:
case 3224:
case 2993:
case 541:
case 731:
case 489:
case 2276:
case 2833:
case 1255:
case 493:
case 2280:
case 1374:
case 1219:
case 1120:
case 2270:
case 1639:
case 2048:
case 2286:
case 278:
case 3304:
case 227:
case 3837:
case 1929:
case 2780:
case 2675:
case 1847:
case 4033:
case 1349:
case 2626:
case 987:
case 1202:
case 2725:
case 1604:
case 3092:
case 3272:
case 3760:
case 3339:
case 1185:
case 2150:
case 3782:
case 3594:
case 2033:
case 866:
case 2936:
case 376:
case 1702:
case 3105:
case 262:
case 3350:
case 1175:
case 2225:
case 3282:
case 477:
case 335:
case 289:
case 724:
case 1322:
case 326:
case 3766:
case 293:
case 2915:
case 1047:
case 988:
case 3684:
case 2258:
case 2103:
case 1497:
case 2834:
case 1383:
case 2727:
case 851:
case 3536:
case 2994:
case 3223:
case 803:
case 3913:
case 1187:
case 84:
case 3016:
case 785:
case 2227:
case 1341:
case 672:
case 2009:
case 2951:
case 2758:
case 3608:
case 719:
case 3107:
case 353:
case 2917:
case 748:
case 3168:
case 3530:
case 3667:
case 1432:
case 841:
case 1446:
case 3668:
case 69:
case 2711:
case 769:
case 3459:
case 636:
case 625:
case 2228:
case 85:
case 1178:
case 1188:
case 1687:
case 2308:
case 30:
case 2211:
case 3542:
case 758:
case 1440:
case 1514:
case 3430:
case 2257:
case 4045:
case 2728:
case 675:
case 1532:
case 2921:
case 3184:
case 2639:
case 3200:
case 178:
case 2219:
case 599:
case 2374:
case 3165:
case 2413:
case 2847:
case 1780:
case 320:
case 3706:
case 212:
case 1776:
case 127:
case 3881:
case 2929:
case 1786:
case 128:
case 1352:
case 3700:
case 1262:
case 3521:
case 1801:
case 370:
case 3451:
case 684:
case 1993:
case 3174:
case 177:
case 1096:
case 3843:
case 2442:
case 2530:
case 201:
case 517:
case 3758:
case 3009:
case 1079:
case 2515:
case 2331:
case 1493:
case 2107:
case 1089:
case 3663:
case 1141:
case 2913:
case 739:
case 481:
case 549:
case 3103:
case 3812:
case 3727:
case 963:
case 3834:
case 3368:
case 921:
case 1799:
case 18:
case 2282:
case 1081:
case 2551:
case 2037:
case 393:
case 3915:
case 2766:
case 2684:
case 2105:
case 1940:
case 872:
case 3890:
case 1385:
case 1791:
case 1652:
case 891:
case 1946:
case 3305:
case 3896:
case 3150:
case 3033:
case 2418:
case 2266:
case 276:
case 3936:
case 822:
case 3959:
case 2272:
case 1071:
case 2760:
case 1122:
case 1291:
case 906:
case 270:
case 1622:
case 3255:
case 494:
case 2174:
case 1224:
case 4081:
case 365:
case 3365:
case 1892:
case 2417:
case 900:
case 3942:
case 3061:
case 232:
case 1914:
case 3755:
case 3847:
case 2706:
case 220:
case 836:
case 312:
case 2518:
case 3656:
case 65:
case 1837:
case 825:
case 2605:
case 3639:
case 641:
case 2184:
case 3219:
case 89:
case 3413:
case 1649:
case 2165:
case 660:
case 1673:
case 2430:
case 568:
case 913:
case 3603:
case 3728:
case 616:
case 20:
case 3308:
case 3211:
case 1641:
case 2459:
case 1835:
case 2253:
case 1995:
case 3845:
case 3757:
case 559:
case 4089:
case 2167:
case 2668:
case 1810:
case 2529:
case 3918:
case 572:
case 1913:
case 804:
case 3688:
case 2377:
case 1559:
case 2089:
case 638:
case 2799:
case 2173:
case 1223:
case 530:
case 3497:
case 740:
case 3546:
case 3383:
case 1530:
case 1667:
case 3373:
case 3432:
case 1442:
case 2387:
case 1723:
case 40:
case 2299:
case 1107:
case 756:
case 153:
case 4044:
case 1515:
case 354:
case 3869:
case 3177:
case 420:
case 2375:
case 1266:
case 176:
case 71:
case 2043:
case 3185:
case 1092:
case 2291:
case 2122:
case 1272:
case 4038:
case 3861:
case 817:
case 1766:
case 126:
case 3047:
case 723:
case 818:
case 470:
case 1684:
case 761:
case 2081:
case 135:
case 2149:
case 1037:
case 294:
case 2364:
case 2998:
case 1260:
case 2791:
case 3175:
case 2385:
case 432:
case 1494:
case 309:
case 3776:
case 327:
case 1518:
case 1881:
case 2724:
case 2837:
case 476:
case 3780:
case 2997:
case 1165:
case 3595:
case 584:
case 3270:
case 711:
case 1038:
case 3048:
case 1184:
case 4092:
case 3286:
case 4037:
case 1174:
case 435:
case 683:
case 1206:
case 170:
case 1451:
case 2622:
case 699:
case 426:
case 3104:
case 3770:
case 2932:
case 1521:
case 2914:
case 1417:
case 859:
case 1363:
case 2835:
case 1607:
case 2388:
case 1529:
case 2683:
case 750:
case 575:
case 3597:
case 1879:
case 3498:
case 1430:
case 3514:
case 3532:
case 2673:
case 1542:
case 4035:
case 401:
case 59:
case 2378:
case 3012:
case 746:
case 2593:
case 1415:
case 3034:
case 2641:
case 143:
case 536:
case 4010:
case 344:
case 1099:
case 1279:
case 2129:
case 1473:
case 640:
case 292:
case 1332:
case 2567:
case 3027:
case 548:
case 2235:
case 221:
case 3965:
case 434:
case 1441:
case 2615:
case 3984:
case 83:
case 1779:
case 2023:
case 2407:
case 3563:
case 1904:
case 3709:
case 3329:
case 953:
case 2216:
case 737:
case 1289:
case 896:
case 2142:
case 2636:
case 1483:
case 1422:
case 1800:
case 2792:
case 1771:
case 2060:
case 3908:
case 1054:
case 2584:
case 345:
case 2118:
case 206:
case 2617:
case 180:
case 3733:
case 1552:
case 3450:
case 2237:
case 2072:
case 388:
case 2292:
case 3318:
case 3862:
case 574:
case 3456:
case 3201:
case 2963:
case 2066:
case 3439:
case 486:
case 3613:
case 1781:
case 1522:
case 2738:
case 4054:
case 1987:
case 2891:
case 3351:
case 355:
case 920:
case 1872:
case 2484:
case 1024:
case 342:
case 480:
case 3317:
case 2006:
case 2903:
case 2621:
case 3055:
case 3550:
case 3394:
case 3019:
case 2238:
case 3968:
case 66:
case 4091:
case 2618:
case 1882:
case 3907:
case 799:
case 932:
case 3539:
case 186:
case 2151:
case 783:
case 3011:
case 2136:
case 2642:
case 1573:
case 650:
case 1964:
case 3769:
case 2950:
case 1985:
case 22:
case 1340:
case 3057:
case 890:
case 3315:
case 134:
case 2159:
case 1541:
case 295:
case 2899:
case 646:
case 2130:
case 557:
case 90:
case 831:
case 1346:
case 3811:
case 3588:
case 3477:
case 2904:
case 1926:
case 1659:
case 1407:
case 1023:
case 2779:
case 1142:
case 3745:
case 2483:
case 1636:
case 1468:
case 3646:
case 824:
case 3132:
case 3197:
case 1567:
case 3698:
case 42:
case 2314:
case 2279:
case 2099:
case 3640:
case 1210:
case 2441:
case 766:
case 2789:
case 1508:
case 1716:
case 3487:
case 495:
case 874:
case 1920:
case 364:
case 502:
case 2853:
case 3002:
case 1292:
case 1072:
case 2271:
case 3475:
case 1824:
case 2449:
case 2243:
case 2781:
case 400:
case 2806:
case 1066:
case 3855:
case 1584:
case 847:
case 2800:
case 1060:
case 2771:
case 3195:
case 1792:
case 2978:
case 1651:
case 1082:
case 74:
case 2743:
case 106:
case 1617:
case 3248:
case 4072:
case 3086:
case 1854:
case 698:
case 3290:
case 1151:
case 2549:
case 2977:
case 3796:
case 2882:
case 308:
case 1891:
case 3941:
case 857:
case 3062:
case 1738:
case 2522:
case 3790:
case 1931:
case 1465:
case 531:
case 882:
case 1006:
case 2452:
case 75:
case 2866:
case 697:
case 1194:
case 2024:
case 3076:
case 4082:
case 379:
case 4023:
case 17:
case 1899:
case 3488:
case 1939:
case 3827:
case 3712:
case 113:
case 1115:
case 471:
case 1956:
case 2583:
case 1053:
case 2346:
case 1629:
case 1568:
case 2975:
case 1130:
case 3697:
case 2985:
case 492:
case 3632:
case 1950:
case 1244:
case 1467:
case 505:
case 3614:
case 12:
case 3146:
case 2398:
case 3858:
case 195:
case 421:
case 3478:
case 463:
case 187:
case 3281:
case 839:
case 442:
case 1450:
case 4055:
case 2464:
case 1701:
case 145:
case 1870:
case 3422:
case 1025:
case 3978:
case 1613:
case 3781:
case 3243:
case 3806:
case 624:
case 3395:
case 2855:
case 1880:
case 2747:
case 3271:
case 1318:
case 685:
case 3853:
case 556:
case 1403:
case 647:
case 2197:
case 1027:
case 2698:
case 2952:
case 4011:
case 3314:
case 3279:
case 722:
case 3473:
case 3332:
case 2745:
case 540:
case 3397:
case 2857:
case 730:
case 4028:
case 3483:
case 1329:
case 2114:
case 2646:
case 2132:
case 2811:
case 3779:
case 3193:
case 334:
case 897:
case 3541:
case 725:
case 1057:
case 2478:
case 736:
case 1315:
case 546:
case 657:
case 1503:
case 3985:
case 2146:
case 3823:
case 2212:
case 3398:
case 3573:
case 4027:
case 2234:
case 550:
case 775:
case 3583:
case 3346:
case 1336:
case 3975:
case 658:
case 1359:
case 2949:
case 2827:
case 2734:
case 898:
case 4058:
case 2712:
case 3452:
case 3866:
case 1055:
case 142:
case 3024:
case 2973:
case 487:
case 2296:
case 279:
case 3872:
case 2748:
case 2941:
case 2062:
case 445:
case 909:
case 1802:
case 2695:
case 928:
case 2404:
case 3977:
case 3882:
case 207:
case 2796:
case 784:
case 2248:
case 488:
case 2825:
case 1394:
case 1761:
case 3963:
case 3574:
case 2526:
case 2880:
case 3066:
case 2613:
case 3824:
case 962:
case 3737:
case 1504:
case 429:
case 2318:
case 4086:
case 288:
case 63:
case 4070:
case 3405:
case 989:
case 306:
case 1464:
case 2321:
case 3118:
case 3617:
case 479:
case 3082:
case 2450:
case 704:
case 1485:
case 915:
case 840:
case 3060:
case 408:
case 2025:
case 3584:
case 245:
case 1819:
case 2908:
case 2870:
case 1646:
case 861:
case 371:
case 3735:
case 3926:
case 3407:
case 3659:
case 2563:
case 414:
case 2974:
case 1811:
case 2058:
case 2709:
case 2965:
case 3235:
case 3920:
case 321:
case 1487:
case 81:
case 1578:
case 2431:
case 1393:
case 1828:
case 1245:
case 3508:
case 3129:
case 3210:
case 717:
case 392:
case 1197:
case 2342:
case 3568:
case 1198:
case 3130:
case 2028:
case 2905:
case 1734:
case 2269:
case 3115:
case 313:
case 3899:
case 1478:
case 2057:
case 1922:
case 2011:
case 1212:
case 2769:
case 1632:
case 3244:
case 2503:
case 811:
case 2907:
case 1796:
case 107:
case 2539:
case 1695:
case 1404:
case 300:
case 965:
case 4002:
case 2019:
case 597:
case 1290:
case 2761:
case 1575:
case 1070:
case 3117:
case 1248:
case 3000:
case 2556:
case 3194:
case 1564:
case 1973:
case 690:
case 1076:
case 1296:
case 598:
case 2055:
case 3621:
case 2550:
case 3903:
case 3931:
case 850:
case 1790:
case 912:
case 255:
case 2351:
case 3891:
case 1941:
case 1399:
case 1014:
case 4040:
case 341:
case 1287:
case 1032:
case 3768:
case 3042:
case 3327:
case 708:
case 2611:
case 990:
case 1445:
case 3707:
case 1512:
case 3410:
case 3123:
case 1534:
case 2158:
case 612:
case 3268:
case 2731:
case 2938:
case 3416:
case 2898:
case 3358:
case 3653:
case 2569:
case 3207:
case 729:
case 707:
case 2127:
case 1277:
case 2703:
case 2628:
case 2739:
case 3166:
case 1596:
case 417:
case 2561:
case 1775:
case 3021:
case 2655:
case 236:
case 3606:
case 225:
case 1676:
case 1813:
case 1102:
case 159:
case 2372:
case 1686:
case 3600:
case 1764:
case 1670:
case 1785:
case 2750:
case 832:
case 714:
case 449:
case 360:
case 3160:
case 1590:
case 3205:
case 275:
case 2256:
case 2401:
case 117:
case 2910:
case 1547:
case 2726:
case 1979:
case 3051:
case 2625:
case 468:
case 3909:
case 310:
case 2119:
case 1324:
case 764:
case 2935:
case 2220:
case 1170:
case 3017:
case 3100:
case 876:
case 1186:
case 2895:
case 149:
case 2533:
case 272:
case 1176:
case 459:
case 467:
case 1:
case 1490:
case 2013:
case 1448:
case 1989:
case 3784:
case 615:
case 2128:
case 2627:
case 4032:
case 4014:
case 2897:
case 3444:
case 2937:
case 104:
case 3267:
case 34:
case 1788:
case 2157:
case 662:
case 2992:
case 1778:
case 1971:
case 3708:
case 3623:
case 2814:
case 2832:
case 689:
case 1943:
case 693:
case 3767:
case 3893:
case 2353:
case 3830:
case 3990:
case 1840:
case 2787:
case 2097:
case 1127:
case 3815:
case 3199:
case 184:
case 3773:
case 399:
case 3783:
case 1611:
case 2014:
case 609:
case 2777:
case 1409:
case 1657:
case 3479:
case 2534:
case 3273:
case 3093:
case 881:
case 3249:
case 2785:
case 2670:
case 1619:
case 958:
case 2391:
case 3851:
case 1372:
case 644:
case 259:
case 1239:
case 3154:
case 2548:
case 175:
case 3817:
case 3471:
case 430:
case 2590:
case 2095:
case 1366:
case 2354:
case 2662:
case 2285:
case 3749:
case 1250:
case 3934:
case 2447:
case 2264:
case 2596:
case 1360:
case 1382:
case 125:
case 1756:
case 982:
case 2813:
case 3624:
case 543:
case 136:
case 733:
case 1561:
case 957:
case 1300:
case 948:
case 2204:
case 3691:
case 3543:
case 1533:
case 249:
case 654:
case 2602:
case 2176:
case 3821:
case 2989:
case 2:
case 3571:
case 1720:
case 894:
case 337:
case 1013:
case 2490:
case 338:
case 2704:
case 122:
case 217:
case 3362:
case 2496:
case 3654:
case 49:
case 2979:
case 1895:
case 3380:
case 1461:
case 3376:
case 947:
case 924:
case 1832:
case 3842:
case 1658:
case 2778:
case 2288:
case 484:
case 1469:
case 974:
case 88:
case 745:
case 2098:
case 204:
case 2981:
case 787:
case 2412:
case 1897:
case 3579:
case 752:
case 795:
case 3676:
case 1705:
case 2624:
case 3813:
case 3102:
case 681:
case 1021:
case 1606:
case 3285:
case 2749:
case 1437:
case 410:
case 878:
case 877:
case 3548:
case 2154:
case 1492:
case 2471:
case 2817:
case 3590:
case 2722:
case 3670:
case 1182:
case 2249:
case 77:
case 3686:
case 359:
case 116:
case 1018:
case 713:
case 2851:
case 1600:
case 1969:
case 1544:
case 2836:
case 15:
case 44:
case 2479:
case 2093:
case 1123:
case 3534:
case 1410:
case 2783:
case 1327:
case 4030:
case 451:
case 3445:
case 3399:
case 565:
case 3287:
case 141:
case 1435:
case 1768:
case 3032:
case 998:
case 3097:
case 1029:
case 1653:
case 1358:
case 2948:
case 2283:
case 2990:
case 844:
case 512:
case 562:
case 1267:
case 2829:
case 1357:
case 45:
case 3412:
case 103:
case 1015:
case 1153:
case 3545:
case 1208:
case 3098:
case 1535:
case 593:
case 4042:
case 3943:
case 3288:
case 1767:
case 4029:
case 3046:
case 1708:
case 1901:
case 1516:
case 854:
case 3971:
case 1100:
case 763:
case 4021:
case 2380:
case 1265:
case 1682:
case 2376:
case 1909:
case 2818:
case 1051:
case 1660:
case 68:
case 792:
case 1666:
case 3448:
case 460:
case 1784:
case 3989:
case 771:
case 3:
case 1438:
case 4018:
case 3180:
case 2386:
case 416:
case 3204:
case 1319:
case 3176:
case 1817:
case 1471:
case 260:
case 3125:
case 946:
case 3366:
case 1154:
case 3401:
case 3433:
case 3372:
case 2600:
case 3239:
case 3750:
case 2182:
case 3619:
case 1443:
case 3655:
case 1222:
case 336:
case 1191:
case 3561:
case 3382:
case 3756:
case 325:
case 950:
case 1624:
case 2705:
case 1934:
case 3739:
case 39:
case 1749:
case 3250:
case 3944:
case 384:
case 3569:
case 1199:
case 2029:
case 1773:
case 670:
case 96:
case 199:
case 3938:
case 2268:
case 527:
case 3840:
case 509:
case 1489:
case 632:
case 1283:
case 1996:
case 1479:
case 2410:
case 2123:
case 3846:
case 2544:
case 3158:
case 25:
case 2435:
case 2042:
case 3469:
case 2036:
case 499:
case 626:
case 3353:
case 2893:
case 2767:
case 1842:
case 923:
case 2516:
case 961:
case 2059:
case 1589:
case 2708:
case 3814:
case 2623:
case 3832:
case 3763:
case 780:
case 2357:
case 3897:
case 1579:
case 1829:
case 4093:
case 3937:
case 2444:
case 24:
case 2030:
case 973:
case 2208:
case 1699:
case 2153:
case 1571:
case 2765:
case 3916:
case 3720:
case 601:
case 2666:
case 2784:
case 893:
case 330:
case 1124:
case 3533:
case 2274:
case 2094:
case 1370:
case 1752:
case 653:
case 1543:
case 3220:
case 2682:
case 2265:
case 3306:
case 940:
case 266:
case 2355:
case 3895:
case 554:
case 3910:
case 1362:
case 2774:
case 815:
case 2660:
case 1252:
case 210:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1745197201/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,1,1,0,0,1,0,0,0,0,0,1,1,0,1,0,1,1,0,1,0,1,1,1,1,0,0,0,0,1,0,0,1,1,0,0,0,0,1,1,1,1,0,1,1,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,1,1,0,1,1,1,1,1,1,1,0,1,1,1,0,1,0,0,0,1,1,1,1,1,0,0,1,1,1,0,0,0,1,0,1,0,0,1,0,0,0,1,1,0,1,1,0,0,0,1,0,1,0,1,1,1,0,0,0,0,1,0,0,1,1,1,1,0,0,0,0,0,1,1,1,0,0,0,1,1,1,1,0,1,1,1,0,1,1,0,0,1,0,0,0,0,1,1,0,0,1,0,0,0,0,0,0,1,1,0,0,1,1,1,1,1,1,0,1,0,1,0,1,1,1,1,0,1,0,0,0,1,0,1,1,1,0,1,0,1,0,0,1,1,1,1,0,0,1,0,1,0,0,0,0,1,0,1,1,1,0,1,0,1,0,1,0,0,0,0,1,0,0,0,1,0,0,1,1,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,0,1,0,1,1,0,1,0,0,0,1,0,0,0,1,0,1,0,1,1,1,0,1,1,0,0,0,0,0,0,0,0,1,1,1,0,1,1,1,1,1,1,1,0,1,0,1,0,0,1,1,0,1,1,1,0,1,1,0,0,0,0,0,1,1,1,0,1,1,1,1,1,0,0,1,1,0,0,1,1,1,1,1,0,0,1,1,0,1,1,0,0,0,0,0,0,0,1,1,1,1,0,1,1,1,1,0,0,1,1,0,0,0,1,1,1,0,1,0,0,1,0,0,1,0,1,1,0,1,1,0,0,1,0,0,0,1,1,1,0,0,0,1,1,1,1,1,0,0,0,0,0,1,0,1,0,1,0,1,0,1,1,0,1,1,1,0,0,1,0,1,0,0,1,1,0,1,0,1,1,0,0,0,1,0,0,1,0,0,1,0,0,0,1,1,1,0,0,0,0,0,1,0,1,1,1,1,1,0,0,0,1,1,0,1,1,0,0,1,0,1,1,0,1,1,1,0,0,1,1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,1,0,1,1,0,1,0,0,0,1,0,0,1,0,1,0,1,1,0,0,0,1,0,0,0,0,0,1,0,1,1,1,0,0,0,0,1,0,0,0,1,1,0,1,0,0,1,0,1,1,1,1,0,0,1,1,1,1,0,1,1,0,1,0,0,1,0,0,1,0,0,0,1,0,1,1,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,1,1,1,1,1,0,0,1,0,0,0,1,1,0,0,1,0,1,1,1,1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,0,0,1,0,1,0,1,1,1,0,1,0,1,1,0,0,1,0,0,1,1,1,0,1,1,1,1,0,1,1,1,0,0,1,1,0,1,1,1,0,0,1,0,0,0,0,0,1,0,1,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,0,1,1,0,1,1,0,1,1,1,0,1,1,1,1,1,0,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,0,0,1,1,0,1,1,0,0,0,0,1,1,0,1,0,1,0,1,1,0,0,1,0,1,0,0,1,0,1,1,0,1,0,0,1,1,1,0,0,0,1,0,0,0,0,1,1,0,1,1,1,0,1,0,1,0,0,1,1,1,1,0,0,0,1,0,0,0,1,1,0,0,1,0,0,0,1,0,0,1,1,0,1,1,0,0,1,1,0,1,1,0,0,0,1,0,1,1,0,1,0,1,0,0,1,1,1,0,0,1,0,0,1,0,0,1,1,1,0,1,0,0,1,0,1,0,1,0,1,0,0,1,0,0,0,0,1,1,0,1,0,1,1,1,0,1,1,1,1,0,0,0,1,0,0,1,1,0,1,1,0,1,1,1,0,1,0,0,1,1,0,1,0,0,1,1,0,1,1,1,1,0,0,1,0,1,1,0,1,1,0,0,0,1,1,0,0,1,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,1,0,1,0,0,1,0,0,0,1,1,0,0,1,1,1,0,1,0,1,1,0,0,0,0,1,1,1,0,0,0,0,0,0,1,1,1,0,0,1,1,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,1,0,0,0,1,1,1,0,0,1,0,0,1,0,1,1,1,0,1,0,1,0,0,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,0,1,0,1,1,1,1,1,0,1,0,0,1,1,0,0,0,0,1,0,1,0,1,1,1,1,0,1,1,0,0,1,0,1,1,1,0,0,0,0,1,1,0,0,1,0,0,0,1,0,0,1,1,0,1,0,0,0,0,1,0,1,1,0,1,0,0,1,0,0,0,0,1,0,1,1,1,0,0,1,0,0,1,1,0,1,1,0,0,1,0,0,0,1,1,1,0,1,0,1,0,0,0,1,0,1,1,0,1,0,0,0,0,1,0,1,0,1,0,0,0,0,1,0,0,0,1,1,1,0,1,0,0,0,1,0,1,1,1,1,1,0,1,1,1,0,1,0,1,1,1,1,0,0,1,0,0,0,1,0,1,0,1,0,1,1,1,1,0,0,0,1,0,1,1,1,1,1,0,1,1,0,1,0,1,0,0,0,0,0,0,1,1,0,1,0,1,1,0,0,1,0,1,0,1,0,0,1,0,0,0,1,1,0,1,0,0,1,1,1,0,0,0,0,1,0,0,0,0,1,0,1,0,0,0,1,0,0,0,1,0,1,1,1,1,1,1,1,1,1,0,0,1,0,0,0,0,0,0,1,0,0,1,0,1,0,0,1,1,0,1,1,0,0,1,0,1,0,0,1,0,1,0,0,1,1,1,1,1,1,0,0,1,1,0,1,1,0,1,0,1,1,0,0,1,0,0,0,0,1,1,1,1,0,1,1,0,0,1,0,1,1,1,0,1,0,1,0,0,0,0,1,0,1,1,1,0,1,0,0,0,1,0,0,1,1,1,0,1,0,0,1,0,0,0,1,1,0,1,1,0,1,1,1,0,0,0,1,0,1,0,0,0,0,1,1,0,0,0,1,0,0,1,0,1,0,0,1,0,1,1,0,1,1,1,1,0,1,1,0,1,0,1,1,0,0,1,0,0,1,0,0,0,1,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,1,0,0,1,1,0,1,1,1,0,1,1,0,1,1,1,0,0,1,0,0,0,0,0,1,1,0,1,0,1,0,0,1,1,0,1,1,1,0,1,1,0,1,1,1,1,0,0,0,1,1,1,0,1,1,1,1,0,0,0,0,0,1,1,1,1,0,0,1,0,0,0,0,1,1,1,0,0,1,0,1,0,1,1,0,1,0,0,1,1,0,0,1,0,1,0,1,0,0,1,1,1,0,0,0,1,0,1,0,0,1,1,0,0,0,0,0,1,0,0,1,1,0,0,1,1,0,1,1,0,0,0,1,0,1,0,0,1,1,0,1,0,0,1,0,1,0,0,0,0,1,0,0,1,0,1,1,1,0,0,1,0,1,0,0,1,0,1,1,0,1,0,1,1,1,0,0,0,1,1,1,1,0,0,0,0,0,1,1,0,0,1,0,0,1,0,0,1,0,0,0,0,0,1,0,1,0,1,1,0,0,1,0,1,0,0,1,1,0,0,1,0,1,1,0,0,1,0,0,1,0,0,0,0,0,0,0,1,1,1,1,1,1,0,1,0,1,0,1,0,1,1,0,0,0,1,0,1,0,1,0,1,0,1,0,0,0,1,0,0,1,0,0,1,0,0,0,1,0,1,0,0,1,0,0,1,0,1,1,1,0,0,1,0,1,0,1,1,0,1,1,1,1,0,0,1,1,1,0,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,0,0,0,1,0,1,1,1,1,0,0,0,1,0,1,0,0,0,0,1,0,1,0,1,1,0,0,1,0,0,1,0,1,0,0,1,1,1,0,0,1,0,1,1,1,1,0,1,0,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,0,1,0,1,0,0,1,0,1,1,1,1,1,1,1,0,0,0,0,1,1,1,0,0,1,0,1,0,1,0,1,0,0,1,0,0,0,0,1,0,0,0,1,1,1,0,0,0,0,1,0,1,0,0,1,1,1,1,1,0,1,0,0,1,0,1,0,0,1,1,1,0,1,0,0,1,0,0,0,1,0,0,1,0,1,1,0,1,1,0,0,0,0,1,0,0,0,0,1,0,1,0,1,0,0,0,0,0,1,1,0,1,0,0,1,1,1,0,1,0,1,0,1,0,1,1,0,0,1,0,0,0,0,1,0,1,0,0,1,0,1,1,1,1,0,0,0,0,1,0,0,0,1,1,1,0,0,1,1,1,0,0,1,1,0,1,1,0,1,0,0,1,1,0,0,0,1,1,0,1,0,1,0,0,1,1,1,1,1,1,0,1,1,0,0,1,0,1,0,0,0,1,0,0,1,0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,0,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1,0,0,0,0,1,0,1,0,0,0,1,1,0,0,1,1,0,0,0,1,1,1,1,0,1,1,0,1,1,1,1,0,0,0,1,1,0,0,1,1,0,1,1,1,0,1,1,0,0,1,1,1,0,0,0,0,0,1,0,1,0,1,0,1,0,1,1,1,1,1,0,1,0,1,1,0,1,0,0,1,0,1,0,0,1,0,0,0,0,1,0,0,0,0,1,0,1,0,0,0,1,0,0,1,1,0,1,1,1,0,1,1,1,1,0,0,0,1,0,1,1,1,1,0,0,0,1,1,0,1,1,0,1,0,1,1,0,0,1,0,1,1,0,1,0,1,0,0,1,1,1,0,0,0,0,0,1,1,1,0,1,1,1,1,1,0,1,0,1,0,0,1,1,0,1,1,0,1,1,0,1,0,0,1,1,1,1,0,1,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,1,0,1,0,0,1,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,1,1,0,1,1,0,0,1,0,1,1,1,1,1,0,1,0,0,0,1,0,0,1,0,0,0,0,1,0,0,1,0,1,1,1,1,1,1,1,0,0,0,0,1,1,1,1,0,0,1,0,0,0,0,0,0,1,0,1,1,0,0,1,0,0,1,0,0,1,1,1,1,0,0,0,1,1,1,0,0,0,1,0,0,0,1,0,0,1,1,0,0,0,1,0,0,0,0,1,1,1,0,1,0,1,1,0,1,1,0,1,0,0,0,0,0,1,1,0,0,1,0,1,0,1,0,0,0,1,1,1,0,0,0,1,0,1,1,0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,0,0,1,0,1,0,1,1,1,1,1,0,1,1,1,0,0,0,0,1,1,0,0,0,1,0,0,0,1,1,1,1,0,0,1,0,1,0,0,0,0,1,1,1,0,0,1,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,1,0,0,1,0,0,1,0,1,0,1,0,1,0,0,1,0,0,0,0,1,1,1,1,0,1,1,1,1,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,1,0,1,1,0,1,1,1,0,0,1,1,0,0,0,0,0,0,0,1,0,0,0,0,1,1,1,0,1,0,1,0,1,0,1,0,0,1,0,1,0,1,1,0,0,1,1,1,1,0,0,1,0,1,0,0,0,0,0,1,0,0,1,0,0,0,1,1,1,1,1,0,1,1,0,1,1,0,0,1,0,1,0,0,0,0,1,0,1,1,1,1,1,1,0,1,1,0,1,0,0,0,1,1,1,0,0,1,0,1,0,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,0,0,0,1,1,1,0,1,1,1,0,0,1,0,0,1,1,1,1,1,0,1,1,1,1,1,0,1,0,1,1,0,0,1,1,1,1,1,1,1,0,1,1,1,1,0,0,0,0,1,0,1,1,0,0,1,1,0,0,0,0,0,0,1,1,1,0,1,0,1,1,1,1,1,1,1,0,0,0,1,0,0,0,0,0,1,0,1,0,1,1,1,0,1,0,1,0,0,0,1,0,1,1,1,1,0,0,0,1,0,0,0,0,1,0,1,1,0,1,0,1,1,1,0,0,0,1,0,0,1,0,1,0,1,0,1,1,1,1,0,1,1,1,1,1,1,1,0,1,1,0,1,1,1,0,1,0,0,0,1,0,0,1,1,0,0,0,1,0,0,1,0,0,1,1,1,1,0,0,1,0,0,0,0,0,0,1,1,1,1,1,0,1,0,0,1,0,0,0,0,1,1,0,1,1,0,0,0,0,0,1,1,1,1,0,1,1,1,1,1,1,0,0,1,1,0,0,1,1,1,1,1,1,0,0,1,1,1,1,0,1,1,0,0,0,0,1,1,0,1,1,0,0,0,1,1,0,1,1,1,0,0,1,0,0,1,0,0,0,1,1,1,1,0,0,0,0,1,0,1,1,1,0,0,1,1,1,1,1,1,0,0,0,1,1,1,0,0,1,1,1,0,0,1,1,0,1,0,0,0,0,1,0,1,1,0,1,0,0,0,1,1,0,1,1,0,0,1,0,0,1,1,0,0,0,1,1,0,1,1,1,1,1,1,0,1,0,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,0,1,0,0,0,1,1,0,1,0,0,1,0,1,0,0,0,0,0,0,0,1,1,0,1,0,1,0,0,0,1,0,0,0,1,0,1,1,0,0,0,1,1,0,1,1,0,1,0,0,1,1,1,1,0,1,1,0,0,1,1,1,0,0,0,1,0,0,1,1,1,1,1,1,0,1,1,1,0,0,1,1,0,1,0,0,1,1,0,1,0,1,0,1,0,1,1,1,0,1,1,0,0,0,0,0,1,0,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,0,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,1,1,0,0,0,0,0,1,0,1,1,0,0,1,1,1,1,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,1,0,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,1,1,0,0,0,1,0,0,0,1,0,1,1,0,1,0,1,1,0,1,0,0,0,0,1,0,0,0,1,0,0,1,1,0,1,0,0,1,1,1,0,0,1,1,0,1,1,1,1,1,0,1,0,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,0,0,1,0,1,0,0,1,0,1,1,0,0,1,0,0,0,0,0,1,1,1,0,0,1,1,0,1,0,1,1,0,0,0,0,0,1,0,0,0,0,1,1,0,0,1,0,1,1,1,0,1,0,1,1,0,1,0,0,1,0,0,0,1,0,0,1,1,1,1,1,0,1,0,1,1,1,0,0,0,1,0,0,0,1,1,0,0,1,0,1,0,0,0,1,1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,1,1,0,0,0,0,1,0,1,1,1,0,1,0,0,1,0,1,1,1,0,1,1,0,1,0,1,0,0,0,0,1,0,1,1,0,1,1,1,1,0,0,0,0,1,1,1,1,0,1,1,0,0,0,0,1,1,0,0,1,1,0,0,0,1,0,1,1,0,1,1,1,0,1,0,1,1,1,0,1,0,0,1,0,1,1,1,0,0,1,1,0,1,1,0,1,0,1,0,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,1,0,0,0,1,0,1,0,0,0,0,0,0,1,1,1,1,0,0,1,0,1,0,1,0,0,0,1,1,0,1,1,0,0,0,0,1,0,0,0,0,0,0,1,1,0,1,0,1,0,1,1,1,0,0,0,0,1,1,0,1,0,0,0,0,0,1,1,1,1,0,0,1,1,1,0,0,0,1,0,1,1,0,0,0,0,0,1,1,1,0,0,1,1,0,1,1,1,0,1,0,0,0,0,0,1,1,0,0,1,1,0,0,0,0,1,1,1,1,0,1,0,0,1,0,0,1,1,1,1,1,0,0,1,0,0,1,0,0,1,1,1,1,1,1,0,0,0,0,0,1,0,0,0,0,1,1,0,1,0,0,0,0,0,1,0,1,1,1,0,0,1,1,1,1,1,0,1,0,0,1,1,0,1,1,0,1,1,0,0,1,1,1,0,1,0,0,1,1,1,1,1,1,1,0,1,1,1,0,0,0,1,0,1,0,1,1,0,1,0,0,1,1,0,0,0,1,0,0,1,0,0,1,0,0,0,0,1,0,0,0,1,1,0,0,1,0,1,0,0,1,1,0,1,0,1,1,1,0,1,1,0,1,1,0,0,1,1,1,1,1,1,0,1,1,1,1,0,1,1,1,0,0,1,1,0,1,1,1,0,0,1,0,0,1,0,1,1,1,0,1,1,1,1,1,0,1,0,0,0,0,0,0,1,0,0,0,1,0,1,1,0,1,1,0,1,0,0,1,0,1,1,0,0,0,1,1,1,1,0,1,0,0,0,1,1,1,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,1,1,0,0,1,0,0,0,1,0,1,1,1,1,0,0,1,1,1,1,1,0,1,1,0,1,0,1,1,0,1,0,1,0,1,1,0,0,0,0,1,0,1,0,1,1,1,0,1,0,0,0,0,0,0,0,0,1,1,0,1,0,1,0,0,1,0,0,0,0,0,1,1,1,0,1,1,1,0,1,0,1,1,1,0,0,];
var gg_b = "1745197201/";

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
