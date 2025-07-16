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
case 3243:
case 3973:
case 3798:
case 1989:
case 2840:
case 2674:
case 1196:
case 3266:
case 3446:
case 1386:
case 1642:
case 3112:
case 3884:
case 708:
case 178:
case 2953:
case 716:
case 3941:
case 3814:
case 3271:
case 2475:
case 1425:
case 2987:
case 2917:
case 751:
case 3865:
case 2995:
case 47:
case 3613:
case 3817:
case 3592:
case 1679:
case 3887:
case 2841:
case 534:
case 3853:
case 731:
case 719:
case 2984:
case 1212:
case 1086:
case 3607:
case 258:
case 2200:
case 263:
case 3296:
case 874:
case 3493:
case 3940:
case 208:
case 681:
case 1143:
case 3768:
case 201:
case 1823:
case 1636:
case 688:
case 1627:
case 2346:
case 932:
case 2593:
case 1538:
case 3935:
case 2355:
case 1688:
case 2532:
case 4060:
case 1880:
case 1858:
case 1038:
case 2279:
case 2032:
case 432:
case 2852:
case 1229:
case 2949:
case 1808:
case 808:
case 2104:
case 816:
case 2236:
case 977:
case 1746:
case 801:
case 2802:
case 2433:
case 477:
case 1498:
case 2492:
case 3828:
case 123:
case 3148:
case 274:
case 851:
case 1793:
case 2928:
case 3575:
case 1944:
case 2224:
case 1274:
case 2005:
case 2972:
case 1159:
case 4061:
case 1922:
case 3177:
case 3902:
case 819:
case 2505:
case 3952:
case 2183:
case 3129:
case 952:
case 2546:
case 2113:
case 4090:
case 1338:
case 774:
case 452:
case 4076:
case 2046:
case 3621:
case 2563:
case 2835:
case 2157:
case 455:
case 2908:
case 2643:
case 983:
case 2847:
case 1902:
case 2025:
case 1177:
case 826:
case 1075:
case 483:
case 3248:
case 3274:
case 113:
case 3944:
case 3811:
case 3978:
case 2666:
case 354:
case 400:
case 1621:
case 3109:
case 950:
case 2958:
case 94:
case 304:
case 2254:
case 450:
case 1849:
case 2910:
case 694:
case 2283:
case 3229:
case 334:
case 3038:
case 148:
case 3858:
case 2213:
case 3538:
case 430:
case 2486:
case 3618:
case 1148:
case 1174:
case 3763:
case 1828:
case 2844:
case 2911:
case 435:
case 1872:
case 1259:
case 3755:
case 2325:
case 1375:
case 1620:
case 3808:
case 4094:
case 3212:
case 2609:
case 3171:
case 3282:
case 726:
case 2368:
case 1033:
case 1657:
case 548:
case 4015:
case 1887:
case 3679:
case 1592:
case 4067:
case 4085:
case 1817:
case 1865:
case 3627:
case 229:
case 3823:
case 2151:
case 1432:
case 3516:
case 2762:
case 499:
case 2220:
case 1270:
case 3586:
case 3016:
case 1296:
case 1607:
case 2659:
case 3086:
case 1455:
case 1446:
case 566:
case 3316:
case 2100:
case 3196:
case 3919:
case 1463:
case 3170:
case 1604:
case 496:
case 2792:
case 1973:
case 513:
case 1654:
case 2568:
case 1562:
case 1271:
case 729:
case 2398:
case 371:
case 2118:
case 1182:
case 1814:
case 1941:
case 1333:
case 1062:
case 2188:
case 2150:
case 378:
case 1884:
case 1392:
case 41:
case 2366:
case 3409:
case 18:
case 2343:
case 3351:
case 2931:
case 2596:
case 3500:
case 4040:
case 2721:
case 1771:
case 109:
case 1020:
case 2436:
case 1477:
case 1985:
case 882:
case 1766:
case 2292:
case 3088:
case 143:
case 3830:
case 1743:
case 1994:
case 1321:
case 587:
case 3018:
case 3459:
case 1298:
case 2442:
case 1964:
case 3318:
case 1021:
case 3198:
case 2071:
case 1770:
case 4041:
case 2930:
case 3388:
case 2424:
case 1474:
case 1448:
case 1796:
case 364:
case 67:
case 2571:
case 1521:
case 590:
case 3869:
case 106:
case 3831:
case 595:
case 2625:
case 2566:
case 139:
case 1675:
case 465:
case 988:
case 3300:
case 2066:
case 4052:
case 1834:
case 392:
case 1313:
case 1054:
case 373:
case 2138:
case 2860:
case 632:
case 2707:
case 1383:
case 1759:
case 3990:
case 1554:
case 3246:
case 2309:
case 3976:
case 3255:
case 1357:
case 2668:
case 1662:
case 518:
case 3205:
case 1307:
case 3939:
case 2359:
case 1504:
case 2713:
case 506:
case 3961:
case 3542:
case 4002:
case 1709:
case 2275:
case 2945:
case 3524:
case 556:
case 3036:
case 559:
case 3856:
case 3125:
case 1507:
case 3527:
case 509:
case 3616:
case 3324:
case 2861:
case 1007:
case 1482:
case 2839:
case 2400:
case 1583:
case 652:
case 4035:
case 2704:
case 1692:
case 917:
case 2698:
case 1513:
case 2009:
case 876:
case 1826:
case 1155:
case 2876:
case 602:
case 543:
case 3960:
case 417:
case 2890:
case 3806:
case 3293:
case 187:
case 1354:
case 2509:
case 683:
case 746:
case 528:
case 2348:
case 1527:
case 3412:
case 261:
case 2077:
case 1856:
case 1036:
case 1748:
case 3163:
case 1470:
case 1293:
case 387:
case 249:
case 1960:
case 2029:
case 1079:
case 2742:
case 3826:
case 600:
case 3513:
case 2529:
case 280:
case 1466:
case 390:
case 3662:
case 3357:
case 2937:
case 2926:
case 1255:
case 1976:
case 564:
case 630:
case 761:
case 927:
case 1246:
case 2727:
case 1990:
case 3132:
case 173:
case 703:
case 1263:
case 785:
case 3313:
case 297:
case 3193:
case 3834:
case 3225:
case 2377:
case 3004:
case 1542:
case 780:
case 2074:
case 4022:
case 395:
case 635:
case 3504:
case 2421:
case 4078:
case 3307:
case 1729:
case 2779:
case 1205:
case 1042:
case 462:
case 846:
case 2404:
case 3997:
case 897:
case 2867:
case 2700:
case 2663:
case 3474:
case 1350:
case 1388:
case 1501:
case 2312:
case 2192:
case 1198:
case 2646:
case 3964:
case 962:
case 592:
case 2655:
case 2382:
case 2133:
case 833:
case 42:
case 1300:
case 339:
case 92:
case 2788:
case 318:
case 1712:
case 3320:
case 2454:
case 1869:
case 1899:
case 868:
case 696:
case 3771:
case 309:
case 861:
case 1500:
case 3429:
case 647:
case 2701:
case 38:
case 2457:
case 2286:
case 885:
case 1000:
case 2864:
case 3321:
case 1459:
case 2751:
case 3994:
case 1168:
case 2162:
case 343:
case 2012:
case 3766:
case 3915:
case 2897:
case 2632:
case 3985:
case 849:
case 1588:
case 1301:
case 79:
case 3477:
case 2512:
case 330:
case 690:
case 2534:
case 2337:
case 3957:
case 3745:
case 2929:
case 3983:
case 1431:
case 1979:
case 4038:
case 2034:
case 2695:
case 132:
case 1158:
case 2761:
case 2977:
case 757:
case 1591:
case 1936:
case 1726:
case 2247:
case 2485:
case 1091:
case 177:
case 707:
case 2494:
case 3907:
case 423:
case 1339:
case 83:
case 2603:
case 1942:
case 80:
case 1039:
case 2464:
case 1272:
case 737:
case 1391:
case 840:
case 1734:
case 2974:
case 383:
case 1430:
case 3208:
case 1619:
case 2497:
case 1539:
case 85:
case 3904:
case 3673:
case 3877:
case 1689:
case 355:
case 2334:
case 2791:
case 3954:
case 2617:
case 772:
case 3280:
case 3258:
case 2665:
case 1360:
case 2883:
case 404:
case 3149:
case 1090:
case 1809:
case 152:
case 257:
case 2653:
case 2037:
case 3641:
case 34:
case 1076:
case 300:
case 1590:
case 454:
case 636:
case 2820:
case 609:
case 25:
case 2140:
case 396:
case 3223:
case 1406:
case 1622:
case 3426:
case 1203:
case 20:
case 2628:
case 1678:
case 1644:
case 3731:
case 3394:
case 857:
case 1253:
case 3114:
case 643:
case 3921:
case 502:
case 3769:
case 3367:
case 1456:
case 978:
case 1901:
case 1287:
case 3085:
case 17:
case 740:
case 3015:
case 3397:
case 1295:
case 2912:
case 3585:
case 1950:
case 2982:
case 3635:
case 3153:
case 1871:
case 1918:
case 532:
case 4086:
case 893:
case 1866:
case 4016:
case 656:
case 23:
case 399:
case 1123:
case 2173:
case 618:
case 3920:
case 606:
case 745:
case 611:
case 3871:
case 1364:
case 4092:
case 3214:
case 1153:
case 1094:
case 1585:
case 3988:
case 3295:
case 1015:
case 875:
case 1397:
case 1594:
case 1165:
case 2801:
case 664:
case 2119:
case 1920:
case 870:
case 2764:
case 199:
case 3647:
case 2851:
case 3843:
case 2031:
case 535:
case 2681:
case 2611:
case 2531:
case 3900:
case 3644:
case 3678:
case 2715:
case 3896:
case 2476:
case 1426:
case 2599:
case 2785:
case 6:
case 2490:
case 1223:
case 583:
case 2943:
case 2608:
case 2099:
case 3287:
case 1385:
case 1652:
case 2530:
case 3901:
case 2610:
case 1195:
case 1564:
case 1097:
case 1315:
case 1367:
case 2658:
case 2888:
case 2850:
case 1812:
case 1597:
case 4062:
case 1882:
case 1114:
case 2241:
case 1394:
case 1731:
case 2045:
case 913:
case 155:
case 3561:
case 2623:
case 2836:
case 1673:
case 2827:
case 3539:
case 466:
case 842:
case 4075:
case 1208:
case 183:
case 3430:
case 3061:
case 2545:
case 3391:
case 2556:
case 3272:
case 3942:
case 3181:
case 3590:
case 770:
case 1641:
case 3076:
case 3809:
case 352:
case 3090:
case 1149:
case 2252:
case 1829:
case 2879:
case 3499:
case 3576:
case 1258:
case 302:
case 1954:
case 3158:
case 3390:
case 673:
case 3110:
case 692:
case 1745:
case 2909:
case 941:
case 3560:
case 3339:
case 1172:
case 1706:
case 2122:
case 1281:
case 3361:
case 1874:
case 1848:
case 2824:
case 1128:
case 3091:
case 969:
case 469:
case 270:
case 2345:
case 3726:
case 3737:
case 3927:
case 2356:
case 3591:
case 1832:
case 2160:
case 1052:
case 1781:
case 990:
case 2489:
case 2010:
case 3423:
case 1206:
case 327:
case 1134:
case 220:
case 2630:
case 2580:
case 2311:
case 784:
case 588:
case 2508:
case 1453:
case 3022:
case 495:
case 3749:
case 3578:
case 4004:
case 3347:
case 565:
case 995:
case 2735:
case 1002:
case 3522:
case 51:
case 1495:
case 2511:
case 3156:
case 3047:
case 1805:
case 2081:
case 2752:
case 1414:
case 1710:
case 2139:
case 4007:
case 3378:
case 2011:
case 1780:
case 1758:
case 3547:
case 1855:
case 1126:
case 1137:
case 1035:
case 2176:
case 4057:
case 654:
case 1615:
case 212:
case 725:
case 1667:
case 1535:
case 284:
case 1863:
case 4013:
case 487:
case 3772:
case 1540:
case 3787:
case 459:
case 11:
case 936:
case 3765:
case 48:
case 909:
case 1269:
case 436:
case 409:
case 2741:
case 4020:
case 1231:
case 3753:
case 3389:
case 959:
case 2215:
case 2285:
case 3703:
case 943:
case 3660:
case 2294:
case 3481:
case 443:
case 517:
case 2773:
case 678:
case 1992:
case 3411:
case 2478:
case 2444:
case 820:
case 1428:
case 4021:
case 1230:
case 160:
case 3676:
case 2422:
case 2264:
case 1472:
case 3408:
case 3131:
case 3714:
case 3089:
case 2656:
case 3410:
case 2023:
case 1073:
case 418:
case 188:
case 3458:
case 1340:
case 3661:
case 2816:
case 165:
case 2523:
case 3589:
case 939:
case 3795:
case 3639:
case 456:
case 2886:
case 918:
case 2395:
case 2017:
case 267:
case 2115:
case 162:
case 4001:
case 3541:
case 2087:
case 464:
case 3472:
case 791:
case 2626:
case 2565:
case 594:
case 3041:
case 2194:
case 798:
case 3230:
case 360:
case 3962:
case 3428:
case 2892:
case 12:
case 2003:
case 1639:
case 1795:
case 1589:
case 3573:
case 1661:
case 3299:
case 1480:
case 1458:
case 2503:
case 1169:
case 1089:
case 381:
case 291:
case 9:
case 3269:
case 767:
case 1765:
case 31:
case 2435:
case 928:
case 3540:
case 4:
case 2862:
case 4018:
case 1130:
case 810:
case 2164:
case 4050:
case 2595:
case 2353:
case 1481:
case 2014:
case 1868:
case 1703:
case 1660:
case 2584:
case 2197:
case 2365:
case 1547:
case 3780:
case 215:
case 3758:
case 2328:
case 722:
case 1344:
case 2372:
case 3414:
case 1145:
case 891:
case 1047:
case 1156:
case 1825:
case 2875:
case 4036:
case 4027:
case 1106:
case 2722:
case 76:
case 2260:
case 1938:
case 3667:
case 2744:
case 2549:
case 3694:
case 3035:
case 3126:
case 3855:
case 3846:
case 3403:
case 973:
case 2955:
case 2276:
case 3552:
case 867:
case 2963:
case 715:
case 3697:
case 3893:
case 3134:
case 127:
case 2290:
case 648:
case 3206:
case 2349:
case 1423:
case 492:
case 1522:
case 3417:
case 52:
case 3465:
case 710:
case 3487:
case 3245:
case 3002:
case 1347:
case 3975:
case 1749:
case 2239:
case 1022:
case 3453:
case 26:
case 2261:
case 3502:
case 2028:
case 1044:
case 3786:
case 3475:
case 3201:
case 3965:
case 1568:
case 3917:
case 2392:
case 2182:
case 2405:
case 1068:
case 4030:
case 1118:
case 1221:
case 942:
case 1733:
case 442:
case 319:
case 866:
case 2973:
case 331:
case 698:
case 1792:
case 144:
case 2463:
case 338:
case 4031:
case 2493:
case 1438:
case 1762:
case 1151:
case 4069:
case 2768:
case 869:
case 316:
case 3873:
case 301:
case 1889:
case 1659:
case 358:
case 2607:
case 2296:
case 3200:
case 363:
case 2033:
case 3914:
case 3841:
case 1368:
case 1098:
case 2362:
case 1598:
case 848:
case 2613:
case 2592:
case 2887:
case 3629:
case 841:
case 2683:
case 1207:
case 3433:
case 1142:
case 970:
case 2259:
case 529:
case 2828:
case 1911:
case 1844:
case 1696:
case 2148:
case 2174:
case 1670:
case 3104:
case 470:
case 269:
case 2375:
case 1213:
case 3363:
case 3852:
case 1283:
case 3032:
case 622:
case 475:
case 3949:
case 1486:
case 3593:
case 2725:
case 766:
case 1416:
case 610:
case 769:
case 3046:
case 3835:
case 3332:
case 2952:
case 1910:
case 1254:
case 3393:
case 1980:
case 1958:
case 2075:
case 1136:
case 266:
case 1204:
case 2575:
case 1525:
case 3928:
case 1666:
case 3738:
case 3462:
case 213:
case 748:
case 3107:
case 3242:
case 615:
case 3972:
case 741:
case 1063:
case 2338:
case 723:
case 1393:
case 3254:
case 957:
case 684:
case 3910:
case 407:
case 1183:
case 871:
case 1835:
case 878:
case 4037:
case 4026:
case 2159:
case 1972:
case 2468:
case 538:
case 1107:
case 1224:
case 531:
case 3525:
case 3666:
case 2978:
case 2811:
case 1505:
case 3847:
case 993:
case 2755:
case 563:
case 551:
case 3325:
case 2277:
case 3670:
case 558:
case 704:
case 174:
case 223:
case 3911:
case 501:
case 3844:
case 3822:
case 493:
case 3981:
case 508:
case 3207:
case 2650:
case 1532:
case 2688:
case 1682:
case 937:
case 1346:
case 1593:
case 3486:
case 620:
case 1279:
case 1032:
case 4034:
case 437:
case 2880:
case 3213:
case 1154:
case 43:
case 151:
case 823:
case 986:
case 1200:
case 163:
case 2016:
case 158:
case 2086:
case 3659:
case 3889:
case 101:
case 329:
case 2627:
case 2636:
case 116:
case 574:
case 778:
case 3762:
case 93:
case 2586:
case 1629:
case 3101:
case 834:
case 1250:
case 1121:
case 1218:
case 3098:
case 2171:
case 1914:
case 2282:
case 3398:
case 278:
case 3150:
case 3188:
case 1917:
case 1965:
case 3568:
case 945:
case 1987:
case 1475:
case 489:
case 344:
case 3792:
case 2170:
case 131:
case 45:
case 119:
case 2989:
case 1251:
case 1903:
case 2196:
case 1648:
case 2624:
case 549:
case 1012:
case 3292:
case 2830:
case 1407:
case 3233:
case 3371:
case 2459:
case 3427:
case 3436:
case 2588:
case 1632:
case 2550:
case 580:
case 4095:
case 2518:
case 503:
case 3596:
case 2351:
case 3343:
case 585:
case 1413:
case 3969:
case 3070:
case 491:
case 228:
case 553:
case 764:
case 3366:
case 991:
case 561:
case 3570:
case 2409:
case 1457:
case 568:
case 1605:
case 19:
case 2300:
case 4003:
case 1454:
case 2869:
case 1750:
case 1788:
case 533:
case 2051:
case 3043:
case 3625:
case 892:
case 873:
case 3571:
case 467:
case 1885:
case 524:
case 1655:
case 1382:
case 1133:
case 1894:
case 3071:
case 2198:
case 967:
case 2318:
case 1192:
case 4053:
case 3262:
case 3424:
case 2388:
case 3930:
case 546:
case 2542:
case 96:
case 59:
case 670:
case 1377:
case 3956:
case 2336:
case 3275:
case 2327:
case 3757:
case 1574:
case 1548:
case 2729:
case 3783:
case 2471:
case 1421:
case 3359:
case 3713:
case 46:
case 1074:
case 2024:
case 2777:
case 3309:
case 1736:
case 1926:
case 3668:
case 2976:
case 197:
case 292:
case 3138:
case 3451:
case 3707:
case 2379:
case 422:
case 675:
case 2990:
case 910:
case 2232:
case 149:
case 3890:
case 1420:
case 3509:
case 1934:
case 382:
case 314:
case 1238:
case 2748:
case 1724:
case 1529:
case 410:
case 3698:
case 3876:
case 2991:
case 3754:
case 1577:
case 792:
case 1348:
case 3861:
case 773:
case 103:
case 3450:
case 3488:
case 2324:
case 2616:
case 185:
case 2342:
case 3839:
case 415:
case 3059:
case 2686:
case 161:
case 2125:
case 1077:
case 2027:
case 1175:
case 915:
case 168:
case 828:
case 2155:
case 1876:
case 1698:
case 1009:
case 2513:
case 912:
case 843:
case 380:
case 2583:
case 3529:
case 3724:
case 2557:
case 3238:
case 795:
case 2013:
case 1509:
case 3934:
case 182:
case 349:
case 607:
case 3029:
case 2083:
case 2507:
case 790:
case 353:
case 809:
case 3175:
case 836:
case 361:
case 1418:
case 2482:
case 2007:
case 1450:
case 385:
case 1488:
case 3374:
case 303:
case 2412:
case 295:
case 3074:
case 787:
case 1891:
case 2504:
case 3421:
case 672:
case 3779:
case 2307:
case 3548:
case 925:
case 1945:
case 1757:
case 1275:
case 2709:
case 3377:
case 1906:
case 1860:
case 920:
case 2132:
case 1451:
case 637:
case 2834:
case 2193:
case 579:
case 2313:
case 397:
case 2662:
case 3926:
case 3937:
case 2554:
case 3736:
case 420:
case 1566:
case 211:
case 2675:
case 1043:
case 206:
case 1999:
case 1370:
case 2320:
case 63:
case 1543:
case 39:
case 3605:
case 1424:
case 1930:
case 3192:
case 2770:
case 3312:
case 890:
case 2021:
case 2964:
case 179:
case 3646:
case 3133:
case 736:
case 3382:
case 3885:
case 78:
case 759:
case 3815:
case 2521:
case 3663:
case 2796:
case 3700:
case 3867:
case 887:
case 3632:
case 3512:
case 2321:
case 711:
case 3864:
case 1371:
case 582:
case 2743:
case 176:
case 3082:
case 3162:
case 1292:
case 3012:
case 640:
case 3286:
case 259:
case 60:
case 1366:
case 1096:
case 1070:
case 1969:
case 1721:
case 65:
case 209:
case 2771:
case 236:
case 1343:
case 1479:
case 2429:
case 1931:
case 1596:
case 2128:
case 1144:
case 1178:
case 2874:
case 2848:
case 393:
case 1842:
case 2172:
case 3790:
case 1122:
case 1356:
case 3776:
case 3102:
case 1345:
case 74:
case 3247:
case 899:
case 3467:
case 700:
case 170:
case 3804:
case 3854:
case 3695:
case 3034:
case 2913:
case 337:
case 3761:
case 783:
case 230:
case 1909:
case 755:
case 1235:
case 3337:
case 357:
case 24:
case 3037:
case 3026:
case 1506:
case 3617:
case 307:
case 2954:
case 3791:
case 3526:
case 3537:
case 2258:
case 649:
case 2829:
case 3883:
case 1252:
case 3687:
case 1006:
case 2210:
case 847:
case 2208:
case 653:
case 2904:
case 896:
case 1623:
case 2877:
case 668:
case 1836:
case 1045:
case 255:
case 3807:
case 3603:
case 685:
case 542:
case 603:
case 3222:
case 3278:
case 283:
case 3948:
case 3974:
case 1658:
case 2367:
case 2315:
case 1610:
case 2652:
case 2064:
case 1439:
case 84:
case 1971:
case 1818:
case 799:
case 4068:
case 2184:
case 1030:
case 345:
case 3672:
case 944:
case 30:
case 1599:
case 1785:
case 926:
case 1966:
case 1715:
case 1943:
case 2602:
case 1794:
case 1331:
case 855:
case 1490:
case 3289:
case 1851:
case 1460:
case 1189:
case 299:
case 1970:
case 1069:
case 1399:
case 2730:
case 1119:
case 429:
case 1531:
case 69:
case 929:
case 1611:
case 33:
case 2103:
case 1681:
case 747:
case 3912:
case 1491:
case 830:
case 575:
case 2567:
case 2635:
case 2094:
case 2515:
case 2364:
case 3649:
case 2187:
case 2085:
case 2594:
case 2067:
case 2397:
case 2015:
case 451:
case 463:
case 3569:
case 3611:
case 901:
case 458:
case 916:
case 2900:
case 3531:
case 3119:
case 3399:
case 958:
case 3240:
case 401:
case 3069:
case 416:
case 3764:
case 951:
case 1173:
case 963:
case 3031:
case 186:
case 2843:
case 3851:
case 2295:
case 27:
case 2918:
case 679:
case 2988:
case 2950:
case 3330:
case 1912:
case 2284:
case 3030:
case 676:
case 3818:
case 507:
case 3971:
case 3439:
case 852:
case 3241:
case 3530:
case 2445:
case 2287:
case 2217:
case 3680:
case 3490:
case 2951:
case 3331:
case 15:
case 419:
case 1219:
case 431:
case 3099:
case 2870:
case 1820:
case 342:
case 3966:
case 3715:
case 931:
case 2896:
case 140:
case 3785:
case 938:
case 3476:
case 10:
case 77:
case 2622:
case 614:
case 2090:
case 682:
case 545:
case 1687:
case 2360:
case 3252:
case 1883:
case 1526:
case 777:
case 1334:
case 2590:
case 4055:
case 1037:
case 1653:
case 1135:
case 252:
case 2809:
case 1948:
case 2430:
case 3556:
case 2391:
case 1278:
case 2111:
case 2228:
case 2039:
case 55:
case 1603:
case 2181:
case 2561:
case 3202:
case 3056:
case 2689:
case 50:
case 1415:
case 1804:
case 2737:
case 1247:
case 1102:
case 1776:
case 974:
case 3345:
case 1977:
case 2591:
case 2936:
case 3356:
case 2339:
case 3824:
case 193:
case 2091:
case 3144:
case 702:
case 1326:
case 1614:
case 2376:
case 3235:
case 2158:
case 2180:
case 2469:
case 1695:
case 1034:
case 137:
case 4032:
case 2110:
case 1739:
case 2390:
case 3306:
case 2431:
case 1929:
case 1152:
case 3925:
case 1528:
case 3735:
case 3008:
case 2522:
case 1572:
case 1028:
case 3311:
case 3191:
case 2044:
case 3508:
case 3381:
case 1441:
case 1239:
case 2749:
case 433:
case 4074:
case 320:
case 946:
case 997:
case 1946:
case 1276:
case 3558:
case 2237:
case 3160:
case 497:
case 1349:
case 424:
case 2423:
case 3489:
case 227:
case 3838:
case 3419:
case 862:
case 294:
case 3080:
case 4029:
case 2234:
case 1744:
case 1440:
case 3380:
case 3358:
case 1932:
case 1260:
case 980:
case 2772:
case 1722:
case 3310:
case 3702:
case 3176:
case 949:
case 968:
case 598:
case 3139:
case 1372:
case 485:
case 2322:
case 961:
case 591:
case 3011:
case 1328:
case 2344:
case 2378:
case 3161:
case 2547:
case 115:
case 953:
case 794:
case 461:
case 453:
case 3669:
case 1875:
case 1014:
case 4012:
case 1164:
case 3773:
case 3998:
case 1789:
case 1084:
case 1719:
case 1365:
case 1514:
case 1095:
case 1634:
case 3215:
case 1197:
case 1387:
case 3285:
case 510:
case 2319:
case 2753:
case 2389:
case 644:
case 3323:
case 1303:
case 1435:
case 2787:
case 2916:
case 2717:
case 2691:
case 762:
case 2795:
case 2589:
case 3523:
case 2639:
case 22:
case 1003:
case 1452:
case 2131:
case 3645:
case 2410:
case 2089:
case 3656:
case 2784:
case 2169:
case 1503:
case 99:
case 56:
case 2690:
case 1402:
case 1087:
case 1167:
case 1017:
case 167:
case 1395:
case 1892:
case 3478:
case 1053:
case 1626:
case 3968:
case 2676:
case 1833:
case 1194:
case 3264:
case 522:
case 1517:
case 3422:
case 288:
case 2340:
case 2299:
case 281:
case 1656:
case 2073:
case 1645:
case 3003:
case 1886:
case 2573:
case 658:
case 1523:
case 1816:
case 265:
case 1422:
case 2472:
case 3833:
case 2041:
case 3565:
case 1968:
case 3314:
case 3626:
case 3587:
case 479:
case 2962:
case 4071:
case 260:
case 2230:
case 1740:
case 1444:
case 2428:
case 3115:
case 367:
case 3017:
case 3395:
case 979:
case 3167:
case 2541:
case 3185:
case 3402:
case 3197:
case 3634:
case 3095:
case 3317:
case 976:
case 3514:
case 1267:
case 765:
case 788:
case 3862:
case 2992:
case 476:
case 3789:
case 781:
case 3164:
case 512:
case 2341:
case 3014:
case 3435:
case 21:
case 1323:
case 2373:
case 391:
case 2449:
case 1741:
case 619:
case 760:
case 398:
case 2269:
case 310:
case 2708:
case 4009:
case 2855:
case 2126:
case 1702:
case 2035:
case 2694:
case 914:
case 982:
case 1310:
case 3049:
case 2352:
case 3932:
case 2667:
case 2535:
case 2863:
case 3440:
case 3744:
case 3778:
case 3993:
case 112:
case 1669:
case 2495:
case 1581:
case 2780:
case 4059:
case 1161:
case 2710:
case 81:
case 2805:
case 2414:
case 1081:
case 1752:
case 3239:
case 3441:
case 36:
case 3905:
case 2502:
case 125:
case 717:
case 3028:
case 1311:
case 3572:
case 2465:
case 881:
case 2002:
case 2245:
case 1735:
case 1925:
case 3528:
case 2975:
case 1419:
case 1058:
case 1080:
case 1838:
case 2893:
case 322:
case 1010:
case 1489:
case 3349:
case 3290:
case 2832:
case 2052:
case 3747:
case 2335:
case 3276:
case 3955:
case 2403:
case 2664:
case 3946:
case 1630:
case 120:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1752652802/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,1,1,0,1,0,1,1,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,0,0,1,0,1,0,0,1,0,0,0,1,0,0,0,0,1,0,0,0,1,1,0,0,1,1,0,0,1,1,0,1,0,1,0,1,0,1,1,1,1,0,1,0,0,0,0,0,0,1,0,0,0,1,1,1,1,1,1,0,0,0,1,0,1,1,0,1,0,1,0,1,1,0,1,1,0,1,1,0,0,1,0,0,1,1,0,0,1,1,0,1,0,1,0,1,1,1,0,0,1,1,1,1,0,1,0,0,1,1,0,0,1,1,1,0,0,1,0,0,1,1,0,1,1,0,1,0,0,0,0,1,0,1,0,0,1,0,1,1,0,0,1,0,0,0,0,1,1,0,0,1,0,0,0,0,1,1,1,1,0,1,1,1,0,1,0,1,0,1,1,1,1,0,1,0,0,1,0,0,0,1,0,1,1,1,1,0,1,1,0,1,1,1,0,0,0,0,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,0,0,0,0,0,1,0,1,0,0,0,1,0,0,1,1,1,0,1,1,1,0,1,0,0,1,0,0,1,1,1,0,1,1,0,0,1,0,0,1,0,1,0,0,0,0,0,0,1,1,0,1,0,0,1,1,1,0,1,0,1,0,0,0,1,0,1,1,1,1,0,1,0,0,0,1,1,0,1,1,0,0,0,1,1,0,0,0,0,1,1,1,0,1,1,0,0,0,0,1,0,0,1,0,0,1,0,0,1,1,0,1,1,1,0,1,0,1,1,1,1,0,1,0,0,0,0,1,0,1,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,1,1,0,1,1,0,1,0,0,1,1,1,1,0,0,0,0,0,0,1,0,0,0,1,1,1,1,0,0,0,0,0,1,0,0,0,1,1,1,1,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,1,1,1,1,0,0,0,1,0,1,1,1,0,1,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,1,0,0,0,1,1,0,0,0,0,0,1,0,0,1,1,1,0,0,1,1,1,0,1,0,1,1,1,0,0,1,0,0,0,0,0,1,1,0,1,1,1,0,0,1,0,0,1,0,0,1,0,1,0,1,1,0,1,0,0,1,0,1,0,0,0,0,1,0,1,1,1,1,1,0,0,1,1,1,0,0,1,0,0,1,0,1,0,0,1,0,0,0,1,0,0,1,1,0,1,0,1,0,0,1,1,0,0,1,0,0,0,1,1,0,0,1,1,0,0,0,1,0,1,1,1,1,1,1,1,0,1,0,1,1,0,0,0,1,1,0,1,1,0,0,1,1,0,0,0,1,1,0,0,0,1,0,1,0,1,1,1,1,1,0,1,1,1,0,1,0,1,0,0,1,0,0,1,0,0,1,0,0,0,0,0,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,1,1,0,0,1,0,0,1,1,1,0,0,0,1,0,1,1,0,0,1,0,0,1,1,0,1,0,1,1,1,1,0,0,1,1,0,0,1,1,1,0,0,0,0,1,1,0,1,1,1,0,1,0,1,0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,0,1,1,0,0,1,0,0,1,0,0,0,1,0,0,1,0,0,0,1,0,0,1,1,0,0,1,0,1,1,1,1,1,1,0,0,0,1,1,1,1,1,0,1,1,0,0,1,1,0,1,1,0,1,0,1,0,1,1,0,0,1,0,1,1,1,0,0,0,0,1,1,0,0,0,0,1,0,0,1,1,0,1,0,1,1,1,0,0,1,1,1,0,0,0,0,0,0,1,0,0,0,0,1,0,1,1,0,0,1,1,0,1,0,1,1,0,0,0,0,1,1,0,0,1,0,1,0,1,1,1,1,1,1,1,0,0,1,0,0,0,0,0,0,0,1,0,1,1,1,1,0,0,0,0,0,1,0,0,1,1,1,0,0,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,1,0,0,0,1,0,0,0,1,1,1,0,0,0,0,1,1,0,0,1,0,0,0,0,0,1,0,0,1,1,0,1,0,1,0,0,1,0,1,0,1,0,1,1,0,1,0,0,1,1,0,0,1,0,0,1,0,1,0,0,1,0,1,1,0,0,0,1,1,1,1,1,0,1,0,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,1,1,1,1,0,0,0,1,1,1,0,1,1,1,0,0,1,1,1,1,0,0,0,1,1,0,0,0,0,0,1,0,0,0,1,1,0,1,0,0,1,0,0,0,1,1,0,0,0,0,0,1,1,1,0,1,1,1,0,0,1,1,1,1,1,1,0,1,1,1,0,0,1,0,0,0,1,1,0,1,0,1,0,1,1,0,0,0,0,0,1,1,1,1,0,0,0,0,1,1,0,0,1,0,0,0,0,0,0,1,0,0,1,0,1,1,0,0,1,0,0,0,1,1,0,0,0,0,1,0,0,1,1,1,0,0,1,1,1,1,1,0,1,1,0,1,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,1,1,1,0,0,1,1,1,1,0,0,1,0,1,0,0,1,1,1,1,0,0,0,1,1,1,0,1,1,0,0,1,1,1,1,1,1,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,1,1,0,1,1,1,0,1,0,0,0,0,1,0,0,0,1,0,0,1,0,1,0,1,1,1,0,1,1,1,1,0,0,1,0,0,1,0,1,0,0,1,0,1,1,1,0,1,1,0,0,1,0,1,0,1,1,1,1,1,0,1,0,1,1,0,1,0,1,1,0,1,0,0,1,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,1,0,1,0,0,1,1,0,1,1,1,0,0,0,0,0,1,0,0,0,1,1,0,1,0,1,1,1,1,0,0,1,0,0,0,0,1,1,0,0,0,0,0,1,0,1,0,1,1,0,1,1,1,0,0,1,1,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,1,0,1,1,0,0,0,0,1,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,0,1,1,1,0,1,0,1,0,0,1,0,1,0,0,0,0,1,1,1,0,1,0,0,0,0,1,1,1,0,1,1,0,1,0,0,1,0,0,0,0,0,1,0,1,1,1,0,0,1,1,0,1,1,1,0,0,0,1,0,0,0,0,0,1,0,0,1,1,0,1,1,0,0,0,1,0,0,1,1,1,0,0,1,1,1,1,1,0,1,1,1,1,1,1,1,0,1,0,1,0,1,0,1,1,1,0,1,0,1,1,0,1,1,1,0,1,0,1,0,1,1,0,0,0,0,0,0,0,1,0,0,0,0,1,1,1,0,0,0,1,0,1,1,0,0,1,1,0,0,1,1,1,0,0,0,0,0,1,1,0,0,1,0,0,1,0,1,0,1,0,1,1,0,1,0,0,1,0,0,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,0,1,1,0,1,0,1,1,0,0,1,0,0,1,1,1,1,0,0,0,1,1,0,1,1,0,0,1,0,1,1,1,0,0,1,1,0,1,1,0,0,1,0,1,1,0,1,1,1,0,1,0,0,1,0,1,0,1,1,0,1,0,1,0,0,0,0,1,1,0,0,0,1,0,0,0,0,1,0,0,0,1,0,1,1,1,1,0,0,0,1,1,0,1,1,0,0,1,1,1,0,0,1,1,1,1,0,1,1,1,0,0,1,1,1,0,1,1,0,0,1,1,0,0,0,0,0,1,1,1,1,1,1,1,0,0,1,1,0,0,1,1,0,1,0,1,0,0,0,1,0,1,1,0,1,0,0,1,0,0,1,1,0,0,0,0,0,1,0,1,1,1,0,1,0,1,1,1,0,0,1,0,1,1,1,0,0,1,0,1,0,1,1,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,1,1,0,1,0,0,0,0,0,0,1,0,1,0,0,1,0,1,1,1,1,0,1,0,0,0,1,1,0,1,1,0,0,0,0,1,0,1,1,0,0,1,0,1,0,1,1,0,0,1,1,0,0,0,0,1,0,1,0,1,0,1,1,0,0,0,0,0,0,1,0,1,0,1,1,1,0,1,1,1,0,1,0,1,1,1,0,0,0,1,0,0,0,0,0,0,1,1,0,0,1,0,0,1,1,1,1,0,1,0,1,0,0,1,0,1,0,1,1,1,1,0,1,1,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,1,1,1,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,1,0,1,0,1,1,0,0,0,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,0,1,0,0,1,1,1,0,1,0,0,0,1,0,1,1,1,0,1,0,1,0,0,0,1,0,0,0,1,1,0,1,1,1,1,0,0,1,1,0,0,1,1,1,1,1,0,0,1,0,1,0,1,1,0,0,1,1,0,1,1,0,0,1,0,1,1,0,0,0,1,1,1,1,0,0,0,1,1,1,1,1,1,1,0,1,0,0,1,1,1,0,1,0,0,0,0,1,0,1,0,1,1,1,1,0,0,0,0,0,0,1,0,1,1,1,0,0,0,0,0,1,1,0,0,1,1,1,0,0,0,1,0,0,0,1,0,1,1,1,1,1,1,1,0,1,0,1,1,0,1,0,1,0,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1,0,0,1,0,1,0,1,1,1,0,1,0,1,1,1,1,0,1,0,1,1,1,0,0,0,0,1,1,0,1,1,1,1,0,1,1,1,1,1,0,0,0,1,0,1,1,0,0,0,0,0,0,1,1,0,1,0,1,0,0,0,1,1,0,0,1,1,1,1,1,1,0,1,0,1,0,0,0,1,0,1,1,0,0,0,0,0,1,0,0,1,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,1,1,0,0,1,0,1,0,0,0,0,0,1,1,1,0,0,1,0,0,0,0,0,1,1,0,1,1,1,1,1,0,0,0,0,0,1,1,0,1,0,0,1,0,1,1,0,0,0,1,1,1,0,0,1,0,1,0,1,1,1,1,1,1,0,0,0,0,1,1,1,0,0,0,0,1,0,1,0,0,1,1,1,1,1,0,1,0,0,1,1,1,0,1,1,1,1,0,1,1,0,1,0,1,1,1,0,0,0,1,1,0,0,1,0,0,1,1,0,0,1,0,1,1,1,0,1,1,0,0,1,1,0,0,1,0,0,0,0,1,0,1,1,1,1,0,0,0,0,1,0,0,0,1,0,0,0,1,0,1,1,0,1,1,0,0,0,1,1,1,1,1,0,0,0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,0,0,1,0,0,1,1,1,0,1,0,0,1,1,1,0,1,0,1,0,0,0,0,1,1,0,1,0,1,0,1,1,1,1,0,1,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,1,0,1,1,0,0,1,1,1,0,0,0,0,0,1,0,1,1,0,0,1,1,1,1,0,0,0,0,0,0,0,1,0,1,0,1,1,0,0,1,1,0,1,1,1,0,1,1,0,1,1,1,0,1,0,0,1,0,0,1,0,0,1,1,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,1,1,1,1,0,1,0,1,1,0,1,0,0,0,0,1,1,0,0,1,1,0,1,0,0,1,1,0,1,1,0,0,0,0,1,1,0,1,0,1,0,1,1,1,0,0,1,1,0,1,0,1,0,0,1,1,1,1,0,1,0,1,1,1,0,0,0,0,1,1,1,0,0,1,0,0,0,1,0,1,1,1,1,1,0,0,1,0,1,1,1,0,1,0,0,0,0,1,1,1,0,1,0,0,1,1,1,0,0,1,0,0,1,1,0,0,1,1,0,0,1,1,1,1,0,0,1,1,0,1,1,1,0,1,0,1,1,1,1,0,1,1,1,0,1,1,1,0,1,1,0,0,0,0,1,0,1,0,0,0,1,1,0,0,0,1,0,0,1,1,0,0,1,0,0,0,1,1,0,1,1,1,1,0,0,0,0,0,1,1,0,1,0,0,1,1,1,0,0,0,0,1,0,0,1,1,0,1,1,0,0,0,1,0,1,0,0,1,1,0,0,1,1,0,1,1,1,0,1,1,1,0,0,0,0,0,0,1,1,0,0,0,1,1,1,1,1,1,1,0,1,0,0,0,0,1,1,1,1,0,0,1,1,1,1,1,0,1,0,1,1,1,0,0,0,0,0,0,0,1,1,0,1,1,1,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,0,1,0,1,1,0,0,0,0,0,0,1,1,0,1,1,1,1,1,1,0,0,0,1,1,1,0,1,1,0,0,1,0,0,0,0,0,1,1,1,0,1,1,1,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1,0,1,0,1,1,0,0,1,0,1,1,1,1,1,1,0,1,1,0,1,0,1,1,1,1,1,1,1,0,0,0,1,1,0,1,0,1,1,1,0,1,0,1,1,0,0,1,0,0,0,0,1,1,1,0,1,1,0,0,1,0,0,1,0,1,1,0,1,0,0,1,0,1,0,0,1,1,1,0,1,1,1,1,1,0,0,1,1,0,1,0,0,0,0,1,1,1,0,0,1,1,1,1,0,1,1,1,0,0,0,1,1,0,1,1,0,1,0,1,0,0,0,0,0,1,1,0,1,1,0,0,1,1,1,0,0,0,1,1,1,0,1,1,1,0,1,1,0,1,1,0,0,0,1,1,0,0,0,1,0,0,0,1,1,0,0,0,0,1,1,1,0,0,0,0,1,1,1,1,1,1,0,0,1,0,1,1,1,0,0,1,1,0,1,0,1,1,0,0,0,0,0,0,1,0,0,0,0,1,1,1,0,1,0,0,1,1,0,1,1,1,0,1,0,1,0,1,1,0,1,0,0,1,0,0,0,1,0,1,0,1,0,1,1,0,0,0,1,0,0,1,0,0,1,0,0,1,1,0,0,1,1,1,1,1,0,0,1,0,0,0,0,0,0,1,0,0,0,1,0,0,1,0,0,0,1,1,1,1,0,0,0,1,1,1,1,0,1,0,1,1,1,0,1,0,1,0,1,0,1,0,1,1,1,1,0,0,0,0,1,0,1,0,1,1,0,0,1,1,1,0,1,1,0,1,1,0,0,1,0,0,0,1,1,1,1,1,0,0,0,0,1,0,0,0,1,0,0,0,1,1,0,0,1,1,1,1,0,0,0,0,0,1,0,1,1,0,1,0,1,0,0,0,0,1,0,0,0,0,0,1,1,0,1,0,0,1,1,0,0,0,1,1,1,1,0,1,1,1,0,0,1,0,1,1,1,1,0,0,1,1,0,1,1,0,1,0,1,1,1,1,0,1,0,0,0,0,0,1,1,0,1,1,1,1,0,0,0,0,0,1,1,0,1,1,1,1,1,0,0,1,0,1,0,1,1,1,0,0,1,1,0,0,0,1,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,0,0,1,1,1,0,1,1,1,0,1,0,1,0,0,1,1,1,0,1,1,0,0,0,0,0,0,1,0,0,1,0,1,1,1,1,1,1,0,0,0,1,0,0,0,0,0,1,1,0,1,1,1,1,1,1,0,1,0,1,0,1,1,1,0,1,0,1,1,0,0,0,1,1,0,1,1,1,0,0,0,1,0,1,1,0,1,0,0,1,1,1,0,1,0,1,1,0,0,0,0,1,0,1,1,1,1,1,1,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,1,1,0,1,0,0,0,1,1,1,1,1,1,0,1,1,1,1,1,1,0,0,1,0,0,1,0,1,0,0,1,1,1,0,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,0,1,0,1,1,1,1,0,1,1,1,0,0,0,0,1,1,1,1,1,0,0,1,0,1,0,1,1,1,0,0,0,1,0,0,1,1,0,0,0,0,0,0,1,0,0,1,0,0,0,1,1,0,1,0,0,0,1,1,0,1,0,0,0,1,0,0,0,0,1,1,0,1,1,0,1,1,1,1,1,0,1,0,0,0,0,1,0,1,1,0,0,1,0,0,1,1,1,0,0,0,1,0,1,0,1,0,0,1,0,0,0,1,1,0,0,1,0,1,0,0,1,0,0,1,1,1,0,0,0,0,0,0,1,0,1,1,0,0,1,0,0,1,0,1,0,1,0,1,0,1,1,0,0,1,1,1,1,1,0,0,0,1,0,1,0,0,1,1,0,1,1,0,1,1,1,0,0,0,1,0,0,1,0,1,1,0,0,0,1,0,0,1,0,1,0,0,0,1,1,1,0,0,0,0,1,0,1,0,1,0,0,1,0,1,0,0,0,0,1,0,1,0,1,0,0,1,1,0,1,0,0,0,0,1,1,0,0,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,1,1,0,1,0,1,0,1,1,0,1,0,1,1,0,0,1,1,0,0,1,1,0,0,0,0,1,1,0,1,0,1,1,0,0,1,0,0,1,0,1,0,0,0,1,1,1,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,1,1,1,1,1,1,1,1,0,1,0,0,1,0,1,0,1,0,0,0,0,1,1,1,1,0,0,0,1,0,1,1,0,0,0,1,0,1,1,1,1,1,1,0,0,1,1,1,0,1,0,1,0,0,];
var gg_b = "1752652802/";

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
