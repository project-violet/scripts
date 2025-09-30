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
case 552:
case 3944:
case 225:
case 3932:
case 431:
case 1577:
case 3803:
case 2798:
case 3181:
case 2240:
case 3925:
case 3107:
case 3534:
case 3542:
case 19:
case 3270:
case 1092:
case 2097:
case 2632:
case 3391:
case 3497:
case 3749:
case 3853:
case 3463:
case 2284:
case 2841:
case 867:
case 894:
case 769:
case 220:
case 1786:
case 3797:
case 3449:
case 1583:
case 2723:
case 1938:
case 853:
case 722:
case 427:
case 2523:
case 3597:
case 3939:
case 1783:
case 333:
case 1694:
case 873:
case 2034:
case 3466:
case 1620:
case 1047:
case 3310:
case 1371:
case 3072:
case 1960:
case 1748:
case 2639:
case 506:
case 1099:
case 3766:
case 2726:
case 3734:
case 3742:
case 1685:
case 669:
case 1303:
case 1477:
case 498:
case 3442:
case 622:
case 1161:
case 2598:
case 3554:
case 102:
case 850:
case 1908:
case 2138:
case 4065:
case 2210:
case 1375:
case 180:
case 2614:
case 4074:
case 3719:
case 909:
case 21:
case 1607:
case 2602:
case 891:
case 176:
case 3504:
case 3137:
case 3419:
case 688:
case 1840:
case 412:
case 3833:
case 3902:
case 185:
case 1336:
case 2291:
case 2370:
case 2659:
case 845:
case 886:
case 2012:
case 819:
case 717:
case 3185:
case 56:
case 3519:
case 3661:
case 1215:
case 2621:
case 3395:
case 2054:
case 1718:
case 838:
case 736:
case 3864:
case 2160:
case 330:
case 3754:
case 3412:
case 3909:
case 3931:
case 2386:
case 4088:
case 3613:
case 3006:
case 1254:
case 1878:
case 620:
case 2866:
case 1650:
case 2196:
case 3826:
case 1212:
case 540:
case 2217:
case 1091:
case 2553:
case 3392:
case 968:
case 164:
case 197:
case 625:
case 538:
case 3130:
case 128:
case 3218:
case 3872:
case 311:
case 3415:
case 1169:
case 586:
case 1899:
case 545:
case 1600:
case 3053:
case 1146:
case 3168:
case 3898:
case 2655:
case 103:
case 3189:
case 4062:
case 720:
case 2377:
case 3955:
case 1219:
case 2403:
case 555:
case 222:
case 725:
case 2753:
case 3378:
case 2471:
case 3003:
case 2348:
case 1326:
case 550:
case 2916:
case 2863:
case 2453:
case 2193:
case 3127:
case 3905:
case 1162:
case 413:
case 2024:
case 236:
case 61:
case 2299:
case 3973:
case 2651:
case 2969:
case 2533:
case 3277:
case 3951:
case 3669:
case 2736:
case 1570:
case 288:
case 3100:
case 2247:
case 1234:
case 2804:
case 2943:
case 2601:
case 2687:
case 3745:
case 1682:
case 3724:
case 806:
case 543:
case 2764:
case 1113:
case 217:
case 2475:
case 921:
case 3283:
case 2854:
case 3036:
case 3987:
case 2775:
case 410:
case 1297:
case 3935:
case 71:
case 916:
case 989:
case 1116:
case 1263:
case 2575:
case 1993:
case 553:
case 2011:
case 1249:
case 3545:
case 2622:
case 3662:
case 1040:
case 1095:
case 105:
case 2635:
case 2564:
case 594:
case 182:
case 1689:
case 2433:
case 449:
case 1668:
case 415:
case 723:
case 4016:
case 2318:
case 1928:
case 100:
case 1470:
case 479:
case 2166:
case 127:
case 2335:
case 1409:
case 2917:
case 771:
case 1552:
case 1327:
case 3362:
case 2322:
case 3617:
case 1709:
case 1178:
case 3882:
case 3508:
case 1721:
case 3172:
case 1888:
case 2581:
case 4078:
case 3558:
case 3918:
case 1368:
case 3346:
case 1904:
case 1147:
case 3830:
case 1389:
case 1759:
case 2134:
case 1843:
case 651:
case 695:
case 521:
case 292:
case 396:
case 2008:
case 3758:
case 943:
case 3388:
case 2373:
case 671:
case 1559:
case 2707:
case 790:
case 2781:
case 3868:
case 3198:
case 4092:
case 641:
case 266:
case 3343:
case 1509:
case 3205:
case 3179:
case 3708:
case 2163:
case 2893:
case 3123:
case 483:
case 2457:
case 1192:
case 2867:
case 1714:
case 3081:
case 3408:
case 751:
case 1414:
case 2485:
case 218:
case 2677:
case 35:
case 774:
case 3251:
case 3647:
case 3977:
case 2785:
case 68:
case 3094:
case 239:
case 3229:
case 2269:
case 456:
case 3273:
case 2537:
case 950:
case 2420:
case 3460:
case 1626:
case 3983:
case 1739:
case 2978:
case 3316:
case 2720:
case 3760:
case 3085:
case 2794:
case 1117:
case 2112:
case 809:
case 1813:
case 1296:
case 3986:
case 2331:
case 524:
case 1623:
case 3438:
case 938:
case 3037:
case 3692:
case 1350:
case 1780:
case 674:
case 1065:
case 2520:
case 1679:
case 1949:
case 2262:
case 1267:
case 78:
case 480:
case 3738:
case 1293:
case 1816:
case 986:
case 20:
case 1963:
case 2686:
case 1480:
case 644:
case 2992:
case 1997:
case 1539:
case 3313:
case 2585:
case 1300:
case 2246:
case 1228:
case 476:
case 2737:
case 34:
case 1732:
case 568:
case 1425:
case 3276:
case 940:
case 607:
case 2038:
case 446:
case 2119:
case 1776:
case 2489:
case 3695:
case 365:
case 2468:
case 403:
case 3428:
case 1911:
case 2067:
case 3970:
case 1062:
case 12:
case 3361:
case 1633:
case 2670:
case 3225:
case 2789:
case 3103:
case 3728:
case 3807:
case 2995:
case 295:
case 3881:
case 251:
case 1110:
case 1722:
case 2727:
case 1587:
case 1501:
case 2808:
case 360:
case 3684:
case 1735:
case 2028:
case 3467:
case 1046:
case 3857:
case 1422:
case 2427:
case 3153:
case 824:
case 3596:
case 96:
case 2482:
case 1401:
case 301:
case 1990:
case 1260:
case 1675:
case 1069:
case 1787:
case 1701:
case 3567:
case 1522:
case 3239:
case 4091:
case 1535:
case 3030:
case 497:
case 2589:
case 692:
case 1729:
case 428:
case 1191:
case 2730:
case 3082:
case 1473:
case 2115:
case 241:
case 1307:
case 1381:
case 110:
case 1184:
case 2339:
case 357:
case 3610:
case 2550:
case 2910:
case 1320:
case 363:
case 1394:
case 1531:
case 4095:
case 1208:
case 405:
case 3837:
case 618:
case 1140:
case 149:
case 1195:
case 115:
case 1865:
case 639:
case 400:
case 1258:
case 2111:
case 1874:
case 179:
case 304:
case 2332:
case 1337:
case 3691:
case 159:
case 1555:
case 2700:
case 3136:
case 3221:
case 3374:
case 1606:
case 2400:
case 787:
case 3885:
case 3000:
case 347:
case 3209:
case 739:
case 837:
case 377:
case 3820:
case 2190:
case 2450:
case 2860:
case 2124:
case 3164:
case 2435:
case 1141:
case 1984:
case 3462:
case 1427:
case 3852:
case 2046:
case 1028:
case 2735:
case 2501:
case 1582:
case 3814:
case 627:
case 151:
case 2573:
case 3588:
case 3802:
case 195:
case 1995:
case 3746:
case 504:
case 1359:
case 3933:
case 1670:
case 3611:
case 1093:
case 22:
case 4041:
case 881:
case 1067:
case 2911:
case 1858:
case 1468:
case 3035:
case 1530:
case 2776:
case 2307:
case 141:
case 933:
case 3001:
case 3087:
case 3469:
case 3859:
case 2576:
case 3743:
case 3546:
case 2191:
case 2451:
case 171:
case 3769:
case 1096:
case 2636:
case 3285:
case 727:
case 829:
case 3690:
case 2043:
case 2357:
case 2701:
case 3975:
case 1782:
case 563:
case 2069:
case 4015:
case 2675:
case 3294:
case 3308:
case 2401:
case 1314:
case 2088:
case 3073:
case 2487:
case 2755:
case 2874:
case 3005:
case 2258:
case 18:
case 2455:
case 215:
case 3825:
case 85:
case 734:
case 3832:
case 2140:
case 3281:
case 958:
case 2208:
case 2531:
case 3716:
case 1838:
case 2394:
case 309:
case 1910:
case 3641:
case 2941:
case 2671:
case 884:
case 1339:
case 3880:
case 3513:
case 210:
case 3338:
case 1124:
case 1860:
case 2656:
case 3713:
case 3956:
case 3516:
case 2731:
case 935:
case 3839:
case 1750:
case 3413:
case 1991:
case 565:
case 2606:
case 3615:
case 33:
case 1325:
case 2915:
case 930:
case 2337:
case 84:
case 4090:
case 436:
case 3009:
case 2389:
case 1142:
case 2904:
case 4066:
case 2421:
case 2199:
case 865:
case 2459:
case 57:
case 3873:
case 1581:
case 2502:
case 3761:
case 3801:
case 2514:
case 3183:
case 2709:
case 2327:
case 2552:
case 1557:
case 1917:
case 2409:
case 860:
case 3654:
case 1335:
case 911:
case 2752:
case 1301:
case 1757:
case 584:
case 3186:
case 2862:
case 801:
case 1457:
case 2192:
case 1867:
case 1058:
case 420:
case 1163:
case 999:
case 3835:
case 3396:
case 713:
case 3052:
case 55:
case 1707:
case 2559:
case 2919:
case 3876:
case 1329:
case 4049:
case 1373:
case 231:
case 1407:
case 187:
case 2580:
case 1305:
case 2117:
case 2439:
case 408:
case 2966:
case 1683:
case 1154:
case 1648:
case 2739:
case 1420:
case 2532:
case 596:
case 1288:
case 321:
case 2525:
case 1269:
case 529:
case 1355:
case 3642:
case 3972:
case 615:
case 2942:
case 2672:
case 1677:
case 3574:
case 1485:
case 118:
case 914:
case 581:
case 2432:
case 2444:
case 2698:
case 316:
case 3855:
case 212:
case 1246:
case 3289:
case 3998:
case 3474:
case 2300:
case 337:
case 1992:
case 1686:
case 3923:
case 2816:
case 2267:
case 3227:
case 847:
case 2679:
case 715:
case 749:
case 1520:
case 2065:
case 3032:
case 3697:
case 3044:
case 2623:
case 3663:
case 1406:
case 441:
case 2899:
case 2169:
case 3173:
case 69:
case 2847:
case 1834:
case 3491:
case 3151:
case 297:
case 2091:
case 2212:
case 2379:
case 3848:
case 981:
case 3187:
case 1015:
case 3510:
case 2878:
case 367:
case 1756:
case 1386:
case 3366:
case 2326:
case 1348:
case 79:
case 343:
case 514:
case 3410:
case 1471:
case 1849:
case 962:
case 3886:
case 451:
case 2010:
case 1377:
case 203:
case 3334:
case 169:
case 1128:
case 3591:
case 3982:
case 1775:
case 756:
case 3696:
case 1464:
case 680:
case 117:
case 2266:
case 3226:
case 2113:
case 350:
case 474:
case 1764:
case 2682:
case 602:
case 1601:
case 2996:
case 685:
case 3930:
case 1804:
case 188:
case 984:
case 1736:
case 3818:
case 676:
case 3272:
case 3319:
case 1533:
case 5:
case 391:
case 1988:
case 1436:
case 136:
case 1733:
case 3298:
case 200:
case 2470:
case 1676:
case 878:
case 338:
case 375:
case 835:
case 3795:
case 1433:
case 2770:
case 1536:
case 848:
case 345:
case 386:
case 3495:
case 746:
case 370:
case 454:
case 1564:
case 2095:
case 3354:
case 2627:
case 2040:
case 3667:
case 1622:
case 3070:
case 340:
case 3484:
case 97:
case 2263:
case 2297:
case 1680:
case 697:
case 664:
case 2486:
case 1723:
case 1108:
case 2810:
case 3578:
case 2583:
case 2786:
case 120:
case 1526:
case 1841:
case 2548:
case 1423:
case 3638:
case 3152:
case 3492:
case 1063:
case 1644:
case 1632:
case 548:
case 2211:
case 1965:
case 1240:
case 3315:
case 2577:
case 3937:
case 764:
case 1772:
case 3447:
case 3083:
case 2078:
case 2477:
case 2303:
case 1815:
case 2685:
case 3747:
case 3236:
case 1726:
case 2099:
case 2748:
case 2224:
case 3994:
case 2483:
case 3077:
case 2245:
case 3920:
case 2371:
case 1426:
case 728:
case 2047:
case 2620:
case 2694:
case 1579:
case 3341:
case 3778:
case 661:
case 2165:
case 3125:
case 342:
case 4038:
case 3144:
case 3132:
case 957:
case 276:
case 3870:
case 2958:
case 2607:
case 11:
case 3608:
case 3253:
case 1614:
case 2241:
case 2884:
case 700:
case 533:
case 280:
case 1138:
case 1652:
case 306:
case 202:
case 904:
case 3139:
case 1845:
case 1160:
case 1824:
case 3717:
case 1609:
case 2718:
case 352:
case 439:
case 4060:
case 2418:
case 1961:
case 1659:
case 977:
case 682:
case 1291:
case 2864:
case 2194:
case 1717:
case 1018:
case 2412:
case 583:
case 805:
case 1139:
case 230:
case 248:
case 2921:
case 882:
case 3012:
case 3961:
case 59:
case 3370:
case 4039:
case 1206:
case 2395:
case 152:
case 421:
case 2661:
case 2519:
case 2504:
case 172:
case 1870:
case 258:
case 4080:
case 632:
case 2719:
case 1981:
case 2902:
case 1125:
case 1203:
case 416:
case 1144:
case 1658:
case 489:
case 861:
case 2137:
case 1271:
case 3210:
case 1345:
case 1390:
case 106:
case 2554:
case 437:
case 1608:
case 949:
case 915:
case 614:
case 2952:
case 323:
case 2512:
case 1083:
case 3472:
case 468:
case 2742:
case 2734:
case 546:
case 803:
case 1985:
case 626:
case 2026:
case 1447:
case 2434:
case 1799:
case 1048:
case 6:
case 3042:
case 3426:
case 2466:
case 1275:
case 2856:
case 3034:
case 3579:
case 233:
case 580:
case 1109:
case 4021:
case 1341:
case 2939:
case 1778:
case 3523:
case 2766:
case 502:
case 3639:
case 1264:
case 711:
case 1478:
case 2072:
case 1920:
case 320:
case 2566:
case 3479:
case 3284:
case 1638:
case 1152:
case 2157:
case 92:
case 3779:
case 2763:
case 1578:
case 2449:
case 1114:
case 799:
case 1792:
case 1102:
case 2925:
case 3240:
case 2181:
case 3798:
case 1233:
case 16:
case 3295:
case 1937:
case 556:
case 2674:
case 1599:
case 3498:
case 3644:
case 3974:
case 611:
case 2542:
case 1547:
case 2534:
case 648:
case 1440:
case 2711:
case 3536:
case 145:
case 1495:
case 1740:
case 4005:
case 1298:
case 3946:
case 856:
case 1968:
case 3318:
case 934:
case 1795:
case 140:
case 1070:
case 1927:
case 2922:
case 1279:
case 3575:
case 758:
case 1312:
case 564:
case 1223:
case 912:
case 3292:
case 2286:
case 2590:
case 2524:
case 3635:
case 1354:
case 4055:
case 1693:
case 1226:
case 3812:
case 2724:
case 3601:
case 2901:
case 735:
case 3775:
case 2490:
case 3854:
case 3464:
case 214:
case 2445:
case 2283:
case 3278:
case 3533:
case 658:
case 3299:
case 3988:
case 155:
case 3090:
case 232:
case 2688:
case 3673:
case 3804:
case 3247:
case 1818:
case 43:
case 2511:
case 3736:
case 3629:
case 846:
case 2669:
case 1410:
case 3471:
case 2378:
case 2741:
case 173:
case 1886:
case 3771:
case 3897:
case 1122:
case 3556:
case 2879:
case 1366:
case 931:
case 3348:
case 1135:
case 2189:
case 3128:
case 2898:
case 2168:
case 2053:
case 2399:
case 3403:
case 299:
case 733:
case 2056:
case 1151:
case 89:
case 3406:
case 2415:
case 211:
case 1173:
case 2872:
case 1877:
case 1510:
case 1883:
case 194:
case 998:
case 4073:
case 3756:
case 2931:
case 2392:
case 3553:
case 1397:
case 1363:
case 3217:
case 153:
case 3456:
case 3866:
case 2541:
case 3737:
case 472:
case 1268:
case 598:
case 1474:
case 1998:
case 859:
case 3585:
case 1080:
case 1765:
case 604:
case 3437:
case 3119:
case 442:
case 763:
case 116:
case 3594:
case 2560:
case 1697:
case 2692:
case 2037:
case 1044:
case 406:
case 2438:
case 900:
case 1805:
case 2235:
case 3992:
case 3686:
case 1923:
case 30:
case 1979:
case 961:
case 2983:
case 2850:
case 1666:
case 284:
case 657:
case 704:
case 2287:
case 3305:
case 4018:
case 2316:
case 663:
case 2251:
case 3104:
case 3243:
case 2699:
case 1039:
case 318:
case 3485:
case 531:
case 3999:
case 2273:
case 452:
case 121:
case 3269:
case 1634:
case 2094:
case 2977:
case 2020:
case 3197:
case 1822:
case 3457:
case 3058:
case 3163:
case 2179:
case 765:
case 1835:
case 601:
case 3757:
case 3387:
case 3149:
case 2081:
case 2007:
case 760:
case 2369:
case 2388:
case 2758:
case 4086:
case 296:
case 366:
case 262:
case 2057:
case 1619:
case 3828:
case 2198:
case 2458:
case 1561:
case 2868:
case 3351:
case 4083:
case 3376:
case 964:
case 281:
case 3507:
case 1177:
case 701:
case 1761:
case 3134:
case 2558:
case 1851:
case 3557:
case 1393:
case 3917:
case 1654:
case 3335:
case 2126:
case 3166:
case 2508:
case 1887:
case 534:
case 928:
case 1250:
case 1612:
case 1059:
case 2617:
case 813:
case 956:
case 1516:
case 450:
case 834:
case 374:
case 75:
case 513:
case 3380:
case 3750:
case 2175:
case 3145:
case 1338:
case 344:
case 2894:
case 3124:
case 3860:
case 3190:
case 2050:
case 64:
case 2136:
case 491:
case 455:
case 1031:
case 3991:
case 67:
case 3400:
case 3261:
case 13:
case 65:
case 1832:
case 2837:
case 1281:
case 486:
case 1844:
case 3500:
case 1170:
case 902:
case 38:
case 438:
case 4070:
case 2252:
case 946:
case 985:
case 257:
case 1880:
case 1953:
case 354:
case 2214:
case 3838:
case 1716:
case 263:
case 1055:
case 109:
case 1971:
case 1641:
case 629:
case 1546:
case 1821:
case 371:
case 831:
case 1788:
case 579:
case 1769:
case 3430:
case 696:
case 1285:
case 1443:
case 1936:
case 3115:
case 1488:
case 1001:
case 1087:
case 1859:
case 3730:
case 2106:
case 1029:
case 1308:
case 494:
case 467:
case 781:
case 201:
case 1073:
case 3482:
case 2496:
case 1690:
case 510:
case 2239:
case 1562:
case 2567:
case 453:
case 3352:
case 1645:
case 1975:
case 3782:
case 1076:
case 3808:
case 99:
case 3727:
case 796:
case 2767:
case 473:
case 3141:
case 2596:
case 762:
case 2280:
case 3984:
case 3427:
case 390:
case 1462:
case 2467:
case 3028:
case 2970:
case 2027:
case 1446:
case 1022:
case 1035:
case 3489:
case 1588:
case 2881:
case 395:
case 3995:
case 2232:
case 1746:
case 983:
case 2728:
case 2103:
case 3768:
case 1933:
case 559:
case 1569:
case 3670:
case 3265:
case 689:
case 23:
case 1221:
case 2615:
case 3606:
case 2906:
case 104:
case 2031:
case 1691:
case 551:
case 359:
case 3555:
case 1136:
case 1050:
case 1365:
case 2713:
case 3656:
case 1894:
case 2338:
case 80:
case 4036:
case 3431:
case 2413:
case 147:
case 1175:
case 3505:
case 1209:
case 590:
case 2516:
case 789:
case 4033:
case 2641:
case 3320:
case 3531:
case 3208:
case 1214:
case 3653:
case 2953:
case 3184:
case 2513:
case 157:
case 2416:
case 1610:
case 1252:
case 2257:
case 3016:
case 3603:
case 571:
case 3258:
case 621:
case 3874:
case 3385:
case 379:
case 3755:
case 1202:
case 1837:
case 2207:
case 541:
case 2832:
case 818:
case 3195:
case 349:
case 3787:
case 2645:
case 2975:
case 3701:
case 1593:
case 2051:
case 3522:
case 2809:
case 3535:
case 1030:
case 2624:
case 3664:
case 2073:
case 3401:
case 3088:
case 101:
case 2964:
case 554:
case 2308:
case 3260:
case 3945:
case 3675:
case 2220:
case 3069:
case 2029:
case 2743:
case 2859:
case 3429:
case 2087:
case 724:
case 1082:
case 2488:
case 2001:
case 3473:
case 3381:
case 2769:
case 3773:
case 3451:
case 3861:
case 2821:
case 892:
case 3191:
case 4:
case 2611:
case 1225:
case 499:
case 2569:
case 2933:
case 1103:
case 1728:
case 920:
case 1232:
case 2588:
case 3573:
case 3776:
case 4053:
case 507:
case 2543:
case 1695:
case 165:
case 3551:
case 2446:
case 3062:
case 668:
case 1027:
case 574:
case 2852:
case 2462:
case 925:
case 1493:
case 1280:
case 1596:
case 1089:
case 313:
case 3110:
case 3722:
case 1767:
case 2762:
case 3501:
case 1793:
case 160:
case 1684:
case 2227:
case 1222:
case 2979:
case 1738:
case 2923:
case 3480:
case 2805:
case 3539:
case 1313:
case 3074:
case 2663:
case 3623:
case 334:
case 874:
case 1438:
case 2044:
case 1692:
case 1037:
case 2032:
case 3350:
case 2025:
case 1560:
case 63:
case 1276:
case 807:
case 2774:
case 3698:
case 3432:
case 17:
case 2080:
case 2289:
case 3228:
case 2268:
case 3744:
case 1020:
case 2642:
case 1094:
case 2634:
case 3525:
case 2565:
case 917:
case 435:
case 88:
case 2118:
case 2039:
case 1699:
case 2230:
case 1800:
case 1948:
case 430:
case 609:
case 1316:
case 936:
case 1085:
case 1760:
case 3117:
case 3296:
case 3580:
case 1538:
case 1201:
case 1287:
case 988:
case 184:
case 2666:
case 1850:
case 841:
case 1057:
case 2619:
case 518:
case 162:
case 1758:
case 2014:
case 1388:
case 539:
case 2876:
case 1255:
case 129:
case 3559:
case 1007:
case 3382:
case 3414:
case 969:
case 2835:
case 1179:
case 1708:
case 3192:
case 2822:
case 3714:
case 2059:
case 3709:
case 2250:
case 3514:
case 2801:
case 3409:
case 3061:
case 2021:
case 3912:
case 2393:
case 3552:
case 2367:
case 895:
case 2461:
case 3421:
case 851:
case 1918:
case 2328:
case 3368:
case 4026:
case 3904:
case 2200:
case 3389:
case 3759:
case 1172:
case 2873:
case 3869:
case 1033:
case 3249:
case 2667:
case 1662:
case 463:
case 2354:
case 305:
case 742:
case 270:
case 1286:
case 3297:
case 3263:
case 2312:
case 1317:
case 3993:
case 772:
case 2105:
case 2070:
case 2795:
case 275:
case 238:
case 2304:
case 300:
case 2989:
case 382:
case 90:
case 2495:
case 286:
case 2155:
case 3689:
case 3770:
case 706:
case 3668:
case 569:
case 1669:
case 2818:
case 3570:
case 3242:
case 1100:
case 1075:
case 3234:
case 361:
case 642:
case 132:
case 255:
case 1643:
case 1973:
case 987:
case 1929:
case 4050:
case 2272:
case 672:
case 1283:
case 918:
case 114:
case 1424:
case 1490:
case 2696:
case 1987:
case 2982:
case 823:
case 3996:
case 1745:
case 3817:
case 1790:
case 250:
case 2226:
case 3266:
case 1248:
case 3372:
case 1:
case 1515:
case 199:
case 3010:
case 1399:
case 126:
case 1168:
case 1898:
case 465:
case 2334:
case 303:
case 2342:
case 1189:
case 4068:
case 243:
case 2135:
case 2366:
case 1879:
case 992:
case 3892:
case 4089:
case 2122:
case 3162:
case 1127:
case 273:
case 1378:
case 966:
case 1616:
case 1541:
case 3379:
case 2363:
case 1931:
case 401:
case 1006:
case 1613:
case 267:
case 3254:
case 2950:
case 2510:
case 3188:
case 111:
case 2129:
case 3600:
case 2491:
case 1715:
case 2900:
case 66:
case 1130:
case 328:
case 1218:
case 4020:
case 675:
case 1519:
case 3333:
case 1661:
case 1959:
case 3215:
case 525:
case 135:
case 1836:
case 2206:
case 178:
case 619:
case 645:
case 45:
case 3017:
case 148:
case 2256:
case 1875:
case 130:
case 2417:
case 1909:
case 4085:
case 1194:
case 1864:
case 1712:
case 1120:
case 755:
case 907:
case 2517:
case 1512:
case 2957:
case 775:
case 3884:
case 2253:
case 2608:
case 817:
case 1554:
case 719:
case 745:
case 1914:
case 98:
case 3657:
case 2345:
case 1137:
case 3840:
case 2144:
case 2203:
case 2907:
case 770:
case 888:
case 3336:
case 3681:
case 691:
case 3607:
case 3174:
case 376:
case 1310:
case 2920:
case 3960:
case 3483:
case 2264:
case 971:
case 1766:
case 673:
case 2592:
case 3353:
case 1597:
case 3783:
case 1939:
case 2778:
case 2341:
case 523:
case 2109:
case 3448:
case 133:
case 3620:
case 1856:
case 822:
case 2447:
case 2985:
case 3161:
case 3891:
case 2236:
case 2499:
case 869:
case 767:
case 481:
case 3685:
case 3303:
case 3477:
case 3078:
case 2083:
case 1079:
case 2547:
case 39:
case 1542:
case 1665:
case 4057:
case 3092:
case 1023:
case 1674:
case 3306:
case 1944:
case 2599:
case 773:
case 2086:
case 3577:
case 2315:
case 26:
case 1803:
case 2233:
case 1107:
case 1797:
case 2114:
case 3583:
case 1871:
case 1449:
case 3938:
case 4007:
case 4081:
case 2152:
case 1497:
case 1749:
case 2638:
case 1098:
case 1463:
case 1853:
case 951:
case 995:
case 3786:
case 3356:
case 508:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1759258801/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,0,0,1,1,1,0,0,0,0,1,1,1,0,0,1,1,1,1,1,1,1,1,0,0,1,0,0,0,1,0,0,1,1,1,0,0,1,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,1,1,0,1,0,1,0,1,1,1,1,1,1,1,0,1,0,0,0,1,0,0,1,1,1,0,0,0,1,1,0,0,1,1,1,0,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,0,0,1,1,1,1,1,0,1,1,0,0,0,0,1,1,1,1,1,0,1,1,0,1,1,0,0,0,1,1,0,0,0,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,1,0,1,0,1,1,0,0,0,1,0,1,1,1,0,0,1,0,1,1,1,0,1,0,1,1,0,1,1,0,0,0,0,0,1,1,0,1,0,1,1,1,1,1,0,0,0,0,0,0,1,1,1,0,1,1,0,1,1,0,1,0,1,0,0,1,0,0,0,0,1,1,1,1,0,0,1,0,1,1,0,1,0,1,0,0,0,0,1,0,1,1,0,0,0,1,0,1,1,0,0,0,1,1,0,0,1,1,0,0,1,0,0,1,0,1,1,0,0,0,1,1,0,0,1,0,1,0,1,0,0,0,1,0,0,1,1,1,0,1,1,1,0,1,1,1,1,0,0,1,0,1,0,1,0,0,1,0,1,0,1,1,0,1,0,0,0,0,1,0,1,0,0,1,1,0,0,1,1,0,1,0,1,1,1,1,0,1,0,1,1,0,1,0,1,0,0,1,0,1,1,1,0,1,0,1,1,1,0,0,1,1,0,0,1,1,1,1,0,1,0,0,1,0,0,0,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,1,0,1,1,0,1,0,1,0,1,1,0,1,1,0,0,0,1,1,0,0,0,0,0,1,1,0,1,1,0,0,0,1,1,1,1,1,0,1,1,0,0,0,1,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,0,1,0,1,1,0,0,0,1,1,1,0,1,0,0,1,1,1,0,1,0,0,1,0,0,1,0,1,0,0,1,0,0,1,1,1,0,0,1,0,1,0,1,1,1,0,1,0,0,1,1,0,0,0,1,0,0,1,0,1,1,1,0,0,0,1,0,1,0,1,1,0,0,0,1,1,1,1,0,1,0,1,1,0,1,0,1,1,1,1,1,1,1,0,0,1,0,0,0,1,1,1,0,0,1,1,0,1,0,0,1,0,0,0,0,1,1,1,0,1,1,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,0,1,1,0,1,0,0,1,0,1,0,1,0,0,1,1,0,0,1,1,1,1,1,0,0,1,1,1,0,1,0,0,1,0,0,0,0,0,0,1,0,1,1,0,1,1,0,0,1,0,0,1,0,0,0,0,0,1,1,0,0,1,0,1,1,0,0,0,1,1,0,1,1,1,1,1,1,0,0,0,1,0,1,0,0,1,0,0,1,1,0,1,1,0,0,1,1,1,0,0,1,1,0,0,1,0,1,0,0,0,0,1,0,1,0,1,0,1,0,1,1,0,1,1,1,1,0,1,1,0,0,0,0,1,1,1,1,0,0,1,0,0,1,0,0,1,1,0,0,1,0,1,0,0,0,1,1,0,1,0,1,0,1,1,1,1,0,1,0,1,1,1,1,1,1,1,0,0,0,0,0,1,0,0,0,0,0,1,0,1,1,0,0,0,0,0,1,0,0,1,0,1,0,1,0,1,1,1,0,1,0,0,0,1,0,0,0,1,1,1,0,0,1,1,1,0,0,0,0,1,0,1,0,0,1,1,0,1,1,0,0,1,0,0,0,1,1,1,1,0,1,1,0,1,0,0,1,0,0,1,1,1,0,0,0,1,0,1,0,1,0,0,0,1,1,0,0,0,1,0,0,1,1,0,1,0,1,0,1,0,0,1,1,0,1,1,0,0,0,0,1,0,1,0,1,0,0,1,0,1,0,1,1,0,1,1,1,1,1,0,1,1,0,0,0,1,0,0,1,0,1,1,0,1,1,1,1,0,1,0,1,0,0,1,0,0,1,0,0,1,1,1,0,0,0,0,1,1,1,0,0,1,1,0,1,0,1,0,1,1,0,1,0,0,0,0,0,1,0,0,0,1,0,1,1,1,1,1,1,1,0,0,1,0,0,1,0,0,1,1,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0,1,0,1,0,1,1,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0,1,1,0,0,0,1,0,1,1,1,0,1,0,0,0,0,1,0,1,1,1,0,0,1,1,0,1,0,1,0,1,1,0,0,1,0,1,1,0,0,1,1,0,1,1,0,1,0,1,0,1,0,1,1,1,1,1,1,0,1,1,1,0,1,1,0,0,0,1,1,1,1,0,0,1,1,0,1,1,0,0,1,0,1,0,1,1,0,1,1,0,1,0,0,0,0,1,1,1,1,1,1,1,1,0,1,0,1,1,0,0,0,1,1,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,0,1,1,0,1,0,1,1,1,0,0,0,0,1,0,0,0,0,1,0,1,1,0,1,1,0,0,0,0,0,1,1,1,0,0,1,0,1,1,0,0,1,0,1,1,0,0,1,1,0,1,1,1,0,1,1,0,1,0,0,0,1,1,1,0,0,0,0,0,1,0,0,0,0,0,1,0,1,1,1,0,1,0,1,1,0,0,1,0,1,0,0,1,1,0,0,1,1,1,0,1,0,0,0,1,1,0,0,1,1,1,0,1,0,1,1,1,1,0,0,1,0,1,0,0,1,1,1,0,1,1,0,1,0,1,0,1,1,0,1,0,1,1,1,0,1,1,0,0,1,0,0,0,0,1,1,1,0,1,0,0,0,0,0,1,1,1,1,1,0,1,0,0,0,1,0,0,1,0,1,0,0,0,1,1,0,0,0,1,0,0,0,1,0,1,1,0,1,0,0,1,0,1,0,1,0,1,1,0,0,1,0,0,0,0,1,0,1,1,1,0,0,1,1,0,0,1,0,1,0,1,0,0,0,0,1,1,0,1,1,0,0,0,1,0,0,0,0,0,1,0,1,1,1,1,1,1,0,0,0,0,0,1,0,0,1,0,1,0,1,0,0,1,0,0,1,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1,1,1,0,0,0,1,0,1,1,0,1,1,0,0,1,1,0,1,0,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,0,0,1,0,0,0,0,0,0,0,1,1,0,1,0,0,1,1,0,0,1,1,0,1,0,0,0,1,0,0,0,1,1,0,1,0,1,1,0,1,1,0,1,1,0,0,0,1,1,0,0,0,0,1,0,1,1,0,1,0,1,1,1,1,0,1,0,0,0,0,1,1,0,0,0,0,0,0,1,1,1,0,1,1,1,0,0,0,1,1,0,0,0,0,1,0,0,1,1,0,1,1,1,0,0,0,0,1,1,1,1,1,0,1,1,1,0,1,0,0,1,1,0,1,1,0,0,1,0,0,0,0,0,1,1,1,0,0,0,1,0,0,1,0,1,1,1,0,0,1,0,1,0,1,0,1,0,0,0,1,1,0,1,1,0,0,1,1,0,1,1,1,0,0,0,1,1,1,1,0,1,1,0,1,1,1,1,1,0,0,1,1,1,1,1,1,1,0,1,0,1,0,1,0,0,0,0,0,1,1,1,0,0,1,0,1,1,1,1,1,0,0,1,1,1,0,0,1,0,1,1,0,0,1,1,0,1,1,0,1,1,1,0,0,0,0,1,1,0,1,1,1,0,0,0,0,0,1,1,1,1,1,1,0,0,1,1,1,1,0,1,0,0,1,0,0,1,1,0,1,0,1,0,1,1,0,0,1,1,1,0,1,0,1,1,0,1,0,1,0,1,1,0,0,1,1,1,0,0,0,0,0,0,0,1,0,1,1,0,1,0,0,1,1,0,1,0,0,0,0,0,0,0,1,0,1,1,1,1,1,0,1,1,0,1,1,1,0,0,0,1,1,1,0,1,0,0,1,0,1,1,1,0,0,0,1,1,0,1,0,0,1,1,0,0,1,1,0,1,1,1,1,0,0,1,0,0,1,1,1,0,0,0,0,0,1,0,0,0,1,1,0,0,0,0,1,0,0,0,1,1,1,1,0,0,1,0,0,1,1,0,1,0,0,1,0,0,0,1,1,1,0,1,0,1,0,0,1,1,1,1,0,0,0,0,1,0,0,0,1,1,0,0,0,1,0,0,0,0,0,1,1,1,0,1,0,1,0,0,1,0,0,1,0,1,0,1,0,0,0,1,0,1,0,0,1,1,0,1,1,0,1,1,1,1,0,1,0,1,1,0,0,1,0,0,0,0,0,1,1,0,1,1,1,0,1,0,0,0,0,0,1,1,0,0,1,1,1,1,1,1,0,1,1,0,1,0,0,1,1,1,1,0,0,1,1,0,1,1,0,0,1,1,0,1,1,0,1,1,0,1,0,0,0,0,0,1,0,1,0,1,1,0,1,1,0,0,0,0,1,0,1,1,0,1,0,0,1,1,1,0,0,1,0,0,1,1,0,1,0,1,0,0,0,1,0,1,1,0,0,1,0,1,1,1,1,1,0,1,1,1,0,0,1,0,1,0,1,0,0,1,0,0,0,0,1,1,1,1,1,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,1,0,0,1,0,1,1,0,1,1,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,1,1,1,1,1,1,0,1,0,1,1,1,0,0,1,0,0,1,1,1,0,1,1,1,0,1,0,0,1,0,0,1,0,0,0,1,0,1,1,0,0,1,0,1,1,0,1,1,0,0,1,1,1,0,0,0,1,1,1,0,0,1,1,1,1,0,0,1,1,1,0,0,0,1,1,1,0,1,1,1,1,0,0,1,1,0,0,0,0,0,0,1,0,0,1,1,0,1,1,0,1,0,1,0,0,0,0,0,1,0,1,1,0,0,1,1,0,0,1,1,0,0,0,1,0,0,1,1,0,1,0,0,0,1,0,0,0,1,1,1,0,0,1,1,0,1,1,0,1,1,1,0,1,1,0,0,1,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,1,1,0,1,1,1,0,1,0,0,0,1,1,1,0,0,0,0,0,0,1,0,1,1,0,0,1,1,1,1,0,0,0,1,1,1,0,1,0,0,0,0,0,1,0,0,1,1,0,1,1,1,1,0,1,1,0,0,0,0,0,1,0,0,0,0,1,1,1,1,0,0,1,1,0,0,0,0,1,1,1,1,0,1,1,1,0,1,0,1,0,1,1,1,0,1,1,0,0,0,1,1,1,0,1,1,0,0,0,1,0,1,0,0,0,0,1,1,0,1,1,1,1,1,1,1,0,0,0,1,1,0,0,1,0,1,1,0,1,0,0,0,1,0,1,1,1,1,1,0,1,1,0,1,1,0,0,1,1,1,0,0,0,0,0,1,1,1,1,0,0,1,0,0,0,1,1,1,0,0,0,1,1,0,1,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,1,0,1,0,0,0,1,0,1,1,1,0,0,1,1,0,1,0,1,0,0,1,1,1,0,1,0,0,0,1,0,1,1,0,1,1,0,0,0,1,1,1,0,0,1,0,0,1,1,0,1,0,1,1,1,1,1,1,0,0,1,0,0,0,0,1,0,1,1,1,0,1,1,0,1,1,0,0,1,0,0,0,0,0,1,0,0,0,1,1,0,0,1,0,1,0,1,0,0,1,1,0,1,1,1,1,0,1,1,0,1,0,1,0,0,1,0,0,1,1,1,1,0,0,0,1,0,1,0,1,0,1,1,1,1,0,0,0,0,0,1,0,1,0,1,0,1,0,0,0,0,1,1,1,0,0,1,1,0,1,1,1,0,1,1,0,0,1,1,1,1,0,1,0,1,1,1,0,0,0,0,1,0,0,0,1,1,0,1,0,0,1,0,0,0,1,1,1,0,1,1,0,1,1,0,0,0,1,1,1,0,1,0,0,1,0,0,0,1,1,0,0,1,0,0,0,0,1,1,0,0,1,0,0,1,0,0,1,1,0,0,1,1,1,0,0,0,0,0,1,0,1,0,0,1,1,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,0,1,0,0,0,0,0,1,0,0,1,0,1,0,1,0,1,0,0,1,1,0,1,1,1,0,1,1,1,0,0,0,1,1,1,0,1,0,1,1,0,1,0,0,1,0,0,0,0,0,0,0,0,1,1,0,0,0,1,1,1,1,1,0,1,0,1,1,0,0,1,1,0,0,0,1,1,1,0,1,1,1,1,1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,1,1,0,0,0,0,0,0,1,0,1,1,0,0,0,1,1,0,0,0,0,0,1,0,1,0,0,1,1,0,0,0,0,1,0,1,1,1,0,0,1,1,0,1,0,0,0,1,0,0,1,0,0,1,1,0,0,0,1,1,0,1,0,1,1,0,0,1,1,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,1,1,1,0,0,0,0,1,0,1,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,1,1,0,0,0,0,0,0,1,1,0,1,1,1,0,0,1,1,0,0,1,1,1,0,1,0,1,1,0,1,0,1,0,1,0,0,0,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,0,0,1,0,1,0,1,0,0,0,1,1,1,0,1,1,0,1,0,1,0,1,0,1,1,0,1,0,1,0,0,1,1,0,0,0,1,0,1,1,1,0,0,0,0,0,0,0,1,1,1,1,0,1,0,1,0,0,0,1,1,1,0,0,0,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,1,0,0,1,1,1,0,0,0,0,1,0,1,1,0,0,1,0,0,0,1,1,1,1,1,0,0,0,0,1,0,1,0,0,1,1,0,1,1,0,0,0,1,0,1,0,1,0,1,1,0,0,0,1,0,1,1,0,1,0,1,1,0,0,1,1,0,1,1,0,0,1,1,1,0,0,1,0,1,1,1,0,0,0,1,0,0,1,0,1,1,1,1,1,1,0,0,0,1,0,1,1,0,1,0,1,0,0,1,0,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,1,0,0,1,0,1,0,0,1,0,1,0,1,1,1,1,1,0,1,0,0,0,0,1,1,0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,0,0,1,0,1,1,1,0,1,1,0,0,1,1,0,0,0,1,1,0,1,0,0,1,0,1,1,1,0,1,1,1,1,0,0,0,1,0,1,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,1,1,0,0,0,1,0,0,0,0,1,1,1,0,1,0,0,0,0,1,1,0,0,1,0,1,1,1,0,1,1,0,1,0,1,1,1,1,0,0,1,0,1,1,0,1,1,1,1,0,0,0,1,0,1,1,0,0,1,0,1,1,0,1,1,0,0,1,1,0,1,1,0,1,0,0,1,1,0,1,0,0,1,0,0,1,1,0,1,0,0,0,0,0,1,0,1,1,1,1,0,0,1,0,0,1,0,0,1,1,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,0,0,1,0,0,1,1,1,0,1,1,1,1,0,0,1,0,1,0,0,1,0,0,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,1,1,0,1,1,0,1,0,1,0,1,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,1,1,0,1,1,0,1,0,0,1,0,0,0,0,0,1,1,0,1,1,0,0,0,1,1,1,1,0,0,1,1,1,1,0,0,1,0,1,0,0,0,0,0,1,0,0,1,1,1,0,0,1,1,1,1,0,0,1,1,1,1,0,0,1,0,0,0,0,0,0,1,1,0,0,0,1,1,0,1,1,0,1,0,0,1,0,1,0,0,1,1,0,1,0,0,0,1,0,1,1,1,0,0,0,1,1,1,1,1,1,0,1,1,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,1,0,1,1,1,1,0,1,0,1,1,0,1,1,0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,1,0,1,1,0,0,1,1,1,1,0,0,1,1,0,0,0,1,0,1,0,0,1,1,0,1,0,0,0,0,1,1,0,1,0,1,0,1,1,0,1,0,1,1,1,1,0,0,0,0,0,0,0,1,0,0,0,1,1,1,1,0,1,0,1,1,1,0,0,1,0,1,0,1,1,1,0,1,1,1,0,1,0,0,0,1,1,1,0,1,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,1,0,1,1,0,0,0,1,0,0,1,0,0,0,0,1,1,0,1,0,0,1,0,1,0,0,0,0,1,1,1,1,0,1,0,1,1,1,0,0,0,0,1,1,1,0,0,0,0,1,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,1,0,1,1,1,1,0,1,0,0,0,0,1,1,1,0,1,1,1,0,0,1,1,1,1,1,1,0,1,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,1,1,0,1,0,1,1,0,0,0,0,1,0,0,0,0,0,0,1,0,0,1,0,1,1,0,1,0,0,0,0,0,0,0,1,1,0,0,1,0,1,0,1,0,0,1,0,1,0,0,1,1,0,1,0,1,0,0,1,1,0,0,0,1,0,1,1,0,1,0,1,1,0,1,1,1,1,1,0,0,1,];
var gg_b = "1759258801/";

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
